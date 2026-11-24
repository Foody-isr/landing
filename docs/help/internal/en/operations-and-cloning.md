---
title: 'Internal operations, infrastructure and cloning'
description: 'Backoffice → Platform → Operations, Servers or Clone data. Check service status before taking action.'
apps: both
tags:
  - internal
  - backoffice-operations
updatedAt: '2026-11-24'
featureId: backoffice-operations
audience: internal
releaseStatus: available
---
Backoffice → Platform → Operations, Servers or Clone data. Check service status before taking action.

<span id="status" />

## Inspect service status

Choose development or production and inspect checked-at timestamps, operational/degraded/down status and errors. Read-only refresh does not deploy or repair a service. Do not interpret an old successful check as current health. If the status endpoint fails, the summary shows **Status checks unavailable**. Use **Check now** to retry.

<span id="infra" />

## Review infrastructure controls

Read instance state, auto/always-on mode, hours, translation toggle and cost data before any approved start/stop or schedule change. A production action can interrupt service and requires the applicable human authorization. Check the resulting state and report failure explicitly.

<span id="clone" />

## Preview a clone before import

Choose source/target and allowed data clusters, export only the authorized scope, then preview the selected import file and report. Review conflicts and destructive effects before explicit commit. Keep exported restaurant/customer data outside the help repository and never run a production clone merely to test this guide.

<span id="refresh-development-data" />

## Restore a reviewed production snapshot in development

Have an operator stage an anonymized production snapshot compatible with the development schema. Sign in to development Backoffice as a superadmin with MFA. Open Clone data, choose Refresh status, and check the capture time and the restaurant, order, payment and website counts. Type REPLACE DEVELOPMENT DATA to confirm whole-database replacement. Expect a brief interruption while development switches databases. Reopen Clone data to check the result. If the worker is disabled or no reviewed snapshot is ready, ask the development operator to provision or stage it. The previous development database is retained for recovery.

<span id="check-development-google-delivery" />

## Check Google Maps in development delivery

After the operator enables the development server’s Google configuration, use a synthetic address in a test restaurant. Check suggestions, selecting a full address, a short route and the dispatch map. For guest checkout, publish Address autocomplete on the development website and verify a suggestion before placing any sandbox order. If suggestions or the map are unavailable, ask the operator to check the API restrictions and quota for the development credentials.
