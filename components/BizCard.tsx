"use client";

import React from "react";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import "./bizCard.css";

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
    <article className="biz-note-card">

      {/* Cover Image */}
      <div className="biz-note-image-wrapper">
        <img
          src={image}
          alt={title}
          className="biz-note-image"
        />

        <span className="biz-note-category">
          {category}
        </span>
      </div>

      {/* Card Information */}
      <div className="biz-note-content">

        <div className="biz-note-title-row">
          <h3>{title}</h3>

          <span className="biz-note-file-icon">
            <FileText size={17} />
          </span>
        </div>

        <p className="biz-note-description">
          {description}
        </p>

        {/* Card Footer */}
        <div className="biz-note-footer">

          <div className="biz-note-stats">

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
            className="biz-note-download"
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
