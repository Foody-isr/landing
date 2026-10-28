# Help ownership, evidence and releases

The public help center lives on `foody-pos.co.il/{fr,he,en}/help`. Admin provides
contextual access and an assistant drawer. It does not host the public knowledge
base. `docs/help/catalog/features.json` is the authored feature/procedure source;
`npm run render:help` renders its French, Hebrew and English guides to
`src/content/help`. Imported detailed chapters and stable URLs are retained. References to absent historical screenshots are removed; missing local illustration assets fail publication validation.
Internal operator procedures render separately to `docs/help/internal` and never
enter public browsing, search or the AI corpus.

## Explicit stock sources and immediate modal settings (28 October 2026)

Admin source `1163f8399d7e94c2329be004cf5bbc2413446bc3` and API source
`57a8ba3aca65135d63ee96663295c32aed93c6ff` distinguish a manual remaining quantity from
recipe calculation. All product-stock modal settings save through Apply for both
library and series stock; name, price and preparation drafts remain independent.
The shared four-choice modal collapses advanced stock profiles, shows their
resolved behavior, and explains non-tracking profiles without hiding the warning.
The explicit recipe source preserves dormant manual pools and frozen reservations;
manual reactivation keeps ingredient/preparation draws on recipe-era orders.
Migration 279 is additive and defaults existing configurations to old behavior.

The three stock/product/carte guides and internal API contract were reviewed in
French, Hebrew and English, including obsolete historical product-Save instructions.
API corpus must match the public export before the source inventory is regenerated.
Adjacent preparation tests continue to require product Save. Browser checks use
synthetic data and stub every API write/WebSocket; they never mutate live stock.
The complete Go race validation, Admin lint/types/build and relevant browser
regressions certify the code paths; deployed candidates are checked independently.

Retain Web, POS and Backoffice service inventories and surfaces byte-for-byte from
Landing develop `91ec9b2a1d2d60784781c8d90a6cc9ba1c9e8756`: their sources are not
changed or recertified. Exact scoped reviews cover only unrelated feature claims
on shared files, never the changed stock behavior. Pin the final immutable Landing
commit in API/Admin. Deploy and verify API development before Admin, verify the
three-language guides, then promote the exact same artifacts to production.

## Table-status descriptions review (27 October 2026)

Admin source commit `c2ce0d63db2a50252959d642288288fca513a4e9` combines the
current availability editor with seven corrected
visible keys in French, Hebrew and English:
`tableStatusDesc`, `tableStatusInServiceColor`, `tableSettingsColorHint`,
`tableStatusColorIndicatorsDesc`, `tableSettingsFreeHint`,
`tableSettingsOccupiedHint` and `tableSettingsSettleHint`. An occupied table can
be in service before its first order; the optional time indicators do not define
occupancy. The checkout legend no longer suggests that food must be served before
an explicit checkout request can accompany an unpaid order. These 21 text changes
do not change service state, timer origin, palette, thresholds, saving, permissions
or financial behavior. The three previously corrected `tableSettingsClockHint`
values remain byte-identical.

All three published `tables-floors/floor-plans#service-time-and-state` procedures
were reviewed in full. They already describe the table-session clock, seating
without covers, QR scans alone not proving occupancy, and the distinction between
kitchen, payment and checkout-request states. They contain no contrary instruction
about the time toggle or a served-food prerequisite. The copy correction adds no
merchant action or changed procedure, so do not add optional implementation detail
merely to change a guide digest. All article bytes, dates and the public corpus
retain the availability-editor updates already integrated in Landing develop,
without any additional article or corpus change from this copy correction. That
upstream corpus revision is
`5778368187c5b3397c8b8b5e3ddb06e7827957350ac05cfe165081f58d61fb5b`.

The new UI-evidence entry asserts the exact 21 source values and rejects the old
values at their keys. It is source concordance, not authenticated browser acceptance
of every locale. The scoped Admin review covers only the eight other public
features classified on the shared translation file; it explicitly acknowledges
the visible table-status corrections rather than exempting the whole file.
Refresh only the Admin translation hash, source snapshot and immutable source
reference. Preserve all non-Admin inventory blocks and all source surfaces exactly
from Landing develop `cc8ab2fb69924d4914edf18797166fac696fcfa9`.

