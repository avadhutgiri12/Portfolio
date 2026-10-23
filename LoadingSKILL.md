# Loading Skill — Coding Agent Instructions

## Role
You are implementing the portfolio's full-screen loader. Treat `LoadingDesign.md` as the visual source of truth and this file as the implementation workflow and quality bar.

## Before changing code
1. Inspect the repository, package scripts, framework, routing, and current page-loading behavior.
2. Identify the real readiness signals available in this project (for example, app initialization, critical fonts, hero assets, or required data).
3. Locate the appropriate app entry point and styling conventions.
4. Briefly state which files you intend to change and why, then implement. Do not replace the app architecture or rewrite unrelated components.

## Required behavior
Implement this state flow:

`loading → readyToEnter → exiting → portfolio`

- **loading:** black background with crimson diagonal fill moving left-to-right and a centered percentage.
- **readyToEnter:** solid crimson background, hollow outlined `ENTER` and thin right arrow; wait for user action.
- **exiting:** on activation, retract the crimson layer right-to-left using the same diagonal angle.
- **portfolio:** reveal the already-ready underlying homepage.

Do not automatically navigate when progress reaches 100%. Do not allow multiple clicks to trigger overlapping exit transitions.

## Progress logic
- Use real observable readiness signals where practical.
- A browser does not expose one universally accurate page-load percentage. Do not claim that the displayed number represents all network activity unless it truly does.
- If real progress is incomplete or unavailable, use a controlled progress model tied to meaningful app readiness milestones. Make progress monotonic and smooth; never go backward.
- It is acceptable to approach 90–99% while waiting for a final critical readiness signal, then complete when ready. Avoid a long artificial stall.
- Add a configurable minimum display time only to prevent flicker. If loading takes longer, keep the UI responsive and progress honest to the chosen model.
- Handle failed assets, timeouts, and rejected initialization tasks so the loader cannot trap the visitor indefinitely.
- Clean up all timers, event listeners, observers, and animation frames on unmount.

## Visual implementation rules
- Follow `LoadingDesign.md` exactly.
- Colors: crimson `#E10600`, black `#000000`, white `#FFFFFF` only where contrast treatment needs it.
- Full-viewport overlay; no separate progress bar, spinner, logo, or extra status decoration in the visible design.
- Solid colors only; no gradients or textures.
- Use a medium diagonal `/` edge that rises from bottom-left to top-right.
- Large centered percentage with responsive sizing.
- Implement text inversion/outline legibility across the moving boundary without noticeable duplicate glyphs or edge artifacts.
- At completion, use hollow outlined geometric `ENTER` lettering with transparent interiors and medium stroke thickness. Do not draw a box around the word.
- Use a thin right-pointing arrow beside ENTER; on hover, move the arrow slightly to the right.
- On activation, retract the red layer from right to left at the same diagonal angle.
- The website should be rendered and ready behind the overlay before the reveal finishes.

## Technical quality
- Use the project's existing stack, dependencies, linting, and naming conventions.
- Prefer performant CSS transforms, clipping, or masks. If using SVG, keep it responsive and accessible.
- Avoid unnecessary dependencies.
- Avoid frequent component re-renders solely to animate every frame when CSS or requestAnimationFrame is more appropriate.
- Use semantic controls, keyboard activation, visible focus, and an accessible status announcement without reading every percentage update aloud.
- Respect `prefers-reduced-motion`.
- Keep overflow hidden while the full-screen overlay is active, then restore scrolling correctly.
- Ensure the loader does not flash over an already-ready page on fast loads.
- Verify mobile layouts, reduced-motion behavior, console output, and the full interaction from 0% through ENTER and exit.
- If the repository has tests, add or update focused tests for state transitions and interaction. Run available lint/build/test commands and report results accurately.

## Definition of done
- The result visually matches the approved reference.
- Progress is smooth, monotonic, and tied to a documented readiness model.
- Completion transitions to ENTER and waits for activation.
- ENTER works with pointer, touch, and keyboard.
- The diagonal exit reveals the homepage without a blank frame.
- No obvious accessibility, responsive, performance, or cleanup regressions.
- Summarize changed files, implementation decisions, and checks run. Mention any limitations honestly.

## Do not
- Do not add a separate progress bar or spinner.
- Do not add decorative copy, branding, or unrelated visual effects.
- Do not use a rectangular outline around ENTER; the letters themselves are hollow.
- Do not auto-dismiss the ENTER screen.
- Do not invent a precise network percentage.
- Do not rewrite unrelated app code.
