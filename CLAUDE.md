# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run dev:turbo` - Start dev server with Turbopack (experimental, faster rebuilds)
- `npm run build` - Build for production (includes type checking and linting)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checking
- `npx tsc --noEmit` - Run TypeScript type checking only (no emit)
- `npm run test` - If tests are added, run them (currently no test suite)

## Code Architecture Overview

### App Router (Next.js 13+)
- Uses `/app` directory routing
- Root layout (`app/layout.tsx`) defines global styles, metadata, and font optimization
- Main page (`app/page.tsx`) serves as homepage container

### Component Architecture
Components in `/components` correspond to homepage sections:
- `Navbar.tsx` - Fixed navigation with scroll-based active section detection
- `Hero.tsx` - Landing section with introduction (uses Frijole font)
- `About.tsx` - Personal background
- `WhatIDo.tsx` - Services/offerings summary (uses VerticalCylinderCarousel)
- `ProjectCarousel.tsx` - Interactive 3D carousel showcasing projects with GSAP animations
- `VerticalCylinderCarousel.tsx` - Premium 3D cylinder carousel for services display
- `Skills.tsx` - Technical skills visualization with radial progress bars
- `Experience.tsx` - Work/professional experience timeline
- `Academic.tsx` - Education timeline with auto-rotating cards
- `Contact.tsx` - Contact form and information
- `Footer.tsx` - Site footer (updated with 5rem side padding and styled email button)
- `MouseGrid.tsx` - Background interactive mouse-following effect
- `SectionStack.tsx` - Layout wrapper for sections with consistent padding

### Data Layer
- Static project data in `/data/ProjectData.ts` (core project info, skills, metrics)
- Enhanced project data in `/case-studies/` directory (JSON files per project)
  - Each JSON includes: basic info, images, enhanced `howItWorks` arrays, metrics for achievement counters
  - To add a new project: create a JSON file in `/case-studies/` following existing format, import in ProjectData.ts if needed, or reference via slug in work directory
- Work directory (`/app/work/[slug]/`) uses dynamic routing for individual project case studies; data fetched from JSON files in `/case-studies/`

### Styling Approach
- Tailwind CSS v4 for utility-first styling
- Custom CSS in `app/globals.css`:
  - Custom scrollbar styling
  - Mouse-following dot background effects (three layers)
  - ID card swing animation
  - CSS variables for theme colors
  - Optimized font classes (Bebas Neue, JetBrains Mono, Frijole)
- Dark theme with emerald accents (`#080808` background, emerald-400/500)
- CSS variables in `:root` for theme customization

### Key Technical Features
- TypeScript throughout for type safety
- Lucide React icons (imported individually per component)
- Framer Motion-inspired animations via CSS transitions and `useEffect`; also uses `motion` library and `gsap` for advanced animations (ProjectCarousel)
- Interactive 3D carousel with mouse wheel, touch, click support (ProjectCarousel)
- Premium 3D cylinder carousel with CSS 3D transforms (VerticalCylinderCarousel)
- Modal project viewers for detailed project information (accessed from ProjectCarousel)
- Responsive design with mobile-optimized bottom navigation
- Custom mouse-tracking background effects using CSS variables (MouseGrid)
- Smooth scroll behavior globally
- Font optimization via `next/font` (Geist family) plus custom fonts
- Utility libraries: `class-variance-authority`, `clsx`, `tailwind-merge`

### Special Features
- Video elements in case studies simplified to show images only (video tags removed)
- Footer enhanced with 5rem left/right padding and styled email button (black border/text, hover: black background/white text)
- Section widths: Key Features (40%), How it Works (60%) on desktop
- Standardized subheading font size to 14px

## Best Practices
1. When adding new sections, follow existing component pattern in `/components`
2. For new projects, create a JSON file in `/case-studies/` following existing format
3. Maintain dark theme with emerald accents (`#080808` background)
4. Keep interactive elements performant; current implementations use CSS transitions and `useEffect`
5. Follow existing animation patterns using CSS transitions and transform properties
6. Ensure responsive design works on mobile (note mobile-specific bottom nav)
7. When modifying animations, preserve smooth, physics-inspired motion feel
8. Keep interactive 3D carousel performant by limiting DOM elements rendered
9. When updating dependencies, ensure compatibility with Next.js 16.3.6 and Tailwind CSS v4
10. Linting follows ESLint with `eslint-config-next`; run `npm run lint` to check issues
11. TypeScript strict mode enabled; heed type errors during development
12. For new font variations, use `next/font/google` for optimization and add corresponding CSS class in `globals.css`
13. Consider accessibility (ARIA labels, keyboard navigation) for interactive components
14. Leverage existing utility classes and patterns rather than reinventing
15. Maintain consistency in interactive patterns (hover effects, transitions, active states) across components
16. For 3D effects, understand CSS 3D coordinate system, use `transform-style: preserve-3d` and `perspective` correctly

## Claude Code Specific Guidance
- Use `/graphify` skill to query codebase architecture, file relationships, or project content
- The repository includes a project-level CLAUDE.md (this file) for Claude Code context
- Global user CLAUDE.md (`~/.claude/CLAUDE.md`) enables the graphify skill across projects
- When exploring the codebase, start with `/graphify` to understand relationships before diving into files