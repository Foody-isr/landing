# Help ownership, evidence and releases

The public help center lives on `foody-pos.co.il/{fr,he,en}/help`. Admin provides
contextual access and an assistant drawer. It does not host the public knowledge
base. `docs/help/catalog/features.json` is the authored feature/procedure source;
`npm run render:help` renders its French, Hebrew and English guides to
`src/content/help`. Imported detailed chapters and stable URLs are retained. References to absent historical screenshots are removed; missing local illustration assets fail publication validation.
Internal operator procedures render separately to `docs/help/internal` and never
enter public browsing, search or the AI corpus.

## Internal order finalization (29 October 2026)

New order now finalizes inside the ticket after Continue. Explicit payment intents
replace the ambiguous default-paid switch. Received cash/external card requires a
fresh acknowledgement of the displayed amount; pay later stays unpaid. Sumit links
allow optional contact details and recipient delivery calculation; hosted card entry
opens after creation and trusts only existing API settlement. Provider capabilities,
tenant permissions, production gates and the guest storefront theme/cart are retained.
Back preserves customer/date, not stale discounts or delivery quotes. Ten-second Undo
restores a line with its draft-price warning and checkout block. Compact item tiles,
collapsed secondary controls, a fixed action footer and the existing navigation
collapse are covered by synthetic desktop/mobile, RTL and dark-theme browser checks.
No real payment, production order or customer message is used for UI acceptance.

Review and publish the managing-orders, order-details and internal-sumit-checkout
procedures in French, Hebrew and English together with Admin. API changes only its
embedded public corpus; no payment endpoint, schema or payment lifecycle changes.
The shared native radio styling now leaves an unselected group visibly empty; this
corrects presentation without changing checked values, keyboard use or form payloads.
Scoped source reviews cover only unchanged feature classifications on shared files,
not the changed order workflow documented in those three guides. Refresh Admin/API
source evidence and retain all other service inventories/surfaces exactly from Landing
develop `34d74115133fcb7c29eb1af68685d25178bffa0b`. Pin an immutable Landing commit in
both affected services. Verify development, then promote those exact artifacts.

## Restaurant PIN scope and provisional fulfillment (28 October 2026)

The personal code is unique among configured accounts within one restaurant;
the same complete code may be configured in another restaurant. PIN sign-in and
personal time tracking require exactly one configured matching code, then check
the account's current access. A collision remains a generic refusal even when a
matching historical row no longer has access. It consumes the existing shared
attempt budget and creates no new sales session or attendance. Do not expose the
matching accounts or infer that a particular restaurant has duplicate codes.

The first-login and devices/shifts guides clarify that scope, the expected
personal profile, and recovery without inventing an Admin repair control.
French, Hebrew and English retain the existing distinction between the account
which authorized the physical terminal and the employee selected by PIN.
Changing a code and completing an invitation use the same restaurant lock before
checking and saving salted codes. Setup takes restaurant locks in stable order
before user writes, including owner onboarding; rejected setup remains atomic
with its password and invitation. Publish API before a client which relies on
the corrected behavior, and retain the existing data and financial journals.

The separate Flutter correction invalidates only provisional fulfillment state
and the Menu entry gate when its restaurant, personal actor or sign-in session
changes, including a rapid return to the same IDs. A normal refresh or same-user
profile hydration keeps the provisional intent. A saved explicit method and
its customer details remain in their actor-bound draft. This restores the
existing three-language procedures in order-types, local draft recovery and
personal PIN guidance; do not add a new procedure, date or guide paragraph for
that correction alone. Exact scoped reviews acknowledge the visible bug fix and
retain the unchanged saved-order, discount, comp and void procedures.

Refresh API and POS source evidence for this correction. Retain the unchanged
Landing application-source block and surfaces, together with Admin, guest Web
and Backoffice, exactly from Landing develop
`f7f7259deb52dcd223426f8b2eef3fb5963c5934`; those source checkpoints are retained,
not recertified from a documentation worktree with pending changes. The reviewed
French, Hebrew and English article bytes are attested separately by the new
public corpus, release revision and Landing self contract. Do not copy the final
public corpus into API during its full validation. Final source references and
documentation pins require the validated clean checkpoints; local preparation is
not remote CI readiness, production publication or physical acceptance.

## Personal-session integrity review (28 October 2026)

