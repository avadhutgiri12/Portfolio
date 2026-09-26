"use client";

import { ReactNode, useEffect, useRef } from "react";

type SectionScrollProps = {
  children: ReactNode;
  className?: string;
  index: number;
};

export default function SectionScroll({
  children,
  className = "",
  index,
}: SectionScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /*
       * How far the section has moved through
       * the viewport.
       */

      const progress = Math.min(
        Math.max(-rect.top / windowHeight, 0),
        1
      );

      /*
       * Current section:
       * moves backwards and becomes slightly smaller.
       */

      const scale = 1 - progress * 0.08;
      const translateY = progress * -50;
      const opacity = 1 - progress * 0.15;

      /*
       * Small rotation creates the premium
       * stacked-card feeling.
       */

      const rotateX = progress * 2;

      section.style.setProperty(
        "--section-scale",
        scale.toString()
      );

      section.style.setProperty(
        "--section-y",
        `${translateY}px`
      );

      section.style.setProperty(
        "--section-opacity",
        opacity.toString()
      );

      section.style.setProperty(
        "--section-rotate",
        `${rotateX}deg`
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section-index={index}
      className={`
        section-scroll
        ${className}
      `}
      style={
        {
          "--section-scale": "1",
          "--section-y": "0px",
          "--section-opacity": "1",
          "--section-rotate": "0deg",
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
}