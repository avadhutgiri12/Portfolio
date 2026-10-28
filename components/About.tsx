
"use client";

import Image from "next/image";
import {
  Code2,
  BrainCircuit,
  Palette,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const technologies = [
  { name: "React", short: "Re", color: "bg-[#252630] text-white" },
  { name: "Next.js", short: "N", color: "bg-[#252630] text-white" },
  { name: "Python", short: "Py", color: "bg-[#252630] text-white" },
  { name: "TypeScript", short: "TS", color: "bg-[#252630] text-white" },
  { name: "Machine Learning", short: "ML", color: "bg-emerald-400 text-[#171717]" },
  { name: "Tailwind CSS", short: "Tw", color: "bg-[#252630] text-white" },
];

const specialties = [
  {
    number: "01",
    title: "Web Development",
    description: "Building modern digital experiences.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Machine Learning",
    description: "Turning data into intelligent solutions.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Creative Development",
    description: "Combining design with technology.",
    icon: Palette,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f0f0ed] px-5 py-20 text-[#292a32] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* Section label */}
        <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-4">
          <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 sm:text-xs">
            ABOUT / 001
          </span>

          <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            A LITTLE ABOUT ME
          </span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:grid-cols-[0.9fr_1.15fr_0.7fr] lg:gap-14">

          {/* LEFT: Portrait */}
          <div className="relative mx-auto w-full max-w-[430px] md:mx-0 md:max-w-none">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#deded9] sm:rounded-[36px]">

              <Image
                src="/aboutIMG.webp"
                alt="Portrait of Avadhut Giri"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 32vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-xs font-medium text-white/70">
                    COMPUTER SCIENCE
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Avadhut Giri
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
                  <Sparkles size={19} />
                </div>
              </div>
            </div>

            {/* Image footer */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-500">
                FIG. 001 — PROFILE
              </span>

              <span className="text-xs text-neutral-500">
                Developer & ML Enthusiast
              </span>
            </div>
          </div>

          {/* CENTER: Introduction */}
          <div className="flex flex-col">

            {/* Heading */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[clamp(4.5rem,9vw,7rem)] font-black leading-[0.85] tracking-[-0.085em] sm:text-[7rem] lg:text-[6rem] xl:text-[7rem]">
                Hello!
              </h2>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 sm:h-16 sm:w-16">
                <Code2 size={29} strokeWidth={1.8} />
              </div>
            </div>

            {/* Introduction */}
            <div className="mt-8 max-w-xl">
              <p className="text-base leading-7 text-[#414149] sm:text-lg sm:leading-8">
                I&apos;m <strong className="font-semibold text-[#252630]">Avadhut Giri</strong>,
                a Computer Science student and machine-learning enthusiast
                who enjoys turning ideas into useful digital experiences.
              </p>

              <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
                I work across web development, UI/UX, machine learning,
                and AI. I enjoy experimenting with new technologies and
                building projects that solve real-world problems.
              </p>

              <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
                My goal is to combine thoughtful design with intelligent
                technology to create digital products that are both
                useful and engaging.
              </p>
            </div>

            {/* Divider */}
            <div className="my-9 h-px w-full bg-black/10" />

            {/* Areas of interest */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  WHAT I DO
                </h3>

                <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                  001 — 003
                </span>
              </div>

              <div className="space-y-5">
                {specialties.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group flex items-center gap-4 border-b border-black/10 pb-5 transition-all duration-300"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">
                        {item.number}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 transition-colors duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-400">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Skills */}
          <aside className="flex flex-col gap-10 md:col-span-2 md:grid md:grid-cols-2 md:gap-12 lg:col-span-1 lg:flex lg:gap-12">

            {/* Technology grid */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight">
                  SKILLS
                </h3>

                <span className="font-mono text-[10px] text-neutral-400">
                  06 ITEMS
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:max-w-[330px] lg:max-w-none">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className={`group flex aspect-square flex-col items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${tech.color}`}
                  >
                    <span className="text-2xl font-black tracking-tight sm:text-3xl">
                      {tech.short}
                    </span>

                    <span className="mt-2 px-1 text-center text-[9px] font-medium opacity-75 sm:text-[10px]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight">
                  MY FOCUS
                </h3>

                <Globe size={21} strokeWidth={1.7} />
              </div>

              <p className="mb-6 text-sm leading-7 text-neutral-500">
                Exploring the intersection of software engineering,
                intelligent systems, and creative problem-solving.
              </p>

              <div className="space-y-4">
                {[
                  "Full-Stack Development",
                  "AI-Powered Applications",
                  "Data & ML Solutions",
                  "Interactive UI/UX",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-black/10 pb-3"
                  >
                    <span className="font-mono text-[10px] text-emerald-600">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-[#414149]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal note */}
            <div className="relative overflow-hidden rounded-2xl bg-[#252630] p-6 text-white md:col-span-2 lg:col-span-1">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />

              <div className="relative">
                <Sparkles
                  size={22}
                  className="mb-5 text-emerald-400"
                />

                <p className="text-lg font-bold leading-7">
                  Always learning.
                  <br />
                  Always building.
                </p>

                <p className="mt-3 text-xs leading-6 text-white/55">
                  Turning curiosity into projects and ideas into reality.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5 sm:mt-20">
          <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-500">
            AVADHUT GIRI © 2026
          </span>

          <span className="hidden text-[10px] tracking-[0.2em] text-neutral-400 sm:block">
            DESIGN · DEVELOPMENT · INTELLIGENCE
          </span>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs font-semibold transition-colors hover:text-emerald-700"
          >
            BACK TO TOP

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all group-hover:border-emerald-500 group-hover:bg-emerald-400">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}