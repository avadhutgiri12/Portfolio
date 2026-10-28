# Graph Report - portfolio-website  (2026-10-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 305 nodes · 459 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4efc15be`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- KineticContact.tsx
- business/page.tsx
- next
- package.json
- portfolio.ts
- Implementation Approach
- compilerOptions
- Skills Section Update Plan
- [slug]/page.tsx
- CLAUDE.md
- dependencies
- Skills.tsx
- devDependencies
- layout.tsx
- Experience.tsx
- Loader.tsx
- README.md
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 16 edges
2. `compilerOptions` - 16 edges
3. `next` - 15 edges
4. `lucide-react` - 12 edges
5. `Home()` - 9 edges
6. `Implementation Approach` - 9 edges
7. `SmoothScroll()` - 8 edges
8. `Skills Section Update Plan` - 8 edges
9. `Footer()` - 7 edges
10. `KineticContact()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `Footer()`  [EXTRACTED]
  app/page.tsx → components/Footer.tsx
- `Home()` --calls--> `KineticContact()`  [EXTRACTED]
  app/page.tsx → components/KineticContact.tsx
- `Home()` --calls--> `Navbar()`  [EXTRACTED]
  app/page.tsx → components/Navbar.tsx
- `AcademicsPage()` --calls--> `Academic()`  [EXTRACTED]
  app/academics/page.tsx → components/Academic.tsx
- `Home()` --calls--> `SmoothScroll()`  [EXTRACTED]
  app/page.tsx → components/SmoothScroll.tsx

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "KineticContact.tsx"
Cohesion: 0.11
Nodes (21): AcademicsPage(), ContactPage(), HirePage(), WorkPage(), Academic(), education, Footer(), KineticContact() (+13 more)

### Community 1 - "business/page.tsx"
Cohesion: 0.09
Nodes (25): FloatingSocial(), FloatingSocialProps, SocialLink, anton, BusinessPage(), metadata, anton, metadata (+17 more)

### Community 2 - "next"
Cohesion: 0.10
Nodes (13): Home(), About(), Hero(), PickUpButton(), PickUpButtonProps, PillLogo(), PillLogoProps, WhatIDo() (+5 more)

### Community 3 - "package.json"
Cohesion: 0.08
Nodes (23): eslintConfig, name, private, scripts, build, dev, lint, start (+15 more)

### Community 4 - "portfolio.ts"
Cohesion: 0.11
Nodes (15): InstagramIcon(), ABOUT_DATA, AboutData, HeroData, METRICS_DATA, Project, Service, SERVICES_DATA (+7 more)

### Community 5 - "Implementation Approach"
Cohesion: 0.10
Nodes (19): 1. Component Structure, 2. Key Features to Implement, 3. Data Usage, 4. Integration Points, 5. Files to Modify/Create, 6. Styling Approach, 7. Animation Specifications, 8. Verification Plan (+11 more)

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "Skills Section Update Plan"
Cohesion: 0.11
Nodes (17): 1. Create data/skills.ts, 2. Update Skills Component (`components/Skills.tsx`), 3. Mobile Responsiveness, 3D Vertical Scroll Wheel Effect, 4. Integration, Context, Current Implementation Analysis, Dependencies (+9 more)

### Community 8 - "[slug]/page.tsx"
Cohesion: 0.15
Nodes (12): caseStudyMap, createSlug(), generateMetadata(), generateStaticParams(), PageProps, WorkCaseStudy(), Overlays(), METRICS_DATA (+4 more)

### Community 9 - "CLAUDE.md"
Cohesion: 0.14
Nodes (12): App Router (Next.js 13+), Best Practices for This Codebase, Code Structure, Component Architecture, Data Layer, Development Commands, Environment Variables, File Conventions (+4 more)

### Community 10 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, class-variance-authority, clsx, gsap, lenis, lucide-react, motion, next (+4 more)

### Community 11 - "Skills.tsx"
Cohesion: 0.27
Nodes (8): SKILL_GROUPS, SkillWheel(), TINTS, BACKEND_SKILLS, FRONTEND_SKILLS, Skill, SkillCategory, TOOLING_SKILLS

### Community 12 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 13 - "layout.tsx"
Cohesion: 0.25
Nodes (4): bebasNeue, metadata, roboto, xmind

### Community 14 - "Experience.tsx"
Cohesion: 0.25
Nodes (6): ContributionDay, ContributionWeek, emptyGithubData, Experience(), GithubData, pastWork

### Community 15 - "Loader.tsx"
Cohesion: 0.38
Nodes (4): LoaderProps, LoaderState, Loader, LoaderWrapper()

### Community 16 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **9 isolated node(s):** `class-variance-authority`, `motion`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 170 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `KineticContact.tsx`, `business/page.tsx`, `package.json`, `[slug]/page.tsx`, `layout.tsx`, `Loader.tsx`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **What connects `class-variance-authority`, `motion`, `react-dom` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `KineticContact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11470985155195682 - nodes in this community are weakly interconnected._
- **Why does `react` connect `KineticContact.tsx` to `business/page.tsx`, `next`, `package.json`, `portfolio.ts`, `Skills.tsx`, `Experience.tsx`, `Loader.tsx`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **Should `business/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0945945945945946 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `next` to `KineticContact.tsx`, `package.json`, `portfolio.ts`, `[slug]/page.tsx`, `Experience.tsx`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.09885057471264368 - nodes in this community are weakly interconnected._