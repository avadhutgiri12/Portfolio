"use client";

import React from "react";
import "./bizService.css";

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Apps",
    description:
      "Building modern, responsive web applications that solve real business problems.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "02",
    title: "Mobile Apps",
    description:
      "Creating intuitive mobile experiences designed for performance and usability.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Transforming raw footage into engaging visual stories with creative direction.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Designing clean, thoughtful interfaces focused on user experience and clarity.",
    link: "#projects",
    linkText: "Explore projects",
  },
];

const BizService = () => {
  return (
    <section className="biz-service" id="services">
      <div className="biz-service-container">

        {/* Section Header */}
        <div className="biz-service-header">
          <span className="biz-service-label">
            <span className="biz-service-label-dot" />
            SERVICE
          </span>

          <div className="biz-service-heading-wrap">
            <h2 className="biz-service-heading">
              What I can build
              <br />
              <span>for you.</span>
            </h2>

            <p className="biz-service-subtitle">
              From ideas to impactful digital experiences.
              I build things that help businesses move forward.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="biz-service-grid">
          {services.map((service) => (
            <article
              className="biz-service-card"
              key={service.number}
            >
              <div className="biz-service-card-top">
                <span className="biz-service-number">
                  / {service.number}
                </span>

                <span className="biz-service-card-icon">
                  <ArrowUpRight size={19} strokeWidth={1.5} />
                </span>
              </div>

              <div className="biz-service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="biz-service-card-bottom">
                <a
                  href={service.link}
                  className="biz-service-proof"
                >
                  <span className="proof-line" />
                  {service.linkText}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="biz-service-footer">
          <p>
            Have something in mind?
            <span> Let's build it together.</span>
          </p>

          <a href="/business#services" className="biz-service-cta">
            All services
            <span className="biz-service-cta-icon">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default BizService;