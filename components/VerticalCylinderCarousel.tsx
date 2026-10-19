"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent,
} from "react";

import "@/app/Carousel.css";
export interface CarouselItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

interface VerticalCylinderCarouselProps {
  items: CarouselItem[];
}

export default function VerticalCylinderCarousel({
  items,
}: VerticalCylinderCarouselProps) {
  const totalItems = items.length;

  const [activeIndex, setActiveIndex] = useState(0);
  // Keep an unbounded rotation value so wrapping from last to first
  // continues in the same direction instead of jumping backwards.
  const [rotationStep, setRotationStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const angleStep = totalItems > 0 ? 360 / totalItems : 0;

  const formatNumber = (value: number) => String(value).padStart(2, "0");

  const goToNext = useCallback(() => {
    if (totalItems <= 1) return;
    setActiveIndex((current) => (current + 1) % totalItems);
    setRotationStep((current) => current - 1);
  }, [totalItems]);

  const goToPrevious = useCallback(() => {
    if (totalItems <= 1) return;
    setActiveIndex((current) => (current - 1 + totalItems) % totalItems);
    setRotationStep((current) => current + 1);
  }, [totalItems]);

  // Respect browser visibility and reduced-motion preferences.
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => setIsReducedMotion(motionQuery.matches);
    const updateVisibility = () => setIsDocumentHidden(document.hidden);

    updateMotionPreference();
    updateVisibility();

    motionQuery.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  // Automatically rotate every 2 seconds. The effect always cleans up
  // its previous interval, preventing duplicate timers.
  useEffect(() => {
    if (
      totalItems <= 1 ||
      isHovered ||
      isDocumentHidden ||
      isReducedMotion
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalItems);
      setRotationStep((current) => current - 1);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [totalItems, isHovered, isDocumentHidden, isReducedMotion]);

  // Keep the selected index valid if the item list changes.
  useEffect(() => {
    setActiveIndex((current) => (totalItems > 0 ? current % totalItems : 0));
    setRotationStep(0);
  }, [totalItems]);

  if (totalItems === 0) return null;

  const getCardStyle = (index: number): CSSProperties => ({
    transform: `rotateY(${index * angleStep}deg) translateZ(var(--cylinder-radius))`,
  });

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) {
      touchStartX.current = null;
      return;
    }

    const difference = endX - touchStartX.current;

    if (Math.abs(difference) > 45) {
      if (difference < 0) goToNext();
      else goToPrevious();
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="vc-root relative isolate w-full overflow-hidden rounded-[28px] bg-[#100e0c] px-4 py-14 text-white sm:px-8 sm:py-16 md:px-12 lg:py-20"
      aria-label="Carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(104, 78, 57, 0.13), transparent 65%)",
        }}
      />

      <div className="vc-scene relative mx-auto w-full" aria-live="off">
        <div
          className="vc-cylinder"
          style={{
            transform: `translate(-50%, -50%) rotateY(${rotationStep * angleStep}deg)`,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.id}
                className={`vc-card ${
                  isActive ? "vc-card-active" : "vc-card-inactive"
                }`}
                style={{
                  ...getCardStyle(index),
                  pointerEvents: isActive ? "auto" : "none",
                }}
                aria-current={isActive ? "true" : undefined}
                aria-label={`${item.number}: ${item.title}`}
                aria-hidden={!isActive}
                inert={!isActive}
              >
                <div className="vc-card-content">
                  <span className={`vc-number ${isActive ? "vc-number-active" : ""}`}>
                    {item.number || formatNumber(index + 1)}
                  </span>

                  <h3 className="vc-title">{item.title.toUpperCase()}</h3>

                  <p className="vc-description">{item.description}</p>

                  <div className="vc-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="vc-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-7 flex items-center justify-center gap-5 sm:mt-9 sm:gap-6">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={totalItems <= 1}
          aria-label="Previous carousel item"
          className="vc-nav-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="min-w-[88px] text-center font-mono text-sm tracking-[0.16em] text-[#d2c4b7]"
          aria-label={`Item ${activeIndex + 1} of ${totalItems}`}
        >
          {formatNumber(activeIndex + 1)}
          <span className="mx-2 text-white/30">/</span>
          {formatNumber(totalItems)}
        </div>

        <button
          type="button"
          onClick={goToNext}
          disabled={totalItems <= 1}
          aria-label="Next carousel item"
          className="vc-nav-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

    
    </section>
  );
}
