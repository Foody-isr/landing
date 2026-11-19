---
title: Accès interne et tableau de bord
description: Opérateurs internes Foody uniquement. Ouvrez Backoffice dans le bon environnement et utilisez un compte autorisé.
apps: both
tags:
  - internal
  - backoffice-access
updatedAt: '2026-11-19'
featureId: backoffice-access
audience: internal
releaseStatus: available
---
Opérateurs internes Foody uniquement. Ouvrez Backoffice dans le bon environnement et utilisez un compte autorisé.

<span id="access" />

## Vérifier le périmètre opérateur

Vérifiez environnement et rôle avant accès aux restaurants. Un propriétaire n’est pas implicitement superadmin. Déconnectez les appareils partagés et ne copiez identifiants ni données client dans le catalogue. Reconnectez-vous après la mise à jour des sessions. Autorisez les cookies du Backoffice et de l’API Foody, saisissez le second facteur demandé et déconnectez-vous en fin de session. Un autre environnement demande une authentification distincte.

<span id="dashboard" />

## Lire les indicateurs plateforme

Consultez totaux puis dossier restaurant/utilisateur pour enquête. Les agrégats sont des observations opérationnelles, pas des témoignages ni une preuve de règlement individuel. Si le relevé des abonnements en retard ne se charge pas, cliquez sur **Retry subscriptions**.

<span id="related-service-controls" />

## Accès aux nouveaux réglages

Usage and quotas ouvre la comparaison des consommations par service et par restaurant. Review allocation et le lien de la fiche restaurant ouvrent les plafonds mensuels ; leur enregistrement exige un motif et conserve tous les compteurs. Ces contrôles sont réservés au superadmin, distincts du choix de connexion du site.

Sur les versions compatibles, Parc des terminaux est également réservé aux superadmins Foody. Il liste les appareils entre restaurants ; les numéros DID/SHVA et le fournisseur saisis restent des déclarations auditées, pas une configuration bancaire appliquée.

Pour une question d’abonnement, ouvrez **Plans & modules** dans le menu pour consulter le catalogue logiciel public. Ouvrez la fiche d’un restaurant pour accéder à **Billing & modules** et **Features & access**.

<span id="navigation" />

## Retrouver un outil du Backoffice

Vérifiez le libellé de l’API sous Foody Backoffice. Ouvrez **Management** pour les restaurants et utilisateurs, **Payments & devices** pour les tests de facturation, le parc de terminaux et Cibus, **POS content** pour les icônes d’ingrédients et l’écran de connexion POS, ou **Platform** pour les quotas, les opérations, les serveurs et la copie de données. Sur petit écran, choisissez **Open navigation**. Les tableaux larges défilent horizontalement.

<span id="connection-security" />

## Application et journal de connexion

Après activation coordonnée, les superadministrateurs doivent confirmer l’application pour le Backoffice et pour la connexion distincte à l’environnement de développement lors d’un clonage. Account security permet un remplacement après une connexion récente et confirmation du mot de passe. Le journal exige une session superadministrateur avec MFA, une période maximale de 31 jours et au plus 1 000 entrées ; réduisez la période si demandé. La consultation est elle-même journalisée. Les données sont déchiffrées uniquement pour cet affichage autorisé ; ne les copiez pas dans le support. La conservation est d’au moins 12 mois calendaires. Les clés, sauvegardes et alertes de production doivent être configurées et testées avant de déclarer la conformité opérationnelle.
