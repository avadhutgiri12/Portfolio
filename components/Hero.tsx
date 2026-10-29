"use client";

import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import PickUpButton from "./PickUpButton";
import PillLogo from "./PillLogo";
import { HERO_DATA } from "@/data/portfolio";

export default function Hero() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={HERO_DATA.backgroundImage}
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />

        {/* Left Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
      </div>

      {/* Top Left Logo */}
      <div className="fixed left-5 top-5 z-50 sm:left-10 sm:top-6">
        <PillLogo
          name={HERO_DATA.logo.name}
          accent={HERO_DATA.logo.accent}
          size={HERO_DATA.logo.size}
        />
      </div>

      {/* Top Right Contact Button */}
      <div className="fixed right-5 top-5 z-50 sm:right-10 sm:top-6">
        <PickUpButton onClick={handleContactClick}>
          <>
            {HERO_DATA.contactButton.text}
            <ArrowUpRight size={18} className="ml-2" />
          </>
        </PickUpButton>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 pb-8 pt-24 sm:px-12 lg:px-[9%]">

          {/* Intro Label */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              className="h-5 w-[3px] rounded-full "
              style={{ background: HERO_DATA.intro.accentColor }}
            />

            <p className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
              {HERO_DATA.intro.name} — {HERO_DATA.intro.title}
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-7xl bebas-neue text-[clamp(3rem,6vw,6rem)] font-normal uppercase leading-[0.95] tracking-[-0.02em]">
            <span className="block">{HERO_DATA.headline.line1}</span>

            <span className="block" style={{ color: HERO_DATA.headline.line2Color }}>
              {HERO_DATA.headline.line2}
            </span>

            <span className="block">{HERO_DATA.headline.line3}</span>
          </h1>

          {/* Status / Project Information */}
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-9">
            {HERO_DATA.specialties.map((specialty, index) => (
              <React.Fragment key={specialty}>
                <span
                  className={index === 0
                    ? "text-sm  text-white/70"
                    : "text-sm text-white/70"
                  }
                >
                  {specialty}
                </span>
                {index < HERO_DATA.specialties.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <a
              href={HERO_DATA.cta.href}
              className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all duration-300"
              style={{ backgroundColor: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = HERO_DATA.cta.hoverBgColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              {HERO_DATA.cta.text}

              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-black group-hover:text-white"
                style={{ backgroundColor: HERO_DATA.cta.iconBgColor }}
              >
                <ArrowDown size={19} />
              </span>
            </a>
          </div>

          {/* Supporting Text */}
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
            {HERO_DATA.description}
          </p>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 sm:flex sm:right-10">
        <span>{HERO_DATA.scrollIndicator.text}</span>
        <span className="h-px w-10 bg-emerald-400/70" />
      </div>
    </section>
  );
}