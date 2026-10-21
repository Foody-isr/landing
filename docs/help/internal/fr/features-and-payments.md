---
title: 'Fonctions, abonnements et paiements internes'
description: 'Opérateurs Foody : ouvrez Fonctions ou les contrôles abonnement/paiement du restaurant.'
apps: both
tags:
  - internal
  - backoffice-entitlements
updatedAt: '2026-10-21'
featureId: backoffice-entitlements
audience: internal
releaseStatus: available
---
Opérateurs Foody : ouvrez Fonctions ou les contrôles abonnement/paiement du restaurant.

<span id="verifone-admin-money-operations" />

## Rembourser ou annuler un paiement en ligne Verifone

La section paiement d’une commande Admin permet le remboursement lié total ou partiel et le VOID total d’un paiement en ligne Verifone unique admissible, pour un propriétaire/responsable avec payments.manage. L’état fournisseur, le montant encaissé et l’historique vérifié déterminent l’admissibilité, pas un délai fixe de 24 heures. La préparation et la remise ne sont pas annulées et aucun bouton de remboursement terminal POS n’est ajouté. Un résultat inconnu reste réservé : vérifiez-le sans renvoyer l’opération. Les avoirs et annulations Invoice4U nécessitent un contrôle distinct. Voir [la procédure de paiement en ligne](/fr/help/payments/how-payments-work#verifone-admin-refund-void).

Une vente ABS capturée encore en AUTHORISED/AUTHORIZED ou SETTLEMENT_REQUESTED n’est pas réglée : Admin affiche Montant annulable et uniquement Annuler tout le paiement, sans remboursement antérieur. Rembourser le paiement et Montant remboursable exigent un état réglé explicite ou un historique de remboursement partiel vérifié. Les états génériques APPROVED/COMPLETED, les contradictions et les preuves manquantes ne proposent aucune opération. Un changement d’état avant confirmation refuse l’action devenue obsolète ; le VOID n’est jamais remplacé automatiquement par un REFUND. Demande rejetée par Verifone signifie qu’aucune restitution n’est confirmée, pas nécessairement un refus de la banque.

Après une restitution totale vérifiée dans l’historique lié de Verifone, le bilan conserve le montant initial, affiche le montant intégral restitué et un solde restant nul, sans proposer de nouveau remboursement ni VOID. Un solde capturé remis à zéro après cette restitution n’est pas une préautorisation à libérer. Une preuve manquante ou incohérente exige toujours une vérification, sans renvoyer l’opération.

<span id="verifone-readable-hosted-theme" />

## Garder la page de paiement lisible

Un superadmin ouvre Restaurant > Payment > Verifone dans Backoffice et enregistre les réglages de paiement avant de choisir Synchronize published logo and colors. La synchronisation utilise uniquement le logo publié et la couleur de marque ou du bouton sélectionné. HPP utilise toujours une page claire, des panneaux blancs et du texte foncé ; les couleurs trop pâles sont assombries pour atteindre au moins 4,5:1 de contraste sur la page et les panneaux. Après installation de la version API avec cette règle de contraste, resynchronisez les restaurants déjà activés dans l’environnement autorisé ; l’ancien thème est signalé comme obsolète. Vérifiez le logo, les chiffres saisis, les labels, les erreurs et les icônes, sur mobile et en français, hébreu et anglais, sans soumettre de transaction non autorisée. Les couleurs du site et les fenêtres natives des wallets restent inchangées. Le nouveau thème propre au restaurant ne devient pas le thème par défaut de l’organisation et ne concerne que les nouveaux liens Checkout. Les liens existants et l’état financier sont conservés ; vérifiez le paiement avant toute nouvelle tentative. Aucune mise à jour groupée de production sans autorisation.

<span id="entitlements" />

## Vérifier affectations de fonctions et plans

Comparez identifiants techniques au contrat approuvé. Noms hérités et prix internes ne sont pas les offres publiques de référence. Vérifiez restaurant avant modification autorisée des droits.

<span id="providers" />

## Configurer l’infrastructure de paiement

Utilisez réglages prestataire/Cibus/portefeuille pour environnement et marchand approuvés. Vérifiez identité visuelle et capacités sans exposer secrets. Paiements/webhooks/factures exigent revue interservices et sécurité.

<span id="external-api-allocation" />

## Attribuer les quotas des services externes

En superadmin, ouvrez Usage and quotas pour comparer les restaurants, choisissez un service puis Review allocation. Le même accès existe depuis la fiche restaurant. Saisissez les plafonds mensuels entiers ; zéro suspend un service. Indiquez un motif puis Save allocation. Use default allowances prépare les valeurs initiales dans le formulaire et nécessite aussi un enregistrement. Une modification ne remet jamais les compteurs à zéro et ne contourne pas les protections fournisseur. Les changements sont historisés avec leur auteur et leur motif. En cas d’enregistrement non confirmé ou de conflit, rechargez explicitement l’allocation avant de réessayer ; les saisies restent présentes tant que vous ne rechargez pas. La sortie avec des modifications avertit de leur abandon. Les environnements ont leurs compteurs restaurant propres ; le budget Google partagé continue de protéger le compte global.
