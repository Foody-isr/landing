---
title: Shared application runtime
description: >-
  Engineering only: shared authentication clients, state, localization, styling, proxies and platform bootstrap support
  the documented business modules.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-24'
featureId: shared-runtime
audience: internal
releaseStatus: available
---
Engineering only: shared authentication clients, state, localization, styling, proxies and platform bootstrap support the documented business modules.

<span id="verifone-admin-money-operations" />

## Refund or void a Verifone online payment

The Admin order payment section supports total or partial matched refunds and total VOID for an eligible single Verifone online payment, for owners/managers with payments.manage. Provider state, captured amount and verified history govern eligibility, not a fixed 24-hour rule. This does not cancel preparation or fulfillment and does not add a POS terminal refund button. Unknown results stay reserved and must be checked, never resubmitted. Invoice4U credit/cancellation documents require a separate check. See [the online payment procedure](/en/help/payments/how-payments-work#verifone-admin-refund-void).

A captured ABS sale still AUTHORISED/AUTHORIZED or SETTLEMENT_REQUESTED is not settled: Admin shows Available to void and only Void entire payment, with no prior refund. Refund payment and Available to refund require an explicit settled state or verified partially-refunded history. Generic APPROVED/COMPLETED, contradictory states or missing evidence offer neither action. A state change before confirmation rejects the stale action; it never switches VOID to REFUND automatically. Request rejected by Verifone means no return of funds is confirmed, not necessarily an issuer decline.

<span id="weight-hold-margin" />

## Review the by-weight authorization ceiling

Public expected_hold_amount_minor is checked against server-priced lines and the scoped margin inside order creation; mismatch rolls back before stock/provider effects. The server writes weight_hold_amount_minor and weight_hold_buffer_percent metadata, never trusts guest external_metadata, and the resolver retains that ceiling or existing HoldAmount. Settings accept finite 0–100 values; omission preserves them and defaults remain 20. Public restaurant and protected settings expose the safe policy. TypeScript never invents an unknown margin. FR/HE/EN checkout notices inherit restaurant styles. No schema change, provider credential or POS client mutation.

<span id="classify" />

## Review shared source changes

Every source file is inventoried by exact digest. Files without a specific business selector are explicitly classified as shared runtime, not silently called customer features. A source change still requires an exact no-user-impact explanation or updated procedures. New screens and controls must be assigned to their business feature before release.

<span id="whatsapp-media-client" />

## Private WhatsApp file client

The Admin file client centralizes JWT, X-Restaurant-ID, one 401 refresh and no-store for multipart/binary files. Blob URLs are temporary and revoked; URLs contain no secrets. Draft signatures and save reconciliation retain attachment selections. The catalogue accepts BODY plus one compatible IMAGE/DOCUMENT HEADER regardless of component position while preserving variable mappings. Copy and procedures are available in French, Hebrew and English.

<span id="internal-combo-substitution-contract" />

## Make a one-order combo exception

Internal combo exceptions use is_substitution per selection. Only JWT staff handlers with restaurant-scoped orders.manage set the non-JSON AllowSubstitutions authority; public callers and service creation without authority are rejected. Migration 264 adds the false-by-default combo_substitution order-item snapshot. The API validates active tenant ownership, individual fixed-price items, option membership and activation, pinned portions, step counts and size/item caps, and applies stock guards. The replacement has zero price delta and no fixed-step modifier charge. Combo definitions are never mutated; saved recomposition keeps the base-price snapshot and rolls back on failure. Admin drafts, editing and FR/HE/EN copy retain the marker. Web and Dart response contracts accept the additive snapshot without exposing a guest or POS exception control. Deploy the API and migration before Admin; keep the public help and embedded support corpus on the same reviewed release.

<span id="mobile-fulfillment-viewport" />

## Validate the keyboard in fulfillment selection

On mobile and desktop, review the initial Sign in and Continue as a guest choices as text actions without an additional yellow button. No address field or confirmation should appear before choosing. Check opening/closing sign-in and guest access: address entry for Delivery, collection details without a delivery address for Pickup. Back must retain the draft; switching services or reopening the dialog must not repeat the guest choice. Also check a signed-in customer’s validated address card and Edit. In a 360 px visual viewport with at least four results, four whole 44 px suggestions must remain visible. The title, tabs, Back and input keep their positions when the keyboard opens or closes. Check 320 px screens, desktop and French, Hebrew and English. The view must never depend on focus or keyboard state. Reveal address entry only through an explicit choice. Retain the inset focus indicator and content-sized dropdown. Check the real iOS software keyboard before release.

<span id="customer-social-choice" />

## Review customer sign-in choices

Sign in opens Google and the email/password form. Facebook and Apple appear only when configured by the service. Standalone email-code sign-in is no longer offered. Account creation, address verification and password-recovery codes remain separate. Check dismissal and resumption without losing the draft on mobile and desktop; four whole suggestions with the keyboard open retain the same geometry. Sign-in choices must not reintroduce moving tabs or input.

<span id="sale-stock-history-read-only" />

## Keep the sale-stock journal read-only

The Admin menu/stock route and its links now use the Stock history label in French, Hebrew and English. It reads only restaurant items for the filter and paginated sale-stock events, without calling allowance counters or correction routes. Item, series date and movement filters remain combined during pagination; responses for an earlier selection are ignored. The product link is named Full stock history. Preparation remains in the carte draft and publication. Deploy the same public corpus used by search and guides to the support service with this procedure change.

<span id="related-service-controls" />

## Access the new controls

Settings → Usage and quotas displays this restaurant’s Google/Geoapify allowances and usage with settings view/edit permission. Fallback credits and deliveries submitted for optimization are distinct from request counts. Foody adjusts limits without resetting counters. See [limits and renewal](/en/help/settings/api-usage-and-quotas).

<span id="optional-entry-access" />

## Verify discreet sign-in access

The offer_sign_in setting controls the automatic invitation, not account availability. False shows the form directly with a small Sign in link; true or missing retains the invitation and guest choice. Verify FR/HE/EN, desktop and mobile, explicit opening, dismissal with focus restored and typed address retained. The link keeps a 44 px target, transparent background and text-sized mobile column. Preview displays a disabled link without real authentication. Editor labels explain the same choice; delivery controls are unchanged. The embedded support corpus carries the same public procedures.

<span id="modifier-position-contract" />

## Conditional modifier contract

Migration 274 adds selection_config to the item/group link and selection_index to modifier snapshots. Deploy API and schema before compatible clients. Existing links without configuration retain their behavior. Rules use IDs verified against the restaurant and item; modifier sources are independent single-choice groups. Repeated positions are numbered 1 to 12 and require exactly one selection. The server recalculates prices, rejects duplicates, unavailable positions and hidden choices, and prefixes saved names for kitchen output. TypeScript/Dart caches and payloads retain catalog ID and position. Cross-restaurant copying remaps references. Additive API, translation and model changes do not alter existing payment, Google or delivery integrations. Documentation stays local until a reviewed Landing commit has been authorized and pinned; do not publish procedures ahead of their clients.

<span id="descriptive-variant-contract" />

## Descriptive variant contract

Option groups carry an item-specific role: price retains the absolute priced variant, while identity retains descriptive dimensions without changing price. selection_config conditions their positions on an independent priced format. Orders send option_selections separately from selected_variant_id and modifiers; positions and labels are snapshotted and guest clarifications remain private. Deploy migration 275 and the API before compatible clients. The server validates price, restaurant ownership and every choice. Historical groups retain their behavior until explicitly reconfigured.

<span id="mobile-terminal" />

## Validate mobile terminal surfaces

The compact workflow uses the Menu/Check/Actions panel and hides primary navigation during a sale; returning to checks remains explicit. Blue rectangular controls are limited to compact operational layouts. Tablet composition is retained. Validate 320×568 and 390×844, French/Hebrew, keyboard, cancellation, reasons and permissions. Synthetic tests cover variant prices, modifier deltas, notes, quantities and covers. A local rendering is not physical terminal acceptance or publication. This presentation requires no new API contract or migration.

<span id="unified-whatsapp-order-composer" />

## Verify the unified WhatsApp composer

The shared Admin composer handles individual orders and current-page selections through existing preview/send endpoints, without a new dispatch route, migration, API free text or changed automation triggers. App drafts stay local and require confirmation before discarding. Uncertain results retain their original dispatch ID across message-type changes. GET /restaurants/:id/message-templates admits settings.view or orders.manage behind EnforceRestaurantAccess; PUT and DELETE still require settings.edit. No credentials become readable. FR/HE/EN copy and the order/WhatsApp procedures cover the controls. Verify lost responses, partially eligible queues, changed orders and mobile RTL with synthetic fixtures; interface verification must not send real messages. WORKSPACE is a local-review pin only: replace it with an authorized immutable Landing commit before CI/publication and deploy the API before its matching Admin. The documentation check distinguishes existing files from unstaged tracked deletions: a deletion must leave the inventory and still pass its three-language impact review.

<span id="mobile-terminal-pages" />

## Verify compact terminal pages

The compact theme is applied above the router, including modals and authentication. It uses neutral surfaces, blue actions, rectangular controls and centered headers. FoodyPageLayout, FoodyPageShell and Mana components adapt insets and actions; rail filters become a mobile sheet. Compact layout uses the window’s shortest side, including landscape, without treating a tablet panel as a phone. Specialized payment views and explicit status colors retain their roles. Source review and widget tests do not certify physical-device pixel equality. WORKSPACE references remain local preparation only; an immutable Landing revision is required before remote CI and publication.
