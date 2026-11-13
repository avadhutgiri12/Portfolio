import type { Metadata } from "next";
import Link from "next/link";
import { Anton } from "next/font/google";
import BizNav from "@/components/BizNav";
import { NOTES, notesSeries } from "@/data/notesData";
import { socialLinks } from "@/data/portfolio";
import FloatingSocial from "@/app/business/FloatingSocial";
import styles from "./notes.module.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "techie.addy — Free Notes";
const description =
  "Practical guides, checklists, and references for builders. Download, read, apply.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/notes" },
  openGraph: { title, description, url: "/notes", siteName: "techie.addy", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function NotesPage() {
  return (
    <div className={`${styles.page} ${anton.variable}`}>
      <BizNav current="notes" />

      <main>
        {/* ── hero ── */}
        <section className={styles.hero}>
          <div className={styles.content}>
            {/* Eyebrow */}
            <p className={styles.eyebrow}>techie.addy</p>

            {/* Main Heading */}
            <h1 className={styles.heading}>
              Free <mark>Notes</mark>
            </h1>

            {/* Brand Badge */}
            <div className={styles.badge}>Download & Learn</div>

            {/* Description */}
            <p className={styles.lead}>{notesSeries.line}</p>

            {/* Actions */}
            <div className={styles.actions}>
              <Link href="/business#contact" className={styles.primaryButton}>
                <span className={styles.primaryIcon}>→</span>
                <span>Start a Project</span>
              </Link>

              <a href="#notes-grid" className={styles.secondaryButton}>
                <span className={styles.secondaryIcon}>↓</span>
                <span>Free Notes</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── notes grid ── */}
        <section id="notes-grid" className={styles.section}>
          <div className={styles.wrap}>
            <p className={styles.kicker}>{notesSeries.title}</p>
            <h2 className={styles.h2}>Practical Guides for Builders</h2>
            <p className={styles.copy}>
              Each note is a focused, practical resource — no fluff, just patterns that work in production.
            </p>
            <ul className={styles.notesGrid}>
              {NOTES.map((note) => (
                <li key={note.slug}>
                  <a href={note.downloadUrl} className={styles.noteCard} download>
                    <span className={styles.noteChip}>{note.tag}</span>
                    <h3 className={styles.noteTitle}>{note.title}</h3>
                    <p className={styles.noteDesc}>{note.description}</p>
                    <span className={styles.downloadBtn}>
                      Download PDF
                      <svg className={styles.downloadIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 4v14M6 12l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className={`${styles.wrap} ${styles.footer}`}>
        <span>© techie.addy 2026</span>
        <Link href="/">← Back to portfolio</Link>
      </footer>

      <FloatingSocial socialLinks={socialLinks} />
    </div>
  );
}