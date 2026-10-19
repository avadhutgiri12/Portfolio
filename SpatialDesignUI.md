# Spatial UI Design System — Implementation Guide for Claude Code

> **Purpose:** Use this document as the design and implementation reference whenever building or updating UI components in this project. The goal is to create a polished **spatial-inspired interface**: layered, dimensional, tactile, calm, and responsive—not a collection of flat rectangles with blur applied everywhere.

---

## 1. What “Spatial UI” Means

Spatial UI makes digital content feel like it occupies a space. Interfaces communicate depth through **layering, perspective, light, material, scale, motion, and clear spatial relationships**.

For a normal website, this is a *spatial-inspired 2D interface*: it remains accessible and usable on a screen while using visual cues associated with spatial computing interfaces such as floating panels and visionOS.

### Core visual qualities

- **Layered:** surfaces sit at different visual elevations.
- **Translucent, selectively:** glass-like surfaces reveal a little of the environment behind them.
- **Dimensional:** subtle highlights, inner borders, shadows, and perspective suggest thickness.
- **Calm:** generous spacing and restrained decoration prevent visual overload.
- **Tactile:** buttons and controls feel pressable; hover and active states respond with small, purposeful movements.
- **Contextual:** the background and light create a sense of environment without competing with content.
- **Legible:** contrast, typography, and hierarchy always matter more than the glass effect.

### Important distinction

Do not make every component equally transparent, glowing, floating, or animated. Spatial design depends on contrast between layers. Use the strongest depth effects on a few important surfaces; keep text, forms, and dense information easy to read.

---

## 2. Design Priorities

Follow these priorities in order:

1. **Preserve the existing product and project identity.** Keep current brand colors, content, typography choices, and visual identity unless the task explicitly asks to change them.
2. **Improve depth and material.** Introduce elevation, soft edge highlights, layered surfaces, and selective translucency.
3. **Maintain usability.** Keep controls recognizable, text readable, and interaction states obvious.
4. **Add motion only when it explains an interaction.** Avoid decorative movement that distracts from content.
5. **Make it responsive.** Spatial effects must simplify gracefully on small screens and touch devices.
6. **Respect the existing architecture.** Reuse current components, design tokens, dependencies, and conventions before introducing new ones.

For this portfolio project, use the existing dark theme and accent color as the source of truth. Do not replace the current color palette with a generic neon/cyan sci-fi palette. If the current theme uses emerald accents, retain emerald for emphasis and use neutral dark surfaces for depth.

---

## 3. Spatial Layers and Elevation

Think of the interface as a stack of surfaces.

| Layer | Purpose | Visual treatment |
|---|---|---|
| Environment | Page or section background | Existing background color, subtle radial light, very low-contrast gradients or texture |
| Base surface | Main content area | Mostly opaque, quiet surface; little or no blur |
| Floating surface | Cards, panels, navigation groups | Slightly lighter or more translucent surface, fine border, soft shadow |
| Elevated surface | Popovers, dropdowns, menus | Stronger separation from the background, clear edge highlight, deeper shadow |
| Modal surface | Dialogs and focused tasks | Highest elevation, readable opaque/glass surface, backdrop dimming |
| Active control | Selected or pressed item | Clear accent, inset/outer highlight, or small positional change |

Use elevation to explain hierarchy, not as decoration. A dropdown must appear above its trigger; a modal must appear above the page; a card should not look more prominent than a primary action without a reason.

### Suggested CSS variables

Adapt these to the existing theme instead of blindly replacing current tokens:

