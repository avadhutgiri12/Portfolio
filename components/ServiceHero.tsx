import React from "react";
import styles from "./service.module.css";
import ServiceHeroWheel from "./ServiceHeroWheel";

export default function ServiceHero() {
  return (
    <section className={styles.hero} id="services">
      <div className={styles.heroTopbar}>
        <a className={styles.brand} href="/" aria-label="Go to homepage">
          <span className={styles.brandMark}>S<span>.</span></span>
          <span className={styles.brandText}>
            <strong>YOUR NAME</strong>
            <small>Developer · ML Enthusiast</small>
          </span>
        </a>
        <p className={styles.heroRole}>Web Developer <i /> Machine Learning</p>
        <a className={styles.followLink} href="#contact">LET’S CONNECT <span>↗</span></a>
      </div>

      <div className={styles.heroMicroLeft}><span>↗</span> Scroll to<br />explore</div>
      <div className={styles.heroMicroRight}>THOUGHTFUL CODE<br />MEANINGFUL PRODUCTS</div>

      <div className={styles.heroMain}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.liveDot} /> SERVICES / 001</p>
          <h1>
            Ideas into<br />
            <span className={styles.headlineSecond}>digital <em>reality.</em></span>
          </h1>
          <p className={styles.heroDescription}>
            I build thoughtful digital experiences, intelligent machine-learning
            solutions, and tools that turn complex problems into useful products.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#service-list">Explore services <span>↘</span></a>
            <a className={styles.textButton} href="#contact">Have a project? <span>↗</span></a>
          </div>
        </div>
        <div className={styles.heroWheelWrap}>
          <ServiceHeroWheel />
          <span className={styles.wheelCaption}>A little logic.<br />A lot of intention.</span>
        </div>
      </div>

      <div className={styles.heroFooter}>
        <span>DESIGN-MINDED DEVELOPMENT</span>
        <span className={styles.footerCenter}>BUILD <b>·</b> LEARN <b>·</b> ITERATE</span>
        <a href="#service-list">DISCOVER WHAT I DO <span>↓</span></a>
      </div>
    </section>
  );
}