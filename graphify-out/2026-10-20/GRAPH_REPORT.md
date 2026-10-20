# Graph Report - portfolio-website  (2026-10-19)

## Corpus Check
- 53 files · ~231,850 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, (none) 1, .ico 1)

## Summary
- 312 nodes · 425 edges · 27 communities (25 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `774550eb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app/page.tsx
- Implementation Approach
- package.json
- TS Config
- SmoothScroll.tsx
- KineticContact.tsx
- react
- dependencies
- Skills Section Update Plan
- PostCSS Config
- Skills.tsx
- lucide-react
- CLAUDE.md
- Spatial UI Design System — Implementation Guide for Claude Code
- 6. Buttons and Icon Buttons
- 10. Tooltips, Badges, Alerts, and Toasts
- 18. Quality Checklist
- 7. Forms and Input Controls
- README.md
- 12. Backgrounds, Lighting, and Depth Cues
- 13. Motion and Interaction Principles
- 14. Responsive and Touch Behavior
- 5. Cards
- 8. Navigation, Tabs, and Segmented Controls
- 17. Suggested CSS Patterns
- 1. What “Spatial UI” Means
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `Spatial UI Design System — Implementation Guide for Claude Code` - 20 edges
2. `react` - 16 edges
3. `compilerOptions` - 16 edges
4. `SmoothScroll()` - 14 edges
5. `lucide-react` - 12 edges
6. `next` - 10 edges
7. `Implementation Approach` - 9 edges
8. `Skills Section Update Plan` - 8 edges
9. `Home()` - 7 edges
10. `motionOn()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Example component API direction` --references--> `Button()`  [INFERRED]
  SpatialDesignUI.md → components/Button.tsx
- `RootLayout()` --calls--> `MouseGrid()`  [EXTRACTED]
  app/layout.tsx → components/MouseGrid.tsx
- `Home()` --calls--> `KineticContact()`  [EXTRACTED]
  app/page.tsx → components/KineticContact.tsx
- `Home()` --calls--> `SmoothScroll()`  [EXTRACTED]
  app/page.tsx → components/SmoothScroll.tsx
- `Home()` --calls--> `WorkCarousel()`  [EXTRACTED]
  app/page.tsx → components/WorkCarousel.tsx

## Import Cycles
- None detected.

## Communities (27 total, 2 thin omitted)

### Community 0 - "app/page.tsx"
Cohesion: 0.19
Nodes (11): Home(), About(), highlights, technologies, Button(), Hero(), SERVICES, WhatIDo() (+3 more)

### Community 1 - "Implementation Approach"
Cohesion: 0.10
Nodes (19): 1. Component Structure, 2. Key Features to Implement, 3. Data Usage, 4. Integration Points, 5. Files to Modify/Create, 6. Styling Approach, 7. Animation Specifications, 8. Verification Plan (+11 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (31): eslintConfig, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+23 more)

### Community 3 - "TS Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "SmoothScroll.tsx"
Cohesion: 0.11
Nodes (17): AcademicsPage(), ContactPage(), HirePage(), Academic(), education, ContributionDay, ContributionWeek, emptyGithubData (+9 more)

### Community 5 - "KineticContact.tsx"
Cohesion: 0.10
Nodes (19): bebasNeue, frijole, jetBrainsMono, metadata, RootLayout(), Footer(), pages, openMail() (+11 more)

### Community 6 - "react"
Cohesion: 0.13
Nodes (10): MouseGrid(), ProjectDetail(), ProjectDetailProps, ProjectLicenceCardProps, METRICS_DATA, Project, PROJECTS_DATA, Skill (+2 more)

### Community 7 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, class-variance-authority, clsx, gsap, lenis, lucide-react, motion, next (+3 more)

### Community 8 - "Skills Section Update Plan"
Cohesion: 0.11
Nodes (17): 1. Create data/skills.ts, 2. Update Skills Component (`components/Skills.tsx`), 3. Mobile Responsiveness, 3D Vertical Scroll Wheel Effect, 4. Integration, Context, Current Implementation Analysis, Dependencies (+9 more)

### Community 10 - "Skills.tsx"
Cohesion: 0.19
Nodes (13): WorkPage(), ProjectShowcase(), SKILL_GROUPS, Skills(), SkillWheel(), TINTS, motionOn(), WorkCarousel() (+5 more)

### Community 11 - "lucide-react"
Cohesion: 0.22
Nodes (9): createSlug(), generateMetadata(), generateStaticParams(), PageProps, WorkCaseStudy(), Overlays(), Project, PROJECT_DATA (+1 more)

### Community 12 - "CLAUDE.md"
Cohesion: 0.14
Nodes (12): App Router (Next.js 13+), Best Practices for This Codebase, Code Structure, Component Architecture, Data Layer, Development Commands, Environment Variables, File Conventions (+4 more)

### Community 13 - "Spatial UI Design System — Implementation Guide for Claude Code"
Cohesion: 0.18
Nodes (10): 11. Tables, Lists, and Dense Information, 15. Accessibility Requirements, 19. Instruction to Claude Code, 2. Design Priorities, 3. Spatial Layers and Elevation, 4. Surface and Glass Material, 9. Modals, Dialogs, and Drawers, Material rules (+2 more)

### Community 14 - "6. Buttons and Icon Buttons"
Cohesion: 0.33
Nodes (6): 6. Buttons and Icon Buttons, Ghost button, Icon button, Interaction states, Primary button, Secondary button

### Community 15 - "10. Tooltips, Badges, Alerts, and Toasts"
Cohesion: 0.40
Nodes (5): 10. Tooltips, Badges, Alerts, and Toasts, Alerts, Badges and status chips, Toasts, Tooltips

### Community 16 - "18. Quality Checklist"
Cohesion: 0.40
Nodes (5): 18. Quality Checklist, Accessibility, Interaction, Responsive and technical, Visual

### Community 17 - "7. Forms and Input Controls"
Cohesion: 0.40
Nodes (5): 7. Forms and Input Controls, Checkboxes, radios, and switches, Form layout, Recommended states, Text inputs, textareas, and select controls

### Community 18 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 19 - "12. Backgrounds, Lighting, and Depth Cues"
Cohesion: 0.50
Nodes (4): 12. Backgrounds, Lighting, and Depth Cues, Background treatment, Lighting, Perspective

### Community 20 - "13. Motion and Interaction Principles"
Cohesion: 0.50
Nodes (4): 13. Motion and Interaction Principles, Accessibility and performance, Good motion, Timing guidelines

### Community 21 - "14. Responsive and Touch Behavior"
Cohesion: 0.50
Nodes (4): 14. Responsive and Touch Behavior, Desktop, Mobile, Tablet

### Community 22 - "5. Cards"
Cohesion: 0.50
Nodes (4): 5. Cards, Avoid, Card hierarchy, Default card appearance

### Community 23 - "8. Navigation, Tabs, and Segmented Controls"
Cohesion: 0.50
Nodes (4): 8. Navigation, Tabs, and Segmented Controls, Dropdowns and popovers, Navigation bar or dock, Tabs and segmented controls

### Community 24 - "17. Suggested CSS Patterns"
Cohesion: 0.67
Nodes (3): 17. Suggested CSS Patterns, Button interaction, Floating surface

### Community 25 - "1. What “Spatial UI” Means"
Cohesion: 0.67
Nodes (3): 1. What “Spatial UI” Means, Core visual qualities, Important distinction

## Knowledge Gaps
- **9 isolated node(s):** `class-variance-authority`, `motion`, `react-dom`, `@tailwindcss/postcss`, `@types/node` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 189 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Spatial UI Design System — Implementation Guide for Claude Code` connect `Spatial UI Design System — Implementation Guide for Claude Code` to `app/page.tsx`, `6. Buttons and Icon Buttons`, `10. Tooltips, Badges, Alerts, and Toasts`, `18. Quality Checklist`, `7. Forms and Input Controls`, `12. Backgrounds, Lighting, and Depth Cues`, `13. Motion and Interaction Principles`, `14. Responsive and Touch Behavior`, `5. Cards`, `8. Navigation, Tabs, and Segmented Controls`, `17. Suggested CSS Patterns`, `1. What “Spatial UI” Means`?**
  _High betweenness centrality (0.238) - this node is a cross-community bridge._
- **What connects `class-variance-authority`, `motion`, `react-dom` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Implementation Approach` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06050420168067227 - nodes in this community are weakly interconnected._
- **Should `TS Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `SmoothScroll.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10846560846560846 - nodes in this community are weakly interconnected._
- **Should `KineticContact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1028225806451613 - nodes in this community are weakly interconnected._