---
title: Pilote de facturation Foody
description: Backoffice → Payments & devices → Foody billing (sandbox). Admin du restaurant → Paramètres → Compte → Facturation.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-18'
featureId: foody-billing-sandbox
audience: internal
releaseStatus: local-release-unverified
---
Backoffice → Payments & devices → Foody billing (sandbox). Admin du restaurant → Paramètres → Compte → Facturation.

> **Disponibilité à confirmer**
> Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.

## Disponibilité et accès

Cette procédure concerne un test en sandbox. Un superadmin Foody configure le marchand et l’offre. Seul un propriétaire actuel du restaurant peut accepter l’offre ou lancer le paiement. Un paiement vérifié ouvre les modules achetés pour les restaurants inscrits au pilote modulaire. Les restaurants existants conservent leurs accès opérationnels. Les paiements sandbox ne produisent aucun document fiscal. La gestion des offres et tarifs dans **Plans & modules** est disponible aussi en production, séparément de ce pilote. Publier le catalogue n’active pas le paiement, les prélèvements ni l’inscription modulaire en production. Le parcours d’inscription historique reste disponible.

<span id="merchant" />

## Configurer le marchand Verifone de Foody

Dans **Foody billing (sandbox)**, saisissez l’identifiant utilisateur CST de Foody, la clé API, l’entité et le contrat Checkout. Pour les paiements récurrents, ajoutez le contrat sans CVV et le token scope. Activez les paiements de test et les renouvellements mensuels et annuels, puis enregistrez. Sur le site de production, choisissez un seul **CST test restaurant** sans inscription à la facturation modulaire. **None** désactive le test. Avant de changer de restaurant, vérifiez tout paiement en attente et arrêtez le renouvellement actif dans l’Admin du restaurant sélectionné. Un champ d’identification laissé vide conserve sa valeur.

<span id="offer" />

## Publier ou modifier une offre privée

Pour un restaurant existant, ouvrez **Restaurants → restaurant choisi → Billing & modules → Private sandbox offer**. Renseignez la description de l’offre, les conditions, les montants mensuel et annuel en ₪, la convention de TVA et la date du premier paiement. Publiez, puis ouvrez la page de facturation du propriétaire. Pour modifier l’offre, éditez les champs et publiez une nouvelle version. Un paiement déjà ouvert garde son prix initial. La nouvelle offre exige l’accord du propriétaire pour la période suivante.

Le tarif standard mensuel est sans engagement minimum. Le prépaiement annuel couvre 12 mois au prix de 11 pour les modules et formules logicielles : 590 ₪ par mois devient 6 490 ₪ HT par an, soit 590 ₪ économisés. Les licences supplémentaires, matériels, options et services de paiement ne bénéficient pas de cette remise. Les offres déjà acceptées, invitations enregistrées et prix négociés gardent leurs conditions.

<span id="pay" />

## Payer et vérifier en sandbox

En tant que propriétaire, ouvrez **Paramètres → Compte → Facturation**. Choisissez l’offre et vérifiez le total TTC. En mensuel, autorisez le débit mensuel affiché. En annuel, cochez l’autorisation séparée pour renouveler à ce montant tous les 12 mois, ou laissez-la vide pour payer une seule année. Acceptez les conditions, continuez vers Verifone avec une carte de test CST, puis vérifiez le paiement au retour. La facturation affiche la date et le montant du prochain débit pour un mandat confirmé. **Arrêter le renouvellement automatique** permet d’arrêter les prélèvements futurs.

<span id="renewal" />

## Tester le premier renouvellement mensuel

Après confirmation du premier paiement et du mandat, ouvrez **Restaurants → restaurant choisi → Billing & modules**. Selon la formule acceptée, cliquez sur **Test first monthly renewal** ou **Tester le premier renouvellement annuel**. Vérifiez le montant CST et la date de début de la prochaine période, puis confirmez. Un renouvellement accepté ajoute un mois ou douze mois à partir de la fin de la période payée. Le test anticipé est disponible une fois par mandat. Si le résultat est en attente ou incertain, utilisez **Verify payment**.

<span id="measure" />

## Lire l’usage mesuré

Ouvrez la section d’usage mesuré dans Facturation. Elle affiche certains compteurs du mois UTC pour Maps et Geoapify, les demandes de vérification SMS, les messages WhatsApp de commande et les usages OpenAI et Claude suivis. Les compteurs sont partiels et ne déclenchent aucun débit.

<span id="modular-provisioning" />

