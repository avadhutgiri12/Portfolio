import styles from "./service.module.css";
import ServiceHeroWheel from "./ServiceHeroWheel";
import PillLogo from "./PillLogo";
import { ArrowUpRight, ArrowDownRight, ArrowDown } from "lucide-react";
import { SERVICE_HERO_DATA } from "@/data/serviceData";

export default function ServiceHero() {
  const data = SERVICE_HERO_DATA;
  return (
    <section className={styles.hero} id="services">
      <div className={styles.heroTopbar}>
        <a className={styles.brand} href="/" aria-label="Go to homepage">
          <PillLogo size={14} />
        </a>
        <p className={styles.heroRole}>{data.heroRole}</p>
        <a className={`${styles.followLink} ${styles.discoverLink}`} href={data.followLink.href}>
          {data.followLink.text} <span className={styles.emeraldArrow}><ArrowUpRight size={14} strokeWidth={2.5} /></span>
        </a>
      </div>

      <div className={styles.heroMicroLeft}><span><ArrowUpRight size={14} strokeWidth={2.5} /></span> {data.heroMicroLeft.text}</div>
      <div className={styles.heroMicroRight}>{data.heroMicroRight.line1}<br />{data.heroMicroRight.line2}</div>

      <div className={styles.heroMain}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.liveDot} /> {data.eyebrow.label} / {data.eyebrow.number}</p>
          <h1>
            {data.headline.line1}<br />
            <span className={styles.headlineSecond}>digital <em>reality.</em></span>
          </h1>
          <p className={styles.heroDescription}>{data.heroDescription}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={data.heroActions.primaryButton.href}>{data.heroActions.primaryButton.text} <span><ArrowDownRight size={16} strokeWidth={2.5} /></span></a>
            <a className={styles.discoverLink} href={data.heroActions.secondaryButton.href}> {data.heroActions.secondaryButton.text} <span> <ArrowUpRight size={14} strokeWidth={2.5} /> </span> </a>
          </div>
        </div>
        <div className={styles.heroWheelWrap}>
          <ServiceHeroWheel />
          <span className={styles.wheelCaption}>{data.wheelCaption.line1}<br />{data.wheelCaption.line2}</span>
        </div>
      </div>

      <div className={styles.heroFooter}>
        <span>{data.heroFooter.left}</span>
        <span className={styles.footerCenter}>{data.heroFooter.center}</span>
        <a href={data.heroFooter.right.href} className={styles.discoverLink}>
          {data.heroFooter.right.text}
          <span>
            <ArrowDown size={16} strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </section>
  );
}