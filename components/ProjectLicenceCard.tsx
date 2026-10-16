"use client";

import { useState, useEffect, useRef } from "react";
import { Eye } from "lucide-react";

import { Project } from "@/data/portfolio";

interface ProjectLicenceCardProps {
  project: Project;
}

export default function ProjectLicenceCard({ project }: ProjectLicenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (cardRef.current) {
      const cardElement = cardRef.current;
      cardElement.style.opacity = "0";
      cardElement.style.transform = "translateY(20px)";

      const triggerAnimation = () => {
        cardElement.style.transition = reducedMotion
          ? "none"
          : "opacity 0.5s ease, transform 0.5s ease";
        cardElement.style.opacity = "1";
        cardElement.style.transform = "translateY(0)";
      };

      requestAnimationFrame(triggerAnimation);
    }
  }, [reducedMotion]);

  return (
    <div
      ref={cardRef}
      className="
        relative
        bg-[#fdf6e3]
        border-dashed
        border-[rgba(101,76,71,0.2)]
        rounded
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:shadow-md
        min-h-[600px]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================= */}
      /* 1. OUTER DOCUMENT CARD */
      /* ========================================= */

      {/* ========================================= */}
      /* 2. INSET DASHED BORDER (handled by outer border) */
      /* ========================================= */

      {/* ========================================= */}
      /* 3. TOP HEADER WITH THREE STARS AND LICENCE NUMBER */
      /* ========================================= */
      <div className="mb-6 flex items-between">
        <div className="flex-1">
          <div className="font-mono text-[10px] tracking-[0.3em] text-red-500">
            ★ ★ ★
          </div>
        </div>
        <div className="flex-1 items-center justify-end">
          <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-800">
            LICENCE
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-800 ml-2">
            {project.num.padStart(4, "0")}
          </div>
        </div>
      </div>

      {/* ========================================= */}
      /* 4. TWO-COLUMN PROJECT IDENTITY SECTION */
      /* ========================================= */
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Project Licence Box */}
        <div className="aspect-[1/1] border border-neutral-400/[0.3] flex items-center justify-center">
          <span className="text-red-500 text-[12px]">📄</span>
        </div>

        {/* Short Licence Description */}
        <div className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
          {project.subtitle || "Short licence description"}
        </div>
      </div>

      {/* ========================================= */}
      /* 5. THUMBNAIL WITH PROJECT NAME */
      /* ========================================= */
      <div className="relative h-[200px] mb-6 overflow-hidden border border-neutral-400/[0.3]">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-40
            transition-transform
            duration-500
            ${isHovered && !reducedMotion ? "scale-105" : ""}
          `}
        />
        {/* Project Name Overlay */}
        <div className="absolute bottom-4 left-4 z-10 font-black text-white text-[18px] tracking-tight">
          {project.title}
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
      </div>

      {/* ========================================= */}
      /* 6. LIVE STATUS LABEL */
      /* ========================================= */
      <div className="mb-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-emerald-400 rounded"></div>
        <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-800">
          LIVE
        </span>
      </div>

      {/* ========================================= */}
      /* 7. DECORATIVE BARCODE AND PROJECT ID */
      /* ========================================= */
      <div className="relative h-4 mb-6">
        {/* Barcode Effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(101,76,71,0.2) 0px, rgba(101,76,71,0.2) 1px, transparent 1px, transparent 5px)"
        }}></div>
        {/* Project ID */}
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] tracking-widest text-neutral-600">
          PROJECT ID: {project.num}
        </div>
      </div>

      {/* ========================================= */}
      /* 8. PROJECT TITLE AND SHORT LICENCE DESCRIPTION */
      /* ========================================= */
      <div className="mb-6">
        <h3 className="font-black text-neutral-900 text-[24px] tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
          {project.subtitle || "Short licence description"}
        </p>
      </div>

      {/* ========================================= */}
      /* 9. METADATA TABLE */
      /* ========================================= */
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4 text-[9px] font-mono">
          <div>
            <span className="text-neutral-600">PROJECT NAME</span>
          </div>
          <div>
            <span className="text-neutral-800">{project.title}</span>
          </div>
          <div>
            <span className="text-neutral-600">YEAR</span>
          </div>
          <div>
            <span className="text-neutral-800">{project.year}</span>
          </div>
          <div>
            <span className="text-neutral-600">TYPE</span>
          </div>
          <div>
            <span className="text-neutral-800">{project.category}</span>
          </div>
          <div>
            <span className="text-neutral-600">ROLE</span>
          </div>
          <div>
            <span className="text-neutral-800">{project.role}</span>
          </div>
          <div>
            <span className="text-neutral-600">STATUS</span>
          </div>
          <div>
            <span className="text-neutral-800 text-emerald-400">ACTIVE</span>
          </div>
          <div>
            <span className="text-neutral-600">EXPERTISE</span>
          </div>
          <div>
            <span className="text-neutral-800">{project.tools.join(" • ")}</span>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      /* 10. BROWSER-STYLE PREVIEW TOOLBAR */
      /* ========================================= */
      <div className="relative h-10 mb-4 border-b border-neutral-400/[0.3]">
        {/* Browser Frame */}
        <div className="absolute inset-0 border border-neutral-600/[0.3]"></div>
        {/* Toolbar Background */}
        <div className="absolute inset-0 bg-neutral-500/[0.05]"></div>
        {/* Toolbar Content */}
        <div className="absolute inset-2 flex items-center gap-2 font-mono text-[8px] text-neutral-600">
          <span>▶</span>
          <span>{project.title}</span>
          <span className="h-0.5 bg-neutral-600/[0.3] mx-2"></span>
          <span>🌐</span>
          <span>website-preview</span>
          <span className="ml-auto">⏺</span>
          <span>LIVE</span>
        </div>
      </div>

      {/* ========================================= */}
      /* 11. LARGE WEBSITE SCREENSHOT */
      /* ========================================= */
      <div className="relative h-[240px] mb-6 border border-neutral-400/[0.3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-30
            transition-transform
            duration-500
            ${isHovered && !reducedMotion ? "scale-102" : ""}
          `}
        />
        {/* Screen Glare Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
        {/* Device Frame */}
        <div className="absolute inset-0 border border-neutral-700/[0.2]"></div>
      </div>

      {/* ========================================= */}
      /* 12. FOOTER */
      /* ========================================= */
      <div className="mt-8 pt-6 border-t border-neutral-400/[0.3]">
        <div className="flex justify-between mb-4 text-[9px] font-mono">
          {/* Validity Statement */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">VALID UNTIL</span>
            <span className="text-neutral-800">{project.year}-12-31</span>
          </div>

          {/* Circular Verification Seal */}
          <div className="relative w-10 h-10 border border-neutral-600/[0.3] rounded-full flex items-center justify-center">
            <span className="text-emerald-400 text-[8px]">✓</span>
          </div>

          {/* Case-Study Link */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">OPEN CASE →</span>
            <span className="text-neutral-800 hover:text-emerald-400 transition-colors duration-300">
              {project.description.substring(0, 25)}...
            </span>
          </div>
        </div>

        <div className="flex justify-between text-[9px] font-mono">
          {/* Footer Left */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">IT STOPS BEING USEFUL</span>
            <span className="text-neutral-800">NEVER</span>
          </div>

          {/* Footer Center - Live Site Link */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">LIVE SITE ↗</span>
            <span className="text-neutral-800 hover:text-emerald-400 transition-colors duration-300">
              Visit Site
            </span>
          </div>

          {/* Footer Right - Repository Link */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">REPOSITORY ↧</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Viewing repository for ${project.title}`);
              }}
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-emerald-400
                hover:text-emerald-300
                transition-colors
                duration-300
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-emerald-400
              "
            >
              <Eye size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}