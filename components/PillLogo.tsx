import React, { useId } from "react";

/**
 * PillLogo — animated pill logo with a spinning 3D ring.
 *
 * Usage:
 *   <PillLogo />
 *   <PillLogo name="avadhut" accent="#7C5CFF" size={48} />
 *
 * Props:
 *   name    text shown in the pill            (default "avadhut")
 *   accent  accent colour of ring + dot       (default "#7C5CFF")
 *   size    base font size in px; everything  (default 64)
 *           else scales with it (em units)
 *
 * No dependencies besides React. For the exact look, load Space Grotesk 700:
 *   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
 */

export interface PillLogoProps {
  name?: string;
  accent?: string;
  size?: number;
  className?: string;
}

const css = `
.pl-pill{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  align-items:center;
  gap:.34em;
  padding:.28em .75em .28em .44em;
  border-radius:999px;
  background: rgba(0, 0, 0, 0.7);
  border:1.5px solid rgba(255,255,255,.12);
  box-shadow:0 .375em .94em rgba(124,92,255,.18);
  font-family:'Space Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  font-weight:700;
  line-height:1;
  color:#FBFAFD;
  user-select:none;
}

/* ring: tilted, then spun around its own vertical axis */
.pl-persp{
  width:1.3125em;
  height:1.3125em;
  display:flex;
  align-items:center;
  justify-content:center;
  perspective:4.06em;
}
.pl-tilt{transform:rotateZ(-32deg)}
.pl-ring{
  width:1.1875em;
  height:1.1875em;
  transform-style:preserve-3d;
  animation:pl-spin 3.6s linear infinite;
}
.pl-ring svg{display:block;width:100%;height:100%}
@keyframes pl-spin{to{transform:rotateY(360deg)}}

/* centre dot pulse */
.pl-dot{
  transform-box:fill-box;
  transform-origin:center;
  animation:pl-dot 1.8s ease-in-out infinite;
}
@keyframes pl-dot{
  0%,100%{transform:scale(.7);opacity:.7}
  50%{transform:scale(1.15);opacity:1}
}

/* name: letter-spacing breathes */
.pl-name{
  font-size:1em;
  animation:pl-name 4.5s ease-in-out infinite;
}
@keyframes pl-name{
  0%,100%{letter-spacing:.01em}
  50%{letter-spacing:.035em}
}

/* light streak sweeping across the pill */
.pl-glint{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  width:1.4em;
  pointer-events:none;
  background:linear-gradient(100deg,transparent,rgba(255,255,255,.14),transparent);
  transform:translateX(-2.2em) skewX(-18deg);
  animation:pl-glint 4.5s cubic-bezier(.5,0,.3,1) infinite;
}
@keyframes pl-glint{
  0%,55%{transform:translateX(-2.2em) skewX(-18deg)}
  100%{transform:translateX(6.5em) skewX(-18deg)}
}

@media (prefers-reduced-motion:reduce){
  .pl-ring,.pl-dot,.pl-name,.pl-glint{animation:none}
}
`;

export function PillLogo({
  name = "Avadhut",
  accent = "#7C5CFF",
  size = 64,
  className,
}: PillLogoProps) {
  const gradId = useId().replace(/:/g, "");

  return (
    <>
      <style>{css}</style>
      <div
        className={`pl-pill${className ? ` ${className}` : ""}`}
        style={{ fontSize: size }}
        role="img"
        aria-label={`${name} logo`}
      >
        <div className="pl-persp" aria-hidden="true">
          <div className="pl-tilt">
            <div className="pl-ring">
              <svg viewBox="0 0 76 76">
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFB020" />
                    <stop offset="1" stopColor={accent} />
                  </linearGradient>
                </defs>
                <circle
                  cx="38"
                  cy="38"
                  r="31"
                  fill="none"
                  stroke={`url(#${gradId})`}
                  strokeWidth="5"
                />
                <circle className="pl-dot" cx="38" cy="38" r="7" fill={accent} />
              </svg>
            </div>
          </div>
        </div>

        <span className="pl-name">{name}</span>
        <div className="pl-glint" aria-hidden="true" />
      </div>
    </>
  );
}

export default PillLogo;
