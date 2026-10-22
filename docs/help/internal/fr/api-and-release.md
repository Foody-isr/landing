---
title: Contrats API et opérations de livraison
description: 'Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-18'
featureId: platform-api
audience: internal
releaseStatus: available
---
Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.

<span id="contracts" />

## Maintenir les contrats API contextualisés

L’inventaire conserve routes, handlers et sources. Un fragment relatif à un groupe n’est pas une URL autonome. Validez entrées, rôles JWT et propriété restaurant ; les routes publiques de restaurant restent contextualisées. Synchronisez Go, TypeScript et Dart. Les informations client par traitement nécessitent la capability de réglages `pos_fulfillment_customer_information_supported` et `customer_information` pour l’envoi groupé. Préservez un flag omis par ID stable ; false explicite le désactive. Validez et incluez atomiquement customer_name/customer_phone/delivery_notes/delivery_apt/custom_fields dans l’empreinte d’idempotence. Les lots suivants héritent seulement de coordonnées cohérentes ; clients mixtes et additions fractionnées refusent un remplacement. La création groupée supprime les confirmations client par service sans supprimer événements cuisine/équipe ni notifications de statut indépendantes. Aucun test ne doit envoyer de notification réelle.

<span id="release" />

## Valider et promouvoir le même artefact

Utilisez une PR de fonctionnalité vers develop par dépôt, validez puis vérifiez l’artefact dev immuable. Promotion prod après autorisation humaine et vérification dev, sans reconstruction depuis main. Ne modifiez migrations appliquées ni vrais .env. Notez révisions et cibles de retour.

<span id="help" />

## Vérifier l’impact documentaire

Pour chaque comportement modifié, associez fonctions, mettez à jour FR/HE/EN et enregistrez les empreintes sources exactes. Une exception sans impact exige un motif concret relu. La CI rejette empreintes périmées, traductions absentes, nouvelles surfaces non classées et corpus IA divergent ; les métadonnées seules ne valident pas le produit.
