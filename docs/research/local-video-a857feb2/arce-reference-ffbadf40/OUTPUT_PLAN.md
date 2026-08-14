# ARCE reference reconstruction plan

## Source and boundary

- Reference: `/Users/bytedance/Desktop/录屏2026-08-14 上午10.39.51.mov`
- Target: the existing Vite root route `/` in `arce-eyewear`.
- The reference is a local screen recording, not an inspectable URL. DOM, computed CSS, original fonts and assets are therefore unavailable.
- Phone/editor captions and the word “AFTER” visible around the recorded site are recording overlays and must not be reproduced.
- Per the current product decision, all image and video surfaces remain labelled solid-colour placeholders. Downloaded production assets: 0.

## Build order

1. Preserve the current React/Vite project and route.
2. Reconstruct the reference's editorial hero and persistent minimal navigation.
3. Create one desktop-only pinned scroll journey: vertical wheel/trackpad input moves a six-card horizontal rail.
4. At the rail end, expand the central portrait-video placeholder to a full viewport before normal page scrolling resumes.
5. Keep touch/mobile behavior vertical and non-pinned.
6. Finish with the split craft section, newsletter and footer.
7. Verify the four key desktop scroll states plus tablet/mobile and `prefers-reduced-motion`.

## Evidence set

- 16 local reference frames at 500 ms intervals are stored beside this research package under `docs/design-references/...`.
- Timing from approximate frame extraction is not treated as a precise source timeline. Interaction order follows the visibly stable states plus the user's explicit description.

