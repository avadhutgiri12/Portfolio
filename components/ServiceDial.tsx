"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { scrollToId } from "@/lib/smooth";
import styles from "./service.module.css";

export type DialItem = { id: string; label: string; number: string; title: string };

// three.js + fiber only load on the client, and only when the dial is shown.
const ServiceDialCanvas = dynamic(() => import("./ServiceDialCanvas"), {
  ssr: false,
  loading: () => null,
});

type Mode = "pending" | "dial" | "list";

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Hero dial. Desktop with motion allowed: a three.js ring that turns with
 * scroll. Under 768px, with prefers-reduced-motion, or without WebGL: a flat
 * numbered list (no rotation, no overlap, nothing upside down).
 */
export default function ServiceDial({ items }: { items: DialItem[] }) {
  const [mode, setMode] = useState<Mode>("pending");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const gl = webglAvailable();
    const decide = () => setMode(!gl || small.matches || reduced.matches ? "list" : "dial");
    decide();
    small.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      small.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  const go = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) scrollToId(item.id);
    },
    [items],
  );

  const current = items[active];

  return (
    <div className={styles.dial} data-mode={mode}>
      {mode === "dial" && (
        <div className={styles.dialStage}>
          <ServiceDialCanvas items={items} onActiveChange={setActive} onPick={go} />
        </div>
      )}
      {mode === "pending" && <div className={styles.dialStage} aria-hidden="true" />}
      {mode === "dial" && current && (
        <p className={styles.dialReadout} aria-live="polite">
          <span>{current.number}</span> {current.title}
        </p>
      )}

      <nav
        className={mode === "list" ? styles.dialList : styles.srOnly}
        aria-label="Jump to a service"
      >
        <ol>
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(i);
                }}
              >
                <span className={styles.dialListNumber}>{item.number}</span>
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