This correction separates physical-terminal authorization from the personal staff
session selected by PIN. The account used to authorize a terminal is not evidence
that the same person is currently using it. The first-login and devices/shifts
guides clarify that distinction in French, Hebrew and English. PIN length,
explicit submission, enrollment, attendance and cash-report procedures are kept.

API refresh requires the signed token version to match the current user's
version before issuing a replacement. A revoked or unexpected version receives
the existing generic unauthorized response without internal details. A matching
version and the existing expiration grace remain supported; refreshing cannot
substitute the restaurant owner for the personal token's subject.

POS refresh belongs to its originating session and restaurant generation. A late
refresh, profile or response cannot restore a previous actor, clear the next
actor's session or replay their request. Personal-token writes and logout cache
cleanup are serialized before a newer login. Offline permission caches are
versioned and bound to backend, restaurant and user; unowned legacy entries are
not adopted. The guides explain that an online profile read can therefore be
needed after an update or an employee change. No new refresh button is promised.

Order mutations require a confirmed, non-loading personal context, including
during login and restaurant selection. A request already sent before a context
change may have an unknown result; its original journal and identity remain the
recovery authority. This correction adds no charge, automatic clock-out, cash
closing, provider retry or data-reset procedure. Synthetic tests and source
review are not a claim that all physical device or payment flows were exercised.

Refresh API, POS and Landing source evidence for this correction only. Preserve
the Admin, guest Web and Backoffice service inventories and surfaces exactly from
Landing develop `0c914570bd4f08e5dbb3d8262f976148fa749c4e`; those sources are
retained evidence, not recertified here. Export the final public corpus into API
after its full runtime validation and before inventory generation. Local source
references remain provisional until clean source checkpoints and an immutable
documentation commit are coordinated; never mark a WORKSPACE pin ready for CI.

## Explicit stock sources and immediate modal settings (28 October 2026)

Admin source `a063d4cdde1c9c8aef99d63a611c0ea0f97d152f` and API source
`487afe91bb0e2e2faf8fd1259ef3dec15824d192` distinguish a manual remaining quantity from
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

The calculation details request carries the displayed managed series; the API
uses the same effective stock source and pools for its explanation and sellable
state. Library items omit the series query. Preview adds no stock mutation.

The compatibility review retains quantity-only legacy products on manual stock.
It changes no source semantics or public article bytes. API keeps its independently
reviewed immutable documentation pin; Admin uses this new source-evidence pin.
Both contracts share the same article hashes and documentation revision.

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

### Local order lifecycle alignment (27 October 2026)

This local preparation refreshes the API, Admin, guest Web, POS and Landing
source evidence for independent order lifecycle facts and durable unsent POS
drafts. Backoffice service metadata and surfaces are retained exactly from the
previous inventory: they are historical evidence, not a fresh Backoffice runtime
validation. Feature evidence is rebuilt from the combined source inventory.
The retained Backoffice source commit is `8b4929d31bc4aaa9b85e4effa74192476b9e2624`
with source snapshot `bfcc994d8c35d3e174520b4c2e225b6376561c51cd00770aaeada3067f02d441`.
The scan uses an isolated detached checkout of that baseline; it does not read
private or untracked files in the primary Backoffice checkout. Its original service
block and surfaces are restored byte-for-byte before rebuilding combined feature
evidence and coverage.

The six remaining audit priorities are retained in the internal API alignment
reference. Earlier physical passes do not accept this later source. Only an iPad
is currently available; physical phone/Portable and Verifone acceptance remain
separate. Cash access requires resolving the original owned shift/authorization
context; no automatic rebind, attendance rewrite or cash mutation is implied.

Local contracts may use WORKSPACE while preparing the coordinated changes.
Before CI or publication they must pin the reviewed immutable Landing commit.
Publish the FR/HE/EN corpus with the matching API and clients, after validating
the additive API and its migration before client rollout. Do not claim a unified
net-refund ledger, quantity-level partial handoff, universal commercial closure
or a different table-release policy: those are not provided by this projection.

Local contract comparisons use each candidate’s immutable starting commit, not
a moving remote branch updated by another session. They prove concordance of the
reviewed working sources and guides only. A later integration must refresh the
comparison against its actual PR base, and the WORKSPACE documentation references
remain unsuitable for remote CI or publication until an immutable reviewed Landing
commit is authorized. No source validation replaces native hardware acceptance.

