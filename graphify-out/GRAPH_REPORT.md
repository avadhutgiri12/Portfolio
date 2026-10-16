# Graph Report - portfolio-website  (2026-10-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 149 nodes · 216 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 26,394 input · 1,050 output

## Graph Freshness
- Built from commit: `a7146de0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Core Pages
- UI Components
- Project Config
- TS Config
- Experience Section
- Next Config
- Project Data
- Dependencies
- Dev Dependencies
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Home()` - 12 edges
3. `react` - 11 edges
4. `lucide-react` - 10 edges
5. `Skills` - 5 edges
6. `Badge()` - 5 edges
7. `CarouselStacked()` - 5 edges
8. `cn()` - 5 edges
9. `scripts` - 5 edges
10. `next` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `ProjectCarousel()`  [EXTRACTED]
  app/page.tsx → components/ProjectCarousel.tsx
- `ProjectModalProps` --references--> `Project`  [EXTRACTED]
  components/ProjectModal.tsx → data/portfolio.ts
- `Home()` --calls--> `About()`  [EXTRACTED]
  app/page.tsx → components/About.tsx
- `Home()` --calls--> `Academic()`  [EXTRACTED]
  app/page.tsx → components/Academic.tsx
- `Home()` --calls--> `Contact()`  [EXTRACTED]
  app/page.tsx → components/Contact.tsx

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "Core Pages"
Cohesion: 0.16
Nodes (16): Home(), About(), Academic(), education, Contact(), Experience(), Footer(), Hero() (+8 more)

### Community 1 - "UI Components"
Cohesion: 0.14
Nodes (18): Badge(), BadgeProps, badgeVariants, Card(), CardProps, CarouselConfig, CarouselStacked(), CarouselStackedProps (+10 more)

### Community 2 - "Project Config"
Cohesion: 0.10
Nodes (19): eslintConfig, name, private, scripts, build, dev, lint, start (+11 more)

### Community 3 - "TS Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "Experience Section"
Cohesion: 0.13
Nodes (9): ContributionDay, ContributionWeek, emptyGithubData, GithubData, pastWork, SectionScrollProps, SectionStack(), SectionStackProps (+1 more)

### Community 5 - "Next Config"
Cohesion: 0.15
Nodes (6): bebasNeue, metadata, highlights, technologies, nextConfig, next

### Community 6 - "Project Data"
Cohesion: 0.26
Nodes (9): Metrics(), ProjectCarousel(), ProjectModal(), ProjectModalProps, METRICS_DATA, Project, PROJECTS_DATA, Skill (+1 more)

### Community 7 - "Dependencies"
Cohesion: 0.20
Nodes (10): dependencies, class-variance-authority, clsx, gsap, lucide-react, motion, next, react (+2 more)

### Community 8 - "Dev Dependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

## Knowledge Gaps
- **8 isolated node(s):** `gsap`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss`, `@types/node` (+3 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 80 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Experience Section` to `Core Pages`, `UI Components`, `Project Config`, `Project Data`?**
  _High betweenness centrality (0.207) - this node is a cross-community bridge._
- **What connects `gsap`, `react-dom`, `tailwindcss` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Core Pages` to `Project Config`, `Experience Section`, `Project Data`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **Should `Project Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Next Config` to `Project Config`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Should `TS Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._