"use client";

import React from "react";
import BizCard from "./BizCard";
import styles from "./BusinessNotes.module.css";
import { NOTES } from "@/data/notesData";

const BusinessNotes = () => {
  return (
    <section className={styles.notes} id="free-notes">

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>

          <div className={styles.labelRow}>
            <span className={styles.label}>
              <span className={styles.labelDot} />
              FREE NOTES
            </span>

            <div className={styles.headingRow}>
              <h2>
                Knowledge worth
                <br />
                <span>sharing.</span>
              </h2>

              <p>
                {NOTES.length} practical guides, checklists, and references
                for builders. Download, read, apply.
              </p>
            </div>
          </div>

        </div>

        {/* Notes Grid */}
        <div className={styles.grid}>
          {NOTES.map((note) => (
            <BizCard
              key={note.slug}
              image={`/notes/${note.slug}.jpg`}
              title={note.title}
              description={note.description}
              category={note.tag}
              downloadLink={note.downloadUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessNotes;