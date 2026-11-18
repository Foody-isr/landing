---
title: 'Fonctions, abonnements et paiements internes'
description: >-
  Ouvrez l’onglet Features, Billing ou Payment de la fiche restaurant. Les réglages Cibus partagés se trouvent dans
  Payments & devices.
apps: both
tags:
  - internal
  - backoffice-entitlements
updatedAt: '2026-11-19'
featureId: backoffice-entitlements
audience: internal
releaseStatus: available
---
Dans Foody Backoffice, ouvrez Payments & devices → Plans & modules pour consulter les tarifs publics ou choisissez un restaurant pour afficher Billing & modules et Features & access.

<span id="backoffice-restaurant-subscription" />

## Retrouver la souscription et les accès d’un restaurant

Ouvrez **Restaurants** et choisissez le restaurant. **Billing & modules** s’ouvre en premier. Dans le pilote modulaire en développement, vérifiez l’offre, le statut, les modules proposés et actifs, les licences et la date de fin d’essai ou de période payée lorsqu’elles sont disponibles. Ouvrez **Features & access** pour voir les fonctions actives et verrouillées. Pour un restaurant existant, consultez **Legacy subscription** et, si elle existe, **Private sandbox offer**. Ses interrupteurs et réglages d’offre historique sont dans **Features & access**.

<span id="verifone-admin-money-operations" />

## Rembourser ou annuler un paiement en ligne Verifone

