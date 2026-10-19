# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 16.3.6 portfolio website for Avadhut Giri, a Computer Science student and Machine Learning enthusiast. The site showcases academic background, projects, skills, and experience using a modern, interactive UI with custom animations and 3D-like effects.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production (includes type checking and linting)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checking
- `npx tsc --noEmit` - Run TypeScript type checking only (no emit)
- `npm run dev:turbo` - Start dev server with Turbopack (experimental, faster rebuilds)

## Environment Variables

- The project uses `.env.local` for environment variables (not committed to version control).
- Example variables might include API keys or configuration settings (though none are currently defined in the repository).

## Code Structure

### App Router (Next.js 13+)
- Uses the `/app` directory routing system
- Root layout in `app/layout.tsx` defines global styles, metadata, and font optimization
- Main page at `app/page.tsx` serves as the homepage container

### Component Architecture
- Components are organized in `/components` directory
- Each section of the homepage is a separate component:
  - Navbar - Fixed navigation with scroll-based active section detection
  - Hero - Landing section with introduction (now uses Frijole font for text)
  - About - Personal background information
  - WhatIDo - Services/offerings summary
  - ProjectCarousel - Interactive 3D carousel showcasing projects with GSAP animations
  - VerticalCylinderCarousel - Premium 3D cylinder carousel for services display
  - Skills - Technical skills visualization with radial progress bars
  - Experience - Work/professional experience timeline
  - Academic - Education timeline with auto-rotating cards (modified recently)
  - Contact - Contact form and information
  - Footer - Site footer (updated with 5rem side padding and styled email button)
  - MouseGrid - Background interactive mouse-following effect using CSS variables
  - SectionStack - Layout wrapper for sections with consistent padding

### Data Layer
- Static project data stored in:
  - `/data/ProjectData.ts` - Main project information (used for core project data)
  - `/case-studies/` directory - JSON files with enhanced project data including:
    - Basic project info (title, image, etc.)
    - Enhanced "howItWorks" arrays with step-by-step explanations
    - Metrics data for achievement counters
- When adding new projects, create a JSON file in `/case-studies/` following the existing format
- Skill and metrics data remains in `/data/ProjectData.ts`

### Styling Approach
- Tailwind CSS v4 for utility-first styling
- Custom CSS in `app/globals.css` for:
  - Custom scrollbar styling
  - Mouse-following dot background effects (three layers: base, glow, light)
  - ID card swing animation
  - CSS variables for theme colors
  - CSS classes for optimized fonts (bebas-neue, jetbrains-mono, frijole-regular)
- Dark theme with emerald accent colors (#080808 background, emerald-400/500 accents)
- CSS variables stored in :root for theme customization

### Key Technical Features
- TypeScript throughout for type safety
- Lucide React for consistent iconography (imported individually per component)
- Framer Motion-inspired animations implemented with CSS transitions and `useEffect`; also uses `motion` library (framer motion) and `gsap` for advanced animations (ProjectCarousel)
- Interactive 3D carousel with mouse wheel, touch, and click support (ProjectCarousel component)
- Premium 3D cylinder carousel with CSS 3D transforms (VerticalCylinderCarousel component)
- Modal project viewers for detailed project information (accessed from ProjectCarousel)
- Responsive design with mobile-optimized bottom navigation
- Custom mouse-tracking background effects using CSS variables (MouseGrid component)
- Smooth scroll behavior enabled globally
- Font optimization using `next/font` (Geist font family for base, plus custom fonts: Bebas Neue, JetBrains Mono, Frijole)
- Utility libraries: `class-variance-authority` and `clsx` for variant styling, `tailwind-merge` for merging Tailwind classes

### Special Features
- Work directory (`/app/work/[slug]/`) uses dynamic routing for individual project case studies
- Case study data is fetched from JSON files in `/case-studies/` based on project ID
- Video elements in case studies have been simplified to show images only (video tags removed)
- Footer email button styled with black border/text and hover effects (black background/white text)

## File Conventions
- Component files use `.tsx` extension
- "use client" directive at top of interactive components
- Tailwind classes organized with consistent ordering (flex/grid first, positioning, spacing, sizing, typography, effects)
- Animation states managed with `useState`/`useEffect` hooks
- Data fetched from local TypeScript/JSON files rather than external APIs
- Image optimization using Next.js Image concept (though using regular `img` with external URLs in this case for flexibility)

## Recent Changes (Oct 2026)
- Simplified video case study display to show images only (removed video tags)
- Enhanced footer with 5rem left/right padding and styled email button
- Updated project data to use JSON files in `/case-studies/` for enriched content
- Improved "How it works" section to display dynamic data from case study JSONs
- Adjusted section widths: Key Features (40%), How it Works (60%)
- Standardized subheading font size to 14px
- Added VerticalCylinderCarousel component for premium 3D services display
- Updated WhatIDo section to use the new 3D cylinder carousel

## Best Practices for This Codebase
1. When adding new sections, follow the existing component pattern in `/components`
2. For new projects, create a JSON file in `/case-studies/` following the existing format
3. Maintain the dark theme with emerald accents (#080808 background)
4. Keep interactive elements performant by using `requestAnimationFrame` where appropriate (note: current implementations use CSS transitions and `useEffect`)
5. Follow the existing animation patterns using CSS transitions and transform properties
6. Ensure responsive design works on mobile (note the mobile-specific bottom nav)
7. When modifying animations, preserve the smooth, physics-inspired motion feel
8. Keep the interactive 3D carousel performant by limiting DOM elements rendered
9. When updating dependencies, ensure compatibility with Next.js 16.3.6 and Tailwind CSS v4
10. Linting follows ESLint with `eslint-config-next`; run `npm run lint` to check for issues
11. TypeScript strict mode is enabled; heed type errors during development
12. When adding new font variations, use `next/font/google` for optimization and add corresponding CSS class in globals.css
13. For interactive components, consider accessibility (ARIA labels, keyboard navigation)
14. Leverage existing utility classes and patterns rather than reinventing
15. Maintain consistency in interactive patterns (hover effects, transitions, active states) across components for a cohesive user experience
16. For 3D effects, understand the CSS 3D coordinate system and use `transform-style: preserve-3d` and `perspective` properties correctly