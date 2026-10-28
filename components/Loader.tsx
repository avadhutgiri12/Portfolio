
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LoaderState = "loading" | "readyToEnter" | "exiting" | "hidden";

interface LoaderProps {
  minDisplayTime?: number;
  maxWaitTime?: number;
}

export default function Loader({
  minDisplayTime = 900,
  maxWaitTime = 30000,
}: LoaderProps) {
  const [state, setState] = useState<LoaderState>("loading");
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const mountedRef = useRef(false);
  const assetsReadyRef = useRef(false);
  const finishStartedRef = useRef(false);

  /**
   * Wait for images inside the Home page only.
   *
   * The Home page must have:
   * <main data-home-page>...</main>
   */
  const checkAssetsReady = useCallback(async (): Promise<void> => {
    // Wait until the Home page container is mounted.
    const waitForHomePage = async (): Promise<HTMLElement | null> => {
      const existing = document.querySelector<HTMLElement>(
        "[data-home-page]"
      );

      if (existing) return existing;

      // Home content may not have mounted yet.
      return new Promise<HTMLElement | null>((resolve) => {
        let finished = false;

        const observer = new MutationObserver(() => {
          const homePage = document.querySelector<HTMLElement>(
            "[data-home-page]"
          );

          if (homePage && !finished) {
            finished = true;
            observer.disconnect();
            clearTimeout(fallbackTimer);
            resolve(homePage);
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });

        const fallbackTimer = setTimeout(() => {
          if (!finished) {
            finished = true;
            observer.disconnect();

            resolve(
              document.querySelector<HTMLElement>("[data-home-page]")
            );
          }
        }, maxWaitTime);
      });
    };

    const homePage = await waitForHomePage();

    if (!homePage) {
      // No Home page container was found.
      return;
    }

    // Wait for fonts.
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    // Collect only Home page images.
    const waitForImage = (img: HTMLImageElement): Promise<void> => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }

        const handleComplete = () => {
          img.removeEventListener("load", handleComplete);
          img.removeEventListener("error", handleComplete);
          resolve();
        };

        img.addEventListener("load", handleComplete, { once: true });
        img.addEventListener("error", handleComplete, { once: true });
      });
    };

    const images = Array.from(
      homePage.querySelectorAll<HTMLImageElement>("img")
    );

    await Promise.all(images.map(waitForImage));
  }, [maxWaitTime]);

  /**
   * Animate the progress number smoothly.
   */
  const animateProgress = useCallback(
    (target: number, duration: number, onComplete?: () => void) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      const startProgress = progress;
      const startTime = performance.now();
      const difference = target - startProgress;

      const tick = (now: number) => {
        if (!mountedRef.current) return;

        const elapsed = now - startTime;
        const ratio = Math.min(elapsed / duration, 1);

        // Ease-out curve.
        const eased = 1 - Math.pow(1 - ratio, 3);
        const nextProgress = startProgress + difference * eased;

        setProgress(Math.min(100, Math.max(0, nextProgress)));

        if (ratio < 1) {
          rafIdRef.current = requestAnimationFrame(tick);
        } else {
          rafIdRef.current = null;
          setProgress(target);
          onComplete?.();
        }
      };

      rafIdRef.current = requestAnimationFrame(tick);
    },
    [progress]
  );

  /**
   * Finish loading and prepare the ENTER screen.
   */
  const finishLoading = useCallback(
    (duration = 600) => {
      if (!mountedRef.current || finishStartedRef.current) return;

      finishStartedRef.current = true;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      animateProgress(100, duration, () => {
        if (mountedRef.current) {
          setState("readyToEnter");
        }
      });
    },
    [animateProgress]
  );

  /**
   * Start loader and wait for Home page assets.
   */
  useEffect(() => {
    mountedRef.current = true;
    startTimeRef.current = Date.now();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let disposed = false;

    // Safety timeout: prevents an indefinitely stuck loader.
    maxTimeoutRef.current = setTimeout(() => {
      if (!disposed && mountedRef.current) {
        finishLoading(600);
      }
    }, maxWaitTime);

    // Show progress while Home page assets are loading.
    progressIntervalRef.current = setInterval(() => {
      if (disposed || finishStartedRef.current) return;

      setProgress((current) => {
        if (current >= 90) return current;

        const increment = Math.max(0.15, (90 - current) * 0.025);
        return Math.min(90, current + increment);
      });
    }, 100);

    const initLoader = async () => {
      try {
        await checkAssetsReady();
      } catch (error) {
        console.error("Error loading Home page assets:", error);
      }

      if (disposed || !mountedRef.current) return;

      assetsReadyRef.current = true;

      // Ensure the loader remains visible for at least minDisplayTime.
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      timeoutRef.current = setTimeout(() => {
        if (disposed || !mountedRef.current) return;
        finishLoading(600);
      }, remaining);
    };

    void initLoader();

    return () => {
      disposed = true;
      mountedRef.current = false;

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      document.body.style.overflow = previousOverflow;
    };
  }, [checkAssetsReady, finishLoading, maxWaitTime, minDisplayTime]);

  /**
   * ENTER button.
   */
  const handleEnter = useCallback(() => {
    if (state !== "readyToEnter") return;

    setState("exiting");

    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) {
        setState("hidden");
        document.body.style.overflow = "";
      }
    }, 1200);
  }, [state]);

  // Allow Enter key to continue.
  useEffect(() => {
    if (state !== "readyToEnter") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, handleEnter]);

  if (state === "hidden") return null;

  return (
    <div
      className={`loader-overlay loader-state-${state}`}
      style={
        {
          "--progress": `${progress}%`,
          "--text-progress": `${progress}%`,
        } as React.CSSProperties
      }
      aria-label="Loading Home page"
      aria-busy={state === "loading"}
    >
      <div className="loader-wipe" />

      <div className="loader-content">
        <div
          className="loader-percentage"
          data-value={`${Math.floor(progress)}%`}
          aria-live="polite"
        >
          {Math.floor(progress)}%
        </div>

        {state === "readyToEnter" && (
          <button
            type="button"
            className="loader-enter"
            onClick={handleEnter}
          >
            <span className="loader-enter-text">ENTER</span>
            <span className="loader-enter-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
