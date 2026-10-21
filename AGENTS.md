# AGENTS.md — foodylanding

Read the workspace AGENTS.md, README.md and docs/help/MAINTENANCE.md before changes.

- Preserve the existing Next.js help URLs and Foody brand. Author procedures in docs/help/catalog/features.json and render public help into src/content/help. Internal guides remain outside the public corpus.
- Every user-visible product change requires a help impact review, updated affected procedures and translations, or a concrete no-user-impact explanation.
- Use docs/help/inventory.json, the authored catalogue and scripts/check-help-contract.mjs. Regenerate exact source contracts; CI must reject stale hashes and missing FR/HE/EN guides.
- Validate actual product behavior before writing procedures. Do not claim disabled payment providers, unreleased features, universal permissions, guaranteed support hours or certifications.
- Keep search and AI grounded in the same published corpus. Never manually edit the generated manifest or add restaurant tools to the support assistant.
- AI keys and Redis belong only to the API service. Questions and provider errors must not be logged. Production rate limiting fails closed.
- Run npm run test:help, npm run lint, npx tsc --noEmit and npm run build before final delivery. prebuild validates help metadata/links and rebuilds the index.
- Never modify real .env files or deploy/commit/push without the authorization required by the workspace rules.
