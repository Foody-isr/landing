---
title: Socle applicatif partagé
description: >-
  Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier
  documentés.
apps: both
tags:
  - internal
  - shared-runtime
updatedAt: '2026-10-21'
featureId: shared-runtime
audience: internal
releaseStatus: available
---
Équipe technique : clients, état, traduction, styles, proxies et démarrage communs soutiennent les modules métier documentés.

<span id="verifone-admin-money-operations" />

## Rembourser ou annuler un paiement en ligne Verifone

La section paiement d’une commande Admin permet le remboursement lié total ou partiel et le VOID total d’un paiement en ligne Verifone unique admissible, pour un propriétaire/responsable avec payments.manage. L’état fournisseur, le montant encaissé et l’historique vérifié déterminent l’admissibilité, pas un délai fixe de 24 heures. La préparation et la remise ne sont pas annulées et aucun bouton de remboursement terminal POS n’est ajouté. Un résultat inconnu reste réservé : vérifiez-le sans renvoyer l’opération. Les avoirs et annulations Invoice4U nécessitent un contrôle distinct. Voir [la procédure de paiement en ligne](/fr/help/payments/how-payments-work#verifone-admin-refund-void).

Une vente ABS capturée encore en AUTHORISED/AUTHORIZED ou SETTLEMENT_REQUESTED n’est pas réglée : Admin affiche Montant annulable et uniquement Annuler tout le paiement, sans remboursement antérieur. Rembourser le paiement et Montant remboursable exigent un état réglé explicite ou un historique de remboursement partiel vérifié. Les états génériques APPROVED/COMPLETED, les contradictions et les preuves manquantes ne proposent aucune opération. Un changement d’état avant confirmation refuse l’action devenue obsolète ; le VOID n’est jamais remplacé automatiquement par un REFUND. Demande rejetée par Verifone signifie qu’aucune restitution n’est confirmée, pas nécessairement un refus de la banque.

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

Sur mobile et bureau, vérifiez le choix initial Me connecter puis Continuer en tant qu’invité, présentés comme liens textuels sans bouton jaune supplémentaire. Avant le choix, ni champ d’adresse ni confirmation ne doivent apparaître. Vérifiez l’ouverture/fermeture de la connexion et l’accès invité : adresse en Livraison, informations de retrait sans adresse de livraison en Retrait. Retour doit conserver le brouillon ; le choix invité ne se répète pas à chaque changement de service ou réouverture. Contrôlez aussi la carte d’adresse validée d’un client connecté et Modifier. Dans une hauteur visible de 360 px avec au moins quatre résultats, quatre suggestions entières de 44 px doivent rester visibles. Le titre, les onglets, Retour et le champ gardent leur position pendant l’ouverture et la fermeture du clavier. Vérifiez les écrans de 320 px, le bureau et le français, l’hébreu et l’anglais. La vue ne doit jamais dépendre du focus ou du clavier. La saisie s’ouvre uniquement par un choix explicite. Conserver le focus intérieur et la hauteur naturelle du dropdown. Vérifier le clavier logiciel iOS réel avant publication.

<span id="customer-social-choice" />

## Contrôler les choix de connexion client

Me connecter ouvre Google et le formulaire e-mail + mot de passe. Facebook et Apple apparaissent seulement si le service les a configurés. La connexion par e-mail + code seul n’est plus proposée. Les codes de création, de vérification d’adresse et de récupération de mot de passe restent distincts. Vérifiez la fermeture et la reprise sans perte du brouillon, sur mobile et bureau ; les quatre suggestions entières avec clavier ouvert gardent la même géométrie. Les boutons de connexion ne doivent pas réintroduire un déplacement des onglets ou du champ.

<span id="sale-stock-history-read-only" />

## Conserver le journal des stocks en lecture seule

La route Admin menu/stock et ses liens portent désormais le libellé Historique des stocks en français, hébreu et anglais. Elle lit uniquement les articles du restaurant pour le filtre et les événements de vente paginés, sans appeler les compteurs ni les routes de correction. Les filtres article, date de série et mouvement restent combinés lors de la pagination ; une réponse d’une sélection précédente est ignorée. Le lien produit vers cette route est nommé Historique complet du stock. Les préparations restent dans le brouillon de carte et sa publication. Déployer le corpus public identique à la recherche et aux guides dans le service de support avec ce changement de procédure.

<span id="related-service-controls" />

## Accès aux nouveaux réglages

Paramètres → Consommation et quotas affiche les plafonds et consommations Google/Geoapify du restaurant, accessibles avec la permission de consulter ou modifier les paramètres. Les crédits de remplacement et les livraisons soumises à l’optimisation sont comptés séparément des requêtes. Foody ajuste les plafonds ; un changement ne remet pas les compteurs à zéro. Voir [les règles et le renouvellement](/fr/help/settings/api-usage-and-quotas).

<span id="optional-entry-access" />

## Vérifier l’accès discret à la connexion

Le réglage offer_sign_in pilote l’invitation automatique, pas la disponibilité du compte. Faux affiche directement le formulaire avec un petit lien Se connecter ; vrai ou absent conserve l’invitation et le choix invité. Vérifier FR/HE/EN, bureau et mobile, ouverture explicite, fermeture avec retour du focus et conservation de l’adresse saisie. Le lien garde une cible de 44 px, un fond transparent et une colonne adaptée au texte sur mobile. L’aperçu montre un lien désactivé sans authentification réelle. Les libellés de l’éditeur expliquent ce même choix ; aucun contrôle de livraison ne change. Le corpus de support embarque les mêmes procédures publiques.