```css
:root {
  --spatial-bg: var(--background, #080808);
  --spatial-surface: rgba(255, 255, 255, 0.045);
  --spatial-surface-raised: rgba(255, 255, 255, 0.075);
  --spatial-surface-strong: rgba(20, 20, 20, 0.88);
  --spatial-border: rgba(255, 255, 255, 0.10);
  --spatial-border-highlight: rgba(255, 255, 255, 0.17);
  --spatial-text: var(--foreground, #f5f5f5);
  --spatial-muted: rgba(255, 255, 255, 0.62);
  --spatial-accent: var(--accent, #34d399);
  --spatial-shadow:
    0 10px 30px rgba(0, 0, 0, 0.22),
    0 2px 8px rgba(0, 0, 0, 0.16);
  --spatial-shadow-raised:
    0 20px 55px rgba(0, 0, 0, 0.32),
    0 5px 16px rgba(0, 0, 0, 0.18);
  --spatial-radius-sm: 12px;
  --spatial-radius-md: 18px;
  --spatial-radius-lg: 24px;
  --spatial-radius-xl: 30px;
}
```

These are starting values, not mandatory final values. Map the tokens to the project's actual CSS variables after inspecting `globals.css` and existing components. Do not introduce duplicate or conflicting global tokens unnecessarily.

---

## 4. Surface and Glass Material

A spatial surface usually has more than a transparent fill. Build the impression of material from several subtle cues:

- Low-opacity fill.
- Fine, low-contrast border.
- Slightly brighter top or inner edge.
- Background blur **only when it improves separation**.
- Soft shadow below or behind the surface.
- Optional faint radial highlight.
- Rounded corners with a consistent radius system.

Example pattern:

```css
.spatial-surface {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.055),
    0 12px 32px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
}

@supports (backdrop-filter: blur(16px)) {
  .spatial-glass {
    backdrop-filter: blur(16px) saturate(125%);
    -webkit-backdrop-filter: blur(16px) saturate(125%);
  }
}
```

### Material rules

- Keep body text on a sufficiently opaque background.
- Do not apply heavy blur to the whole page.
- Avoid thick white borders, bright neon outlines, and exaggerated glow by default.
- Ensure the surface remains distinguishable when `backdrop-filter` is unavailable.
- Never use transparency as a substitute for sufficient text contrast.
- Avoid placing many blurred layers on top of one another; this can harm performance and legibility.

---

## 5. Cards

Cards are spatial objects: they should feel like contained surfaces that sit slightly above the environment.

### Default card appearance

- Rounded corners, usually in the `18–28px` range depending on size.
- Quiet translucent or solid-dark fill.
- Thin border with a subtle highlight on the upper edge.
- Soft, broad shadow rather than a harsh black outline.
- Clear internal spacing and typography hierarchy.
- Optional small icon, eyebrow label, status badge, image, or metadata row.
- Avoid adding perspective tilt to every card simultaneously.

### Card hierarchy

**Standard card**
- Low elevation.
- Mostly opaque dark surface.
- Subtle border and restrained shadow.
- No motion unless it is interactive.

**Interactive card**
- Pointer cursor only if the whole card is clickable.
- On hover, lift by approximately `2–5px`.
- Border and background become slightly brighter.
- Optional very subtle pointer-follow highlight.
- Transition around `180–280ms`, using a smooth easing curve.
- On press, return slightly toward the base plane.

**Featured card**
- One level more elevated than standard cards.
- May use a quiet radial highlight, larger media, or an accent detail.
- Do not give every card featured treatment.

**Project/media card**
- Keep media clipped to the rounded container.
- Use a clear title, description, and metadata/action area.
- Add a restrained image zoom only if it helps communicate interactivity.
- Make the clickable region and accessible name obvious.

### Avoid

- Huge card tilt that makes content difficult to read.
- Constant floating/bobbing animations on all cards.
- Overly transparent cards on busy imagery.
- Excessive nested borders and shadows.
- Hover-only content that cannot be accessed on touch or keyboard.

---

## 6. Buttons and Icon Buttons

Spatial buttons should feel tactile and physically responsive while remaining instantly recognizable as controls.

### Primary button

- Use the existing brand/accent color.
- High enough contrast for its label.
- Slight highlight or gradient is acceptable if subtle.
- Rounded shape consistent with the product (often `12–16px`, or pill-shaped if that is already the design language).
- Small shadow or highlight to suggest a raised control.
- Optional icon aligned with the label.

### Secondary button

