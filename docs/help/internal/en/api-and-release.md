---
title: API contracts and release operations
description: 'Engineering operators: use the closest service AGENTS.md, README, API contract and deployment workflow.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-30'
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

The inventory records each route registration, handler and source location. Group-relative fragments are not standalone URLs. Validate inputs, JWT roles and restaurant ownership at boundaries; public restaurant endpoints still need explicit scope. Update Go, TypeScript and Dart consumers when contracts change. Fulfillment customer information requires both the settings capability `pos_fulfillment_customer_information_supported` and grouped-send `customer_information`. Preserve an omitted method flag by stable ID; explicit false disables it. Validate and fingerprint customer_name/customer_phone/delivery_notes/delivery_apt/custom_fields atomically. Follow-up batches inherit only coherent snapshots; mixed guests and allocated bills cannot adopt replacement details. Grouped creation suppresses per-course customer confirmations without suppressing kitchen/staff events or independent status notifications. Tests must not send real notifications. The staff-only pos_guest_details input contains first_name, last_name, identifier and note, advertised by checks/capabilities. Bounded normalized values inherit coherently on subsequent unsplit batches. Public creation clears this input and public disclosure strips the metadata. Deploy the API before enabling the matching client fields; older APIs leave them disabled. Preparation is local until the matching release is approved and published.

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

<span id="descriptive-variant-contract" />

## Descriptive variant contract

Option groups carry an item-specific role: price retains the absolute priced variant, while identity retains descriptive dimensions without changing price. selection_config conditions their positions on an independent priced format. Orders send option_selections separately from selected_variant_id and modifiers; positions and labels are snapshotted and guest clarifications remain private. Deploy migration 275 and the API before compatible clients. The server validates price, restaurant ownership and every choice. Historical groups retain their behavior until explicitly reconfigured.

<span id="unified-whatsapp-order-composer" />

## Verify the unified WhatsApp composer

The shared Admin composer handles individual orders and current-page selections through existing preview/send endpoints, without a new dispatch route, migration, API free text or changed automation triggers. App drafts stay local and require confirmation before discarding. Uncertain results retain their original dispatch ID across message-type changes. GET /restaurants/:id/message-templates admits settings.view or orders.manage behind EnforceRestaurantAccess; PUT and DELETE still require settings.edit. No credentials become readable. FR/HE/EN copy and the order/WhatsApp procedures cover the controls. Verify lost responses, partially eligible queues, changed orders and mobile RTL with synthetic fixtures; interface verification must not send real messages. WORKSPACE is a local-review pin only: replace it with an authorized immutable Landing commit before CI/publication and deploy the API before its matching Admin.

<span id="meta-template-image-proxy" />

## Meta WhatsApp template image

GET /api/v1/restaurants/:id/whatsapp/meta/templates/:templateId/image reads an approved Utility template image belonging to the restaurant’s Meta account. JWT, restaurant access and settings-read or order permissions are required. Responses are private and uncached, with verified JPEG/PNG bytes and a 5 MB limit. Signed Meta URLs and credentials are never returned. Previews and sends automatically include the Meta image when no file was explicitly selected; changed image content invalidates the previous manual confirmation. Retrieval failure returns an error without sending text alone.

<span id="weekly-series-rollover" />

## Verify the current batch without orders

GET /api/v1/orders/series keeps the existing sorted fulfillment dates and aggregates, then includes the current batch’s service days without creating an order. Optional is_current marks one default date: the operational batch’s first fulfillment day that has not passed. The batch stays current through its final day in restaurant time. Menu selection and public ordering rules keep their separate resolution. The client refreshes every visible minute and on tab return; Home and Orders follow the current batch while preserving history chosen on the open page and explicit payment-attention links. Validate cutoff boundaries, local midnight, DST, multiple fulfillment days, tenant isolation, zero orders and existing aggregates. Deploy API before Admin and publish procedures with the feature.

<span id="manual-weekly-ordering" />

## Control weekly ordering manually

Migration 277 adds restaurant_settings.batch_ordering_mode (calendar default, or manual). Scoped settings GET/PUT expose batch_ordering_mode; invalid values fail before persistence. Batch preview accepts the mode. Public/staff batch configs expose ordering_mode; manual mode returns empty opening/cutoff timestamps and uses the operational current series for dates and rotating-menu references. Manual admission bypasses only automatic intake clocks (weekly and pickup/delivery opening hours). orders_paused, rush mode, enabled services, restaurant ownership, test access, preparation, stock, payment and fulfillment-date validation remain authoritative. Entering manual mode clears a scheduled reopening while retaining the effective pause. Existing orders are not updated. Deploy API migration 277 before Admin/Web/POS; stage and verify all artifacts before production promotion.

