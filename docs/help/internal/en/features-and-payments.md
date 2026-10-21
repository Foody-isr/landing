---
title: 'Internal features, subscriptions and payment settings'
description: 'Internal Foody operators: open Features or the restaurant’s subscription/payment controls.'
apps: both
tags:
  - internal
  - backoffice-entitlements
updatedAt: '2026-10-21'
featureId: backoffice-entitlements
audience: internal
releaseStatus: available
---
Internal Foody operators: open Features or the restaurant’s subscription/payment controls.

<span id="verifone-admin-money-operations" />

## Refund or void a Verifone online payment

The Admin order payment section supports total or partial matched refunds and total VOID for an eligible single Verifone online payment, for owners/managers with payments.manage. Provider state, captured amount and verified history govern eligibility, not a fixed 24-hour rule. This does not cancel preparation or fulfillment and does not add a POS terminal refund button. Unknown results stay reserved and must be checked, never resubmitted. Invoice4U credit/cancellation documents require a separate check. See [the online payment procedure](/en/help/payments/how-payments-work#verifone-admin-refund-void).

A captured ABS sale still AUTHORISED/AUTHORIZED or SETTLEMENT_REQUESTED is not settled: Admin shows Available to void and only Void entire payment, with no prior refund. Refund payment and Available to refund require an explicit settled state or verified partially-refunded history. Generic APPROVED/COMPLETED, contradictory states or missing evidence offer neither action. A state change before confirmation rejects the stale action; it never switches VOID to REFUND automatically. Request rejected by Verifone means no return of funds is confirmed, not necessarily an issuer decline.

After a full return verified against matched Verifone history, the summary keeps the original amount, shows the full amount returned and zero remaining, and offers no further refund or VOID. A cleared capture balance after that return is not an uncaptured hold to release. Missing or inconsistent evidence still requires verification without resubmission.

<span id="verifone-readable-hosted-theme" />

## Keep the hosted payment form readable

A superadmin opens Restaurant > Payment > Verifone in Backoffice and saves payment settings before choosing Synchronize published logo and colors. Synchronization uses only the published logo and selected button/brand accent. HPP always uses a light page, white panels and dark text; pale accents are darkened for at least 4.5:1 contrast on the page and panels. After the contrast-policy API release is installed, resynchronize previously enabled restaurants in the approved environment; the old snapshot is marked outdated. Verify logo, entered digits, labels, errors and payment icons, including mobile and French/Hebrew/English, without submitting an unapproved transaction. Website colors and native wallet sheets are unchanged. The new restaurant-specific theme is not the organization default and applies only to newly issued Checkout links. Existing links and financial state are unchanged; verify payment status before any retry. Never bulk-update production without approval.

<span id="entitlements" />

## Review feature and plan assignments

Compare technical feature/plan identifiers with the approved customer contract. Legacy technical names and internal price fields are not authoritative public offers. Confirm the target restaurant before an authorized entitlement change.

<span id="providers" />

## Configure payment infrastructure

Use protected provider/Cibus/hosted-wallet settings only for the approved environment and merchant. Validate supported branding and capability fields without exposing credentials. Payment/webhook/invoice changes require cross-service and security review before release.

<span id="external-api-allocation" />

## Allocate external-service allowances

As superadmin open Usage and quotas to compare restaurants, select a service, then Review allocation. The restaurant detail page also links here. Enter whole monthly limits; zero pauses a service. Supply a reason and Save allocation. Use default allowances only prepares initial values in the form and still requires saving. Changes never reset usage or bypass provider protection. Each change is audited with actor and reason. After an unconfirmed save or conflict, explicitly reload the current allocation before retrying; inputs remain until you reload. Leaving with changes warns before discarding them. Environments retain their own restaurant counters while the shared Google budget continues protecting the global account.