Pin the reviewed metadata-only Landing commit in Admin before remote CI. This
text-only follow-up adds no API or POS change, support-corpus change or native POS
build. The separate availability-editor release still requires its API corpus to
match the retained upstream revision before coordinated promotion.
Validate the Admin develop artifact before promoting that same artifact. Keep the
previous three-hint release proofs intact; they do not certify every description
on the table-status page.

## Table-session clock hint review (27 October 2026)

Admin source commit `9a62da59c1877cf083d763142bb1ac12430ccc87` corrects only
the French, Hebrew and English `tableSettingsClockHint` values. The visible hint
now describes time measured from the start of the table session. No timer,
threshold, save, permission, table state or recovery logic changes. The existing
`tables-floors/floor-plans#service-time-and-state` procedure already states this
rule in all three languages; its content and article dates remain unchanged.
The public corpus stays byte-identical at revision
`1d59a10a6f3e4ccbf456d993fc6e8300e41b223f469a759a97ff02e0144a4b62`.

The new `table-session-clock-hint-source-contract` UI-evidence entry is a
declarative source assertion, not a live browser observation of the corrected
copy. It checks the three values and their agreement with the existing guide.
The Admin source validation does not by itself prove deployed browser acceptance.
The scoped Admin review exempts only the eight other public features classified
on the shared translation file, whose strings and procedures are unchanged; it
does not claim that the visible hint was unchanged.

Refresh only the Admin translation hash, its source snapshot and immutable source
commit in the inventory. All non-Admin service blocks and all source surfaces
retain their exact evidence from Landing develop
`7cca8a9cf959c29210ad621f1a373bafd9b0f64a`; they are not revalidated here.
Pin the reviewed metadata-only Landing commit in Admin before remote CI. No API
or POS contract, support-corpus update, rebuild or redeployment is needed for this
copy correction. Verify the Admin develop artifact before promoting that same
artifact; confirm the corrected text in the authenticated browser separately.

## Required change workflow

1. Read the closest service instructions and locate the feature and source evidence
   in `docs/help/inventory.json`. Inspect actual controls, permissions, capabilities,
   activation, errors and recovery. Source presence does not prove installed release
   availability or physical hardware acceptance.
2. Update affected operations in all three languages. Include prerequisites, steps,
   result and recovery. Add a stable operation ID for a new sub-feature. Never merely
   refresh a date or copy a disabled integration into an available-feature guide.
3. Update/remove stale screenshots, using synthetic data. Never include credentials,
   customer records, payment details or private tracking/receipt links.
4. Render and validate the guides, export the release, then regenerate the inventory
   using the explicit service-root map. Review source surfaces including page/API
   routes, Flutter destinations, translated control keys and named actions.
   Synchronize the exported public corpus into the API before scanning its source
   inventory: `internal/support/corpus.json` is itself a reviewed source file.
   Pinning documentation before this copy leaves the API contract's corpus hash
   stale even when the public release revision already matches.
5. Pin the reviewed Landing commit in each affected service contract. Keep one PR
   into develop per repository. An initial `WORKSPACE` reference supports local
   preparation only; remote CI rejects it. Never replace it with a moving branch.
6. Run the service help contract and complete service validations. Deploy the API
   before the matching clients; verify development, then promote the exact artifact
   under the workspace production rules. Do not publish guides ahead of their UI.

```sh
npm run render:help
npm run check:help
npm run test:help
node scripts/build-help-inventory.mjs --workspace /absolute/path/service-roots.json
node scripts/build-help-contracts.mjs --workspace /absolute/path/service-roots.json --documentation-ref <landing-commit-sha>
# From an affected service, for local preparation:
node scripts/check-help-contract.mjs --documentation-root ../foodylanding --base origin/develop
```

The scanner explicitly records shared runtime files instead of inventing customer
features for framework code. Router-group-relative Go fragments and relative
Flutter child paths retain their resolution status; do not present them as resolved
standalone URLs. The inventory is evidence for review, not proof that every runtime
state, permission or physical device was exercised.

