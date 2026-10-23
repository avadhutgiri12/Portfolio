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
        <section className={`${styles.wrap} ${styles.hero}`}>
          <p className={styles.tag}>techie.addy</p>
          <h1 className={styles.h1}>
            Free <mark>Notes</mark>
          </h1>
          <p className={styles.lead}>{notesSeries.line}</p>
        </section>

        {/* ── notes grid ── */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <p className={styles.kicker}>{notesSeries.title}</p>
          <h2 className={styles.h2}>Download & Learn</h2>
          <p className={styles.copy}>
            Each note is a focused, practical resource — no fluff, just patterns that work in production.
          </p>
          <ul className={styles.notesGrid}>
            {NOTES.map((note) => (
              <li key={note.slug}>
                <a href={note.downloadUrl} className={styles.noteCard} download>
                  <span className={styles.noteTag}>{note.tag}</span>
                  <h3 className={styles.noteTitle}>{note.title}</h3>
                  <p className={styles.noteDesc}>{note.description}</p>
                  <div className={styles.noteMeta}>
                    <time className={styles.noteDate} dateTime={note.date}>
                      {new Date(note.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className={styles.downloadBtn}>Download PDF</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
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