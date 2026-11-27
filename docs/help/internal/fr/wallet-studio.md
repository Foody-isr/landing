---
title: 'Préparer, tester et publier une carte de fidélité'
description: 'Dans Foody Admin, sélectionnez le restaurant et ouvrez **Programme de fidélité → Studio Wallet**.'
apps: foodyadmin
tags:
  - customers
  - customers-wallet-studio
updatedAt: '2026-11-25'
featureId: customers-wallet-studio
audience: internal
releaseStatus: local-release-unverified
---
Dans Foody Admin, sélectionnez le restaurant et ouvrez **Clients → Programme de fidélité → Studio Wallet**.

> **Disponibilité à confirmer**
> Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.

## Disponibilité et accès

Utilisez un compte ayant accès aux paramètres du restaurant. Enregistrer, tester et publier exige le droit de modifier ces paramètres. Le test Apple exige un programme de fidélité et la configuration du certificat Apple Pass Type ID et de sa clé. Pour le pilote client, activez aussi l’API Wallet et le fournisseur choisi dans l’environnement de test.

<span id="save-design" />

## Enregistrer un visuel privé

Choisissez la couleur de fond et la couleur du texte Apple. Importez un logo et une bannière en PNG, JPEG ou WebP, jusqu’à 10 Mo chacun. Ouvrez **Cadrer la bannière**. Choisissez **Image entière** pour voir tous les bords ou **Remplir le cadre** pour recadrer. Réglez le zoom et déplacez l’image dans l’aperçu ou utilisez les curseurs de position. Apple et Google partagent les réglages. Pour les ajuster séparément, activez **Cadrage propre à Google** dans l’aperçu Google. Sur Apple, placez le compteur **Sous la bannière** ou **Sur la bannière**. Le brouillon privé conserve le fichier original des nouveaux imports. Pour retrouver la pleine résolution d’une ancienne bannière, importez à nouveau son original. Désactivez **Afficher le nom du restaurant** pour retirer le nom à côté du logo Apple. Google conserve le titre du programme. Si une image est refusée, consultez le message sous le champ. Cliquez sur **Enregistrer le brouillon**. Si une autre personne a enregistré une version plus récente, rechargez-la avant de réessayer.

<span id="generate-wallet-from-website" />

## Reprendre le design du site dans la carte Wallet

Dans **Clients → Programme de fidélité → Studio Wallet**, cliquez sur **Générer avec l’IA**. Foody reprend les couleurs du site publié, le logo et une photo pour la bannière. La photo d’accueil est prioritaire, puis la couverture ou une photo d’une section visible. Si le site ne définit aucune couleur, Foody peut en extraire une du logo ou de la photo. Le cadrage s’adapte à chaque Wallet. Vérifiez les aperçus Apple et Google. Vous pouvez annuler la proposition immédiatement, changer les couleurs ou recadrer la bannière. Un élément indisponible conserve sa valeur actuelle. **Enregistrer le brouillon** garde le design pour le restaurant. **Publier le visuel** l’applique aux cartes clients.

<span id="try-card-layouts" />

## Comparer des modèles avec la bannière du restaurant

Dans **Studio Wallet**, sélectionnez une palette ou ajustez les deux couleurs. Une fois la bannière ajoutée, testez **Produit entier**, **Panorama** ou **Compteur sur l’image**. Chaque modèle utilise votre image. Vous pouvez ensuite affiner le cadrage Apple et Google. Déplacez **Solde de démonstration** pour comparer la lisibilité des deux aperçus. Ce curseur modifie uniquement la simulation. Enregistrez le brouillon, vérifiez une carte de test, puis publiez le visuel quand il est prêt.

<span id="apple-test" />

## Ajouter une carte de test sur iPhone

Sur le visuel enregistré, cliquez sur **Générer une carte de test Apple**, puis sur **Télécharger le .pkpass**. Ouvrez le fichier sur un iPhone et touchez **Ajouter**. Vérifiez le logo, la bannière, les couleurs et la mention Carte de test. Le pass utilise une progression fictive et un QR de démonstration. Si la signature est indisponible, vérifiez la configuration Apple de l’environnement. L’onglet Google affiche l’aperçu du visuel. Vérifiez la mention Propulsé par Foody près du QR. Ouvrez les détails de la carte pour suivre le lien vers Foody.

<span id="publish-design" />

## Publier le visuel et partager le lien d’adhésion

Activez le programme de fidélité du restaurant pilote. Dans **Carte client**, cliquez sur **Publier le visuel** pour appliquer le brouillon enregistré. Publiez aussi les modifications ultérieures lorsqu’elles sont prêtes. Cliquez sur **Copier le lien d’adhésion** pour partager la page Fidélité du restaurant. En cas de conflit de publication, rechargez le Studio et vérifiez le visuel enregistré.

