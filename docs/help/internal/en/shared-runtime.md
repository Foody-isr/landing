---
title: Shared application runtime
description: >-
  Engineering only: shared authentication clients, state, localization, styling, proxies and platform bootstrap support
  the documented business modules.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-18'
featureId: shared-runtime
audience: internal
releaseStatus: available
---
Engineering only: shared authentication clients, state, localization, styling, proxies and platform bootstrap support the documented business modules.

<span id="classify" />

## Review shared source changes

Every source file is inventoried by exact digest. Files without a specific business selector are explicitly classified as shared runtime, not silently called customer features. A source change still requires an exact no-user-impact explanation or updated procedures. New screens and controls must be assigned to their business feature before release.
