"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black/30
        
        px-6
        py-28
        text-white
        md:px-12
        lg:py-36
      "
    >
      {/* Subtle background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
          [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Emerald ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[25%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-emerald-400/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-20 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.35em] text-emerald-400">
            CONTACT / 004
          </p>

          <p className="hidden font-mono text-[9px] tracking-[0.25em] text-neutral-700 md:block">
            AVAILABLE FOR SELECTED PROJECTS
          </p>
        </div>

        {/* Main contact layout */}
        <div className="grid gap-20 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          {/* =================================================
              LEFT — BIG TITLE
          ================================================= */}

          <div className="flex flex-col justify-between">
            <div>
              <h2
                className="
                  max-w-[650px]
                  font-serif
                  text-[4.5rem]
                  font-medium
                  uppercase
                  leading-[0.82]
                  tracking-[-0.055em]
                  text-white
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[8rem]
                "
              >
                LET&apos;S
                <br />
                GET IN
                <br />
                <span className="text-neutral-700">TOUCH</span>
              </h2>

              {/* Decorative circle */}
              <div className="mt-10 flex items-center gap-4">
                <div
                  className="
                    relative
                    h-14
                    w-14
                    rounded-full
                    border
                    border-white/15
                  "
                >
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-2.5
                      w-2.5
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_20px_rgba(52,211,153,0.35)]
                    "
                  />
                </div>

                <div className="h-px w-16 bg-white/10" />

                <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-700">
                  SAY HELLO
                </span>
              </div>
            </div>

            {/* Contact information */}
            <div className="mt-20 grid max-w-lg grid-cols-2 gap-10 border-t border-white/10 pt-7">
              <div>
                <div className="flex items-center gap-2">
                  <Mail
                    size={13}
                    strokeWidth={1.5}
                    className="text-neutral-600"
                  />

                  <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-600">
                    EMAIL
                  </p>
                </div>

                <a
                  href="mailto:avadhutgiri143@gmail.com"
                  className="
                    mt-3
                    block
                    text-sm
                    text-neutral-400
                    transition-colors
                    hover:text-emerald-400
                  "
                >
                  avadhutgiri143@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <MapPin
                    size={13}
                    strokeWidth={1.5}
                    className="text-neutral-600"
                  />

                  <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-600">
                    LOCATION
                  </p>
                </div>

                <p className="mt-3 text-sm text-neutral-400">
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div className="lg:pt-12">
            <form className="space-y-0">
              {/* Name */}
              <div className="group border-b border-white/10 py-5 transition-colors focus-within:border-emerald-400/50">
                <label
                  htmlFor="name"
                  className="
                    block
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-600
                    transition-colors
                    group-focus-within:text-emerald-400
                  "
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Avadhut Giri"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-neutral-700
                  "
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="group border-b border-white/10 py-5 transition-colors focus-within:border-emerald-400/50">
                  <label
                    htmlFor="email"
                    className="
                      block
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-neutral-600
                      transition-colors
                      group-focus-within:text-emerald-400
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-neutral-700
                    "
                  />
                </div>

                <div className="group border-b border-white/10 py-5 transition-colors focus-within:border-emerald-400/50">
                  <label
                    htmlFor="phone"
                    className="
                      block
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-neutral-600
                      transition-colors
                      group-focus-within:text-emerald-400
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-neutral-700
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group border-b border-white/10 py-5 transition-colors focus-within:border-emerald-400/50">
                <label
                  htmlFor="message"
                  className="
                    block
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-600
                    transition-colors
                    group-focus-within:text-emerald-400
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    bg-transparent
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-neutral-700
                  "
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-7">
                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-white
                    transition-all
                    duration-500
                    hover:border-emerald-400/60
                    hover:bg-emerald-400/[0.05]
                    hover:text-emerald-400
                  "
                  aria-label="Send message"
                >
                  <ArrowUpRight
                    size={23}
                    strokeWidth={1}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </div>
            </form>

            {/* Social links */}
            <div className="mt-20 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.25em] text-neutral-700">
                  ELSEWHERE
                </span>

                <div className="flex items-center gap-5">
                  <a
                    href="https://www.github.com/avadhutgiri12"
                    aria-label="GitHub"
                    className="text-neutral-600 transition-colors hover:text-emerald-400"
                  >
                    <span className="material-symbols-outlined">commit</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/avadhutgiri181?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    aria-label="LinkedIn"
                    className="text-neutral-600 transition-colors hover:text-emerald-400"
                  >
                    <span className="material-symbols-outlined">
                      assignment_ind
                    </span>
                  </a>

                  <a
                    href="https://www.instagram.com/addy.things?stkn=MWkxdHprdzlxbGZ6Zw=="
                    aria-label="Instagram"
                    className="text-neutral-600 transition-colors hover:text-emerald-400"
                  >
                    <span className="material-symbols-outlined">
                      linked_camera
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FOOTER LINE
        ================================================= */}

        <div className="mt-28 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-700">
              HAVE AN IDEA? LET&apos;S BUILD IT.
            </p>

            <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-700">
              © 2026 AVADHUT GIRI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
