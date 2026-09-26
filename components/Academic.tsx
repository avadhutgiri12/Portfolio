"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const education = [
  {
    period: "2023 — 2027",
    degree: "Bachelor's Degree in Computer Science",
    institution: "Your College / University",
    location: "India",

    description:
      "Pursuing Computer Science with a strong interest in Machine Learning, Artificial Intelligence, software development, and modern web technologies.",

    focusAreas: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Web Development",
      "Python",
      "Software Engineering",
    ],

    academicProjects: [
      {
        title: "StoreWay",
        category: "WEB / SOFTWARE",
      },
      {
        title: "House Price Prediction",
        category: "MACHINE LEARNING",
      },
      {
        title: "Weather Forecasting",
        category: "MACHINE LEARNING",
      },
    ],

    academicDevelopment: [
      "Machine Learning",
      "Project Development",
      "Problem Solving",
      "Research & Experimentation",
    ],

    certifications: [
      {
        name: "Python Programming Certificate",
        issuer: "Example Institute",
        year: "2025",
        file: "/certificates/python-certificate.pdf",
      },
      {
        name: "Machine Learning Certificate",
        issuer: "Example Platform",
        year: "2025",
        file: "/certificates/machine-learning-certificate.pdf",
      },
    ],
  },

  {
    period: "2021 — 2023",
    degree: "Higher Secondary Education",
    institution: "Your School / Junior College",
    location: "India",

    description:
      "Completed higher secondary education with a focus on science, mathematics, computer science, and developing a strong foundation in analytical thinking.",

    focusAreas: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Programming",
      "Problem Solving",
    ],

    academicProjects: [
      {
        title: "Student Management System",
        category: "PYTHON",
      },
      {
        title: "Data Analysis Project",
        category: "DATA SCIENCE",
      },
      {
        title: "Web Development Project",
        category: "WEB",
      },
    ],

    academicDevelopment: [
      "Programming Fundamentals",
      "Logical Thinking",
      "Team Collaboration",
      "Technical Presentation",
    ],

    certifications: [
      {
        name: "Web Development Certificate",
        issuer: "Example Institute",
        year: "2023",
        file: "/certificates/web-development-certificate.pdf",
      },
      {
        name: "Computer Fundamentals Certificate",
        issuer: "Example Organization",
        year: "2023",
        file: "/certificates/computer-fundamentals.pdf",
      },
    ],
  },

  {
    period: "2020 — 2021",
    degree: "Secondary School Education",
    institution: "Your School",
    location: "India",

    description:
      "Completed secondary school education while developing an early interest in computers, mathematics, technology, and problem solving.",

    focusAreas: [
      "Mathematics",
      "Science",
      "Computer Fundamentals",
      "Logical Reasoning",
      "Technology",
    ],

    academicProjects: [
      {
        title: "Science Exhibition Project",
        category: "SCIENCE",
      },
      {
        title: "Basic Programming Project",
        category: "PROGRAMMING",
      },
    ],

    academicDevelopment: [
      "Problem Solving",
      "Creative Thinking",
      "Research",
      "Communication",
    ],

    certifications: [
      {
        name: "Computer Basics Certificate",
        issuer: "Example Organization",
        year: "2021",
        file: "/certificates/computer-basics.pdf",
      },
    ],
  },
];

