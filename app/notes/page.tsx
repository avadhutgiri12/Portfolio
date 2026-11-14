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
  openGraph: {
    title,
    description,
    url: "/notes",
    siteName: "techie.addy",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function NotesPage() {
  return (
    <div className={`${styles.page} ${anton.variable}`}>
      <BizNav current="notes" />

      <main>
        <section className={styles.hero} aria-labelledby="notes-heading">
          <div className={styles.heroPanel}>
            <div className={styles.heroContent}>
              <p className={styles.brand}>techie.addy</p>
              <h1 id="notes-heading" className={styles.heading}>
                One Stop Digital Library
                <br />
                <span>for Builders.</span>
              </h1>
              <p className={styles.lead}>{notesSeries.line}</p>
              <a href="#notes-grid" className={styles.primaryButton}>
                View Collections
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M10 5l5 5-5 5" />
                </svg>
              </a>
            </div>

            <div className={styles.bookStage} aria-hidden="true">
              <div className={`${styles.book} ${styles.bookBackLeft}`}>
                <span className={styles.bookMark}>01</span>
                <span className={styles.bookTitle}>BUILD<br />BETTER</span>
                <span className={styles.bookLines} />
                <span className={styles.bookOrb} />
              </div>
              <div className={`${styles.book} ${styles.bookBackRight}`}>
                <span className={styles.bookMark}>03</span>
                <span className={styles.bookTitle}>THINK<br />IN SYSTEMS</span>
                <span className={styles.bookLines} />
                <span className={styles.bookFlower}>✳</span>
              </div>
              <div className={`${styles.book} ${styles.bookFront}`}>
                <span className={styles.bookMark}>TECHIE.ADDY · FIELD NOTES</span>
                <span className={styles.bookFrontArt}>
                  <span />
                  <span />
                  <span />
                </span>
                <span className={styles.bookFrontTitle}>Ideas into<br />practice.</span>
                <span className={styles.bookFrontFoot}>A LIBRARY FOR BUILDERS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="notes-grid" className={styles.section} aria-labelledby="collection-heading">
          <div className={styles.wrap}>
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>{notesSeries.title}</p>
              <h2 id="collection-heading" className={styles.h2}>Practical Guides for Builders</h2>
              <p className={styles.copy}>
                Each note is a focused, practical resource — no fluff, just patterns that work in production.
              </p>
            </div>

            <ul className={styles.notesGrid}>
              {NOTES.map((note, index) => (
                <li key={note.slug}>
                  <article className={styles.noteCard}>
                    <div className={styles.cardTop}>
                      <span className={styles.identityIcon} aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21.5v-16Z" />
                          <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H20M9 7h7M9 10h7" />
                        </svg>
                      </span>
                      <span className={styles.noteNumber}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className={styles.noteEyebrow}>Builder resource</p>
                    <h3 className={styles.noteTitle}>{note.title}</h3>
                    <div className={styles.tags} aria-label="Resource details">
                      <span className={styles.tag}>{note.tag}</span>
                      <span className={styles.tag}>PDF guide</span>
                    </div>
                    <p className={styles.noteDesc}>{note.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.fileType}>PDF · FREE RESOURCE</span>
                      <a href={note.downloadUrl} className={styles.downloadBtn} download>
                        Download PDF
                        <svg className={styles.downloadIcon} viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M10 2.5v10m-4-4 4 4 4-4M3.5 14v3h13v-3" />
                        </svg>
                      </a>
                    </div>
                  </article>
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