## CI enforcement in every versioned service

### Cross-session release review (25 October 2026)

The coordinated release scans the current integration candidates of all six
versioned services: API, Admin, guest Web, POS, Backoffice and Landing. Their
source inventories and contracts are regenerated together from the explicit
release-root map; the four-service-only local review below is historical and is
not used as an exemption for this publication. Guest Web's current develop
implementation is retained where older local receipt and menu edits duplicate
features that were already integrated. Private POS guest context is reviewed
against the API capability, check snapshots and public-response redaction tests.
Native hardware behavior still requires the documented physical acceptance;
mocked/browser checks do not certify a real payment, printer or terminal.

The approved guest Web Zod 4.6.7 security upgrade has an exact-byte impact
review in Web's `docs/help/reviews/zod-4-security.json`. Its explicit string-key
records preserve valid V3 page content, settings, translations and appearance
tokens; regression tests also cover strict page variants and invalid envelopes.
There is no new merchant/guest procedure or translation change for this upgrade.

### Local fulfillment review scope (22 October 2026)

This review refreshes source evidence for foodyserver, foodyadmin, foodypos and
foodylanding only. The foodyweb and foodybackoffice inventory service entries,
their surfaces and feature evidence are retained from Landing commit
`f45ce240438e08be227cd7406c6bdb0525db3018` (the comparison develop baseline).
They are previously recorded evidence, **not revalidated by this change**. The
older primary guest-web checkout must not replace that released evidence or
silently remove its checkout, account and conditional-choice surfaces.

After a full local scan for the four-service review, retain those two baseline
service blocks and surfaces, rebuild every feature's evidence from the combined
source files and recalculate coverage counts. Regenerate the index and only the
four affected service contracts. A later Web/Backoffice change requires its own
current-source review and validation; do not reuse this scope as an exemption.
The local WORKSPACE documentation pins still require an immutable matching
Landing commit before remote CI or publication.

### Local order-flow audit (26 October 2026)

This local preparation refreshes API, Admin, POS and Landing source evidence for
the shared-mode synchronization and order-entry corrections. The Web and
Backoffice service blocks and surfaces are retained exactly from the inventory
present before this scan; they are historical recorded evidence, not a fresh
validation of those services. Feature evidence is rebuilt from that combined
inventory. The public FR/HE/EN guides and API support corpus share one revision.

Contracts use `WORKSPACE` for local validation only, and Landing uses `self`.
An immutable reviewed Landing commit remains required before remote CI or a
release. Roll out the API merge capability before Admin and then the updated POS
clients. An old client without the merge base retains the legacy replacement
write path and does not gain conflict-safe merging merely by updating the API.
Do not use it to edit shared settings during this rollout. No new migration is
needed for these settings corrections; other independently prepared features
retain their own migration and capability prerequisites. Automated evidence does
not certify a physical iPad, Victa, printer, cash movement or payment operation.

`Help coverage and translations` runs on PRs into develop and manual dispatch.
It checks the exact source footprint (including newly added/deleted source), feature
classification, immutable documentation revision, all FR/HE/EN file digests and the
API's embedded public corpus. The first installation establishes a baseline.
Subsequent source changes require corresponding three-language guide changes or
an explicit exact-byte `no-user-impact` review. Matching a folder does not validate
prose. Reviewers must verify the impact classification and procedures.

A behavior-neutral exception lives in that service's `docs/help/reviews/*.json`:

```json
{
  "files": [{
    "path": "src/example.ts",
    "sha256": "<reviewed-file-sha256-or-deleted>",
    "disposition": "no-user-impact",
    "reason": "Concrete reviewed explanation of why the rendered behavior, permissions and recovery are unchanged."
  }]
}
```

The reason must have at least 50 characters; later source edits invalidate it.
Do not use this exception for a behavior change. Contract regression tests verify
missing translations, new/deleted source, stale hashes, missing guide updates,
invalid references and exact exceptions. Branch protection should require this
job alongside the existing service CI; a workflow alone cannot set GitHub policy.

