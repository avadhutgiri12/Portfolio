"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  /*
   * =========================================
   * SCROLL TO TOP
   * =========================================
   */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pt-12
        md:px-12
      "
    >

      {/* ========================================= */}
      {/* AMBIENT LIGHT */}
      {/* ========================================= */}

      <div
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
          bg-emerald-500/10
          blur-[140px]
        "
      />

      {/* ========================================= */}
      {/* MOBILE LOGO */}
      {/* ========================================= */}

      <button
        onClick={scrollToTop}
        aria-label="Go to home"
        className="
          absolute
          left-6
          top-6
          z-50
          text-xl
          font-black
          tracking-tighter
          text-white
          transition
          hover:text-emerald-400
          md:hidden
        "
      >
        A<span className="text-emerald-400">/</span>G
      </button>


      {/* =====================================================
          DESKTOP 3D POP-OUT PORTRAIT
          Hidden on mobile
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-[1]
          hidden
          h-[90%]
          w-[48%]
          md:block
          lg:w-[43%]
        "
      >

        {/* Portrait stage */}

        <div
          className="
            absolute
            bottom-[5%]
            right-[-18px]
            h-[575px]
            w-[575px]
          "
        >

          {/* Circle */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-neutral-800/60
            "
          />

          {/* Lower body */}

          <img
            src="profile.png"
            alt=""
            className="
              absolute
              bottom-[-12%]
              left-1/2
              h-[130%]
              w-auto
              max-w-none
              -translate-x-1/2
              object-contain
              object-bottom
            "
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          />

          {/* Upper body / pop-out */}

          <img
            src="profile.png"
            alt="Avadhut Giri"
            className="
              absolute
              bottom-[-12%]
              left-1/2
              h-[130%]
              w-auto
              max-w-none
              -translate-x-1/2
              object-contain
              object-bottom
            "
            style={{
              clipPath: "inset(0 0 47% 0)",
            }}
          />

        </div>

      </div>


      {/* =====================================================
          MOBILE HERO
          Image → Name → Content
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          md:hidden
        "
      >

        {/* ========================================= */}
        {/* MOBILE PORTRAIT */}
        {/* ========================================= */}

        <div className="mb-6 flex justify-center">

          <div className="relative h-[360px] w-[360px]">

            {/* Circle */}

            <div
              className="
                absolute
                bottom-[-0.02%]
                left-1/2
                h-[285px]
                w-[285px]
                -translate-x-1/2
                rounded-full
                bg-neutral-800/60
              "
            />

            {/* Lower body */}

            <img
              src="profile.png"
              alt="Avadhut Giri"
              className="
                absolute
                inset-0
                z-[2]
                h-full
                w-full
                object-contain
                object-bottom
              "
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
            />

            {/* Upper body / pop-out */}

            <img
              src="profile.png"
              alt="Avadhut Giri"
              className="
                absolute
                inset-0
                z-[3]
                h-full
                w-full
                object-contain
                object-bottom
              "
              style={{
                clipPath: "inset(0 0 43% 0)",
              }}
            />

          </div>

        </div>


        {/* ========================================= */}
        {/* NAME */}
        {/* ========================================= */}

        <h1
          className="
            bebas-neue
            max-w-6xl
            pl-3
            ml-2
            text-6xl
            leading-[0.5]
            tracking-wide
            text-white
            md:text-6xl
            lg:text-[10rem]
          "
        >
          AVADHUT GIRI
        </h1>


        {/* ========================================= */}
        {/* AVAILABILITY */}
        {/* ========================================= */}

        <p
          className="
            mt-5
            text-center
            font-mono
            text-[10px]
            tracking-[0.25em]
            text-emerald-400
          "
        >
          AVAILABLE FOR Q3 / Q4 2026
        </p>


        {/* ========================================= */}
        {/* SUBTITLE */}
        {/* ========================================= */}

        <h2
          className="
            mt-6
            text-center
            text-lg
            font-medium
            tracking-wide
            text-neutral-400
          "
        >
          UI/UX DESIGNER & CREATIVE THINKER
        </h2>


        {/* ========================================= */}
        {/* DESCRIPTION */}
        {/* ========================================= */}

        <p
          className="
            mx-auto
            mt-5
            max-w-md
            text-center
            text-sm
            leading-7
            text-neutral-500
          "
        >
          I craft digital experiences that are beautiful,
          intuitive, and built with enduring architectural
          purpose.
        </p>


        {/* ========================================= */}
        {/* BUTTONS */}
        {/* ========================================= */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="#showcase"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-black
              transition
              hover:bg-emerald-400
            "
          >
            Explore Showcase

            <ArrowRight
              size={15}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </a>


          <a
            href="#contact"
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-white
              transition
              hover:border-emerald-500/50
            "
          >
            Direct Inquiry
          </a>

        </div>


        {/* ========================================= */}
        {/* LOCATION */}
        {/* ========================================= */}

        <div
          className="
            mt-12
            text-center
            font-mono
            text-[10px]
            tracking-widest
            text-neutral-600
          "
        >
          MILAN / NYC / REMOTE
        </div>

      </div>


      {/* =====================================================
          DESKTOP TEXT
          Existing desktop design
      ===================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          max-w-6xl
          md:block
        "
      >

        {/* Availability */}

        <p
          className="
            mb-6
            font-mono
            text-xs
            tracking-[0.3em]
            text-emerald-400
          "
        >
          AVAILABLE FOR Q3 / Q4 2026 ENGAGEMENTS
        </p>


        {/* Name */}

        <h1
          className="
            bebas-neue
            max-w-5xl
            text-7xl
            leading-[0.85]
            tracking-wide
            text-white
            md:text-9xl
            lg:text-[10rem]
          "
        >
          AVADHUT GIRI
        </h1>


        {/* Subtitle */}

        <h2
          className="
            mt-8
            text-xl
            font-medium
            tracking-wide
            text-neutral-400
            md:text-2xl
          "
        >
          UI/UX DESIGNER & CREATIVE THINKER
        </h2>


        {/* Description */}

        <p
          className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-neutral-500
            md:text-base
          "
        >
          I craft digital experiences that are beautiful,
          intuitive, and built with enduring architectural
          purpose.
        </p>


        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#showcase"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-black
              transition
              hover:bg-emerald-400
            "
          >
            Explore Showcase

            <ArrowRight
              size={15}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </a>


          <a
            href="#contact"
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-white
              transition
              hover:border-emerald-500/50
            "
          >
            Direct Inquiry
          </a>

        </div>


        {/* Location */}

        <div
          className="
            mt-16
            font-mono
            text-[10px]
            tracking-widest
            text-neutral-600
          "
        >
          MILAN / NYC / REMOTE
        </div>

      </div>

    </section>
  );
}