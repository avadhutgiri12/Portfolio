'use client';

import { useState } from "react";

import { PROJECTS_DATA } from "@/data/portfolio";
import ProjectDetail from "./ProjectDetail";

export default function ProjectShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle an empty project list
  if (PROJECTS_DATA.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center text-neutral-500">
        No projects to display
      </div>
    );
  }

  // Get the currently selected project
  const selectedProject = PROJECTS_DATA[selectedIndex];

  return (
    <section
      id="showcase"
      className="
        relative
        min-h-screen
        overflow-hidden
        
        px-6
        py-24
        text-white
        md:px-12
        lg:py-32
      "
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Emerald glow */}
      <div
        aria-hidden="true"
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
        {/* Header */}
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-400">
              01 / PROJECTS
            </p>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl">
              PROJECTS
            </h2>
          </div>

          <div className="hidden text-right md:block">
            <p className="font-mono text-xs text-neutral-500">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(PROJECTS_DATA.length).padStart(2, "0")}
            </p>

            <p className="mt-2 font-mono text-[9px] tracking-widest text-neutral-600">
              SELECT A PROJECT TO VIEW DETAILS
            </p>
          </div>
        </div>

        {/* Main Content: Two Panel Layout */}
        <div className="min-h-[500px]">
          {/* Desktop: Two Panel Layout */}
          <div className="hidden md:flex md:h-[500px] md:items-stretch">
            {/* Left Panel: Project List */}
            <div className="w-1/4 border-r border-neutral-700/50">
              <div className="h-full overflow-y-auto p-4">
                <div className="space-y-2">
                  {PROJECTS_DATA.map((project, index) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-700/50
                        cursor-pointer
                        transition-all duration-200
                        ${index === selectedIndex
                          ? 'bg-neutral-700/50 border-emerald-400/50'
                          : 'hover:bg-neutral-700/30 hover:border-emerald-400/30'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-400">
                          {project.num.padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.2em] ${index === selectedIndex ? 'text-emerald-400' : 'text-neutral-200'}">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Project Details */}
            <div className="w-3/4 p-6">
              <ProjectDetail project={selectedProject} />
            </div>
          </div>

          {/* Mobile: Stacked Layout with Grid Format for List */}
          <div className="md:hidden">
            {/* Project List (Mobile - Button format) */}
            <div className="mb-6">
              <div className="work-tabs flex flex-wrap gap-3">
                {PROJECTS_DATA.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`
                      work-tab flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-700/50
                      cursor-pointer
                      transition-all duration-200
                      ${index === selectedIndex
                        ? 'bg-emerald-500 text-white font-bold border-emerald-500'
                        : 'hover:bg-neutral-700/30 hover:border-emerald-400/30'}
                    `}
                  >
                    <span className="work-tab-n font-mono text-[9px] tracking-[0.2em] ${index === selectedIndex ? 'text-white font-bold' : 'text-neutral-200'}">
                      {project.num.padStart(2, "0")}
                    </span>
                    <span className="work-tab-t font-mono text-[9px] tracking-[0.2em] ${index === selectedIndex ? 'text-white font-bold' : 'text-neutral-200'}">
                      {project.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details (Mobile - Full width below list, moved up) */}
            <div className="mt-6">
              <ProjectDetail project={selectedProject} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}