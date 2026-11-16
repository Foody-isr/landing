---
title: 'Internal features, subscriptions and payment settings'
description: 'Open the restaurant’s Features, Billing or Payment tab. Find the shared Cibus settings under Payments & devices.'
apps: both
tags:
  - internal
  - backoffice-entitlements
updatedAt: '2026-11-16'
featureId: backoffice-entitlements
audience: internal
releaseStatus: available
---
In Foody Backoffice, open Payments & devices → Plans & modules for public rates or select a restaurant to see Billing & modules and Features & access.

<span id="backoffice-restaurant-subscription" />

## Find a restaurant’s subscription and current access

Open **Restaurants** and select the restaurant. **Billing & modules** opens first. In the development modular pilot, check the offer, billing status, modules in the offer, active modules, licences and trial date or paid period when available. Choose **Features & access** to see the active and locked flags. For an existing restaurant, check the **Legacy subscription** and any **Private sandbox offer**. **Features & access** shows its existing toggles and tier settings.

<span id="verifone-admin-money-operations" />

## Refund or void a Verifone online payment

The Admin order payment section supports total or partial matched refunds and total VOID for an eligible single Verifone online payment, for owners/managers with payments.manage. Provider state, captured amount and verified history govern eligibility, not a fixed 24-hour rule. This does not cancel preparation or fulfillment and does not add a POS terminal refund button. Unknown results stay reserved and must be checked, never resubmitted. Invoice4U credit/cancellation documents require a separate check. See [the online payment procedure](/en/help/payments/how-payments-work#verifone-admin-refund-void).

A captured ABS sale still AUTHORISED/AUTHORIZED or SETTLEMENT_REQUESTED is not settled: Admin shows Available to void and only Void entire payment, with no prior refund. Refund payment and Available to refund require an explicit settled state or verified partially-refunded history. Generic APPROVED/COMPLETED, contradictory states or missing evidence offer neither action. A state change before confirmation rejects the stale action; it never switches VOID to REFUND automatically. Request rejected by Verifone means no return of funds is confirmed, not necessarily an issuer decline.

After a full return verified against matched Verifone history, the summary keeps the original amount, shows the full amount returned and zero remaining, and offers no further refund or VOID. A cleared capture balance after that return is not an uncaptured hold to release. Missing or inconsistent evidence still requires verification without resubmission.

<span id="verifone-readable-hosted-theme" />

## Keep the hosted payment form readable

A superadmin opens Restaurant > Payment > Verifone in Backoffice and saves payment settings before choosing Synchronize published logo and colors. Synchronization uses only the published logo and selected button/brand accent. The synchronized HPP theme uses a light page, white panels and dark text; pale accents are darkened for at least 4.5:1 contrast on the page and panels. After the contrast-policy API release is installed, resynchronize previously enabled restaurants in the approved environment; the old snapshot is marked outdated. Verify logo, entered digits, labels, errors and payment icons, including mobile and French/Hebrew/English, without submitting an unapproved transaction. Website colors and native wallet sheets are unchanged. The new restaurant-specific theme is not the organization default and applies only to newly issued Checkout links. Existing links and financial state are unchanged; verify payment status before any retry. Never bulk-update production without approval.

<span id="link-verifone-central-theme" />

## Link a Checkout theme from Verifone Central

In Verifone Central, open Administration > Checkout Themes and save a theme for the restaurant’s Verifone organization and environment (CST or production). As a superadmin, open Restaurant > Payment > Verifone in Backoffice and save the payment configuration. Under Hosted payment page appearance, enter the exact name or UUID in Verifone theme name or ID, then choose Link Verifone theme. If several themes have the same name, enter the UUID. Foody verifies the organization and environment and applies the selected theme to new Checkout links. To edit the theme, save your changes in Verifone Central and check the appearance on a new test link in the approved environment. To use the Verifone account default, clear Use the selected Checkout theme and save the payment configuration.

<span id="configure-verifone-cst-card-form" />

## Configure the Foody card form for CST

For an approved CST test, open the restaurant in Backoffice as a superadmin and select Payment, Verifone and CST Sandbox. In Card form in Foody, enter the Public key alias and paste the Public key issued for that Verifone organization. Enable the form and save. Use the restaurant’s pickup or delivery checkout for a prepaid, fixed-price order in ILS. Enter a Verifone test card in Foody. The order confirmation shows the payment status and offers a new card entry after a verified decline. Wait for verification if the status is pending. Switch the form off before leaving CST. Enter the matching pair when changing the organization, environment or alias. To discard a saved public key, select Remove the saved public key on save. The form is currently available for CST tests.

<span id="configure-verifone-direct-wallets" />

## Configure Apple Pay and Google Pay in Foody

In Backoffice, open the restaurant’s Payment settings as a superadmin and select Verifone and the correct environment. In Wallets in the Foody checkout, enter the contracts Verifone assigned for eComm wallet payments. For Apple Pay, enable Apple Pay for Web via direct API in Verifone Central. Save the exact HTTPS checkout hostname and the association file with the Foody switch off. Verify the domain in Verifone Central before switching on direct Apple Pay. For Google Pay, enter the gateway merchant ID given by Verifone and the Google merchant ID approved for production. Enable each wallet independently and save. Use an eligible fixed-price ILS pickup or delivery order and confirm payment status on the order page. For Invoice4U, verify the full receipt in acceptance testing. Detailed Invoice4U invoices use the existing payment methods. Switch the wallets off before changing environment or organization and save the new merchant’s settings.

<span id="entitlements" />

## Review feature and plan assignments

Open the restaurant’s **Billing & modules** to review the agreed terms and current scope. For legacy contracts, compare the tier and manual flags in **Features & access** with the customer agreement before making an authorized change. For a modular sandbox restaurant, the trial or verified agreement controls the displayed flags.

<span id="providers" />

## Configure payment infrastructure

Use protected provider/Cibus/hosted-wallet settings only for the approved environment and merchant. Validate supported branding and capability fields without exposing credentials. Payment/webhook/invoice changes require cross-service and security review before release.

<span id="external-api-allocation" />

## Allocate external-service allowances

As superadmin open Usage and quotas to compare restaurants, select a service, then Review allocation. The restaurant detail page also links here. Enter whole monthly limits; zero pauses a service. Supply a reason and Save allocation. Use default allowances only prepares initial values in the form and still requires saving. Changes never reset usage or bypass provider protection. Each change is audited with actor and reason. After an unconfirmed save or conflict, explicitly reload the current allocation before retrying; inputs remain until you reload. Leaving with changes warns before discarding them. Environments retain their own restaurant counters while the shared Google budget continues protecting the global account.

<span id="prepared-sumit-checkout-integration" />

## Prepared Sumit checkout integration

The prepared internal-order Sumit capability derives from the restaurant’s active provider and valid configured credentials. It adds no plan switch or onboarding control. A provider change disables opening these pending checkouts; it never silently sends them to another processor. Coordinate the API/Admin/Web rollout and the new Sumit guide.

<span id="cibus-platform-settings" />

## Review shared Cibus settings

Confirm the API label, then open **Payments & devices → Cibus (Pluxee)**. Use **Retry** if the current settings fail to load. For an approved update, verify the Cibus environment and endpoint, enter any new integrator credentials supplied by Cibus, and choose **Save Cibus settings**. Check the saved confirmation. Maintain each restaurant’s terminal identifiers in Foody Admin.

<span id="backoffice-software-catalogue" />

## Edit plans, modules and prices

In the development Backoffice open **Plans & modules**. In **Modules**, select a module and edit its monthly price excluding VAT, included quantities and checked features. Features are categorized and individually searchable. Respect the displayed dependencies. In **Plans**, create a plan and choose its modules, price, own quotas, added or excluded features and public visibility. Enter French, English and Hebrew names. **All prices** contains setup, equipment, licence and service rates: blank means quotation, zero means included; a quantity row represents an allowance, not a price. **Review changes**, then **Publish new version** publish a new revision. A version conflict retains the draft; reload and reapply your changes. Pricing reads its environment’s catalogue and may cache it for one minute. Accepted contracts, pending payments, existing invitations and configured trials keep their version.

To prepare the November 16 grid, choose **Load reviewed software offers**. This loads the three modules, duo and Integral into the draft and opens review; it does not publish. Existing equipment, setup and payment rates and other custom plans are retained. Check ILS 590 / 590 / 890, 990 for the duo, 1,790 for Integral and 149 per additional device. **Personal POS accounts without a per-employee charge** distinguishes these offers from historical named licences. **Automatic** allows a cheaper plan for exactly the same modules without reducing features or quotas; **Recommended** highlights it. Review changes before publishing. Publication changes no existing contract or saved quotation.

<span id="commercial-documents-entry" />

## Prepare commercial documents

In the sandbox version of **Plans & modules**, open **Quotes & orders** to compose PDF quotations and orders using plans, modules, equipment and fees. This flow preserves existing contracts. Consult the internal Foody quotations and sales orders procedure for issuer setup, schedules, separate totals and PDF finalization.
