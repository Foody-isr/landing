---
title: Foody software billing pilot
description: >-
  Development Backoffice → Payments & devices → Foody billing (sandbox). restaurant Admin → Settings → Account →
  Billing.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-16'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Development Backoffice → Payments & devices → Foody billing (sandbox). restaurant Admin → Settings → Account → Billing.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

This procedure is for a coordinated sandbox test. A Foody superadmin configures the merchant and the offer. Only a current owner of that restaurant can accept it or start a checkout. A verified payment grants access to purchased modules for restaurants enrolled in modular billing. Existing restaurants keep their operating access. Sandbox payments issue no fiscal documents.

<span id="merchant" />

## Configure Foody’s own Verifone merchant

In the development Backoffice open **Payments & devices → Foody billing (sandbox)**. Enter the sandbox user ID, API key, Foody entity ID and hosted Checkout contract. For monthly tests, also enter the No-CVV recurring contract and token scope, then enable monthly enrollment after Verifone confirms the contract. Enable sandbox payments and save. Saved credentials stay hidden; an empty field preserves its value.

<span id="offer" />

## Publish or revise a private offer

For an existing restaurant, open **Restaurants → selected restaurant → Billing & modules → Private sandbox offer**. Enter an offer description, terms, monthly and annual ILS amounts, agreed VAT treatment and the first payment date. Publish, then open the owner billing page. To change the offer, edit the fields and publish a new version. A checkout already in progress keeps its original price. The new offer requires the owner’s agreement for the next period.

<span id="pay" />

## Pay and verify in sandbox

Sign in as the restaurant owner and open **Settings → Account → Billing**. The link appears for the restaurant owner after Foody publishes a private offer. Check the total including VAT, select monthly or annual, and accept the offer. For monthly, also authorize future test debits. Continue to Verifone using its test card details. After returning, wait for confirmation or use **Verify payment status**. Annual renewal requires another checkout. To stop future monthly debits, choose **Stop automatic renewal** and confirm.

<span id="renewal" />

## Test the first monthly renewal

After a confirmed monthly test payment, return to **Private sandbox offer** in the development Backoffice and choose **Test first monthly renewal**. Confirm to send the next authorized monthly test debit to Verifone. A confirmed renewal covers the next period. Foody allows this test once per mandate, without waiting for the due date. If the result is uncertain, verify the current payment before taking another action.

<span id="measure" />

## Read observed usage

Open the observed usage section in Billing. It shows selected monthly UTC counters for Maps and Geoapify, SMS verification requests, WhatsApp order messages and supported OpenAI and Claude activity. The counters are partial and create no charge.

<span id="modular-provisioning" />

## Invite a new sandbox restaurant

In the development Backoffice open **Restaurants → Onboard New**. Enter the restaurant name, owner email, menu language and restaurant currency. Choose **Public catalogue** or **Custom offer**. The public catalogue uses the software rates published by Foody Landing in ILS per location per month excluding VAT. A custom offer records selected modules and extra named POS licences, the monthly price, optional annual price, VAT treatment and terms. Enable Trial, enter at least 14 days and select the modules the owner may test, or leave Trial disabled for payment during account setup. Send the invitation. Use **Resend invitation** if delivery fails.

<span id="modular-owner" />

## Activate a trial or pay from the invitation

Follow the invitation to confirm the account and open Billing for the specified restaurant. For a public offer, choose modules and review the monthly amount. For a private offer, review the agreed terms. Choose **Start my trial** when offered; the displayed end date starts from that confirmation and a retry keeps the original date. Billing remains available after expiry. Without a trial, the owner confirms the available payment cycle and terms to open hosted sandbox checkout. The application activates the paid scope after server verification. If the payment is pending, use the existing verification action. Monthly checkout requires the sandbox merchant’s recurring contract. Setup and equipment are quoted separately.

<span id="modular-access" />

## Review module access

Initial modules follow the public grid: Restaurant for POS and table service, Orders for the website and delivery, Kitchen for inventory and preparation. For a versioned offer, the published and then accepted composition defines accessible capabilities and quotas precisely. Role permissions remain necessary. A locked Admin page explains which offer includes the feature and invites the owner to Billing. Editing the catalogue does not rewrite accepted rights. Restaurants outside versioned onboarding keep their contract and existing checks.

<span id="commercial-licences" />

## Configure separate quotas and custom offers

In the reviewed grid, **Active POS devices** counts authorized order-taking devices: an iPad or a terminal running the POS. Restaurant and Restaurant + Orders include 2 devices, Integral 3. Each employee keeps a personal account; **Personal POS accounts without a per-employee charge** removes the named POS limit and surcharge, while retaining chef, KDS and permission controls. A payment-only Mini does not consume a POS device; its EMV service is billed separately. Kitchen includes 1 chef and 1 KDS. In **Custom offer**, an explicit or automatic plan supplies its allowances; added licences are included in the entered custom amount. Total accounts and devices remain separate: blank means unlimited, zero means none. Existing trials and contracts retain their rights; there is no automatic migration.

## If the operation fails

Use the displayed reference in Verifone Central if a payment requires review. Backoffice can verify a matching transaction by ID for an uncertain renewal. Verification does not initiate a new charge. A failed or expired attempt can be followed by a new checkout when eligible.
