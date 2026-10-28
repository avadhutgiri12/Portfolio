
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type LoaderState = "loading" | "readyToEnter" | "exiting" | "hidden";

interface LoaderProps {
  /** Minimum time (ms) to show loader before allowing transition to readyToEnter */
  minDisplayTime?: number;
  /** Maximum time (ms) before forcing completion even if assets aren't ready */
  maxWaitTime?: number;
}

export default function Loader({
  minDisplayTime = 900,
  maxWaitTime = 3500,
}: LoaderProps) {
  const [state, setState] = useState<LoaderState>("loading");
  const [progress, setProgress] = useState(0);

  // Always display whole-number percentages.
  const displayProgress = Math.floor(progress);

  // Text inversion has its own timeline, separate from the red wipe.
  const textProgress = Math.max(
    0,
    Math.min(100, ((progress - 40) / 20) * 100)
  );

  const startTimeRef = useRef<number>(Date.now());
  const rafIdRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const isExitingRef = useRef(false);
  const enteredRef = useRef(false);
  const progressRef = useRef(0);
  const stateRef = useRef<LoaderState>("loading");
  const mountedRef = useRef(false);
  const assetsReadyRef = useRef(false);
  const minTimePassedRef = useRef(false);
  const finishStartedRef = useRef(false);

  // Keep state ref synchronized.
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  /**
   * Wait for the Home page container to appear.
   * The Home page must use: <main data-home-page>
   */
  const waitForHomePage = useCallback(
    (): Promise<HTMLElement | null> => {
      const existing = document.querySelector<HTMLElement>(
        "[data-home-page]"
      );

      if (existing) {
        return Promise.resolve(existing);
      }

      return new Promise((resolve) => {
        let settled = false;
        let observer: MutationObserver | null = null;

        const cleanup = () => {
          observer?.disconnect();
          clearTimeout(timer);
        };

        const finish = (element: HTMLElement | null) => {
          if (settled) return;

          settled = true;
          cleanup();
          resolve(element);
        };

        const findHomePage = () => {
          const element = document.querySelector<HTMLElement>(
            "[data-home-page]"
          );

          if (element) finish(element);
        };

        const timer = setTimeout(() => {
          finish(
            document.querySelector<HTMLElement>("[data-home-page]")
          );
        }, maxWaitTime);

        observer = new MutationObserver(findHomePage);

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });

        findHomePage();
      });
    },
    [maxWaitTime]
  );

  /**
   * Wait for images inside the Home page only.
   */
  const checkAssetsReady = useCallback(async (): Promise<boolean> => {
    const homePage = await waitForHomePage();

    if (!homePage || !mountedRef.current) {
      return false;
    }

    // Wait for fonts, with a timeout so a slow font cannot block indefinitely.
    const fontsReady = document.fonts?.ready
      ? Promise.race([
          document.fonts.ready.then(() => true).catch(() => true),
          new Promise<boolean>((resolve) =>
            setTimeout(() => resolve(true), 1200)
          ),
        ])
      : Promise.resolve(true);

    const waitForImage = (img: HTMLImageElement): Promise<void> =>
      new Promise((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }

        let settled = false;

        const cleanup = () => {
          img.removeEventListener("load", handleComplete);
          img.removeEventListener("error", handleComplete);
        };

        const handleComplete = () => {
          if (settled) return;

          settled = true;
          cleanup();
          resolve();
        };

        img.addEventListener("load", handleComplete);
        img.addEventListener("error", handleComplete);

        // Check again in case the image completed while listeners were added.
        if (img.complete) {
          handleComplete();
        }
      });

    /**
     * Track images already present and newly inserted into the Home page.
     */
    const waitForHomeImages = (): Promise<void> =>
      new Promise((resolve) => {
        let settled = false;
        let quietTimer: ReturnType<typeof setTimeout> | null = null;
        let activeBatch = Promise.resolve();

        const observer = new MutationObserver((records) => {
          const newImages: HTMLImageElement[] = [];

          for (const record of records) {
            for (const node of Array.from(record.addedNodes)) {
              if (!(node instanceof Element)) continue;

              if (node instanceof HTMLImageElement) {
                newImages.push(node);
              }

              newImages.push(
                ...Array.from(
                  node.querySelectorAll<HTMLImageElement>("img")
                )
              );
            }
          }

          if (newImages.length > 0) {
            trackImages(newImages);
          }
        });

        const finish = () => {
          if (settled) return;

          settled = true;
          observer.disconnect();

          if (quietTimer !== null) {
            clearTimeout(quietTimer);
          }

          resolve();
        };

        const scheduleQuietCheck = () => {
          if (quietTimer !== null) {
            clearTimeout(quietTimer);
          }

          quietTimer = setTimeout(() => {
            const pendingImages = Array.from(
              homePage.querySelectorAll<HTMLImageElement>("img")
            ).filter((img) => !img.complete);

            if (pendingImages.length > 0) {
              trackImages(pendingImages);
              return;
            }

            finish();
          }, 100);
        };

        const trackImages = (images: HTMLImageElement[]) => {
          if (settled || images.length === 0) return;

          activeBatch = activeBatch.then(async () => {
            await Promise.all(images.map(waitForImage));

            if (!settled) {
              scheduleQuietCheck();
            }
          });
        };

        observer.observe(homePage, {
          childList: true,
          subtree: true,
        });

        trackImages(
          Array.from(homePage.querySelectorAll<HTMLImageElement>("img"))
        );

        // Also handles a Home page with no images.
        scheduleQuietCheck();
      });

    await Promise.all([fontsReady, waitForHomeImages()]);

    return mountedRef.current;
  }, [waitForHomePage]);

  /**
   * Animate progress from its current value to the requested target.
   * Keep precise values internally; round only the displayed percentage.
   */
  const animateProgress = useCallback(
    (targetProgress: number, duration: number) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      const startProgress = progressRef.current;
      const startTime = performance.now();
      const safeDuration = Math.max(1, duration);

      const tick = (now: number) => {
        if (!mountedRef.current) return;

        const elapsed = now - startTime;
        const t = Math.min(elapsed / safeDuration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        const nextProgress =
          startProgress + (targetProgress - startProgress) * eased;

        progressRef.current = nextProgress;
        setProgress(nextProgress);

        if (t < 1) {
          rafIdRef.current = requestAnimationFrame(tick);
        } else {
          progressRef.current = targetProgress;
          setProgress(targetProgress);
          rafIdRef.current = null;
        }
      };

      rafIdRef.current = requestAnimationFrame(tick);
    },
    []
  );

  /**
   * Complete loading once.
   */
  const finishLoading = useCallback(
    (duration = 400, force = false) => {
      if (
        !mountedRef.current ||
        stateRef.current !== "loading" ||
        finishStartedRef.current
      ) {
        return;
      }

      if (
        !force &&
        (!assetsReadyRef.current || !minTimePassedRef.current)
      ) {
        return;
      }

      finishStartedRef.current = true;

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (maxTimeoutRef.current !== null) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }

      animateProgress(100, duration);

      if (animationTimeoutRef.current !== null) {
        clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = setTimeout(() => {
        if (!mountedRef.current || stateRef.current !== "loading") return;

        progressRef.current = 100;
        setProgress(100);

        stateRef.current = "readyToEnter";
        setState("readyToEnter");
      }, duration);
    },
    [animateProgress]
  );

  /**
   * Initialize the loader.
   */
  useEffect(() => {
    mountedRef.current = true;
    startTimeRef.current = Date.now();

    assetsReadyRef.current = false;
    minTimePassedRef.current = false;
    finishStartedRef.current = false;

    progressRef.current = 0;
    stateRef.current = "loading";

    isExitingRef.current = false;
    enteredRef.current = false;

    setProgress(0);
    setState("loading");

    document.documentElement.classList.add("loader-active");

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let disposed = false;

    // Show progress while Home page assets are loading.
    const progressInterval = setInterval(() => {
      if (disposed || finishStartedRef.current) return;

      setProgress((current) => {
        if (current >= 90) return current;

        const next = Math.min(
          90,
          current + Math.max(0.15, (90 - current) * 0.025)
        );

        progressRef.current = next;
        return next;
      });
    }, 100);

    const initLoader = async () => {
      try {
        await checkAssetsReady();
      } catch {
        // Asset failures should never permanently block entry.
      }

      if (disposed || !mountedRef.current) return;

      assetsReadyRef.current = true;

      const elapsed = Date.now() - startTimeRef.current;
      const remainingMinTime = Math.max(0, minDisplayTime - elapsed);

      if (remainingMinTime > 0) {
        timeoutRef.current = setTimeout(() => {
          if (disposed || !mountedRef.current) return;

          minTimePassedRef.current = true;
          finishLoading(400);
        }, remainingMinTime);
      } else {
        minTimePassedRef.current = true;
        finishLoading(600);
      }
    };

    void initLoader();

    // Safety fallback if assets never finish loading.
    maxTimeoutRef.current = setTimeout(() => {
      if (!disposed && mountedRef.current) {
        minTimePassedRef.current = true;
        finishLoading(400, true);
      }
    }, maxWaitTime);

    return () => {
      disposed = true;
      mountedRef.current = false;

      clearInterval(progressInterval);

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (maxTimeoutRef.current !== null) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }

      if (animationTimeoutRef.current !== null) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }

      if (enterTimeoutRef.current !== null) {
        clearTimeout(enterTimeoutRef.current);
        enterTimeoutRef.current = null;
      }

      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [
    minDisplayTime,
    maxWaitTime,
    animateProgress,
    checkAssetsReady,
    finishLoading,
  ]);

  /**
   * Handle ENTER click.
   */
  const handleEnter = useCallback(() => {
    if (
      isExitingRef.current ||
      enteredRef.current ||
      stateRef.current !== "readyToEnter"
    ) {
      return;
    }

    isExitingRef.current = true;
    enteredRef.current = true;

    stateRef.current = "exiting";
    setState("exiting");

    enterTimeoutRef.current = setTimeout(() => {
      if (!mountedRef.current) return;

      stateRef.current = "hidden";
      setState("hidden");
    }, 1200);
  }, []);

  /**
   * Handle keyboard activation.
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        stateRef.current === "readyToEnter" &&
        event.target === event.currentTarget
      ) {
        event.preventDefault();
        handleEnter();
      }
    },
    [handleEnter]
  );

  // Restore scrolling when the loader is hidden.
  useEffect(() => {
    if (state === "hidden") {
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "";
    }
  }, [state]);

  if (state === "hidden") {
    return null;
  }

  return (
    <div
      className="loader-overlay"
      data-state={state}
      style={
        {
          "--progress": `${progress}%`,
          "--text-progress": `${textProgress}%`,
        } as React.CSSProperties
      }
      role="status"
      aria-live={state === "loading" ? "polite" : "off"}
      aria-label={
        state === "loading"
          ? `Loading Home page, ${displayProgress}%`
          : state === "readyToEnter"
            ? "Home page ready. Enter to continue."
            : "Home page transition"
      }
      onKeyDown={handleKeyDown}
    >
      {/* Crimson wipe follows background progress. */}
      <div className="loader-wipe" aria-hidden="true" />

      <div className="loader-content">
        {/* Both visible text and data-value use whole-number percentages. */}
        <div
          className="loader-percentage"
          data-value={`${displayProgress}%`}
          aria-hidden="true"
        >
          {displayProgress}%
        </div>

        <button
          className="loader-enter"
          type="button"
          onClick={handleEnter}
          aria-label="Enter portfolio"
          disabled={state !== "readyToEnter"}
          tabIndex={state === "readyToEnter" ? 0 : -1}
        >
          <span className="loader-enter-text">ENTER</span>

          <span className="loader-enter-arrow" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}