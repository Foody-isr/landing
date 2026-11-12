---
title: Prepare a Wallet design and test it on iPhone
description: 'In Foody Admin, select the restaurant and open **Loyalty program → Wallet Studio**.'
apps: foodyadmin
tags:
  - customers
  - customers-wallet-studio
updatedAt: '2026-11-12'
featureId: customers-wallet-studio
audience: internal
releaseStatus: local-release-unverified
---
In Foody Admin, select the restaurant and open **Loyalty program → Wallet Studio**.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

Use an account with restaurant settings access. Saving a draft and generating an Apple test card require permission to edit settings. The iPhone test requires a loyalty program and an Apple Pass Type ID certificate with its matching key configured on the server.

<span id="save-design" />

## Save a private design

Set the background color and the Apple text color. Choose a logo and a banner in PNG or JPEG, up to 1 MB each. Switch between Apple Wallet and Google Wallet to check the cropping. Select **Save draft**. If another editor saved a newer draft, reload it before retrying.

<span id="apple-test" />

## Add a test card on iPhone

On the saved design, select **Generate an Apple test card**, then **Download .pkpass**. Open the file on an iPhone and select **Add**. Check the logo, banner, colors and Test card label. The pass shows sample progress and a demonstration QR. If signing is unavailable, check the Apple signing configuration for the environment. The Google tab previews the artwork.
