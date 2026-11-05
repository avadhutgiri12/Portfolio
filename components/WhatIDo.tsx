"use client";

import { SERVICES_DATA } from "@/data/portfolio";
import { MARQUEE_COPIES, useMarqueeScroll } from "./useMarqueeScroll";
import "./WhatIDo.css";

export default function WhatIDo() {
  const { scrollerRef, groupRef } = useMarqueeScroll<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <section id="what-i-do" className="whatido-section">
      {/* Background */}
      <div className="whatido-grid" aria-hidden="true" />
      <div className="whatido-glow" aria-hidden="true" />

      <div className="whatido-container">
        {/* Section header */}
        <header className="whatido-header">
          <div>
            <p className="whatido-eyebrow">
              03 <span>/ What I do</span>
            </p>

            <h2 className="whatido-title">
              Websites, apps
              <br />
              and <span>ML models.</span>
            </h2>
          </div>

          <div className="whatido-intro">
            <p>
              Full-stack web work and machine learning, from the
              dataset to the deployed app.
            </p>

            <span className="whatido-loop-label">
              Six areas I work in
            </span>
          </div>
        </header>

        {/* Service cards: auto-scrolling, and scrollable by hand */}
        <div
          ref={scrollerRef}
          className="whatido-marquee"
          role="region"
          aria-label="What I do. Scroll sideways or use the arrow keys."
          tabIndex={0}
          data-lenis-prevent-horizontal
        >
          <div className="whatido-track">
            {Array.from({ length: MARQUEE_COPIES }, (_, group) => (
              <div
                className="whatido-group"
                key={group}
                ref={group === 0 ? groupRef : undefined}
                aria-hidden={group > 0}
              >
                {SERVICES_DATA.map((service) => (
                  <article
                    className="whatido-card"
                    key={`${group}-${service.id}`}
                  >
                    {/* Card top */}
                    <div className="whatido-card-top">
                      <span className="whatido-card-label">
                        Capability {service.number}
                      </span>

                      <span className="whatido-card-symbol">
                        ↗
                      </span>
                    </div>

                    {/* Main card content */}
                    <div className="whatido-card-main">
                      <div className="whatido-card-heading">
                        <span className="whatido-card-index">
                          {service.number}
                        </span>

                        <span className="whatido-card-category">
                          {service.tags[0]}
                        </span>
                      </div>

                      <div className="whatido-card-copy">
                        <h3>{service.heading}</h3>

                        <p>{service.description}</p>
                      </div>
                    </div>

                    {/* Number panel */}
                    <div className="whatido-card-bottom">
                      <div className="whatido-number-panel">
                        <span>{service.number}</span>
                        <span className="whatido-number-line" />
                      </div>

                      <div className="whatido-card-footer">
                        <span>{service.title}</span>
                        <span className="whatido-footer-arrow">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="whatido-footer">
          <span>Web, UI, full stack, ML, data</span>

          <span className="whatido-footer-right">
            Open to freelance and project work
          </span>
        </footer>
      </div>
    </section>
  );
}