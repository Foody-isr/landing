# Ordering evidence and help citations

Reviewed 1 November 2026 from Landing develop
`6d1208439d9356024ab3206352c70bf7c705099b`.

An audit of 57 public commercial pages found 129 article-reference occurrences
and 42 unique article URLs. Three references, one per locale on the ordering
page, used the nonexistent `settings/delivery-zones` article. Independent HTTP
GETs confirmed 404. Correct those references to `delivery/zones-and-schedules`
and retain old shared links with three exact 308 redirects. No procedure date,
article body or corpus entry changes.

`scripts/marketing-help-links.mjs` validates rendered main-content citations
against `readCorpus`/`localizedCorpus`, matching actual help routing and English
fallbacks. The marketing smoke requests each unique valid destination, checks
its source canonical and referenced anchors, and separately tests legacy
redirects. Redirect availability does not permit a stale alias as a marketing
proof link. External vendor documentation is outside this owned-corpus check.
Run `npm run test:marketing-links` for the six regressions and
`npm run test:marketing` against a running production build for actual HTTP checks.
Both run in CI. This check does not assert the factual completeness of every
procedure or validate external partner pages.

The existing Orders page receives two useful buying answers: standalone cost
and Foody commission. Its 590 ILS monthly price comes from shared `pricingRates`;
Restaurant remains 890 ILS. Zero Foody percentage commission is distinct from
subscription, processing, SMS, couriers and other external services. No private
competitor quote or unsupported saving is used. Browser-based SoftwareApplication
metadata matches the visible offer and links to its own pricing anchor. QR is
identified with the approved Restaurant inclusion. No new acquisition URL is added.

The ordering workflow already explains same-day orders, preorders, packing and
handoff. Those scopes remain unchanged and linked to published procedures. The
discovery audit retains 36 pages and now checks 21 priority targets, including
ordering, for same-language contextual sources. These are HTTP/corpus checks,
not proof of indexing, LLM citation or ranking gains. Google guidance:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content.

Partner outreach, customer references and Business Profile validation remain
deferred. No payment, real order, supplier communication or test lead is created.

Local validation passed: 47 help tests, six citation regressions, lint, TypeScript,
complete build and 417 sharing outputs. The production-build smoke checked 65
localized pages and 45 help destinations, plus three legacy redirects. Discovery
passed all 36 pages and 21 priority targets. Six 375/1280 px locale checks showed
no horizontal overflow; the French procedure link was followed to its real article
and the mobile commission answer was opened and reviewed.
