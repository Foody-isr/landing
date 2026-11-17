---
title: Pilote de facturation Foody
description: >-
  Backoffice de développement → Payments & devices → Foody billing (sandbox). Admin du restaurant → Paramètres → Compte
  → Facturation.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-16'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Backoffice de développement → Payments & devices → Foody billing (sandbox). Admin du restaurant → Paramètres → Compte → Facturation.

> **Disponibilité à confirmer**
> Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.

## Disponibilité et accès

Cette procédure concerne un test en sandbox. Un superadmin Foody configure le marchand et l’offre. Seul un propriétaire actuel du restaurant peut accepter l’offre ou lancer le paiement. Un paiement vérifié ouvre les modules achetés pour les restaurants inscrits au pilote modulaire. Les restaurants existants conservent leurs accès opérationnels. Les paiements sandbox ne produisent aucun document fiscal. La gestion des offres et tarifs dans **Plans & modules** est disponible aussi en production, séparément de ce pilote. Publier le catalogue n’active pas le paiement, les prélèvements ni l’inscription modulaire en production. Le parcours d’inscription historique reste disponible.

<span id="merchant" />

## Configurer le marchand Verifone de Foody

Dans le Backoffice de développement, ouvrez **Payments & devices → Foody billing (sandbox)**. Saisissez l’identifiant utilisateur sandbox, la clé API, l’identifiant de l’entité Foody et le contrat Checkout hébergé. Pour tester le mensuel, ajoutez le contrat récurrent sans CVV et le périmètre de token, puis activez le mensuel après confirmation de Verifone. Activez les paiements de test et enregistrez. Les identifiants restent masqués ; un champ vide conserve la valeur enregistrée.

<span id="offer" />

## Publier ou modifier une offre privée

Pour un restaurant existant, ouvrez **Restaurants → restaurant choisi → Billing & modules → Private sandbox offer**. Renseignez la description de l’offre, les conditions, les montants mensuel et annuel en ₪, la convention de TVA et la date du premier paiement. Publiez, puis ouvrez la page de facturation du propriétaire. Pour modifier l’offre, éditez les champs et publiez une nouvelle version. Un paiement déjà ouvert garde son prix initial. La nouvelle offre exige l’accord du propriétaire pour la période suivante.

<span id="pay" />

## Payer et vérifier en sandbox

Connectez-vous comme propriétaire et ouvrez **Paramètres → Compte → Facturation**. Le lien apparaît pour le propriétaire du restaurant après la publication de l’offre privée par Foody. Vérifiez le total TTC, choisissez mensuel ou annuel, puis acceptez l’offre. Pour le mensuel, autorisez aussi les futurs débits de test. Continuez vers Verifone avec ses données de carte de test. Au retour, attendez la confirmation ou utilisez **Vérifier le statut du paiement**. Le renouvellement annuel demande un nouveau paiement. Pour arrêter les prochains débits mensuels, choisissez **Arrêter le renouvellement automatique** et confirmez.

<span id="renewal" />

## Tester le premier renouvellement mensuel

Après confirmation du premier paiement mensuel de test, revenez à **Private sandbox offer** dans le Backoffice de développement et choisissez **Test first monthly renewal**. Confirmez pour envoyer le prochain débit mensuel autorisé à Verifone. Un renouvellement confirmé couvre la période suivante. Ce test est possible une fois par mandat, sans attendre l’échéance. Si le résultat est incertain, vérifiez le paiement en cours avant toute autre action.

<span id="measure" />

## Lire l’usage mesuré

Ouvrez la section d’usage mesuré dans Facturation. Elle affiche certains compteurs du mois UTC pour Maps et Geoapify, les demandes de vérification SMS, les messages WhatsApp de commande et les usages OpenAI et Claude suivis. Les compteurs sont partiels et ne déclenchent aucun débit.

<span id="modular-provisioning" />

## Inviter un nouveau restaurant en sandbox

Dans le Backoffice de développement, ouvrez **Restaurants → Onboard New**. Renseignez le nom du restaurant, l’e-mail du propriétaire, la langue du menu et la devise du restaurant. Choisissez **Public catalogue** ou **Custom offer**. Le catalogue reprend les tarifs logiciels de Foody Landing en shekels par établissement et par mois, hors TVA. L’offre personnalisée enregistre les modules, les licences supplémentaires selon l’offre (postes actifs pour la nouvelle grille), le prix mensuel, le prix annuel facultatif, le traitement de la TVA et les conditions. Activez l’essai, indiquez au moins 14 jours et choisissez les modules testables, ou désactivez l’essai pour un règlement à l’inscription. Envoyez l’invitation. En cas d’échec de remise, choisissez **Resend invitation**.

<span id="modular-owner" />

## Activer l’essai ou payer depuis l’invitation

Suivez l’invitation pour confirmer le compte et ouvrir Facturation pour le restaurant concerné. Avec le catalogue public, choisissez les modules et vérifiez le montant mensuel. Avec une offre personnalisée, vérifiez les conditions convenues. Choisissez **Démarrer mon essai** si proposé. La date de fin est calculée à cette confirmation et reste la même après une nouvelle tentative. Facturation reste accessible après expiration. Sans essai, confirmez la périodicité disponible et les conditions pour ouvrir le paiement hébergé en sandbox. L’application active les modules payés après vérification serveur. Si un règlement est en attente, utilisez l’action de vérification. Le paiement mensuel requiert le contrat récurrent du marchand sandbox. La mise en service et le matériel sont chiffrés séparément.

<span id="modular-access" />

## Vérifier les accès par module

Les modules de départ suivent la grille publique : Restaurant pour la caisse et la salle, Commandes pour le site et la livraison, Cuisine pour les stocks et la préparation. Pour une offre versionnée, la composition publiée puis acceptée fixe précisément les fonctionnalités et quotas accessibles. Les droits du rôle restent nécessaires. Une page verrouillée dans Admin explique quelle offre inclut la fonctionnalité et invite le propriétaire à ouvrir Facturation. Une modification du catalogue ne réécrit pas les droits acceptés. Les restaurants sans inscription au catalogue versionné gardent leur contrat et leurs contrôles existants.

<span id="commercial-licences" />

## Configurer les deux quotas et les offres personnalisées

Dans la grille révisée, **Active POS devices** compte les postes autorisés à prendre des commandes : iPad ou terminal exécutant la caisse. Restaurant et Restaurant + Commandes comprennent 2 postes, Intégral 3. Chaque employé garde son compte personnel ; cocher **Personal POS accounts without a per-employee charge** supprime le quota caisse nominatif et son supplément, sans supprimer les quotas chef, KDS ou les permissions. Un Mini utilisé uniquement pour le paiement ne consomme pas un poste caisse ; son service EMV reste facturé séparément. Cuisine comprend 1 accès chef et 1 KDS. Dans **Custom offer**, un plan ou une sélection automatique reprend ses quantités ; les licences ajoutées font partie du prix personnalisé saisi. Les comptes totaux et postes restent distincts : une limite vide signifie illimité, zéro signifie aucun. Les essais et contrats déjà enregistrés gardent leurs droits ; aucune migration automatique.

## En cas d’échec

Si un paiement est à vérifier, recherchez sa référence dans Verifone Central. Pour un renouvellement incertain, le Backoffice peut vérifier l’identifiant de la transaction correspondante. La vérification ne lance aucun débit. Après un refus ou une expiration confirmés, un nouveau paiement peut être lancé quand l’offre est payable.
