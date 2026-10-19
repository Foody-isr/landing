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

On mobile, opening or dismissing the keyboard keeps the same layout: Pickup and Delivery tabs stay visible, the field keeps its position and suggestions scroll in their own area. The cover is reserved for larger screens. Sign in remains accessible as a compact link beside confirmation. Google Maps attribution and errors stay visible. Keep the input enabled during resolution; editing cancels the request and invalidates its response. A parent calendar does not reset the draft. Verify repeated iOS keyboard opening and dismissal, suggestion scrolling, switching to Pickup and sign-in. Assert the field position before focus, after viewport reduction and after restoration in WebKit and Chromium, in FR/HE/EN, before promotion.
