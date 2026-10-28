"use client";

import { useEffect, useRef, useState } from "react";
import { visitors } from "@/lib/content";
import { motionOn } from "@/lib/motion";

const SEEN = "avadhut-visited";
const BASE_COUNT = 100;
const CACHE = "avadhut-visit-count";

export default function Visitors() {
  const [count, setCount] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const [blinkState, setBlinkState] = useState(true);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (true) {
      const interval = setInterval(() => {
        setBlinkState((prev) => !prev);
      }, 1000); // Blink every second
      return () => clearInterval(interval);
    }
  }, [true]);

  useEffect(() => {
    if (!visitors.namespace || !visitors.key) return;

    let counted = false;
    try {
      counted = sessionStorage.getItem(SEEN) === "1";
    } catch {
      /* private mode — count the visit, it is the honest default */
    }

    let cancelled = false;

    // Show the last known count right away so the footer never reads 0.
    let cached = 0;
    try {
      cached = Number(localStorage.getItem(CACHE)) || 0;
    } catch {
      /* storage unavailable */
    }
    if (cached > 0) {
      void Promise.resolve().then(() => {
        if (!cancelled) setCount((c) => c ?? cached);
      });
    }

    const url = `https://abacus.jasoncameron.dev/${counted ? "get" : "hit"}/${
      visitors.namespace
    }/${visitors.key}`;
    const getUrl = `https://abacus.jasoncameron.dev/get/${visitors.namespace}/${visitors.key}`;

    // The free counter API sometimes hangs for 15s+, so time out and retry.
    const load = async (target: string, attempt: number): Promise<void> => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 5000);
      try {
        const r = await fetch(target, { signal: ctrl.signal, cache: "no-store" });
        const d = r.ok ? await r.json() : null;
        if (typeof d?.value !== "number") throw new Error("bad response");
        if (cancelled) return;
        const total = d.value + BASE_COUNT;
        setCount(total);
        try {
          sessionStorage.setItem(SEEN, "1");
          localStorage.setItem(CACHE, String(total));
        } catch {
          /* nothing to do — the count is already shown */
        }
      } catch {
        // A timed-out "hit" may still have counted, so retry with "get".
        if (!cancelled && attempt < 2) await load(getUrl, attempt + 1);
      } finally {
        clearTimeout(timer);
      }
    };

    void load(url, 0);
    return () => {
      cancelled = true;
    };
  }, []);

  /* count up to the real number rather than just popping it in */
  useEffect(() => {
    if (count === null) return;
    if (!motionOn()) {
      setShown(count);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(count * eased));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [count]);

  // Hide the number until a real count arrives instead of showing 0.
  if (count === null) return null;

  return (
    <span className="visit-counter inline-flex items-center">
      {" "}
      <div
        className={`mr-2 h-2.5 w-2.5 rounded-full ${
          blinkState ? "bg-[#fe4c17] animate-blink" : "bg-[#fe4c17]/20"
        }`}
        aria-hidden="true"
      />{" "}
      <span className="visit-counter-num text-[32px] font-bold bebas-neue text-[#fe4c17]">
        {" "}
        {shown.toLocaleString()}{" "}
      </span>{" "}
      <span className="visit-counter-label ml-2 text-[16px] text-black/80 mt-2 jetbrains-mono">
        {" "}
        visits, and counting{" "}
      </span>{" "}
    </span>
  );
}
