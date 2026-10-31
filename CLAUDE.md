# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build (Next.js runs type checking and linting as part of the build)
- `npm run start` — start the production server
- `npm run lint` — run ESLint (uses `eslint-config-next`)
- `npx tsc --noEmit` — TypeScript type check only (strict mode is enabled)

There is no test suite and no `test` script in `package.json`. There is no `dev:turbo` script.

## Architecture

App Router (Next.js 16.3.6, React 19.2.8, Tailwind CSS v4). Path alias `@/*` maps to the repo root.

### Routes

- `app/layout.tsx` — root layout. Sets metadata, imports `app/globals.css`, loads fonts via `next/font/google` (Bebas Neue, Lexend, Roboto) and applies their CSS variables to `<body>`. Renders a dark `#080808` shell containing the `MouseGrid` background effect and `<main>` for page children.
- `app/page.tsx` — homepage. Composes sections: Navbar → SmoothScroll → Hero → About → WorkCarousel → WhatIDo → KineticContact → Footer.
- `app/business/page.tsx` — business landing page. Composes: BizNav → BizHero → BizAbout. Uses `Anton` font for headings.
- `app/work/page.tsx` — work listing. Same shell minus Hero/About, plus Skills section.
- `app/work/[slug]/page.tsx` — dynamic per-project case study. Uses `generateStaticParams` from `data/ProjectData.ts`; slugs are derived from project titles via `createSlug`. Case-study JSON files in `/case-studies/` (01–02) supply `howItWorks`/`metrics` and are wired into the page through a hardcoded `caseStudyMap` keyed by project `id`. Returns `notFound()` for unknown slugs. Renders preview, impact, key features (40% width), how it works (60% width), tools, and prev/next project navigation.
- `app/services/page.tsx` — services page. Uses data from `data/serviceData.ts`.
- `app/academics/page.tsx` — academics page.
- `app/contact/page.tsx` — contact page with form.
- `app/hire/page.tsx` — hire page.
- `app/notes/page.tsx` — free PDF notes page. Uses `notes.config.ts` for notes/series data. Composes FloatingSocial.
- `app/api/github/route.ts` — GitHub API endpoint for visitor/contribution data.

### Data layer

- `data/ProjectData.ts` — `PROJECT_DATA[]` and the `Project` interface; single source of truth for project cards and case studies.
- `data/portfolio.ts` — centralized data exports: `HERO_DATA`, `ABOUT_DATA`, `SERVICES_DATA`, `SKILLS_DATA`, `METRICS_DATA`, `socialLinks`, and their TypeScript interfaces.
- `data/serviceData.ts` — services data for the services page and business page.
- `data/skills.ts` — skills data for the skills section.
- `data/notesData.ts` — notes data for the notes page.
- `data/socialIcons.tsx` — wrapper components for brand icons from `simple-icons`.
- `case-studies/*.json` — enhanced per-project data (how-it-works steps, metrics). Imported by slug in `[slug]/page.tsx`.
- `lib/content.ts` — `profile`, `visitors`, `hire` (services used by the business page and contact form).
- `lib/notes.config.ts` — `notes` and `series` for the business site's free PDF notes.
- `lib/motion.ts` — motion utilities (`motionOn`, `motionOff`).
- `lib/smooth.ts` — smooth scroll utilities.
- `lib/utils.ts` — utility functions (`cn` for class merging, etc.).

### Styling

- Tailwind v4 (`@import "tailwindcss"` in `app/globals.css`); there is no `tailwind.config.js`.
- `app/globals.css` — `:root` CSS variables (`--background: #f5f0e8`, `--foreground: #1a1a1a`, `--spatial-accent: #ffbe38`, radii, shadows), custom scrollbar, three-layer mouse-following dot background, `id-card-swing`, `skill-wheel` 3D CSS (`transform-style: preserve-3d`), `hero-ghost` marquee, grain/vignette overlays, and `work-tab`. Component font classes (`.bebas-neue`, `.lexend`, `.xmind`) live here. Case-study pages use an orange accent (`#fe4c12`) rather than the gold variable.
- Component-scoped CSS modules (e.g., `BizAbout.module.css`, `BizHero.module.css`, `BizNav.module.css`) for business page components.
- Brand color: `#ffbe38` (gold/amber) — used throughout for accents, hover states, and interactive elements.
- Fonts: Anton (business headings), Bebas Neue, Lexend, Roboto (via `next/font/google`).

### Conventions

- Add a new project: add an entry to `PROJECT_DATA` in `data/ProjectData.ts`, create a matching `case-studies/NN-slug.json`, and update the `caseStudyMap` in `app/work/[slug]/page.tsx` with the project's `id`. Because slugs are generated from titles, changing a title changes its URL.
- Add/update content sections: edit exports in `data/portfolio.ts` (HERO_DATA, ABOUT_DATA, SERVICES_DATA, etc.) and import in components.
- Animations: prefer CSS transforms and `transform-style: preserve-3d`; respect `prefers-reduced-motion`. GSAP and Lenis used for scroll animations.
- Icons: import individually from `lucide-react`. Brand icons from `simple-icons` via wrapper components in `data/socialIcons.tsx`.
- Data-driven components: all textual/image content should be sourced from `data/portfolio.ts` exports rather than hardcoded.
- Color consistency: use `--spatial-accent` (#ffbe38) or explicit `#ffbe38` for brand accents; avoid emerald/green colors.
- Business page components (BizNav, BizHero, BizAbout, BizService, BizCard) use CSS modules and are styled with the Anton font for headings.
- Notes page uses FloatingSocial component for social links.

### Key dependencies

- `gsap` + `lenis` — scroll animations and smooth scrolling
- `motion` (Framer Motion) — component animations
- `lucide-react` — UI icons
- `simple-icons` — brand icons
- `class-variance-authority` + `clsx` + `tailwind-merge` — class name composition
- `@tailwindcss/postcss` — Tailwind v4 PostCSS plugin