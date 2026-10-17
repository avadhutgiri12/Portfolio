"use client";

import Link from "next/link";
import { profile } from "@/lib/content";
import Visitors from "./Visitors";
import Wordmark from "./Wordmark";
import { Reveal } from "./ui";

/** Every page, including the ones the nav bar leaves out. */
const pages = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/hire" },
  { label: "Episode notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
  { label: "Library", href: "/library" },
];

/** The signature every page ends on — the wordmark, then the visit count. */
export default function Footer() {
  return (
    <div className="relative px-[var(--gutter)] pb-25 sm:pb-15">
          <Wordmark text={profile.name.split(" ")[0].slice(1)} />

      <Reveal>
        <footer className="mt-14 sm:mt-14 border-t border-[var(--color-line-soft)] pt-5">
          <nav aria-label="Pages" className="mb-5 flex flex-wrap gap-x-6 gap-y-3 jetbrains-mono">
            {pages.map((p) => (
              <Link
              key={p.href}
              href={p.href}
              className="label py-1 transition-colors hover:!text-emerald-400"
              >
                {p.label}
              </Link> 
            ))}
          </nav>
            <Visitors />
        </footer>
      </Reveal>
    </div>
  );
}