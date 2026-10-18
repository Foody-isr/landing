---
title: Socle applicatif partagé
description: >-
  Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier
  documentés.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-18'
featureId: shared-runtime
audience: internal
releaseStatus: available
---
Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier documentés.

<span id="weight-hold-margin" />

## Vérifier le plafond de préautorisation au poids

Le champ public expected_hold_amount_minor est vérifié contre les lignes serveur et la marge du restaurant dans la transaction de création ; un écart annule la commande avant stock/prestataire. Le serveur écrit weight_hold_amount_minor et weight_hold_buffer_percent sans faire confiance aux external_metadata invitées ; le resolver conserve ce plafond ou HoldAmount existant. Les réglages acceptent des valeurs finies de 0 à 100 ; l’omission les préserve et le défaut reste 20. Restaurant public et réglages protégés exposent cette politique sans secret. TypeScript n’invente pas de marge inconnue. Les messages FR/HE/EN héritent du thème. Aucun changement de schéma, clé prestataire ou client POS.

<span id="classify" />

## Vérifier les changements du socle

Chaque fichier a une empreinte exacte. Les fichiers sans sélecteur métier sont classés explicitement comme socle, sans devenir des fonctions client. Un changement exige une justification exacte sans impact ou des procédures mises à jour. Affectez nouveaux écrans et contrôles à leur fonction avant livraison.

<span id="whatsapp-media-client" />

## Client des fichiers privés WhatsApp

Le client Admin centralise JWT, X-Restaurant-ID, un renouvellement 401 et no-store pour les fichiers multipart/binaires. Les URL blob sont temporaires et révoquées ; aucun secret ne figure dans une URL. Les brouillons conservent la sélection de pièce jointe dans les signatures et la réconciliation après sauvegarde. Le catalogue accepte BODY plus un HEADER IMAGE/DOCUMENT compatible, quelle que soit leur position, et conserve les correspondances de variables. Les textes et procédures sont disponibles en français, hébreu et anglais.

<span id="internal-combo-substitution-contract" />

## Faire une exception de formule sur une commande

Les exceptions internes de formule utilisent is_substitution par choix. Seuls les handlers JWT du personnel avec orders.manage dans le restaurant définissent l’autorité AllowSubstitutions non liée au JSON ; les appels publics et créations de service sans autorité sont refusés. La migration 264 ajoute le marqueur combo_substitution des lignes, faux par défaut. L’API vérifie appartenance au restaurant, article individuel actif à prix fixe, appartenance et activation du format, portions imposées, quantités et limites par format/article, puis les gardes de stock. Le remplacement porte un delta nul et aucun supplément de modificateur fixe de l’étape. La définition reste intacte ; la recomposition conserve le prix de base historique et s’annule entièrement en cas d’échec. Les brouillons, l’édition et les textes FR/HE/EN Admin conservent le marqueur. Les contrats de réponse Web et Dart acceptent cet ajout sans contrôle d’exception client ou POS. Déployer API et migration avant Admin ; publier l’aide et le corpus intégré sur la même révision revue.

<span id="mobile-fulfillment-viewport" />

## Valider le clavier dans le sélecteur de remise

Le dialogue de remise mobile suit la hauteur et le décalage du VisualViewport à échelle 1 ; le zoom reste contrôlé par le navigateur. L’en-tête et la confirmation restent hors du corps défilant, les suggestions restent dans son flux et les couleurs continuent à provenir du restaurant. Le clavier se ferme seulement après une sélection d’adresse complète, pas après une rue à compléter. Vérifier WebKit et Chromium avec réduction et déplacement simulés du viewport, liste longue, navigation clavier, écran 320 px, retrait, fermeture et restauration du défilement. Cette simulation ne remplace pas une vérification du clavier natif sur iPhone avant promotion. Publier le corpus avec les guides de la version ; le contrat local reste WORKSPACE jusqu’au commit documentaire approuvé.
