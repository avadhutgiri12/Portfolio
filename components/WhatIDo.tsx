"use client";

import { SERVICES_DATA } from "@/data/portfolio";
import "./WhatIDo.css";

export default function WhatIDo() {
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
              WHAT I DO <span>/ 002</span>
            </p>

            <h2 className="whatido-title">
              Building ideas
              <br />
              into <span>reality.</span>
            </h2>
          </div>

          <div className="whatido-intro">
            <p>
              A collection of capabilities that combine technology,
              creativity, and problem-solving.
            </p>

            <span className="whatido-loop-label">
              <span className="whatido-status-dot" />
              FIVE CAPABILITIES · INFINITE LOOP
            </span>
          </div>
        </header>

        {/* Animated service cards */}
        <div
          className="whatido-marquee"
          aria-label="My services"
        >
          <div className="whatido-track">
            {[0, 1].map((group) => (
              <div
                className="whatido-group"
                key={group}
                aria-hidden={group === 1}
              >
                {SERVICES_DATA.map((service) => (
                  <article
                    className="whatido-card"
                    key={`${group}-${service.id}`}
                  >
                    {/* Card top */}
                    <div className="whatido-card-top">
                      <span className="whatido-card-label">
                        CAPABILITY / {service.number}
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
          <span>DESIGN. ENGINEER. INNOVATE.</span>

          <span className="whatido-footer-right">
            <span className="whatido-status-dot" />
            ALWAYS MOVING FORWARD
          </span>
        </footer>
      </div>
    </section>
  );
}