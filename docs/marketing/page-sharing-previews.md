# Page-specific sharing previews

Prepared 1 November 2026 against develop
6dda096f44f5a4b79b954ddb9fbf7c5386063bf5.

Each marketing resource, help topic and published help article has its own
1200 × 630 PNG, matching its actual language and subject. The approved home
images remain unchanged. Search titles, descriptions, canonical URLs, language
alternates and public guide contents remain unchanged.

`share-cards.ts` provides editorial image headlines for principal products and
resources, with the actual document title for other content. Hebrew is shaped
with the bundled Heebo font; French and English use Manrope. The Foody symbol,
wordmark, subject illustration and all text stay inside the central square for
compact crops. The illustrations are native vector drawings, without customer
data, invented testimonials, product screenshots or implied video playback.

The page path, locale, visible image copy, subject and style version determine
the file address under `/assets/sharing/`. Text changes generate a new image
address. Increment the style version when changing the renderer, brand assets
or fonts. Hashed assets have immutable cache headers; the original homepage
and historical sharing assets are retained. This does not guarantee the refresh
timing or appearance chosen by a messaging application for an already shared URL.

`social-resources.mjs` derives the resource set from the existing marketing copy,
published help corpus and topic metadata. English fallback articles retain their
English canonical image. Draft and internal documentation are excluded. The local
TypeScript loader is a build/test utility for trusted repository modules and
uses the existing compiler; it does not execute visitor text or run in the browser.

PNG files are derived build output, ignored by Git and included in the deployment
artifact. Both `predev` and `prebuild` generate missing files. `test:social` checks
resource/locale separation, content-address changes, metadata consistency and
complete published help-source coverage. `postbuild` scans the actual prerendered
HTML and fails if an image is missing, has the wrong format/dimensions, differs
between Open Graph and Twitter, or is shared by unrelated canonical resources.
The HTTP smoke checks fetch resource PNGs without JavaScript.

The Open Graph protocol identifies `og:image` as an image representing the page:
https://ogp.me/. Website HTML/image checks establish what Foody serves; a local
preview simulation is not a receipt from WhatsApp. No message to a contact and
no partner outreach is sent for this work. The owner deferred partner requests.

Search/LLM measurement reports remain outside the public repository. Social-image
changes are not represented as proof of improved Google rankings or AI citations.
