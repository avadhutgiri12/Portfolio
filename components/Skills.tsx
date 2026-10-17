
"use client";

import { useEffect, useRef, useState } from "react";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  TOOLING_SKILLS,
} from "@/data/skills";

import { motionOn } from "@/lib/motion";
import { Section, SectionHead } from "./ui";

const STEP_MS = 2200;

const TINTS = ["#34d399", "#6ee7b7", "#10b981"];

const SKILL_GROUPS = [
  {
    n: "01",
    group: "FRONTEND",
    items: FRONTEND_SKILLS,
  },
  {
    n: "02",
    group: "BACKEND",
    items: BACKEND_SKILLS,
  },
  {
    n: "03",
    group: "TOOLING",
    items: TOOLING_SKILLS,
  },
];

function SkillWheel({
  group,
  index,
  tint,
}: {
  group: (typeof SKILL_GROUPS)[number];
  index: number;
  tint: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const [live, setLive] = useState(false);

  const wheelRef = useRef<HTMLDivElement>(null);

  const items = group.items;
  const total = items.length;

  useEffect(() => {
    const el = wheelRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLive(entry.isIntersecting);
      },
      {
        rootMargin: "10% 0px",
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!live || held || !motionOn() || total < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % total);
    }, STEP_MS);

    return () => window.clearInterval(interval);
  }, [live, held, total]);

  return (
    <div
      className="skill-wheel-column min-w-0"
      style={{ "--skill-tint": tint } as React.CSSProperties}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span
          className="font-mono text-[10px] tracking-[0.3em]"
          style={{ color: tint }}
        >
          {group.n}
        </span>

        <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
          {group.group}
        </span>
      </div>

      <div
        ref={wheelRef}
        className="skill-wheel relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[460px]"
        role="region"
        aria-label={`${group.group} skills`}
      >
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Center selection guide */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 border-y py-10"
          style={{
            borderColor: `${tint}35`,
            background: `linear-gradient(90deg, transparent, ${tint}08, transparent)`,
          }}
        />

        {/* 3D wheel */}
        <div className="skill-wheel-stage absolute inset-0">
          {items.map((skill, itemIndex) => {
            let offset = (itemIndex - activeIndex) % total;

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const distance = Math.abs(offset);

            // Render only the center item and two neighbors on either side.
            if (distance > 2) return null;

            const opacity =
              distance === 0 ? 1 : distance === 1 ? 0.5 : 0.2;

            const blur =
              distance === 0 ? 0 : distance === 1 ? 1.5 : 3;

            const scale =
              distance === 0 ? 1 : distance === 1 ? 0.88 : 0.76;

            const rotateX = offset * -25;
            const translateY = offset * 76;

            return (
              <div
                key={skill.name}
                className="skill-wheel-item absolute left-1/2 top-1/2 flex w-full items-center justify-center px-3"
                style={{
                  zIndex: 10 - distance,
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `
                    translate(-50%, -50%)
                    translateY(${translateY}px)
                    translateZ(${-distance * 35}px)
                    rotateX(${rotateX}deg)
                    scale(${scale})
                  `,
                  transition:
                    "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, filter 700ms ease",
                }}
                aria-hidden={distance !== 0}
              >
                <div className="flex items-center justify-center gap-3">
                  {/* Active skill indicator */}
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full transition-opacity duration-500"
                    style={{
                      backgroundColor: tint,
                      opacity: distance === 0 ? 1 : 0,
                      boxShadow:
                        distance === 0 ? `0 0 12px ${tint}` : "none",
                    }}
                  />

                  <span
                    className="text-center font-medium tracking-tight text-white transition-all duration-500"
                    style={{
                      fontSize:
                        distance === 0
                          ? "clamp(1.15rem, 2vw, 1.75rem)"
                          : distance === 1
                            ? "clamp(0.95rem, 1.5vw, 1.25rem)"
                            : "clamp(0.8rem, 1.2vw, 1rem)",
                      color:
                        distance === 0
                          ? "#ffffff"
                          : "rgba(255,255,255,0.7)",
                    }}
                  >
                    {skill.name}
                  </span>

                  <span
                    className="text-xs transition-opacity duration-500"
                    style={{
                      color: tint,
                      opacity: distance === 0 ? 1 : 0,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wheel footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-between font-mono text-[9px] tracking-widest text-neutral-600">
          <span>SKILL INDEX</span>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="overflow-hidden text-white">
      <SectionHead label="SKILLS" index="03" right="TECHNICAL EXPERTISE" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 mt-12 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              CAPABILITIES / 003
            </p>

            <h2 className="text-6xl font-bold leading-[0.82] tracking-[-0.06em] text-white md:text-8xl lg:text-[9rem]">
              TECHNICAL
              <br />
              <span className="text-neutral-700">EXPERTISE</span>
            </h2>
          </div>

          <div className="max-w-sm border-l border-white/10 pl-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
              TECHNICAL STACK
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-500">
              A collection of technologies, frameworks, tools, and
              machine-learning techniques I use to turn ideas into working
              products.
            </p>
          </div>
        </div>

        {/* Three independent skill wheels */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-5 lg:gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <SkillWheel
              key={group.group}
              group={group}
              index={index}
              tint={TINTS[index % TINTS.length]}
            />
          ))}
        </div>

        {/* Existing bottom information */}
        <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:pr-8">
            <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              MACHINE LEARNING
            </span>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Python · NumPy · Pandas · EDA · Scikit-learn · PyTorch ·
              TensorFlow · Model Development
            </p>
          </div>

          <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:px-8">
            <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              WEB DEVELOPMENT
            </span>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              React · Next.js · React Native · Expo
            </p>
          </div>

          <div className="py-5 md:pl-8">
            <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              TOOLS & BACKEND
            </span>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Git · GitHub · Colab · MySQL · Firebase
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

