---
title: Pilote de facturation Foody
description: Backoffice → Payments & devices → Foody billing (sandbox). Admin du restaurant → Paramètres → Compte → Facturation.
apps: foodyadmin
tags:
  - account
  - foody-billing-sandbox
updatedAt: '2026-11-21'
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

Dans **Restaurants → restaurant choisi → Billing & modules → Private sandbox offer**, choisissez une source dans **Offer source**. **Foody catalogue** reprend les formules et modules de **Quotes & orders**. Sélectionnez-en un pour voir ses prix mensuel et annuel TTC. **Finalized quotation** liste les devis finalisés rattachés à ce restaurant. Choisissez un devis pour reprendre ses montants récurrents, sa TVA, ses conditions et sa date limite d’acceptation. Vérifiez la date du premier paiement puis cliquez sur **Publish offer**. Le propriétaire peut alors accepter et payer dans Foody Admin. **Custom offer** permet de saisir des montants négociés et le traitement de la TVA. **Customize this offer** ouvre un brouillon personnalisé à partir de l’aperçu. Vérifiez les deux prix avant publication.

Le tarif standard mensuel est sans engagement minimum. Le prépaiement annuel couvre 12 mois au prix de 11 pour les modules et formules logicielles : 590 ₪ par mois devient 6 490 ₪ HT par an, soit 590 ₪ économisés. Les licences supplémentaires, matériels, options et services de paiement ne bénéficient pas de cette remise. Les offres déjà acceptées, invitations enregistrées et prix négociés gardent leurs conditions.

<span id="pay" />

## Payer et vérifier en sandbox

En tant que propriétaire, ouvrez **Paramètres → Compte → Facturation**. Choisissez l’offre et vérifiez le total TTC. En mensuel, autorisez le débit mensuel affiché. En annuel, cochez l’autorisation séparée pour renouveler à ce montant tous les 12 mois, ou laissez-la vide pour payer une seule année. Acceptez les conditions, continuez vers Verifone avec une carte de test CST, puis vérifiez le paiement au retour. La facturation affiche la date et le montant du prochain débit pour un mandat confirmé. **Arrêter le renouvellement automatique** permet d’arrêter les prélèvements futurs.

Le paiement hébergé utilise le marchand CST de Foody pour les tests d’abonnement. En production, ouvrez la facturation du restaurant de test sélectionné dans le Backoffice. Si la page de paiement ne s’ouvre pas, la tentative peut apparaître comme non aboutie. Vérifiez si un paiement est confirmé ou en attente de vérification avant de recommencer.

<span id="registered-card" />

## Payer la première échéance après vérification de la carte

Verifone CST peut autoriser 0,01 ₪ pour enregistrer la carte d’un abonnement avec renouvellement. De retour dans **Facturation**, cliquez sur **Vérifier le statut du paiement**. Quand Foody affiche **Carte de test vérifiée**, vérifiez le montant puis choisissez **Payer … avec la carte vérifiée** pour régler l’échéance. La période payée commence après vérification d’une vente du montant total. Si le paiement reste en attente après ce clic, utilisez le bouton de vérification. Si une vérification par Foody est nécessaire, communiquez la référence affichée au support. Dans Verifone Central, l’enregistrement de la carte porte cette référence marchand et la vente de l’abonnement porte la même référence suivie de `-P1`.

<span id="renewal" />

## Tester le premier renouvellement mensuel

Après confirmation du premier paiement et du mandat, ouvrez **Restaurants → restaurant choisi → Billing & modules**. Selon la formule acceptée, cliquez sur **Test first monthly renewal** ou **Tester le premier renouvellement annuel**. Vérifiez le montant CST et la date de début de la prochaine période, puis confirmez. Un renouvellement accepté ajoute un mois ou douze mois à partir de la fin de la période payée. Le test anticipé est disponible une fois par mandat. Si le résultat est en attente ou incertain, utilisez **Verify payment**.

<span id="measure" />

## Lire l’usage mesuré

Ouvrez **Facturation → Utilisation** pour consulter les demandes de vérification SMS, les messages de commande WhatsApp et l’activité OpenAI et Claude prise en charge pour le mois UTC.

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

<span id="invoice4u-qa" />

## Vérifier l’émission Invoice4U et la remise

Pour le pilote CST, configurez dans le service API le dossier QA Invoice4U de Foody, un client fictif de ce dossier et une boîte de test contrôlée. Dans l’Admin du restaurant test, le propriétaire active la remise par e-mail. Vérifiez une échéance mensuelle ou annuelle encaissée, son montant et son PDF dans **Factures d’abonnement**, puis le message dans la boîte de test. Une vérification de carte ou un refus ne crée aucune pièce. Si la réponse d’émission se perd, le serveur recherche la référence d’origine dans Invoice4U. Un état **À vérifier par Foody** demande une vérification comptable du document. En cas d’incertitude sur l’e-mail, vérifiez la boîte avant de demander un renvoi.

Pour tester l’émission via Verifone, sélectionnez le restaurant de développement et configurez sa boîte de test autorisée. Vérifiez que l’organisation du marchand Foody possède un contrat de reçus Invoice4U. Une vente Checkout annuelle sans renouvellement, le premier débit confirmé après enregistrement de la carte et chaque renouvellement demandent une facture-reçu avec les lignes TTC. L’Admin affiche la demande jusqu’au rapprochement avec l’original. Vérifiez le type fiscal, la référence de vente, le restaurant, le numéro, la TVA, le TTC et la réception dans la boîte autorisée. Si l’original manque, recherchez la vente existante avant toute intervention comptable.

<span id="manage-trial" />

## Gérer l’essai et réinitialiser la facturation de test

En Backoffice dev, ouvrez **Restaurants → le restaurant → Billing & modules → Trial management**. Pour démarrer un essai, indiquez au moins 14 jours et cliquez sur **Start a new trial**. Si demandé, choisissez les modules inclus. Pendant un essai, saisissez le nombre de jours à ajouter et cliquez sur **Extend trial**. **End trial now** demande confirmation et met fin immédiatement à l’accès d’essai. Le propriétaire garde accès à Facturation. Un abonnement payé ou un paiement en cours peut limiter ces actions. Après confirmation, **Reset sandbox billing** archive l’offre et arrête son renouvellement. Les dates d’essai restent celles enregistrées. Le propriétaire conserve son historique de paiements et de factures et peut choisir dans le catalogue publié. L’opérateur peut vérifier une tentative archivée avec l’identifiant de la transaction correspondante dans Verifone Central. Cette vérification met à jour le paiement historique indépendamment de l’abonnement en cours.

## En cas d’échec

Si un paiement est à vérifier, recherchez sa référence dans Verifone Central. Pour un renouvellement incertain, le Backoffice peut vérifier l’identifiant de la transaction correspondante. La vérification ne lance aucun débit. Après un refus ou une expiration confirmés, un nouveau paiement peut être lancé quand l’offre est payable.
