
"use client";

import { useEffect, useRef, useState } from "react";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  TOOLING_SKILLS,
} from "@/data/skills";

import { motionOn } from "@/lib/motion";

const STEP_MS = 2200;

const TINTS = ["#ffbe38", "#ffcc55", "#ffdb88"];

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
  tint,
  activeIndex,
  held,
  onSelect,
  onHold,
}: {
  group: (typeof SKILL_GROUPS)[number];
  tint: string;
  activeIndex: number;
  held: boolean;
  onSelect: (skillIndex: number) => void;
  onHold: (held: boolean) => void;
}) {
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

  return (
    <div
      className="skill-wheel-column min-w-0"
      style={{ "--skill-tint": tint } as React.CSSProperties}
    >
      <div className=" items-center justify-between gap-1">
        <span
          className="font-mono text-[10px] tracking-[0.3em]"
          style={{ color: tint }}
        >
          {group.n}
        </span>

        <span className="font-mono text-[10px] tracking-[0.2em] pl-2">
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
                <div className="flex items-center justify-center gap-1">
                  {/* Active skill indicator */}
                  <span
                    className="h-1.2 w-1.2 shrink-0 rounded-full transition-opacity duration-500"
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
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>(() =>
    SKILL_GROUPS.map(() => 0)
  );
  const [heldWheels, setHeldWheels] = useState<boolean[]>(() =>
    SKILL_GROUPS.map(() => false)
  );
  const [isVisible, setIsVisible] = useState(false);

  // Pause automatic rotation when the section is off-screen.
  useEffect(() => {
    const element = document.getElementById("skills");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Automatically rotate all wheels simultaneously.
  useEffect(() => {
    if (!isVisible || !motionOn()) return;

    const interval = window.setInterval(() => {
      setActiveIndexes((previous) =>
        previous.map((index, wheelIndex) => {
          const group = SKILL_GROUPS[wheelIndex];
          const total = group.items.length;

          // Don't rotate if wheel is being held or has less than 2 items
          if (heldWheels[wheelIndex] || total < 2) {
            return index;
          }

          return (index + 1) % total;
        })
      );
    }, STEP_MS);

    return () => window.clearInterval(interval);
  }, [isVisible, heldWheels]);

  // Select a skill and place it in the center.
  const selectSkill = (groupIndex: number, skillIndex: number) => {
    setActiveIndexes((previous) =>
      previous.map((index, i) =>
        i === groupIndex ? skillIndex : index
      )
    );
  };

  // Hold or release an individual wheel.
  const holdWheel = (groupIndex: number, held: boolean) => {
    setHeldWheels((previous) =>
      previous.map((value, i) =>
        i === groupIndex ? held : value
      )
    );
  };

  return (
    <section id="skills" className="overflow-hidden text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 mt-12 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              CAPABILITIES / 003
            </p>

            <h2 className="text-6xl font-bold leading-[0.82] tracking-[-0.06em] text-white md:text-4xl lg:text-[6rem]">
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

        {/* Three synchronized skill wheels */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-1 lg:gap-2">
          {SKILL_GROUPS.map((group, wheelIndex) => (
            <SkillWheel
              key={group.group}
              group={group}
              activeIndex={activeIndexes[wheelIndex]}
              held={heldWheels[wheelIndex]}
              tint={TINTS[wheelIndex % TINTS.length]}
              onSelect={(skillIndex) => selectSkill(wheelIndex, skillIndex)}
              onHold={(held) => holdWheel(wheelIndex, held)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

