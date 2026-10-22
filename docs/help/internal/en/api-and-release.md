---
title: API contracts and release operations
description: 'Engineering operators: use the closest service AGENTS.md, README, API contract and deployment workflow.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-22'
featureId: platform-api
audience: internal
releaseStatus: available
---
Engineering operators: use the closest service AGENTS.md, README, API contract and deployment workflow.

<span id="verifone-admin-money-operations" />

## Refund or void a Verifone online payment

The Admin order payment section supports total or partial matched refunds and total VOID for an eligible single Verifone online payment, for owners/managers with payments.manage. Provider state, captured amount and verified history govern eligibility, not a fixed 24-hour rule. This does not cancel preparation or fulfillment and does not add a POS terminal refund button. Unknown results stay reserved and must be checked, never resubmitted. Invoice4U credit/cancellation documents require a separate check. See [the online payment procedure](/en/help/payments/how-payments-work#verifone-admin-refund-void).

A captured ABS sale still AUTHORISED/AUTHORIZED or SETTLEMENT_REQUESTED is not settled: Admin shows Available to void and only Void entire payment, with no prior refund. Refund payment and Available to refund require an explicit settled state or verified partially-refunded history. Generic APPROVED/COMPLETED, contradictory states or missing evidence offer neither action. A state change before confirmation rejects the stale action; it never switches VOID to REFUND automatically. Request rejected by Verifone means no return of funds is confirmed, not necessarily an issuer decline.

After a full return verified against matched Verifone history, the summary keeps the original amount, shows the full amount returned and zero remaining, and offers no further refund or VOID. A cleared capture balance after that return is not an uncaptured hold to release. Missing or inconsistent evidence still requires verification without resubmission.

<span id="verifone-readable-hosted-theme" />

## Keep the hosted payment form readable

A superadmin opens Restaurant > Payment > Verifone in Backoffice and saves payment settings before choosing Synchronize published logo and colors. Synchronization uses only the published logo and selected button/brand accent. HPP always uses a light page, white panels and dark text; pale accents are darkened for at least 4.5:1 contrast on the page and panels. After the contrast-policy API release is installed, resynchronize previously enabled restaurants in the approved environment; the old snapshot is marked outdated. Verify logo, entered digits, labels, errors and payment icons, including mobile and French/Hebrew/English, without submitting an unapproved transaction. Website colors and native wallet sheets are unchanged. The new restaurant-specific theme is not the organization default and applies only to newly issued Checkout links. Existing links and financial state are unchanged; verify payment status before any retry. Never bulk-update production without approval.

<span id="weight-hold-margin" />

## Review the by-weight authorization ceiling

Public expected_hold_amount_minor is checked against server-priced lines and the scoped margin inside order creation; mismatch rolls back before stock/provider effects. The server writes weight_hold_amount_minor and weight_hold_buffer_percent metadata, never trusts guest external_metadata, and the resolver retains that ceiling or existing HoldAmount. Settings accept finite 0–100 values; omission preserves them and defaults remain 20. Public restaurant and protected settings expose the safe policy. TypeScript never invents an unknown margin. FR/HE/EN checkout notices inherit restaurant styles. No schema change, provider credential or POS client mutation.

<span id="pos-ledger-cash-drawer-contract" />

## Review POS transaction and cash-drawer contracts

Deploy and validate the restaurant-scoped API migrations and routes before enabling POS Transactions and cash-drawer reports. The transaction ledger identifies each original payment separately from its order: an order may have multiple payments, and a payment may cover multiple orders. Refund eligibility uses the selected original payment ID, its tender rail, amount and verified provider state; never infer it from order status alone. Cash refunds affect only original cash payments and are recorded against an open drawer session with an idempotency key. Unknown provider outcomes stay pending for reconciliation; do not silently convert them into success or retry as a new refund.

<span id="contracts" />

## Maintain scoped API contracts

The inventory records each route registration, handler and source location. Group-relative fragments are not standalone URLs. Validate inputs, JWT roles and restaurant ownership at boundaries; public restaurant endpoints still need explicit scope. Update Go, TypeScript and Dart consumers when contracts change.

<span id="release" />

## Validate and promote the same artifact

Use one feature PR into develop per affected repository, complete validations, then verify the immutable development artifact. Production promotion requires human authorization and development verification; do not rebuild from main. Never modify applied migrations or real .env files. Record release/corpus revisions and rollback targets.

<span id="help" />

## Review documentation impact

For every changed behavior, map affected features, update French/Hebrew/English procedures and record exact source hashes. A no-user-impact exception needs a concrete reviewed reason. CI must reject stale hashes, missing translations, unmapped new surfaces and mismatched embedded AI corpus; passing metadata checks alone does not validate product behavior.

<span id="whatsapp-media-contract" />

## WhatsApp attachment contract

Migration 262 and AutoMigrate add immutable encrypted tenant files, source/asset_id selections in global and workflow template references, and attachment metadata in the ledger. Protected /restaurants/:id/whatsapp/meta/media and /orders/:orderID/receipt.pdf routes enforce restaurant scope, permissions and no-store. PDFs use the existing isolated Chrome via CHROME_REMOTE_URL, with no new environment variable or fiscal call. Preparation does not contact media/message endpoints; media upload and template HEADER dispatch occur after a durable claim. Revalidation covers ownership, type and the reviewed receipt digest; uncertain sends are not replayed and providers never fall back.

<span id="internal-combo-substitution-contract" />

## Make a one-order combo exception

Internal combo exceptions use is_substitution per selection. Only JWT staff handlers with restaurant-scoped orders.manage set the non-JSON AllowSubstitutions authority; public callers and service creation without authority are rejected. Migration 264 adds the false-by-default combo_substitution order-item snapshot. The API validates active tenant ownership, individual fixed-price items, option membership and activation, pinned portions, step counts and size/item caps, and applies stock guards. The replacement has zero price delta and no fixed-step modifier charge. Combo definitions are never mutated; saved recomposition keeps the base-price snapshot and rolls back on failure. Admin drafts, editing and FR/HE/EN copy retain the marker. Web and Dart response contracts accept the additive snapshot without exposing a guest or POS exception control. Deploy the API and migration before Admin; keep the public help and embedded support corpus on the same reviewed release.

<span id="counter-terminal-payment-before-kitchen" />

## Wait for counter card payment before kitchen preparation

Counter terminal checkout persists a restaurant-scoped order with payment_status=pending to obtain the canonical amount and stable invoice reference. Creation holds its kitchen lifecycle, blocks dispatch before payment, and excludes pending payments from the live POS overview. Only terminal approval permits the existing staff payment-recording endpoint; the client then sends the paid order to the kitchen. Declines and cancellations reuse the same order/invoice. Preserve approval reconciliation; never retry an uncertain charge. Deploy the matching API before the POS client. This change does not alter hosted provider initiation, tenant authorization, or deliberate send-before-pay table service.

<span id="mobile-help-corpus" />

## Synchronize the mobile ordering corpus

The native-keyboard follow-up must release the compact entry procedures and embed their matching FR/HE/EN corpus. Verify the same revision through support/status in development and production; API order and payment logic are unchanged.

<span id="google-street-refinement" />

## Resolve Google street refinements

Google can return a different canonical ID for a route segment. Accept this difference only for a street without a house number, after validating the country and provider response. This refinement receives neither delivery proof nor coordinates: the customer must still choose a complete address. Preserve exact place-ID matching for complete addresses, restaurant and visitor bound signatures, session limits and budgets. Test canonical streets, foreign countries, missing or invalid IDs and rejection of complete addresses for another place. Verify a street search and an address with a house number after promotion. Provider reference: https://developers.google.com/maps/documentation/places/web-service/place-id#obsolete

<span id="customer-social-sign-in" />

## Enable customer Facebook and Apple sign-in

Deploy migration 266 and the API before Web. Configure CUSTOMER_FACEBOOK_APP_ID, CUSTOMER_FACEBOOK_APP_SECRET and CUSTOMER_FACEBOOK_API_VERSION together using a version still supported by this Meta app. Apple requires CUSTOMER_APPLE_CLIENT_ID (Services ID), TEAM_ID, KEY_ID, PRIVATE_KEY and REDIRECT_URI under the CUSTOMER_APPLE_ prefix. Register the domains and exact HTTPS return URL in Apple Developer; localhost/IP addresses are not accepted. Apple push and WhatsApp credentials are not automatically reused. GET /public/auth/providers exposes only public SDK settings for complete methods; partial settings stop startup, empty settings disable a method. Facebook SDK user tokens are verified for app_id, type, validity, expiry and Meta subject. Apple exchanges a single-use code and checks signature, issuer, audience, expiry and nonce. The BFF binds the request to a temporary HttpOnly browser cookie, consumes that state and stores the final session in HttpOnly. No provider token or secret enters logs or browser storage. The provider subject is the stable key; Facebook contact emails never link an account by email. Test cancellation, denial, replay, domains, Apple relay addresses and draft restoration with authorized test accounts before live activation. Simulated local checks do not prove external configuration.

<span id="carte-publication-stock-contract" />

## Carte publication and sale-stock transactions

API migration 267 adds private carte/series drafts, immutable publication snapshots and item-stock series/counters/events. Draft and stock history endpoints require scoped menu.view; changes require menu.edit. Publication checks draft/source and stock revisions in one transaction, preserves order commitments and rejects invalid tenant references. Deploy the API before Admin. Retain old global counters for older orders; the first series activation imports current remaining stock explicitly. Verify concurrent reservations, stock releases, future-series isolation and rollback in development before promoting the artifacts.

<span id="stock-history-only-corpus" />

## Synchronize the stock-history procedure

Synchronize internal/support/corpus.json with the exported public corpus for the read-only Stock history page. Existing paginated endpoints and menu.view authorization remain unchanged. Help explains combined filters, the product link and preparation from the carte draft; it no longer offers immediate corrections in menu/stock. Verify the same revision in public support status and FR/HE/EN guides after deployment, without paid AI calls.

<span id="library-restock" />

## Save stock outside series

POST /api/v1/menu/items/:id/sales-stock/restock also accepts remaining stock for restaurants without series, requiring menu.edit and the active restaurant. expected_revision uses item.stock_revision; all size counters, validation and journal writes are atomic under the order stock lock. Series restaurants retain their series counters. Foreign sizes, invalid quantities and stale revisions fail without partial changes. Deploy this API before the Items UI. No schema or environment change.

<span id="staff-activation-pos-code" />

## POS code at staff activation

validate-invite returns pos_pin_required from the current scoped membership permissions (orders.manage or payments.manage), never the global or legacy role label. setup-account independently rechecks scope, role and permission requirements. Non-POS staff ignore a stale client PIN without writing one. Password, optional PIN, one-time invite consumption and JWT generation are atomic; failures preserve the existing invitation and credentials. Used, expired, ambiguous legacy and revoked links remain blocked with allowlisted error codes; unexpected persistence errors expose no SQL or tokens. No migration or environment change is needed. Deploy API before Admin; already emailed unused links require no data repair or resend.

<span id="modifier-position-contract" />

## Conditional modifier contract

Migration 274 adds selection_config to the item/group link and selection_index to modifier snapshots. Deploy API and schema before compatible clients. Existing links without configuration retain their behavior. Rules use IDs verified against the restaurant and item; modifier sources are independent single-choice groups. Repeated positions are numbered 1 to 12 and require exactly one selection. The server recalculates prices, rejects duplicates, unavailable positions and hidden choices, and prefixes saved names for kitchen output. TypeScript/Dart caches and payloads retain catalog ID and position. Cross-restaurant copying remaps references. Additive API, translation and model changes do not alter existing payment, Google or delivery integrations. Documentation stays local until a reviewed Landing commit has been authorized and pinned; do not publish procedures ahead of their clients.
