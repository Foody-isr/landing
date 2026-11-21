---
title: 'Internal operations, infrastructure and cloning'
description: 'Backoffice → Platform → Operations, Servers or Clone data. Check service status before taking action.'
apps: both
tags:
  - internal
  - backoffice-operations
updatedAt: '2026-11-15'
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