<span id="member-card" />

## Adhérer, ajouter sa carte et vérifier le cumul

Sur le téléphone, ouvrez le lien d’adhésion, connectez-vous, acceptez les conditions et adhérez. Sur iPhone, touchez **Ajouter la carte à Apple Wallet**, puis **Ajouter** dans Wallet. Quand Google est disponible, **Ajouter à Google Wallet** ouvre Google pour la confirmation. Téléchargez la carte à nouveau avec le même compte et vérifiez le QR et la progression. Passez une commande de test éligible et payée avec ce compte, puis vérifiez que la carte et la page Fidélité affichent la même progression. Si le pilote caisse autorise l’identification et les ventes fidélité, scannez le QR personnel et rattachez le membre avant de confirmer le paiement. Au seuil, vérifiez la récompense dans l’espace Fidélité et essayez de l’appliquer sur un parcours de paiement activé.

<span id="compose-wallet-manually" />

## Composer une carte à la main

Dans **Studio Wallet → Composition de la carte**, choisissez **Carnet de table** pour une photo avec une bande vichy ou **Affiche café** pour un visuel détouré devant une vague. Importez votre logo et une photo, ou cliquez sur **Utiliser le logo du site** et **Utiliser la photo du site** pour reprendre ces éléments du site publié. Ouvrez **Titre du visuel** pour modifier le texte, la police, la taille, la position et l’inclinaison. **Motif et fond** règle les couleurs, le motif et la hauteur de la séparation. **Photo et cadrage** permet de positionner l’image, de rogner les marges transparentes et de la placer devant le titre. Sous **Logo et informations du membre**, choisissez le solde seul ou avec l’objectif, puis la progression ou l’avantage du programme. Comparez **Affiche** et **Carte classique** dans l’aperçu Apple, puis ouvrez **Google Wallet**. Sur l’iPhone, le format Affiche est disponible à partir d’iOS 27. Le QR code est centré par Wallet. Dans l’aperçu, décalez le titre ou la photo si le code les recouvre. Si la couleur de texte choisie se lit mal sur le pied de carte, Foody utilise un fond contrasté pour la récompense et la mention « Propulsé par Foody ». Ajustez **Solde de démonstration** pour simuler une visite ou des points. Cliquez sur **Enregistrer le brouillon**, puis testez la carte Apple avant de **Publier le visuel** pour les clients.

<span id="visit-stamp-card" />

## Créer une carte à tampons

Dans **Clients → Programme de fidélité**, choisissez un programme en visites et réglez le nombre de visites donnant droit à la récompense. Dans le **Studio Wallet**, activez **Carte à tampons**. Sous **Motif des visites restantes**, choisissez une tasse de café, un croissant, un hamburger, une part de pizza, un sushi, une pita falafel, un bagel, une brochette, un bol de ramen, une salade, une glace, un cookie, un cocktail ou une étoile. Chaque visite acquise affiche une coche. Choisissez les couleurs du disque et du motif, puis réglez le nombre de tampons par rangée (de trois à six). Vous pouvez conserver la photo du restaurant en arrière-plan. Avec **Affiche café** ou **Carnet de table**, activer les tampons conserve le titre, son inclinaison, le motif et le cadrage. Vous pouvez encore modifier ces réglages. Sur l’affiche Apple, de grands tampons s’alignent en haut, sous le logo et le compteur. Sur Apple classique et Google Wallet, ils occupent le haut de l’illustration. Le titre et la photo se placent sous les tampons. Déplacez **Solde de démonstration** sur 7 pour vérifier une carte de dix visites dans les deux aperçus. Enregistrez le brouillon pour télécharger la carte de test Apple à ce solde. **Publier le visuel** applique ce design aux cartes membres. À la dixième visite éligible, Foody attribue la récompense et commence le cycle suivant sur la même carte. Pour un seuil élevé, les deux rangées présentent les visites du groupe en cours et le compteur indique la progression totale.

<span id="distribute-and-scan" />

## Partager le QR du restaurant et scanner la carte du membre

Dans **Studio Wallet → Carte client**, ouvrez **QR code d’adhésion** et téléchargez le SVG pour le comptoir. Le client scanne ce QR, se connecte à son compte sur le site du restaurant, accepte les conditions et ajoute sa carte personnelle au Wallet disponible. Sur une commande en ligne ou en livraison liée à ce compte, le paiement éligible alimente la carte. En caisse, ouvrez la fidélité de l’addition avant le paiement puis **Scanner avec la caméra** sur iPhone, iPad ou Android, ou utilisez le lecteur 2D. Présentez le QR personnel d’un seul membre à la fois et vérifiez la carte avant de la rattacher à l’addition. La consultation seule affiche le solde. C’est le règlement éligible qui compte la visite.
