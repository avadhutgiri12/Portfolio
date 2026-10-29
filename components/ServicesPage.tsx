import ServiceHero from "./ServiceHero";
import ServiceCard from "./ServiceCard";
import styles from "./service.module.css";
import { ArrowUpRight } from "lucide-react";
import {
  SERVICES_DATA,
  SERVICE_SECTION_DATA,
  SERVICE_CONTACT_DATA,
} from "@/data/serviceData";

export default function ServicesPage() {
  const sectionData = SERVICE_SECTION_DATA;
  const contactData = SERVICE_CONTACT_DATA;
  return (
    <main className={styles.page}>
      <ServiceHero />

      <section className={styles.servicesSection} id="service-list">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}><span className={styles.liveDot} /> {sectionData.eyebrow.label} / {sectionData.eyebrow.number}</p>
            <h2>{sectionData.heading.line1}<br /><em>{sectionData.heading.line2}</em></h2>
          </div>
          <p className={styles.sectionDescription}>{sectionData.description}</p>
        </div>

        <div className={styles.serviceGrid}>
          {SERVICES_DATA.map((service) => <ServiceCard key={service.number} service={service} />)}
        </div>

        <div className={styles.sectionBottom}>
          <span>{sectionData.sectionBottom.text}</span>
          <a href={sectionData.sectionBottom.link.href}>{sectionData.sectionBottom.link.text} <span><ArrowUpRight size={14} strokeWidth={2.5} /></span></a>
        </div>
      </section>

      <section className={styles.contactStrip} id="contact">
        <p className={styles.eyebrow}>{contactData.eyebrow}</p>
        <div className={styles.contactRow}>
          <h2>{contactData.heading.line1}<br /><em>{contactData.heading.line2}</em></h2>
          <a className={styles.primaryButton} href={contactData.button.href}>{contactData.button.text} <span><ArrowUpRight size={16} strokeWidth={2.5} /></span></a>
        </div>
      </section>
    </main>
  );
}