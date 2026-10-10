# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 16.3.6 portfolio website for Avadhut Giri, a Computer Science student and Machine Learning enthusiast. The site showcases academic background, projects, skills, and experience using a modern, interactive UI with custom animations and 3D-like effects.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checking

## Code Structure

### App Router (Next.js 13+)
- Uses the `/app` directory routing system
- Root layout in `app/layout.tsx` defines global styles and metadata
- Main page at `app/page.tsx` serves as the homepage container

### Component Architecture
- Components are organized in `/components` directory
- Each section of the homepage is a separate component:
  - Navbar - Fixed navigation with scroll-based active section detection
  - Hero - Landing section with introduction
  - About - Personal background information
  - WhatIDo - Services/offerings summary
  - ProjectCarousel - Interactive 3D carousel showcasing projects
  - Skills - Technical skills visualization
  - Experience - Work/professional experience
  - Academic - Education timeline with auto-rotating cards (modified recently)
  - Contact - Contact form and information
  - Footer - Site footer
  - MouseGrid - Background interactive mouse-following effect
  - SectionStack - Layout wrapper for sections

### Data Layer
- Static data stored in `/data/portfolio.ts`:
  - PROJECTS_DATA - Array of project objects with details
  - SKILLS_DATA - Skill proficiency metrics
  - METRICS_DATA - Achievement statistics

### Styling Approach
- Tailwind CSS v4 for utility-first styling
- Custom CSS in `app/globals.css` for:
  - Custom scrollbar styling
  - Mouse-following dot background effects
  - ID card swing animation
  - CSS variables for theme colors
- CSS modules and inline styles used for complex animations
- Dark theme with emerald accent colors (#080808 background, emerald-400/500 accents)

### Key Technical Features
- TypeScript throughout for type safety
- Lucide React for consistent iconography
- Framer Motion-inspired animations implemented with CSS transitions and useEffect
- Interactive 3D carousel with mouse wheel, touch, and click support
- Modal project viewers for detailed project information
- Responsive design with mobile-optimized bottom navigation
- Custom mouse-tracking background effects using CSS variables
- Smooth scroll behavior enabled globally

### File Conventions
- Component files use `.tsx` extension
- "use client" directive at top of interactive components
- Tailwind classes organized with consistent ordering
- Animation states managed with useState/useEffect hooks
- Data fetched from local TypeScript files rather than external APIs
- Image optimization using Next.js Image concept (though using regular img with external URLs in this case)

## Recent Changes
Based on git history:
- Modified Academic component to enhance education timeline visualization
- Fixed production issues (likely related to deployment or runtime errors)

## Best Practices for This Codebase
1. When adding new sections, follow the existing component pattern in `/components`
2. Add new data to `/data/portfolio.ts` using the existing TypeScript interfaces
3. Maintain the dark theme with emerald accents (#080808 background)
4. Keep interactive elements performant by using requestAnimationFrame where appropriate
5. Follow the existing animation patterns using CSS transitions and transform properties
6. Ensure responsive design works on mobile (note the mobile-specific bottom nav)
7. When modifying animations, preserve the smooth, physics-inspired motion feel
8. Keep the interactive 3D carousel performant by limiting DOM elements rendered