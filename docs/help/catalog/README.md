# Auditable feature catalogue

Feature definitions contain a stable ID, module/topic, three-language titles,
source selectors, audience, activation limits and actionable operations. Each
operation has a stable anchor and authored instructions in English, French and
Hebrew. Source-derived routes, API handlers, settings and UI controls are retained
in inventory.json for traceability; they are not customer navigation labels.

Procedure text is authored in features.json; render-help-guides.mjs produces public MDX under src/content/help. Inventory generation
must not silently mark a source-only or unclassified feature as documented.
Internal operator procedures stay under docs/help/internal and are excluded from
the public search and AI corpus.
