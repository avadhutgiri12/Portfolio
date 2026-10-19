"use client";

import Link from "next/link";
import Visitors from "./Visitors";
import { openMail } from "./KineticContact";

/** The signature every page ends on — the wordmark, then the visit count. */
export default function Footer() {
  return (
        <footer className=" kin-foot kin kin-light">
          <div className=" px-20">
                  <div className="kin-foot-lead">
                    <h2>
                      We’ll be glad to
                      <br />
                      collaborate with you.
                    </h2>
                    <button
                      className="footer-email-button"
                      onClick={openMail}
                    >
                      Email me
                    </button>
                    <p className="kin-copy">© Avadhut Giri 2026</p>
                    <Visitors />
                  </div>
                  </div>

                  <nav className="kin-foot-col" aria-label="Pages">
                    <h3>Pages</h3>
                    <Link href="/work">Work</Link>
                    <Link href="/hire">Services</Link>
                    <Link href="/notes">Episode notes</Link>
                    <Link href="/library">Library</Link>
                    <Link href="/contact">Contact</Link>
                  </nav>

                  <div className="kin-foot-col">
                    <h3>Contact</h3>
                    <a href="mailto:avadhutgiri143@gmail.com">
                      avadhutgiri143@gmail.com
                    </a>
                    <p>Taking new projects</p>
                    <p>Remote or on-site</p>
                  </div>

                  <div className="kin-foot-col">
                    <h3>Elsewhere</h3>
                    <a href="https://github.com/Raiwadeom" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
          
                </footer>

  );
}