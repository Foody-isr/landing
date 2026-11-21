---
title: Création interne de restaurants et utilisateurs
description: Backoffice → Management → Restaurants ou Users. Lancez Onboard New depuis Restaurants.
apps: both
tags:
  - internal
  - backoffice-onboarding
updatedAt: '2026-11-15'
featureId: backoffice-onboarding
audience: internal
releaseStatus: available
---
Backoffice → Management → Restaurants ou Users. Lancez Onboard New depuis Restaurants.

<span id="create" />

## Préparer une création de restaurant

Vérifiez invitation ou création manuelle, identité, langue, devise et propriétaire avant envoi. Répétez en dev. Création et invitations prod sont des mutations réelles soumises à autorisation humaine applicable. Dans le pilote de développement, ce même assistant publie l’offre sandbox et ses réglages d’essai avant l’invitation. Consultez la procédure interne de facturation sandbox.

<span id="users" />

## Gérer les utilisateurs autorisés

Retrouvez l’utilisateur, vérifiez restaurant/rôle et appliquez uniquement le changement demandé. Les mots de passe passent par formulaires protégés, jamais logs ni guides. Vérifiez sauvegarde et préservez les autres accès.

<span id="related-service-controls" />

## Accès aux nouveaux réglages

Usage and quotas ouvre la comparaison des consommations par service et par restaurant. Review allocation et le lien de la fiche restaurant ouvrent les plafonds mensuels ; leur enregistrement exige un motif et conserve tous les compteurs. Ces contrôles sont réservés au superadmin, distincts du choix de connexion du site.

Le parc global permet de déclarer un terminal en réparation ou retourné et de renseigner ses identifiants commerciaux. Cela ne réaffecte pas l’appareil et ne configure pas un nouveau prestataire de paiement ; suivez la procédure régionale confirmée avec Verifone avant sa remise en service.

<span id="search" />

## Rechercher des restaurants et des utilisateurs

Dans Restaurants, recherchez par nom ou par slug. Dans Users, recherchez par nom, e-mail ou téléphone et choisissez un rôle si nécessaire. Utilisez **Clear search** ou **Clear filters** pour retrouver la liste complète. En cas d’échec, **Retry** relance la dernière recherche.

<span id="versioned-commercial-access" />

## Accès commercial en développement

Pour un restaurant inscrit au catalogue versionné de développement, cette fonction doit être incluse dans son offre ou dans son essai actif, en plus des autorisations du rôle. Une fonctionnalité retirée est refusée côté serveur. Consultez Facturation pour voir les modules et les licences, puis faites examiner un ajout par le propriétaire. Les quotas de comptes et de postes POS sont distincts ; un dépassement nécessite les licences correspondantes. Les contrats historiques ne sont pas modifiés automatiquement.
