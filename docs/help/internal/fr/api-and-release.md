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

L’inventaire conserve routes, handlers et sources. Un fragment relatif à un groupe n’est pas une URL autonome. Validez entrées, rôles JWT et propriété restaurant ; les routes publiques de restaurant restent contextualisées. Synchronisez Go, TypeScript et Dart.

<span id="release" />

## Valider et promouvoir le même artefact

Utilisez une PR de fonctionnalité vers develop par dépôt, validez puis vérifiez l’artefact dev immuable. Promotion prod après autorisation humaine et vérification dev, sans reconstruction depuis main. Ne modifiez migrations appliquées ni vrais .env. Notez révisions et cibles de retour.

<span id="help" />

## Vérifier l’impact documentaire

Pour chaque comportement modifié, associez fonctions, mettez à jour FR/HE/EN et enregistrez les empreintes sources exactes. Une exception sans impact exige un motif concret relu. La CI rejette empreintes périmées, traductions absentes, nouvelles surfaces non classées et corpus IA divergent ; les métadonnées seules ne valident pas le produit.

<span id="whatsapp-media-contract" />

## Contrat des pièces jointes WhatsApp

Migration 262 et AutoMigrate ajoutent les fichiers immuables chiffrés par établissement, la sélection source/asset_id dans les références de modèles globales et de parcours, et les métadonnées de pièce jointe dans le journal. Les routes protégées /restaurants/:id/whatsapp/meta/media et /orders/:orderID/receipt.pdf appliquent restaurant, permissions et no-store. Le PDF utilise le Chrome isolé existant via CHROME_REMOTE_URL, sans nouvelle variable ni appel fiscal. La préparation ne contacte pas les endpoints d’envoi ; le transfert de média et l’envoi du modèle avec HEADER ont lieu après prise durable de la tentative. La révalidation porte sur l’appartenance, le type et l’empreinte du reçu relu ; aucune reprise d’un envoi incertain ni repli prestataire.

<span id="counter-terminal-payment-before-kitchen" />

## Attendre le paiement au comptoir avant la cuisine

L’encaissement par terminal au comptoir conserve une commande du restaurant avec payment_status=pending pour obtenir le montant canonique et une référence stable. Sa création retient le cycle cuisine, bloque l’envoi avant paiement et exclut les paiements en attente de la vue POS en direct. Seul l’accord du terminal permet l’enregistrement par le contrat staff existant ; le client envoie ensuite la commande payée en cuisine. Refus et annulations réutilisent la même commande/référence. Conservez le rapprochement des accords ; ne rejouez jamais un débit incertain. Déployez l’API correspondante avant le client POS. Les paiements hébergés, autorisations par restaurant et services à table volontairement envoyés avant paiement restent inchangés.