- Muted translucent or solid surface.
- Fine border.
- Clear label contrast.
- Slightly brighter fill on hover.

### Ghost button

- Minimal fill at rest.
- Strong enough hover/pressed surface to reveal the hit area.
- Use for low-priority actions, not for every important action.

### Icon button

- Provide a comfortable hit target; aim for about `44 × 44px` on touch interfaces.
- Center the icon optically.
- Use a tooltip or accessible label when meaning is not obvious.
- Keep icon stroke weights and sizes consistent.
- A small circular or rounded-square surface can suggest a floating control.

### Interaction states

- **Rest:** quiet surface, clear shape.
- **Hover:** slight lift (`translateY(-1px)` to `-2px`) and a modest surface/border change.
- **Pressed:** move toward the base plane (`translateY(0)` or a tiny `scale(0.98)`).
- **Focus-visible:** clear keyboard focus ring; never rely on hover alone.
- **Disabled:** muted appearance plus actual disabled behavior; do not communicate disabled state only with opacity.
- **Loading:** retain button width where possible, show a spinner or progress cue, and prevent duplicate submissions.

Do not make buttons wobble, rotate, or glow intensely. The physical response should be subtle and quick.

---

## 7. Forms and Input Controls

Forms need to prioritize readability and confidence over decorative glass.

### Text inputs, textareas, and select controls

- Use a stable, mostly opaque dark fill.
- Add a thin border and a subtle inner highlight.
- Use comfortable padding and consistent heights.
- Labels should remain visible; do not rely only on placeholder text.
- Placeholder text must be distinguishable from disabled text and entered values.
- On focus, brighten the border and add a restrained ring using the existing accent color.
- Keep focus styles visible for keyboard users.
- Use a clear error message near the relevant field, not only a red border.
- Show helper text and character counts where useful.
- Ensure select menus and date/time controls remain usable across browsers.

### Recommended states

1. Default
2. Hover
3. Focus-visible
4. Filled
5. Invalid/error
6. Disabled
7. Read-only, when relevant
8. Success/validated, when relevant

### Checkboxes, radios, and switches

- Use a clear selected state with the project's accent color.
- Keep the full label clickable.
- Make selected and unselected states easy to distinguish.
- Switches should communicate on/off state without depending on color alone.
- Avoid tiny hit areas.

### Form layout

- Group related fields inside a calm surface when it helps hierarchy.
- Keep labels, fields, helper text, and errors aligned.
- Use clear spacing between field groups.
- Do not put every individual input inside its own floating glass card.
- For long forms, use sections and headings rather than one giant glass panel.
- On mobile, use a single-column layout unless there is a clear reason otherwise.

---

## 8. Navigation, Tabs, and Segmented Controls

Spatial navigation can resemble a small floating dock or a raised capsule, but navigation must remain understandable.

### Navigation bar or dock

- Use one cohesive rounded surface, not separate unrelated floating buttons unless the design calls for it.
- Give the container a subtle border, background, and shadow.
- Use consistent icon sizing and spacing.
- Active items may have a softly illuminated background, accent marker, or raised inset capsule.
- Labels should appear where they improve clarity.
- Do not rely only on color to indicate the current route.
- Keep the navigation in normal document flow or use an intentional sticky/fixed position with enough content clearance.

### Tabs and segmented controls

- Use a shared rounded container.
- The selected tab gets a distinct filled capsule or raised surface.
- Animate the selection indicator smoothly, without delaying interaction.
- Preserve keyboard navigation and correct ARIA roles where appropriate.
- On small screens, allow scrolling or a clear responsive layout rather than compressing labels until they become unreadable.

### Dropdowns and popovers

- Render above surrounding content with appropriate stacking order.
- Use a more opaque surface than a decorative card.
- Add a thin border and deeper shadow.
- Anchor the menu to its trigger and position it to avoid viewport clipping.
- Dismiss on Escape and appropriate outside interactions.
- Manage focus correctly when the pattern requires it.

---

## 9. Modals, Dialogs, and Drawers