<span id="series-stock-mode-conversion" />

## Convert current-series reservations

Existing series-stock routes accept transitions among count, measure and per_variant with expected_revision. Restock receives remaining quantity; Configure adds recalculated commitments, while carte preparation continues to use an initial allowance including commitments. The menu.edit scoped operation locks item stock and relevant orders/lines, converts their reserved_stock and counters, then records the journal in the same transaction. Commercial snapshots, ingredients, statuses and other series remain unchanged. Released reservations are converted without being committed again; produced food stays consumed. Inconsistent accounting or an unresolved historic size returns 422 stock_conversion_unavailable and rolls back the entire transaction. A concurrent lock or stale revision returns 409; explicitly reload and retry. Deploy this API before Admin offers mode changes on committed series. No additional migration or environment variable.

<span id="immediate-product-rule-confirmation" />

## Confirm a rule with stock

Staff POST /api/v1/menu/items/:id/sales-stock/availability and POST /api/v1/menu/items/:id/sales-stock/restock accept optional availability_rule_id. A positive value must identify a non-deleted rule owned by the authenticated restaurant; zero restores inheritance, and omission retains the assignment. The first route accepts a rule without override: no counters, commitments, forced state or other product fields are rewritten. With an override or stock adjustment, the whole request commits in one transaction under the reservation lock. A stale revision, foreign or deleted rule, or persistence error rolls back the entire request. Existing menu.edit and restaurant scoping remain; no new permission, route or migration. Deploy API before the Admin that saves the rule on Apply. A confirmed write followed by a failed read recovers by reloading rather than replaying stock. Omitted fields preserve existing clients.

<span id="explicit-recipe-stock-source" />

## Explicit stock source and reservations

Migration 279 adds stock_from_recipe to menu_items and item_stock_series, default false: existing configurations retain their behavior. POST /api/v1/menu/items/:id/sales-stock/restock with stock_source=recipe, empty mode and unit, null quantity and expected_revision actually selects recipe calculation. Optional availability_rule_id can commit in the same transaction under the stock/order lock. A conflict, foreign/deleted rule or error rolls back everything. Dormant manual counters and order snapshots are retained; new calculations and reservations ignore their limit. Returning to manual stock reactivates counters and adopts new orders without losing ingredient/preparation draws. Existing series conversions remain revision-checked and atomic. A global-counter conversion that cannot be proven from historical draws fails with stock_conversion_unavailable rather than reinterpreting them. Ready-stock sale must be disabled before selecting recipe stock. Public responses normalize inactive manual fields; staff receive stored_mode/stored_unit and recipe_configured for the editor. Other clients ignore added fields and retain their contracts. No permission or environment change. Deploy API before Admin, then promote the same development-verified artifacts. GET /api/v1/availability/items/:id/preview accepts optional serie_date to explain the displayed series; an invalid date returns 400. Details and status use the same active source and counters without mutation.

<span id="order-lifecycle-scoped-contract" />

## Scoped lifecycle and recovery contract

Lifecycle schema_version 1 keeps four independent axes, explicit scope and matching identities. Public reads contain only the requested Order. Check/session views are actual aggregates, not a representative batch copied across the scope. An absent field on an old server allows explicit legacy behavior; invalid or unavailable advertised data requires unknown/retry without a financial fallback. pending means payment is expected, not proof of an active attempt, and retains existing eligibility. A card authorization, actual active claim or uncertain operation journal retains its existing guards and resolution flow. Paid preparation does not reopen payment or the table. Drafts use secure storage isolated by account, restaurant, backend and installation. Deploy additive migration 280_check_submission_recovery_scope.sql before clients; retain the reference and food for explicit idempotent resumption, never automatic replay after restart. A financial merge requires reviewing the entire canonical bill before firing its food.

