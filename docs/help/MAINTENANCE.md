# Help ownership, evidence and releases

The public help center lives on `foody-pos.co.il/{fr,he,en}/help`. Admin provides
contextual access and an assistant drawer. It does not host the public knowledge
base. `docs/help/catalog/features.json` is the authored feature/procedure source;
`npm run render:help` renders its French, Hebrew and English guides to
`src/content/help`. Imported detailed chapters and stable URLs are retained. References to absent historical screenshots are removed; missing local illustration assets fail publication validation.
Internal operator procedures render separately to `docs/help/internal` and never
enter public browsing, search or the AI corpus.

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
from Landing commit `97f9e0ab89e46e6d581ebf5a5e3ece1349759328`; they are unchanged
baseline evidence, not a new validation of those services. Pin this documentation
commit in API and Admin before opening their PRs. Deploy API before Admin, and
publish the corresponding guides with the feature release.