Canonical payment `pending` is an expected payment state, not proof that a provider
attempt or claim is active. Existing eligible payment actions remain available;
actual provider claims, authorizations and unresolved journals retain their guards.
The lifecycle projection adds no cross-device payment lock or new authority to
collect. Preserve the former type, status, permission and provider conditions.

## Guarded free-table admission follow-up (28 October 2026)

A physical iPad pass found that a newly opened free table could reach Menu with
an obsolete restore context. The candidate now preloads the verified table/order
context before navigation and retains the previous draft on failure. The matching
API advertises boolean `table_service_start_if_free`; the new POS requests
`start_if_free:true` for a new occupation without a canonical session. A known
inactive QR session retains its existing ID and covers under the legacy resume
path; it is not silently replaced by a new occupation. Under the table lock, a concurrently occupied table returns
409 `table_service_changed` before covers or session writes. Verification storage
failure remains 503 `table_service_unavailable`; a missing table remains 404.
Legacy callers without the flag or with false retain their earlier contract.

The FR/HE/EN opening procedures explain returning to the floor, refreshing and
reviewing the current visit without attaching an old draft. Product flows do not
expose the protocol fields. Older APIs cannot provide the new protected admission;
deploy API before the compatible POS. This changes no cash report, attendance
identity, provider or table-layout geometry. Preserve all unrelated source evidence
and the exact retained Backoffice block/surfaces. Re-export the public corpus
before API final validation; refresh API/POS hashes after both sources are frozen.
The WORKSPACE/self pins still require an authorized immutable Landing commit
before remote CI or publication, and physical iPad acceptance must be repeated
on the final compatible build.


### Current POS profile identity follow-up (28 October 2026)

The POS profile read must follow the signed-in staff actor and authentication
context even when the restaurant and API repository stay the same. A late response
for the previous employee must not replace the next employee’s profile. This
corrects the read projection only: shift end, cash-report guards, device enrollment,
authentication mutations and the existing PIN sign-in flow remain unchanged.
The existing staff PIN and workspace procedures now clarify in French, Hebrew and
English that the displayed POS employee is independent of an Admin browser session,
and that the supported handover is normal shift end followed by a personal PIN.
No new account-switch control or credential recovery is advertised. Regenerate
source inventory and exact scoped reviews only after the final provider/test freeze;
retain WORKSPACE pins until an immutable documentation commit is authorized.


### Personal shift-end preflight follow-up (28 October 2026)

The compatible POS uses the version1 personal end-preflight before normal
sign-out. Historical access expiry/revocation or a removed hardware link is
independent of a legitimate period end when the original scoped reference still
exists and its cash duty is closed. Missing/foreign references and unknown reads
remain refusals. Cash access, enrollment and credential bindings are unchanged.
The guarded end names the reviewed expected_shift_id; a replacement/disappeared
period cannot inherit an old confirmation. An already-ended state has a separate
explicit lock confirmation and fresh read, without another clock-out. Pending
local cash and uncertain end journals keep their existing resolution authority;
Verifone journals stay separate. The public account, staff and cash-access guides
explain these distinctions in French, Hebrew and English; protocol/version/error
details stay in the internal API guide. Deploy and verify the API first.
Regenerate inventory and scoped shared-source reviews only after API/POS freeze.
WORKSPACE documentation references remain local preparation and are not CI-ready
or publication-ready until an immutable documentation commit is authorized.


### Integrated delivery bases and migration evidence (28 October 2026)

The unpublished lifecycle feature is rebased onto the reviewed stock-source
Admin develop c7cc558411f01fa9aefc066d32c907cab5f5986a and Landing develop
e534cd316d55f0c67db9d6fd5f7b9d2aa7be94a2. Preserve immediate Apply, explicit
recipe stock and all prior stock procedures alongside lifecycle, guarded table
admission, personal profile and shift-end guidance. Source-contract reviews must
compare with these actual PR bases, not the earlier local preparation baselines.
The additive submission recovery migration is now280_check_submission_recovery_scope.sql;
279 remains the upstream explicit recipe-stock migration. No applied migration is
modified. The inventory admits only SQL migrations explicitly selected by authored
features, and has a synthetic regression that excludes unselected/compressed files.
The new migration is evidence for POS order-entry recovery and the internal API
contract; it adds no guest handoff or payment authority. Derived conflict stages
were preserved outside repositories and temporary WORKSPACE placeholders are not
release-ready. Regenerate the combined inventory/contracts after all integrated
source checkpoints and the final API corpus commit, then coordinate the immutable
Landing pin before remote CI. No immutable pin is created by this local integration.


