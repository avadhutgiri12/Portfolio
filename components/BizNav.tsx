import Link from "next/link";
import styles from "./BizNav.module.css";

export default function BizNav({
  current,
}: {
  current?: "home" | "notes";
}) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">

        {/* Brand */}
        <Link href="/business" className={styles.brand}>
          techie.addy
        </Link>

        {/* Navigation Links */}
        <ul className={styles.links}>
          <li>
            <Link href="/business#about">
              About
            </Link>
          </li>

          <li>
            <Link href="/business#services">
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/notes"
              aria-current={current === "notes" ? "page" : undefined}
            >
              Free Notes
            </Link>
          </li>

          <li>
            <Link href="/business#follow">
              Follow
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/business#contact"
          className={styles.cta}
        >
          Start a Project
          <span className={styles.arrow}>↗</span>
        </Link>

      </nav>
    </header>
  );
}