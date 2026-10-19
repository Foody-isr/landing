---
title: Shared application runtime
description: >-
  Engineering only: shared authentication clients, state, localization, styling, proxies and platform bootstrap support
  the documented business modules.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-19'
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
