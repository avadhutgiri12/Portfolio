"use client";

import { Children, isValidElement, useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface SectionStackProps {
  children: ReactNode;
  /** How much the outgoing section shrinks (0.08 = scales down to 92%) */
  scaleAmount?: number;
  /** Max blur (px) applied to the outgoing section */
  blurAmount?: number;
  /** Max dimming applied to the outgoing section (0.4 = fades to 60% opacity) */
  dimAmount?: number;
}

export default function SectionStack({
  children,
  scaleAmount = 0.08,
  blurAmount = 8,
  dimAmount = 0.35,
}: SectionStackProps) {
  const wrapperRefs = useRef<HTMLDivElement[]>([]);
  wrapperRefs.current = [];

  const registerWrapper = (el: HTMLDivElement | null) => {
    if (el && !wrapperRefs.current.includes(el)) {
      wrapperRefs.current.push(el);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      const sections = wrapperRefs.current;

      for (let i = 0; i < sections.length; i++) {
        const current = sections[i];
        const next = sections[i + 1];
        const inner = current.querySelector<HTMLElement>(
          ":scope > .section-stack-sticky > .section-stack-inner"
        );
        if (!inner) continue;

        if (!next) {
          // Last section: never gets pushed back, always full clarity.
          inner.style.transform = "";
          inner.style.filter = "";
          inner.style.opacity = "";
          continue;
        }

        const nextRect = next.getBoundingClientRect();

        // progress = 0 while the next section hasn't reached the viewport yet,
        // progress = 1 once the next section's top has fully reached the viewport top
        // (i.e. it has completely covered the current one).
        const raw = 1 - nextRect.top / vh;
        const progress = Math.min(Math.max(raw, 0), 1);

        const scale = 1 - progress * scaleAmount;
        const blur = progress * blurAmount;
        const opacity = 1 - progress * dimAmount;

        inner.style.transform = `scale(${scale})`;
        inner.style.filter = blur > 0.01 ? `blur(${blur}px)` : "";
        inner.style.opacity = `${opacity}`;
      }

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [scaleAmount, blurAmount, dimAmount]);

  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div className="relative">
      {items.map((child, i) => (
        <div
          key={i}
          ref={registerWrapper}
          className="section-stack-wrapper relative"
          style={{ zIndex: i + 1 }}
        >
          <div className="section-stack-sticky sticky top-0 min-h-screen overflow-hidden">
            <div
              className="section-stack-inner h-full w-full will-change-[transform,filter,opacity]"
              style={{ transformOrigin: "center top" }}
            >
              {child}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}