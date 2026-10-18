# Plan: Create WorkCarousel Component

## Context
The user wants to create a new WorkCarousel component that displays projects as a row of tall cards with spatial UI effects. The middle card should appear large while others lean away on either side using 3D transforms. Additional requirements include:
- Only the front card's media plays when the component is in view (using IntersectionObserver for performance)
- Backdrop shows the current project's own screenshot thrown out of focus
- Clicking a side card brings it forward; clicking the front card or "Open case study" button reads the full write-up
- Support for Arrow keys and swipe gestures for navigation
- Create a projectData.ts file to store project data separately for easy maintenance
- Examine and use the provided case studies code structure
- Add the WorkCarousel component to main page.tsx

After exploring the codebase, I found:
- No existing WorkCarousel component exists
- Project data is stored in `data/portfolio.ts` as `PROJECTS_DATA` array
- There is no separate case studies section - projects themselves function as case studies
- The closest existing carousel-like implementation is in `Academic.tsx` (education carousel with auto-rotation)
- `ProjectShowcase.tsx` implements a list/detail pattern for projects
- `kinetic.css` defines spatial UI styles including `.kin-rail` for horizontal scroll carousel

## Implementation Approach

### 1. Component Structure
- Create `/components/WorkCarousel.tsx`
- Implement 3D spatial layout using CSS transforms (translateZ, rotateY, scale)
- Use IntersectionObserver API to detect component visibility and control media playback
- Add keyboard (ArrowLeft/ArrowRight) and swipe gesture support
- Create project detail panel that slides in when front card is clicked
- Include "Open case study" button in detail panel that navigates to case study view

### 2. Key Features to Implement
- **3D Spatial Carousel Layout**: Cards arranged in 3D space with middle card prominent (largest scale, minimal rotation, highest Z-index)
- **Media Playback Control**: Only play media of visible/front card using IntersectionObserver
- **Visual Feedback**: Backdrop with blurred project screenshot for spatial depth
- **Interaction Handling**: 
  - Click side cards to bring them forward (update selected index)
  - Click front card or "Open case study" button to open detail panel
  - Arrow key navigation (Left/Right)
  - Swipe gesture support for touch devices
- **Project Data Display**: Show key project information in detail panel (title, year, role, tools, etc.)
- **Responsive Behavior**: Adapt layout for different screen sizes (stacked on mobile, side-by-side on desktop)