Dialogs should feel like focused, elevated surfaces separated from the rest of the interface.

- Dim the background with a restrained backdrop.
- Use a more opaque panel so content remains readable.
- Give the panel a clear heading, optional description, and obvious close control.
- Use a deeper shadow and subtle edge highlight.
- Keep actions grouped consistently, with primary and secondary actions easy to distinguish.
- Avoid excessive blur on the entire page.
- On mobile, consider a full-height or bottom-sheet pattern when it improves usability.
- Support Escape where appropriate, focus management, focus return, and accessible dialog semantics.
- Do not hide important actions off-screen.

A modal should be visually elevated, not visually noisy.

---

## 10. Tooltips, Badges, Alerts, and Toasts

### Tooltips
- Small, high-contrast, mostly opaque floating surfaces.
- Short text only.
- Appear near the target without covering essential content.
- Support keyboard focus as well as pointer hover.
- Do not put essential instructions exclusively in a tooltip.

### Badges and status chips
- Compact pill or rounded capsule.
- Muted fill with a subtle border.
- Use accent color sparingly for active, success, warning, or error states.
- Pair color with a label or icon so status is not conveyed by color alone.

### Alerts
- Use a clear icon, concise title/message, and optional action.
- Use stronger contrast than decorative cards.
- Distinguish info, success, warning, and error with more than hue alone.
- Avoid neon glows as the main status indicator.

### Toasts
- Float above page content with a high enough stacking level.
- Use a readable opaque surface and a soft shadow.
- Keep messages concise.
- Do not make them cover primary navigation or essential mobile controls.
- Respect reduced-motion preferences.

---

## 11. Tables, Lists, and Dense Information

Not every component should become a floating card.

- Use mostly solid surfaces for dense information.
- Keep row separation subtle but visible.
- Highlight selected or hovered rows with a quiet background change.
- Use consistent alignment for numeric values and metadata.
- Keep headers visually distinct.
- On mobile, switch to a deliberate responsive layout, horizontal scrolling, or compact cards as appropriate.
- Avoid blur behind small text and avoid shadows on every table row.

Spatial styling should support information hierarchy, not make data harder to scan.

---

## 12. Backgrounds, Lighting, and Depth Cues

### Background treatment

- Preserve the existing page background and theme.
- If helpful, add a very subtle radial gradient or ambient light behind a featured area.
- Keep decorative gradients low contrast.
- Use texture or particles only when they serve the design and do not reduce readability.
- Avoid constant animated backgrounds unless explicitly requested.

### Lighting

- A faint highlight near the top edge can suggest a light source.
- A soft radial glow can separate a featured object from the background.
- Shadows should be soft and consistent with the same imagined light direction.
- Accent glow is a finishing detail, not a replacement for borders, contrast, or hierarchy.

### Perspective

Use CSS perspective and transforms selectively, for example on a project preview or hero object. Avoid applying `perspective` or `rotateX/rotateY` to long text, forms, navigation labels, or dense content.

If using pointer-follow tilt:
- Keep the angle very small (generally no more than a few degrees).
- Disable or reduce it on touch devices.
- Respect `prefers-reduced-motion`.
- Do not make the card move away from the pointer in a way that makes it hard to click.
- Ensure the effect does not trigger layout shifts.

---

## 13. Motion and Interaction Principles

Motion should explain spatial relationships: opening, closing, selection, elevation, or feedback.

### Good motion
- Surface fades in while moving upward a few pixels.
- Popover scales subtly from its anchor.
- Card lifts a little on hover.
- Selected tab indicator slides to the new position.
- Button compresses slightly on press.
- Dialog fades in with a restrained scale/translate transition.

### Timing guidelines

| Interaction | Approximate duration |
|---|---:|
| Button hover/press | 100–180 ms |
| Card hover | 180–280 ms |
| Tooltip | 120–200 ms |
| Dropdown/popover | 140–220 ms |
| Dialog | 180–280 ms |
| Large page transition | 250–450 ms, only if justified |

