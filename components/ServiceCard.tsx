import { ArrowUpRight } from "lucide-react";
import styles from "./service.module.css";
import type { Service } from "@/data/serviceData";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

/* One plain card style. The arrow link is stretched over the whole card
   (::after), so the pointer cursor only shows where a click really goes. */
export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article className={`${styles.serviceCard} ${className}`} id={service.id}>
      <div className={styles.cardTopline}>
        <span className={styles.cardNumber}>{service.number}</span>
        <span className={styles.cardCategory}>{service.category}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className={styles.cardFooter}>
        <ul className={styles.cardTags} aria-label="Tools">
          {service.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className={styles.cardArrow} href="#contact" aria-label={`Ask about ${service.title.toLowerCase()}`}>
          <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
