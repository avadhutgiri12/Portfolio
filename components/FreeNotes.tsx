"use client";

import React from "react";
import BizCard from "./BizCard";
import "./freeNotes.css";

import { ArrowUpRight } from "lucide-react";

const notesData = [
  {
    image: "/notes/python-notes.jpg",
    title: "Python Programming",
    description:
      "A collection of Python programming concepts, examples and practical notes.",
    category: "PROGRAMMING",
    pages: 45,
    fileType: "PDF",
    downloadLink: "/notes/python-notes.pdf",
  },
  {
    image: "/notes/machine-learning.jpg",
    title: "Machine Learning",
    description:
      "Understand ML fundamentals, algorithms and essential implementation concepts.",
    category: "MACHINE LEARNING",
    pages: 38,
    fileType: "PDF",
    downloadLink: "/notes/machine-learning.pdf",
  },
  {
    image: "/notes/web-development.jpg",
    title: "Web Development",
    description:
      "Explore web development fundamentals, frontend concepts and useful examples.",
    category: "WEB DEVELOPMENT",
    pages: 32,
    fileType: "PDF",
    downloadLink: "/notes/web-development.pdf",
  },
];

const FreeNotes = () => {
  return (
    <section className="free-notes" id="free-notes">

      <div className="free-notes-container">

        {/* Header */}
        <div className="free-notes-header">

          <span className="free-notes-label">
            <span className="free-notes-dot" />
            FREE NOTES
          </span>

          <div className="free-notes-heading-row">

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

        {/* Notes Grid */}
        <div className="free-notes-grid">

          {notesData.map((note, index) => (
            <BizCard
              key={index}
              {...note}
            />
          ))}

        </div>

        {/* Footer */}
        <div className="free-notes-footer">

          <p>
            Learn something new.
            <span> Build something meaningful.</span>
          </p>

          <a
            href="/notes"
            className="free-notes-button"
          >
            Explore all notes

            <span>
              <ArrowUpRight size={17} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default FreeNotes;