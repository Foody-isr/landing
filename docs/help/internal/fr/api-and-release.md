---
title: Contrats API et opérations de livraison
description: 'Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-19'
featureId: platform-api
audience: internal
releaseStatus: available
---
Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.

<span id="verifone-readable-hosted-theme" />

## Garder la page de paiement lisible

Un superadmin ouvre Restaurant > Payment > Verifone dans Backoffice et enregistre les réglages de paiement avant de choisir Synchronize published logo and colors. La synchronisation utilise uniquement le logo publié et la couleur de marque ou du bouton sélectionné. HPP utilise toujours une page claire, des panneaux blancs et du texte foncé ; les couleurs trop pâles sont assombries pour atteindre au moins 4,5:1 de contraste sur la page et les panneaux. Après installation de la version API avec cette règle de contraste, resynchronisez les restaurants déjà activés dans l’environnement autorisé ; l’ancien thème est signalé comme obsolète. Vérifiez le logo, les chiffres saisis, les labels, les erreurs et les icônes, sur mobile et en français, hébreu et anglais, sans soumettre de transaction non autorisée. Les couleurs du site et les fenêtres natives des wallets restent inchangées. Le nouveau thème propre au restaurant ne devient pas le thème par défaut de l’organisation et ne concerne que les nouveaux liens Checkout. Les liens existants et l’état financier sont conservés ; vérifiez le paiement avant toute nouvelle tentative. Aucune mise à jour groupée de production sans autorisation.

<span id="weight-hold-margin" />

## Vérifier le plafond de préautorisation au poids

Le champ public expected_hold_amount_minor est vérifié contre les lignes serveur et la marge du restaurant dans la transaction de création ; un écart annule la commande avant stock/prestataire. Le serveur écrit weight_hold_amount_minor et weight_hold_buffer_percent sans faire confiance aux external_metadata invitées ; le resolver conserve ce plafond ou HoldAmount existant. Les réglages acceptent des valeurs finies de 0 à 100 ; l’omission les préserve et le défaut reste 20. Restaurant public et réglages protégés exposent cette politique sans secret. TypeScript n’invente pas de marge inconnue. Les messages FR/HE/EN héritent du thème. Aucun changement de schéma, clé prestataire ou client POS.

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

<span id="internal-combo-substitution-contract" />

## Faire une exception de formule sur une commande

Les exceptions internes de formule utilisent is_substitution par choix. Seuls les handlers JWT du personnel avec orders.manage dans le restaurant définissent l’autorité AllowSubstitutions non liée au JSON ; les appels publics et créations de service sans autorité sont refusés. La migration 264 ajoute le marqueur combo_substitution des lignes, faux par défaut. L’API vérifie appartenance au restaurant, article individuel actif à prix fixe, appartenance et activation du format, portions imposées, quantités et limites par format/article, puis les gardes de stock. Le remplacement porte un delta nul et aucun supplément de modificateur fixe de l’étape. La définition reste intacte ; la recomposition conserve le prix de base historique et s’annule entièrement en cas d’échec. Les brouillons, l’édition et les textes FR/HE/EN Admin conservent le marqueur. Les contrats de réponse Web et Dart acceptent cet ajout sans contrôle d’exception client ou POS. Déployer API et migration avant Admin ; publier l’aide et le corpus intégré sur la même révision revue.

<span id="counter-terminal-payment-before-kitchen" />

## Attendre le paiement au comptoir avant la cuisine

L’encaissement par terminal au comptoir conserve une commande du restaurant avec payment_status=pending pour obtenir le montant canonique et une référence stable. Sa création retient le cycle cuisine, bloque l’envoi avant paiement et exclut les paiements en attente de la vue POS en direct. Seul l’accord du terminal permet l’enregistrement par le contrat staff existant ; le client envoie ensuite la commande payée en cuisine. Refus et annulations réutilisent la même commande/référence. Conservez le rapprochement des accords ; ne rejouez jamais un débit incertain. Déployez l’API correspondante avant le client POS. Les paiements hébergés, autorisations par restaurant et services à table volontairement envoyés avant paiement restent inchangés.

<span id="mobile-help-corpus" />

## Synchroniser le corpus du parcours mobile

Le suivi du correctif de clavier natif doit publier les procédures de saisie compacte et intégrer leur corpus FR/HE/EN correspondant. Vérifier la même révision via support/status en développement puis en production ; aucun changement de logique de commande ou de paiement côté API.

<span id="google-street-refinement" />

## Résoudre les suggestions de rue Google

Google peut renvoyer un identifiant canonique différent pour un segment de rue. Accepter cette différence uniquement pour une rue sans numéro, après validation du pays et de la réponse du fournisseur. Cette précision ne reçoit ni preuve de livraison ni coordonnées : le client doit encore sélectionner une adresse complète. Conserver la correspondance exacte d’identifiant pour les adresses complètes, les signatures liées au restaurant et au visiteur, les limites de session et les budgets. Tester les rues canoniques, les pays étrangers, les identifiants absents ou invalides et le rejet des adresses complètes d’un autre lieu. Vérifier une recherche de rue et une adresse avec numéro après promotion. Référence fournisseur : https://developers.google.com/maps/documentation/places/web-service/place-id#obsolete