## Inviter un nouveau restaurant en sandbox

Dans le Backoffice de développement, ouvrez **Restaurants → Onboard New**. Renseignez le nom du restaurant, l’e-mail du propriétaire, la langue du menu et la devise du restaurant. Choisissez **Public catalogue** ou **Custom offer**. Le catalogue reprend les tarifs logiciels de Foody Landing en shekels par établissement et par mois, hors TVA. L’offre personnalisée enregistre les modules, les licences supplémentaires selon l’offre (postes actifs pour la nouvelle grille), le prix mensuel, le prix annuel facultatif, le traitement de la TVA et les conditions. Activez l’essai, indiquez au moins 14 jours et choisissez les modules testables, ou désactivez l’essai pour un règlement à l’inscription. Envoyez l’invitation. En cas d’échec de remise, choisissez **Resend invitation**.

<span id="modular-owner" />

## Activer l’essai ou payer depuis l’invitation

Suivez l’invitation pour confirmer le compte et ouvrir Facturation pour le restaurant concerné. Avec le catalogue public, choisissez les modules et vérifiez le montant mensuel. Avec une offre personnalisée, vérifiez les conditions convenues. Choisissez **Démarrer mon essai** si proposé. La date de fin est calculée à cette confirmation et reste la même après une nouvelle tentative. Facturation reste accessible après expiration. Sans essai, confirmez la périodicité disponible et les conditions pour ouvrir le paiement hébergé en sandbox. L’application active les modules payés après vérification serveur. Si un règlement est en attente, utilisez l’action de vérification. Le paiement mensuel requiert le contrat récurrent du marchand sandbox. La mise en service et le matériel sont chiffrés séparément.

Le tarif standard mensuel est sans engagement minimum. Le prépaiement annuel couvre 12 mois au prix de 11 pour les modules et formules logicielles : 590 ₪ par mois devient 6 490 ₪ HT par an, soit 590 ₪ économisés. Les licences supplémentaires, matériels, options et services de paiement ne bénéficient pas de cette remise. Les offres déjà acceptées, invitations enregistrées et prix négociés gardent leurs conditions.

<span id="modular-access" />

## Vérifier les accès par module

Les modules de départ suivent la grille publique : Restaurant pour la caisse et la salle, Commandes pour le site et la livraison, Cuisine pour les stocks et la préparation. Pour une offre versionnée, la composition publiée puis acceptée fixe précisément les fonctionnalités et quotas accessibles. Les droits du rôle restent nécessaires. Une page verrouillée dans Admin explique quelle offre inclut la fonctionnalité et invite le propriétaire à ouvrir Facturation. Une modification du catalogue ne réécrit pas les droits acceptés. Les restaurants sans inscription au catalogue versionné gardent leur contrat et leurs contrôles existants.

<span id="commercial-licences" />

## Configurer les deux quotas et les offres personnalisées

Dans la grille révisée, **Active POS devices** compte les postes autorisés à prendre des commandes : iPad ou terminal exécutant la caisse. Restaurant et Restaurant + Online comprennent 2 postes, Intégral 3. Chaque employé garde son compte personnel ; cocher **Personal POS accounts without a per-employee charge** supprime le quota caisse nominatif et son supplément, sans supprimer les quotas chef, KDS ou les permissions. Un Mini utilisé uniquement pour le paiement ne consomme pas un poste caisse ; son service EMV reste facturé séparément. Cuisine comprend 1 accès chef et 1 KDS. Dans **Custom offer**, un plan ou une sélection automatique reprend ses quantités ; les licences ajoutées font partie du prix personnalisé saisi. Les comptes totaux et postes restent distincts : une limite vide signifie illimité, zéro signifie aucun. Les essais et contrats déjà enregistrés gardent leurs droits ; aucune migration automatique.

Le catalogue affiche aussi un aperçu annuel calculé sur 11 mois pour chaque module ou formule. Modifier le tarif mensuel met à jour cet aperçu ; la règle annuelle n’est pas un second tarif à saisir. Dans une offre personnalisée, renseignez explicitement les montants convenus : aucune offre privée existante n’est recalculée.

## En cas d’échec

Si un paiement est à vérifier, recherchez sa référence dans Verifone Central. Pour un renouvellement incertain, le Backoffice peut vérifier l’identifiant de la transaction correspondante. La vérification ne lance aucun débit. Après un refus ou une expiration confirmés, un nouveau paiement peut être lancé quand l’offre est payable.
