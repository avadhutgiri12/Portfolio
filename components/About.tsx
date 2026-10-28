
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { ABOUT_DATA } from "@/data/portfolio";

export default function About() {
  const { portrait, greeting, introduction, specialties, skills, focus, personalNote, footer } = ABOUT_DATA;
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
                src={portrait.image}
                alt={portrait.alt}
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
                    {portrait.caption.label}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    {portrait.caption.name}
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
                {portrait.footer.figureLabel}
              </span>

              <span className="text-xs text-neutral-500">
                {portrait.footer.role}
              </span>
            </div>
          </div>

          {/* CENTER: Introduction */}
          <div className="flex flex-col">

            {/* Heading */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[clamp(4.5rem,9vw,7rem)] font-black leading-[0.85] tracking-[-0.085em] sm:text-[7rem] lg:text-[6rem] xl:text-[7rem]">
                {greeting.text}
              </h2>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16" style={{ backgroundColor: greeting.iconBgColor }}>
                <greeting.icon size={29} strokeWidth={1.8} />
              </div>
            </div>

            {/* Introduction */}
            <div className="mt-8 max-w-xl">
              {introduction.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`xmind text-base leading-7 text-[#414149] ${index > 0 ? 'mt-5' : ''}`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
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
                      className="group flex items-center gap-4 border-b border-black/10 pb-5 transition-all duration-300 cursor-pointer"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">
                        {item.number}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 transition-colors duration-300 group-hover:border-[#ffbe38] group-hover:bg-[#ffbe38]">
                        <Icon size={20} strokeWidth={1.7} className="text-[#252630] group-hover:text-[#171717]" />
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
                        className="shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ffbe38]"
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
                  {skills.title}
                </h3>

                <span className="font-mono text-[10px] text-neutral-400">
                  {skills.countLabel}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:max-w-[330px] lg:max-w-none">
                {skills.technologies.map((tech) => {
                  const SkillIcon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="group flex aspect-square flex-col items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-[#252630] text-white"
                    >
                      <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SkillIcon size={32} color="#ffbe38" />
                      </div>
                      <span className="mt-2 px-1 text-center text-[9px] font-medium opacity-75 sm:text-[10px]">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Focus */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight">
                  {focus.title}
                </h3>

                <focus.icon size={21} strokeWidth={1.7} />
              </div>

              <p className="mb-6 text-sm leading-7 text-neutral-500">
                {focus.description}
              </p>

              <div className="space-y-4">
                {focus.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 border-b border-black/10 pb-3"
                  >
                    <span className="font-mono text-[10px]" style={{ color: "#ffbe38" }}>
                      {item.number}
                    </span>

                    <span className="text-sm font-semibold text-[#414149]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal note */}
            <div className="relative overflow-hidden rounded-2xl p-6 text-white md:col-span-2 lg:col-span-1" style={{ backgroundColor: personalNote.bgColor }}>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl" style={{ backgroundColor: `${personalNote.blurColor}1A` }} />

              <div className="relative">
                <personalNote.icon
                  size={22}
                  className="mb-5"
                  style={{ color: personalNote.iconColor }}
                />

                <p className="text-lg font-bold leading-7" dangerouslySetInnerHTML={{ __html: personalNote.headline.replace(/\n/g, '<br />') }} />

                <p className="mt-3 text-xs leading-6 text-white/55">
                  {personalNote.subtext}
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5 sm:mt-20">
          <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-500">
            {footer.copyright}
          </span>

          <span className="hidden text-[10px] tracking-[0.2em] text-neutral-400 sm:block">
            {footer.tagline}
          </span>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs font-semibold transition-colors" style={{ color: "inherit" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = footer.backToTop.hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "inherit";
            }}
          >
            {footer.backToTop.text}

            <span
              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = footer.backToTop.buttonHoverColor;
                e.currentTarget.style.backgroundColor = footer.backToTop.buttonHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}