## Local exact-postal delivery coverage (28 October 2026)

This preparation reviews API, Admin and Landing only. Migration 281 adds optional
postal_codes metadata without converting existing city or department zones. Exact
postal rules precede other zone types; provider-verified French five-digit codes,
including leading zeros, determine eligibility, fee, minimum and calendar.
Client city strings and coordinates cannot supply this metadata. Tests exercise
75016 versus 75015, missing/provider-failure metadata, overlapping zones, updates,
restaurant isolation, tour guards and the three geocoding adapters. FR/HE/EN
browser fixtures verify create, readback, edits and invalid department input.

Retain Web, POS and Backoffice inventory blocks and surfaces exactly from the
Landing develop baseline e79a046cc2689308687896e9ed4a70d4f429f357; these consumers receive delivery decisions
through existing server contracts and have no zone-authoring model to update.
Copy the regenerated public corpus into API before scanning. WORKSPACE references
support local preparation only; immutable documentation pins require an explicitly
authorized commit before remote CI. Deploy API/migration before Admin and publish
the qualified guides with the compatible product release. No production mutation,
real delivery order, paid provider call or deployment is part of these tests.


The postal-list follow-up accepts spaces, commas, semicolons and real line breaks
in a multiline editor, preserves leading zeros and deduplicates within each list.
A shared postal code combines compatible zones' weekly windows without writing
any saved zone. Fee, nullable minimum, booking mode and pickup alternative must
all agree; existing priority remains for incompatible or overlapping promises.
No supplied business lists, restaurant configuration or default fees are seeded.
A changed order address compares both the zone anchor and effective calendar, so
losing one shared day group cannot retain the previous address's extra weekdays.
API tests exercise public calendar output, all three booking modes, Saturday
exclusion, isolated code/rate groups and existing-order address revalidation.
Admin fixtures verify three manually authored groups and multiline round trips.

## Owner courier-mode local preparation (28 October 2026)

This preparation extends the existing scoped courier selector to the active
restaurant owner. API ownership is authoritative; a global owner role in a
different restaurant grants no access. FR/HE/EN procedures retain their stable
anchors and qualify the owner flow by compatible API and Admin versions.
Deploy API before Admin and publish these guides with the behavior. No production
mutation or deployment is part of local validation.

Refresh API, Admin and Landing evidence only. Preserve the guest Web, POS and
Backoffice service blocks and source surfaces from the current Landing develop
baseline without claiming to revalidate them. Application source checkpoints are committed separately from generated help
contracts; every inventoried source digest is verified against its immutable
checkpoint. Service contracts pin the reviewed immutable Landing commit before
remote CI or release. Synchronize the exported support corpus before scanning API sources.

## Sumit internal checkout release (28 October 2026)

This preparation changes API, Admin, guest Web and the matching FR/HE/EN guides.
Only the active, configured Sumit provider enables staff-created private basket
links and hosted card entry. Recipient delivery addresses resolve through the
existing restaurant-scoped zone rules; the recipient reviews server-calculated
fees, the applicable minimum and the final total before payment. A changed total
must be reviewed again. Admin-entered card orders retain their staff delivery quote.
The prepared order remains pending and immutable until provider confirmation;
retries resume one durable hosted page, and uncertain creation remains blocked.
A 24-hour expiry uses the existing cancellation/stock-release path. No schema or
environment change is required. Cards are entered in Sumit's hosted form and are
not saved for later use by either new flow.

Retain POS, Backoffice and unchanged Landing application sources from the current
Landing develop inventory, rather than revalidating unrelated worktrees. Refresh
only API/Admin/Web source inventories, render all translations, export the public
corpus and copy it into API before its final source scan. Publish the new guide with the compatible API/Admin/Web release. Pin the final
reviewed Landing commit in each product contract before PR readiness. The owner
authorized development deployment followed by production promotion on 28 October.
Verify development first, then promote those exact successful artifacts without
rebuilding. Provider acceptance is verified separately from the browser regressions,
which use synthetic orders and stub Sumit; no production test charge is needed.


