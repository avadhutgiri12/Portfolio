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
  maxWaitTime = 10000,
}: LoaderProps) {
  const [state, setState] = useState<LoaderState>("loading");
  const [progress, setProgress] = useState(0);

  // Text inversion has its own timeline. It starts when the red diagonal
  // reaches the centered percentage, then sweeps across the text.
  const textProgress = Math.max(0, Math.min(100, ((progress - 40) / 20) * 100));

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

  // Keep state refs synchronized.
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Check whether the relevant assets are ready.
  const checkAssetsReady = useCallback((): Promise<boolean> => {
    const fontsReady = document.fonts?.ready
      ? document.fonts.ready.then(() => true).catch(() => true)
      : Promise.resolve(true);

    const heroImg = document.querySelector(
      'img[src="/profile.png"]'
    ) as HTMLImageElement | null;

    const heroImageReady = heroImg
      ? new Promise<boolean>((resolve) => {
          if (heroImg.complete) {
            resolve(true);
            return;
          }

          const cleanup = () => {
            heroImg.removeEventListener("load", handleLoad);
            heroImg.removeEventListener("error", handleError);
          };

          const handleLoad = () => {
            cleanup();
            resolve(true);
          };

          const handleError = () => {
            cleanup();
            resolve(true);
          };

          heroImg.addEventListener("load", handleLoad, { once: true });
          heroImg.addEventListener("error", handleError, { once: true });

          // Check again in case the image completed while listeners were added.
          if (heroImg.complete) {
            cleanup();
            resolve(true);
          }
        })
      : Promise.resolve(true);

    return Promise.all([fontsReady, heroImageReady]).then(() => true);
  }, []);

  // Animate progress from its current value to the requested target.
  // The React progress state controls both the red wipe and percentage split.
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

        const nextProgress = Math.round(
          startProgress + (targetProgress - startProgress) * eased
        );

        progressRef.current = nextProgress;
        setProgress(nextProgress);

        if (t < 1) {
          rafIdRef.current = requestAnimationFrame(tick);
        } else {
          rafIdRef.current = null;
        }
      };

      rafIdRef.current = requestAnimationFrame(tick);
    },
    []
  );

  // Complete the loading sequence once.
  const finishLoading = useCallback(
    (duration = 400) => {
      if (!mountedRef.current || stateRef.current !== "loading") return;

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

  // Initialize loading sequence.
  useEffect(() => {
    mountedRef.current = true;
    startTimeRef.current = Date.now();
    assetsReadyRef.current = false;
    progressRef.current = 0;
    stateRef.current = "loading";

    setProgress(0);
    setState("loading");

    document.documentElement.classList.add("loader-active");

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let disposed = false;

    const initLoader = async () => {
      try {
        await checkAssetsReady();
      } catch {
        // Asset failures should never prevent the user from entering.
      }

      if (disposed || !mountedRef.current) return;

      assetsReadyRef.current = true;

      const elapsed = Date.now() - startTimeRef.current;
      const remainingMinTime = Math.max(0, minDisplayTime - elapsed);

      if (remainingMinTime === 0) {
        finishLoading(600);
        return;
      }

      // Continue moving while the minimum display time elapses.
      animateProgress(90, Math.max(remainingMinTime, 1200));

      const checkReady = () => {
        if (disposed || !mountedRef.current) return;

        const elapsedNow = Date.now() - startTimeRef.current;
        const minTimePassed = elapsedNow >= minDisplayTime;

        if (assetsReadyRef.current && minTimePassed) {
          finishLoading(400);
          return;
        }

        if (elapsedNow >= maxWaitTime) {
          finishLoading(400);
          return;
        }

        timeoutRef.current = setTimeout(checkReady, 100);
      };

      timeoutRef.current = setTimeout(
        checkReady,
        Math.min(Math.max(remainingMinTime, 100), 1200)
      );
    };

    void initLoader();

    // Safety timeout: never leave the loader stuck indefinitely.
    maxTimeoutRef.current = setTimeout(() => {
      if (!disposed && mountedRef.current) {
        finishLoading(400);
      }
    }, maxWaitTime);

    return () => {
      disposed = true;
      mountedRef.current = false;

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

  // Handle ENTER click.
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

  // Handle keyboard activation.
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

  // Clean up scroll lock when loader becomes hidden.
  // This effect runs when state changes to "hidden" and restores scrolling.
  useEffect(() => {
    if (state === "hidden") {
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "";
    }
  }, [state]);

  // If hidden, render nothing.
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
          ? `Loading portfolio, ${progress}%`
          : state === "readyToEnter"
            ? "Portfolio ready. Enter to continue."
            : "Portfolio transition"
      }
      onKeyDown={handleKeyDown}
    >
      {/* Crimson wipe follows background progress; text inversion has a separate timeline. */}
      <div className="loader-wipe" aria-hidden="true" />

      {/* Centered content. */}
      <div className="loader-content">
        {/* CSS pseudo-elements split the text using --text-progress, not --progress. */}
        <div
          className="loader-percentage"
          data-value={`${progress}%`}
          aria-hidden="true"
        >
          {progress}%
        </div>

        {/* ENTER button appears when loading is complete. */}
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