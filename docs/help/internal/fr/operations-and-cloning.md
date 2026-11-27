---
title: 'Opérations, infrastructure et clonage internes'
description: 'Backoffice → Platform → Operations, Servers ou Clone data. Consultez l’état des services avant toute intervention.'
apps: both
tags:
  - internal
  - backoffice-operations
updatedAt: '2026-11-24'
featureId: backoffice-operations
audience: internal
releaseStatus: available
---
Backoffice → Platform → Operations, Servers ou Clone data. Consultez l’état des services avant toute intervention.

<span id="status" />

## Examiner les statuts

Choisissez dev/prod et examinez horodatage, état opérationnel/dégradé/indisponible et erreurs. Actualiser ne déploie ni ne répare. Un ancien succès ne prouve pas la santé actuelle. Si le contrôle échoue, le récapitulatif affiche **Status checks unavailable**. Utilisez **Check now** pour relancer le contrôle.

<span id="infra" />

## Vérifier les contrôles d’infrastructure

Lisez état, mode automatique/toujours actif, horaires, traduction et coûts avant démarrage/arrêt ou planning approuvé. Une action prod peut interrompre le service et exige autorisation humaine. Vérifiez résultat et signalez tout échec.

<span id="clone" />

## Prévisualiser un clonage avant import

Choisissez source/cible et groupes autorisés, exportez ce périmètre puis prévisualisez fichier et rapport. Examinez conflits et effets destructifs avant validation explicite. Gardez données exportées hors du dépôt d’aide ; aucun clonage prod pour tester le guide.

<span id="refresh-development-data" />

## Restaurer un instantané de production validé en développement

Faites préparer un instantané anonymisé de production compatible avec le schéma de développement. Connectez-vous au Backoffice dev avec un compte superadmin et la MFA. Dans Clone data, repérez la section Refresh all development data, choisissez Refresh status et vérifiez la date de capture ainsi que les nombres de restaurants, commandes, paiements et sites. Saisissez REPLACE DEVELOPMENT DATA et cliquez sur Replace development database. La demande est mise en file d’attente et l’API dev peut être brièvement indisponible pendant la bascule. Rouvrez Clone data et attendez la réussite de la restauration et du contrôle de l’API avant de reproduire le bug. Si le service de restauration est désactivé ou qu’aucun instantané n’est prêt, contactez l’équipe qui administre dev. La base dev précédente est conservée pour la récupération.

<span id="check-development-google-delivery" />

## Vérifier Google Maps pour la livraison en développement

Après l’activation de la configuration Google du serveur dev, utilisez une adresse fictive dans un restaurant de test. Vérifiez les suggestions, la sélection d’une adresse complète, un trajet court et la carte de livraison. Pour le parcours client, publiez l’autocomplétion d’adresse sur le site dev et vérifiez une suggestion avant toute commande de test. Si les suggestions ou la carte sont indisponibles, faites vérifier les restrictions d’API et les quotas associés aux identifiants dev.