## Courier execution-only itinerary (28 October 2026)

Courier mode no longer exposes Refine, route settings, address correction, stop
reordering or reoptimization. Owners and superadmins viewing a courier use the
same execution-only screen. Start, navigation, contacts, arrival and delivery
confirmation remain available. Read-only total-duration details remain visible.
Retry on a plan warning reloads saved information without optimizing the route.
An authorized dispatcher changes plans in Orders → Deliveries. Legacy courier
planning aliases return 403; delivery planning writes reject Courier memberships
even when a historical orders.manage grant remains, and reject explicit
courier_id selections. Current restaurant ownership and explicit superadmin
access remain valid for dispatcher planning. Restaurant boundaries are preserved.

Review courier, dispatch and Google verification procedures in FR/HE/EN. No
customer windows, route order, live estimates or order states are rewritten by
this release. Synthetic tests cover rejected writes and preserved delivery actions;
production verification reads controls without changing real orders. Refresh only
API, Admin and Landing evidence. Retain Web, POS and Backoffice service blocks
and surfaces exactly from Landing develop 7c60f5a31a7e4cf58b84ad4d4adcf73907f320a9;
those services are not revalidated. Export and copy the identical public corpus
before scanning API evidence, pin immutable source and documentation commits,
validate API before clients, then promote the exact development-tested artifacts
under the authorized courier correction release workflow.

## Stancer cash guarantee release (29 October 2026)

The user authorized commits, pushes, development deployment and production
promotion on 29 October 2026. API, Admin, guest Web and Landing are integrated
with their current develop bases. POS and Backoffice retain the exact source
blocks and surfaces from Landing develop f3709668; they are not revalidated.
Existing POS cash drawer rules remain authoritative.

The separate Stancer sandbox hosted-card/3DS flow authorized 0.50 EUR with
capture=false. DELETE then an independent GET confirmed cancellation of that
same intent, amount and currency. No capture, Foody order, customer or tenant
setting was created. This proves the provider sandbox path; real bank release
timing and merchant fees remain account-specific. Guarantees remain off by
default, and deployment does not change Lovely's saved cash settings.

Source checkpoints and the final reviewed Landing documentation commit are
immutable before remote CI. Roll out migration 282/API before Admin/Web, verify
development, then promote the exact same artifacts without rebuilding. Publish
the three-language procedures with the compatible product release. No production
test payment is required or authorized merely by this deployment.


## Compact item sheet local preparation (29 October 2026)

This preparation reviews Web, Admin, Landing and the API's synchronized public
help corpus on isolated develop-based branches. Product-sheet layout changes and
Admin's Compact presentation action are documented in FR/HE/EN under
website-order-design/item-surface and guest-ordering/basket. Authored theme roles,
fonts, ratios, fit and framing remain the source of truth; only a missing photo
ratio defaults to 16:9. The isolated editor test publishes only to an in-memory
fixture. Existing public websites and production settings are never mutated.

POS and Backoffice inventory blocks/surfaces retain their exact evidence from
Landing develop 359e59e0 and are not revalidated here. Copy the exported public
corpus to API before scanning. The user authorized commits, development and production deployment on 29 October
2026. Contracts pin the reviewed immutable Landing commit before remote CI;
Landing retains its self-reference. Publish the guides with the verified Web/Admin rollout
and matching support corpus. Source and synthetic browser checks do not certify
a live order or production deployment.

## Local delivery weekday scheduling preparation (29 October 2026)

This preparation reviews API, Admin, guest Web and Landing from develop. Zone
weekdays restrict the restaurant delivery calendar; legacy zone windows supply
only weekdays for new bookings. Existing orders retain their frozen availability.
The prepared-checkout quote shares the restaurant calendar without reapplying a
production delay. Fees, minimums, tenant checks and payment authorization keep
their separate server checks. No schema or production-data migration is required.

POS and Backoffice inventory entries and surfaces retain their exact baseline
from Landing develop `359e59e030e4a686224a3ff520f1799534fb3d67`; those clients are
not revalidated here. POS retains delivery policy snapshots as an opaque map.
Export FR/HE/EN procedures and synchronize the API corpus before the source scan.
Service contracts pin the reviewed immutable Landing documentation commit for
remote CI and release. Deploy the API before compatible Admin/Web, verify development, and
publish the guides with the product. This local preparation deploys nothing.
