---
title: Pilote de facturation Foody
description: Backoffice de développement → Foody billing · sandbox ; Admin du restaurant → Compte → Facturation.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-09'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Backoffice de développement → Foody billing · sandbox ; Admin du restaurant → Compte → Facturation.

> **Disponibilité à confirmer**
> Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.

## Disponibilité et accès

Cette procédure concerne un test coordonné en sandbox. Un superadmin Foody configure le marchand et publie l’offre. Seul un propriétaire actuel du restaurant peut l’accepter et lancer le paiement. Les transactions de test ne modifient pas l’accès opérationnel et n’émettent aucun document fiscal.

<span id="merchant" />

## Configurer le marchand Verifone de Foody

Dans le Backoffice de développement, ouvrez **Foody billing · sandbox**. Saisissez l’identifiant utilisateur sandbox, la clé API, l’identifiant de l’entité Foody et le contrat Checkout hébergé. Pour tester le mensuel, ajoutez le contrat récurrent sans CVV et le périmètre de token, puis activez le mensuel après confirmation de Verifone. Activez les paiements de test et enregistrez. Les identifiants restent masqués ; un champ vide conserve la valeur enregistrée.

<span id="offer" />

## Publier ou modifier une offre privée

Ouvrez **Restaurants → restaurant choisi → Billing → Foody private offer**. Indiquez les modules et licences, les conditions, les montants mensuel et annuel en ₪, la convention de TVA et la date du premier paiement. Publiez, puis ouvrez la page de facturation du propriétaire. Pour modifier l’offre, éditez les champs et publiez une nouvelle version. Un paiement déjà ouvert garde son prix initial ; la nouvelle offre exige l’accord du propriétaire pour la prochaine période.

<span id="pay" />

## Payer et vérifier en sandbox

Connectez-vous comme propriétaire et ouvrez **Compte → Facturation**. Vérifiez le total TTC, choisissez mensuel ou annuel, puis acceptez l’offre. Pour le mensuel, autorisez aussi les futurs débits de test. Continuez vers Verifone avec ses données de carte de test. Au retour, attendez la confirmation ou utilisez **Vérifier le statut du paiement**. Le renouvellement annuel demande un nouveau paiement. Pour arrêter les prochains débits mensuels, choisissez **Arrêter le renouvellement automatique** et confirmez.

<span id="renewal" />

## Tester le premier renouvellement mensuel

Après confirmation du premier paiement mensuel de test, revenez à **Foody private offer** dans le Backoffice de développement et choisissez **Test first monthly renewal**. Confirmez pour envoyer le prochain débit mensuel autorisé à Verifone. Un renouvellement confirmé couvre la période suivante. Ce test est possible une fois par mandat, sans attendre l’échéance. Si le résultat est incertain, vérifiez le paiement en cours avant toute autre action.

<span id="measure" />

## Lire l’usage mesuré

Ouvrez la section d’usage mesuré dans Facturation. Elle affiche certains compteurs du mois UTC pour Maps et Geoapify, les demandes de vérification SMS, les messages WhatsApp de commande et les usages OpenAI et Claude suivis. Les compteurs sont partiels et ne déclenchent aucun débit.

## En cas d’échec

Si un paiement est à vérifier, recherchez sa référence dans Verifone Central. Pour un renouvellement incertain, le Backoffice peut vérifier l’identifiant de la transaction correspondante. La vérification ne lance aucun débit. Après un refus ou une expiration confirmés, un nouveau paiement peut être lancé quand l’offre est payable.
