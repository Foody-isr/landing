# Pink Coffee website release evidence

The reviewed change adds a reusable Pink Coffee template, a campaign layout for the
existing hero section, a campaign card presentation for featured products, and a
larger display heading size. These are presentation settings in the existing
Website V3 draft and publication flow. The template prepares a short home page
and an order page; catalogue data, menu associations, availability, required
choices, checkout policies and payment settings remain separate authorities.

The existing website customization, `website-design` and `website-sections`
procedures are updated in French, Hebrew and English. Their new operations
explicitly require compatible Website and Admin versions. This evidence is not a claim that
the controls are released or available on an installed production version.
Do not publish these guides ahead of the compatible UI.

The public renderer advertises `campaign_hero: 1`, `campaign_products: 1` and
`display_typography: 1`. Roll out and verify Web before Admin exposes the new
configuration. The existing V3 marker and unrelated capabilities remain stable.
The carousel uses bounded slides and durations, manual navigation and a persistent
play/pause control. Editor preview stays static. Reduced motion prevents automatic
progression and video playback until an explicit play action; essential copy and
links remain available. The product grid uses real catalogue entries and the
existing item-selection flow. No production order or payment is needed for
synthetic acceptance.

The owner authorized commits, pushes, PRs into develop, development deployment
and production promotion on 29 October 2026. Runtime source checkpoints are:

- Admin: `b469b9ba27cb8a714c22a5edfa47f9350dd894ea`.
- Web: `4fab33aa2b5695eec2d3fdba941bada48a611f91`.
- API support corpus: `6f71829f5a5eb39c6b1fc07812cd45b64fc7a997`.

The API change is only the byte-identical public corpus export, synchronized
before its source inventory was scanned. Its SHA-256 is
`4397c2e41c2180f545cdc811cdea7a9312b8d84a20c508e2e7f6053b5d64419f`.
Only the nine translations of the three website guides changed; no other article,
endpoint, permission, provider, quota or privacy behavior changed. Exact scoped
reviews cover only unchanged feature claims on the shared source files.

Admin, Web, API and Landing evidence are refreshed. POS and Backoffice service
blocks and source surfaces retain the exact Landing develop baseline
`086993b0cc258deee3ff030688713cdcf36a188a`; those services are not revalidated.
The public corpus revision is
`c4a1fa02f04bc29db914caeaa58335e80b7461dd3ed83b21ffaddcededcdaa02`.

`pink-coffee-pending-release.json` records these frozen checkpoints and uses
`self` for this documentation commit. Each API/Admin/Web consumer must resolve
that to the actual immutable Landing commit SHA in its own contract. Do not
rewrite Landing merely to insert its own SHA; the consumer contracts provide the
final pin evidence. Check the articles and corpus from the pinned Git object,
then run each affected service help contract against that committed snapshot.
Make the Admin checkpoint reachable before Landing CI checks its UI evidence.

Required service validations and PR checks must pass before merge readiness;
the API's independent full Go suite remains a release gate for the embedded
artifact. Verify development and the support/documentation revision, then promote
the exact successful artifacts without rebuilding. A source or documentation
commit alone does not certify deployment or production acceptance. No release
synchronization to main is part of this change.
