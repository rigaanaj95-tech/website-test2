# HorizontalProductJourney component specification

- Props/data: six items with id, name, finish, price and placeholder colour.
- Desktop root: 430 vh; sticky child: 100 vh; track: 200 vw; card: 33.333 vw.
- Initial state displays A—01 through A—03. End state displays A—04 through A—06.
- The journey consumes normal vertical scroll through native sticky positioning; it must not attach a wheel handler or prevent default browser scrolling.
- Progress thresholds and reveal order are defined in `BEHAVIORS.md`.
- The reveal originates from the viewport centre and visually covers the rail. Prefer compositor transforms for the expansion where feasible.
- The header remains above the full-screen placeholder.
- At <=900 px and in reduced-motion mode, render a non-sticky vertical sequence with no inline Motion transform overriding layout.
- Product action links use a 44 px hit target and labelled accessible names.

