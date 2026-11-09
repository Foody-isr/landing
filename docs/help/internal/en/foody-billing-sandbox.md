---
title: Foody software billing pilot
description: Development Backoffice → Foody billing · sandbox; restaurant Admin → Account → Billing.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-09'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Development Backoffice → Foody billing · sandbox; restaurant Admin → Account → Billing.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

This procedure is for a coordinated sandbox test. A Foody superadmin configures the merchant and publishes the offer. Only a current owner of that restaurant can accept it or start a checkout. Sandbox transactions do not alter operating access or issue fiscal documents.

<span id="merchant" />

## Configure Foody’s own Verifone merchant

In the development Backoffice open **Foody billing · sandbox**. Enter the sandbox user ID, API key, Foody entity ID and hosted Checkout contract. For monthly tests, also enter the No-CVV recurring contract and token scope, then enable monthly enrollment after Verifone confirms the contract. Enable sandbox payments and save. Saved credentials stay hidden; an empty field preserves its value.

<span id="offer" />

## Publish or revise a private offer

Open **Restaurants → selected restaurant → Billing → Foody private offer**. Enter the modules and licences, terms, monthly and annual ILS amounts, agreed VAT treatment and first payment date. Publish, then open the owner billing page. To edit, change the fields and publish a new version. An open checkout keeps its original price; a new offer needs owner consent for the next period.

<span id="pay" />

## Pay and verify in sandbox

Sign in as the restaurant owner and open **Account → Billing**. Check the total including VAT, select monthly or annual, and accept the offer. For monthly, also authorize future test debits. Continue to Verifone using its test card details. After returning, wait for confirmation or use **Verify payment status**. Annual renewal requires another checkout. To stop future monthly debits, choose **Stop automatic renewal** and confirm.

<span id="renewal" />

## Test the first monthly renewal

After a confirmed monthly test payment, return to **Foody private offer** in the development Backoffice and choose **Test first monthly renewal**. Confirm to send the next authorized monthly test debit to Verifone. A confirmed renewal covers the next period. Foody allows this test once per mandate, without waiting for the due date. If the result is uncertain, verify the current payment before taking another action.

<span id="measure" />

## Read observed usage

Open the observed usage section in Billing. It shows selected monthly UTC counters for Maps and Geoapify, SMS verification requests, WhatsApp order messages and supported OpenAI and Claude activity. The counters are partial and create no charge.

## If the operation fails

Use the displayed reference in Verifone Central if a payment requires review. Backoffice can verify a matching transaction by ID for an uncertain renewal. Verification does not initiate a new charge. A failed or expired attempt can be followed by a new checkout when eligible.
