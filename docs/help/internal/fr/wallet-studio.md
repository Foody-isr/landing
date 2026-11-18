---
title: 'Préparer, tester et publier une carte de fidélité'
description: 'Dans Foody Admin, sélectionnez le restaurant et ouvrez **Programme de fidélité → Studio Wallet**.'
apps: foodyadmin
tags:
  - customers
  - customers-wallet-studio
updatedAt: '2026-11-18'
featureId: customers-wallet-studio
audience: internal
releaseStatus: local-release-unverified
---
Dans Foody Admin, sélectionnez le restaurant et ouvrez **Programme de fidélité → Studio Wallet**.

> **Disponibilité à confirmer**
> Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.

## Disponibilité et accès

Utilisez un compte ayant accès aux paramètres du restaurant. Enregistrer, tester et publier exige le droit de modifier ces paramètres. Le test Apple exige un programme de fidélité et la configuration du certificat Apple Pass Type ID et de sa clé. Pour le pilote client, activez aussi l’API Wallet et le fournisseur choisi dans l’environnement de test.

<span id="save-design" />

## Enregistrer un visuel privé

Choisissez la couleur du fond et celle du texte Apple. Importez un logo et une bannière en PNG ou JPEG, de 1 Mo maximum chacun. Basculez entre Apple Wallet et Google Wallet pour vérifier le cadrage. Cliquez sur **Enregistrer le brouillon**. Si une autre personne a enregistré une version plus récente, rechargez-la avant de réessayer.

<span id="apple-test" />

## Ajouter une carte de test sur iPhone

Sur le visuel enregistré, cliquez sur **Générer une carte de test Apple**, puis sur **Télécharger le .pkpass**. Ouvrez le fichier sur un iPhone et touchez **Ajouter**. Vérifiez le logo, la bannière, les couleurs et la mention Carte de test. Le pass utilise une progression fictive et un QR de démonstration. Si la signature est indisponible, vérifiez la configuration Apple de l’environnement. L’onglet Google affiche l’aperçu du visuel.

<span id="publish-design" />

## Publier le visuel et partager le lien d’adhésion

Activez le programme de fidélité du restaurant pilote. Dans **Carte client**, cliquez sur **Publier le visuel** pour appliquer le brouillon enregistré. Publiez aussi les modifications ultérieures lorsqu’elles sont prêtes. Cliquez sur **Copier le lien d’adhésion** pour partager la page Fidélité du restaurant. En cas de conflit de publication, rechargez le Studio et vérifiez le visuel enregistré.

<span id="member-card" />

## Adhérer, ajouter sa carte et vérifier le cumul

Sur le téléphone, ouvrez le lien d’adhésion, connectez-vous, acceptez les conditions et adhérez. Sur iPhone, touchez **Ajouter la carte à Apple Wallet**, puis **Ajouter** dans Wallet. Quand Google est disponible, **Ajouter à Google Wallet** ouvre Google pour la confirmation. Téléchargez la carte à nouveau avec le même compte et vérifiez le QR et la progression. Passez une commande de test éligible et payée avec ce compte, puis vérifiez que la carte et la page Fidélité affichent la même progression. Si le pilote caisse autorise l’identification et les ventes fidélité, scannez le QR personnel et rattachez le membre avant de confirmer le paiement. Au seuil, vérifiez la récompense dans l’espace Fidélité et essayez de l’appliquer sur un parcours de paiement activé.
