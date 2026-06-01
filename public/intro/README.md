# Foody intro video

Drop the current ad cut here:

- `foody-intro.mp4` — the video (recommended: H.264/AAC, ≤ 12 MB, ≤ 15 s)

The stage is black until the first frame paints, so no poster image is needed.

## Swapping the video every 2–3 months

The intro plays once per browser session, keyed by the **filename**. To force every returning visitor to see the new cut:

1. Rename the file (e.g. `foody-intro-2026-summer.mp4`)
2. Update `VIDEO_SRC` and `POSTER_SRC` at the top of
   [`src/components/IntroVideo.tsx`](../../src/components/IntroVideo.tsx)
3. Deploy

If you keep the filename, returning visitors in the same session won't re-see the new video until they reopen the tab.

## Format tips for Facebook / Instagram ad reuse

- **9:16** vertical works (the player letterboxes on black, looks cinematic)
- **16:9** or **1:1** also fine — `object-fit: contain` handles all
- Keep total length under 15 s; users get impatient
- Encode with audio — the player tries autoplay-with-sound first, falls back to a "Tap for sound" pill if the browser blocks it