Use a consistent easing curve. Prefer smooth ease-out for entering and ease-in for leaving. Avoid long delays before a control responds.

### Accessibility and performance

- Honor `prefers-reduced-motion: reduce`.
- Avoid continuous movement that has no functional purpose.
- Avoid animating expensive properties such as large blur radii on every frame.
- Prefer `transform` and `opacity` for transitions.
- Pause off-screen decorative animations where practical.
- Do not use motion as the only way to reveal important information.

---

## 14. Responsive and Touch Behavior

Spatial UI must still work as a normal website on phones, tablets, laptops, and large displays.

### Desktop
- Use depth and hover effects sparingly.
- Keep panels aligned to a coherent grid.
- Leave enough space between floating surfaces.
- Use pointer-follow effects only for suitable interactive elements.

### Tablet
- Reduce large gaps and excessive floating offsets.
- Avoid overlapping panels that obscure each other.
- Keep touch targets large enough even if a mouse is available.

### Mobile
- Reduce or remove perspective tilt.
- Do not depend on hover to expose controls.
- Use more opaque surfaces where the background is visually busy.
- Reduce shadows and blur if they affect performance.
- Stack cards and form fields vertically.
- Keep dialogs within the viewport and account for the on-screen keyboard.
- Avoid fixed floating controls that cover content or browser safe areas.
- Ensure the navigation remains easy to tap.

Use responsive CSS and the project's existing Tailwind breakpoints rather than hard-coding a desktop-only spatial composition.

---

## 15. Accessibility Requirements

Spatial effects must never reduce accessibility.

- Maintain readable text/background contrast.
- Use semantic HTML elements (`button`, `a`, `label`, `input`, `form`, etc.).
- Use real buttons for actions and links for navigation.
- Provide visible `:focus-visible` styles.
- Give icon-only controls an accessible name.
- Associate form labels and errors with their inputs.
- Use appropriate ARIA only when native HTML is insufficient.
- Support keyboard operation and logical focus order.
- Respect `prefers-reduced-motion`.
- Do not communicate states through color alone.
- Ensure content remains usable when blur, shadows, animations, or transforms are disabled.
- Test zoom and narrow viewport behavior.

---

## 16. Implementation Guidance for This Next.js Project

Before changing code, Claude Code should:

1. Inspect the existing component, `app/globals.css`, layout, Tailwind configuration, and nearby components.
2. Identify the existing color tokens, typography, spacing, radius, animation conventions, and installed libraries.
3. Preserve the existing theme and content unless asked otherwise.
4. Reuse existing UI primitives and dependencies when possible.
5. Implement only the requested component or feature; do not redesign unrelated sections.
6. Use TypeScript types for reusable component props.
7. Keep components composable and avoid creating a giant component with many unrelated variants.
8. Prefer CSS/Tailwind for simple surfaces, borders, shadows, and 2D transforms.
9. Use the project's existing animation library if one is already installed. Do not install a new library just to animate a hover state.
10. Use actual 3D libraries such as Three.js or React Three Fiber only when the task genuinely needs real 3D objects or a 3D scene.
11. Verify mobile behavior, keyboard focus, reduced motion, and build/type errors after implementation.
12. Report which files were changed and any verification performed.

### Suggested reusable primitives

Create these only if the project lacks suitable equivalents and there is a real need:

- `SpatialSurface`: base surface, optional glass treatment, elevation variants.
- `SpatialCard`: standard, interactive, and featured variants.
- `SpatialButton`: primary, secondary, ghost, and icon variants.
- `SpatialInput`: input, textarea, and select styles with validation states.
- `SpatialDock` or `SpatialNav`: cohesive floating navigation group.
- `SpatialPopover`: elevated anchored menu.
- `SpatialDialog`: focused modal surface.
- `SpatialBadge`: compact status capsule.
- `SpatialTooltip`: concise contextual hint.
- `SpatialSwitch` / `SpatialCheckbox`: accessible form controls.

Do not create every primitive pre-emptively. Build reusable components when they will be used in multiple places or simplify a requested feature. Keep the API small and consistent.

