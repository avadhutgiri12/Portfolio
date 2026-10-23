"use client";

import styles from "./biz.module.css";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

interface FloatingSocialProps {
  socialLinks: Record<string, SocialLink>;
}

export default function FloatingSocial({ socialLinks }: FloatingSocialProps) {
  return (
    <div className={styles.floatingSocial} aria-label="Social links">
      {Object.entries(socialLinks).map(([key, link]) => (
        <a
          key={key}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.floatingLink}
          style={{ "--icon-color": link.color } as React.CSSProperties}
          aria-label={link.name}
        >
          <link.icon className={styles.floatingIcon} />
        </a>
      ))}
    </div>
  );
}