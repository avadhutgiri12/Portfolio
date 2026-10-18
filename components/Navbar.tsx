"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
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
    href: "/",
    icon: Home,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/work",
    icon: FolderKanban,
  },
  {
    id: "academic",
    label: "Academic",
    href: "/academics",
    icon: GraduationCap,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

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
    // Map pathnames to active section IDs
    const pathToSection: Record<string, string> = {
      "/": "home",
      "/work": "projects",
      "/academics": "academic",
      "/contact": "contact",
    };

    const activeSection = pathToSection[pathname] || "home";
    setActiveSection(activeSection);
  }, [pathname]);

  /*
   * =========================================
   * MOBILE NAVIGATION
   * =========================================
   */

  const handleMobileNavigation = (
    id: string,
    href: string
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
     * Navigate to the page.
     */

    router.push(href);

    /*
     * Wait for navigation to happen.
     * Note: This timeout is conservative; in practice,
     * the navigation will happen before this timeout completes.
     */

    setTimeout(() => {
      isNavigating.current = false;

      // Active section will be set by the pathname listener
      // when the new page loads
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

          <Link
            href="/"
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
          </Link>

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

            <Link
              href="/work"
              className="
                text-neutral-400
                transition
                hover:text-white
              "
            >
              PROJECTS
            </Link>

            {/* Academic */}

            <Link
              href="/academics"
              className="
                text-neutral-400
                transition
                hover:text-white
              "
            >
              ACADEMIC
            </Link>

            {/* Contact */}

            <Link
              href="/contact"
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
            </Link>

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
          z-100
          flex
          w-[calc(100%-32px)]
          max-w-97.5
          -translate-x-1/2
          items-center
          justify-between
          rounded-full
          border
          border-white/8
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
                  item.href
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