import ServiceHero from "./ServiceHero";
import ServiceCard from "./ServiceCard";
import styles from "./service.module.css";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, SERVICE_SECTION_DATA } from "@/data/serviceData";

export default function ServicesPage() {
  const sectionData = SERVICE_SECTION_DATA;
  return (
    <div className={styles.page}>
      <ServiceHero />

      <section className={styles.servicesSection} id="service-list" aria-labelledby="service-list-heading">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>{sectionData.eyebrow}</p>
            <h2 id="service-list-heading">
              {sectionData.heading.line1}
              <br />
              <span className={styles.headlineMuted}>{sectionData.heading.line2}</span>
            </h2>
          </div>
          <p className={styles.sectionDescription}>{sectionData.description}</p>
        </div>

        <div className={styles.serviceGrid}>
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className={styles.sectionBottom}>
          <span>{sectionData.sectionBottom.text}</span>
          <a className={styles.inlineLink} href={sectionData.sectionBottom.link.href}>
            {sectionData.sectionBottom.link.text}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
