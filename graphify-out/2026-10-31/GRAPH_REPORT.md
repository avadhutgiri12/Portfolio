# Graph Report - portfolio-website  (2026-10-29)

## Corpus Check
- 65 files · ~318,154 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 13 file(s) not represented in the graph (top: .css 10, (none) 1, .ico 1)

## Summary
- 330 nodes · 522 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c58de9f7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- KineticContact.tsx
- business/page.tsx
- react
- package.json
- portfolio.ts
- Implementation Approach
- compilerOptions
- Skills Section Update Plan
- [slug]/page.tsx
- Loading Design Specification
- dependencies
- Skills.tsx
- devDependencies
- layout.tsx
- Loading Skill — Coding Agent Instructions
- Loader.tsx
- README.md
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 20 edges
2. `compilerOptions` - 16 edges
3. `next` - 15 edges
4. `SmoothScroll()` - 13 edges
5. `Footer()` - 12 edges
6. `KineticContact()` - 12 edges
7. `lucide-react` - 12 edges
8. `Navbar()` - 11 edges
9. `Loading Design Specification` - 10 edges
10. `Home()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Architecture` --references--> `createSlug()`  [INFERRED]
  CLAUDE.md → app/work/[slug]/page.tsx
- `Architecture` --references--> `generateStaticParams()`  [INFERRED]
  CLAUDE.md → app/work/[slug]/page.tsx
- `Home()` --calls--> `Hero()`  [EXTRACTED]
  app/page.tsx → components/Hero.tsx
- `Services()` --calls--> `ServicesPage()`  [EXTRACTED]
  app/services/page.tsx → components/ServicesPage.tsx
- `WorkPage()` --calls--> `Skills()`  [EXTRACTED]
  app/work/page.tsx → components/Skills.tsx

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "KineticContact.tsx"
Cohesion: 0.14
Nodes (23): AcademicsPage(), ContactPage(), HirePage(), Home(), WorkPage(), About(), Academic(), Experience() (+15 more)

### Community 1 - "business/page.tsx"
Cohesion: 0.08
Nodes (27): FloatingSocial(), FloatingSocialProps, SocialLink, anton, BusinessPage(), metadata, anton, metadata (+19 more)

### Community 2 - "react"
Cohesion: 0.16
Nodes (11): Services(), education, Service, ServiceCard(), ServiceCardProps, ServiceHero(), ServiceHeroWheel(), words (+3 more)

### Community 3 - "package.json"
Cohesion: 0.08
Nodes (23): eslintConfig, name, private, scripts, build, dev, lint, start (+15 more)

### Community 4 - "portfolio.ts"
Cohesion: 0.08
Nodes (21): Hero(), PickUpButton(), PickUpButtonProps, PillLogo(), PillLogoProps, InstagramIcon(), ABOUT_DATA, AboutData (+13 more)

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
Cohesion: 0.08
Nodes (20): caseStudyMap, createSlug(), generateMetadata(), generateStaticParams(), PageProps, WorkCaseStudy(), Architecture, Development commands (+12 more)

### Community 9 - "Loading Design Specification"
Cohesion: 0.18
Nodes (10): Acceptance checklist, Accessibility, Completion / ENTER state, Exit transition, Implementation constraints, Loading Design Specification, Loading state, Purpose (+2 more)

### Community 10 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, class-variance-authority, clsx, gsap, lenis, lucide-react, motion, next (+4 more)

### Community 11 - "Skills.tsx"
Cohesion: 0.25
Nodes (9): SKILL_GROUPS, Skills(), SkillWheel(), TINTS, BACKEND_SKILLS, FRONTEND_SKILLS, Skill, SkillCategory (+1 more)

### Community 12 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 13 - "layout.tsx"
Cohesion: 0.25
Nodes (4): bebasNeue, metadata, roboto, xmind

### Community 14 - "Loading Skill — Coding Agent Instructions"
Cohesion: 0.20
Nodes (9): Before changing code, Definition of done, Do not, Loading Skill — Coding Agent Instructions, Progress logic, Required behavior, Role, Technical quality (+1 more)

### Community 15 - "Loader.tsx"
Cohesion: 0.38
Nodes (4): LoaderProps, LoaderState, Loader, LoaderWrapper()

### Community 16 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **9 isolated node(s):** `class-variance-authority`, `motion`, `react-dom`, `@tailwindcss/postcss`, `@types/node` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 182 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `KineticContact.tsx`, `business/page.tsx`, `package.json`, `portfolio.ts`, `[slug]/page.tsx`, `Skills.tsx`, `Loader.tsx`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **What connects `class-variance-authority`, `motion`, `react-dom` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `KineticContact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14487179487179488 - nodes in this community are weakly interconnected._
- **Why does `next` connect `business/page.tsx` to `KineticContact.tsx`, `package.json`, `portfolio.ts`, `[slug]/page.tsx`, `layout.tsx`, `Loader.tsx`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Should `business/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07610993657505286 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `[slug]/page.tsx` to `KineticContact.tsx`, `react`, `package.json`, `portfolio.ts`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07977207977207977 - nodes in this community are weakly interconnected._