When a shared file changes one feature but leaves other classified features
unchanged, use a **scoped** review instead of exempting the entire file:

```json
{
  "files": [{
    "path": "src/lib/i18n.tsx",
    "sha256": "<current-reviewed-file-sha256>",
    "baseSha256": "<file-sha256-in-the-comparison-base-contract>",
    "features": ["google-account-setup", "delivery-dispatch"],
    "disposition": "no-user-impact",
    "reason": "The diff adds only POS fulfillment translations; the reviewed Google and delivery controls and their behavior are unchanged."
  }]
}
```

The nonempty, duplicate-free `features` list must contain only feature IDs
classified on this file and present in the release. Both file digests must match
the exact current and comparison-base contracts. A stale/missing base digest, an
unknown feature or an invalid scope provides no exemption. Every other affected
feature still requires all three guide updates. Omitting `features` retains the
legacy whole-file review format and is appropriate only when the entire diff has
no user impact. Do not omit the scope to bypass a rejected scoped review, and do
not use a scoped review for a newly introduced file without a reviewed base.


## Documentation assistant

`GET /api/v1/public/support/status` reports configuration and documentation revision.
`POST /api/v1/public/support/chat` is an explicitly platform-global API endpoint.
It accepts only locale, public topic, question and at most four completed exchanges.
Unknown fields, tenant context, injected roles and excessive requests are rejected.
It has no database handle, restaurant tools, customer access or staff authorization.

The API embeds `catalog/public-corpus.json`, using the same public guides and
multilingual lexical aliases as search. It selects up to five complete sources (24,000 Unicode characters maximum per guide; larger guides must be split before release), calls the
configured Anthropic Messages model and accepts only citation IDs from those
sources. Unsupported answers are explicit; provider/limiter failures are unavailable
states. Response text is rendered as text, not executable HTML/Markdown.

The existing API `ANTHROPIC_API_KEY`, private `REDIS_URL` and JWT secret supply
provider configuration, atomic quota storage and domain-separated HMAC identities.
`HELP_AI_MODEL` defaults to `claude-sonnet-4-6`. No second AI key or Redis REST
service is required on Vercel. Redis enforces 20 requests per connection origin/hour
and 500 globally/day, with expiring hashed identifiers. Quota failure blocks calls.
Gin's existing trusted-proxy policy determines the observed origin; configure that
policy for the hosting edge. The global limit also bounds aggregate usage.

Canonical public browsers and Admin call the API directly without credentials,
cookies or referrers. Public preview hosts use a same-origin, credential-free proxy
to development and intentionally share that proxy's egress quota. Production host
selection is performed at runtime so promotion does not rebuild the artifact.
Existing API CORS remains unchanged. Arbitrary Admin preview domains are not added
to its allowlist.

Questions and provider responses are not logged or persisted by this feature.
Conversation lives in tab memory. Questions, recent turns and selected public text
are processed by the AI provider under its agreement; the privacy page discloses
this. Do not use real customer/payment data for verification. Mock paid calls in
regression tests; verify configuration and revision without consuming quota.

