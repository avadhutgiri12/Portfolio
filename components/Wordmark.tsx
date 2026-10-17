"use client";

import { useEffect, useRef, useState } from "react";

export default function Wordmark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // replay from scratch every time it re-enters, not just the first
          setInView(false);
          requestAnimationFrame(() => requestAnimationFrame(() => setInView(true)));
        } else {
          setInView(false);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.toLowerCase().split(" ");

  return (
    <div ref={ref} className={`signature ${inView ? "is-in" : ""}`}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          text-4xl
          font-black
          tracking-tighter
          text-white
          transition
          hover:text-emerald-400
          mt-10
          
        "
        aria-label="Go to home"
      >
        A<span className="text-emerald-400">/</span>G 
      </button>
      <span className="text-4xl font-black "> Avadhut</span>
      
    </div>
  );
}