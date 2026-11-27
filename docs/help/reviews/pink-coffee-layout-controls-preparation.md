# Pink Coffee layout-controls release evidence

The owner authorized commits, pushes, PRs into develop, development deployment
and production promotion. The root coordinates those stages and requires all
source checkpoints, documentation pins and tests to be ready before opening the
four PRs. The three runtime checkpoints are now frozen and locally validated:

- API: `2992eb6f2dad5e80420212c61ade9e0704115dc2`.
- Admin: `e5bc17932f42d73ec96a313cc4b484e083276ea6`.
- Website: `3695bb4a2dc7c2f23705cdce43f9b23e7836653a`.

This documentation reference is self; consumers resolve it to this commit's
immutable SHA. Source/documentation commits are not evidence of remote checks,
development deployment or production acceptance.

The change keeps the existing home and order pages, restaurant branding and menu
bindings. New presentation controls cover hero panel width/spacing, control
alignment/visibility, header menu-icon style/size/stroke, and per-item product
image backgrounds plus grid width/row spacing. Manual selection can add all
currently filtered products or clear the pending selection before confirmation.
Existing framing, zoom and content-visibility settings remain independently
editable. No item, option, price, availability, payment or checkout rule is changed.

The four existing guides reviewed in French, Hebrew and English are:

- `website-qr/customize-your-site`: compatibility and recovery.
- `website-qr/design-and-branding`: editable Pink Coffee preset behavior.
- `website-qr/sections-and-media`: hero geometry, controls and product grid.
- `website-qr/navigation-and-footer`: menu-icon controls and header cart visibility.

The new `campaign_layout_controls: 1` capability is additive. Older campaign
presentations must remain editable on their compatible renderers. New controls
require the matching Website version, with explicit publication refusal when a
visible draft depends on unsupported settings. The manual preset hides its
counter and playback control. Whenever autoplay is enabled, a pause control must
remain available regardless of the display preference. Reduced-motion and
static editor-preview behavior retain their existing contract.

The API adds optional typed fields and bounded validation in
`internal/restaurants/website_header.go`, with adjacent validation and real
draft/publication tests. Missing fields keep legacy behavior. The renderer's
existing standard stroke is 1.5 px; the staggered preset uses 2.5 px. No migration
or new route is required. Synchronize the byte-identical public support corpus
after its complete code validation and the final guide render; the embedded
artifact must be built and checked against the final corpus.

The official design reference is [the current Crumbl home page](https://crumblcookies.com/).
Public source inspection confirms centered campaign media, grouped right-side
navigation controls, an asymmetric three-line menu icon and individual image
background colors in a wrapping product grid. These are design observations;
the Foody implementation retains its own code, restaurant logos and media. No
Crumbl brand assets or proprietary media are introduced into Foody output.

The native inventory scanner is used with only these three service roots. Its
task-local adapter seeds the exact retained service blocks/surfaces from Landing
`2cd01f46f75b8a4f6d7bac7cddadead728abb23b`; no unrelated checkout is scanned. Each of
584 API, 776 Admin and 348 Website source hashes is verified against the actual
checkpoint Git objects, with zero mismatches. API's scan reports a dirty working
tree only because the exact help-impact review is pending its final metadata
commit; no application source differs from its checkpoint.

The public corpus revision is
`c5ef5fdcb87e46a098fe8bce14fa1f76ed654f76fb80bd7b2ba6e78e3c1593ab`, and its SHA-256 is
`746f038e948a55e8aff871293804ad121a2b155af5f74b3691abfc0f873bc7cb`.
Only the twelve translations of the four listed guides changed. The API embedded
copy is byte-identical. Scoped no-user-impact reviews cover only unchanged feature
classifications on shared files; they do not exempt the new controls. Admin UI
claims are checked against the immutable Admin checkpoint above, including every
new translated control and the input helpers.

Full API format/build/vet/race validation passed after the final corpus copy.
Admin's complete tests/build and browser publication flow passed, as did the
Website's full tests/build and Chromium/WebKit suite. Landing's help checks,
47 tests, lint, TypeScript and production build passed; its local build ID is
`i0FVGTWthkaS_YLKes-dm`. Later inventory/ref metadata does not change the compiled
public articles. All four help contracts must additionally pass against the actual
immutable documentation snapshot before consumer metadata commits are pushed.
The root owns remote CI, development verification and production promotion of
those exact artifacts. No production catalogue, order or payment mutation is part
of this review.
