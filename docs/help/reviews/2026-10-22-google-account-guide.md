# Google account and API onboarding guide

Reviewed on 2026-10-22. This change adds the preparation guide
`delivery/google-account-and-api-keys` in French, Hebrew and English and links it
from `delivery/maps-and-usage`. It changes documentation only. No restaurant is
connected, no credentials are collected and no Google requests are executed by
this change.

## Product evidence

The primary workspace service checkouts contain unrelated feature work and are
older than the existing help inventory. Review used the inventory's immutable
sources, with the current local `origin/develop` API reference as a cross-check:

- Admin `e1a9fff05573d305ea8356706731aa7523e65aae`,
  `src/app/[restaurantId]/settings/delivery/maps/page.tsx`: provider selection and
  usage tabs exist; no restaurant-owned credential form exists.
- API `855929eeb83bae3187f9f4b48fa51f6b449a92f7`,
  `internal/addresslookup/service.go`: server-side Places API (New) autocomplete
  and selected-address details.
- The same API revision, `internal/delivery/google_provider.go` and
  `internal/delivery/google_tiles.go`: Geocoding, Routes, Map Tiles and Route
  Optimization. Optimization uses a server OAuth identity matching the configured
  project; an API key alone is insufficient.
- API `1f7de8061a51dcf4ee7080e8acdffebd07f59f22`, `config/config.go`,
  `cmd/server/main.go` and `internal/delivery/provider_settings.go`: Google
  credentials and provider instances remain platform configuration. Restaurant
  preferences and counters do not select a separate set of credentials. OCR and
  Google sign-in also use separate platform configuration.

The inventory update extends classifications for this guide while preserving
existing reviewed source hashes and unrelated in-progress procedures. It does
not replace the other services' reviewed snapshots with their older checkouts.

## Public instructions and credential handoff

The guide is available as a preparation procedure, not as an announcement that
individual credential routing has shipped. It explicitly requires Foody to
confirm onboarding before paid activation or creation of a secret file. Each
business owns its project and Google billing; an account per employee or end
customer is unnecessary.

The contact form accepts the initial non-secret request only. No secure upload
screen, fixed egress IPs, support address or guaranteed onboarding capability is
invented. The customer must agree a secure channel and application restrictions
with Foody before sending requested API keys or a conditional service-account
JSON file. Google passwords, recovery codes and OAuth sign-in secrets are never
requested. Browser and server keys are separate. No unredacted screenshots are
needed for the procedure; direct console links and numbered controls are supplied.

Google's official account, project, billing, key restriction, API lifecycle,
service-account and Route Optimization role documentation was reviewed and is
linked beside the corresponding instructions in every translation. Budgets are
described as alerts, not automatic spending caps. No fixed Google price or free
allowance is promised.

## Release coordination

Before offering individual activation, implement and review restaurant-scoped
credential storage and provider selection, its secure operator handoff, any fixed
egress contract, and billing isolation across address lookup, tiles, routes and
optimization. Test that one restaurant cannot use another restaurant's credentials
and that calls use the selected customer's Google project rather than shared
credentials. Creating keys or changing a provider preference is not that test.

The local public corpus and Landing contract include the new translations. Before
publishing, pin the resulting reviewed Landing commit in the affected consumer
contracts, synchronize the API's embedded corpus with this exact public release,
run their contract checks, and coordinate publication. No new immutable Landing
commit or production deployment is created by this documentation-only task.

The Landing contract passes against the current workspace. Comparing it to
`origin/develop` additionally reports an existing review gap for
`src/app/[lang]/privacy/page.tsx` and the three `landing-offers` translations. That
source/guide comparison already existed in the starting contract and is outside
this guide's scope.
