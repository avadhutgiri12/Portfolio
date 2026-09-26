"use client";

import { useEffect } from "react";

export default function MouseGrid() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-dots" aria-hidden="true">
      <div className="dots-base" />
      <div className="dots-glow" />
      <div className="mouse-dot-light" />
    </div>
  );
}