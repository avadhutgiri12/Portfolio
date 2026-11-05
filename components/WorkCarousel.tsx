"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { PROJECT_DATA } from "@/data/ProjectData";
import "./workCoursel.css";

// WebGL card: client-only, its own chunk, fetched once the section is near.
const ProjectCard3D = dynamic(() => import("./ProjectCard3D"), {
  ssr: false,
  loading: () => null,
});

/** 3D only on >=768px viewports without prefers-reduced-motion. */
function useCan3D() {
  const [can3D, setCan3D] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthQuery = window.matchMedia("(min-width: 768px)");
    const update = () =>
      setCan3D(!motionQuery.matches && widthQuery.matches);

    update();
    motionQuery.addEventListener("change", update);
    widthQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
      widthQuery.removeEventListener("change", update);
    };
  }, []);

  return can3D;
}

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const can3D = useCan3D();
  // hasEntered: mount the WebGL card the first time the section nears the
  // viewport; inView: pause its render loop while it is scrolled away.
  const [hasEntered, setHasEntered] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const projects = PROJECT_DATA;
  const activeProject = projects[activeIndex];

  if (!projects || projects.length === 0 || !activeProject) {
    return null;
  }

  // Auto-advance every 2 seconds
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextProject();
      }
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, projects.length]);

  const openCaseStudy = () => {
    const slug = activeProject.title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/work/${slug}`);
  };

  const previousProject = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % projects.length
    );
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section
      id="work-carousel"
      ref={sectionRef}
      className="wc-section"
      aria-label="Selected projects"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="wc-container">

        {/* Header */}
        <header className="wc-header">
          <div>
            <span className="wc-eyebrow">
              02 / Selected work
            </span>

            <h2 className="wc-heading">
              Things I've built
              <span className="wc-heading-dot">.</span>
            </h2>

            <p className="wc-description">
              Two projects built end to end: a fall-detection
              system and a house-price model.
            </p>
          </div>

          <span className="wc-project-count">
            {projects.length} projects
          </span>
        </header>

        {/* Main layout */}
        <div className="wc-layout">

          {/* Left: Project navigation */}
          <nav
            className="wc-project-list"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={project.id}
                  type="button"
                  className={`wc-project-item ${
                    isActive ? "wc-project-active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="wc-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="wc-project-label">
                    <span className="wc-project-title">
                      {project.title}
                    </span>

                    <span className="wc-project-subtitle">
                      {project.subtitle}
                    </span>
                  </span>

                  <ArrowUpRight
                    className="wc-project-arrow"
                    size={20}
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right: Active project */}
          <div className="wc-project-content">

            {/* Project image: WebGL card on desktop, flat card otherwise */}
            {can3D && hasEntered ? (
              <ProjectCard3D
                projects={projects}
                activeIndex={activeIndex}
                onOpen={openCaseStudy}
                active={inView}
              />
            ) : (
              <div
                key={activeProject.id}
                className="wc-image-wrapper"
              >
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} project preview`}
                  className="wc-project-image"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                <div className="wc-image-overlay" />

                <span className="wc-image-status">
                  <span
                    className={`wc-status-dot ${
                      activeProject.status === "Live"
                        ? "wc-status-live"
                        : ""
                    }`}
                  />

                  {activeProject.status}
                </span>
              </div>
            )}

            {/* Project information */}
            <div
              key={`details-${activeProject.id}`}
              className="wc-project-details"
            >
              <div className="wc-details-top">
                <div className="wc-details-heading">
                  <span className="wc-details-eyebrow">
                    About the project
                  </span>

                  <h3 className="wc-details-title">
                    {activeProject.title}
                  </h3>

                  <p className="wc-details-description">
                    {activeProject.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  className="wc-case-study-button"
                  onClick={openCaseStudy}
                >
                  <span>Explore project</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Technologies */}
              <div className="wc-technologies">
                {activeProject.tools.map(
                  (tool: string, index: number) => (
                    <span
                      key={`${tool}-${index}`}
                      className="wc-tech-tag"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>

              {/* Footer */}
              <div className="wc-project-footer">
                <div className="wc-project-meta">
                  <span>{activeProject.year}</span>

                  <span className="wc-meta-divider" />

                  <span>
                    {activeProject.tools.length} technologies
                  </span>
                </div>

                {activeProject.liveSiteUrl && (
                  <a
                    href={activeProject.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wc-live-link"
                  >
                    Visit live website
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        {projects.length > 1 && (
          <footer className="wc-footer">
            <span className="wc-footer-label">
              Explore my work
            </span>

            <div className="wc-pagination">
              <button
                type="button"
                className="wc-nav-button"
                onClick={previousProject}
                aria-label="Previous project"
              >
                ←
              </button>

              <span className="wc-pagination-count">
                {String(activeIndex + 1).padStart(2, "0")}
                <span>/</span>
                {String(projects.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                className="wc-nav-button"
                onClick={nextProject}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </footer>
        )}
      </div>
    </section>
  );
}