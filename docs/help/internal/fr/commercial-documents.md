---
title: Devis et bons de commande Foody
description: Backoffice de développement → Payments & devices → Plans & modules → Quotes & orders.
apps: both
tags:
  - internal
  - backoffice-commercial-documents
updatedAt: '2026-11-18'
featureId: backoffice-commercial-documents
audience: internal
releaseStatus: available
---
Backoffice de production ou de développement → Payments & devices → Plans & modules → Quotes & orders.

## Disponibilité et accès

Réservé aux superadmins Foody en développement et en production dans la version compatible avec la migration API 321. Les PDF sont des devis ou bons de commande privés ; leur création ne collecte aucun paiement, ne produit pas de facture fiscale et n’active aucun abonnement. Les paiements et prélèvements du pilote restent réservés à la sandbox. Les anciens documents et contrats conservent leurs conditions.

<span id="issuer" />

## Renseigner l’émetteur

Ouvrez **Issuer settings**. Saisissez la raison sociale, l’identifiant d’entreprise, l’adresse et les coordonnées de Foody. Choisissez la langue PDF par défaut, la saisie des prix HT ou TTC, ou **No VAT charged** selon le traitement applicable, puis le taux de TVA et les conditions commerciales. Enregistrez avec **Save issuer settings**. Ces valeurs sont copiées dans les nouveaux documents uniquement. Les coordonnées du PDF de démonstration ne sont jamais reprises. En cas de conflit, rechargez les réglages enregistrés avant de recommencer.

<span id="compose" />

## Composer un devis ou une commande

Choisissez **New quotation** ou **New order**. Renseignez le titre, la date, la validité du devis et le client. Le client peut être un prospect ; la recherche permet aussi de rattacher un restaurant existant. Relisez ses coordonnées. Choisissez le PDF en hébreu, français ou anglais ; les descriptions et conditions saisies ne sont pas traduites automatiquement. Cherchez puis ajoutez une formule, un module, du matériel, des licences ou des frais du catalogue. **Custom item** ajoute une ligne libre. Ajustez les quantités, descriptions, détails et prix convenus. Une ligne sur devis exige un prix explicite. La première sauvegarde fige la version du catalogue pour ce document ; les publications ultérieures ne recalculent pas ses tarifs ou inclusions.

Pour la grille révisée, ajoutez directement la ligne **Foody Intégral** ou **Restaurant + Online** lorsque vous vendez la formule : le devis ne remplace pas automatiquement plusieurs lignes séparées par un forfait. Ne cumulez pas le forfait et ses modules une seconde fois. Les licences caisse supplémentaires sont des postes actifs à 149 ₪ ; les frais EMV à 49 ₪ par terminal actif restent une autre ligne. Les frais uniques, options et matériels restent séparés. Les anciennes lignes et tarifs négociés ne sont pas réécrits.

<span id="schedule" />

## Distinguer paiement unique, mensualités et prépaiement

Utilisez **Monthly** avec un engagement de 0 mois pour le mensuel standard sans engagement. **Prepaid period** affiche un prix pour toute la période : 12 mois au prix de 11 pour les modules et formules ; 24 mois au prix de 22. Les licences supplémentaires et frais récurrents restent calculés sur 12 ou 24 mois complets. Les autres durées de 1 à 120 mois n’ont pas de remise automatique. Passer une ligne au tarif catalogue de mensuel à prépayé applique la règle annuelle ; un prix négocié est conservé proportionnellement. Changer la durée d’une ligne prépayée conserve le montant convenu : relisez-le ou cliquez **Use catalogue price** pour recalculer. Les anciens documents sans règle annuelle gardent leur référence historique. **One-time payment** couvre matériel et mise en service. **By usage** affiche un tarif hors totaux fixes. **Included** ajoute une prestation offerte à zéro. Chaque ligne précise son échéance. Les quotas sont affichés par unité.

<span id="review" />

## Vérifier et sauvegarder

Choisissez le mode HT/TTC et le taux de TVA. Changer le mode conserve les prix négociés HT, avec arrondi à l’agora. Complétez les conditions de livraison, activation, renouvellement et résiliation utiles à l’offre. **Calculate totals** affiche séparément paiements uniques et prépayés, mensualités et frais variables. Les mensualités engagées affichent aussi leur total sur la durée. **Preview PDF** prépare un brouillon marqué comme tel, avec logo Foody sombre et mise en page A4. Relisez les tableaux et téléchargez le PDF depuis l’aperçu. **Save draft** sauvegarde le document privé. Une erreur conserve les saisies ; corrigez le champ indiqué. En cas de sauvegarde incertaine, vérifiez **Saved documents** avant de créer un autre document.

L’économie logiciel HT apparaît dans le récapitulatif et dans le PDF lorsque le tarif annuel standard est appliqué. Elle n’est pas annoncée pour un montant négocié différent. Les offres commerciales prépayées cumulent cette remise avec les prestations offertes : pour 12 mois, création du site Commandes ou mise en service Restaurant selon le module souscrit (une seule au choix pour une formule combinée) ; pour 24 mois, ces deux prestations et une journée de formation selon les modules souscrits. Ajoutez explicitement les prestations retenues en **Included**, avec le périmètre et la durée prépayée dans les conditions ; elles ne sont pas insérées automatiquement. Cuisine : accompagnement à convenir au devis. Matériel, paiements et options restent payants.

<span id="finalize" />

## Finaliser le PDF et préparer la commande

Après sauvegarde, ouvrez **Review & finalize**, vérifiez l’aperçu puis **Finalize document**. Le document reçoit un numéro FQ pour un devis ou FO pour une commande ; ses tarifs, inclusions et PDF sont figés. Une erreur de génération ne finalise pas le document. Un devis expiré doit être corrigé avant finalisation. **View archived PDF** permet de consulter et télécharger les octets archivés. Pour un devis finalisé, **Create order draft** ouvre un unique brouillon de commande qui conserve ses prix et inclusions. Relisez puis finalisez cette commande séparément. Cette conversion ne vaut ni acceptation du client ni encaissement et n’envoie aucun email. Retrouvez les documents par type et statut dans **Saved documents**. Un conflit d’édition exige de rouvrir la version enregistrée ; les modifications locales ne l’écrasent pas.
