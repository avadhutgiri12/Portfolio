# Loading Design Specification

## Purpose
Implement a full-screen portfolio loading experience based on the approved visual reference: a stark crimson-red/black diagonal split with a large centered percentage.

This document defines the intended visual design and interaction. Follow it closely; do not add unrelated decoration.

## Visual direction
- Minimal, high-contrast, editorial, modern, geometric.
- Full-viewport loader with no separate progress bar, spinner, logo, or extra labels.
- Primary colors:
  - Crimson red: `#E10600`
  - Black: `#000000`
  - White: `#FFFFFF` (used for contrast when needed)
- Keep the background flat and solid. No gradients, textures, shadows, or decorative borders unless needed for text legibility.
- Use a clean geometric sans-serif typeface, preferably one already available in the project. Avoid introducing a large font dependency without need.

## Loading state
1. The loader covers the full viewport.
2. It begins with a black background.
3. A solid crimson-red region advances from left to right.
4. The leading edge is a medium-angle diagonal `/`: the boundary rises from bottom-left toward top-right. Match the visual reference rather than using a vertical wipe.
5. The diagonal split itself communicates progress. Do not add a separate progress track or bar.
6. Display a large `0%`–`100%` percentage centered horizontally and vertically. At roughly 15% of viewport width on a desktop is the intended starting scale; use responsive sizing and sensible bounds on smaller screens.
7. Animate the number smoothly. Avoid jitter, flicker, or sudden jumps where possible.
8. The percentage's foreground treatment must remain readable as the diagonal boundary passes behind it. Invert between black and white as appropriate to the underlying red/black region and use an outline/stroke treatment to preserve contrast. The reference uses contrasting filled and outlined portions across the split; reproduce this effect cleanly without duplicating the text visibly.
9. At 100%, the crimson fill completely covers the viewport.

## Completion / ENTER state
- Replace the percentage with the word `ENTER`.
- Typography is geometric, hollow/outlined lettering: transparent interiors, with a medium-weight visible letter stroke. This must be outlines of the letters themselves, **not** a rectangular outline around the word.
- Use black strokes against the solid crimson background as the default.
- Add a thin right-pointing arrow beside the word. Keep it minimal and aligned to the word's visual center.
- The arrow moves a small distance to the right on hover. Keep the interaction subtle.
- ENTER is the explicit click/tap target. Use a semantic button or accessible link/button pattern, with a visible keyboard-focus state.
- Do not automatically enter the portfolio at 100%; wait for user activation.

## Exit transition
- On ENTER activation, retract the crimson screen from right to left.
- Use the same diagonal angle and direction family as the loading wipe, reversing the reveal so the portfolio beneath becomes visible.
- The underlying homepage should already be ready to reveal. Avoid a blank flash between loader and page.
- Keep the transition smooth and intentional. Prevent repeat activation while the exit transition is running.

## Responsive behavior
- Maintain the diagonal direction and overall composition at all viewport sizes.
- Use responsive typography so the percentage and ENTER do not clip or overflow.
- Preserve a centered focal point. Check narrow mobile widths, short landscape viewports, and high-DPI screens.
- Respect `prefers-reduced-motion`: replace sweeping transitions with a brief, low-motion state change while retaining the same design.

## Accessibility
- Keep text contrast readable across both background regions.
- Ensure ENTER is keyboard operable and has an accessible name.
- Provide a clear focus indicator.
- Do not communicate progress using color alone; the numeric percentage is required.
- Avoid announcing every percentage change to screen readers. Expose a concise loading status and announce completion appropriately.

## Implementation constraints
- Inspect the existing app structure and styling before choosing implementation details.
- Reuse the project's existing framework and conventions; do not introduce a new framework.
- Prefer CSS transforms, clipping, masks, or another performant technique appropriate to the existing stack.
- Avoid layout thrashing and per-frame React/state updates if a CSS animation or requestAnimationFrame approach is more suitable.
- The loader must sit above page content with an appropriate stacking context and cover the viewport without scrollbars.
- Keep the implementation modular and clean up timers, observers, and animation frames.
- Do not fake a precise percentage of all network activity. Track the assets or initialization work the app can actually observe and use a controlled progress model for the rest.
- The loader should appear only when genuinely needed, with a configurable minimum display time to prevent flicker. Do not impose an unnecessarily long delay after content is ready.
- Handle errors and stalled resources gracefully so the user is never trapped on the loader indefinitely.

## Acceptance checklist
- [ ] Full-screen black-to-crimson diagonal wipe; no separate progress bar.
- [ ] Crimson is `#E10600`, black is `#000000`.
- [ ] Diagonal edge angles `/` and travels left to right.
- [ ] Large centered percentage animates smoothly.
- [ ] Percentage remains legible across the diagonal boundary through inversion/outline treatment.
- [ ] At 100%, screen is fully crimson.
- [ ] Percentage changes to hollow outlined `ENTER` plus a thin right arrow.
- [ ] Arrow shifts slightly right on hover.
- [ ] ENTER waits for click/tap/keyboard activation.
- [ ] Click retracts the red layer right-to-left with the same diagonal angle and reveals the ready homepage.
- [ ] Responsive, accessible, reduced-motion-aware, and does not hang indefinitely.
