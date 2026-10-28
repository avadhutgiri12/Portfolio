"use client";

import "./WhatIDo.css";

const SERVICES = [
  {
    id: "1",
    number: "01",
    title: "BUILDING WEBSITES",
    heading: "Web Development",
    description:
      "I create modern, responsive and high-performance websites with clean interfaces and smooth user experiences.",
    tags: ["WEB DEVELOPMENT", "01"],
  },
  {
    id: "2",
    number: "02",
    title: "UI / UX DESIGN",
    heading: "Designing Experiences",
    description:
      "I design clean and intuitive interfaces focused on usability, visual hierarchy and engaging digital experiences.",
    tags: ["UI / UX DESIGN", "02"],
  },
  {
    id: "3",
    number: "03",
    title: "MODEL TRAINING",
    heading: "Machine Learning",
    description:
      "I build and train machine learning models using real-world datasets, feature engineering and model evaluation.",
    tags: ["MACHINE LEARNING", "03"],
  },
  {
    id: "4",
    number: "04",
    title: "MODEL DEVELOPMENT",
    heading: "Intelligent Systems",
    description:
      "I develop practical ML solutions and transform trained models into usable applications and intelligent systems.",
    tags: ["AI / ML", "04"],
  },
  {
    id: "5",
    number: "05",
    title: "AI AUTOMATION",
    heading: "Workflow Automation",
    description:
      "I create AI-powered automation workflows that reduce repetitive tasks and make digital processes more efficient.",
    tags: ["AI AUTOMATION", "05"],
  },
  {
    id: "6",
    number: "06",
    title: "DATA SOLUTIONS",
    heading: "Data & Databases",
    description:
      "I work with data processing, visualization and databases to turn raw information into useful insights.",
    tags: ["DATA SOLUTIONS", "06"],
  },
];

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
              SIX CAPABILITIES · INFINITE LOOP
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
                {SERVICES.map((service) => (
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