"use client";

import React, { useRef, useState } from "react";
import BizCard from "./BizCard";
import styles from "./FreeNotes.module.css";
import { NOTES } from "@/data/notesData";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FreeNotes = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const scrollLeft = () => {
    if (gridRef.current) {
      const cardWidth = 340 + 22; // card width + gap
      gridRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const cardWidth = 340 + 22; // card width + gap
      gridRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setShowPrev(scrollLeft > 10);
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  return (
    <section className={styles.notes} id="free-notes">

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>

          <div className={styles.labelRow}>
            <span className={styles.label}>
              <span className={styles.dot} />
              FREE NOTES
            </span>

            <div className={styles.headingRow}>
              <h2>
                Knowledge worth
                <br />
                <span>sharing.</span>
              </h2>

              <p>
                Useful notes, resources and learning materials
                to help you explore, understand and build
                something new.
              </p>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className={styles.carouselNav}>
            <button
              className={styles.navButton}
              onClick={scrollLeft}
              disabled={!showPrev}
              aria-label="Previous notes"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className={styles.navButton}
              onClick={scrollRight}
              disabled={!showNext}
              aria-label="Next notes"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

        {/* Notes Carousel */}
        <div
          className={styles.grid}
          ref={gridRef}
          onScroll={handleScroll}
        >
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

          {/* Add a few duplicate cards for seamless loop feel (optional) */}
        </div>

        {/* Footer */}
        <div className={styles.footer}>

          <p>
            Learn something new.
            <span> Build something meaningful.</span>
          </p>

          <a
            href="/business/notes"
            className={styles.button}
          >
            Explore all notes

            <span>
              <ArrowRight size={17} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default FreeNotes;