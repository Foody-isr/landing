---
title: API contracts and release operations
description: 'Engineering operators: use the closest service AGENTS.md, README, API contract and deployment workflow.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-18'
featureId: platform-api
audience: internal
releaseStatus: available
---
Engineering operators: use the closest service AGENTS.md, README, API contract and deployment workflow.

<span id="contracts" />

## Maintain scoped API contracts

The inventory records each route registration, handler and source location. Group-relative fragments are not standalone URLs. Validate inputs, JWT roles and restaurant ownership at boundaries; public restaurant endpoints still need explicit scope. Update Go, TypeScript and Dart consumers when contracts change.

<span id="release" />

## Validate and promote the same artifact

Use one feature PR into develop per affected repository, complete validations, then verify the immutable development artifact. Production promotion requires human authorization and development verification; do not rebuild from main. Never modify applied migrations or real .env files. Record release/corpus revisions and rollback targets.

<span id="help" />

## Review documentation impact

For every changed behavior, map affected features, update French/Hebrew/English procedures and record exact source hashes. A no-user-impact exception needs a concrete reviewed reason. CI must reject stale hashes, missing translations, unmapped new surfaces and mismatched embedded AI corpus; passing metadata checks alone does not validate product behavior.
