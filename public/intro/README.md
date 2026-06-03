# Foody intro video

Drop the current ad cut here:

- `foody-intro.mp4` — the video (recommended: H.264/AAC, ≤ 12 MB, ≤ 15 s)

The stage is black until the first frame paints, so no poster image is needed.

## ⚠️ IMPORTANT — iOS Safari compatibility

The MP4 must satisfy **both** of these or iOS Safari shows a black screen / refuses to play:

1. **Fast-start / web-optimized** — `moov` atom at the start of the file
2. **TV-range yuv420p** — *not* `yuvj420p` / full-range (which is what most editors output from screen recordings)

If you re-export from your editor, check both: "Fast start" AND make sure the color range isn't "Full (PC)".

If unsure, run this safe re-encode after dropping the file in — it forces both:

```bash
ffmpeg -i foody-intro.mp4 \
  -c:v libx264 -profile:v main -level 4.0 \
  -vf "scale=in_range=full:out_range=tv,format=yuv420p" -color_range tv \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  foody-intro-out.mp4 \
  && mv foody-intro-out.mp4 foody-intro.mp4
```

(`brew install ffmpeg` if you don't have it.)

**How to verify** before deploying:

```bash
ffprobe -v error -select_streams v:0 \
  -show_entries stream=pix_fmt,color_range -of default=noprint_wrappers=1 \
  foody-intro.mp4
```

Must output `pix_fmt=yuv420p` and `color_range=tv` (or unspecified). If it says `yuvj420p` or `color_range=pc`, iOS won't play it.

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
