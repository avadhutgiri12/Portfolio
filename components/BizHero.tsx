import Link from "next/link";
import styles from "./BizHero.module.css";

const showcaseCards = [
  { number: "01", label: "WEBSITES", title: "Make your first\nimpression count.", tone: "blue", symbol: "↗" },
  { number: "02", label: "WEB APPS", title: "Turn everyday\nwork into flow.", tone: "pink", symbol: "✳" },
  { number: "03", label: "AI & AUTOMATION", title: "Make technology\nwork smarter.", tone: "coral", symbol: "✦" },
];

export default function BizHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.socialProof}>
            <span className={styles.proofSpark}>✳</span>
            <span className={styles.proofAvatars} aria-hidden="true">
              <i>A</i><i>W</i><i>✦</i>
            </span>
            <span>Thoughtful digital work for growing businesses</span>
          </div>

          <p className={styles.eyebrow}>WEB APPS · WEBSITES · AI</p>

          <h1 className={styles.heading}>
            Build a better
            <span>digital business.</span>
          </h1>

          <p className={styles.description}>
            I create modern websites and practical applications that help
            small businesses build their online presence and make everyday
            work simpler.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryButton}>
              Start a project <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/notes" className={styles.secondaryButton}>
              Explore free notes <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.showcase} aria-label="Services showcase">
          {showcaseCards.map((card) => (
            <article
              className={`${styles.showcaseCard} ${styles[card.tone]}`}
              key={card.number}
            >
              <div className={styles.cardTop}>
                <span>{card.label}</span>
                <span>{card.number}</span>
              </div>
              <div className={styles.cardArtwork} aria-hidden="true">
                <span className={styles.artworkSymbol}>{card.symbol}</span>
                <span className={styles.artworkOrbit} />
                <span className={styles.artworkDot} />
              </div>
              <h2>{card.title.split("\\n").map((line) => <span key={line}>{line}</span>)}</h2>
            </article>
          ))}
        </div>

        <div className={styles.bottomNote}>
          <span>DESIGNED WITH PURPOSE</span>
          <span className={styles.bottomLine} />
          <span>BUILT TO MOVE YOU FORWARD</span>
        </div>
      </div>
    </section>
  );
}
