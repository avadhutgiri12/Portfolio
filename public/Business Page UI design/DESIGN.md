# oruim.tech

## Overview

**Product:** oruim.tech
**URL:** https://www.omrushikeshraiwade.space/business
**Surface type:** documentation
**Audience:** Technical users
**Brand character:** Developer-oriented knowledge base with a rich, diverse color palette and 3 typefaces.

### Design Principles

- Clarity over density — every element should reduce time-to-answer.
- Scannable structure — use hierarchy so users find before they read.
- Code-first — code examples are primary content, prose is secondary.

## Colors

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

## Typography

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

## Spacing

**Base unit:** 4px

`space-1: 2px` · `space-2: 4px` · `space-3: 5px` · `space-4: 6px` · `space-5: 8px` · `space-6: 10px` · `space-7: 12px` · `space-8: 14px` · `space-9: 16px` · `space-10: 18px` · `space-11: 20px` · `space-12: 22px` · `space-13: 26px` · `space-14: 28px` · `space-15: 49px` · `space-16: 56px` · `space-17: 57px` · `space-18: 81px` · `space-19: 285px`

## Shapes

**Border radius:** `radius-sm: 8px` · `radius-md: 10px` · `radius-lg: 14px` · `radius-xl: 15px` · `radius-full: 16px` · `radius-6: 17px` · `radius-7: 22px` · `radius-8: 24px` · `radius-full: 50%` · `radius-10: 99px`

## Elevation

- **shadow-sm:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px, rgba(14, 14, 14, 0.16) 0px 14px 30px 0px`
- **shadow-md:** `rgba(14, 14, 14, 0.08) 0px 0px 0px 3px, rgba(14, 14, 14, 0.22) 0px 12px 26px 0px`
- **shadow-lg:** `rgba(14, 14, 14, 0.12) 0px 1px 0px 0px, rgba(14, 14, 14, 0.05) 0px 8px 30px 0px`
- **shadow-xl:** `rgba(14, 14, 14, 0.08) 0px 0px 0px 3px`
- **shadow-5:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px`
- **shadow-6:** `rgba(14, 14, 14, 0.12) 0px 0px 0px 1px, rgba(14, 14, 14, 0.14) 0px 30px 60px 0px`
- **shadow-7:** `rgba(14, 14, 14, 0.25) 0px 10px 24px 0px`

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `box-shadow 0.2s`
- **duration-base:** `transform 0.2s`
- **duration-base:** `opacity 0.25s, translate 0.25s`
- **duration-base:** `transform 0.3s`
- **duration-slow:** `4.5s ease-in-out infinite SL-ymW_bizFloat`
- **duration-slow:** `4.5s ease-in-out -2s infinite SL-ymW_bizFloat`

## Components

- **Buttons:** 8 detected
- **Links:** 52 detected
- **Inputs:** 5 detected
- **Navigation:** 2 elements
- **Lists:** 5 detected
- **Forms:** 1 detected
- **Images:** 44 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (8px, 10px, 14px, 15px, 16px, 17px, 22px, 24px, 50%, 99px).
- Do not center-align body text or code blocks.
- Do not use more than two font weights on a single page.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Clear, precise, developer-oriented. Prefer short sentences and imperative verbs.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 8 detected
- **Links:** 52 detected
- **Inputs:** 5 detected
- **Navigation:** 2 elements
- **Lists:** 5 detected
- **Forms:** 1 detected
- **Images:** 44 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
