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

App Router (Next.js 16.3.6, React 19, Tailwind CSS v4). Path alias `@/*` maps to the repo root.

- `app/layout.tsx` — root layout. Sets metadata, imports `app/globals.css`, loads four fonts via `next/font/google` (Bebas Neue, JetBrains Mono, Frijole, Roboto) and applies their CSS variables to `<body>`. Renders a dark `#080808` shell containing the `MouseGrid` background effect and `<main>` for page children.
- `app/page.tsx` — homepage. Composes sections: Navbar → SmoothScroll → Hero → About → WorkCarousel → WhatIDo → KineticContact → Footer.
- `app/work/page.tsx` — work listing. Same shell minus Hero/About, plus Skills.
- `app/work/[slug]/page.tsx` — dynamic per-project case study. Uses `generateStaticParams` from `data/ProjectData.ts`; slugs are derived from project titles via `createSlug`. Case-study JSON files in `/case-studies/` (01–04) supply `howItWorks`/`metrics` and are wired into the page through a hardcoded `caseStudyMap` keyed by project `id`. Returns `notFound()` for unknown slugs. Renders preview, impact, key features (40% width), how it works (60% width), tools, and prev/next project navigation.
- Other routes: `app/business`, `app/contact`, `app/hire`, `app/academics`, `app/api/github`.

Data layer:
- `data/ProjectData.ts` — `PROJECT_DATA[]` and the `Project` interface; single source of truth for project cards and case studies.
- `case-studies/*.json` — enhanced per-project data (how-it-works steps, metrics). Imported by slug in `[slug]/page.tsx`.
- `lib/content.ts` — `profile`, `visitors`, `hire` (services used by the business page and contact form).
- `lib/notes.config.ts` — `notes` and `series` for the business site's free PDF notes.

Styling:
- Tailwind v4 (`@import "tailwindcss"` in `app/globals.css`); there is no `tailwind.config.js`.
- `app/globals.css` — `:root` CSS variables (`--background: #080808`, `--spatial-accent: #34d399`, radii, shadows), custom scrollbar, three-layer mouse-following dot background, `id-card-swing`, `skill-wheel` 3D CSS (`transform-style: preserve-3d`), `hero-ghost` marquee, grain/vignette overlays, and `work-tab`. Component font classes (`.bebas-neue`, `.frijole-regular`, `.jetbrains-mono`) live here. Case-study pages use an orange accent (`#fe4c12`) rather than the emerald variable.

Conventions:
- Add a new project: add an entry to `PROJECT_DATA` in `data/ProjectData.ts`, create a matching `case-studies/NN-slug.json`, and update the `caseStudyMap` in `app/work/[slug]/page.tsx` with the project's `id`. Because slugs are generated from titles, changing a title changes its URL.
- Animations: prefer CSS transforms and `transform-style: preserve-3d`; respect `prefers-reduced-motion`.
- Icons: import individually from `lucide-react`.
