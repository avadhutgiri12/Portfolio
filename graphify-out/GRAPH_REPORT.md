# Graph Report - portfolio-website  (2026-10-31)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 372 nodes · 589 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b2958a2f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Footer.tsx
- package.json
- portfolio.ts
- lucide-react
- serviceData.ts
- next
- react
- notes/page.tsx
- business/page.tsx
- Implementation Approach
- compilerOptions
- Skills Section Update Plan
- [slug]/page.tsx
- Loading Design Specification
- Loading Skill — Coding Agent Instructions
- README.md
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 20 edges
2. `next` - 19 edges
3. `lucide-react` - 18 edges
4. `compilerOptions` - 16 edges
5. `Footer()` - 14 edges
6. `KineticContact()` - 14 edges
7. `SmoothScroll()` - 13 edges
8. `Navbar()` - 13 edges
9. `Loading Design Specification` - 10 edges
10. `Home()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Architecture` --references--> `createSlug()`  [INFERRED]
  CLAUDE.md → app/work/[slug]/page.tsx
- `Architecture` --references--> `generateStaticParams()`  [INFERRED]
  CLAUDE.md → app/work/[slug]/page.tsx
- `Home()` --calls--> `SmoothScroll()`  [EXTRACTED]
  app/page.tsx → components/SmoothScroll.tsx
- `SmoothScroll()` --calls--> `motionOn()`  [EXTRACTED]
  components/SmoothScroll.tsx → lib/motion.ts
- `Home()` --calls--> `WorkCarousel()`  [EXTRACTED]
  app/page.tsx → components/WorkCarousel.tsx

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "Footer.tsx"
Cohesion: 0.09
Nodes (29): AcademicsPage(), ContactPage(), HirePage(), Services(), WorkPage(), Academic(), education, Experience() (+21 more)

### Community 1 - "package.json"
Cohesion: 0.04
Nodes (43): eslintConfig, dependencies, class-variance-authority, clsx, gsap, lenis, lucide-react, motion (+35 more)

### Community 2 - "portfolio.ts"
Cohesion: 0.07
Nodes (24): Home(), About(), Hero(), PickUpButton(), PickUpButtonProps, LiquidButton(), LiquidButtonProps, WhatIDo() (+16 more)

### Community 3 - "lucide-react"
Cohesion: 0.10
Nodes (15): BizCard(), BizCardProps, ContributionDay, ContributionWeek, emptyGithubData, GithubData, pastWork, FreeNotes() (+7 more)

### Community 4 - "serviceData.ts"
Cohesion: 0.15
Nodes (17): PillLogo(), PillLogoProps, PillLogoWrapper(), ServiceCard(), ServiceCardProps, ServiceHero(), ServiceHeroWheel(), Service (+9 more)

### Community 5 - "next"
Cohesion: 0.09
Nodes (10): bebasNeue, metadata, roboto, xmind, LoaderProps, LoaderState, Loader, LoaderWrapper() (+2 more)

### Community 6 - "react"
Cohesion: 0.13
Nodes (11): ContactForm(), State, KineticForm(), State, Visitors(), hire, profile, visitors (+3 more)

### Community 7 - "notes/page.tsx"
Cohesion: 0.12
Nodes (11): FloatingSocial(), FloatingSocialProps, iconMap, SocialLink, anton, metadata, NotesPage(), BizNav() (+3 more)

### Community 8 - "business/page.tsx"
Cohesion: 0.15
Nodes (14): anton, BusinessPage(), metadata, BizAbout(), techStack, BizHero(), BizService(), services (+6 more)

### Community 9 - "Implementation Approach"
Cohesion: 0.10
Nodes (19): 1. Component Structure, 2. Key Features to Implement, 3. Data Usage, 4. Integration Points, 5. Files to Modify/Create, 6. Styling Approach, 7. Animation Specifications, 8. Verification Plan (+11 more)

### Community 10 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "Skills Section Update Plan"
Cohesion: 0.11
Nodes (17): 1. Create data/skills.ts, 2. Update Skills Component (`components/Skills.tsx`), 3. Mobile Responsiveness, 3D Vertical Scroll Wheel Effect, 4. Integration, Context, Current Implementation Analysis, Dependencies (+9 more)

### Community 12 - "[slug]/page.tsx"
Cohesion: 0.19
Nodes (9): caseStudyMap, createSlug(), generateMetadata(), generateStaticParams(), PageProps, WorkCaseStudy(), Architecture, Development commands (+1 more)

### Community 13 - "Loading Design Specification"
Cohesion: 0.18
Nodes (10): Acceptance checklist, Accessibility, Completion / ENTER state, Exit transition, Implementation constraints, Loading Design Specification, Loading state, Purpose (+2 more)

### Community 14 - "Loading Skill — Coding Agent Instructions"
Cohesion: 0.20
Nodes (9): Before changing code, Definition of done, Do not, Loading Skill — Coding Agent Instructions, Progress logic, Required behavior, Role, Technical quality (+1 more)

### Community 15 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **9 isolated node(s):** `class-variance-authority`, `motion`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 207 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Footer.tsx`, `package.json`, `portfolio.ts`, `lucide-react`, `serviceData.ts`, `react`, `notes/page.tsx`, `business/page.tsx`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **What connects `class-variance-authority`, `motion`, `react-dom` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Footer.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09485815602836879 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `Footer.tsx`, `package.json`, `portfolio.ts`, `serviceData.ts`, `business/page.tsx`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.04440333024976873 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Footer.tsx`, `package.json`, `portfolio.ts`, `lucide-react`, `serviceData.ts`, `next`, `business/page.tsx`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `portfolio.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07396870554765292 - nodes in this community are weakly interconnected._