export default function Academic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  /*
   * Automatically change education every 3 seconds.
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setActiveIndex((current) =>
          current === education.length - 1 ? 0 : current + 1
        );

        setIsAnimating(false);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeEducation = education[activeIndex];

  /*
   * Manually change education.
   */
  const changeEducation = (index: number) => {
    if (index === activeIndex) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <section
      id="academic"
      className="
        relative
        overflow-hidden
        bg-[#080808]/[0.5]
        px-6
        py-28
        text-white
        md:px-12
        lg:py-36
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================= */}
      {/* BACKGROUND GRID */}
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

      {/* ========================================= */}
      {/* AMBIENT GLOW */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-emerald-500/[0.04]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="mb-20">

          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs tracking-[0.25em] text-neutral-500">
              ACADEMICS / 004
            </span>

            <span className="text-xs tracking-[0.2em] text-neutral-700">
              EDUCATION
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl">
            LEARNING.
            <br />
            BUILDING.
            <br />
            <span className="text-neutral-600">GROWING.</span>
          </h2>

        </div>

        {/* ========================================= */}
        {/* EDUCATION CAROUSEL */}
        {/* ========================================= */}

        <div className="relative">

          {/* TOP CAROUSEL INDICATOR */}

          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">

            <span className="text-xs tracking-[0.2em] text-neutral-600">
              EDUCATION {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(education.length).padStart(2, "0")}
            </span>

            <span className="text-xs tracking-[0.2em] text-neutral-600">
              {activeEducation.period}
            </span>

          </div>

          {/* ========================================= */}
          {/* ANIMATED EDUCATION */}
          {/* ========================================= */}

          <div
            className={`
              transition-all
              duration-500
              ease-out
              ${
                isAnimating
                  ? "translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
          >

            <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

              {/* LEFT LABEL */}

              <div>
                <div className="flex items-center gap-2">

                  <GraduationCap
                    size={16}
                    strokeWidth={1.5}
                    className="text-emerald-400"
                  />

                  <span className="text-xs tracking-[0.2em] text-neutral-500">
                    EDUCATION
                  </span>

                </div>
              </div>

              {/* RIGHT CONTENT */}

              <div>

                {/* ========================================= */}
                {/* DEGREE */}
                {/* ========================================= */}

                <div className="max-w-4xl">

                  <h3 className="text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
                    {activeEducation.degree}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">

                    <span>
                      {activeEducation.institution}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-neutral-700" />

                    <span>
                      {activeEducation.location}
                    </span>

                  </div>

                  <p className="mt-8 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
                    {activeEducation.description}
                  </p>

                </div>

                {/* ========================================= */}
                {/* FOCUS AREAS */}
                {/* ========================================= */}

                <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[180px_1fr]">

                  <span className="text-xs tracking-[0.2em] text-neutral-600">
                    FOCUS AREAS
                  </span>

                  <div className="flex flex-wrap gap-x-8 gap-y-3">

                    {activeEducation.focusAreas.map(
                      (area, index) => (
                        <div
                          key={area}
                          className="group flex items-center gap-2"
                        >

                          <span className="text-[9px] text-neutral-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-emerald-400">
                            {area}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* ========================================= */}
                {/* PROJECTS */}
                {/* ========================================= */}

                <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[180px_1fr]">

                  <span className="text-xs tracking-[0.2em] text-neutral-600">
                    PROJECTS
                  </span>

                  <div className="flex flex-wrap gap-x-8 gap-y-3">

                    {activeEducation.academicProjects.map(
                      (project, index) => (
                        <div
                          key={project.title}
                          className="group flex items-center gap-3"
                        >

                          <span className="text-[9px] text-neutral-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-emerald-400">
                            {project.title}
                          </span>

                          <span className="text-[9px] tracking-[0.15em] text-neutral-700">
                            {project.category}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* ========================================= */}
                {/* ACADEMIC DEVELOPMENT */}
                {/* ========================================= */}

                <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[180px_1fr]">

                  <span className="text-xs tracking-[0.2em] text-neutral-600">
                    DEVELOPMENT
                  </span>

                  <div className="flex flex-wrap gap-x-8 gap-y-3">

                    {activeEducation.academicDevelopment.map(
                      (item, index) => (
                        <div
                          key={item}
                          className="group flex items-center gap-2"
                        >

                          <span className="text-[9px] text-neutral-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-emerald-400">
                            {item}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* ========================================= */}
                {/* CERTIFICATIONS */}
                {/* ========================================= */}

                <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[180px_1fr]">

                  <span className="text-xs tracking-[0.2em] text-neutral-600">
                    CERTIFICATIONS
                  </span>

                  <div className="space-y-3">

                    {activeEducation.certifications.map(
                      (certificate, index) => (
                        <div
                          key={certificate.name}
                          className="
                            group
                            flex
                            flex-col
                            gap-3
                            border-b
                            border-white/5
                            pb-3
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                          "
                        >

                          <div className="flex items-center gap-3">

                            <span className="text-[9px] text-neutral-700">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>

                              <p className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-white">
                                {certificate.name}
                              </p>

                              <p className="mt-1 text-[10px] tracking-[0.15em] text-neutral-700">
                                {certificate.issuer} ·{" "}
                                {certificate.year}
                              </p>

                            </div>

                          </div>

                          {/* DOWNLOAD BUTTON */}

                          <a
                            href={certificate.file}
                            download
                            className="
                              inline-flex
                              w-fit
                              items-center
                              gap-2
                              text-[10px]
                              tracking-[0.15em]
                              text-neutral-500
                              transition-colors
                              duration-300
                              hover:text-emerald-400
                            "
                          >
                            DOWNLOAD
                            <ArrowDownToLine
                              size={14}
                              strokeWidth={1.5}
                            />
                          </a>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ========================================= */}
          {/* CAROUSEL CONTROLS */}
          {/* ========================================= */}

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">

            {/* Progress Dots */}

            <div className="flex items-center gap-3">

              {education.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeEducation(index)}
                  aria-label={`Show education ${index + 1}`}
                  className={`
                    h-[2px]
                    transition-all
                    duration-500
                    ${
                      activeIndex === index
                        ? "w-12 bg-emerald-400"
                        : "w-6 bg-neutral-700 hover:bg-neutral-500"
                    }
                  `}
                />
              ))}

            </div>

            {/* Current Education */}

            <span className="hidden text-[10px] tracking-[0.2em] text-neutral-700 sm:block">
              {isPaused
                ? "PAUSED"
                : "AUTO ROTATING · 3 SEC"}
            </span>

          </div>

        </div>

        {/* ========================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ========================================= */}

        

      </div>
    </section>
  );
}