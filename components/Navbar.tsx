"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
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
      {/* DESKTOP FLOATING DOCK NAVBAR (LEFT VERTICAL) */}
      {/* ========================================= */}

      <nav
        className="
          fixed
          left-5
          top-1/2
          -translate-y-1/2
          z-50
          hidden
          md:block
          flex
          flex-col
          items-center
          gap-4
          px-2
          py-4
          rounded-full
          border
          border-white/8
          bg-[#151515]/95
          shadow-[0_15px_50px_rgba(0,0,0,0.55)]
          backdrop-blur-xl
        "
        aria-label="Desktop navigation"
      >
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleMobileNavigation(item.id, item.href)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                hover:scale-110
                cursor-pointer
              "
            >
              {/* Active white circle */}
              <span
                className={`
                  absolute
                  inset-0
                  rounded-full
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? "scale-100 bg-white opacity-100" : "scale-50 bg-white opacity-0"}
                `}
              />

              {/* Icon */}
              <Icon
                size={20}
                strokeWidth={1.8}
                className={`
                  relative
                  z-10
                  transition-all
                  duration-300
                  ${isActive ? "text-[#151515]" : "text-white/80"}
                  hover:text-white
                `}
              />

              {/* Tooltip */}
              <div className={`
                absolute
                left-14
                -translate-y-1/2
                top-1/2
                px-3
                py-1
                text-xs
                font-mono
                tracking-widest
                bg-white/90
                text-[#151515]
                rounded-full
                opacity-0
                transition-all
                duration-300
                pointer-events-none
                whitespace-nowrap
                hover:opacity-100
                ${isActive ? "scale-100" : "scale-95"}
              `}>
                {item.label}
              </div>
            </button>
          );
        })}
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