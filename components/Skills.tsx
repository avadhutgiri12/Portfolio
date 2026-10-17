"use client";

import { useState, useEffect, useRef } from "react";

import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLING_SKILLS } from "@/data/skills";

export default function Skills() {
  const [activeFrontendIndex, setActiveFrontendIndex] = useState(0);
  const [activeBackendIndex, setActiveBackendIndex] = useState(0);
  const [activeToolingIndex, setActiveToolingIndex] = useState(0);

  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const toolingRef = useRef<HTMLDivElement>(null);

  // Auto-rotate skills every 2 seconds
  useEffect(() => {
    const frontendInterval = setInterval(() => {
      setActiveFrontendIndex((prev) =>
        prev < FRONTEND_SKILLS.length - 1 ? prev + 1 : 0
      );
    }, 2000);

    const backendInterval = setInterval(() => {
      setActiveBackendIndex((prev) =>
        prev < BACKEND_SKILLS.length - 1 ? prev + 1 : 0
      );
    }, 2000);

    const toolingInterval = setInterval(() => {
      setActiveToolingIndex((prev) =>
        prev < TOOLING_SKILLS.length - 1 ? prev + 1 : 0
      );
    }, 2000);

    return () => {
      clearInterval(frontendInterval);
      clearInterval(backendInterval);
      clearInterval(toolingInterval);
    };
  }, []);

  // Get skill style based on distance from active index
  const getSkillStyle = (
    index: number,
    activeIndex: number,
    total: number,
    containerHeight: number
  ) => {
    // Calculate circular distance
    let distance = index - activeIndex;
    if (distance > total / 2) distance -= total;
    if (distance < -total / 2) distance += total;

    const absDistance = Math.abs(distance);
    const direction = Math.sign(distance);

    // Base properties for center skill
    let opacity = 1;
    let blur = 0;
    let scale = 1;
    let rotateX = 0;
    let translateY = 0;
    let fontSize = "text-lg"; // Increased size for center skill

    if (absDistance === 0) {
      // Center skill
      opacity = 1;
      blur = 0;
      scale = 1;
      rotateX = 0;
      translateY = 0;
      fontSize = "text-xl"; // Even larger for center
    } else if (absDistance === 1) {
      // Adjacent skills
      opacity = 0.8;
      blur = 2;
      scale = 0.95;
      rotateX = direction * 5;
      translateY = direction * -(containerHeight * 0.15);
      fontSize = "text-base";
    } else if (absDistance === 2) {
      // Two steps away
      opacity = 0.6;
      blur = 4;
      scale = 0.9;
      rotateX = direction * 10;
      translateY = direction * -(containerHeight * 0.3);
      fontSize = "text-sm";
    } else {
      // Further away skills
      opacity = 0.3;
      blur = 6;
      scale = 0.8;
      rotateX = direction * 15;
      translateY = direction * -(containerHeight * 0.45);
      fontSize = "text-xs";
    }

    return {
      opacity,
      blur: `${blur}px`,
      scale,
      rotateX: `${rotateX}deg`,
      translateY: `${translateY}px`,
      fontSize,
    };
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        px-6
        py-32
        text-white
        md:px-12
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              SKILLS / 003
            </p>

            <h2
              className="
                text-6xl
                font-bold
                leading-[0.82]
                tracking-[-0.06em]
                text-white
                md:text-8xl
                lg:text-[9rem]
              "
            >
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

        {/* =====================================================
            THREE COLUMN LAYOUT
        ====================================================== */}
        <div className="relative min-h-[760px] md:flex md:items-start">
          {/* Frontend Column */}
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="mb-4 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              FRONTEND
            </div>
            <div className="relative min-h-[600px]">
              {/* Background grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-20
                  [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              {/* Skills Wheel */}
              <div
                ref={frontendRef}
                className="relative h-full w-full"
              >
                {FRONTEND_SKILLS.map((skill, index) => {
                  const containerHeight = 600; // Approximate height
                  const style = getSkillStyle(
                    index,
                    activeFrontendIndex,
                    FRONTEND_SKILLS.length,
                    containerHeight
                  );

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        flex
                        items-center
                        justify-center
                        w-full
                        transition-all
                        duration-1000
                      "
                      style={{
                        transform: `
                          translate3d(0, ${style.translateY}, 0)
                          rotateX(${style.rotateX})
                          scale(${style.scale})
                        `,
                        opacity: style.opacity,
                        filter: `blur(${style.blur})`,
                      }}
                    >
                      {/* Just the skill name, no background/circle */}
                      <div className="
                        flex
                        items-center
                        justify-center
                        text-center
                        p-2
                      ">
                        <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Backend Column */}
          <div className="w-full md:w-1/3 md:px-4">
            <div className="mb-4 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              BACKEND
            </div>
            <div className="relative min-h-[600px]">
              {/* Background grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-20
                  [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              {/* Skills Wheel */}
              <div
                ref={backendRef}
                className="relative h-full w-full"
              >
                {BACKEND_SKILLS.map((skill, index) => {
                  const containerHeight = 600; // Approximate height
                  const style = getSkillStyle(
                    index,
                    activeBackendIndex,
                    BACKEND_SKILLS.length,
                    containerHeight
                  );

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        flex
                        items-center
                        justify-center
                        w-full
                        transition-all
                        duration-1000
                      "
                      style={{
                        transform: `
                          translate3d(0, ${style.translateY}, 0)
                          rotateX(${style.rotateX})
                          scale(${style.scale})
                        `,
                        opacity: style.opacity,
                        filter: `blur(${style.blur})`,
                      }}
                    >
                      {/* Just the skill name, no background/circle */}
                      <div className="
                        flex
                        items-center
                        justify-center
                        text-center
                        p-2
                      ">
                        <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tooling Column */}
          <div className="w-full md:w-1/3 md:pl-4">
            <div className="mb-4 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
              TOOLING
            </div>
            <div className="relative min-h-[600px]">
              {/* Background grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-20
                  [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              {/* Skills Wheel */}
              <div
                ref={toolingRef}
                className="relative h-full w-full"
              >
                {TOOLING_SKILLS.map((skill, index) => {
                  const containerHeight = 600; // Approximate height
                  const style = getSkillStyle(
                    index,
                    activeToolingIndex,
                    TOOLING_SKILLS.length,
                    containerHeight
                  );

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        flex
                        items-center
                        justify-center
                        w-full
                        transition-all
                        duration-1000
                      "
                      style={{
                        transform: `
                          translate3d(0, ${style.translateY}, 0)
                          rotateX(${style.rotateX})
                          scale(${style.scale})
                        `,
                        opacity: style.opacity,
                        filter: `blur(${style.blur})`,
                      }}
                    >
                      {/* Just the skill name, no background/circle */}
                      <div className="
                        flex
                        items-center
                        justify-center
                        text-center
                        p-2
                      ">
                        <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE VERSION (STACKED)
        ====================================================== */}
        <div className="mt-16 hidden md:block">
          <div className="space-y-12">
            {/* Frontend - Mobile */}
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
                FRONTEND
              </p>
              <div className="relative h-[400px]">
                {/* Background grid */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:32px_32px]
                  "
                />

                {/* Skills Wheel */}
                <div className="relative h-full w-full">
                  {FRONTEND_SKILLS.map((skill, index) => {
                    const containerHeight = 400;
                    const style = getSkillStyle(
                      index,
                      activeFrontendIndex,
                      FRONTEND_SKILLS.length,
                      containerHeight
                    );

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          flex
                          items-center
                          justify-center
                          w-full
                          transition-all
                          duration-1000
                        "
                        style={{
                          transform: `
                            translate3d(0, ${style.translateY}, 0)
                            rotateX(${style.rotateX})
                            scale(${style.scale})
                          `,
                          opacity: style.opacity,
                          filter: `blur(${style.blur})`,
                        }}
                      >
                        {/* Just the skill name, no background/circle */}
                        <div className="
                          flex
                          items-center
                          justify-center
                          text-center
                          p-2
                        ">
                          <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Backend - Mobile */}
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
                BACKEND
              </p>
              <div className="relative h-[400px]">
                {/* Background grid */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:32px_32px]
                  "
                />

                {/* Skills Wheel */}
                <div className="relative h-full w-full">
                  {BACKEND_SKILLS.map((skill, index) => {
                    const containerHeight = 400;
                    const style = getSkillStyle(
                      index,
                      activeBackendIndex,
                      BACKEND_SKILLS.length,
                      containerHeight
                    );

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          flex
                          items-center
                          justify-center
                          w-full
                          transition-all
                          duration-1000
                        "
                        style={{
                          transform: `
                            translate3d(0, ${style.translateY}, 0)
                            rotateX(${style.rotateX})
                            scale(${style.scale})
                          `,
                          opacity: style.opacity,
                          filter: `blur(${style.blur})`,
                        }}
                      >
                        {/* Just the skill name, no background/circle */}
                        <div className="
                          flex
                          items-center
                          justify-center
                          text-center
                          p-2
                        ">
                          <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tooling - Mobile */}
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
                TOOLING
              </p>
              <div className="relative h-[400px]">
                {/* Background grid */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:32px_32px]
                  "
                />

                {/* Skills Wheel */}
                <div className="relative h-full w-full">
                  {TOOLING_SKILLS.map((skill, index) => {
                    const containerHeight = 400;
                    const style = getSkillStyle(
                      index,
                      activeToolingIndex,
                      TOOLING_SKILLS.length,
                      containerHeight
                    );

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          flex
                          items-center
                          justify-center
                          w-full
                          transition-all
                          duration-1000
                        "
                        style={{
                          transform: `
                            translate3d(0, ${style.translateY}, 0)
                            rotateX(${style.rotateX})
                            scale(${style.scale})
                          `,
                          opacity: style.opacity,
                          filter: `blur(${style.blur})`,
                        }}
                      >
                        {/* Just the skill name, no background/circle */}
                        <div className="
                          flex
                          items-center
                          justify-center
                          text-center
                          p-2
                        ">
                          <p className={`${style.fontSize} font-medium tracking-tight text-white`}>
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFO (KEEP EXISTING)
        ====================================================== */}
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

          <div className="border-b border-white/10 py-5 md:border-b-0 md:px-8 md:border-r">
            <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              WEB DEVELOPMENT
            </span>

            <p className="mt-2 text-sm text-neutral-500">
              React · Next.js · React Native · Expo
            </p>
          </div>

          <div className="py-5 md:pl-8">
            <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              TOOLS & BACKEND
            </span>

            <p className="mt-2 text-sm text-neutral-500">
              Git · GitHub · Colab · MySQL · Firebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}