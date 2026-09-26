"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Palette,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "BUILDING WEBSITES",
    category: "DEVELOPMENT",
    description:
      "I create modern, responsive and high-performance websites with clean interfaces and smooth user experiences.",
    icon: Code2,
    tag: "WEB DEVELOPMENT",
  },
  {
    id: 2,
    number: "02",
    title: "UI / UX DESIGN",
    category: "DESIGN",
    description:
      "I design clean and intuitive interfaces focused on usability, visual hierarchy and engaging digital experiences.",
    icon: Palette,
    tag: "UI / UX",
  },
  {
    id: 3,
    number: "03",
    title: "MODEL TRAINING",
    category: "MACHINE LEARNING",
    description:
      "I build and train machine learning models using real-world datasets, feature engineering and model evaluation.",
    icon: BrainCircuit,
    tag: "MACHINE LEARNING",
  },
  {
    id: 4,
    number: "04",
    title: "MODEL DEVELOPMENT",
    category: "AI DEVELOPMENT",
    description:
      "I develop practical ML solutions and transform trained models into usable applications and intelligent systems.",
    icon: Cpu,
    tag: "AI / ML",
  },
  {
    id: 5,
    number: "05",
    title: "AI AUTOMATION",
    category: "AUTOMATION",
    description:
      "I create AI-powered automation workflows that reduce repetitive tasks and make digital processes more efficient.",
    icon: Bot,
    tag: "AI AUTOMATION",
  },
  {
    id: 6,
    number: "06",
    title: "DATA SOLUTIONS",
    category: "DATA",
    description:
      "I work with data processing, visualization and databases to turn raw information into useful insights.",
    icon: Database,
    tag: "DATA & DATABASE",
  },
];