Model contract references: [Messages API](https://platform.claude.com/docs/en/api/messages/create)
and [model lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations).
Validate a compatible model and its response contract before changing it.

## Current UI evidence

The initial source-hash baseline and successful page responses did not prove
that imported procedures matched the rendered interface. Inspect the route and
its imported editor components, not merely a legacy component that remains on
disk. In particular, unused ArticlesKpiRow/StockKpiRow files do not prove that the
Articles or Stock page renders KPI cards.

`docs/help/ui-evidence.json` records focused current-screen claims and an immutable
Admin commit. Landing CI checks those sources at that commit. Admin CI checks the
same claims against the current PR sources. The checks also reject reviewed old
instructions and require current wording in all three languages. Run
`node scripts/check-help-ui.mjs --admin-root /absolute/path/to/foodyadmin`.
These focused checks supplement manual UI/procedure review; they do not certify
every screen or every runtime state. Update the evidence and all affected guides
when a reviewed control changes. Keep legacy guide anchors when restructuring.

Live AI verification requires explicit user authorization for paid calls and uses
only synthetic product questions. Check answer language, procedure correctness
against the rendered source, citation relevance, citation locale, public URL and
corpus revision. An HTTP 200 or an existing citation alone is not a semantic pass.


## Superadmin courier-selection release scope (25 October 2026)

This release refreshes API, Admin and Landing evidence from isolated develop-based
courier-selection branches. It includes only the courier selector, scoped courier
operations, their FR/HE/EN procedures and the synchronized public support corpus.
Uncommitted carte-picker and POS presentation changes in the shared workspace are
excluded. Web, POS and Backoffice service blocks and source surfaces are retained
from Landing commit `51508f43b99659d0b71e26a5c627a275b98e3bf6`; they are unchanged
baseline evidence, not a new validation of those services. Pin this documentation
commit in API and Admin before opening their PRs. Deploy API before Admin, and
publish the corresponding guides with the feature release.


## Weekly-series rollover release (25 October 2026)

This release reviews API, Admin and Landing only. Web, POS and Backoffice
source inventories and surfaces retain their exact evidence from Landing commit
`e34d1464f8092f3caf76d77ef6ee2b9a96e87c8c`; they are not revalidated by this change.
Operational batch dates are read-only calendar calculations, independent of menu
publication and guest ordering windows. Publish the FR/HE/EN procedures with the
API/Admin behavior. Pin this reviewed Landing commit in the API/Admin contracts
before remote CI. Deploy API before Admin and promote their validated develop
artifacts without rebuilding.


## Manual weekly order opening release (25 October 2026)

This release reviews API, Admin, Web, POS and Landing from isolated branches based
on their current develop histories. Backoffice source inventory and surfaces are
retained from Landing develop commit `530f19e2f3f82c47e62ea6e5bc050aff99eb9ad3` and are not revalidated here.
The inventory records each reviewed integration base and the exact feature source
hashes separately. Calendar intake remains the default. Manual batch intake keeps
service days, stock and existing commitments while using explicit pause/reopen
controls. Deploy API migration 277 before the matching clients. Publish the three
language guides with the product rollout. Service contracts must pin this reviewed
Landing commit before PR publication; production uses verified develop artifacts.

## Mobile menu layout release (26 October 2026)

This release reviews guest Web, Admin, Landing and the synchronized API help
corpus from isolated develop-based branches. The category style applies to
groups on desktop and mobile; carte tabs stay separate and underlined. Long
group headings wrap without enlarging the document. FR/HE/EN instructions cover
the shared setting and selected-category colors. POS and Backoffice service
blocks and source surfaces retain their exact evidence from Landing commit
`39ed85b66bd66adcbf340885d1dd251a08beefd9`; they are not revalidated by this change. The API change synchronizes
only the published support corpus. Publish the prepared guides with the matching
UI, after development verification, and promote the same immutable artifacts.

## Mode-editor deletion recovery (26 October 2026)

This follow-up reviews Admin, Landing and the API's synchronized public support
corpus. It documents the explicit pending-deletion state, complete draft undo and
return to the list only after a confirmed save. The working production profile
and restaurant defaults are never used as disposable test data. The Web, POS and
Backoffice service inventories and source surfaces retain their exact evidence
from Landing develop commit `705fcec6f5e0af4a6409dcf700befe8736f469b4` and are not
revalidated by this follow-up. Pin the new reviewed Landing commit in Admin and
API before publication. Publish these FR/HE/EN procedures with the matching Admin
UI, after development verification, without rebuilding the promoted artifacts.

The final source review also exercises a deliberately delayed list navigation
after successful deletion. The editor retains its mode name and a locked loading
state until navigation finishes, rather than briefly rendering a missing mode.
This only completes the documented confirmed-save handoff; the deletion, undo,
permissions and error-recovery procedure above is unchanged. Refresh the exact
Admin source evidence and immutable service pins without changing article dates
or inventing a new merchant operation.

## Startup integrity and production recovery (26 October 2026)

This release reviews API startup integrity and its FR/HE/EN recovery guidance.
The real PostgreSQL regression proves that the former startup normalization
resized authored v2 tables and changed rotations. The corrected helper normalizes
only legacy 0/1 rows; it preserves authored and unknown future versions exactly.
It does not reconstruct previously overwritten geometry or rearrange active
production tables. The entrypoint change only delegates that reviewed operation
to the separately classified helper; other startup behavior is unchanged.

Device-inventory regressions exercise an active, already terminal-capable Victa
reported by a legacy generic Android print agent. Backfill must preserve its
durable terminal capability and integrated-printer identity without relaxing
tenant, missing-device or forgotten-device checks. No manual production database
repair, payment, deposit, device reactivation or print replay is part of release
verification. Physical printing and payments remain unverified by these tests.

Admin, Web, POS and Backoffice inventories and surfaces retain their exact
evidence from Landing develop `0ccd3b7f2b0a3845e46087ff1a528d0671d0f8cb`;
their application sources do not change in this recovery. Copy the newly exported
support corpus into API before scanning, pin this reviewed Landing commit, run
the API validation and verify development before promoting its exact artifact.
Keep the pending Admin and public-documentation promotions coordinated with the
restored API; never publish a planned recovery as an installed capability.

## Previous-service orders and unconfirmed cash reads (26 October 2026)

This follow-up reviews POS session isolation, cash-read confirmation and their
FR/HE/EN procedures, plus the synchronized API support corpus. Previous or unknown
table sessions retain separate saved order IDs; the current service alone may
aggregate manual kitchen sends. Physical iPad observations verified navigation,
covers, timers and visible course controls, not a payment or kitchen dispatch.
Regression tests additionally cover canonical-session changes during asynchronous
loads and legitimate new-service responses arriving after their matching event.

Cash verification must fail closed without disabling recovery of an existing
journaled operation. A historical replay result is not a fresh current-drawer
read; older in-flight reads cannot reconfirm it. The API business 404 alone proves
an absent drawer. Provider, settlement and financial routes are unchanged, and no
real cash operation or Verifone deposit is part of acceptance.

Refresh POS, API and Landing evidence from their reviewed source commits. Admin,
Web and Backoffice inventory blocks and surfaces retain their exact baseline
evidence from Landing develop `54cd8aa5a57b56b22f645a04ff17d6230fb1a574` and are
not revalidated by this follow-up. Export the public corpus before scanning the
API, pin an immutable reviewed Landing commit in API and POS, and validate each
service before its PR is ready. Verify the compatible POS build before publishing
these guides; API publication alone does not update an installed app.

## Local shift-access integrity preparation (26 October 2026)

This preparation reviews API shift access validation and its FR/HE/EN guidance,
not a production data repair. A saved interval retains its original authorization
reference, start time, and cash attribution. An unresolved historical reference
must not silently become another credential or a replacement work interval.
Personal status reads remain separate from POS sales sign-in. Cash guards,
provider operations, and existing financial journals are unchanged.

Only API and Landing source evidence is refreshed. Admin, Web, POS, and
Backoffice service blocks and surfaces retain their exact baseline evidence from
Landing develop `c6f2cedc78b1fbefe568dff48f8b749912df0490`; they are not revalidated
by this preparation. The API support corpus is copied before source scanning.
Contracts use `WORKSPACE` for local checks only. A reviewed immutable Landing
commit and coordinated API/documentation publication remain required before
remote CI or release. No installed POS binary or physical financial operation is
certified by these source and synthetic tests.

The internal API recovery runbook requires proof of physical identity and cash
journal continuity, then explicit approval of an exact production repair. Do not
publish historical recovery as an available automatic action, apply a constraint
to inconsistent history, or infer the origin of an inconsistency from a missing
foreign key. Preparation and approval of preventive code do not authorize a
production mutation.

## Local cash-access diagnostic preparation (27 October 2026)

This continuation refreshes API, POS and Landing evidence only. Admin, guest Web
and Backoffice service blocks and surfaces retain their exact baseline from
Landing commit `c6f2cedc78b1fbefe568dff48f8b749912df0490`; they are not revalidated
by this preparation. The previous local shift-access protection remains included.
Refresh the API's embedded corpus before the source scan and final validation.
Contracts remain local `WORKSPACE`/`self` until an immutable reviewed documentation
commit and the coordinated product release are explicitly authorized.

The candidate classifies existing cash-access refusals without changing the
original staff interval, credential binding, cash journal or terminal settlement.
Missing identity and installation mismatches remain conflicts; storage failures
remain unavailable states, never confirmed absence. Only the existing business
404 confirms that no current drawer is open. POS maps a closed set of codes and
statuses to localized messages, preserves its generic fallback and pending
operation recovery, and keeps new financial actions disabled while unconfirmed.
No client-provided installation identifier becomes a credential or a selector
for another drawer. No new route, JWT claim, pairing or automatic repair is added.

Keep the cash-access recovery procedure separate from the large checkout guide
so that complete articles fit the unchanged AI grounding limit. All three
translations qualify compatible API and POS versions rather than claiming the
candidate is installed. Reading the physical cash report needs the Foody API,
not a connected Victa Mini; operations sent to a card terminal remain separate.
Source and synthetic tests do not certify a physical installation match, a
financial operation or recovery of historical production data.

## Local POS flow follow-up (27 October 2026)

This preparation reviews API, POS and Landing only. Preserve Admin, guest Web
and Backoffice service blocks and source surfaces exactly from Landing develop
`e64f385a51bb0adf87e62fbdcc0cbb485e4d6a91`, including the product-gallery and
stock-unit evidence integrated after the previous release. Those services are
not revalidated here.

The procedures cover restaurant-scoped screen selection, saved-item places under
the assigned POS mode, terminal-report confirmations bound to their original
context, and explicit verification after an uncertain staff clock-out response.
Clearing a screen selection does not delete or move persisted checks. A context
change does not cancel an already transmitted terminal command. Personal shift
verification changes no cash journal and never treats an unavailable response as
proof of absence. Keep all FR/HE/EN instructions qualified by compatible versions.

From Save check, New check followed by Custom check opens the name form directly;
the separate Open tickets flow retains its predefined groups. Back preserves the
source basket. Staff POS customer details remain optional; guest delivery has its
own validation contract. These changes add no financial operation or address rule.

Release the effective saved-seat policy in the API before the POS that supplies
its installation context. Refresh source evidence, export the public corpus and
copy it into API only after the product sources are frozen. Immutable service
pins, complete validation and coordinated publication remain required. Synthetic
regressions do not certify physical iPad, mobile terminal, payment or deposit flows.
## Product photo gallery preparation (27 October 2026)

This isolated preparation reviews API, Admin, Web and Landing from develop.
Migration 278 adds only ordered extra product photos; the legacy cover remains
compatible with POS. Public FR/HE/EN procedures describe save/cancel, upload
recovery, cover selection and the customer gallery. Publish them with the matching
product rollout after development verification, with API deployed first.
POS and Backoffice source evidence retains the exact Landing develop baseline
from Landing develop 6fda2691c93f8d1ec19dbbd6f06c12013d91b7f2; these clients are not revalidated.
API, Admin and Web contracts pin the immutable reviewed Landing commit before
remote CI. Verify the coordinated development deployments before promoting the
same artifacts to production. Verification uses synthetic data and read-only
public checks; it does not run a real order, payment or cash operation.


### Local stock-unit restoration (27 October 2026)

This preparation restores the series product's stock editor and measured entry
for shared or per-size allowances. API mode changes atomically rebase existing held and released reservations using
the ordered size snapshots, reconcile old commitments, and journal the conversion.
A stale revision, concurrent writer or unverifiable historical allocation aborts
the entire change. No schema migration is required; deploy the API before Admin. Publish the FR/HE/EN guides with the matching Admin
release; the public search export and API embedded support corpus must match.
Only Admin, the API and Landing sources are refreshed in this review.
Other service inventory entries retain the previous Landing evidence and are not
revalidated. API and Admin contracts pin the immutable documentation commit for
remote CI. Deploy and verify the API before Admin in development, then promote
the same verified artifacts to production. Publish the reviewed guides with this
rollout; release synchronization to main only records the promoted history.

## Stock editor viewport correction (27 October 2026)

This review changes only the Admin availability presentation: a centered,
viewport-bounded dialog replaces the small anchored panel. Its content scrolls
independently of the persistent heading and Apply/Cancel actions; per-size fields
use two columns where space permits. Stock conversion, reservations, permissions
and write timing retain their existing contracts. FR/HE/EN procedures describe
the new layout. Publish them with the compatible Admin after development checks.

Only Admin, API support-corpus and Landing evidence is refreshed. Web, POS and
Backoffice inventory blocks and surfaces retain their exact Landing develop
baseline from `37bba41c177ac677f79b6e175a520b655c45e5be` and are not revalidated here. The API change synchronizes
the documentation corpus only; no stock endpoint, schema or data is changed.
Pin the immutable documentation commit, validate each affected service and
promote the verified development artifacts under the shared release rules.

## Product stock-history shortcut cleanup (27 October 2026)

The product stock card retains its item-scoped Stock history dialog and removes
the Full stock history shortcut to the separate journal page. The retained dialog
passes the product ID on initial reads, movement filtering and pagination, across
all series. Availability-rule assignment, stock quantities and reservations are
unchanged. The general journal remains available through its existing navigation.

Review the two public procedures and internal routing description in FR/HE/EN.
Refresh Admin, API support-corpus and Landing evidence only. Preserve the Web,
POS and Backoffice blocks and surfaces exactly from Landing develop
`702e2124378e46a2f0e50b6d4f037c020cfcc7c9`. Those services are not revalidated.
Keep the exported corpus identical in the API, pin the immutable documentation
commit and publish with the compatible Admin after development verification.

## Product rule selection inside stock dialog (27 October 2026)

The saved product's rule selector moves into its stock dialog and is labelled
Availability rule in French, Hebrew and English. Apply stages a product rule
draft and product Save persists it through the existing item update route. It
remains a restaurant-owned product assignment across all series, with unchanged
category/default inheritance and manual availability precedence. A rule-only
confirmation sends no stock adjustment, including for exhausted or inactive
products. Existing stock edits still use their immediate routes; failed stock
requests retain the rule locally and do not stage it on the product.

Only API corpus, Admin and Landing source evidence is refreshed. Preserve Web,
POS and Backoffice inventory blocks and surfaces exactly from Landing develop
`7126e2b570c52134e9eeaf9402f4a809fb4675b4`. These services are not revalidated.
The shared translation review excludes unrelated features; the item-panel review
excludes unchanged creation, recipe/ingredient and variant workflows. Their
stock-related help links still point to the updated primary procedures.

Freeze and reference the reviewed Admin source, export and copy the matching
public corpus, then regenerate exact source inventory and service contracts. Pin
the immutable documentation commit before remote CI. Publish with the matching
Admin after development verification and promote the same artifacts, API first.
No schema, API payload, reservation, stock calculation or rule precedence changes
are introduced. Synthetic browser checks do not mutate production stock.


## Immediate product-rule confirmation (28 October 2026)

Apply now persists the product availability rule directly instead of staging it
for product Save. Existing availability/restock routes accept an optional scoped
availability_rule_id; zero restores inheritance. A rule-only write updates only
the assignment under the item/order lock. Mixed stock and rule edits commit in one
transaction; failed writes keep the modal draft. A confirmed save followed by a
failed refresh offers a read-only retry, never a replay of the stock adjustment.
Unrelated product drafts, stock reservations, rule precedence and product-wide
scope stay unchanged. The legacy non-series stock dialog saves its rule immediately
while retaining product Save for its other stock/preparation settings.

Refresh API, Admin and Landing source evidence only. Retain the exact Web, POS
and Backoffice inventory blocks and surfaces from Landing develop
`9d4679231a5745f23f52d781700b43b07d10f770`; they do not send the new optional field
and are not revalidated. The existing MenuEdit-protected routes remain in place;
no migration or environment change is needed. Publish the FR/HE/EN procedures and
matching embedded support corpus with the compatible UI. Pin immutable Admin and
Landing source references before remote CI. Validate and deploy API before Admin,
then promote the exact verified development artifacts under the authorized release
workflow. Synthetic regressions never mutate real restaurant stock or orders.
