import React from "react";
import styles from "./service.module.css";

export type Service = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  tone: "peach" | "blue" | "lilac" | "green";
};

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article className={`${styles.serviceCard} ${styles[service.tone]} ${className}`}>
      <span className={styles.cardPin} aria-hidden="true" />
      <div className={styles.cardInner}>
        <div className={styles.cardTopline}>
          <span className={styles.cardNumber}>{service.number}</span>
          <span className={styles.cardCategory}>{service.category}</span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className={styles.cardTags}>
          {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a className={styles.cardArrow} href="#contact" aria-label={`Discuss ${service.title}`}>↗</a>
      </div>
    </article>
  );
}