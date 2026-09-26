"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  FolderKanban,
  GraduationCap,
  Home,
  Mail,
} from "lucide-react";

const mobileNavItems = [
  {
    id: "home",
    label: "Home",
    targetId: "home",
    icon: Home,
  },
  {
    id: "projects",
    label: "Projects",
    targetId: "showcase",
    icon: FolderKanban,
  },
  {
    id: "academic",
    label: "Academic",
    targetId: "academic",
    icon: GraduationCap,
  },
  {
    id: "contact",
    label: "Contact",
    targetId: "contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  /*
   * =========================================
   * NAVIGATION LOCK
   * =========================================
   *
   * Prevents the scroll listener from changing
   * the active icon while smooth scrolling.
   */

  const isNavigating = useRef(false);

  /*
   * =========================================
   * SCROLL TO HOME
   * =========================================
   */

  const scrollToTop = () => {
    isNavigating.current = true;

    setActiveSection("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      isNavigating.current = false;
      setActiveSection("home");
    }, 1000);
  };

  /*
   * =========================================
   * ACTIVE SECTION DETECTION
   * =========================================
   */

  useEffect(() => {
    const sections = [
      "home",
      "showcase",
      "academic",
      "contact",
    ];

    const handleScroll = () => {
      /*
       * Don't allow the scroll detector to interfere
       * while the user is manually navigating.
       */

      if (isNavigating.current) return;

      /*
       * Always keep Home active near the top.
       */

      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      /*
       * Find the section currently closest to the
       * active area of the viewport.
       */

      let currentSection = "home";

      for (const sectionId of sections) {
        const section =
          document.getElementById(sectionId);

        if (!section) continue;

        if (section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      /*
       * Convert actual section ID into navbar ID.
       */

      if (currentSection === "showcase") {
        setActiveSection("projects");
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * =========================================
   * MOBILE NAVIGATION
   * =========================================
   */

  const handleMobileNavigation = (
    id: string,
    targetId: string
  ) => {
    /*
     * Lock section detection.
     */

    isNavigating.current = true;

    /*
     * Immediately move the white active circle.
     */

    setActiveSection(id);

    /*
     * Find the actual section.
     */

    const target =
      document.getElementById(targetId);

    if (!target) {
      console.error(
        `Navigation target #${targetId} was not found.`
      );

      isNavigating.current = false;

      return;
    }

    /*
     * Calculate the exact scroll position.
     */

    const navbarOffset = 20;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    /*
     * Smoothly scroll to section.
     */

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    /*
     * Wait for smooth scrolling to finish.
     * Then allow automatic section detection again.
     */

    setTimeout(() => {
      isNavigating.current = false;

      setActiveSection(id);
    }, 1000);
  };

  return (
    <>
      {/* ========================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ========================================= */}

      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          hidden
          w-full
          px-6
          py-6
          md:block
          md:px-10
        "
      >
        <div className="flex items-center justify-between">

          {/* ========================================= */}
          {/* LOGO */}
          {/* ========================================= */}

          <button
            onClick={scrollToTop}
            className="
              text-xl
              font-black
              tracking-tighter
              text-white
              transition
              hover:text-emerald-400
            "
            aria-label="Go to home"
          >
            A<span className="text-emerald-400">/</span>G
          </button>

          {/* ========================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================================= */}

          <div
            className="
              flex
              items-center
              gap-8
              text-xs
              font-mono
              tracking-widest
            "
          >

            {/* Projects */}

            <a
              href="#showcase"
              className="
                text-neutral-400
                transition
                hover:text-white
              "
            >
              PROJECTS
            </a>

            {/* Academic */}

            <a
              href="#academic"
              className="
                text-neutral-400
                transition
                hover:text-white
              "
            >
              ACADEMIC
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                flex
                items-center
                gap-1
                text-neutral-400
                transition
                hover:text-white
              "
            >
              CONNECT

              <ArrowUpRight size={12} />
            </a>

          </div>

          {/* ========================================= */}
          {/* STATUS */}
          {/* ========================================= */}

          <div className="text-right">

            <p
              className="
                text-[10px]
                font-mono
                tracking-widest
                text-neutral-500
              "
            >
              PORTFOLIO
            </p>

            <p
              className="
                text-xs
                font-mono
                text-emerald-400
              "
            >
              2026
            </p>

          </div>

        </div>
      </nav>

      {/* ========================================= */}
      {/* MOBILE BOTTOM NAVIGATION */}
      {/* ========================================= */}

      <nav
        className="
          fixed
          bottom-5
          left-1/2
          z-[100]
          flex
          w-[calc(100%-32px)]
          max-w-[390px]
          -translate-x-1/2
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.08]
          bg-[#151515]/95
          px-2
          py-2
          shadow-[0_15px_50px_rgba(0,0,0,0.55)]
          backdrop-blur-xl
          md:hidden
        "
        aria-label="Mobile navigation"
      >

        {mobileNavItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                handleMobileNavigation(
                  item.id,
                  item.targetId
                )
              }
              aria-label={item.label}
              aria-current={
                isActive ? "page" : undefined
              }
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
              "
            >

              {/* ================================= */}
              {/* ACTIVE WHITE CIRCLE */}
              {/* ================================= */}

              <span
                className={`
                  absolute
                  inset-0
                  rounded-full
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isActive
                      ? "scale-100 bg-white opacity-100"
                      : "scale-50 bg-white opacity-0"
                  }
                `}
              />

              {/* ================================= */}
              {/* ICON */}
              {/* ================================= */}

              <Icon
                size={21}
                strokeWidth={1.8}
                className={`
                  relative
                  z-10
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#151515]"
                      : "text-white/80"
                  }
                `}
              />

            </button>
          );
        })}

      </nav>
    </>
  );
}