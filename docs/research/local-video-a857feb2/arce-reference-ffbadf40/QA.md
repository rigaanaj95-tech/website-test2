# Reconstruction QA

## Desktop, 1440 × 1000

- Fixed header: `position: fixed`, z-index 30, top 0 throughout the journey.
- Horizontal section: top 1551 px, height 4300 px, viewport 1000 px.
- Start: track X 0, A—01 to A—03 visible, portrait opacity 0.
- Mid: track moves left under native sticky scrolling.
- Rail end: track X -1440 px, A—04 to A—06 visible, portrait reveal begins at card-like proportions.
- End: portrait placeholder bounds 1440 × 1000 at x0/y0; header remains above it.
- Page width equals viewport width; no desktop horizontal overflow.

## Mobile, 390 × 844

- Product track uses block flow and page scroll width equals 390 px.
- Six cards stack vertically; portrait placeholder follows in normal flow.
- Wordmark and 44 px menu control remain fixed in the top bar.

## Reduced motion

- Story height becomes content-driven rather than 430 vh.
- Track display is block with computed transform `none`.
- Portrait placeholder is relative/static content, not an expanding overlay.

## Build

- `npm run build` passes with Vite 7.3.6.
- Reference production imagery/video imported: 0. All media surfaces are colour placeholders.
