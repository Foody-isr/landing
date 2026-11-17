---
title: Devis et bons de commande Foody
description: Backoffice de développement → Payments & devices → Plans & modules → Quotes & orders.
apps: both
tags:
  - internal
  - backoffice-commercial-documents
updatedAt: '2026-11-16'
featureId: backoffice-commercial-documents
audience: internal
releaseStatus: available
---
Backoffice de développement → Payments & devices → Plans & modules → Quotes & orders.

## Disponibilité et accès

Réservé aux superadmins Foody dans la version sandbox qui contient ce module. La migration API 321 ajoute les documents commerciaux. Les PDF sont des devis ou bons de commande, sans encaissement, émission de facture fiscale ni activation automatique de droits. Les contrats existants restent inchangés. L’onglet **Quotes & orders** est masqué en production : la gestion du catalogue y est disponible indépendamment du pilote de devis et de facturation.

<span id="issuer" />

## Renseigner l’émetteur

Ouvrez **Issuer settings**. Saisissez la raison sociale, l’identifiant d’entreprise, l’adresse et les coordonnées de Foody. Choisissez la langue PDF par défaut, la saisie des prix HT ou TTC, ou **No VAT charged** selon le traitement applicable, puis le taux de TVA et les conditions commerciales. Enregistrez avec **Save issuer settings**. Ces valeurs sont copiées dans les nouveaux documents uniquement. Les coordonnées du PDF de démonstration ne sont jamais reprises. En cas de conflit, rechargez les réglages enregistrés avant de recommencer.

<span id="compose" />

## Composer un devis ou une commande

Choisissez **New quotation** ou **New order**. Renseignez le titre, la date, la validité du devis et le client. Le client peut être un prospect ; la recherche permet aussi de rattacher un restaurant existant. Relisez ses coordonnées. Choisissez le PDF en hébreu, français ou anglais ; les descriptions et conditions saisies ne sont pas traduites automatiquement. Cherchez puis ajoutez une formule, un module, du matériel, des licences ou des frais du catalogue. **Custom item** ajoute une ligne libre. Ajustez les quantités, descriptions, détails et prix convenus. Une ligne sur devis exige un prix explicite. La première sauvegarde fige la version du catalogue pour ce document ; les publications ultérieures ne recalculent pas ses tarifs ou inclusions.

Pour la grille révisée, ajoutez directement la ligne **Foody Intégral** ou **Restaurant + Commandes** lorsque vous vendez la formule : le devis ne remplace pas automatiquement plusieurs lignes séparées par un forfait. Ne cumulez pas le forfait et ses modules une seconde fois. Les licences caisse supplémentaires sont des postes actifs à 149 ₪ ; les frais EMV à 49 ₪ par terminal actif restent une autre ligne. Les frais uniques, options et matériels restent séparés. Les anciennes lignes et tarifs négociés ne sont pas réécrits.

<span id="schedule" />

## Distinguer paiement unique, mensualités et prépaiement

Pour le matériel ou la mise en service, utilisez **One-time payment**. Pour un abonnement ou des frais de terminal, utilisez **Monthly** et indiquez l’engagement minimum en mois ; 0 signifie sans engagement minimum. **Prepaid period** couvre 12, 24 ou une durée libre de 1 à 120 mois en un seul paiement. Son champ prix est le prix unitaire de toute la période. Passer de mensuel à prépayé propose 12 mensualités ; changer ensuite la durée conserve le prix négocié. Vérifiez-le ou utilisez **Use catalogue price** pour recalculer la référence sur la durée. Chaque ligne indique une échéance à la commande, à l’activation ou à une date. **By usage** affiche un tarif unitaire hors totaux fixes. **Included** indique une prestation à zéro. Les quotas des plans et modules sont indiqués par unité ; activez la liste détaillée des fonctionnalités si nécessaire.

<span id="review" />

## Vérifier et sauvegarder

Choisissez le mode HT/TTC et le taux de TVA. Changer le mode conserve les prix négociés HT, avec arrondi à l’agora. Complétez les conditions de livraison, activation, renouvellement et résiliation utiles à l’offre. **Calculate totals** affiche séparément paiements uniques et prépayés, mensualités et frais variables. Les mensualités engagées affichent aussi leur total sur la durée. **Preview PDF** prépare un brouillon marqué comme tel, avec logo Foody sombre et mise en page A4. Relisez les tableaux et téléchargez le PDF depuis l’aperçu. **Save draft** sauvegarde le document privé. Une erreur conserve les saisies ; corrigez le champ indiqué. En cas de sauvegarde incertaine, vérifiez **Saved documents** avant de créer un autre document.

<span id="finalize" />

## Finaliser le PDF et préparer la commande

Après sauvegarde, ouvrez **Review & finalize**, vérifiez l’aperçu puis **Finalize document**. Le document reçoit un numéro FQ pour un devis ou FO pour une commande ; ses tarifs, inclusions et PDF sont figés. Une erreur de génération ne finalise pas le document. Un devis expiré doit être corrigé avant finalisation. **View archived PDF** permet de consulter et télécharger les octets archivés. Pour un devis finalisé, **Create order draft** ouvre un unique brouillon de commande qui conserve ses prix et inclusions. Relisez puis finalisez cette commande séparément. Cette conversion ne vaut ni acceptation du client ni encaissement et n’envoie aucun email. Retrouvez les documents par type et statut dans **Saved documents**. Un conflit d’édition exige de rouvrir la version enregistrée ; les modifications locales ne l’écrasent pas.
