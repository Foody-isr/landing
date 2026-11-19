---
title: Internal access and dashboard
description: >-
  Internal Foody operators only. Open Backoffice in the intended environment and authenticate with an authorized
  account.
apps: both
tags:
  - internal
  - backoffice-access
updatedAt: '2026-11-19'
featureId: backoffice-access
audience: internal
releaseStatus: available
---
Internal Foody operators only. Open Backoffice in the intended environment and authenticate with an authorized account.

<span id="access" />

## Verify operator scope

Confirm environment and operator role before accessing restaurant data. Do not use a restaurant owner account as an implicit superadmin. Log out from shared devices and never copy credentials or customer records into the help catalogue. Sign in again after the browser session update. Allow cookies for Backoffice and the Foody API, complete the requested second factor, and sign out when finished. An account for another environment must authenticate there separately.

<span id="dashboard" />

## Read platform totals

Review dashboard totals and navigate to the specific restaurant/user record for investigation. Treat aggregates as operational observations, not as customer testimonials or proof of individual payment settlement. Use **Retry subscriptions** if the overdue subscriptions report cannot load.

<span id="related-service-controls" />

## Access the new controls

Usage and quotas compares service consumption across restaurants. Review allocation and the restaurant-detail link open monthly limits; saving requires a reason and preserves all counters. These controls are superadmin-only and separate from the storefront sign-in preference.

On compatible versions, Terminal fleet is also restricted to Foody superadmins. It lists devices across restaurants; entered DID/SHVA numbers and supplier remain audited declarations, not applied bank configuration.

For subscription support, open **Plans & modules** in the sidebar for the public software catalogue. Open a restaurant to find **Billing & modules** and **Features & access**.

<span id="navigation" />

## Find a Backoffice tool

Check the API label below Foody Backoffice, then use **Management** for restaurants and users, **Payments & devices** for billing tests, terminal fleet and Cibus, **POS content** for ingredient icons and the POS sign-in screen, or **Platform** for usage, operations, servers and cloning. On smaller screens, choose **Open navigation**. Wide tables scroll horizontally.

<span id="connection-security" />

## Authenticator and connection journal

After coordinated activation, superadmins must complete the authenticator prompt for Backoffice and for a separate development-environment sign-in during cloning. Account security allows replacement after a fresh sign-in and current password. The connection journal requires a superadmin session verified with MFA, a time interval of at most 31 days and at most 1,000 entries; narrow the interval if asked. Viewing records is itself audited. Data are decrypted only for this authorized display; never paste records into support chat. Retention is at least 12 calendar months. Production keys, backups and alert delivery must be provisioned and tested before claiming operational compliance.
