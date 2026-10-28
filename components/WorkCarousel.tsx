"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PROJECT_DATA } from "@/data/ProjectData";
import { ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import { gsap } from "gsap";

const CARD_OFFSET = 300;
const ANIMATION_DURATION = 0.8;
const AUTO_ROTATE_INTERVAL = 2000; // 2 seconds

function motionOn() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
}

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const carouselRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Auto-rotation refs
  const autoRotateIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const focusCountRef = useRef(0);

  const projects = PROJECT_DATA;
  const totalProjects = projects.length;

  const activeProject = projects[activeIndex];

  const getVisibleProjects = () => {
    if (totalProjects === 0) return [];

    if (totalProjects === 1) {
      return [
        {
          project: projects[0],
          position: "active" as const,
          index: 0,
        },
      ];
    }

    const previousIndex = (activeIndex - 1 + totalProjects) % totalProjects;

    const nextIndex = (activeIndex + 1) % totalProjects;

    return [
      {
        project: projects[previousIndex],
        position: "previous" as const,
        index: previousIndex,
      },
      {
        project: projects[activeIndex],
        position: "active" as const,
        index: activeIndex,
      },
      {
        project: projects[nextIndex],
        position: "next" as const,
        index: nextIndex,
      },
    ];
  };

  const visibleProjects = getVisibleProjects();

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (previous) => (previous - 1 + totalProjects) % totalProjects
    );
  }, [totalProjects]);

  const goToNext = useCallback(() => {
    setActiveIndex((previous) => (previous + 1) % totalProjects);
  }, [totalProjects]);

  const goToProject = useCallback(
    (index: number) => {
      setActiveIndex((index + totalProjects) % totalProjects);
    },
    [totalProjects]
  );

  // Auto-rotation functions
  const startAutoRotate = useCallback(() => {
    if (!motionOn() || totalProjects <= 1) return;

    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }

    autoRotateIntervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        goToNext();
      }
    }, AUTO_ROTATE_INTERVAL);
  }, [goToNext, totalProjects]);

  const stopAutoRotate = useCallback(() => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = null;
    }
  }, []);

  const handlePause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleResume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const handleFocus = useCallback(() => {
    focusCountRef.current += 1;
    if (focusCountRef.current > 0) {
      isPausedRef.current = true;
    }
  }, []);

  const handleBlur = useCallback(() => {
    focusCountRef.current = Math.max(0, focusCountRef.current - 1);
    if (focusCountRef.current === 0) {
      isPausedRef.current = false;
    }
  }, []);

  // Auto-rotation lifecycle
  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [startAutoRotate, stopAutoRotate]);

  // Animate the carousel cards.
  // Animate carousel cards without vertical jumping.
  useEffect(() => {
    const container = cardsContainerRef.current;

    if (!container || totalProjects === 0) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-project-position]"
    );

    const reducedMotion = !motionOn();

    cards.forEach((card) => {
      const position = card.dataset.projectPosition;

      let x = 0;
      let scale = 1;
      let rotationY = 0;
      let opacity = 1;
      let zIndex = 30;

      if (position === "previous") {
        x = -CARD_OFFSET;
        scale = 0.84;
        rotationY = 5;
        opacity = 0.8;
        zIndex = 10;
      } else if (position === "active") {
        x = 0;
        scale = 1;
        rotationY = 0;
        opacity = 1;
        zIndex = 30;
      } else if (position === "next") {
        x = CARD_OFFSET;
        scale = 0.84;
        rotationY = -5;
        opacity = 0.8;
        zIndex = 10;
      } else {
        return;
      }

      const target = {
        x,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        scale,
        rotationY,
        opacity,
        zIndex,
        transformOrigin: "center center",
        force3D: false,
      };

      // Stop any animation left over from the previous selection.
      gsap.killTweensOf(card);

      if (reducedMotion) {
        gsap.set(card, target);
      } else {
        gsap.to(card, {
          ...target,
          duration: ANIMATION_DURATION,
          ease: "power3.out",
          overwrite: true,
        });
      }
    });

    return () => {
      cards.forEach((card) => {
        gsap.killTweensOf(card);
      });
    };
  }, [activeIndex, totalProjects]);

  // Smoothly update the ambient background.
  useEffect(() => {
    const background = backgroundRef.current;

    if (!background || !activeProject?.image) return;

    const imageUrl = `url("${activeProject.image}")`;

    if (!motionOn()) {
      gsap.set(background, {
        backgroundImage: imageUrl,
        opacity: 0.12,
      });

      return;
    }

    gsap.to(background, {
      backgroundImage: imageUrl,
      opacity: 0.14,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [activeProject?.image]);

  // Keyboard navigation.
  useEffect(() => {
    if (totalProjects <= 1) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Do not interfere with text inputs or editable content.
      const target = event.target as HTMLElement | null;

      if (
        target?.isContentEditable ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT"
      ) {
        return;
      }

      // Only handle keyboard navigation while the carousel
      // itself or one of its controls has focus.
      if (!carouselRef.current?.contains(document.activeElement)) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToProject(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goToProject(totalProjects - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalProjects, goToPrevious, goToNext, goToProject]);

  // Navigate to the selected project's case-study route.
  const openCaseStudy = () => {
    if (!activeProject) return;

    const slug = activeProject.title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/work/${slug}`);
  };

  if (totalProjects === 0) {
    return null;
  }

  return (
    <section
      id="work-carousel"
      ref={carouselRef}
      tabIndex={0}
      aria-label="Project showcase"
      className="
        relative
        min-h-screen
        overflow-hidden
        text-white
        outline-none
      "
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Ambient background */}
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-cover
          bg-center
          opacity-10
          blur-2xl
          scale-110
        "
      />

      {/* Dark cinematic overlay */}
      {/* <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.07),transparent_55%),linear-gradient(to_bottom,rgba(8,8,8,0.72),#080808)]
        "
      /> */}

      {/* Main carousel */}
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-4 py-16 sm:px-6 lg:px-10">
        {/* Card stage */}
        <div
          ref={cardsContainerRef}
          className="
            relative
            mx-auto
            h-[440px]
            w-full
            max-w-[1100px]
            sm:h-[500px]
            lg:h-[540px]
          "
          style={{ perspective: "1400px" }}
        >
          {visibleProjects.map(({ project, position, index }) => {
            const isActive = position === "active";

            return (
              <div
                key={project.id}
                data-project-position={position}
                className="
  absolute
  left-1/2
  top-1/2
  w-[min(76vw,400px)]
  cursor-pointer
  select-none
  focus-visible:outline-none
"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                role="button"
                tabIndex={0}
                aria-label={`Show project ${project.title}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  if (!isActive) {
                    goToProject(index);
                  }
                }}
                onKeyDown={(event) => {
                  if (
                    !isActive &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    event.preventDefault();
                    goToProject(index);
                  }
                }}
              >
                {/* Project card */}
                <article
                  className={`
                      group
                      relative
                      h-[390px]
                      w-full
                      overflow-hidden
                      rounded-[26px]
                      border
                      bg-(--spatial-surface)
                      shadow-[0_24px_80px_rgba(0,0,0,0.4)]
                      transition-[border-color,box-shadow]
                      duration-300
                      sm:h-[450px]
                      lg:h-[480px]
                      ${
                        isActive
                          ? "border-white/25 shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
                          : "border-white/10"
                      }
                    `}
                >
                  {/* Full-height project screenshot */}
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-[1.02]
                      "
                  />

                  {/* Image contrast overlay */}
                  <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/10
                        via-transparent
                        to-black/90
                      "
                  />

                  {/* Slide counter */}
                  <div
                    className="
                        absolute
                        right-3
                        top-3
                        z-10
                        rounded-full
                        border
                        border-white/15
                        bg-black/50
                        px-3
                        py-1
                        font-mono
                        text-xs
                        text-white
                        backdrop-blur-md
                        sm:right-4
                        sm:top-4
                      "
                  >
                    {index + 1} / {totalProjects}
                  </div>

                  {/* Active card highlight */}
                  {isActive && (
                    <div
                      aria-hidden="true"
                      className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-[26px]
                          ring-1
                          ring-inset
                          ring-white/15
                        "
                    />
                  )}

                  {/* Project information */}
                  <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        p-5
                        sm:p-6
                      "
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.2em] text-emerald-400">
                        {project.num}
                      </span>

                      <span className="h-px flex-1 bg-white/20" />
                    </div>

                    <h3
                      className="
                          text-2xl
                          font-bold
                          tracking-tight
                          text-white
                          sm:text-3xl
                        "
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-neutral-300">
                      {project.subtitle}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Project metadata and actions */}
        <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-6 sm:mt-10">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span
              className="
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-4
                py-3
                text-xs
                text-neutral-200
                backdrop-blur-xl
                sm:text-sm
              "
            >
              {activeProject.tools.length} technologies
            </span>

            <span
              className="
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-4
                py-3
                text-xs
                text-neutral-200
                backdrop-blur-xl
                sm:text-sm
              "
            >
              {activeProject.year}
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-4
                py-3
                text-xs
                text-neutral-200
                backdrop-blur-xl
                sm:text-sm
              "
            >
              <span
                className={`
                  h-2
                  w-2
                  rounded-full
                  ${
                    activeProject.status === "Live"
                      ? "bg-emerald-400"
                      : "bg-neutral-500"
                  }
                `}
              />

              {activeProject.status === "Live" ? "LIVE" : activeProject.status}
            </span>

            <span
              className="
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-4
                py-3
                text-xs
                text-neutral-200
                backdrop-blur-xl
                sm:text-sm
              "
            >
              Full Stack
            </span>
          </div>

          {/* Navigation and action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

  {/* Previous */}
  <button
    type="button"
    onClick={goToPrevious}
    className="
      order-2 sm:order-1
      flex h-12 w-12 shrink-0
      items-center justify-center
      rounded-full
      border border-white/20
      bg-white/[0.07]
      text-emerald-400
      cursor-pointer
      transition-all duration-200
      hover:border-white/40
      hover:bg-white/[0.14]
      hover:text-white
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-emerald-400
    "
    aria-label="Previous project"
  >
    <ChevronLeft size={21} />
  </button>

  {/* Case study */}
  <button
    type="button"
    onClick={openCaseStudy}
    className="
      order-1 sm:order-2
      inline-flex min-h-12
      items-center justify-center gap-2
      rounded-full
      bg-white
      cursor-pointer
      px-5 py-3
      text-sm font-medium text-black
      transition-all duration-200
      hover:-translate-y-0.5
      hover:bg-neutral-200
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-emerald-400
      sm:px-6
    "
  >
    Open case study
    <span aria-hidden="true">→</span>
  </button>

  {/* Live project */}
  {activeProject.liveSiteUrl ? (
    <a
      href={activeProject.liveSiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        order-1 sm:order-3
        inline-flex min-h-12
        items-center justify-center gap-2
        rounded-full
        border border-white/20
        bg-white/[0.07]
        px-10 py-3
        text-sm font-medium text-white
        transition-all duration-200
        hover:border-white/40
        hover:bg-white/[0.14]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-400
        sm:px-6
      "
    >
      Visit live
      <Link2 size={15} />
    </a>
  ) : (
    <span
      aria-disabled="true"
      className="
        order-1 sm:order-3
        inline-flex min-h-12
        items-center justify-center gap-2
        rounded-full
        border border-white/10
        px-10 py-3
        text-sm text-neutral-500
        sm:px-6
      "
    >
      No live link
    </span>
  )}

  {/* Next */}
  <button
    type="button"
    onClick={goToNext}
    className="
      order-2 sm:order-4
      flex h-12 w-12 shrink-0
      items-center justify-center
      rounded-full
      border border-white/20
      bg-white/[0.07]
      text-emerald-400
      cursor-pointer
      transition-all duration-200
      hover:border-white/40
      hover:bg-white/[0.14]
      hover:text-white
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-emerald-400
    "
    aria-label="Next project"
  >
    <ChevronRight size={21} />
  </button>

</div>

          {/* Pagination */}
          {totalProjects > 1 && (
            <div
              className="flex items-center justify-center gap-2"
              aria-label="Choose a project"
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goToProject(index)}
                  aria-label={`Go to project ${index + 1}: ${project.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#080808]
                    ${
                      activeIndex === index
                        ? "w-7 bg-emerald-400"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