export default function WhatIDoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);

  /*
   * =========================================
   * NEXT
   * =========================================
   */

  const nextService = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  /*
   * =========================================
   * PREVIOUS
   * =========================================
   */

  const previousService = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  /*
   * =========================================
   * AUTO PLAY
   * =========================================
   */

  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextService]);

  /*
   * =========================================
   * TOUCH START
   * =========================================
   */

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  /*
   * =========================================
   * TOUCH END
   * =========================================
   */

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].clientX;

    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      nextService();
    } else {
      previousService();
    }
  };

  /*
   * =========================================
   * CARD POSITION
   * =========================================
   */

  const getCardStyle = (index: number) => {
    const total = SERVICES.length;

    let offset = index - activeIndex;

    // Make carousel circular
    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    /*
     * CENTER CARD
     */

    if (offset === 0) {
      return {
        transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    }

    /*
     * CARD BEHIND - LEFT
     */

    if (offset === -1) {
      return {
        transform:
          "translate(calc(-50% - 100px), -50%) rotate(-9deg) scale(.88)",
        opacity: 0.38,
        zIndex: 20,
      };
    }

    /*
     * CARD BEHIND - RIGHT
     */

    if (offset === 1) {
      return {
        transform:
          "translate(calc(-50% + 100px), -50%) rotate(9deg) scale(.88)",
        opacity: 0.38,
        zIndex: 20,
      };
    }

    /*
     * FAR LEFT
     */

    if (offset === -2) {
      return {
        transform:
          "translate(calc(-50% - 165px), -50%) rotate(-16deg) scale(.76)",
        opacity: 0.16,
        zIndex: 10,
      };
    }

    /*
     * FAR RIGHT
     */

    if (offset === 2) {
      return {
        transform:
          "translate(calc(-50% + 165px), -50%) rotate(16deg) scale(.76)",
        opacity: 0.16,
        zIndex: 10,
      };
    }

    /*
     * HIDDEN
     */

    return {
      transform:
        offset > 0
          ? "translate(calc(-50% + 400px), -50%) scale(.6)"
          : "translate(calc(-50% - 400px), -50%) scale(.6)",
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section
      id="what-i-do"
      className="
        relative
        overflow-hidden
        
        px-5
        py-24
        text-white
        sm:px-8
        md:px-12
        lg:py-32
      "
    >
      {/* ========================================= */}
      {/* BACKGROUND */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-500/[0.045]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================= */}
        {/* SECTION HEADER */}
        {/* ========================================= */}

        <div className="
          mb-12
          grid
          gap-10
          lg:mb-16
          lg:grid-cols-[1fr_320px]
        ">
          <div>
            <p className="
              mb-6
              font-mono
              text-[10px]
              tracking-[0.35em]
              text-emerald-400
            ">
              WHAT I DO / 002
            </p>

            <h2 className="
              max-w-5xl
              text-5xl
              font-bold
              leading-[0.85]
              tracking-[-0.05em]
              text-white
              sm:text-6xl
              sm:leading-[0.82]
              sm:tracking-[-0.06em]
              md:text-7xl
              lg:text-[7rem]
            ">
              BUILDING
              <br />

              <span className="text-neutral-700">
                IDEAS
              </span>

              <br />

              INTO REALITY.
            </h2>
          </div>

          <div className="flex items-end">
            <div className="
              border-l
              border-white/10
              pl-6
            ">
              <p className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-600
              ">
                SERVICES
              </p>

              <p className="
                mt-5
                text-sm
                leading-7
                text-neutral-500
              ">
                I combine design, development,
                machine learning, and AI to build
                digital experiences and intelligent
                solutions.
              </p>

              <div className="
                mt-7
                h-px
                w-16
                bg-emerald-400/50
              " />
            </div>
          </div>
        

          {/* Counter */}

          <div className="hidden text-right sm:block">
            <p className="font-mono text-xs text-neutral-500">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(SERVICES.length).padStart(2, "0")}
            </p>

            <p
              className="
                mt-2
                font-mono
                text-[8px]
                tracking-[0.2em]
                text-neutral-600
              "
            >
              AUTO PLAY · 3 SEC
            </p>
          </div>
        </div>

        {/* ========================================= */}
        {/* CARD CAROUSEL */}
        {/* ========================================= */}

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            relative
            mx-auto
            h-[530px]
            w-full
            max-w-[900px]
            select-none
            sm:h-[570px]
            md:h-[610px]
          "
        >
          {/* ========================================= */}
          {/* CARDS */}
          {/* ========================================= */}

          {SERVICES.map((service, index) => {
            const style = getCardStyle(index);

            const Icon = service.icon;

            const isActive = index === activeIndex;

            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[285px]
                  cursor-pointer
                  sm:w-[330px]
                  md:w-[360px]
                "
                style={{
                  ...style,
                  transition:
                    "transform 850ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease",
                }}
              >
                {/* ================================= */}
                {/* CARD */}
                {/* ================================= */}

                <div
                  className={`
                    relative
                    aspect-[0.72]
                    w-full
                    overflow-hidden
                    rounded-[26px]
                    border
                    bg-neutral-950
                    shadow-[0_35px_90px_rgba(0,0,0,0.55)]
                    ${isActive ? "border-white/15" : "border-white/[0.06]"}
                  `}
                >
                  {/* Card glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -top-20
                      left-1/2
                      h-52
                      w-52
                      -translate-x-1/2
                      rounded-full
                      bg-emerald-500/[0.08]
                      blur-[80px]
                    "
                  />

                  {/* ================================= */}
                  {/* TOP */}
                  {/* ================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      p-5
                      sm:p-6
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.25em]
                        text-emerald-400
                      "
                    >
                      {service.number}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[8px]
                        tracking-[0.18em]
                        text-neutral-600
                      "
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* ================================= */}
                  {/* ICON */}
                  {/* ================================= */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-[25%]
                      flex
                      h-18
                      w-18
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.025]
                      sm:h-24
                      sm:w-24
                    "
                  >
                    <Icon
                      strokeWidth={1}
                      className="
                        h-12
                        w-12
                        text-neutral-200
                        sm:h-12
                        sm:w-12
                      "
                    />
                  </div>

                  {/* ================================= */}
                  {/* CONTENT */}
                  {/* ================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10
                      p-6
                      sm:p-7
                    "
                  >
                    <p
                      className="
                        mb-3
                        font-mono
                        text-[8px]
                        tracking-[0.22em]
                        text-emerald-400
                      "
                    >
                      {service.tag}
                    </p>

                    <h3
                      className="
                        max-w-[280px]
                        text-3xl
                        font-semibold
                        leading-[0.95]
                        tracking-[-0.04em]
                        text-white
                        sm:text-4xl
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[10px]
                        leading-5
                        text-neutral-500
                        sm:text-xs
                        sm:leading-6
                      "
                    >
                      {service.description}
                    </p>

                    {/* Bottom line */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/[0.08]
                        pt-4
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[8px]
                          tracking-[0.2em]
                          text-neutral-600
                        "
                      >
                        AVAILABLE
                      </span>

                      <div
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_12px_rgba(52,211,153,0.7)]
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-1/2
                      bg-gradient-to-t
                      from-black
                      via-black/70
                      to-transparent
                    "
                  />
                </div>
              </div>
            );
          })}

          {/* ========================================= */}
          {/* LEFT BUTTON */}
          {/* ========================================= */}

          <button
            type="button"
            onClick={previousService}
            aria-label="Previous service"
            className="
              absolute
              left-0
              top-1/2
              z-50
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/70
              text-white
              backdrop-blur-md
              transition
              hover:border-emerald-400/40
              hover:text-emerald-400
              sm:left-3
              md:left-12
            "
          >
            <ArrowLeft size={16} />
          </button>

          {/* ========================================= */}
          {/* RIGHT BUTTON */}
          {/* ========================================= */}

          <button
            type="button"
            onClick={nextService}
            aria-label="Next service"
            className="
              absolute
              right-0
              top-1/2
              z-50
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/70
              text-white
              backdrop-blur-md
              transition
              hover:border-emerald-400/40
              hover:text-emerald-400
              sm:right-3
              md:right-12
            "
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* ========================================= */}
        {/* PAGINATION */}
        {/* ========================================= */}

        <div className="mt-3 flex justify-center gap-2">
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              type="button"
              aria-label={`Show ${service.title}`}
              onClick={() => setActiveIndex(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${
                  activeIndex === index
                    ? "w-10 bg-emerald-400"
                    : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }
              `}
            />
          ))}
        </div>

        {/* ========================================= */}
        {/* MOBILE INSTRUCTION */}
        {/* ========================================= */}

        <p
          className="
            mt-7
            text-center
            font-mono
            text-[8px]
            tracking-[0.25em]
            text-neutral-600
          "
        >
          SWIPE · CLICK · EXPLORE
        </p>
      </div>
    </section>
  );
}
