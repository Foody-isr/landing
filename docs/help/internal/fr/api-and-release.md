---
title: Contrats API et opérations de livraison
description: 'Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.'
apps: both
tags:
  - internal
  - platform-api
updatedAt: '2026-10-28'
featureId: platform-api
audience: internal
releaseStatus: available
---
Équipe technique : consultez AGENTS.md, README, contrat API et workflow du service.

<span id="verifone-admin-money-operations" />

## Rembourser ou annuler un paiement en ligne Verifone

La section paiement d’une commande Admin permet le remboursement lié total ou partiel et le VOID total d’un paiement en ligne Verifone unique admissible, pour un propriétaire/responsable avec payments.manage. L’état fournisseur, le montant encaissé et l’historique vérifié déterminent l’admissibilité, pas un délai fixe de 24 heures. La préparation et la remise ne sont pas annulées et aucun bouton de remboursement terminal POS n’est ajouté. Un résultat inconnu reste réservé : vérifiez-le sans renvoyer l’opération. Les avoirs et annulations Invoice4U nécessitent un contrôle distinct. Voir [la procédure de paiement en ligne](/fr/help/payments/how-payments-work#verifone-admin-refund-void).

Une vente ABS capturée encore en AUTHORISED/AUTHORIZED ou SETTLEMENT_REQUESTED n’est pas réglée : Admin affiche Montant annulable et uniquement Annuler tout le paiement, sans remboursement antérieur. Rembourser le paiement et Montant remboursable exigent un état réglé explicite ou un historique de remboursement partiel vérifié. Les états génériques APPROVED/COMPLETED, les contradictions et les preuves manquantes ne proposent aucune opération. Un changement d’état avant confirmation refuse l’action devenue obsolète ; le VOID n’est jamais remplacé automatiquement par un REFUND. Demande rejetée par Verifone signifie qu’aucune restitution n’est confirmée, pas nécessairement un refus de la banque.

Après une restitution totale vérifiée dans l’historique lié de Verifone, le bilan conserve le montant initial, affiche le montant intégral restitué et un solde restant nul, sans proposer de nouveau remboursement ni VOID. Un solde capturé remis à zéro après cette restitution n’est pas une préautorisation à libérer. Une preuve manquante ou incohérente exige toujours une vérification, sans renvoyer l’opération.

<span id="verifone-readable-hosted-theme" />

## Garder la page de paiement lisible

Un superadmin ouvre Restaurant > Payment > Verifone dans Backoffice et enregistre les réglages de paiement avant de choisir Synchronize published logo and colors. La synchronisation utilise uniquement le logo publié et la couleur de marque ou du bouton sélectionné. HPP utilise toujours une page claire, des panneaux blancs et du texte foncé ; les couleurs trop pâles sont assombries pour atteindre au moins 4,5:1 de contraste sur la page et les panneaux. Après installation de la version API avec cette règle de contraste, resynchronisez les restaurants déjà activés dans l’environnement autorisé ; l’ancien thème est signalé comme obsolète. Vérifiez le logo, les chiffres saisis, les labels, les erreurs et les icônes, sur mobile et en français, hébreu et anglais, sans soumettre de transaction non autorisée. Les couleurs du site et les fenêtres natives des wallets restent inchangées. Le nouveau thème propre au restaurant ne devient pas le thème par défaut de l’organisation et ne concerne que les nouveaux liens Checkout. Les liens existants et l’état financier sont conservés ; vérifiez le paiement avant toute nouvelle tentative. Aucune mise à jour groupée de production sans autorisation.

<span id="weight-hold-margin" />

## Vérifier le plafond de préautorisation au poids

Le champ public expected_hold_amount_minor est vérifié contre les lignes serveur et la marge du restaurant dans la transaction de création ; un écart annule la commande avant stock/prestataire. Le serveur écrit weight_hold_amount_minor et weight_hold_buffer_percent sans faire confiance aux external_metadata invitées ; le resolver conserve ce plafond ou HoldAmount existant. Les réglages acceptent des valeurs finies de 0 à 100 ; l’omission les préserve et le défaut reste 20. Restaurant public et réglages protégés exposent cette politique sans secret. TypeScript n’invente pas de marge inconnue. Les messages FR/HE/EN héritent du thème. Aucun changement de schéma, clé prestataire ou client POS.

<span id="pos-ledger-cash-drawer-contract" />

## Vérifier les contrats des transactions et du tiroir-caisse POS

Déployez et validez les migrations et routes API liées au restaurant avant d'activer Transactions et les rapports de tiroir-caisse sur le POS. Le registre distingue chaque paiement initial de sa commande : une commande peut avoir plusieurs paiements et un paiement couvrir plusieurs commandes. L'admissibilité au remboursement repose sur l'identifiant du paiement initial sélectionné, son mode, son montant et l'état fournisseur vérifié ; ne la déduisez jamais du seul statut de commande. Un remboursement en espèces concerne uniquement un paiement initial en espèces et est enregistré dans une session de caisse ouverte avec une clé d'idempotence. Un résultat fournisseur inconnu reste en attente de rapprochement ; ne le convertissez pas silencieusement en réussite et ne relancez pas un nouveau remboursement.

<span id="contracts" />

## Maintenir les contrats API contextualisés

L’inventaire conserve routes, handlers et sources. Un fragment relatif à un groupe n’est pas une URL autonome. Validez entrées, rôles JWT et propriété restaurant ; les routes publiques de restaurant restent contextualisées. Synchronisez Go, TypeScript et Dart. Les informations client par traitement nécessitent la capability de réglages `pos_fulfillment_customer_information_supported` et `customer_information` pour l’envoi groupé. Préservez un flag omis par ID stable ; false explicite le désactive. Validez et incluez atomiquement customer_name/customer_phone/delivery_notes/delivery_apt/custom_fields dans l’empreinte d’idempotence. Les lots suivants héritent seulement de coordonnées cohérentes ; clients mixtes et additions fractionnées refusent un remplacement. La création groupée supprime les confirmations client par service sans supprimer événements cuisine/équipe ni notifications de statut indépendantes. Aucun test ne doit envoyer de notification réelle. L’entrée pos_guest_details réservée au personnel contient first_name, last_name, identifier et note, annoncée par checks/capabilities. Les valeurs bornées et normalisées sont héritées de façon cohérente sur les envois non fractionnés. La création publique retire cette entrée et les vues publiques masquent ces métadonnées. Déployez l’API avant d’activer les champs clients correspondants ; une ancienne API les laisse désactivés. La préparation reste locale jusqu’à l’approbation et la publication de la version correspondante.

<span id="release" />

## Valider et promouvoir le même artefact

Utilisez une PR de fonctionnalité vers develop par dépôt, validez puis vérifiez l’artefact dev immuable. Promotion prod après autorisation humaine et vérification dev, sans reconstruction depuis main. Ne modifiez migrations appliquées ni vrais .env. Notez révisions et cibles de retour.

<span id="help" />

## Vérifier l’impact documentaire

Pour chaque comportement modifié, associez fonctions, mettez à jour FR/HE/EN et enregistrez les empreintes sources exactes. Une exception sans impact exige un motif concret relu. La CI rejette empreintes périmées, traductions absentes, nouvelles surfaces non classées et corpus IA divergent ; les métadonnées seules ne valident pas le produit.

<span id="whatsapp-media-contract" />

## Contrat des pièces jointes WhatsApp

Migration 262 et AutoMigrate ajoutent les fichiers immuables chiffrés par établissement, la sélection source/asset_id dans les références de modèles globales et de parcours, et les métadonnées de pièce jointe dans le journal. Les routes protégées /restaurants/:id/whatsapp/meta/media et /orders/:orderID/receipt.pdf appliquent restaurant, permissions et no-store. Le PDF utilise le Chrome isolé existant via CHROME_REMOTE_URL, sans nouvelle variable ni appel fiscal. La préparation ne contacte pas les endpoints d’envoi ; le transfert de média et l’envoi du modèle avec HEADER ont lieu après prise durable de la tentative. La révalidation porte sur l’appartenance, le type et l’empreinte du reçu relu ; aucune reprise d’un envoi incertain ni repli prestataire.

<span id="internal-combo-substitution-contract" />

## Faire une exception de formule sur une commande

Les exceptions internes de formule utilisent is_substitution par choix. Seuls les handlers JWT du personnel avec orders.manage dans le restaurant définissent l’autorité AllowSubstitutions non liée au JSON ; les appels publics et créations de service sans autorité sont refusés. La migration 264 ajoute le marqueur combo_substitution des lignes, faux par défaut. L’API vérifie appartenance au restaurant, article individuel actif à prix fixe, appartenance et activation du format, portions imposées, quantités et limites par format/article, puis les gardes de stock. Le remplacement porte un delta nul et aucun supplément de modificateur fixe de l’étape. La définition reste intacte ; la recomposition conserve le prix de base historique et s’annule entièrement en cas d’échec. Les brouillons, l’édition et les textes FR/HE/EN Admin conservent le marqueur. Les contrats de réponse Web et Dart acceptent cet ajout sans contrôle d’exception client ou POS. Déployer API et migration avant Admin ; publier l’aide et le corpus intégré sur la même révision revue.

<span id="counter-terminal-payment-before-kitchen" />

## Attendre le paiement au comptoir avant la cuisine

L’encaissement par terminal au comptoir conserve une commande du restaurant avec payment_status=pending pour obtenir le montant canonique et une référence stable. Sa création retient le cycle cuisine, bloque l’envoi avant paiement et exclut les paiements en attente de la vue POS en direct. Seul l’accord du terminal permet l’enregistrement par le contrat staff existant ; le client envoie ensuite la commande payée en cuisine. Refus et annulations réutilisent la même commande/référence. Conservez le rapprochement des accords ; ne rejouez jamais un débit incertain. Déployez l’API correspondante avant le client POS. Les paiements hébergés, autorisations par restaurant et services à table volontairement envoyés avant paiement restent inchangés.

<span id="mobile-help-corpus" />

## Synchroniser le corpus du parcours mobile

Le suivi du correctif de clavier natif doit publier les procédures de saisie compacte et intégrer leur corpus FR/HE/EN correspondant. Vérifier la même révision via support/status en développement puis en production ; aucun changement de logique de commande ou de paiement côté API.

<span id="google-street-refinement" />

## Résoudre les suggestions de rue Google

Google peut renvoyer un identifiant canonique différent pour un segment de rue. Accepter cette différence uniquement pour une rue sans numéro, après validation du pays et de la réponse du fournisseur. Cette précision ne reçoit ni preuve de livraison ni coordonnées : le client doit encore sélectionner une adresse complète. Conserver la correspondance exacte d’identifiant pour les adresses complètes, les signatures liées au restaurant et au visiteur, les limites de session et les budgets. Tester les rues canoniques, les pays étrangers, les identifiants absents ou invalides et le rejet des adresses complètes d’un autre lieu. Vérifier une recherche de rue et une adresse avec numéro après promotion. Référence fournisseur : https://developers.google.com/maps/documentation/places/web-service/place-id#obsolete

<span id="customer-social-sign-in" />

## Activer Facebook et Apple pour les clients

Déployer la migration 266 et l’API avant le Web. Configurer ensemble CUSTOMER_FACEBOOK_APP_ID, CUSTOMER_FACEBOOK_APP_SECRET et CUSTOMER_FACEBOOK_API_VERSION avec une version encore prise en charge par cette application Meta. Apple requiert CUSTOMER_APPLE_CLIENT_ID (Services ID), TEAM_ID, KEY_ID, PRIVATE_KEY et REDIRECT_URI sous le préfixe CUSTOMER_APPLE_. Enregistrer les domaines et l’URL HTTPS de retour exacte dans Apple Developer ; localhost/IP ne sont pas acceptés. Les identifiants de notifications Apple et de WhatsApp ne sont pas réutilisés automatiquement. GET /public/auth/providers expose seulement les réglages SDK publics des méthodes complètes ; une configuration partielle arrête le démarrage, une configuration vide désactive la méthode. Le SDK Facebook fournit un jeton utilisateur vérifié via app_id, type, validité, expiration et sujet Meta. Apple échange un code à usage unique et vérifie signature, émetteur, audience, expiration et nonce. Le BFF lie la demande au navigateur par un cookie HttpOnly temporaire, consomme cet état et conserve la session finale en HttpOnly. Aucun jeton fournisseur ni secret n’est écrit dans les logs ou le stockage du navigateur. Le sujet fournisseur reste la clé stable ; un contact Facebook ne lie jamais un compte par e-mail. Tester annulation, refus, rejouement, domaines, adresse Apple masquée et reprise du brouillon avec des comptes de test autorisés avant activation réelle. Les vérifications locales simulées ne prouvent pas la configuration externe.

<span id="carte-publication-stock-contract" />

## Transactions de publication de carte et de stock de vente

La migration API 267 ajoute les brouillons privés par carte/série, les versions publiées et les séries, compteurs et événements de stock de vente. Les lectures et l’historique nécessitent menu.view sur le restaurant ; les changements nécessitent menu.edit. La publication vérifie dans une transaction les révisions du brouillon, de sa source et du stock, préserve les engagements de commande et refuse les références hors restaurant. Déployez l’API avant Admin. Conservez les anciens compteurs pour les anciennes commandes ; la première activation de série reprend explicitement le disponible actuel. Vérifiez réservations concurrentes, libérations, isolation des séries futures et rollback en développement avant promotion.

<span id="stock-history-only-corpus" />

## Synchroniser la procédure du journal des stocks

Synchroniser internal/support/corpus.json avec le corpus public exporté pour la page Historique des stocks en lecture seule. Les endpoints paginés existants et leur autorisation menu.view ne changent pas. L’aide explique les filtres combinés, le lien produit et la préparation depuis le brouillon de carte ; elle ne propose plus de corrections immédiates dans menu/stock. Vérifier la même révision dans le statut public du support et les guides FR/HE/EN après déploiement, sans appel IA payant.

<span id="library-restock" />

## Sauvegarder les stocks hors série

POST /api/v1/menu/items/:id/sales-stock/restock accepte désormais les stocks restants des restaurants sans séries, avec menu.edit et le restaurant actif. expected_revision correspond à item.stock_revision ; tous les compteurs par taille, leur validation et leur journal sont atomiques sous le verrou des commandes. Les restaurants par séries gardent leurs compteurs par série. Les tailles étrangères, quantités invalides et révisions périmées sont rejetées sans changement partiel. Déployer cette API avant l’interface Articles. Aucun changement de schéma ou de variable d’environnement.

<span id="staff-activation-pos-code" />

## Code caisse à l’activation du personnel

validate-invite renvoie pos_pin_required selon les permissions actuelles de l’affectation au restaurant (orders.manage ou payments.manage), sans se fonder sur le rôle global ou son ancien libellé. setup-account revérifie indépendamment le périmètre, le rôle et l’obligation du code. Un PIN envoyé par un ancien client pour un membre sans droits caisse est ignoré sans écriture. Mot de passe, PIN éventuel, consommation du lien unique et génération du JWT sont atomiques ; un échec préserve l’invitation et les identifiants existants. Les liens utilisés, expirés, anciens et ambigus ou révoqués restent bloqués par des codes d’erreur autorisés ; les erreurs de persistance inattendues n’exposent ni SQL ni jeton. Aucune migration ni variable d’environnement. Déployer l’API avant l’Admin ; un lien e-mail encore inutilisé ne nécessite aucune réparation de données ni renvoi.

<span id="modifier-position-contract" />

## Contrat des modificateurs conditionnels

La migration 274 ajoute selection_config au lien article/groupe et selection_index aux instantanés de modificateurs. Déployer l’API et le schéma avant les clients compatibles. Les anciennes associations sans configuration conservent leur comportement. Les règles utilisent des identifiants vérifiés dans le restaurant et l’article ; une source modificateur est indépendante et à choix unique. Les positions répétées vont de 1 à 12 et exigent exactement une sélection. Le serveur recalcule les prix, rejette doublons, indices inexistants et choix masqués, et préfixe les noms enregistrés pour la cuisine. Les caches et payloads TypeScript/Dart conservent identifiant catalogue et position. La duplication inter-restaurants remappe les références. Les changements d’API, de traduction et de modèles n’altèrent pas les intégrations de paiement, Google ou livraison existantes. La documentation reste locale tant que le commit Landing revu n’a pas été autorisé puis épinglé ; ne pas publier les procédures avant les clients.

<span id="descriptive-variant-contract" />

## Contrat des dimensions de variante

Les groupes d’options portent un rôle propre à l’article : price conserve la variante tarifée absolue, identity conserve les dimensions descriptives sans effet sur le prix. selection_config conditionne leurs positions à un format tarifé indépendant. La commande transmet option_selections séparément de selected_variant_id et de modifiers ; les positions et les libellés sont figés, et les précisions client restent privées. Déployer la migration 275 et l’API avant les interfaces compatibles. Le contrôle du prix, de la propriété du restaurant et de chaque choix est effectué par le serveur. Les groupes historiques gardent leur comportement tant qu’ils ne sont pas reconfigurés.

<span id="unified-whatsapp-order-composer" />

## Vérifier le panneau WhatsApp unifié

Le panneau Admin commun aux commandes unitaires et à la sélection de la page utilise les aperçus et envois existants, sans nouvelle route de dispatch, migration, texte libre API ou modification des déclencheurs. Les brouillons de l’application restent locaux et exigent une confirmation avant abandon. Les statuts incertains conservent l’identifiant de tentative, y compris en changeant de type de message. GET /restaurants/:id/message-templates autorise settings.view ou orders.manage avec EnforceRestaurantAccess ; PUT et DELETE conservent settings.edit. La modification des permissions ne donne aucun accès aux credentials. Les traductions FR/HE/EN et les procédures commande/WhatsApp couvrent les nouveaux contrôles. Vérifier les réponses perdues, la file partiellement éligible, le changement de commande avant dispatch et le mobile RTL avec les fixtures synthétiques ; ne pas envoyer de messages réels pour valider l’interface. Le pin WORKSPACE est réservé à la revue locale : avant CI/publication, remplacer par le commit Landing immuable autorisé et déployer l’API avant l’Admin correspondant.

<span id="meta-template-image-proxy" />

## Image de modèle WhatsApp Meta

GET /api/v1/restaurants/:id/whatsapp/meta/templates/:templateId/image lit une image de modèle Utility approuvé appartenant au compte Meta de l’établissement. JWT, accès à l’établissement et permissions de lecture des réglages ou des commandes sont exigés. La réponse est privée, sans cache, avec type JPEG/PNG vérifié et limite de 5 Mo. Les URL Meta signées et les identifiants d’accès ne sont pas retournés. Les aperçus et envois incluent l’image Meta automatiquement en l’absence de fichier explicitement choisi ; une modification de son contenu invalide la confirmation manuelle précédente. Une récupération impossible produit une erreur sans envoi de texte seul.

<span id="weekly-series-rollover" />

## Vérifier la série courante sans commande

GET /api/v1/orders/series conserve les dates de remise triées et les agrégats existants, puis ajoute les jours du lot courant sans inventer de commande. Le champ facultatif is_current identifie une seule date par défaut : le premier jour de remise non passé du lot opérationnel. Le lot reste courant jusqu’à la fin de son dernier jour dans le fuseau du restaurant. Le choix de la carte et les règles publiques de prise de commande conservent leur propre résolution. Le client recharge la liste toutes les minutes visibles et au retour sur l’onglet ; Accueil et Commandes suivent le lot courant, mais préservent une sélection historique effectuée sur la page et les liens explicites de suivi des paiements. Valider les limites de clôture, minuit local, changement d’heure, plusieurs jours de remise, isolation restaurant, zéro commande et agrégats existants. Déployer API avant Admin et publier les procédures ensemble.

<span id="manual-weekly-ordering" />

## Piloter manuellement les commandes hebdomadaires

La migration 277 ajoute restaurant_settings.batch_ordering_mode (calendar par défaut, ou manual). Les réglages GET/PUT limités au restaurant exposent ce champ ; une valeur invalide échoue avant persistance. L’aperçu des lots accepte ce mode. Les configurations publiques/personnel exposent ordering_mode ; le mode manuel renvoie des dates d’ouverture/clôture vides et utilise la série opérationnelle courante pour les livraisons et références des cartes tournantes. Seuls les horaires automatiques de prise des commandes (hebdomadaires et retrait/livraison) sont ignorés. orders_paused, rush mode, services actifs, appartenance au restaurant, accès de test, préparation, stock, paiement et validation de livraison restent applicables. Le passage en manuel supprime la reprise programmée en conservant la pause effective. Aucune commande existante n’est modifiée. Déployer la migration API 277 avant Admin/Web/POS et vérifier les artefacts en développement avant promotion.

<span id="series-stock-mode-conversion" />

## Convertir les réservations d’une série en cours

Les routes de stock de série existantes acceptent le passage entre count, measure et per_variant avec expected_revision. Le restock reçoit une quantité restante ; Configure ajoute les engagements recalculés, tandis que la préparation de carte conserve une quantité initiale incluant les engagements. L’opération scoped menu.edit verrouille le stock de l’article et les commandes/lignes concernées, convertit leurs reserved_stock et les compteurs, puis écrit le journal dans la même transaction. Les snapshots commerciaux, ingrédients, statuts et autres séries restent inchangés. Les réservations libérées sont converties sans être engagées de nouveau ; les produits préparés restent consommés. Une incohérence ou une taille historique non résolue renvoie 422 stock_conversion_unavailable et annule toute la transaction. Un verrou concurrent ou une révision périmée renvoie 409 ; relire explicitement et réessayer. Déployer cette API avant l’Admin qui propose les changements sur une série engagée. Aucune migration ou variable d’environnement supplémentaire.

<span id="immediate-product-rule-confirmation" />

## Confirmer la règle avec le stock

Les routes staff POST /api/v1/menu/items/:id/sales-stock/availability et POST /api/v1/menu/items/:id/sales-stock/restock acceptent availability_rule_id en option. Une valeur positive doit désigner une règle active du restaurant authentifié ; zéro rétablit l’héritage et un champ absent conserve l’affectation. La première route accepte une règle seule sans override : aucun compteur, engagement, état forcé ou autre champ du produit n’est réécrit. Avec override ou un ajustement de stock, l’ensemble est validé dans une transaction sous le verrou des réservations. Un conflit de révision, une règle étrangère ou supprimée ou une erreur de persistance annule toute la demande. Les routes conservent menu.edit et le contexte restaurant ; aucun nouveau droit, route ou migration. Déployer cette API avant l’Admin qui enregistre la règle dès Appliquer. Une réponse confirmée suivie d’un échec de lecture se récupère par un rechargement, jamais en rejouant le stock. Les champs absents préservent les clients existants.

<span id="explicit-recipe-stock-source" />

## Source explicite du stock et réservations

La migration 279 ajoute stock_from_recipe à menu_items et item_stock_series, false par défaut : les configurations existantes gardent leur logique. POST /api/v1/menu/items/:id/sales-stock/restock avec stock_source=recipe, mode vide, unité vide, quantité null et expected_revision sélectionne réellement la recette. Le champ optionnel availability_rule_id peut être confirmé dans la même transaction sous verrou stock/commandes. Un conflit, une règle étrangère/supprimée ou une erreur annule tout. Les compteurs manuels dormants et les snapshots des commandes sont conservés ; les nouveaux calculs et réservations ignorent leur limite. Revenir à un mode manuel réactive les compteurs et adopte les nouvelles commandes sans perdre leurs prélèvements d’ingrédients/préparations. Les conversions de série existantes restent révisées et atomiques. Une conversion de compteur global non prouvable depuis des prélèvements historiques échoue avec stock_conversion_unavailable, sans les réinterpréter. La vente de stock déjà préparé doit être désactivée avant de sélectionner la recette. Les réponses publiques normalisent les champs manuels inactifs ; le staff reçoit stored_mode/stored_unit et recipe_configured pour l’éditeur. Les autres clients ignorent les champs ajoutés et conservent leurs contrats. Aucun changement de droits ni d’environnement. Déployer API avant Admin puis promouvoir les mêmes artefacts vérifiés en développement. GET /api/v1/availability/items/:id/preview accepte serie_date en option pour expliquer la série affichée ; une date invalide renvoie 400. Le détail et le statut utilisent la même source active et les mêmes compteurs, sans mutation.
