"use client";

import React from "react";
import { Download, FileText } from "lucide-react";
import styles from "./BizCard.module.css";

export interface BizCardProps {
  image: string;
  title: string;
  description: string;
  category?: string;
  pages?: number;
  fileType?: string;
  downloadLink: string;
}

const BizCard: React.FC<BizCardProps> = ({
  image,
  title,
  description,
  category = "FREE RESOURCE",
  pages,
  fileType = "PDF",
  downloadLink,
}) => {
  return (
    <article className={styles.card}>

      {/* Cover Image */}
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <span className={styles.category}>
          {category}
        </span>
      </div>

      {/* Card Information */}
      <div className={styles.content}>

        <div className={styles.titleRow}>
          <h3>{title}</h3>

          <span className={styles.fileIcon}>
            <FileText size={17} />
          </span>
        </div>

        <p className={styles.description}>
          {description}
        </p>

        {/* Card Footer */}
        <div className={styles.footer}>

          <div className={styles.stats}>

            <span>
              <FileText size={15} />
              {fileType}
            </span>

            {pages && (
              <span>
                {pages} Pages
              </span>
            )}

          </div>

          <a
            href={downloadLink}
            download
            className={styles.download}
            aria-label={`Download ${title}`}
          >
            <Download size={16} />
          </a>

        </div>
      </div>
    </article>
  );
};

export default BizCard;
