---
name: design-system-oruim-tech
description: >
  Apply the oruim.tech design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for documentation interfaces.
---

# oruim.tech — Design System Skill

## When to Use

- Building new UI components for oruim.tech.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for documentation pages.
- Checking designs against the extracted token set.

## Context

- **Product:** oruim.tech — https://www.omrushikeshraiwade.space/business
- **Surface:** documentation
- **Audience:** Technical users
- **Character:** Developer-oriented knowledge base with a rich, diverse color palette and 3 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| --bg | `#EFEEEA` | Background |
| --accent | `#B1502F` | Accent |
| --accent | `#E0603A` | Accent |
| color-7 | `#F6F3EC` | Background |
| color-1 | `#0E0E0E` | Text Primary |
| color-4 | `#8C8B84` | Text Secondary |
| color-5 | `#A9A8A0` | Text Secondary |
| color-8 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Inter, Doto, -apple-system

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 12px | Captions, metadata |
| text-sm | 14px | Labels, secondary text |
| text-base | 15px | Body text (default) |
| text-lg | 18px | Subheadings, emphasis |
| text-xl | 24px | Section headings |
| text-2xl | 58px | Section headings |
| text-3xl | 74px | Section headings |
| text-4xl | 144px | Section headings |

**Weight scale:** 400 · 500 · 600 · 700 · 800
**Line heights:** 23.925px · 59.904px · 24.75px · 29.7px · 129.6px · 39.6px · 25.6px · 26.4px · 19.8px · 21.45px · 57.6px · 21.7px · 73.6px · 22.275px · 23.1px · 24px

### Spacing

**Base unit:** 4px

`space-1: 2px` · `space-2: 4px` · `space-3: 5px` · `space-4: 6px` · `space-5: 8px` · `space-6: 10px` · `space-7: 12px` · `space-8: 14px` · `space-9: 16px` · `space-10: 18px` · `space-11: 20px` · `space-12: 22px` · `space-13: 26px` · `space-14: 28px` · `space-15: 49px` · `space-16: 56px` · `space-17: 57px` · `space-18: 81px` · `space-19: 285px`

### Shapes

**Border radius:** `radius-sm: 8px` · `radius-md: 10px` · `radius-lg: 14px` · `radius-xl: 15px` · `radius-full: 16px` · `radius-6: 17px` · `radius-7: 22px` · `radius-8: 24px` · `radius-full: 50%` · `radius-10: 99px`

### Elevation

- **shadow-sm:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px, rgba(14, 14, 14, 0.16) 0px 14px 30px 0px`
- **shadow-md:** `rgba(14, 14, 14, 0.08) 0px 0px 0px 3px, rgba(14, 14, 14, 0.22) 0px 12px 26px 0px`
- **shadow-lg:** `rgba(14, 14, 14, 0.12) 0px 1px 0px 0px, rgba(14, 14, 14, 0.05) 0px 8px 30px 0px`
- **shadow-xl:** `rgba(14, 14, 14, 0.08) 0px 0px 0px 3px`
- **shadow-5:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px`
- **shadow-6:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px, rgba(14, 14, 14, 0.14) 0px 30px 60px 0px`
- **shadow-7:** `rgba(14, 14, 14, 0.25) 0px 10px 24px 0px`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `box-shadow 0.2s`
- **duration-base:** `transform 0.2s`
- **duration-base:** `opacity 0.25s, translate 0.25s`
- **duration-base:** `transform 0.3s`
- **duration-slow:** `4.5s ease-in-out infinite SL-ymW_bizFloat`
- **duration-slow:** `4.5s ease-in-out -2s infinite SL-ymW_bizFloat`

## Component Inventory

- **Buttons:** 8 detected
- **Links:** 52 detected
- **Inputs:** 5 detected
- **Navigation:** 2 elements
- **Lists:** 5 detected
- **Forms:** 1 detected
- **Images:** 44 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (8px, 10px, 14px, 15px, 16px, 17px, 22px, 24px, 50%, 99px).
- Do not center-align body text or code blocks.
- Do not use more than two font weights on a single page.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Clear, precise, developer-oriented. Prefer short sentences and imperative verbs.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