### Example component API direction

This is conceptual guidance, not a requirement to create these exact components:

```tsx
<SpatialCard variant="interactive" elevation="raised">
  <h3>Project title</h3>
  <p>Project description</p>
</SpatialCard>

<SpatialButton variant="primary" onClick={handleAction}>
  View project
</SpatialButton>

<SpatialInput
  label="Email address"
  type="email"
  placeholder="you@example.com"
  error={errors.email}
/>
```

Prefer existing project naming conventions if they differ. Avoid duplicating existing `Button`, `Card`, or input components under new names just to attach the word “Spatial”.

---

## 17. Suggested CSS Patterns

Use these as direction, then adapt them to the existing styling system.

### Floating surface

```css
.spatial-panel {
  position: relative;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 12px 32px rgba(0, 0, 0, 0.22);
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.spatial-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.045),
    transparent 42%
  );
}

.spatial-panel--interactive:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.065);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 18px 42px rgba(0, 0, 0, 0.28);
}

@media (prefers-reduced-motion: reduce) {
  .spatial-panel {
    transition: none;
  }

  .spatial-panel--interactive:hover {
    transform: none;
  }
}
```

If the pseudo-element sits over content, ensure it does not intercept pointer events; `pointer-events: none` is intentional. Check stacking contexts and `overflow` when using highlights or media.

### Button interaction

```css
.spatial-button {
  transition:
    transform 140ms ease,
    background-color 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.spatial-button:hover {
  transform: translateY(-1px);
}

.spatial-button:active {
  transform: translateY(0) scale(0.985);
}

.spatial-button:focus-visible {
  outline: 2px solid var(--spatial-accent);
  outline-offset: 3px;
}

.spatial-button:disabled {
  cursor: not-allowed;
  transform: none;
}
```

Do not copy these styles over existing project styles without checking for conflicts. Tailwind utility classes or existing variants may be the better fit.

---

## 18. Quality Checklist

Before calling a spatial UI implementation complete, verify:

### Visual
- [ ] Existing project palette and brand identity are preserved.
- [ ] Depth is created through multiple restrained cues, not blur alone.
- [ ] Surfaces have a clear hierarchy.
- [ ] Borders, radii, shadows, and spacing are consistent.
- [ ] Typography is readable on every surface.
- [ ] The page does not look like every element is floating independently.

### Interaction
- [ ] Hover, pressed, focus, disabled, loading, and error states are handled where applicable.
- [ ] Controls respond quickly and predictably.
- [ ] Hover effects do not block clicking or reading.
- [ ] Menus and dialogs have correct dismissal and focus behavior.

### Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Icon-only controls have accessible names.
- [ ] Form labels and validation messages are associated correctly.
- [ ] Reduced-motion preferences are respected.
- [ ] Color is not the only signal for state.

### Responsive and technical
- [ ] Mobile layouts do not rely on hover or large perspective effects.
- [ ] Content is not clipped by overflow or hidden behind floating controls.
- [ ] Blur and animation remain performant.
- [ ] No unnecessary dependency was added.
- [ ] TypeScript and production build pass, or any pre-existing failure is clearly identified.

---

## 19. Instruction to Claude Code

When a task asks for a **spatial UI component**, use this document as the design contract:

> Build a spatial-inspired component that feels layered, softly elevated, tactile, and premium. Preserve the existing project's color palette, typography, content, and architecture. Use subtle translucent surfaces, fine edge highlights, restrained shadows, deliberate elevation, and short purposeful motion. Keep text and controls highly legible. Make the component responsive, keyboard-accessible, reduced-motion-aware, and usable without hover or backdrop blur. Reuse existing components and dependencies. Do not add gratuitous neon, heavy blur, constant floating animation, or real 3D rendering unless the task explicitly calls for it. Inspect the current implementation before editing and avoid changing unrelated UI.

**Default rule:** spatial styling enhances the existing interface; it must not compromise usability, accessibility, performance, or the project's identity.
