---
title: Foody software billing pilot
description: Backoffice → Payments & devices → Foody billing (sandbox). Restaurant Admin → Settings → Account → Billing.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-19'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Backoffice → Payments & devices → Foody billing (sandbox). Restaurant Admin → Settings → Account → Billing.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

This procedure is for a coordinated sandbox test. A Foody superadmin configures the merchant and the offer. Only a current owner of that restaurant can accept it or start a checkout. A verified payment grants access to purchased modules for restaurants enrolled in modular billing. Existing restaurants keep their operating access. Sandbox payments issue no fiscal documents. Offer and price management in **Plans & modules** is also available in production, separately from this pilot. Publishing the catalogue does not enable payments, recurring charges or modular onboarding in production. Legacy onboarding remains available.

<span id="merchant" />

## Configure Foody’s own Verifone merchant

In **Foody billing (sandbox)** enter the Foody CST user ID, API key, entity and hosted Checkout contract. To test recurring payments, enter the No-CVV contract and reuse token scope. Enable sandbox checkout and monthly and annual recurring payments, then save. On the production site, select one **CST test restaurant** without modular billing enrollment. Selecting **None** disables testing there. Before switching restaurants, verify any pending payment and stop the active mandate in the current restaurant’s Admin. Saved credentials can be kept by leaving those fields blank.

<span id="offer" />

## Publish or revise a private offer

In **Restaurants → selected restaurant → Billing & modules → Private sandbox offer**, choose an **Offer source**. **Foody catalogue** lists the plans and modules used by **Quotes & orders**. Select one to preview its monthly and annual prices including VAT. **Finalized quotation** lists issued quotations linked to this restaurant. Select one to copy the agreed recurring amounts, VAT, terms and acceptance deadline. Review the first payment date, then choose **Publish offer**. The owner can now accept and pay in Foody Admin. **Custom offer** lets you enter negotiated amounts and VAT treatment. **Customize this offer** starts a custom draft from the current preview. Review both prices before publishing.

Standard monthly software has no minimum term. Annual prepayment covers 12 months for the price of 11 on software modules and plans: ILS 590/month becomes ILS 6,490/year excluding VAT, saving ILS 590. Additional licences, hardware, options and payment services do not receive this discount. Accepted offers, saved invitations and negotiated prices retain their agreed terms.

<span id="pay" />

## Pay and verify in sandbox

As the restaurant owner open **Settings → Account → Billing**. Select the offer and review the total including VAT. Monthly billing requires authorizing the displayed monthly debit. For annual billing, select the separate authorization to pay that amount every 12 months, or leave it unchecked to prepay just one year. Accept the terms, continue to Verifone with a CST test card, and verify the payment on return. Billing shows the next debit amount and date for a confirmed mandate. Use **Stop automatic renewal** to end future debits.

The hosted checkout uses the Foody CST merchant for subscription tests. In production, open the billing page for the test restaurant selected in Backoffice. A checkout that fails to open can appear as an incomplete payment. Check for a confirmed payment or a pending verification before starting again.

<span id="registered-card" />

## Pay the first instalment after card verification

Verifone CST can authorize ₪0.01 to register the card for a recurring subscription. Back in **Billing**, choose **Verify payment status**. Once Foody shows **Test card verified**, review the amount and choose **Pay … with the verified card** to pay the instalment. Foody starts the paid period after verifying a sale for the full amount. If verification is pending after you pay, use the status button. For a payment under review, give Foody the support reference. In Verifone Central, the card registration uses that merchant reference and the separate subscription sale uses the same reference with the suffix `-P1`.

<span id="renewal" />

## Test the first monthly renewal

After the initial payment and mandate are confirmed, open **Restaurants → selected restaurant → Billing & modules**. Choose **Test first monthly renewal** or **Tester le premier renouvellement annuel**, depending on the agreed cycle. Check the CST amount and period start, then confirm. A successful renewal adds one month or 12 months from the existing paid-through date. The early test is available once per mandate. If the result is pending or uncertain, use **Verify payment**.

<span id="measure" />

## Read observed usage

Open the observed usage section in Billing. It shows selected monthly UTC counters for Maps and Geoapify, SMS verification requests, WhatsApp order messages and supported OpenAI and Claude activity. The counters are partial and create no charge.

<span id="modular-provisioning" />

## Invite a new sandbox restaurant

In the development Backoffice open **Restaurants → Onboard New**. Enter the restaurant name, owner email, menu language and restaurant currency. Choose **Public catalogue** or **Custom offer**. The public catalogue uses the software rates published by Foody Landing in ILS per location per month excluding VAT. A custom offer records selected modules and extra named POS licences, the monthly price, optional annual price, VAT treatment and terms. Enable Trial, enter at least 14 days and select the modules the owner may test, or leave Trial disabled for payment during account setup. Send the invitation. Use **Resend invitation** if delivery fails.

<span id="modular-owner" />

## Activate a trial or pay from the invitation

Follow the invitation to confirm the account and open Billing for the specified restaurant. For a public offer, choose modules and review the monthly amount. For a private offer, review the agreed terms. Choose **Start my trial** when offered; the displayed end date starts from that confirmation and a retry keeps the original date. Billing remains available after expiry. Without a trial, the owner confirms the available payment cycle and terms to open hosted sandbox checkout. The application activates the paid scope after server verification. If the payment is pending, use the existing verification action. Monthly checkout requires the sandbox merchant’s recurring contract. Setup and equipment are quoted separately.

Standard monthly software has no minimum term. Annual prepayment covers 12 months for the price of 11 on software modules and plans: ILS 590/month becomes ILS 6,490/year excluding VAT, saving ILS 590. Additional licences, hardware, options and payment services do not receive this discount. Accepted offers, saved invitations and negotiated prices retain their agreed terms.

<span id="modular-access" />

## Review module access

Initial modules follow the public grid: Restaurant for POS and table service, Orders for the website and delivery, Kitchen for inventory and preparation. For a versioned offer, the published and then accepted composition defines accessible capabilities and quotas precisely. Role permissions remain necessary. A locked Admin page explains which offer includes the feature and invites the owner to Billing. Editing the catalogue does not rewrite accepted rights. Restaurants outside versioned onboarding keep their contract and existing checks.

<span id="commercial-licences" />

## Configure separate quotas and custom offers

In the reviewed grid, **Active POS devices** counts authorized order-taking devices: an iPad or a terminal running the POS. Restaurant and Restaurant + Online include 2 devices, Integral 3. Each employee keeps a personal account; **Personal POS accounts without a per-employee charge** removes the named POS limit and surcharge, while retaining chef, KDS and permission controls. A payment-only Mini does not consume a POS device; its EMV service is billed separately. Kitchen includes 1 chef and 1 KDS. In **Custom offer**, an explicit or automatic plan supplies its allowances; added licences are included in the entered custom amount. Total accounts and devices remain separate: blank means unlimited, zero means none. Existing trials and contracts retain their rights; there is no automatic migration.

The catalogue also previews an annual amount of 11 months for each module or plan. Editing a monthly price updates this preview; the annual rule is not a second price to enter. Enter agreed amounts explicitly in custom offers: existing private offers are never recalculated.

## If the operation fails

Use the displayed reference in Verifone Central if a payment requires review. Backoffice can verify a matching transaction by ID for an uncertain renewal. Verification does not initiate a new charge. A failed or expired attempt can be followed by a new checkout when eligible.
