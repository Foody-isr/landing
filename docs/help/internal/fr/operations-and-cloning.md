---
title: 'Opérations, infrastructure et clonage internes'
description: 'Opérateurs : Opérations, son guide, Serveurs et Clonage. Lisez les statuts avant toute mutation.'
apps: both
tags:
  - internal
  - backoffice-operations
updatedAt: '2026-10-18'
featureId: backoffice-operations
audience: internal
releaseStatus: available
---
Opérateurs : Opérations, son guide, Serveurs et Clonage. Lisez les statuts avant toute mutation.

<span id="status" />

## Examiner les statuts

Choisissez dev/prod et examinez horodatage, état opérationnel/dégradé/indisponible et erreurs. Actualiser ne déploie ni ne répare. Un ancien succès ne prouve pas la santé actuelle.

<span id="infra" />

## Vérifier les contrôles d’infrastructure

Lisez état, mode automatique/toujours actif, horaires, traduction et coûts avant démarrage/arrêt ou planning approuvé. Une action prod peut interrompre le service et exige autorisation humaine. Vérifiez résultat et signalez tout échec.

<span id="clone" />

## Prévisualiser un clonage avant import

Choisissez source/cible et groupes autorisés, exportez ce périmètre puis prévisualisez fichier et rapport. Examinez conflits et effets destructifs avant validation explicite. Gardez données exportées hors du dépôt d’aide ; aucun clonage prod pour tester le guide.