La section paiement d’une commande Admin permet le remboursement lié total ou partiel et le VOID total d’un paiement en ligne Verifone unique admissible, pour un propriétaire/responsable avec payments.manage. L’état fournisseur, le montant encaissé et l’historique vérifié déterminent l’admissibilité, pas un délai fixe de 24 heures. La préparation et la remise ne sont pas annulées et aucun bouton de remboursement terminal POS n’est ajouté. Un résultat inconnu reste réservé : vérifiez-le sans renvoyer l’opération. Les avoirs et annulations Invoice4U nécessitent un contrôle distinct. Voir [la procédure de paiement en ligne](/fr/help/payments/how-payments-work#verifone-admin-refund-void).

Une vente ABS capturée encore en AUTHORISED/AUTHORIZED ou SETTLEMENT_REQUESTED n’est pas réglée : Admin affiche Montant annulable et uniquement Annuler tout le paiement, sans remboursement antérieur. Rembourser le paiement et Montant remboursable exigent un état réglé explicite ou un historique de remboursement partiel vérifié. Les états génériques APPROVED/COMPLETED, les contradictions et les preuves manquantes ne proposent aucune opération. Un changement d’état avant confirmation refuse l’action devenue obsolète ; le VOID n’est jamais remplacé automatiquement par un REFUND. Demande rejetée par Verifone signifie qu’aucune restitution n’est confirmée, pas nécessairement un refus de la banque.

Après une restitution totale vérifiée dans l’historique lié de Verifone, le bilan conserve le montant initial, affiche le montant intégral restitué et un solde restant nul, sans proposer de nouveau remboursement ni VOID. Un solde capturé remis à zéro après cette restitution n’est pas une préautorisation à libérer. Une preuve manquante ou incohérente exige toujours une vérification, sans renvoyer l’opération.

<span id="verifone-readable-hosted-theme" />

## Garder la page de paiement lisible

Un superadmin ouvre Restaurant > Payment > Verifone dans Backoffice et enregistre les réglages de paiement avant de choisir Synchronize published logo and colors. La synchronisation utilise uniquement le logo publié et la couleur de marque ou du bouton sélectionné. Le thème HPP synchronisé utilise une page claire, des panneaux blancs et du texte foncé ; les couleurs trop pâles sont assombries pour atteindre au moins 4,5:1 de contraste sur la page et les panneaux. Après installation de la version API avec cette règle de contraste, resynchronisez les restaurants déjà activés dans l’environnement autorisé ; l’ancien thème est signalé comme obsolète. Vérifiez le logo, les chiffres saisis, les labels, les erreurs et les icônes, sur mobile et en français, hébreu et anglais, sans soumettre de transaction non autorisée. Les couleurs du site et les fenêtres natives des wallets restent inchangées. Le nouveau thème propre au restaurant ne devient pas le thème par défaut de l’organisation et ne concerne que les nouveaux liens Checkout. Les liens existants et l’état financier sont conservés ; vérifiez le paiement avant toute nouvelle tentative. Aucune mise à jour groupée de production sans autorisation.

<span id="link-verifone-central-theme" />

## Rattacher un thème Checkout créé dans Verifone Central

Dans Verifone Central, ouvrez Administration > Checkout Themes et enregistrez un thème dans l’organisation et l’environnement Verifone du restaurant (CST ou production). Dans le Backoffice, ouvrez Restaurant > Payment > Verifone en tant que superadmin et enregistrez la configuration de paiement. Sous Hosted payment page appearance, saisissez le nom exact ou l’UUID dans Verifone theme name or ID, puis cliquez sur Link Verifone theme. Si plusieurs thèmes portent le même nom, saisissez l’UUID. Foody vérifie l’organisation et l’environnement et applique le thème sélectionné aux nouveaux liens Checkout. Pour modifier le thème, enregistrez vos changements dans Verifone Central et vérifiez le rendu sur un nouveau lien de test dans l’environnement autorisé. Pour utiliser le thème par défaut du compte Verifone, décochez Use the selected Checkout theme et enregistrez la configuration de paiement. Si le thème sélectionné a été supprimé dans CST, rattachez un thème disponible ou utilisez celui du compte. Pour un thème créé depuis le site du restaurant, Synchronize published logo and colors vérifie sa présence chez Verifone et le recrée si nécessaire.

<span id="configure-verifone-cst-card-form" />

## Choisir le parcours carte Verifone d’un restaurant

Dans le Backoffice, ouvrez Restaurants → fiche du restaurant → Payment. Pour comparer les parcours, choisissez Verifone Cloud (GreenBox) et CST Sandbox. Sous Verifone.js encryption key, enregistrez une fois la Public key et son Public key alias pour cette organisation avec Save Payment Config. Sous Card payment flow, sélectionnez **Foody · Verifone.js**. Le choix est enregistré immédiatement pour ce restaurant. Ouvrez une nouvelle commande prépayée en ILS, à montant fixe, en retrait ou en livraison. Utilisez une nouvelle carte de test CST. Avec un compte client connecté, testez également l’enregistrement de la carte après avoir saisi ses coordonnées. Confirmez et vérifiez un seul paiement du montant total dans Foody. Sélectionnez ensuite **Verifone Checkout** et ouvrez une deuxième commande. Après confirmation du panier, Foody ouvre le lien vers la page de paiement Verifone. Les deux parcours réutilisent les identifiants et contrats enregistrés. Les wallets et les cartes enregistrées ont leurs propres réglages. Pour changer d’environnement ou retirer la clé, sélectionnez d’abord Verifone Checkout, puis remplacez ou retirez la clé et enregistrez les réglages.

<span id="configure-verifone-direct-wallets" />

## Configurer Apple Pay et Google Pay dans Foody

Dans le Backoffice, ouvrez les réglages Payment du restaurant en tant que superadmin. Sélectionnez Verifone et l’environnement voulu. Dans Wallets in the Foody checkout, renseignez les contrats fournis par Verifone pour les wallets via eComm. Pour Apple Pay, activez Apple Pay for Web via direct API dans Verifone Central. Enregistrez le nom exact de l’hôte HTTPS et le fichier d’association avec l’option Foody désactivée. Faites vérifier le domaine dans Verifone Central avant d’activer Apple Pay dans Foody. Pour Google Pay, renseignez l’identifiant marchand de passerelle fourni par Verifone et l’identifiant marchand Google approuvé pour la production. Activez et enregistrez chaque wallet séparément. Testez une commande éligible d’un montant fixe en ILS, à emporter ou en livraison, puis vérifiez son état sur la page de confirmation. Si Invoice4U est actif, vérifiez l’émission du reçu complet pendant la recette. Les factures détaillées Invoice4U passent par les moyens de paiement existants. Désactivez les wallets avant de changer d’environnement ou d’organisation et enregistrez les paramètres du nouveau marchand.

<span id="entitlements" />

## Vérifier affectations de fonctions et plans

Ouvrez **Billing & modules** sur la fiche du restaurant pour lire les conditions convenues et le périmètre actuel. Pour un contrat historique, vérifiez l’offre et les réglages de **Features & access** avec le contrat du client avant une modification autorisée. Dans le pilote modulaire, les fonctions affichées suivent l’essai ou l’abonnement vérifié.

<span id="providers" />

## Configurer l’infrastructure de paiement

Utilisez réglages prestataire/Cibus/portefeuille pour environnement et marchand approuvés. Vérifiez identité visuelle et capacités sans exposer secrets. Paiements/webhooks/factures exigent revue interservices et sécurité.

<span id="external-api-allocation" />

## Attribuer les quotas des services externes

En superadmin, ouvrez Usage and quotas pour comparer les restaurants, choisissez un service puis Review allocation. Le même accès existe depuis la fiche restaurant. Saisissez les plafonds mensuels entiers ; zéro suspend un service. Indiquez un motif puis Save allocation. Use default allowances prépare les valeurs initiales dans le formulaire et nécessite aussi un enregistrement. Une modification ne remet jamais les compteurs à zéro et ne contourne pas les protections fournisseur. Les changements sont historisés avec leur auteur et leur motif. En cas d’enregistrement non confirmé ou de conflit, rechargez explicitement l’allocation avant de réessayer ; les saisies restent présentes tant que vous ne rechargez pas. La sortie avec des modifications avertit de leur abandon. Les environnements ont leurs compteurs restaurant propres ; le budget Google partagé continue de protéger le compte global.

<span id="prepared-sumit-checkout-integration" />

## Intégration du panier préparé Sumit

La capacité Sumit des commandes internes préparées dépend du fournisseur actif et des identifiants configurés valides du restaurant. Aucun bouton de formule ni contrôle d’onboarding n’est ajouté. Changer de fournisseur désactive l’ouverture de ces paiements en attente, sans les transférer silencieusement à un autre prestataire. Coordonnez API, Admin, Web et le guide Sumit.

<span id="cibus-platform-settings" />

## Consulter les réglages Cibus partagés

Vérifiez le libellé de l’API, puis ouvrez **Payments & devices → Cibus (Pluxee)**. Cliquez sur **Retry** si les réglages ne se chargent pas. Pour une mise à jour approuvée, vérifiez l’environnement et l’URL Cibus, saisissez les éventuels nouveaux identifiants fournis par Cibus et cliquez sur **Save Cibus settings**. Vérifiez la confirmation. Les identifiants du terminal de chaque restaurant se gèrent dans Foody Admin.

<span id="backoffice-software-catalogue" />

## Modifier les formules, modules et tarifs

Avec un compte superadmin, ouvrez **Payments & devices → Plans & modules** dans le Backoffice de production ou de développement. Vérifiez le libellé de l’API et la mention **Production catalogue** ou **Development catalogue** avant de modifier. Chaque environnement conserve son propre catalogue. Dans **Modules**, choisissez un module et modifiez son prix mensuel HT, ses quantités incluses et les fonctionnalités cochées. Les fonctionnalités sont classées par catégorie ; la recherche retrouve chaque ligne. Respectez les dépendances indiquées. Dans **Plans**, créez une formule, choisissez ses modules, son prix, ses quotas propres, les fonctionnalités ajoutées ou exclues et sa visibilité publique. Renseignez les noms français, anglais et hébreu. **All prices** contient les tarifs de mise en service, matériel, licences et services : un montant vide signifie sur devis, zéro signifie inclus ; une ligne de quantité représente une allocation, pas un prix. **Review changes**, puis **Publish new version** publient une nouvelle version. Un conflit de version conserve le brouillon ; rechargez puis réappliquez les changements. La page Tarifs utilise le catalogue de son environnement, avec un cache pouvant durer une minute. Les contrats acceptés, paiements en cours, invitations et essais déjà configurés gardent leur version.

Pour préparer la grille du 16 novembre, choisissez **Load reviewed software offers**. Cette action charge les trois modules, le duo et Intégral dans le brouillon et ouvre la revue ; elle ne publie rien. Elle conserve les tarifs existants de matériel, mise en service et paiement, et les autres formules personnalisées. Vérifiez 590 / 590 / 890 ₪, 990 ₪ pour le duo, 1 790 ₪ pour Intégral et 149 ₪ par poste supplémentaire. Le champ **Personal POS accounts without a per-employee charge** distingue ces nouvelles offres des anciennes licences nominatives. **Automatic** autorise une formule moins chère pour exactement les mêmes modules, sans retrait de droits ni de quotas ; **Recommended** la met en avant. Vérifiez les changements avant de publier. Aucun contrat ni devis sauvegardé n’est modifié par cette publication.

La publication en production met à jour les tarifs publics et les nouvelles offres après renouvellement du cache du site, environ une minute. Elle ne débite aucun client, ne crée aucune facture et ne modifie ni les prix ni les droits des contrats déjà acceptés. La revue et la publication restent deux actions distinctes ; une version concurrente bloque la sauvegarde obsolète.

Le prix mensuel standard est sans engagement minimum. L’aperçu annuel du module ou de la formule est calculé automatiquement à 11 mensualités pour 12 mois payés d’avance. Les licences supplémentaires et services restent au tarif complet. Cette règle figure dans les nouveaux devis ; les anciens documents et prix négociés ne sont pas modifiés.

<span id="commercial-documents-entry" />

## Préparer les documents commerciaux

Dans **Plans & modules**, ouvrez **Quotes & orders** avec un compte superadmin en développement ou en production. Composez devis et commandes PDF avec les modules, matériels et frais du catalogue. Les contrats existants sont conservés. Consultez la procédure interne Devis et bons de commande Foody pour les échéances, les avantages prépayés cumulables, les totaux séparés et la finalisation. Ces documents ne prélèvent aucun paiement et n’activent aucun abonnement.