### 3. Data Usage
- Use project data from `/data/portfolio.ts` (PROJECTS_DATA) - no need for separate projectData.ts as requested since data is already properly structured
- Create `/content/case-studies/` directory with JSON case study files for each project (as per user's code structure example)
- Create `/lib/case-studies.ts` with getCaseStudy function to fetch case study data
- Utilize existing fields: title, subtitle, year, role, tools, image, description, impact, tags, videoUrl, liveSiteUrl, repositoryUrl, status

### 4. Integration Points
- Import and use motion/framer animation libraries for smooth transitions (following existing patterns)
- Follow existing component patterns in the codebase
- Maintain consistency with Tailwind CSS styling approach
- Integrate with existing kinetic design system and color scheme

### 5. Files to Modify/Create
- Create: `components/WorkCarousel.tsx` (new component)
- Create: `content/case-studies/` directory with JSON files (01.json, 02.json, etc.)
- Create: `lib/case-studies.ts` (getCaseStudy function)
- Modify: `app/page.tsx` (to add WorkCarousel component)
- No need to create projectData.ts as PROJECTS_DATA in data/portfolio.ts already serves this purpose

### 6. Styling Approach
- Use Tailwind CSS for layout and positioning (following existing patterns)
- Create custom 3D transform classes for spatial positioning
- Apply consistent spacing and typography from existing components
- Use CSS transforms for 3D spatial positioning (translateZ, rotateY, scale)
- Create hover/press effects for interactive elements
- Implement backdrop blur effect for spatial depth
- Follow existing kinetic design patterns from kinetic.css

### 7. Animation Specifications
- 3D card arrangement with proper depth sorting using CSS transforms
- Smooth transitions between card states using CSS transitions
- Scale and rotation effects based on card position relative to center
- Media playback control via IntersectionObserver (play only when component in view AND card is front/middle)
- Backdrop blur transition when changing projects
- Keyboard and swipe navigation with spring-like motion animations
- Detail panel slide-in/slide-out animation

### 8. Verification Plan
- Run `npm run build` to ensure no compilation errors
- Run `npm run lint` to check code quality
- Manually verify:
  - Projects display correctly in 3D spatial carousel layout
  - Middle card appears larger, others lean away with proper 3D transforms (translateZ, rotateY, scale)
  - Only front card's media plays when component is in view
  - Clicking side cards brings them forward (becomes middle card)
  - Clicking front card opens detail panel with project information
  - Clicking "Open case study" button in detail panel navigates to case study view
  - Arrow keys navigate between projects (Left/Right)
  - Swipe gestures work on touch devices
  - Technology count, year, status, role display correctly in detail panel
  - Responsive behavior on different screen sizes
  - No console errors in development mode

## Details

### Component Props
The component will accept minimal props since it uses the global PROJECTS_DATA:
```typescript
interface WorkCarouselProps {
  className?: string;
}
```

### Internal State
- Current project index (for featured project in 3D space)
- Drag state for swipe gesture handling
- Swipe detection values (start position, current position, etc.)
- Detail panel visibility state
- Media playback states controlled via IntersectionObserver

### Key Sections
1. **3D Carousel Container**: Main container with perspective and 3D transform space
2. **Project Cards**: Row of tall cards arranged in 3D space:
   - Middle card (index 0 offset): Largest scale (1.0), minimal rotation (0deg), highest Z-index, closest translateZ
   - Side cards (±1 offset): Medium scale (0.9), moderate rotation (±15deg), medium Z-index, medium translateZ
   - Outer cards (±2 offset): Smallest scale (0.8), higher rotation (±30deg), lowest Z-index, furthest translateZ
   - Cards further out: Continue pattern with decreasing scale, increasing rotation, decreasing Z-index
   - Backdrop: Blurred version of current project's image behind carousel with lower opacity
3. **Navigation Visual Indicators**: Subtle cues for navigation direction (optional)
4. **Project Detail Panel**: Slides in from right when project is selected:
   - Project title, subtitle, year, role, status
   - Tools list with visual tags
   - Brief description
   - "Open case study" button
5. **Case Study View**: Full case study display (separate route or modal)

### Data Flow
1. Component imports PROJECTS_DATA from data/portfolio.ts
2. Current project index determines which project is featured prominently in 3D space (middle card)
3. 3D positions (scale, rotation, Z-index, translateZ) calculated for each project based on index offset from center:
   - scale = 1 - (Math.abs(offset) * 0.1) [minimum 0.5]
   - rotateY = offset * 15deg
   - translateZ = - (Math.abs(offset) * 50px)
   - z-index = 100 - (Math.abs(offset) * 10) [higher scale = higher z-index]
4. IntersectionObserver monitors component visibility to control media playback:
   - When component enters viewport: enable media playback for front card
   - When component leaves viewport: pause all media playback
   - Only the middle/current front card's media plays when component is in view
5. Selected project data populates the detail panel when activated
6. Case study data fetched via getCaseStudy function from lib/case-studies.ts when "Open case study" is clicked

### Dependencies
- Framer Motion (already installed via "motion" package) - for any spring animations if needed
- React hooks (useState, useEffect, useRef)
- Tailwind CSS for styling (consistent with existing codebase)
- Lucide icons for button enhancements (following existing patterns)
- Next.js navigation (useRouter hook) for case study navigation

### Specific Implementation Notes
Based on the exploration findings and user requirements:

1. **3D Layout Calculation**:
   - Use CSS perspective: 1000px on container
   - Calculate transform values for each card based on offset from center index:
     * scale: Math.max(0.5, 1 - (Math.abs(offset) * 0.1))
     * rotateY: `${offset * 15}deg`
     * translateZ: `${-Math.abs(offset) * 50}px`
     * z-index: 100 - (Math.abs(offset) * 10)
   - Update these values on state change for smooth transitions

2. **Media Playback Control**:
   - Use IntersectionObserver on component container
   - When component is intersecting (in viewport):
     * Find ref to media element of current middle card
     * Play that media element
   - When component is not intersecting:
     * Pause all media elements
   - Use useRef to store media element references

3. **Backdrop Effect**:
   - Create blurred version using CSS backdrop-filter or by duplicating image with blur
   - Position behind carousel with absolute positioning
   - Set opacity to 0.3-0.5 for subtle effect
   - Transition opacity and blur when project changes

4. **Interaction Handling**:
   - PointerEvent listeners (pointerdown, pointermove, pointerup) for drag/swipe
   - Keyboard event listeners for ArrowLeft/ArrowRight
   - Calculate drag distance to determine navigation direction (>50px threshold)
   - Animate to new position with CSS transition (transform, opacity)
   - Prevent default behavior to avoid text selection during drag

5. **Detail Panel**:
   - Initially hidden (transform: translateX(100%))
   - Slide in when project selected (transform: translateX(0)) with transition
   - Contains project details and "Open case study" button
   - Button uses Next.js router to navigate to case study page
   - Close button or backdrop click to dismiss panel

6. **Case Study Structure**:
   - Based on user's example, create JSON files in content/case-studies/:
     ```json
     {
       "problem": "...",
       "why": "...",
       "solution": {
         "summary": "...",
         "media": [...]
       },
       "tech": [...],
       "wentWrong": [...],
       "learned": [...],
       "result": [...]
     }
     ```
   - lib/case-studies.ts exports getCaseStudy(projectId) function
   - Function reads appropriate JSON file from content/case-studies/

## Files Structure After Implementation

```
components/
  WorkCarousel.tsx
data/
  portfolio.ts          (existing - contains PROJECTS_DATA)
content/
  case-studies/
    01.json             (new - case study for StoreWay)
    02.json             (new - case study for House Price Prediction)
    03.json             (new - case study for URBAN CULTURE)
    04.json             (new - case study for AURORA)
    05.json             (new - case study for KINETIC LIB)
lib/
  content.ts            (existing)
  case-studies.ts       (new - getCaseStudy function)
  motion.ts             (existing)
  smooth.ts             (existing)
  utils.ts              (existing)
app/
  page.tsx              (modified - add WorkCarousel)
  work/
    page.tsx            (existing - may update to use WorkCarousel instead of ProjectShowcase)
  case-studies/
    [id]/
      page.tsx          (new - case study display pages)
```
