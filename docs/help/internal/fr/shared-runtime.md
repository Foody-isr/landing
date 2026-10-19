---
title: Socle applicatif partagé
description: >-
  Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier
  documentés.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-19'
featureId: shared-runtime
audience: internal
releaseStatus: available
---
Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier documentés.

<span id="verifone-admin-money-operations" />

## Rembourser ou annuler un paiement en ligne Verifone

La section paiement d’une commande Admin permet le remboursement lié total ou partiel et le VOID total d’un paiement en ligne Verifone unique admissible, pour un propriétaire/responsable avec payments.manage. L’état fournisseur, le montant encaissé et l’historique vérifié déterminent l’admissibilité, pas un délai fixe de 24 heures. La préparation et la remise ne sont pas annulées et aucun bouton de remboursement terminal POS n’est ajouté. Un résultat inconnu reste réservé : vérifiez-le sans renvoyer l’opération. Les avoirs et annulations Invoice4U nécessitent un contrôle distinct. Voir [la procédure de paiement en ligne](/fr/help/payments/how-payments-work#verifone-admin-refund-void).

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

Sur mobile, les onglets Retrait et Livraison, le champ et le lien Se connecter en haut gardent leur position à l’ouverture et à la fermeture du clavier. Les suggestions compactes affichent l’adresse et la ville sur deux lignes dans une liste défilante plus grande. Pendant la recherche, la confirmation laisse la place aux suggestions ; elle apparaît après le choix d’une adresse complète. La couverture est réservée aux grands écrans. La mention Google Maps et les erreurs restent visibles. Garder le champ activé pendant la résolution ; une modification annule la requête et invalide sa réponse. Un calendrier parent ne réinitialise pas la saisie. Vérifier plusieurs ouvertures et fermetures du clavier iOS, le défilement des suggestions, le passage en Retrait et la connexion. Contrôler la position du champ avant focus, après réduction et après restauration du viewport dans WebKit et Chromium, en FR/HE/EN, avant promotion. Avec au moins quatre résultats disponibles, exiger quatre lignes entières de 44 px dans une hauteur visible de 360 px, avec clavier ouvert, y compris les noms longs et la précision du numéro. Vérifier aussi le vrai clavier iOS ; une émulation responsive seule ne suffit pas.
