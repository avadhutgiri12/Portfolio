"use client";

import Image from "next/image";

const technologies = [
  "Next.js / React",
  "Python",
  "TypeScript",
  "Tailwind CSS",
  "Machine Learning",
  "AI / Automation",
];

const highlights = [
  {
    number: "(01)",
    title: "Machine Learning",
  },
  {
    number: "(02)",
    title: "Creative Development",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-6 
        py-28
        min-h-[100svh]
        text-white
        md:px-12 md:py-36
      "
    >
      {/* ================= SUBTLE GRID ================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16">

          <div className="mb-7 font-mono text-xs tracking-[0.3em] text-emerald-400">
            ABOUT / 001
          </div>

          <h2
            className="
              max-w-5xl
              text-7xl
              font-black
              leading-[0.82]
              tracking-[-0.06em]
              text-white
              md:text-8xl
              lg:text-[10rem]
            "
          >
            HELLO!
          </h2>

        </div>

        {/* ================= INTRO + CARD ================= */}

        <div
  className="
    grid
    items-start
    gap-x-10
    gap-y-10
    lg:grid-cols-[1fr_1fr_320px]
    lg:grid-rows-auto
  "
>

          {/* ================= INTRO ================= */}

          {/* ================= FIRST ABOUT COLUMN ================= */}

  <div className="lg:col-start-1 lg:row-start-1">

    <p className="max-w-md text-sm leading-7 text-neutral-400 md:text-base">
      I&apos;m Avadhut Giri, a Computer Science student and
      machine-learning enthusiast who enjoys turning ideas into
      useful digital experiences.
    </p>

    <p className="mt-7 max-w-md text-sm leading-7 text-neutral-500 md:text-base">
      I work across web development, UI/UX, machine learning and AI.
      I enjoy experimenting with new technologies and building
      projects that solve real-world problems.
    </p>

  </div>


  {/* ================= SECOND ABOUT COLUMN ================= */}

  <div className="lg:col-start-2 lg:row-start-1">

    <p className="max-w-md text-sm leading-7 text-neutral-400 md:text-base">
      I care about both sides of technology — how something looks
      and how it actually works. From designing an interface to
      training a model, I enjoy being involved from the first idea
      to the final implementation.
    </p>

    <p className="mt-7 max-w-md text-sm leading-7 text-neutral-500 md:text-base">
      Currently focused on improving my skills in full-stack
      development, machine learning and AI-powered applications.
    </p>

    <div className="mt-8 border-t border-white/10 pt-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
        Currently building · learning · experimenting
      </p>
    </div>

  </div>

          {/* ================= ID CARD ================= */}

           <div
    className="
      relative
      mx-auto
      w-full
      max-w-[290px]
      lg:col-start-3
      lg:row-start-1
      lg:row-span-2
      lg:self-start
    
    "
  >

    {/* Pin */}
    <div
      className="
        absolute
        -top-7
        left-1/2
        z-20
        h-12
        w-6
        -translate-x-1/2
        rounded-b-lg
        bg-neutral-700
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-1
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          border
          border-neutral-500
          bg-neutral-800
        "
      />
    </div>

            {/* Card */}
     <div
      className="
        id-card-swing
        relative
        border
        border-white/10
        bg-[#111111]
        p-4
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        rounded-2xl
      "
    >

              {/* Photo */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  bg-neutral-900
                  grayscale-[15%]
                "
              >
               <Image
  src="/profile.png"
  alt="Avadhut Giri"
  fill
  className="object-contain scale-[1.7] translate-y-[40%]"
/>

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-emerald-500/5 mix-blend-screen" />
              </div>

              {/* Name */}
              <div className="mt-5">

                <h3 className="text-xl font-bold tracking-tight text-white">
                  AVADHUT GIRI
                </h3>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-400">
                  CS STUDENT · ML ENTHUSIAST
                </p>

              </div>

              {/* Details */}
              <div className="mt-5 grid grid-cols-2 border border-white/10">

                <div className="border-b border-r border-white/10 p-3">
                  <span className="block font-mono text-[8px] uppercase text-neutral-600">
                    Focus
                  </span>

                  <span className="mt-1 block text-[10px] font-medium text-neutral-300">
                    Web · AI · ML
                  </span>
                </div>

                <div className="border-b border-white/10 p-3">
                  <span className="block font-mono text-[8px] uppercase text-neutral-600">
                    Status
                  </span>

                  <span className="mt-1 block text-[10px] font-medium text-neutral-300">
                    Building
                  </span>
                </div>

                <div className="border-r border-white/10 p-3">
                  <span className="block font-mono text-[8px] uppercase text-neutral-600">
                    Role
                  </span>

                  <span className="mt-1 block text-[10px] font-medium text-neutral-300">
                    Developer
                  </span>
                </div>

                <div className="p-3">
                  <span className="block font-mono text-[8px] uppercase text-neutral-600">
                    Interest
                  </span>

                  <span className="mt-1 block text-[10px] font-medium text-neutral-300">
                    AI Systems
                  </span>
                </div>

              </div>

              {/* Barcode */}
              <div className="mt-5">

                <div
                  className="h-8 w-full opacity-70"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 5px, #ffffff 5px, #ffffff 6px, transparent 6px, transparent 9px)",
                  }}
                />

                <div className="mt-2 flex justify-between font-mono text-[7px] tracking-wider text-neutral-600">
                  <span>AVD-2026</span>
                  <span>PORTFOLIO</span>
                </div>

              </div>

            </div>
          </div>

          {/* ================= WHAT I WORK WITH ================= */}

          <div className="border-t border-white/10 lg:col-span-2">

            <div className="grid gap-10 md:grid-cols-[1fr_1fr]">

              {/* Technologies */}

              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    md:text-3xl
                  "
                >
                  WHAT I WORK WITH
                </h3>

                <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">

                  {technologies.map((technology) => (
                    <div
                      key={technology}
                      className="
                        border-b
                        border-white/5
                        pb-2
                        font-mono
                        text-xs
                        text-neutral-500
                        transition-colors
                        hover:text-emerald-400
                      "
                    >
                      {technology}
                    </div>
                  ))}

                </div>

              </div>

              {/* Highlights */}

              <div>

                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  ALSO
                </p>

                <div className="flex flex-wrap gap-5">

                  {highlights.map((item) => (
                    <div
                      key={item.number}
                      className="
                        group
                        flex
                        h-28
                        w-28
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        text-center
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-emerald-400/60
                        hover:bg-emerald-400/[0.04]
                      "
                    >
                      <span className="font-mono text-[8px] text-neutral-600">
                        {item.number}
                      </span>

                      <span
                        className="
                          mt-2
                          max-w-[75px]
                          text-[10px]
                          leading-3
                          text-neutral-400
                          transition-colors
                          group-hover:text-emerald-400
                        "
                      >
                        {item.title}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="
            mt-16
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-neutral-600
          "
        >
          <span>ABOUT / 001</span>
          <span className="hidden md:block">
            DESIGN · CODE · AI
          </span>
          <span>2026</span>
        </div>

      </div>
    </section>
  );
}