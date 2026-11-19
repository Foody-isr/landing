---
title: 'Prepare, test and publish a loyalty card'
description: 'In Foody Admin, select the restaurant and open **Loyalty program → Wallet Studio**.'
apps: foodyadmin
tags:
  - customers
  - customers-wallet-studio
updatedAt: '2026-11-19'
featureId: customers-wallet-studio
audience: internal
releaseStatus: local-release-unverified
---
In Foody Admin, choose the restaurant and open **Customers → Loyalty program → Wallet Studio**.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

Use an account with access to restaurant settings. Saving, testing and publishing require permission to edit settings. The Apple test requires a loyalty program and a configured Apple Pass Type ID certificate and key. For the customer pilot, also enable the Wallet API and the intended provider in the test environment.

<span id="save-design" />

## Save a private design

Set the background and Apple text colors. Choose a PNG, JPEG or WebP logo and banner, each up to 10 MB. The Studio resizes them before saving. Keep the main subject near the center and check its crop in both previews. Turn off **Show restaurant name** to remove the name beside the Apple logo. Google keeps the program title. If an image cannot be opened, the message under the picker explains what to change. Select **Save draft**. If another editor saved a newer draft, reload it before retrying.

<span id="apple-test" />

## Add a test card on iPhone

On the saved design, select **Generate an Apple test card**, then **Download .pkpass**. Open the file on an iPhone and select **Add**. Check the logo, banner, colors and Test card label. The pass shows sample progress and a demonstration QR. If signing is unavailable, check the Apple signing configuration for the environment. The Google tab previews the artwork. Check the Powered by Foody caption near the QR code. Open the card details to follow the Foody link.

<span id="publish-design" />

## Publish the card design and share enrollment

Activate the loyalty program for the pilot restaurant. Under **Customer card**, select **Publish card design** to apply the saved artwork. A later draft must be published separately. Select **Copy enrollment link** to share the restaurant’s loyalty page. If publication reports a conflict, reload the Studio and review the saved design.

<span id="member-card" />

## Join, add the personal card and test earning

On a phone, open the enrollment link, sign in, accept the terms and join. On an iPhone, select **Add your card to Apple Wallet**, then **Add** in Wallet. An enabled Google provider offers an **Add to Google Wallet** button and opens Google for confirmation. Repeat the download from the same account and check the QR and progress. Place an eligible paid test order with that account and check that the Wallet card and the loyalty page reflect the same progress. For a POS pilot with lookup and loyalty sales enabled, scan the personal QR and attach the member before confirming payment. At the threshold, check the reward in the member’s loyalty account and try applying it on an enabled checkout.
