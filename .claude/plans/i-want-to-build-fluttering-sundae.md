# Plan: Convert Footer Email Text to Animated Button

## Context
The user wants to modify the "Email me" text in the footer to be an animated button with specific styling and behavior:
1. Make it a button instead of plain text
2. Style: transparent background, white 2px border
3. Hover effect: scale and shift slightly down with smooth transition
4. Hover end: reverse the animation
5. On click: redirect to send email to their email ID

## Current State
In `components/Footer.tsx`, line 25 currently contains:
```jsx
<p>Email me</p>
```

The footer imports `profile` from "@/lib/content", so `profile.email` is available for the email address.

## Implementation Plan
1. Replace the `<p>Email me</p>` element with a `<button>` element
2. Add appropriate styling classes for:
   - Transparent background
   - White 2px border
   - Proper sizing and padding to match footer aesthetics
3. Add hover animation styles:
   - Scale transform: scale(1.05) 
   - Position transform: translateY(2px) (slight shift down)
   - Smooth transition: all properties 0.2s ease
   - Reverse animation on hover out (handled naturally by CSS transitions)
4. Add onClick handler that triggers mailto: `window.location.href = \`mailto:${profile.email}\``
5. Ensure the button is accessible and follows existing design patterns

## Files to Modify
- `components/Footer.tsx` - Replace the email paragraph with animated button

## Styling Approach
- Use inline styles or CSS classes to achieve the desired effects
- Leverage CSS transforms for scale and translate animations
- Use CSS transition property for smooth animation
- Use existing color variables from kinetic.css if appropriate, or define new ones

## Verification
After implementation:
1. Run `npm run build` to ensure no compilation errors
2. Verify the button appears correctly in the footer
3. Test hover animations (scale and shift down)
4. Verify smooth transition and reverse animation on hover out
5. Test click action opens mail client with correct email address
6. Ensure responsive behavior maintains proper appearance

## Dependencies
- No new dependencies needed
- Uses existing profile import for email address