"use client";

import * as React from "react";
import { motionOn } from "@/lib/motion";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const revealProgress = useMotionValue(0);

  React.useEffect(() => {
    if (!motionOn()) {
      setIsVisible(true);
      return;
    }

    const revealElement = () => {
      const elementHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const visibleThreshold = 150; // pixels from bottom to trigger reveal

      if (scrollY + elementHeight > document.documentElement.offsetHeight - visibleThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check on load and scroll
    revealElement();
    window.addEventListener("scroll", revealElement, { passive: true });

    return () => window.removeEventListener("scroll", revealElement);
  }, []);

  const revealStyle = {
    opacity: useTransform(revealProgress, [0, 1], [0, 1]),
    transform: useTransform(revealProgress, [0, 1], ["translateY(20px)", "translateY(0)"]),
  };

  return (
    <motion.div
      style={isVisible ? revealStyle : { opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </motion.div>
  );
}