"use client";

import { X } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101010] p-6 md:p-10"
      >

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-black"
        >
          <X size={16} />
        </button>

        <div className="mb-8">
          <span className="font-mono text-xs text-emerald-400">
            {project.num}
          </span>

          <p className="mt-3 font-mono text-[10px] tracking-widest text-neutral-500">
            {project.category}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            {project.title}
          </h2>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-[300px] w-full object-cover"
          />
        </div>

        <div className="space-y-8">

          <div>
            <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-500">
              ARCHITECTURAL SUMMARY
            </p>

            <p className="leading-7 text-neutral-300">
              {project.description}
            </p>
          </div>

          <div>
            <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-500">
              RECORDED CLIENT IMPACT
            </p>

            <p className="text-lg text-emerald-400">
              {project.impact}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-y border-white/10 py-6 md:grid-cols-3">

            <div>
              <p className="font-mono text-[10px] text-neutral-500">
                ROLE
              </p>
              <p className="mt-2 text-sm text-white">
                {project.role}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] text-neutral-500">
                YEAR
              </p>
              <p className="mt-2 text-sm text-white">
                {project.year}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] text-neutral-500">
                STACK & TOOLS
              </p>
              <p className="mt-2 text-sm text-white">
                {project.tools.join(", ")}
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button
              onClick={onClose}
              className="flex-1 rounded-lg bg-emerald-500 py-3 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-emerald-400"
            >
              Return to Archive
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="rounded-lg border border-white/20 px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-white transition hover:border-emerald-500"
            >
              Commission Similar Project
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}