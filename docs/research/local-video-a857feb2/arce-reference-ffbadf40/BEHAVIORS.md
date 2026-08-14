# Behavior specification

## Global navigation

- Header remains visible as a 72–92 px paper-coloured strip above immersive content.
- Desktop shows wordmark, three text links, menu glyph and bag count. Mobile shows wordmark and a 44 px menu target.
- Anchor links use smooth scrolling unless reduced motion is requested.

## Hero

- A restrained, one-screen editorial composition: large neutral hero placeholder, oversized serif marquee, red diamond separators, and small corner metadata.
- The marquee loops continuously and is decorative. It stops moving when `prefers-reduced-motion: reduce` is active.

## Product scroll journey

- Desktop section height: 430 vh; its viewport pins for 100 vh below the fixed header.
- The six product cards form a 200 vw track. Each card is one third of the viewport, showing exactly three cards at once.
- Section progress 0.00–0.63 maps track X from 0 to -100 vw. Vertical wheel or trackpad input therefore produces only horizontal card movement while pinned.
- At 0.59 the portrait-video placeholder starts appearing over the central card. At 0.62 it is approximately 30 vw × 62 vh; by 0.96 it fills 100 vw × 100 vh.
- Rail opacity eases from 1 at 0.68 to 0.18 at 0.88. The portrait label fades before full bleed, so the final state reads as media rather than a card.
- When the sticky section ends, ordinary vertical scrolling resumes into the craft section.
- Product cards support pointer hover but do not make essential information hover-only.

## Mobile and reduced motion

- At 900 px and below, the rail becomes a normal vertical six-card list followed by an 88 vh portrait-video placeholder.
- No custom horizontal gesture is required on touch devices.
- With reduced motion, the pinned journey also becomes a vertical/static reading order and all looping pulses/marquees stop.

## Subscription

- Native required email validation is retained.
- Submission clears the field and reveals an inline confirmation; it does not issue a network request.

