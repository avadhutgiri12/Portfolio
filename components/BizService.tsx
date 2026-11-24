"use client";

import React from "react";
import styles from "./BizService.module.css";

import { ArrowUpRight } from "lucide-react";
import { BIZ_SERVICES, type BizService as BizServiceType } from "@/data/Business";

const BizService = () => {
  return (
    <section className={styles.service} id="services">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            <span className={styles.labelDot} />
            SERVICE
          </span>

          <div className={styles.headingWrap}>
            <h2 className={styles.heading}>
              What I can build
              <br />
              <span>for you.</span>
            </h2>

            <p className={styles.subtitle}>
              From ideas to impactful digital experiences.
              I build things that help businesses move forward.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className={styles.grid}>
          {BIZ_SERVICES.map((service: BizServiceType) => (
            <article
              className={styles.card}
              key={service.number}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  / {service.number}
                </span>

                <span className={styles.cardIcon}>
                  <ArrowUpRight size={19} strokeWidth={1.5} />
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className={styles.cardBottom}>
                <a
                  href={service.link}
                  className={styles.proof}
                >
                  <span className={styles.proofLine} />
                  {service.linkText}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.footer}>
          <p>
            Have something in mind?
            <span> Let&apos;s build it together.</span>
          </p>

          <a href="/business#services" className={styles.cta}>
            All services
            <span className={styles.ctaIcon}>
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default BizService;
