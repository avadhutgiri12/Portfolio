"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  GitCommitHorizontal,
  Star,
} from "lucide-react";

// ============================================================
// MANUALLY CONTROLLED PORTFOLIO DATA
// ============================================================

// Change this number whenever you add a new portfolio project.
const TOTAL_PROJECTS = 20;


// ============================================================
// PAST WORK EXPERIENCE
// ============================================================

// Add / remove your experiences here.
//
// Example:
// {
//   year: "2026",
//   type: "INTERNSHIP",
//   title: "Machine Learning Intern",
//   company: "Company Name",
//   description: "Worked on machine learning models...",
//   technologies: ["Python", "Pandas", "Scikit-learn"],
//   link: "https://example.com",
// }

const pastWork = [
  {
    year: "2025",
    type: "FREELANCE",
    title: "Tech Head",
    company: "TEDx Assam University, Silchar",
    description:
      "Technical Head of the Event TEDx Assam University, Silchar. Created a Website for booking and managing the event in real time Also Manged all the technical deficulties.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "#",
  },

  {
    year: "2025",
    type: "WEB DEVELOPMENT",
    title: "Frontend Developer",
    company: "Your Company / Organization",
    description:
      "Built responsive and modern web interfaces with a focus on performance, usability and clean visual design.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },

  {
    year: "2025",
    type: "COLLEGE PROJECT",
    title: "StoreWay",
    company: "Academic Project",
    description:
      "Designed a digital solution aimed at helping small retailers compete with modern e-commerce platforms.",
    technologies: ["React", "Next.js", "Firebase", "UI/UX"],
    link: "#",
  },
];

// ============================================================
// GITHUB TYPES
// ============================================================

type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GithubData = {
  repositories: number;
  commits: number;
  totalContributions: number;
  stars: number;
  forks: number;
  weeks: ContributionWeek[];
};

// ============================================================
// EMPTY GITHUB STATE
// ============================================================

const emptyGithubData: GithubData = {
  repositories: 0,
  commits: 0,
  totalContributions: 0,
  stars: 0,
  forks: 0,
  weeks: [],
};

// ============================================================
// COMPONENT
// ============================================================

export default function Experience() {
  const [githubData, setGithubData] =
    useState<GithubData>(emptyGithubData);

  const [loading, setLoading] = useState(true);

  // ==========================================================
  // FETCH GITHUB DATA
  // ==========================================================

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const response = await fetch("/api/github");

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const data = await response.json();

        setGithubData({
          repositories: data.repositories ?? 0,
          commits: data.commits ?? 0,
          totalContributions: data.totalContributions ?? 0,
          stars: data.stars ?? 0,
          forks: data.forks ?? 0,
          weeks: data.weeks ?? [],
        });
      } catch (error) {
        console.error("GitHub API error:", error);

        setGithubData(emptyGithubData);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  // ==========================================================
  // STATISTICS
  // ==========================================================

  const stats = [
    {
      value: loading
        ? "—"
        : githubData.commits.toLocaleString(),
      label: "GITHUB COMMITS",
      icon: GitCommitHorizontal,
    },

    {
      value: `${TOTAL_PROJECTS}+`,
      label: "PROJECTS",
      icon: Code2,
    },

    {
      value: loading
        ? "—"
        : githubData.repositories.toLocaleString(),
      label: "REPOSITORIES",
      icon: Code2,
    },

    {
      value: loading
        ? "—"
        : githubData.totalContributions.toLocaleString(),
      label: "CONTRIBUTIONS",
      icon: Star,
    },
  ];

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        
        px-6
        py-28
        text-white
        md:px-12
        lg:py-36
      "
    >
      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

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
          bg-emerald-500/[0.06]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================================================== */}
      {/* MAIN CONTAINER */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mb-20">

          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs tracking-[0.3em] text-emerald-400">
              EXPERIENCE
            </span>

            <span className="h-px w-16 bg-white/15" />

            <span className="text-xs tracking-[0.2em] text-neutral-600">
              / 005
            </span>
          </div>

          <h2
            className="
              max-w-5xl
              text-5xl
              font-medium
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
              text-white
              md:text-7xl
              lg:text-8xl
            "
          >
            BUILDING.
            <br />

            <span className="text-neutral-600">
              LEARNING.
            </span>

            <br />

            SHIPPING.
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-neutral-500
              md:text-base
            "
          >
            A snapshot of my development journey, GitHub
            activity, projects and the work I have built along
            the way.
          </p>
        </div>

        {/* ================================================== */}
        {/* STATISTICS */}
        {/* ================================================== */}

        <div
          className="
            mb-28
            grid
            border-l
            border-t
            border-white/10
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group
                  relative
                  min-h-[190px]
                  border-b
                  border-r
                  border-white/10
                  p-6
                  transition-colors
                  duration-500
                  hover:bg-white/[0.025]
                  md:p-8
                "
              >
                {/* Number */}

                <div className="flex items-start justify-between">

                  <span
                    className="
                      text-4xl
                      font-medium
                      tracking-[-0.04em]
                      md:text-5xl
                    "
                  >
                    {stat.value}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="
                      text-neutral-600
                      transition-colors
                      duration-300
                      group-hover:text-emerald-400
                    "
                  />
                </div>

                {/* Label */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    text-[10px]
                    tracking-[0.25em]
                    text-neutral-600
                    md:bottom-8
                    md:left-8
                  "
                >
                  {stat.label}
                </div>

                {/* Hover line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-emerald-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* GITHUB ACTIVITY */}
        {/* ================================================== */}

        <div className="mb-32  bg-[#080808] ">

          {/* Header */}

          <div
            className="
              mb-10
              flex
              flex-col
              gap-4
              border-b
              border-white/10
              pb-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>

              <p
                className="
                  mb-2
                  text-[10px]
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                GITHUB ACTIVITY
              </p>

              <h3
                className="
                  text-3xl
                  uppercase
                  tracking-[-0.03em]
                  md:text-4xl
                "
              >
                CODE / EVERY DAY
              </h3>

            </div>

            <div
              className="
                text-sm
                text-neutral-500
              "
            >
              {loading ? (
                "Loading activity..."
              ) : (
                <>
                  <span className="text-white">
                    {githubData.totalContributions.toLocaleString()}
                  </span>{" "}
                  contributions
                </>
              )}
            </div>
          </div>

          {/* ================================================== */}
          {/* CONTRIBUTION CARD */}
          {/* ================================================== */}

          <div
            className="
              overflow-hidden
              border
              border-white/10
              bg-white/[0.015]
              p-5
              md:p-8
            "
          >

            {/* Graph header */}

            <div
              className="
                mb-7
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>
                <span className="text-xs text-neutral-500">
                  Contribution activity
                </span>

                <p className="mt-1 text-[10px] text-neutral-700">
                  github.com/avadhutgiri12
                </p>
              </div>

              {/* Legend */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  text-neutral-600
                "
              >
                <span>LESS</span>

                <span className="h-2.5 w-2.5 rounded-[2px] bg-white/[0.04]" />

                <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-950" />

                <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-800" />

                <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-600" />

                <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400" />

                <span>MORE</span>
              </div>

            </div>

            {/* ================================================== */}
            {/* REAL GITHUB CONTRIBUTION GRAPH */}
            {/* ================================================== */}

            {loading ? (

              <div
                className="
                  flex
                  h-[110px]
                  items-center
                  justify-center
                  text-xs
                  tracking-[0.15em]
                  text-neutral-600
                "
              >
                LOADING GITHUB ACTIVITY...
              </div>

            ) : githubData.weeks.length > 0 ? (

              <div className="overflow-x-auto pb-3">

                <div
                  className="
                    flex
                    min-w-max
                    gap-[4px]
                  "
                >

                  {githubData.weeks.map(
                    (week, weekIndex) => (

                      <div
                        key={weekIndex}
                        className="
                          flex
                          flex-col
                          gap-[4px]
                        "
                      >

                        {week.contributionDays.map(
                          (day) => (

                            <div
                              key={day.date}
                              title={`${day.contributionCount} contributions on ${day.date}`}
                              className="
                                h-[11px]
                                w-[11px]
                                rounded-[2px]
                                transition-all
                                duration-200
                                hover:scale-125
                                hover:ring-1
                                hover:ring-emerald-400
                              "
                              style={{
                                backgroundColor:
                                  day.contributionCount === 0
                                    ? "rgba(255,255,255,0.04)"
                                    : day.color,
                              }}
                            />

                          )
                        )}

                      </div>

                    )
                  )}

                </div>

              </div>

            ) : (

              <div
                className="
                  flex
                  h-[110px]
                  items-center
                  justify-center
                  text-xs
                  text-neutral-600
                "
              >
                GitHub activity unavailable.
              </div>

            )}

            {/* Contribution count */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-2
                border-t
                border-white/5
                pt-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <span className="text-[10px] text-neutral-600">
                {loading
                  ? "Loading..."
                  : `${githubData.totalContributions.toLocaleString()} contributions`}
              </span>

              <a
                href="https://github.com/avadhutgiri12"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  tracking-[0.15em]
                  text-neutral-500
                  transition-colors
                  hover:text-emerald-400
                "
              >
                VIEW GITHUB

                <ArrowUpRight size={14} />
              </a>

            </div>

          </div>
        </div>

        {/* ================================================== */}
        {/* PAST WORK */}
        {/* ================================================== */}

        <div>

          {/* Section header */}

          <div className="mb-12">

            <p
              className="
                mb-3
                text-[10px]
                tracking-[0.3em]
                text-emerald-400
              "
            >
              PAST WORK
            </p>

            <div
              className="
                flex
                flex-col
                justify-between
                gap-6
                border-b
                border-white/10
                pb-6
                md:flex-row
                md:items-end
              "
            >

              <h3
                className="
                  text-4xl
                  uppercase
                  tracking-[-0.04em]
                  md:text-6xl
                "
              >
                EXPERIENCE
              </h3>

              <p
                className="
                  max-w-sm
                  text-sm
                  leading-6
                  text-neutral-600
                "
              >
                Selected work, collaborations, projects and
                experiences from my development journey.
              </p>

            </div>
          </div>

          {/* ================================================== */}
          {/* EXPERIENCE TIMELINE */}
          {/* ================================================== */}

          <div className="relative">

            {/* Timeline line */}

            <div
              className="
                absolute
                left-[7px]
                top-0
                hidden
                h-full
                w-px
                bg-white/10
                md:block
              "
            />

            <div>

              {pastWork.map((work, index) => (

                <article
                  key={`${work.year}-${work.title}-${index}`}
                  className="
                    group
                    relative
                    border-b
                    border-white/10
                    py-10
                    md:pl-16
                  "
                >

                  {/* Timeline dot */}

                  <div
                    className="
                      absolute
                      left-0
                      top-[52px]
                      hidden
                      h-3
                      w-3
                      rounded-full
                      border
                      border-emerald-400
                      bg-[#080808]
                      md:block
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-[3px]
                        rounded-full
                        bg-emerald-400
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  <div
                    className="
                      grid
                      gap-6
                      lg:grid-cols-[120px_1fr_180px]
                      lg:gap-10
                    "
                  >

                    {/* Year */}

                    <div>
                      <span
                        className="
                          text-sm
                          tracking-[0.15em]
                          text-neutral-600
                        "
                      >
                        {work.year}
                      </span>
                    </div>

                    {/* Main content */}

                    <div>

                      <div
                        className="
                          mb-3
                          flex
                          flex-wrap
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            tracking-[0.25em]
                            text-emerald-400
                          "
                        >
                          {work.type}
                        </span>

                        <span className="h-px w-6 bg-white/10" />

                        <span className="text-[10px] text-neutral-600">
                          {work.company}
                        </span>

                      </div>

                      <h4
                        className="
                          text-2xl
                          uppercase
                          tracking-[-0.02em]
                          transition-colors
                          duration-300
                          group-hover:text-emerald-400
                          md:text-3xl
                        "
                      >
                        {work.title}
                      </h4>

                      <p
                        className="
                          mt-4
                          max-w-2xl
                          text-sm
                          leading-7
                          text-neutral-500
                        "
                      >
                        {work.description}
                      </p>

                      {/* Technologies */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {work.technologies.map(
                          (technology) => (

                            <span
                              key={technology}
                              className="
                                border
                                border-white/10
                                px-3
                                py-1.5
                                text-[9px]
                                tracking-[0.12em]
                                text-neutral-500
                                transition-colors
                                duration-300
                                group-hover:border-white/15
                              "
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                    </div>

                    {/* Work link */}

                    <div
                      className="
                        flex
                        items-start
                        lg:justify-end
                      "
                    >

                      {work.link !== "#" && (

                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            tracking-[0.15em]
                            text-neutral-600
                            transition-colors
                            hover:text-emerald-400
                          "
                        >
                          VIEW WORK

                          <ArrowUpRight size={14} />
                        </a>

                      )}

                    </div>

                  </div>
                </article>

              ))}

            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* CURRENT FOCUS */}
        {/* ================================================== */}

        <div
          className="
            mt-24
            border-t
            border-white/10
            pt-8
          "
        >

          <div
            className="
              grid
              gap-6
              md:grid-cols-[200px_1fr]
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                "
              />

              <span
                className="
                  text-[10px]
                  tracking-[0.25em]
                  text-emerald-400
                "
              >
                CURRENTLY
              </span>

            </div>

            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                text-neutral-500
                md:text-base
              "
            >
              Exploring Machine Learning, AI automation,
              full-stack development and building practical
              products that solve real-world problems.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}