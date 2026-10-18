# Plan: Create SpatialProjectCarousel Component

## Context
The user wants to create a new SpatialProjectCarousel component that displays projects in a Spatial UI Design layout (horizontal 3D carousel like carousel-07.tsx) with specific features:
- Project visualization in a horizontal 3D carousel layout
- Arrow buttons for manual project navigation
- Buttons to visit live website and open case study
- Display of technology count, year, status, and role
- Spatial UI button design
- Auto-rotation of projects every 3 seconds

This component will adapt the existing carousel-07.tsx infrastructure to focus on project details rather than just image display, creating a cohesive spatial UI experience.

## Implementation Approach

### 1. Component Structure
- Create `/components/SpatialProjectCarousel.tsx`
- Adapt animation logic and structure from existing carousel-07.tsx
- Modify to work with PROJECTS_DATA instead of generic slides
- Add project detail panel alongside the carousel
- Include navigation controls (arrows) and action buttons

### 2. Key Features to Implement
- **Horizontal 3D Carousel Layout**: Adapt carousel-07.tsx's spatial arrangement for projects
- **Project Details Panel**: Showcase key project information alongside carousel
- **Navigation Controls**: Left/right arrow buttons for manual project selection
- **Action Buttons**: Visit Live Site and Open Case Study buttons in detail panel
- **Info Display**: Technology count (from tools.length), year, status, role
- **Spatial UI Button Design**: Custom buttons with spatial hover/press effects
- **Auto-rotation**: Automatic project change every 3 seconds (retained from carousel-07)

### 3. Data Usage
- Use `PROJECTS_DATA` from `/data/portfolio.ts`
- Extract technologies count from `project.tools.length`
- Utilize existing fields: title, subtitle, year, role, status, tools, image, liveSiteUrl, repositoryUrl, description

### 4. Integration Points
- Import and use motion/framer animation libraries (from carousel-07.tsx patterns)
- Adapt utility functions from carousel-07.tsx for project data
- Follow existing component patterns in the codebase
- Maintain consistency with Tailwind CSS styling approach

### 5. Files to Modify/Create
- Create: `components/SpatialProjectCarousel.tsx` (new component)
- No existing files need modification for this component

### 6. Styling Approach
- Use Tailwind CSS for layout and positioning (following existing patterns)
- Create spatial button variants with custom hover effects
- Apply consistent spacing and typography from existing components
- Use CSS transforms for 3D spatial positioning (adapted from carousel-07)

### 7. Animation Specifications
- Auto-rotate projects every 3 seconds (matching requirement, retained from carousel-07)
- Smooth transitions between project states using spring physics
- Horizontal 3D arrangement with depth and rotation effects
- Hover animations for interactive elements (buttons, arrows)

### 8. Verification Plan
- Run `npm run build` to ensure no compilation errors
- Run `npm run lint` to check code quality
- Manually verify:
  - Projects display correctly in horizontal 3D carousel layout
  - Arrow buttons navigate between projects
  - Auto-rotation works every 3 seconds
  - Action buttons link to correct URLs (liveSiteUrl/repositoryUrl)
  - Technology count, year, status, role display correctly
  - Responsive behavior on different screen sizes
  - No console errors in development mode

## Details

### Component Props
The component will accept minimal props since it uses the global PROJECTS_DATA:
```typescript
interface SpatialProjectCarouselProps {
  className?: string;
}
```

### Internal State
- Current project index (for featured project in detail panel)
- Animation values for spatial arrangement (scrollProgress from carousel-07 pattern)
- Auto-rotation interval reference

### Key Sections
1. **Project Display Area**: Main horizontal 3D carousel (adapted from carousel-07.tsx)
2. **Project Info Panel**: Details about currently selected project
3. **Navigation Controls**: Left/right arrow buttons (spatial UI styled)
4. **Action Buttons**: Visit Live Site and Open Case Study (in detail panel)
5. **Stats Display**: Technology count, year, status, role (in detail panel)

### Reuse Opportunities
- Animation config and logic from carousel-07.tsx (getCarouselConfig, handleDrag, etc.)
- Utility functions from lib/motion.ts
- Button styling patterns from existing components (Button.tsx)
- Project data formatting approach from ProjectDetail.tsx

## Technical Implementation

Based on my analysis of the existing codebase and the user's clarification about wanting a horizontal 3D carousel like carousel-07, here's how I'll implement the SpatialProjectCarousel:

### Core Animation Logic
I'll adapt the spring-based animation system from carousel-07.tsx which already provides:
- Horizontal 3D-like spatial arrangement with x, y, z positioning
- Rotation and scale effects based on scroll/progress
- Drag interaction with smooth settling
- Auto-rotation every 3 seconds (already implemented - matches user requirement)

### Component Layout
The component will have two main sections:
1. **Left Side (60% width)**: Horizontal 3D project carousel showing multiple projects in 3D space
2. **Right Side (40% width)**: Project detail panel showing:
   - Project title and subtitle
   - Technology count (tools.length formatted as "X technologies")
   - Year, status, role
   - Action buttons (Visit Live Site, Open Case Study) with spatial UI design
   - Brief description (from project.description)

### Spatial Button Design
For spatial UI buttons, I'll create:
- Transparent background with emerald-400 border (matching site theme)
- Subtle hover lift effect (translateY(-2px))
- Pressed state with slight inset (translateY(1px))
- Emerald glow on hover (shadow-[0_0_10px_rgba(34,197,94,0.5)])
- Consistent with the existing kinetic design language and color scheme

### Responsive Behavior
- On mobile (<640px): Stack layout (carousel above details, full width)
- On desktop (>=640px): Side-by-side layout (60% carousel, 40% details)
- Touch-friendly controls for mobile (drag to rotate carousel preserved)

## Data Flow
1. Component imports PROJECTS_DATA from data/portfolio.ts
2. Current project index (from scrollProgress) determines which project is featured in detail panel
3. Animation values calculate positions for all projects in 3D space (adapted from carousel-07)
4. Selected project data populates the detail panel
5. Auto-rotation updates scrollProgress every 3 seconds via Framer Motion's animate function (retained from carousel-07)

## Dependencies
- Framer Motion (already installed via "motion" package - used in carousel-07.tsx)
- React hooks (useState, useEffect, useTransform, useMotionValue - same as carousel-07)
- Tailwind CSS for styling (consistent with existing codebase)
- Lucide icons for button enhancements (optional, following existing patterns)

## Specific Implementation Notes
Based on the exploration findings:
- The carousel-07.tsx already implements the exact auto-rotation every 3 seconds that the user requested
- The horizontal 3D arrangement matches the user's clarification about wanting a layout "like carousel-07"
- I will modify carousel-07.tsx to work with PROJECTS_DATA instead of the generic Slide interface
- I will add the project detail panel alongside the existing carousel structure
- I will maintain all the existing animation physics and drag interactions from carousel-07
- The spatial UI button design will extend the existing button patterns found in the codebase