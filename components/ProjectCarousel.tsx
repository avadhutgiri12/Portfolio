"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";

import { PROJECTS_DATA, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function ProjectCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const wheelLockRef = useRef(false);

  /*
   * =========================================
   * NEXT PROJECT
   * =========================================
   */

  const handleNext = useCallback(() => {
    setActiveIdx((prev) =>
      prev < PROJECTS_DATA.length - 1 ? prev + 1 : 0
    );
  }, []);

  /*
   * =========================================
   * PREVIOUS PROJECT
   * =========================================
   */

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) =>
      prev > 0 ? prev - 1 : PROJECTS_DATA.length - 1
    );
  }, []);

  /*
   * =========================================
   * AUTO PLAY
   * =========================================
   *
   * Changes project every 3 seconds.
   *
   */

  useEffect(() => {
    if (isPaused || PROJECTS_DATA.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  /*
   * =========================================
   * MOUSE WHEEL
   * =========================================
   */

  useEffect(() => {
    const element = carouselRef.current;

    if (!element) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 15) return;

      event.preventDefault();

      if (wheelLockRef.current) return;

      wheelLockRef.current = true;

      if (event.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      setTimeout(() => {
        wheelLockRef.current = false;
      }, 600);
    };

    element.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [handleNext, handlePrev]);

  /*
   * =========================================
   * TOUCH START
   * =========================================
   */

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
  };

  /*
   * =========================================
   * TOUCH END
   * =========================================
   */

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    const touchEndX = event.changedTouches[0].clientX;

    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  /*
   * =========================================
   * GET CARD POSITION
   * =========================================
   */

  const getCardStyle = (index: number) => {
    const total = PROJECTS_DATA.length;

    let offset = index - activeIdx;

    /*
     * Make the carousel circular.
     *
     * Example:
     * Last card can appear immediately
     * beside the first card.
     */

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    const absOffset = Math.abs(offset);

    /*
     * CENTER CARD
     */

    if (offset === 0) {
      return {
        x: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 50,
      };
    }

    /*
     * LEFT / RIGHT CARDS
     */

    if (absOffset === 1) {
      return {
        x: offset * 330,
        rotate: offset * 10,
        scale: 0.82,
        opacity: 0.85,
        zIndex: 40,
      };
    }

    /*
     * FAR LEFT / RIGHT CARDS
     */

    if (absOffset === 2) {
      return {
        x: offset * 570,
        rotate: offset * 17,
        scale: 0.68,
        opacity: 0.45,
        zIndex: 30,
      };
    }

    /*
     * Hide cards that are too far away.
     */

    return {
      x: offset > 0 ? 760 : -760,
      rotate: offset > 0 ? 20 : -20,
      scale: 0.55,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <>
      <section
        id="showcase"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#080808][0.5]
          px-6
          py-24
          text-white
          md:px-12
          lg:py-32
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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

        {/* Emerald Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.04]
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ========================================= */}
          {/* HEADER */}
          {/* ========================================= */}

          <div className="mb-12 flex items-end justify-between md:mb-20">

            <div>

              <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-400">
                03 / PROJECTS
              </p>

              <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl">
                PROJECTS 
              </h2>

            </div>

            <div className="hidden text-right md:block">

              <p className="font-mono text-xs text-neutral-500">
                {String(activeIdx + 1).padStart(2, "0")} /{" "}
                {String(PROJECTS_DATA.length).padStart(2, "0")}
              </p>

              <p className="mt-2 font-mono text-[9px] tracking-widest text-neutral-600">
                {isPaused
                  ? "PAUSED"
                  : "AUTO PLAY · 3 SEC"}
              </p>

            </div>

          </div>

          {/* ========================================= */}
          {/* CAROUSEL */}
          {/* ========================================= */}

          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="
              relative
              mx-auto
              h-[500px]
              w-full
              max-w-[1400px]
              overflow-visible
              select-none
            "
          >

            {/* ========================================= */}
            {/* CARDS */}
            {/* ========================================= */}

            <div className="absolute left-1/2 top-1/2 h-[360px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:h-[410px] md:w-[330px]">

              {PROJECTS_DATA.map((project, index) => {
                const style = getCardStyle(index);

                const isCenter = index === activeIdx;

                return (
                  <div
                    key={project.id}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedProject(project);
                      } else {
                        setActiveIdx(index);
                      }
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-full
                      cursor-pointer
                    "
                    style={{
                      transform: `
                        translate3d(
                          ${style.x}px,
                          0,
                          0
                        )
                        rotate(${style.rotate}deg)
                        scale(${style.scale})
                      `,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                      transition:
                        "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                    }}
                  >

                    {/* ========================================= */}
                    {/* CARD */}
                    {/* ========================================= */}

                    <div
                      className={`
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-[22px]
                        border
                        bg-neutral-900
                        shadow-2xl
                        transition-all
                        duration-500

                        ${
                          isCenter
                            ? "border-white/20 shadow-black/60"
                            : "border-white/10"
                        }
                      `}
                    >

                      {/* Project Image */}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-40
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />

                      {/* Dark Gradient */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-b
                          from-black/20
                          via-black/50
                          to-black
                        "
                      />

                      {/* Emerald Glow */}

                      {isCenter && (
                        <div
                          className="
                            pointer-events-none
                            absolute
                            -bottom-20
                            left-1/2
                            h-48
                            w-48
                            -translate-x-1/2
                            rounded-full
                            bg-emerald-500/10
                            blur-[70px]
                          "
                        />
                      )}

                      {/* ========================================= */}
                      {/* CARD CONTENT */}
                      {/* ========================================= */}

                      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">

                        {/* Top */}

                        <div className="flex items-start justify-between">

                          <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">
                            {project.num}
                          </span>

                          {isCenter && (
                            <span className="font-mono text-[9px] tracking-widest text-neutral-500">
                              {project.year}
                            </span>
                          )}

                        </div>

                        {/* Bottom */}

                        <div>

                          <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-neutral-500">
                            {project.category}
                          </p>

                          <h3
                            className={`
                              font-black
                              tracking-tight
                              text-white
                              ${
                                isCenter
                                  ? "text-4xl md:text-5xl"
                                  : "text-3xl"
                              }
                            `}
                          >
                            {project.title}
                          </h3>

                          {isCenter && (
                            <>
                              <p className="mt-4 max-w-sm text-xs leading-6 text-neutral-400">
                                {project.subtitle}
                              </p>

                              <button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setSelectedProject(project);
                                }}
                                className="
                                  mt-5
                                  flex
                                  items-center
                                  gap-2
                                  font-mono
                                  text-[9px]
                                  tracking-[0.2em]
                                  text-emerald-400
                                  transition
                                  hover:text-emerald-300
                                "
                              >
                                <Eye size={14} />
                                VIEW PROJECT
                              </button>
                            </>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* ========================================= */}
            {/* LEFT / RIGHT CONTROLS */}
            {/* ========================================= */}

            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="
                absolute
                left-2
                top-1/2
                z-[60]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-white
                backdrop-blur
                transition
                hover:border-emerald-400/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
                md:left-8
              "
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="
                absolute
                right-2
                top-1/2
                z-[60]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-white
                backdrop-blur
                transition
                hover:border-emerald-400/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
                md:right-8
              "
            >
              <ArrowRight size={16} />
            </button>

          </div>

          {/* ========================================= */}
          {/* PAGINATION */}
          {/* ========================================= */}

          <div className="mt-6 flex justify-center gap-2">

            {PROJECTS_DATA.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIdx(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    activeIdx === index
                      ? "w-10 bg-emerald-400"
                      : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  }
                `}
              />
            ))}

          </div>

          {/* ========================================= */}
          {/* INSTRUCTION */}
          {/* ========================================= */}

          <div className="mt-8 text-center">

            <p className="font-mono text-[9px] tracking-[0.25em] text-emerald-400">
              SCROLL · SWIPE · CLICK
            </p>

          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* PROJECT MODAL */}
      {/* ========================================= */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}