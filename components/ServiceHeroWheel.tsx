import React from "react";
import styles from "./service.module.css";

const words = ["STRATEGY", "DESIGN", "INTELLIGENCE", "DEVELOPMENT", "AUTOMATION", "IMPACT"];

export default function ServiceHeroWheel() {
  return (
    <div className={styles.wheelScene} aria-label="A rotating wheel representing my services">
      <div className={`${styles.wheelOrbit} ${styles.wheelOrbitOne}`}>
        {words.map((word, index) => (
          <span
            className={styles.orbitWord}
            key={word}
            style={{ "--index": index, "--count": words.length } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </div>
      <div className={`${styles.wheelOrbit} ${styles.wheelOrbitTwo}`} aria-hidden="true">
        {["IDEAS", "SYSTEMS", "SOLUTIONS", "EXPERIENCE", "DATA", "DETAIL"].map((word, index) => (
          <span
            className={`${styles.orbitWord} ${styles.orbitWordMuted}`}
            key={word}
            style={{ "--index": index, "--count": 6 } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </div>
      <div className={styles.wheelCore}>
        <span className={styles.coreSmall}>MADE WITH</span>
        <strong>purpose<span>.</span></strong>
        <span className={styles.coreArrow}>↗</span>
      </div>
      <span className={styles.wheelPointer} aria-hidden="true">↗</span>
      <span className={styles.wheelNumber}>SW / 01</span>
    </div>
  );
}