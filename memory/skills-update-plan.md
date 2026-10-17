# Skills Section Update Plan

## Context
The user wants to update the skills section of their portfolio website with:
1. A new skills.ts file in data directory containing all skills organized by category
2. Changed heading from "Tools I use" to "Technical Expertise"
3. Three sections: Frontend, Backend, Tooling displayed side by side
4. Skills from the skills.ts file populating each respective section
5. 3D vertical scroll wheel effect where:
   - Front/center skill has full opacity and no blur
   - Skills above/below have lower opacity and subtle blur
   - Automatic upward rotation every 2 seconds to change skills
6. Mobile responsiveness: sections stack vertically instead of side by side

## Current Implementation Analysis
- Skills component located at `components/Skills.tsx`
- Uses hardcoded skills array (lines 16-120) with detailed skills
- Current heading: "TOOLS I USE." (line 158)
- Desktop visualization uses SkillNode and SmallSkill components for connected nodes
- Mobile version shows grid layout of skills (lines 337-390)
- Data file `data/portfolio.ts` contains different SKILLS_DATA format (name, percent, icon)

## Required Changes

### 1. Create data/skills.ts
```typescript
export interface SkillItem {
  name: string;
  icon: any; // LucideIcon type
  category: 'FRONTEND' | 'BACKEND' | 'TOOLING';
}

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: "React", icon: Code2, category: "FRONTEND" },
  { name: "Next.js", icon: Globe2, category: "FRONTEND" },
  { name: "React Native / Expo", icon: Smartphone, category: "FRONTEND" },
];

export const BACKEND_SKILLS: SkillItem[] = [
  { name: "Firebase", icon: Server, category: "BACKEND" },
  { name: "MySQL", icon: Database, category: "BACKEND" },
  { name: "Google Colab", icon: Terminal, category: "BACKEND" },
];

export const TOOLING_SKILLS: SkillItem[] = [
  { name: "Python", icon: Terminal, category: "TOOLING" },
  { name: "Machine Learning", icon: BrainCircuit, category: "TOOLING" },
  { name: "EDA", icon: LineChart, category: "TOOLING" },
  { name: "NumPy", icon: Layers3, category: "TOOLING" },
  { name: "Scikit-learn", icon: BrainCircuit, category: "TOOLING" },
  { name: "PyTorch", icon: BrainCircuit, category: "TOOLING" },
  { name: "TensorFlow", icon: BrainCircuit, category: "TOOLING" },
  { name: "Pandas", icon: Database, category: "TOOLING" },
  { name: "Model Development", icon: BrainCircuit, category: "TOOLING" },
  { name: "Git", icon: GitBranch, category: "TOOLING" },
  { name: "GitHub", icon: GitBranch, category: "TOOLING" },
];

export const ALL_SKILLS = [
  ...FRONTEND_SKILLS,
  ...BACKEND_SKILLS,
  ...TOOLING_SKILLS,
];
```

### 2. Update Skills Component (`components/Skills.tsx`)
#### Header Changes
- Change "TOOLS I USE." to "TECHNICAL EXPERTISE"
- Update sub-text from "I USE." to something appropriate or remove

#### Three Section Layout
- Replace current visualization with three vertical containers
- Each container shows skills from one category
- Desktop: flex-row layout with gaps
- Mobile: flex-column layout (stacked)

#### 3D Vertical Scroll Wheel Effect
For each section, implement a vertical carousel where:
- Skills are arranged in a vertical wheel
- Center skill: opacity: 1, blur: 0, scale: 1
- Skills above/below: decreasing opacity, increasing blur, slight scale reduction
- Use CSS transforms: translateY, rotateX, scale, opacity
- Automatic rotation: change active skill every 2 seconds using useEffect/setInterval
- Smooth transitions for all properties

#### Implementation Approach
1. Create a VerticalSkillWheel component that takes skills array and category name
2. Use useState to track active index
3. useEffect with setInterval to increment index every 2 seconds (circular)
4. For each skill, calculate position based on distance from active index:
   - distance 0 (center): opacity: 1, blur: 0, scale: 1, rotateX: 0
   - distance 1: opacity: 0.8, blur: 2px, scale: 0.95, rotateX: ±5deg
   - distance 2: opacity: 0.6, blur: 4px, scale: 0.9, rotateX: ±10deg
   - distance 3+: opacity: 0.3, blur: 6px, scale: 0.8, rotateX: ±15deg
5. Apply transitions for smooth animation
6. Handle touch/wheel events for manual navigation (optional but good UX)

#### Styling
- Use CSS variables or inline styles for transforms
- Match existing color scheme: text-white, emerald accents, dark background
- Ensure hover states maintain the 3D effect
- Responsive design: adjust sizes for mobile

### 3. Mobile Responsiveness
- On mobile (< md breakpoint):
  - Sections stack vertically (flex-column)
  - Each section takes full width
  - Wheel height may need adjustment
  - Consider reducing number of visible skills or wheel diameter

### 4. Integration
- Import skills from `@/data/skills`
- Replace hardcoded skills array with categorized imports
- Remove or repurpose existing SkillNode/SmallSkill components
- Keep existing bottom info section if desired or redesign

## Files to Modify
1. `data/skills.ts` - NEW FILE
2. `components/Skills.tsx` - MAJOR UPDATE
3. `data/portfolio.ts` - May need to export the new skill format or leave SKILLS_DATA unchanged (used elsewhere?)

## Verification
- Check that heading changes correctly
- Verify three sections display properly on desktop
- Confirm 3D wheel effect works (center skill prominent, others faded)
- Test automatic rotation every 2 seconds
- Verify mobile responsiveness (vertical stacking)
- Ensure all skills from original component are present in new structure
- Check that existing functionality (hover effects, etc.) is preserved or enhanced

## Dependencies
- Lucide React icons already imported in Skills.tsx
- No new dependencies needed
- Uses existing Tailwind CSS setup

## Risks & Considerations
- Performance: Ensure wheel animation doesn't cause layout thrashing
- Accessibility: Consider reducing motion preferences
- Fallback: Provide static view if JavaScript disabled
- Consistency: Match animation style with rest of site (use similar timing functions)