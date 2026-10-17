"use client";

import { useEffect, useRef, useState } from "react";
import { visitors } from "@/lib/content";
import { motionOn } from "@/lib/motion";

const SEEN = "avadhut-visited";
const BASE_COUNT = 100;

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

    const base = `https://abacus.jasoncameron.dev/${counted ? "get" : "hit"}/${
      visitors.namespace
    }/${visitors.key}`;

    fetch(base)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (typeof d?.value !== "number") return;
        // Add base count of 100 to the fetched count
        setCount(d.value + BASE_COUNT);
        try {
          sessionStorage.setItem(SEEN, "1");
        } catch {
          /* nothing to do — the count is already shown */
        }
      })
      .catch(() => {
        /* leave the row out rather than show a broken number */
      });
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

  // if (count === null) return null;

  return (
    <span className="visit-counter inline-flex items-center">
      {" "}
      <div
        className={`mr-2 h-2.5 w-2.5 rounded-full ${
          blinkState ? "bg-emerald-400 animate-blink" : "bg-emerald-400/20"
        }`}
        aria-hidden="true"
      />{" "}
      <span className="visit-counter-num text-[24px] font-bold text-emerald-400">
        {" "}
        {shown.toLocaleString()}{" "}
      </span>{" "}
      <span className="visit-counter-label ml-2 text-[16px] text-white">
        {" "}
        visits, and counting{" "}
      </span>{" "}
    </span>
  );
}
