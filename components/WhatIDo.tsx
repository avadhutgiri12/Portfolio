"use client";
import VerticalCylinderCarousel from "@/components/VerticalCylinderCarousel";

const SERVICES = [
  {
    id: "1",
    number: "01",
    title: "BUILDING WEBSITES",
    description:
      "I create modern, responsive and high-performance websites with clean interfaces and smooth user experiences.",
    tags: ["WEB DEVELOPMENT"],
  },
  {
    id: "2",
    number: "02",
    title: "UI / UX DESIGN",
    description:
      "I design clean and intuitive interfaces focused on usability, visual hierarchy and engaging digital experiences.",
    tags: ["UI / UX"],
  },
  {
    id: "3",
    number: "03",
    title: "MODEL TRAINING",
    description:
      "I build and train machine learning models using real-world datasets, feature engineering and model evaluation.",
    tags: ["MACHINE LEARNING"],
  },
  {
    id: "4",
    number: "04",
    title: "MODEL DEVELOPMENT",
    description:
      "I develop practical ML solutions and transform trained models into usable applications and intelligent systems.",
    tags: ["AI / ML"],
  },
  {
    id: "5",
    number: "05",
    title: "AI AUTOMATION",
    description:
      "I create AI-powered automation workflows that reduce repetitive tasks and make digital processes more efficient.",
    tags: ["AI AUTOMATION"],
  },
  {
    id: "6",
    number: "06",
    title: "DATA SOLUTIONS",
    description:
      "I work with data processing, visualization and databases to turn raw information into useful insights.",
    tags: ["DATA & DATABASE"],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
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
          </div>

          <div className="flex items-end">
            <div className="
              border-l
              border-white/10
              pl-6
            ">
              {/* Counter (hidden on mobile, visible on desktop) */}
              <div className="hidden text-right sm:block">
                <p className="font-mono text-xs text-neutral-500">
                  01 / 06
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
          </div>
        </div>

        {/* Vertical Cylinder Carousel */}
        <div className="mt-12">
          <VerticalCylinderCarousel items={SERVICES} />
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