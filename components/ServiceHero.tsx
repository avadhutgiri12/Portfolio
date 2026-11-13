import Link from "next/link";
import styles from "./service.module.css";
import ServiceDial from "./ServiceDial";
import PillLogo from "./PillLogo";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SERVICE_HERO_DATA, SERVICES_DATA } from "@/data/serviceData";

export default function ServiceHero() {
  const data = SERVICE_HERO_DATA;
  return (
    <section className={styles.hero} id="services" aria-labelledby="services-heading">
      <div className={styles.heroTopbar}>
        <Link className={styles.brand} href="/" aria-label="Go to homepage">
          <PillLogo size={14} />
        </Link>
        <p className={styles.heroRole}>{data.heroRole}</p>
        <a className={styles.inlineLink} href={data.followLink.href}>
          {data.followLink.text}
          <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>

      <div className={styles.heroMain}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h1 id="services-heading">
            {data.headline.line1}
            <br />
            <span className={styles.headlineMuted}>{data.headline.line2}</span>
          </h1>
          <p className={styles.heroDescription}>{data.heroDescription}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={data.heroActions.primaryButton.href}>
              {data.heroActions.primaryButton.text}
              <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a className={styles.inlineLink} href={data.heroActions.secondaryLink.href}>
              {data.heroActions.secondaryLink.text}
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className={styles.heroDialWrap}>
          <ServiceDial
            items={SERVICES_DATA.map((s) => ({ id: s.id, label: s.dialLabel, number: s.number, title: s.title }))}
          />
          <p className={styles.dialCaption}>{data.dialCaption}</p>
        </div>
      </div>

      <div className={styles.heroFooter}>
        <span>{data.heroFooter.left}</span>
        <span>{data.heroFooter.right}</span>
      </div>
    </section>
  );
}
