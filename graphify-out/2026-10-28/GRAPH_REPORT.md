# Graph Report - portfolio-website  (2026-10-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 267 nodes · 383 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1e101eae`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- KineticContact.tsx
- SmoothScroll.tsx
- package.json
- Implementation Approach
- [slug]/page.tsx
- compilerOptions
- app/page.tsx
- Skills Section Update Plan
- bussiness/page.tsx
- Skills.tsx
- CLAUDE.md
- dependencies
- devDependencies
- portfolio.ts
- README.md
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `react` - 15 edges
3. `SmoothScroll()` - 14 edges
4. `next` - 13 edges
5. `lucide-react` - 10 edges
6. `Implementation Approach` - 9 edges
7. `Skills Section Update Plan` - 8 edges
8. `KineticContact()` - 7 edges
9. `motionOn()` - 7 edges
10. `Code Structure` - 7 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `MouseGrid()`  [EXTRACTED]
  app/layout.tsx → components/MouseGrid.tsx
- `ContactPage()` --calls--> `SmoothScroll()`  [EXTRACTED]
  app/contact/page.tsx → components/SmoothScroll.tsx
- `Skills()` --calls--> `motionOn()`  [EXTRACTED]
  components/Skills.tsx → lib/motion.ts
- `SmoothScroll()` --calls--> `motionOn()`  [EXTRACTED]
  components/SmoothScroll.tsx → lib/motion.ts
- `Home()` --calls--> `SmoothScroll()`  [EXTRACTED]
  app/page.tsx → components/SmoothScroll.tsx

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "KineticContact.tsx"
Cohesion: 0.09
Nodes (23): ContactPage(), bebasNeue, frijole, jetBrainsMono, metadata, roboto, RootLayout(), State (+15 more)

### Community 1 - "SmoothScroll.tsx"
Cohesion: 0.11
Nodes (16): AcademicsPage(), HirePage(), highlights, technologies, Academic(), education, ContributionDay, ContributionWeek (+8 more)

### Community 2 - "package.json"
Cohesion: 0.08
Nodes (22): eslintConfig, name, private, scripts, build, dev, lint, start (+14 more)

### Community 3 - "Implementation Approach"
Cohesion: 0.10
Nodes (19): 1. Component Structure, 2. Key Features to Implement, 3. Data Usage, 4. Integration Points, 5. Files to Modify/Create, 6. Styling Approach, 7. Animation Specifications, 8. Verification Plan (+11 more)

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.15
Nodes (10): caseStudyMap, createSlug(), generateMetadata(), generateStaticParams(), PageProps, WorkCaseStudy(), Overlays(), Project (+2 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.18
Nodes (10): Home(), About(), Button(), Hero(), HeroButtton(), CarouselItem, VerticalCylinderCarousel(), VerticalCylinderCarouselProps (+2 more)

### Community 7 - "Skills Section Update Plan"
Cohesion: 0.11
Nodes (17): 1. Create data/skills.ts, 2. Update Skills Component (`components/Skills.tsx`), 3. Mobile Responsiveness, 3D Vertical Scroll Wheel Effect, 4. Integration, Context, Current Implementation Analysis, Dependencies (+9 more)

### Community 8 - "bussiness/page.tsx"
Cohesion: 0.16
Nodes (7): anton, BusinessPage(), metadata, BizNav(), ContactForm(), nextConfig, next

### Community 9 - "Skills.tsx"
Cohesion: 0.20
Nodes (12): WorkPage(), SKILL_GROUPS, Skills(), SkillWheel(), TINTS, motionOn(), WorkCarousel(), BACKEND_SKILLS (+4 more)

### Community 10 - "CLAUDE.md"
Cohesion: 0.14
Nodes (12): App Router (Next.js 13+), Best Practices for This Codebase, Code Structure, Component Architecture, Data Layer, Development Commands, Environment Variables, File Conventions (+4 more)

### Community 11 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, class-variance-authority, clsx, gsap, lenis, lucide-react, motion, next (+3 more)

### Community 12 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 13 - "portfolio.ts"
Cohesion: 0.33
Nodes (4): METRICS_DATA, Project, Skill, SKILLS_DATA

### Community 14 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **9 isolated node(s):** `class-variance-authority`, `motion`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 157 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `KineticContact.tsx` to `SmoothScroll.tsx`, `package.json`, `app/page.tsx`, `Skills.tsx`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **What connects `class-variance-authority`, `motion`, `react-dom` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `KineticContact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0858974358974359 - nodes in this community are weakly interconnected._
- **Why does `next` connect `bussiness/page.tsx` to `KineticContact.tsx`, `SmoothScroll.tsx`, `package.json`, `[slug]/page.tsx`, `app/page.tsx`, `Skills.tsx`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Should `SmoothScroll.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1076923076923077 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `[slug]/page.tsx` to `KineticContact.tsx`, `SmoothScroll.tsx`, `package.json`, `app/page.tsx`, `Skills.tsx`, `portfolio.ts`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._