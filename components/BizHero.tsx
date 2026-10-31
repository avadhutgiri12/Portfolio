
import Link from "next/link";
import styles from "./BizHero.module.css";
import { BIZ_HERO_DATA } from "@/data/Business";

export default function BizHero() {
  const { eyebrow, heading, badge, description, actions } = BIZ_HERO_DATA;

  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        {/* Eyebrow */}
        <p className={styles.eyebrow}>
          {eyebrow}
        </p>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          <span>{heading.line1}</span>
          <span className={styles.headingGradient}>
            {heading.line2}
          </span>
        </h1>

        {/* Brand Badge */}
        <div className={styles.badge}>
          {badge}
        </div>

        {/* Description */}
        <p className={styles.description}>
          {description}
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href={actions.primary.href} className={styles.primaryButton}>
            <span className={styles.primaryIcon}>{actions.primary.icon}</span>
            <span>{actions.primary.text}</span>
          </Link>

          <Link href={actions.secondary.href} className={styles.secondaryButton}>
            <span className={styles.secondaryIcon}>{actions.secondary.icon}</span>
            <span>{actions.secondary.text}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
