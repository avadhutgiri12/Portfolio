import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceCard, { Service } from "./ServiceCard";
import styles from "./service.module.css";

const services: Service[] = [
  {
    number: "01", category: "WEB / DEVELOPMENT", title: "Web Development",
    description: "Responsive websites and web applications that feel considered, work smoothly, and make complex things easier to use.",
    tags: ["React", "Next.js", "UI Development"], tone: "peach",
  },
  {
    number: "02", category: "ML / INTELLIGENCE", title: "Machine Learning",
    description: "Practical ML workflows that transform data into predictions, patterns, and useful decision-making tools.",
    tags: ["Python", "Scikit-learn", "Modeling"], tone: "blue",
  },
  {
    number: "03", category: "AI / AUTOMATION", title: "AI & Automation",
    description: "Connected tools and streamlined workflows that reduce repetitive work and help digital processes run smarter.",
    tags: ["APIs", "Python", "Workflow"], tone: "lilac",
  },
  {
    number: "04", category: "DATA / INSIGHTS", title: "Data Solutions",
    description: "Clean, clear data analysis and dashboards that make trends easier to understand and communicate.",
    tags: ["Pandas", "SQL", "Dashboards"], tone: "green",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <ServiceHero />

      <section className={styles.servicesSection} id="service-list">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}><span className={styles.liveDot} /> WHAT I CAN HELP WITH / 002</p>
            <h2>Thoughtful work.<br /><em>Useful outcomes.</em></h2>
          </div>
          <p className={styles.sectionDescription}>
            From the first sketch to the final implementation, I bring design thinking
            and engineering together to solve real problems.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => <ServiceCard key={service.number} service={service} />)}
        </div>

        <div className={styles.sectionBottom}>
          <span>FOUR CAPABILITIES. ONE CURIOUS MIND.</span>
          <a href="#contact">Have something in mind? <span>↗</span></a>
        </div>
      </section>

      <section className={styles.contactStrip} id="contact">
        <p className={styles.eyebrow}>HAVE A GOOD PROBLEM?</p>
        <div className={styles.contactRow}>
          <h2>Let’s make it<br /><em>meaningful.</em></h2>
          <a className={styles.primaryButton} href="mailto:hello@example.com">Start a conversation <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}