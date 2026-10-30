
import Link from "next/link";
import styles from "./BizHero.module.css";

export default function BizHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        {/* Eyebrow */}
        <p className={styles.eyebrow}>
          Web apps and websites for
        </p>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          <span>Business</span>
          <span className={styles.headingGradient}>
            That Ships.
          </span>
        </h1>

        {/* Brand Badge */}
        <div className={styles.badge}>
          Live in Weeks
        </div>

        {/* Description */}
        <p className={styles.description}>
          I build modern, responsive websites and practical
          applications that help small businesses and organizations
          establish an online presence and simplify their daily operations.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="#contact" className={styles.primaryButton}>
            <span className={styles.primaryIcon}>→</span>
            <span>Start a project</span>
          </Link>

          <Link href="/notes" className={styles.secondaryButton}>
            <span className={styles.secondaryIcon}>↓</span>
            <span>Free notes</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
