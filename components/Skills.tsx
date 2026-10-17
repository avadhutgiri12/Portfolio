"use client";

import { useEffect, useState } from "react";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  TOOLING_SKILLS,
} from "@/data/skills";

type Skill = {
  name: string;
};

type SkillColumnProps = {
  number: string;
  title: string;
  skills: readonly Skill[];
  accent: string;
};

function SkillColumn({
  number,
  title,
  skills,
  accent,
}: SkillColumnProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (skills.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % skills.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [skills.length]);

  if (skills.length === 0) return null;

  return (
    <div
      className="skill-column min-w-0"
      style={{ "--skill-accent": accent } as React.CSSProperties}
    >
      {/* Column Header */}
      <div className="flex items-center gap-4 border-t border-white/20 pt-5">
        <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--skill-accent)]">
          {number}
        </span>

        <h3 className="font-mono text-[11px] tracking-[0.28em] text-white/70">
          {title}
        </h3>
      </div>

      {/* Technology List */}
      <div
        className="relative mt-5 h-[280px] overflow-hidden sm:h-[320px]"
        aria-label={`${title} skills`}
      >
        {skills.map((skill, index) => {
          // Calculate the shortest circular distance from the active skill.
          let distance = index - activeIndex;

          if (distance > skills.length / 2) {
            distance -= skills.length;
          }

          if (distance < -skills.length / 2) {
            distance += skills.length;
          }

          const absoluteDistance = Math.abs(distance);
          const isActive = distance === 0;

          // Progressively blur technologies farther from the active item.
          const blur = Math.min(absoluteDistance * 1.5, 5);

          const opacity = isActive
            ? 1
            : Math.max(0.15, 0.75 - absoluteDistance * 0.19);

          const scale = isActive
            ? 1
            : Math.max(0.88, 1 - absoluteDistance * 0.035);

          return (
            <button
              key={skill.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className="skill-item absolute left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-3 whitespace-nowrap px-2 py-2 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--skill-accent)]"
              style={{
                top: "50%",
                transform: `translate(-50%, calc(-50% + ${distance * 62}px)) scale(${scale})`,
                filter: `blur(${blur}px)`,
                opacity,
                zIndex: isActive ? 10 : 5 - absoluteDistance,
                backgroundColor: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                color: isActive ? "white" : "white/70",
              }}
            >
              {/* Active Arrow */}
              <span
                className="inline-block text-[26px] leading-none transition-all duration-500"
                style={{
                  color: "var(--skill-accent)",
                  width: isActive ? "28px" : "0px",
                  opacity: isActive ? 1 : 0,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                →
              </span>

              {/* Technology Name */}
              <span
                className="text-[clamp(19px,2.2vw,34px)] font-semibold uppercase tracking-[-0.045em] transition-all duration-500"
                style={{
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {skill.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-emerald-400">
              SKILLS / 003
            </p>

            <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-8xl">
              TECHNICAL
              <br />
              <span className="text-white">EXPERTISE</span>
            </h2>
          </div>

          <p className="max-w-sm border-l border-white/20 pl-5 text-sm leading-7 text-white/60">
            Technologies, frameworks, and tools I use to transform ideas
            into practical digital experiences.
          </p>
        </div>

        {/* Three-Column Technology Showcase */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
          <SkillColumn
            number="01"
            title="FRONTEND"
            skills={FRONTEND_SKILLS}
            accent="#10B981"
          />

          <SkillColumn
            number="02"
            title="BACKEND"
            skills={BACKEND_SKILLS}
            accent="#34D399"
          />

          <SkillColumn
            number="03"
            title="TOOLING"
            skills={TOOLING_SKILLS}
            accent="#6EE7B7"
          />
        </div>

        {/* Additional Expertise */}
        <div className="mt-12 grid grid-cols-1 border-t border-white/20 sm:grid-cols-2 md:grid-cols-3">
          <div className="border-b border-white/20 py-5 sm:pr-6 md:border-b-0 md:border-r">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              MACHINE LEARNING
            </p>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Python · NumPy · Pandas · EDA · Scikit-learn · PyTorch ·
              TensorFlow · Model Development
            </p>
          </div>

          <div className="border-b border-white/20 py-5 sm:pl-6 md:border-b-0 md:border-r md:px-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              WEB DEVELOPMENT
            </p>

            <p className="mt-3 text-sm leading-7 text-white/60">
              React · Next.js · React Native · Expo
            </p>
          </div>

          <div className="py-5 sm:pl-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">
              TOOLS & BACKEND
            </p>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Git · GitHub · Colab · MySQL · Firebase
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .skill-item {
          transition:
            filter 700ms ease,
            opacity 700ms ease,
            transform 700ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-item {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}