"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES_DATA } from "@/data/portfolio";
import styles from "./BizService.module.css";

export default function BizService() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>02 / Services</p>
            <h2 id="services-heading" className={styles.title}>
              What I
              <br />
              <span className={styles.accent}>build</span>
              for you.
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>
              From concept to deployment — modern web applications,<br />
              intelligent systems, and data-driven products.
            </p>
          </div>
        </header>

        <div className={styles.grid} role="list">
          {SERVICES_DATA.map((service, index) => (
            <article
              ref={(el) => { cardRefs.current[index] = el; }}
              key={service.id}
              className={`${styles.card} ${visibleCards.has(index) ? styles.visible : ""}`}
              role="listitem"
            >
              <div className={styles.cardTop}>
                <span className={styles.cardLabel}>Capability {service.number}</span>
                <span className={styles.cardSymbol} aria-hidden="true">↗</span>
              </div>

              <div className={styles.cardMain}>
                <div className={styles.cardHeading}>
                  <span className={styles.cardIndex}>{service.number}</span>
                  <span className={styles.cardCategory}>{service.tags[0]}</span>
                </div>

                <div className={styles.cardCopy}>
                  <h3 className={styles.cardTitle}>{service.heading}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.numberPanel}>
                  <span>{service.number}</span>
                  <span className={styles.numberLine} aria-hidden="true" />
                </div>

                <div className={styles.cardFooter}>
                  <span>{service.title}</span>
                  <span className={styles.footerArrow} aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}