Admission of a new occupation without a canonical session sends start_if_free:true only after the boolean table_service_start_if_free capability. Verification and opening are atomic: if another visit appears after covers are chosen, 409 details.code=table_service_changed preserves the existing covers and session. An unavailable verification returns 503 table_service_unavailable; an unknown table remains 404. POS retains the draft, restores its prior selection and returns to floor-plan review instead of forcing the old context. Without the capability on an older API, the new guarded admission remains unavailable. The legacy contract without this flag or with false retains its behavior; it does not retroactively protect old clients. Deploy the API before the compatible POS.

<span id="personal-shift-end-preflight" />

## Verify the personal period before sign-out

Deploy the API before POS. GET /restaurants/:id/shifts/end-preflight is a personal JWT/restaurant-scoped read: direct schema_version:1 DTO with state ready/report_required/no_active_shift. shift_id is a required positive integer for ready/report_required and must be absent for no_active_shift. No contact, cash amount or device authorization is exposed. A historical reference may be expired/revoked/unlinked if it exists in the restaurant; this restores no cash access. Missing/foreign numeric reference returns409 shift_pos_reference_invalid; errors or ambiguity return503 shift_end_preflight_unavailable. A non-POS period with a nil reference retains its legitimate end.

The new client confirms ready then POSTs end with expected_shift_id; omitting the field preserves the legacy contract. Mutation relocks and rechecks the period and drawer: replacement/disappearance gives409 shift_changed, an open drawer409 cash_drawer_open, and an unconfirmed storage result on the new path503 shift_end_unavailable. Legacy errors expose no SQL detail. no_active_shift requires separate confirmation, a fresh personal GET and the same sign-in before local locking, without POST end. The local restaurant/backend cash journal retains priority; uncertain shift end keeps its dedicated GET current verification before another intent. Verifone journals remain separate. A missing route, unknown version/shape/state or error blocks without a financial fallback. No migration, enrollment or cash-binding change; no preliminary result bypasses mutation guards.

<span id="prepared-sumit-checkout-integration" />

## Prepared Sumit checkout integration

Local Sumit internal-checkout preparation adds restaurant-scoped capability, basket GET/POST and delivery-quote endpoints under /api/v1/public. The private receipt token is required for basket access. Staff creation requires orders.manage; hosted Admin card entry also requires payments.manage. The active provider and configured Sumit credentials are checked again before initiation. Recipient delivery quotes use server-resolved zones, fee, minimum and the retained service date; payment compares expected_total_minor to a fresh server total. One durable claim binds contacts and the provider URL. Uncertain creation stays blocked; expiry cancels through existing stock release. Deploy compatible API before Admin/Web and publish the coordinated guides. See the Sumit procedure.

<span id="order-lifecycle-v2-contract" />

## Additive order confirmation contract

The lifecycle v1 field is retained. Capability order_lifecycle_v2 advertises lifecycle_v2: explicit scoped reads, nullable amounts with currency/exponent and frozen policies. Handoff and closure operations recheck actor, restaurant, assignment, revision and units under locks and atomically journal the same request_id. GET operation confirms the original journal; absence remains unconfirmed and does not justify a new ID. Public responses contain only the own order, without parent scopes, private units or staff actions. Existing payment journals remain the sole monetary authority.

<span id="prepared-order-existing-cart" />

## Prepared basket and restaurant presentation

A private Sumit prepared-order link enters the restaurant’s existing cart, then its checkout with the published colors, fonts and fields. The personal browser basket is retained; prepared items, prices and date stay fixed. Contact details and requested answers belong to this order, without loading an account or saved card. Custom answers bind when payment first opens. Delivery fees are recalculated and reviewed before payment. See the [Sumit procedure](/en/help/orders/internal-sumit-checkout).

<span id="end-of-day-protocol" />

## Release the EOD contract before the POS

The end-of-day v1 contract and additive migration 284 add begin, current, ID read, terminal-result and finalize under /orders/end-of-day. Writes retain UUIDs and check restaurant, actor, physical authorization and installation. The end_of_day capability declares support without granting payment permission. The server transaction reserves the count and terminal identities; it contacts no provider. Dispatched precedes the native call, and an unknown outcome never becomes permission to transmit again. A durable confirmation may be recorded again with the same identity. Finalize atomically creates the immutable operational report and closes its reserved drawer without attendance or commercial closure. Release the API before the POS, validate development and promote the same artifacts. Current Ashrait callbacks justify no invented totals, batch number or fiscal certificate. Preserve old journals and permission/provenance checks. See docs/contracts/end-of-day-v1.json and public payments/end-of-day guidance.
