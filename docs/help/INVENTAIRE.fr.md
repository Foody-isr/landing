# Inventaire fonctionnel Foody

Révision du relevé : 2026-10-18.

100 fiches de fonctionnalités, 666 procédures/sous-fonctionnalités, dont 91 guides publics en trois langues et 9 fiches opérateur internes. Le relevé machine contient 2173 fichiers applicatifs et 2041 surfaces de code. Aucune route de page/application relevée ne reste sans classification.

Ce relevé décrit les sources examinées, les contrôles et les procédures. Il ne certifie pas chaque état d’exécution ni une installation physique. Les chemins API relatifs à un groupe et les enfants Flutter relatifs conservent cette qualification. Les fichiers techniques partagés sont identifiés séparément.

## Services

| Service | Fichiers sources | Surfaces | Dépôt/version |
|---|---:|---:|---|
| foodyserver | 560 | 870 | 6ce6e14287de ; versioned |
| foodyadmin | 764 | 775 | b146c6fdcea8 ; versioned |
| foodylanding | 127 | 21 | b146b31b4950 ; versioned |
| foodyweb | 337 | 167 | 5ddc1ea843d9 ; versioned |
| foodypos | 341 | 158 | 64dce2731c01 ; versioned |
| foodybackoffice | 44 | 50 | 8b4929d31bc4 ; versioned |

## getting-started

### [Se connecter et récupérer un accès](../../src/content/help/fr/getting-started/first-login.mdx)

Identifiant : `account-access`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Activer une invitation](../../src/content/help/fr/getting-started/first-login.mdx#activate)
- [Sélectionner le restaurant](../../src/content/help/fr/getting-started/first-login.mdx#restaurant)
- [Récupérer l’accès](../../src/content/help/fr/getting-started/first-login.mdx#recover)
- [Terminer un shift de caisse en sécurité](../../src/content/help/fr/getting-started/first-login.mdx#end-pos-shift)

### [Configurer votre restaurant avec Foody](../../src/content/help/fr/getting-started/complete-setup-guide.mdx)

Identifiant : `getting-started-complete-setup-guide`. Public : public. Disponibilité : available. Services : foodyadmin, foodylanding.

- [Vérifier la configuration avec votre interlocuteur Foody](../../src/content/help/fr/getting-started/complete-setup-guide.mdx#section-1)
- [Préparer un compte Google propre à votre établissement](../../src/content/help/fr/getting-started/complete-setup-guide.mdx#google-account-guide)

### [Comment tout s'articule : de l'ingrédient au plat épuisé](../../src/content/help/fr/getting-started/how-it-all-connects.mdx)

Identifiant : `getting-started-how-it-all-connects`. Public : public. Disponibilité : available. Services : foodyadmin, foodylanding.

- [La vue d'ensemble](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-1)
- [Configurez dans cet ordre](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-2)
- [1. Ajoutez vos ingrédients au Stock](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-3)
- [2. (Optionnel) Créez vos Préparations](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-4)
- [3. Créez vos articles](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-5)
- [4. Donnez une recette à chaque article](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-6)
- [5. Placez les articles dans un groupe de menu](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-7)
- [6. La disponibilité fonctionne alors toute seule](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-8)
- [Ce que vous obtenez une fois la chaîne connectée](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-9)
- [Pour aller plus loin](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#section-10)
- [Préparer un compte Google propre à votre établissement](../../src/content/help/fr/getting-started/how-it-all-connects.mdx#google-account-guide)

### [Utiliser le centre d’aide et l’assistant Foody](../../src/content/help/fr/getting-started/using-support.mdx)

Identifiant : `getting-started-using-support`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodylanding.

- [Demander de l’aide sur les modes POS sans données client](../../src/content/help/fr/getting-started/using-support.mdx#pos-fulfillment-question)
- [Trouver une réponse](../../src/content/help/fr/getting-started/using-support.mdx#section-1)
- [Poser une question](../../src/content/help/fr/getting-started/using-support.mdx#section-2)
- [Demander où consulter les paiements](../../src/content/help/fr/getting-started/using-support.mdx#ask-about-transactions)
- [Si vous ne trouvez pas la réponse](../../src/content/help/fr/getting-started/using-support.mdx#section-3)
- [Signaler une procédure différente de votre écran](../../src/content/help/fr/getting-started/using-support.mdx#report-outdated-guide)
- [Retrouver l’aide à la planification des livraisons](../../src/content/help/fr/getting-started/using-support.mdx#delivery-route-help)
- [Trouver l’aide sur les pièces jointes WhatsApp](../../src/content/help/fr/getting-started/using-support.mdx#whatsapp-attachment-help)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/getting-started/using-support.mdx#combo-substitution-question)
- [Retrouver la procédure d’adresse mobile](../../src/content/help/fr/getting-started/using-support.mdx#mobile-address-help)
- [Retrouver l’historique des stocks](../../src/content/help/fr/getting-started/using-support.mdx#sale-stock-history-help)
- [Aide sur les quotas et la connexion facultative](../../src/content/help/fr/getting-started/using-support.mdx#usage-and-entry-help)
- [Préparer un compte Google propre à votre établissement](../../src/content/help/fr/getting-started/using-support.mdx#google-account-guide)
- [Demander de l’aide sur les choix conditionnels](../../src/content/help/fr/getting-started/using-support.mdx#conditional-choice-help)
- [Demander de l’aide sur un envoi WhatsApp](../../src/content/help/fr/getting-started/using-support.mdx#whatsapp-order-message-help)

### [Offres, démonstration et contact Foody](../../src/content/help/fr/getting-started/offers-and-contact.mdx)

Identifiant : `landing-offers`. Public : public. Disponibilité : available. Services : foodylanding.

- [Comparer les offres publiques](../../src/content/help/fr/getting-started/offers-and-contact.mdx#offers)
- [Demander une démonstration ou de l’aide](../../src/content/help/fr/getting-started/offers-and-contact.mdx#contact)

### [Rechercher et naviguer dans FoodyAdmin](../../src/content/help/fr/getting-started/search-and-navigation.mdx)

Identifiant : `global-search`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Retrouver une fiche métier](../../src/content/help/fr/getting-started/search-and-navigation.mdx#search)
- [Filtrer et examiner une liste](../../src/content/help/fr/getting-started/search-and-navigation.mdx#lists)
- [Retrouver la vue des stocks des articles](../../src/content/help/fr/getting-started/search-and-navigation.mdx#carte-series-stock)

## account

### [Sécurité du compte et clés d’accès](../../src/content/help/fr/account/security.mdx)

Identifiant : `account-security`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Ajouter une clé d’accès](../../src/content/help/fr/account/security.mdx#enrol)
- [Se connecter avec une clé d’accès](../../src/content/help/fr/account/security.mdx#use)
- [Retirer une clé inutilisée](../../src/content/help/fr/account/security.mdx#remove)

### [Abonnement et facturation](../../src/content/help/fr/account/subscription.mdx)

Identifiant : `billing`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Lire l’abonnement actuel](../../src/content/help/fr/account/subscription.mdx#read)
- [Vérifier un changement de formule](../../src/content/help/fr/account/subscription.mdx#change)
- [Consulter les événements de facturation](../../src/content/help/fr/account/subscription.mdx#events)

## staff

### [Employés et invitations](../../src/content/help/fr/staff/invite-staff.mdx)

Identifiant : `staff-invitations`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Inviter un employé](../../src/content/help/fr/staff/invite-staff.mdx#invite)
- [Renvoyer une invitation](../../src/content/help/fr/staff/invite-staff.mdx#resend)
- [Vérifier et retirer un accès](../../src/content/help/fr/staff/invite-staff.mdx#review)
- [Modifier les coordonnées et la destination du livreur](../../src/content/help/fr/staff/invite-staff.mdx#edit-staff-contacts)
- [Reprendre une livraison après un départ de test](../../src/content/help/fr/staff/invite-staff.mdx#delivery-test-departure-recovery)
- [Consulter le personnel depuis le POS mobile](../../src/content/help/fr/staff/invite-staff.mdx#mobile-terminal-pages)

### [Rôles et permissions](../../src/content/help/fr/staff/roles-and-permissions.mdx)

Identifiant : `staff-roles`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Créer un rôle](../../src/content/help/fr/staff/roles-and-permissions.mdx#create)
- [Affecter et vérifier](../../src/content/help/fr/staff/roles-and-permissions.mdx#assign)
- [Modifier ou retirer un rôle](../../src/content/help/fr/staff/roles-and-permissions.mdx#change)
- [Accès aux nouveaux réglages](../../src/content/help/fr/staff/roles-and-permissions.mdx#related-service-controls)
- [Code caisse à l’activation du personnel](../../src/content/help/fr/staff/roles-and-permissions.mdx#staff-activation-pos-code)

### [Accès POS, appareils et shifts](../../src/content/help/fr/staff/devices-and-shifts.mdx)

Identifiant : `staff-devices-shifts`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Activer un appareil POS](../../src/content/help/fr/staff/devices-and-shifts.mdx#pair)
- [Utiliser un code POS personnel](../../src/content/help/fr/staff/devices-and-shifts.mdx#pin)
- [Consulter les shifts](../../src/content/help/fr/staff/devices-and-shifts.mdx#report)
- [Terminer un shift avec une caisse ouverte](../../src/content/help/fr/staff/devices-and-shifts.mdx#finish-with-cash-drawer)
- [Lire le rapport du tiroir sur un terminal portable](../../src/content/help/fr/staff/devices-and-shifts.mdx#mobile-terminal-pages)

## customers

### [Clients, adresses et doublons](../../src/content/help/fr/customers/managing-customers.mdx)

Identifiant : `customers-profiles`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Retrouver un client](../../src/content/help/fr/customers/managing-customers.mdx#find)
- [Modifier la fiche client](../../src/content/help/fr/customers/managing-customers.mdx#edit)
- [Autoriser la commande en espèces](../../src/content/help/fr/customers/managing-customers.mdx#trusted)
- [Fusionner des doublons](../../src/content/help/fr/customers/managing-customers.mdx#merge)
- [Gérer les téléphones et choisir le numéro WhatsApp](../../src/content/help/fr/customers/managing-customers.mdx#phone-corrections)

## marketing

### [Promotions en ligne et codes de réduction](../../src/content/help/fr/marketing/promotions.mdx)

Identifiant : `promotions`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Créer une promotion](../../src/content/help/fr/marketing/promotions.mdx#create)
- [Définir les limites](../../src/content/help/fr/marketing/promotions.mdx#limits)
- [Vérifier le résultat client](../../src/content/help/fr/marketing/promotions.mdx#verify)

### [Stories et contenus Instagram](../../src/content/help/fr/marketing/stories-and-instagram.mdx)

Identifiant : `social-stories`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb.

- [Connecter et choisir le contenu](../../src/content/help/fr/marketing/stories-and-instagram.mdx#connection)
- [Vérifier la page Stories](../../src/content/help/fr/marketing/stories-and-instagram.mdx#display)

## analytics

### [Lire le tableau de bord et les rapports](../../src/content/help/fr/analytics/dashboard.mdx)

Identifiant : `analytics-dashboard`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Commencer par l’accueil](../../src/content/help/fr/analytics/dashboard.mdx#section-1)
- [Vérifier la base de date](../../src/content/help/fr/analytics/dashboard.mdx#section-2)
- [Comparaisons et données indisponibles](../../src/content/help/fr/analytics/dashboard.mdx#section-3)
- [Rapports détaillés](../../src/content/help/fr/analytics/dashboard.mdx#section-4)

### [Assistant métier du restaurant](../../src/content/help/fr/analytics/business-assistant.mdx)

Identifiant : `business-ai`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Interroger les données métier](../../src/content/help/fr/analytics/business-assistant.mdx#question)
- [Comprendre le périmètre du panneau](../../src/content/help/fr/analytics/business-assistant.mdx#limits)

## kitchen

### [Disponibilité (épuisé & stock faible)](../../src/content/help/fr/kitchen/availability.mdx)

Identifiant : `kitchen-availability`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Ouvrir Stock & disponibilité](../../src/content/help/fr/kitchen/availability.mdx#section-1)
- [Choisir la source du stock](../../src/content/help/fr/kitchen/availability.mdx#section-2)
- [Choisir et gérer une règle](../../src/content/help/fr/kitchen/availability.mdx#section-3)
- [Forcer un statut puis enregistrer](../../src/content/help/fr/kitchen/availability.mdx#section-4)
- [Vérifier le calcul et les quantités par taille](../../src/content/help/fr/kitchen/availability.mdx#section-5)
- [Contrôler après enregistrement](../../src/content/help/fr/kitchen/availability.mdx#section-6)
- [Préparer le stock d’une nouvelle série](../../src/content/help/fr/kitchen/availability.mdx#series-sale-stock)
- [Rechercher les changements de stock](../../src/content/help/fr/kitchen/availability.mdx#sale-stock-history)
- [Gérer un produit suivi par série](../../src/content/help/fr/kitchen/availability.mdx#series-product)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/kitchen/availability.mdx#library-availability)
- [Identifier les variantes à préparer](../../src/content/help/fr/kitchen/availability.mdx#variant-position-preparation)

### [Operations Quotidiennes](../../src/content/help/fr/kitchen/daily-operations.mdx)

Identifiant : `kitchen-daily-operations`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Ouvrir la bonne journée](../../src/content/help/fr/kitchen/daily-operations.mdx#section-3)
- [Accès et données nécessaires](../../src/content/help/fr/kitchen/daily-operations.mdx#section-23)
- [Préparer le service](../../src/content/help/fr/kitchen/daily-operations.mdx#prepare-service)
- [Pendant le service](../../src/content/help/fr/kitchen/daily-operations.mdx#during-service)
- [Importer, rapprocher et corriger les ventes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-4)
- [Vérifier et recevoir les livraisons](../../src/content/help/fr/kitchen/daily-operations.mdx#section-7)
- [Comparer le prévu au compté](../../src/content/help/fr/kitchen/daily-operations.mdx#section-8)
- [Distinguer les espaces de coût et de recette](../../src/content/help/fr/kitchen/daily-operations.mdx#section-14)
- [Enregistrer la transmission](../../src/content/help/fr/kitchen/daily-operations.mdx#section-16)
- [Clôturer la journée](../../src/content/help/fr/kitchen/daily-operations.mdx#section-17)
- [Réouvrir un rapport autorisé](../../src/content/help/fr/kitchen/daily-operations.mdx#reopen-day)
- [Générer explicitement les brouillons estimés](../../src/content/help/fr/kitchen/daily-operations.mdx#section-18)
- [Vérifier puis envoyer manuellement](../../src/content/help/fr/kitchen/daily-operations.mdx#section-20)
- [Reprendre après une erreur](../../src/content/help/fr/kitchen/daily-operations.mdx#section-24)
- [Parcours et guides liés](../../src/content/help/fr/kitchen/daily-operations.mdx#section-26)
- [Contrôler le journal de stock de la série](../../src/content/help/fr/kitchen/daily-operations.mdx#carte-series-stock)
- [Identifier les variantes à préparer](../../src/content/help/fr/kitchen/daily-operations.mdx#variant-position-preparation)

### [Coût matière](../../src/content/help/fr/kitchen/food-cost.mdx)

Identifiant : `kitchen-food-cost`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/kitchen/food-cost.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/kitchen/food-cost.mdx#section-2)
- [Ce que vous voyez](../../src/content/help/fr/kitchen/food-cost.mdx#section-3)
- [Comment l'utiliser](../../src/content/help/fr/kitchen/food-cost.mdx#section-4)
- [Théorique vs réel](../../src/content/help/fr/kitchen/food-cost.mdx#section-5)
- [Quota de vente et coût de recette](../../src/content/help/fr/kitchen/food-cost.mdx#carte-series-stock)

### [Préparations](../../src/content/help/fr/kitchen/preparations.mdx)

Identifiant : `kitchen-preparations`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/kitchen/preparations.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/kitchen/preparations.mdx#section-2)
- [Pourquoi les utiliser](../../src/content/help/fr/kitchen/preparations.mdx#section-3)
- [Exemple](../../src/content/help/fr/kitchen/preparations.mdx#section-4)
- [Distinguer préparations et quotas de vente](../../src/content/help/fr/kitchen/preparations.mdx#carte-series-stock)
- [Identifier les variantes à préparer](../../src/content/help/fr/kitchen/preparations.mdx#variant-position-preparation)

### [Gestion des Stocks](../../src/content/help/fr/kitchen/stock-management.mdx)

Identifiant : `kitchen-stock-management`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Lire la liste de stock actuelle](../../src/content/help/fr/kitchen/stock-management.mdx#section-1)
- [Rechercher et filtrer par catégorie ou état](../../src/content/help/fr/kitchen/stock-management.mdx#section-34)
- [Lire les colonnes et les niveaux de conditionnement](../../src/content/help/fr/kitchen/stock-management.mdx#section-35)
- [Créer ou modifier une fiche ingrédient](../../src/content/help/fr/kitchen/stock-management.mdx#section-4)
- [Saisir l’identité, l’achat et le prix](../../src/content/help/fr/kitchen/stock-management.mdx#section-6)
- [Comprendre les unités et leurs conversions](../../src/content/help/fr/kitchen/stock-management.mdx#section-7)
- [Enregistrer une entrée, une perte ou un ajustement](../../src/content/help/fr/kitchen/stock-management.mdx#section-13)
- [Consulter l’historique et comprendre les écarts](../../src/content/help/fr/kitchen/stock-management.mdx#section-17)
- [Catégories, sélection et actions groupées](../../src/content/help/fr/kitchen/stock-management.mdx#section-24)
- [Importer une livraison et reprendre un brouillon](../../src/content/help/fr/kitchen/stock-management.mdx#section-25)
- [Relier les ingrédients aux recettes](../../src/content/help/fr/kitchen/stock-management.mdx#section-31)
- [Contrôler après une modification](../../src/content/help/fr/kitchen/stock-management.mdx#section-37)
- [Vérifier le stock prédéfini des articles](../../src/content/help/fr/kitchen/stock-management.mdx#carte-series-stock)
- [Identifier les variantes à préparer](../../src/content/help/fr/kitchen/stock-management.mdx#variant-position-preparation)

### [Fournisseurs et commandes d’achat](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx)

Identifiant : `suppliers-purchasing`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Gérer les produits fournisseurs](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#supplier)
- [Transformer les besoins en commande d’achat](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#needs)
- [Vérifier et envoyer la commande](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#send)
- [Réceptionner ou annuler volontairement](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#receive)

### [Scanner et vérifier les livraisons fournisseurs](../../src/content/help/fr/kitchen/delivery-note-import.mdx)

Identifiant : `delivery-import`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Capturer le document](../../src/content/help/fr/kitchen/delivery-note-import.mdx#capture)
- [Associer produits et unités](../../src/content/help/fr/kitchen/delivery-note-import.mdx#mapping)
- [Reprendre un brouillon](../../src/content/help/fr/kitchen/delivery-note-import.mdx#draft)
- [Confirmer une fois et vérifier le stock](../../src/content/help/fr/kitchen/delivery-note-import.mdx#confirm)

### [Laboratoire de recettes et versions](../../src/content/help/fr/kitchen/recipe-lab.mdx)

Identifiant : `recipe-lab`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Démarrer ou importer une recette](../../src/content/help/fr/kitchen/recipe-lab.mdx#start)
- [Valider les ingrédients associés](../../src/content/help/fr/kitchen/recipe-lab.mdx#ingredients)
- [Affiner et vérifier le coût](../../src/content/help/fr/kitchen/recipe-lab.mdx#refine)
- [Valider une version vérifiée](../../src/content/help/fr/kitchen/recipe-lab.mdx#commit)

### [Compagnon Cuisine : préparation, service et clôture](../../src/content/help/fr/kitchen/companion.mdx)

Identifiant : `kitchen-companion`. Public : public. Disponibilité : available. Services : foodypos.

- [Préparer les objectifs de production](../../src/content/help/fr/kitchen/companion.mdx#production)
- [Consulter les priorités du service](../../src/content/help/fr/kitchen/companion.mdx#service)
- [Vérifier les ventes et clôturer](../../src/content/help/fr/kitchen/companion.mdx#closing)
- [Utiliser Siri si compatible](../../src/content/help/fr/kitchen/companion.mdx#siri)

### [Données cuisine et rapprochement des ventes](../../src/content/help/fr/kitchen/data-and-sales-links.mdx)

Identifiant : `kitchen-data`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Examiner la couverture des données](../../src/content/help/fr/kitchen/data-and-sales-links.mdx#inspect)
- [Corriger une correspondance de vente](../../src/content/help/fr/kitchen/data-and-sales-links.mdx#match)

### [Unités, politique de stock et disponibilité](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx)

Identifiant : `stock-units-policy`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Gérer les unités de mesure](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx#units)
- [Régler stock et disponibilité](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx#policy)
- [Lire les quantités du bon compteur](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx#carte-series-stock)

## menu

### [Articles, catégories et menus clients](../../src/content/help/fr/menu/categories-and-items.mdx)

Identifiant : `menu-categories-and-items`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Consulter la bibliothèque Articles](../../src/content/help/fr/menu/categories-and-items.mdx#section-1)
- [Rechercher, filtrer et choisir les colonnes](../../src/content/help/fr/menu/categories-and-items.mdx#filters)
- [Créer, modifier et effectuer des actions groupées](../../src/content/help/fr/menu/categories-and-items.mdx#edit)
- [Rendre un article visible aux clients](../../src/content/help/fr/menu/categories-and-items.mdx#section-2)
- [Choisir les groupes dans le brouillon de carte](../../src/content/help/fr/menu/categories-and-items.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/menu/categories-and-items.mdx#related-service-controls)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/categories-and-items.mdx#library-availability)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/menu/categories-and-items.mdx#conditional-item-choices)
- [Parcourir la bibliothèque sur mobile](../../src/content/help/fr/menu/categories-and-items.mdx#mobile-terminal-pages)

### [Créer un article du menu, étape par étape](../../src/content/help/fr/menu/creating-a-menu-item.mdx)

Identifiant : `menu-creating-a-menu-item`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Vérifier les accès et ouvrir l’éditeur](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-1)
- [Informations de l’article et photo](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-3)
- [Statut, Catégories et Cartes](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-6)
- [Prix et variantes](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-7)
- [Personnalisations et autres sections](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-10)
- [Enregistrer, puis compléter la recette](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-11)
- [Vérifier l’affichage et résoudre une absence](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-12)
- [Ajouter un article enregistré à une carte publiée](../../src/content/help/fr/menu/creating-a-menu-item.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/menu/creating-a-menu-item.mdx#related-service-controls)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/creating-a-menu-item.mdx#library-availability)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/menu/creating-a-menu-item.mdx#conditional-item-choices)
- [Parcourir la bibliothèque sur mobile](../../src/content/help/fr/menu/creating-a-menu-item.mdx#mobile-terminal-pages)

### [Configurer les ingrédients et portions](../../src/content/help/fr/menu/ingredients-and-portions.mdx)

Identifiant : `menu-ingredients-and-portions`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Ouvrir la recette dans l’éditeur continu](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-1)
- [Ajouter une matière première ou une préparation](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-2)
- [Saisir la quantité pour une portion](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-4)
- [Définir les quantités par taille](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-7)
- [Préremplir et contrôler les cellules](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-11)
- [Vérifier unités, coût et modificateurs](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-13)
- [Enregistrer et reprendre après une erreur](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-19)
- [Capacité des recettes et quotas de vente par série](../../src/content/help/fr/menu/ingredients-and-portions.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/menu/ingredients-and-portions.mdx#related-service-controls)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/ingredients-and-portions.mdx#library-availability)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/menu/ingredients-and-portions.mdx#conditional-item-choices)
- [Parcourir la bibliothèque sur mobile](../../src/content/help/fr/menu/ingredients-and-portions.mdx#mobile-terminal-pages)

### [Menus, cartes & groupes (ce que voient les clients)](../../src/content/help/fr/menu/menus-and-groups.mdx)

Identifiant : `menu-menus-and-groups`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/menu/menus-and-groups.mdx#section-1)
- [La structure](../../src/content/help/fr/menu/menus-and-groups.mdx#section-2)
- [Préparer, enregistrer et publier une carte](../../src/content/help/fr/menu/menus-and-groups.mdx#section-3)
- [Choisir des articles avec photos et filtres](../../src/content/help/fr/menu/menus-and-groups.mdx#draft-item-picker)
- [Où ça se vend : en ligne ou en caisse](../../src/content/help/fr/menu/menus-and-groups.mdx#section-4)
- [Quand ça se vend : horaires de disponibilité](../../src/content/help/fr/menu/menus-and-groups.mdx#section-5)
- [Le lien avec la disponibilité](../../src/content/help/fr/menu/menus-and-groups.mdx#section-6)
- [Contrôler la publication](../../src/content/help/fr/menu/menus-and-groups.mdx#section-7)
- [Quitter et résoudre un conflit](../../src/content/help/fr/menu/menus-and-groups.mdx#draft-leave-and-conflict)
- [Préparer le stock d’une nouvelle série](../../src/content/help/fr/menu/menus-and-groups.mdx#series-sale-stock)
- [Utiliser le tableau et les actions des articles](../../src/content/help/fr/menu/menus-and-groups.mdx#table-actions)
- [Changer la disponibilité et lire l’historique](../../src/content/help/fr/menu/menus-and-groups.mdx#contextual-availability)
- [Consulter uniquement l’historique des stocks](../../src/content/help/fr/menu/menus-and-groups.mdx#sale-stock-history-page)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/menus-and-groups.mdx#library-availability)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/menu/menus-and-groups.mdx#conditional-item-choices)
- [Parcourir la bibliothèque sur mobile](../../src/content/help/fr/menu/menus-and-groups.mdx#mobile-terminal-pages)

### [Variantes et tailles](../../src/content/help/fr/menu/variants-and-sizes.mdx)

Identifiant : `menu-variants-and-sizes`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Comprendre le prix et la portion](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-1)
- [Ajouter et enregistrer les variantes](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-2)
- [Disponibilité, ordre et lignes réservées aux combos](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-7)
- [Réutiliser un groupe enregistré](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-8)
- [Relier les tailles à la recette](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-10)
- [Contrôler après enregistrement](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-14)
- [Suivre les stocks par taille et par série](../../src/content/help/fr/menu/variants-and-sizes.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/menu/variants-and-sizes.mdx#related-service-controls)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/variants-and-sizes.mdx#library-availability)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/menu/variants-and-sizes.mdx#conditional-item-choices)
- [Configurer les options d’un Number Cake](../../src/content/help/fr/menu/variants-and-sizes.mdx#conditional-positions)
- [Vérifier les choix et retrouver une configuration valide](../../src/content/help/fr/menu/variants-and-sizes.mdx#conditional-positions-check)
- [Choisir une variante sur mobile](../../src/content/help/fr/menu/variants-and-sizes.mdx#mobile-terminal)
- [Parcourir la bibliothèque sur mobile](../../src/content/help/fr/menu/variants-and-sizes.mdx#mobile-terminal-pages)

### [Modificateurs et règles de sélection](../../src/content/help/fr/menu/modifiers.mdx)

Identifiant : `menu-modifiers`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Créer un groupe réutilisable](../../src/content/help/fr/menu/modifiers.mdx#group)
- [Définir les suppléments de prix](../../src/content/help/fr/menu/modifiers.mdx#pricing)
- [Associer les groupes aux articles](../../src/content/help/fr/menu/modifiers.mdx#link)
- [Configurer les précisions client](../../src/content/help/fr/menu/modifiers.mdx#notes)
- [Choix communs et publication de la carte](../../src/content/help/fr/menu/modifiers.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/menu/modifiers.mdx#related-service-controls)
- [Changer la disponibilité depuis Articles](../../src/content/help/fr/menu/modifiers.mdx#library-availability)
- [Conditionner les véritables modificateurs](../../src/content/help/fr/menu/modifiers.mdx#conditional-positions)

### [Importer un catalogue et gérer les images](../../src/content/help/fr/menu/import-and-images.mdx)

Identifiant : `catalog-import`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Choisir la source](../../src/content/help/fr/menu/import-and-images.mdx#input)
- [Vérifier les articles extraits](../../src/content/help/fr/menu/import-and-images.mdx#review)
- [Enregistrer et placer dans les groupes](../../src/content/help/fr/menu/import-and-images.mdx#commit)
- [Téléverser ou générer une image](../../src/content/help/fr/menu/import-and-images.mdx#images)

### [Combos et formules configurables](../../src/content/help/fr/menu/combos.mdx)

Identifiant : `combos`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb, foodypos.

- [Définir les étapes de la formule](../../src/content/help/fr/menu/combos.mdx#steps)
- [Vérifier le prix de la formule](../../src/content/help/fr/menu/combos.mdx#price)
- [Prendre une commande combo](../../src/content/help/fr/menu/combos.mdx#order)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/menu/combos.mdx#internal-combo-substitution)

### [Bibliothèque de remises du personnel](../../src/content/help/fr/menu/pos-discounts.mdx)

Identifiant : `pos-discount-library`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Créer une remise nommée](../../src/content/help/fr/menu/pos-discounts.mdx#definition)
- [Appliquer avec autorisation](../../src/content/help/fr/menu/pos-discounts.mdx#apply)
- [Distinguer les codes en ligne](../../src/content/help/fr/menu/pos-discounts.mdx#distinction)

## orders

### [Gérer les commandes](../../src/content/help/fr/orders/managing-orders.mdx)

Identifiant : `orders-managing-orders`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Ouvrir la commande liée à une transaction](../../src/content/help/fr/orders/managing-orders.mdx#open-order-from-transaction)
- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/orders/managing-orders.mdx#verifone-admin-money-operations)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/orders/managing-orders.mdx#weight-hold-margin)
- [Qu'est-ce que c'est ?](../../src/content/help/fr/orders/managing-orders.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/orders/managing-orders.mdx#section-2)
- [Le flux d'une commande](../../src/content/help/fr/orders/managing-orders.mdx#section-3)
- [Bon à savoir](../../src/content/help/fr/orders/managing-orders.mdx#section-4)
- [Voir la pièce jointe WhatsApp](../../src/content/help/fr/orders/managing-orders.mdx#whatsapp-attachment-review)
- [Vérifier le rappel de livraison calculé](../../src/content/help/fr/orders/managing-orders.mdx#route-delivery-window)
- [Ajouter des articles depuis la librairie](../../src/content/help/fr/orders/managing-orders.mdx#staff-order-library)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/orders/managing-orders.mdx#internal-combo-substitution)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/orders/managing-orders.mdx#counter-terminal-payment-before-kitchen)
- [Comprendre le stock après modification de commande](../../src/content/help/fr/orders/managing-orders.mdx#carte-series-stock)
- [Choisir le mode d’envoi du rappel](../../src/content/help/fr/orders/managing-orders.mdx#delivery-reminder-review-and-send)
- [Actualiser les coordonnées du livreur](../../src/content/help/fr/orders/managing-orders.mdx#courier-contact-profile)
- [Reprendre une livraison après un départ de test](../../src/content/help/fr/orders/managing-orders.mdx#delivery-test-departure-recovery)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/orders/managing-orders.mdx#conditional-item-choices)
- [Suivre toutes les commandes enregistrées entre caisse et Admin](../../src/content/help/fr/orders/managing-orders.mdx#all-channel-order-tracking)
- [Retrouver une vente caisse après paiement](../../src/content/help/fr/orders/managing-orders.mdx#paid-counter-orders)
- [Contacter les clients par WhatsApp](../../src/content/help/fr/orders/managing-orders.mdx#unified-order-whatsapp-selection)
- [Naviguer dans une vente mobile](../../src/content/help/fr/orders/managing-orders.mdx#mobile-terminal)
- [Image du modèle WhatsApp](../../src/content/help/fr/orders/managing-orders.mdx#meta-template-image-preview)
- [Choisir le destinataire WhatsApp du client](../../src/content/help/fr/orders/managing-orders.mdx#customer-whatsapp-recipient)

### [Types de commandes et remise](../../src/content/help/fr/orders/order-types.mdx)

Identifiant : `order-types`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Encaisser les espèces selon le type de commande](../../src/content/help/fr/orders/order-types.mdx#pos-cash-by-order-type)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/orders/order-types.mdx#weight-hold-margin)
- [Sur place et tables](../../src/content/help/fr/orders/order-types.mdx#dine-in)
- [Retrait](../../src/content/help/fr/orders/order-types.mdx#pickup)
- [Livraison](../../src/content/help/fr/orders/order-types.mdx#delivery)
- [Commandes planifiées et séries](../../src/content/help/fr/orders/order-types.mdx#scheduled)
- [Choisir la pièce jointe d’une étape](../../src/content/help/fr/orders/order-types.mdx#whatsapp-stage-attachment)
- [Suivre le départ d’une livraison affectée](../../src/content/help/fr/orders/order-types.mdx#courier-departure-sync)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/orders/order-types.mdx#internal-combo-substitution)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/orders/order-types.mdx#counter-terminal-payment-before-kitchen)
- [Utiliser le stock de la série d’origine](../../src/content/help/fr/orders/order-types.mdx#carte-series-stock)
- [Coordonnées du personnel et destination du livreur](../../src/content/help/fr/orders/order-types.mdx#staff-contact-and-courier-defaults)
- [Reprendre une livraison après un départ de test](../../src/content/help/fr/orders/order-types.mdx#delivery-test-departure-recovery)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/orders/order-types.mdx#conditional-item-choices)
- [Ouvrir une addition sur place sans table](../../src/content/help/fr/orders/order-types.mdx#pos-tableless-dine-in)
- [Choisir le traitement de toute l’addition POS](../../src/content/help/fr/orders/order-types.mdx#pos-whole-check)
- [Donner une consigne de préparation différente à un article](../../src/content/help/fr/orders/order-types.mdx#pos-item-method)
- [Changer le service d’un brouillon non affecté](../../src/content/help/fr/orders/order-types.mdx#pos-change-draft)
- [Garder le contexte client privé sur l’addition](../../src/content/help/fr/orders/order-types.mdx#pos-private-guest-context)

### [Prendre une commande sur la caisse](../../src/content/help/fr/orders/taking-an-order-pos.mdx)

Identifiant : `pos-order-entry`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Confirmer le mode et les coordonnées de toute l’addition](../../src/content/help/fr/orders/taking-an-order-pos.mdx#whole-check-contact)
- [Préparer cette caisse pour les espèces](../../src/content/help/fr/orders/taking-an-order-pos.mdx#cash-drawer-before-collection)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/orders/taking-an-order-pos.mdx#weight-hold-margin)
- [Ouvrir la bonne addition](../../src/content/help/fr/orders/taking-an-order-pos.mdx#start)
- [Ajouter et personnaliser les articles](../../src/content/help/fr/orders/taking-an-order-pos.mdx#add)
- [Affecter places et services](../../src/content/help/fr/orders/taking-an-order-pos.mdx#seat-course)
- [Envoyer et vérifier la préparation](../../src/content/help/fr/orders/taking-an-order-pos.mdx#send)
- [Reprendre ou encaisser](../../src/content/help/fr/orders/taking-an-order-pos.mdx#resume)
- [Choisir la pièce jointe d’une étape](../../src/content/help/fr/orders/taking-an-order-pos.mdx#whatsapp-stage-attachment)
- [Suivre le départ d’une livraison affectée](../../src/content/help/fr/orders/taking-an-order-pos.mdx#courier-departure-sync)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/orders/taking-an-order-pos.mdx#internal-combo-substitution)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/orders/taking-an-order-pos.mdx#counter-terminal-payment-before-kitchen)
- [Utiliser la carte publiée et le stock en direct](../../src/content/help/fr/orders/taking-an-order-pos.mdx#carte-series-stock)
- [Coordonnées du personnel et destination du livreur](../../src/content/help/fr/orders/taking-an-order-pos.mdx#staff-contact-and-courier-defaults)
- [Reprendre une livraison après un départ de test](../../src/content/help/fr/orders/taking-an-order-pos.mdx#delivery-test-departure-recovery)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/orders/taking-an-order-pos.mdx#conditional-item-choices)
- [Prendre une commande sur le terminal mobile](../../src/content/help/fr/orders/taking-an-order-pos.mdx#mobile-terminal)

### [Consulter et modifier une commande](../../src/content/help/fr/orders/order-details.mdx)

Identifiant : `order-detail`. Public : public. Disponibilité : available. Services : foodyadmin.

- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/orders/order-details.mdx#verifone-admin-money-operations)
- [Retrouver la bonne commande](../../src/content/help/fr/orders/order-details.mdx#filter)
- [Créer une commande du personnel](../../src/content/help/fr/orders/order-details.mdx#create)
- [Modifier les informations enregistrées](../../src/content/help/fr/orders/order-details.mdx#edit)
- [Accepter, préparer et remettre](../../src/content/help/fr/orders/order-details.mdx#status)
- [Envoyer volontairement les messages client](../../src/content/help/fr/orders/order-details.mdx#communications)
- [Voir la pièce jointe WhatsApp](../../src/content/help/fr/orders/order-details.mdx#whatsapp-attachment-review)
- [Ajouter des articles depuis la librairie](../../src/content/help/fr/orders/order-details.mdx#article-library)
- [Vérifier le rappel de livraison calculé](../../src/content/help/fr/orders/order-details.mdx#route-delivery-window)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/orders/order-details.mdx#internal-combo-substitution)
- [Retrouver le mouvement de stock d’origine](../../src/content/help/fr/orders/order-details.mdx#stock-provenance)
- [Choisir le mode d’envoi du rappel](../../src/content/help/fr/orders/order-details.mdx#delivery-reminder-review-and-send)
- [Conserver les choix de variante de la commande](../../src/content/help/fr/orders/order-details.mdx#variant-position-order)
- [Envoyer un message WhatsApp pour une ou plusieurs commandes](../../src/content/help/fr/orders/order-details.mdx#unified-order-whatsapp)
- [Image du modèle WhatsApp](../../src/content/help/fr/orders/order-details.mdx#meta-template-image-preview)
- [Choisir le destinataire WhatsApp du client](../../src/content/help/fr/orders/order-details.mdx#customer-whatsapp-recipient)

### [Calendrier du restaurant et exceptions](../../src/content/help/fr/orders/calendar.mdx)

Identifiant : `calendar`. Public : public. Disponibilité : available. Services : foodyadmin.

- [Examiner une date](../../src/content/help/fr/orders/calendar.mdx#browse)
- [Ajouter ou modifier une exception](../../src/content/help/fr/orders/calendar.mdx#exceptions)
- [Retirer une exception obsolète](../../src/content/help/fr/orders/calendar.mdx#remove)

### [Précommandes, créneaux et séries](../../src/content/help/fr/orders/preorders-and-batches.mdx)

Identifiant : `preorders`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb, foodypos.

- [Choisir la politique de prise de commande](../../src/content/help/fr/orders/preorders-and-batches.mdx#policy)
- [Configurer les créneaux](../../src/content/help/fr/orders/preorders-and-batches.mdx#slots)
- [Configurer une série](../../src/content/help/fr/orders/preorders-and-batches.mdx#batch)
- [Vérifier paiement et exceptions produits](../../src/content/help/fr/orders/preorders-and-batches.mdx#prepayment)

### [Quantités de production et préparation des colis](../../src/content/help/fr/orders/production-planning.mdx)

Identifiant : `production`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Choisir la date de service](../../src/content/help/fr/orders/production-planning.mdx#scope)
- [Vérifier quantités et portions](../../src/content/help/fr/orders/production-planning.mdx#quantities)
- [Préparer les colis clients](../../src/content/help/fr/orders/production-planning.mdx#packing)

### [Partager et regrouper les additions](../../src/content/help/fr/orders/split-bills.mdx)

Identifiant : `pos-check-split`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Encaisser une addition partagée en espèces](../../src/content/help/fr/orders/split-bills.mdx#split-cash-collection)
- [Répartir couverts ou articles](../../src/content/help/fr/orders/split-bills.mdx#allocation)
- [Partager les articles sélectionnés](../../src/content/help/fr/orders/split-bills.mdx#share)
- [Regrouper les fractions enregistrées](../../src/content/help/fr/orders/split-bills.mdx#combine)
- [Vérifier les variantes du détail à répartir](../../src/content/help/fr/orders/split-bills.mdx#variant-position-details)

### [Déplacer, fusionner et transférer les articles](../../src/content/help/fr/orders/move-and-merge-bills.mdx)

Identifiant : `pos-check-move`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Déplacer une addition sans doubler les espèces](../../src/content/help/fr/orders/move-and-merge-bills.mdx#move-payment-boundary)
- [Déplacer une addition](../../src/content/help/fr/orders/move-and-merge-bills.mdx#move)
- [Fusionner des additions occupées](../../src/content/help/fr/orders/move-and-merge-bills.mdx#merge)
- [Transférer des articles enregistrés](../../src/content/help/fr/orders/move-and-merge-bills.mdx#transfer)

### [Couverts, services, attente et envoi cuisine](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx)

Identifiant : `pos-courses`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Séparer envoi cuisine et encaissement espèces](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#course-vs-cash-status)
- [Affecter couverts et services](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#seats)
- [Mettre en attente ou lancer un service](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#release)
- [Répéter des plats comme nouvelle vente](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#repeat)
- [Piloter les services sur mobile](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#mobile-terminal)

### [Remise, offert et annulation](../../src/content/help/fr/orders/discount-comp-void.mdx)

Identifiant : `pos-comp-void`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Commandes historiques en lecture seule](../../src/content/help/fr/orders/discount-comp-void.mdx#historical-order-read-only)
- [Appliquer une remise](../../src/content/help/fr/orders/discount-comp-void.mdx#discount)
- [Offrir ou retirer un offert](../../src/content/help/fr/orders/discount-comp-void.mdx#comp)
- [Annuler un plat avec motif](../../src/content/help/fr/orders/discount-comp-void.mdx#void)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/orders/discount-comp-void.mdx#counter-terminal-payment-before-kitchen)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/orders/discount-comp-void.mdx#conditional-item-choices)
- [Accéder aux options sur mobile](../../src/content/help/fr/orders/discount-comp-void.mdx#mobile-terminal)

## payments

### [Comprendre le statut d’un paiement](../../src/content/help/fr/payments/how-payments-work.mdx)

Identifiant : `payments-how-payments-work`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb.

- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/payments/how-payments-work.mdx#verifone-admin-refund-void)
- [Rembourser un paiement en ligne listé sur la caisse vers son moyen initial](../../src/content/help/fr/payments/how-payments-work.mdx#pos-checkout-original-payment-refunds)
- [Garder la page de paiement lisible](../../src/content/help/fr/payments/how-payments-work.mdx#verifone-readable-hosted-theme)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/payments/how-payments-work.mdx#weight-hold-margin)
- [Configuration](../../src/content/help/fr/payments/how-payments-work.mdx#section-1)
- [Vérifier un paiement en ligne](../../src/content/help/fr/payments/how-payments-work.mdx#section-2)
- [Résultat en échec ou incertain](../../src/content/help/fr/payments/how-payments-work.mdx#section-3)
- [Enregistrer une carte pendant le premier paiement (CST)](../../src/content/help/fr/payments/how-payments-work.mdx#verifone-cst-card-saving)
- [Vérifier une facture Invoice4U détaillée](../../src/content/help/fr/payments/how-payments-work.mdx#invoice4u-order-lines)
- [Réservations après paiement tardif](../../src/content/help/fr/payments/how-payments-work.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/payments/how-payments-work.mdx#related-service-controls)

### [Encaisser sur la caisse](../../src/content/help/fr/payments/pos-checkout.mdx)

Identifiant : `pos-payments`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/payments/pos-checkout.mdx#verifone-admin-money-operations)
- [Garder la page de paiement lisible](../../src/content/help/fr/payments/pos-checkout.mdx#verifone-readable-hosted-theme)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/payments/pos-checkout.mdx#weight-hold-margin)
- [Enregistrer les espèces](../../src/content/help/fr/payments/pos-checkout.mdx#cash)
- [Compter et clôturer la caisse](../../src/content/help/fr/payments/pos-checkout.mdx#cash-drawer-report)
- [Encaisser un paiement connecté](../../src/content/help/fr/payments/pos-checkout.mdx#card)
- [Retrouver un paiement confirmé dans Transactions](../../src/content/help/fr/payments/pos-checkout.mdx#transaction-history)
- [Comprendre l’origine du paiement](../../src/content/help/fr/payments/pos-checkout.mdx#transaction-payment-origin)
- [Rechercher tous les articles et reprendre l’historique](../../src/content/help/fr/payments/pos-checkout.mdx#transaction-items-and-retry)
- [Lire les remboursements et annulations dans Transactions](../../src/content/help/fr/payments/pos-checkout.mdx#transaction-recorded-returns)
- [Lire correctement le total des transactions](../../src/content/help/fr/payments/pos-checkout.mdx#transaction-gross-total)
- [Clôturer et déposer un lot du terminal Verifone](../../src/content/help/fr/payments/pos-checkout.mdx#terminal-deposit)
- [Consulter les totaux ou utiliser les actions avancées du terminal](../../src/content/help/fr/payments/pos-checkout.mdx#terminal-reports-advanced)
- [Vérifier pourboire et reçu](../../src/content/help/fr/payments/pos-checkout.mdx#receipt-tip)
- [Vérifier une facture Invoice4U détaillée](../../src/content/help/fr/payments/pos-checkout.mdx#invoice4u-order-lines)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/payments/pos-checkout.mdx#counter-terminal-payment-before-kitchen)
- [Confirmer une vente à emporter payée en caisse](../../src/content/help/fr/payments/pos-checkout.mdx#counter-completion)
- [Retrouver Payer sur mobile](../../src/content/help/fr/payments/pos-checkout.mdx#mobile-terminal)
- [Lire les transactions et rapports sur mobile](../../src/content/help/fr/payments/pos-checkout.mdx#mobile-terminal-pages)

### [Prestataires, moyens enregistrés et Cibus](../../src/content/help/fr/payments/providers-and-cibus.mdx)

Identifiant : `payment-configuration`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/payments/providers-and-cibus.mdx#verifone-admin-money-operations)
- [Garder la page de paiement lisible](../../src/content/help/fr/payments/providers-and-cibus.mdx#verifone-readable-hosted-theme)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/payments/providers-and-cibus.mdx#weight-hold-margin)
- [Faire activer un prestataire](../../src/content/help/fr/payments/providers-and-cibus.mdx#provider)
- [Comprendre les moyens enregistrés](../../src/content/help/fr/payments/providers-and-cibus.mdx#saved-methods)
- [Configurer et utiliser Cibus](../../src/content/help/fr/payments/providers-and-cibus.mdx#cibus)
- [Régler politique de paiement, TVA et pourboires](../../src/content/help/fr/payments/providers-and-cibus.mdx#policy-vat-tips)
- [Enregistrer une carte pendant le premier paiement (CST)](../../src/content/help/fr/payments/providers-and-cibus.mdx#verifone-cst-card-saving)
- [Vérifier une facture Invoice4U détaillée](../../src/content/help/fr/payments/providers-and-cibus.mdx#invoice4u-order-lines)

## printers

### [Installer une Epson TM-U220IIB avec Foody](../../src/content/help/fr/printers/epson-tm-u220iib.mdx)

Identifiant : `printers-epson-tm-u220iib`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Ce qu'il vous faut](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-1)
- [1. Déballez et contrôlez le matériel](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-2)
- [2. Installez le ruban et le papier](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-3)
- [Cassette ruban](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-4)
- [Rouleau de papier](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-5)
- [3. Branchez l'imprimante au réseau](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-6)
- [4. Ouvrez Epson TMNet WebConfig](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-7)
- [5. Enregistrez l'imprimante dans FoodyAdmin](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-8)
- [6. Configurez Server Direct Print dans WebConfig](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-9)
- [7. Attendez le statut En ligne et imprimez un test](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-10)
- [8. Créez les passes de production](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-11)
- [9. Routez les catégories et les exceptions](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-12)
- [10. Faites sortir un vrai bon depuis Foody](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-13)
- [Dépannage rapide](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-14)
- [Documentation constructeur](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#section-15)
- [Distinguer le PDF WhatsApp des travaux d’impression](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#whatsapp-pdf)
- [Vérifier les positions de variante imprimées](../../src/content/help/fr/printers/epson-tm-u220iib.mdx#variant-position-labels)

### [Profils d’impression et routage](../../src/content/help/fr/printers/profiles-and-routing.mdx)

Identifiant : `printer-profiles`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Trouver une imprimante Epson sur le réseau local](../../src/content/help/fr/printers/profiles-and-routing.mdx#discover-epson)
- [Créer ou modifier un profil partagé](../../src/content/help/fr/printers/profiles-and-routing.mdx#profile)
- [Régler les options des tickets](../../src/content/help/fr/printers/profiles-and-routing.mdx#ticket-options)
- [Affecter la bonne imprimante](../../src/content/help/fr/printers/profiles-and-routing.mdx#assign)
- [Modifier un profil depuis un terminal mobile](../../src/content/help/fr/printers/profiles-and-routing.mdx#mobile-terminal-pages)

### [Statut et historique d’impression](../../src/content/help/fr/printers/status-and-history.mdx)

Identifiant : `printer-diagnostics`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Vérifier la connexion](../../src/content/help/fr/printers/status-and-history.mdx#status)
- [Lire les dernières 24 heures](../../src/content/help/fr/printers/status-and-history.mdx#history)
- [Distinguer le PDF WhatsApp des travaux d’impression](../../src/content/help/fr/printers/status-and-history.mdx#whatsapp-pdf)
- [Vérifier les positions de variante imprimées](../../src/content/help/fr/printers/status-and-history.mdx#variant-position-labels)
- [Consulter l’historique sur mobile](../../src/content/help/fr/printers/status-and-history.mdx#mobile-terminal-pages)

## website-qr

### [Modifier et publier le site du restaurant](../../src/content/help/fr/website-qr/customize-your-site.mdx)

Identifiant : `website-qr-customize-your-site`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb.

- [Ouvrir l’éditeur](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-1)
- [Enregistrer et publier sont deux actions différentes](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-2)
- [Menu et commandes](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-3)
- [Vérifier l’entrée de commande sur mobile](../../src/content/help/fr/website-qr/customize-your-site.mdx#mobile-fulfillment-review)
- [Accès aux nouveaux réglages](../../src/content/help/fr/website-qr/customize-your-site.mdx#related-service-controls)

### [Apparence et identité du site](../../src/content/help/fr/website-qr/design-and-branding.mdx)

Identifiant : `website-design`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir un thème et les couleurs](../../src/content/help/fr/website-qr/design-and-branding.mdx#theme)
- [Régler les polices et rôles de texte](../../src/content/help/fr/website-qr/design-and-branding.mdx#fonts)
- [Cadrer les images des articles](../../src/content/help/fr/website-qr/design-and-branding.mdx#images)
- [Vérifier l’entrée de commande sur mobile](../../src/content/help/fr/website-qr/design-and-branding.mdx#mobile-fulfillment-review)
- [Accès aux nouveaux réglages](../../src/content/help/fr/website-qr/design-and-branding.mdx#related-service-controls)

### [En-tête, navigation et pied de page](../../src/content/help/fr/website-qr/navigation-and-footer.mdx)

Identifiant : `website-navigation`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Configurer l’en-tête](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#header)
- [Gérer les liens et le bouton principal](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#links)
- [Configurer le contenu du pied de page](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#footer)
- [Vérifier l’entrée de commande sur mobile](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#mobile-fulfillment-review)
- [Accès aux nouveaux réglages](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#related-service-controls)

### [Sections, médias et animations](../../src/content/help/fr/website-qr/sections-and-media.mdx)

Identifiant : `website-sections`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Ajouter, déplacer et masquer les sections](../../src/content/help/fr/website-qr/sections-and-media.mdx#structure)
- [Rédiger et sélectionner le contenu](../../src/content/help/fr/website-qr/sections-and-media.mdx#content)
- [Régler images et vidéo](../../src/content/help/fr/website-qr/sections-and-media.mdx#media)
- [Prévisualiser les animations](../../src/content/help/fr/website-qr/sections-and-media.mdx#motion)
- [Vérifier l’entrée de commande sur mobile](../../src/content/help/fr/website-qr/sections-and-media.mdx#mobile-fulfillment-review)
- [Accès aux nouveaux réglages](../../src/content/help/fr/website-qr/sections-and-media.mdx#related-service-controls)
- [Conserver les choix des articles mis en avant](../../src/content/help/fr/website-qr/sections-and-media.mdx#featured-variant-choices)

### [Concevoir la page de commande](../../src/content/help/fr/website-qr/order-page.mdx)

Identifiant : `website-order-design`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir disposition et navigation du menu](../../src/content/help/fr/website-qr/order-page.mdx#menu-layout)
- [Personnaliser la fiche article](../../src/content/help/fr/website-qr/order-page.mdx#item-surface)
- [Placer les contenus de découverte](../../src/content/help/fr/website-qr/order-page.mdx#discovery)
- [Vérifier l’entrée de commande sur mobile](../../src/content/help/fr/website-qr/order-page.mdx#mobile-fulfillment-review)
- [Accès aux nouveaux réglages](../../src/content/help/fr/website-qr/order-page.mdx#related-service-controls)

### [Design du paiement, de la confirmation et du reçu](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx)

Identifiant : `website-journey`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb.

- [Prévisualiser paiement et confirmation](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#checkout)
- [Régler contenu et actions du reçu](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#receipt)
- [Vérifier l’aperçu des liens de reçu et de confirmation](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#link-preview)
- [Choisir si la connexion est proposée avant la commande](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#optional-entry-sign-in)

### [Pages catering et entrée de chaîne](../../src/content/help/fr/website-qr/catering-and-chain-pages.mdx)

Identifiant : `website-commerce-pages`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Personnaliser la présentation catering](../../src/content/help/fr/website-qr/catering-and-chain-pages.mdx#catering-copy)
- [Personnaliser le choix d’établissement](../../src/content/help/fr/website-qr/catering-and-chain-pages.mdx#chain-entry)

### [Pages du site, référencement et publication](../../src/content/help/fr/website-qr/pages-and-publication.mdx)

Identifiant : `website-pages`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Ajouter une page](../../src/content/help/fr/website-qr/pages-and-publication.mdx#create)
- [Modifier identité et navigation de page](../../src/content/help/fr/website-qr/pages-and-publication.mdx#identity)
- [Régler référencement et partage](../../src/content/help/fr/website-qr/pages-and-publication.mdx#seo)
- [Publier et vérifier le brouillon](../../src/content/help/fr/website-qr/pages-and-publication.mdx#publish)

## settings

### [Modes de service et profils d’appareil](../../src/content/help/fr/settings/service-mode.mdx)

Identifiant : `pos-service-modes`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Choisir un profil de mode](../../src/content/help/fr/settings/service-mode.mdx#mode)
- [Configurer le service à table et au comptoir](../../src/content/help/fr/settings/service-mode.mdx#service)
- [Garder la remise indépendante](../../src/content/help/fr/settings/service-mode.mdx#fulfillment)
- [Consulter et modifier les Modes dans Admin](../../src/content/help/fr/settings/service-mode.mdx#modes-dashboard)
- [Revenir à l’accueil après l’envoi et ouvrir une nouvelle vente](../../src/content/help/fr/settings/service-mode.mdx#send-home-new-sale)

### [Traitement des commandes et flux cuisine](../../src/content/help/fr/settings/workflow-settings.mdx)

Identifiant : `order-workflow`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Vérifier l’acceptation des commandes](../../src/content/help/fr/settings/workflow-settings.mdx#approval)
- [Configurer la progression cuisine](../../src/content/help/fr/settings/workflow-settings.mdx#kitchen)
- [Régler les délais de préparation](../../src/content/help/fr/settings/workflow-settings.mdx#clock)
- [Vérifier les réglages enregistrés](../../src/content/help/fr/settings/workflow-settings.mdx#save)
- [Choisir la pièce jointe d’une étape](../../src/content/help/fr/settings/workflow-settings.mdx#whatsapp-stage-attachment)
- [Image du modèle WhatsApp](../../src/content/help/fr/settings/workflow-settings.mdx#meta-template-image-preview)

### [Profil, langues et horaires du restaurant](../../src/content/help/fr/settings/restaurant-profile.mdx)

Identifiant : `restaurant-profile`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Vérifier le restaurant avant de régler les modes POS](../../src/content/help/fr/settings/restaurant-profile.mdx#pos-location-configuration)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/settings/restaurant-profile.mdx#weight-hold-margin)
- [Modifier les informations du restaurant](../../src/content/help/fr/settings/restaurant-profile.mdx#identity)
- [Définir les langues proposées](../../src/content/help/fr/settings/restaurant-profile.mdx#languages)
- [Maintenir les horaires](../../src/content/help/fr/settings/restaurant-profile.mdx#hours)
- [Accès aux nouveaux réglages](../../src/content/help/fr/settings/restaurant-profile.mdx#related-service-controls)
- [Coordonnées du personnel et destination du livreur](../../src/content/help/fr/settings/restaurant-profile.mdx#staff-contact-and-courier-defaults)
- [Code caisse à l’activation du personnel](../../src/content/help/fr/settings/restaurant-profile.mdx#staff-activation-pos-code)

### [Règles de commande et de remise](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx)

Identifiant : `fulfillment-policy`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Distinguer les coordonnées POS des conditions de livraison](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#pos-contact-boundary)
- [Distinguer espèces autorisées et espèces encaissées](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#cash-collection-boundary)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#weight-hold-margin)
- [Choisir les canaux de commande](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#channels)
- [Régler les limites de planification](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#schedule)
- [Utiliser l’accès de test temporaire](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#test-access)
- [Choisir la pièce jointe d’une étape](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#whatsapp-stage-attachment)
- [Suivre le départ d’une livraison affectée](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#courier-departure-sync)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#internal-combo-substitution)
- [Attendre le paiement au comptoir avant la cuisine](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#counter-terminal-payment-before-kitchen)
- [Déplacer une réservation entre séries](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#carte-series-stock)
- [Accès aux nouveaux réglages](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#related-service-controls)
- [Coordonnées du personnel et destination du livreur](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#staff-contact-and-courier-defaults)
- [Code caisse à l’activation du personnel](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#staff-activation-pos-code)
- [Reprendre une livraison après un départ de test](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#delivery-test-departure-recovery)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#conditional-item-choices)
- [Vérifier la compatibilité de la fiche client POS](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#pos-customer-screen-version)

### [Comportement POS, services et ajustements](../../src/content/help/fr/settings/pos-behavior.mdx)

Identifiant : `pos-behavior`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Régler le comportement du menu](../../src/content/help/fr/settings/pos-behavior.mdx#menu-behavior)
- [Configurer les services de cuisine](../../src/content/help/fr/settings/pos-behavior.mdx#courses)
- [Vérifier les ajustements autorisés](../../src/content/help/fr/settings/pos-behavior.mdx#adjustments)
- [Enregistrer après l’oubli ou le remplacement d’un appareil](../../src/content/help/fr/settings/pos-behavior.mdx#forgotten-device-assignment)
- [Distinguer les dépôts du comportement POS](../../src/content/help/fr/settings/pos-behavior.mdx#terminal-batch-separation)
- [Configurer les modes de traitement de la caisse](../../src/content/help/fr/settings/pos-behavior.mdx#fulfillment-methods)
- [Choisir quand demander le mode au personnel](../../src/content/help/fr/settings/pos-behavior.mdx#fulfillment-prompt)
- [Utiliser les additions ouvertes pour les ventes sur place](../../src/content/help/fr/settings/pos-behavior.mdx#tableless-open-checks)
- [Demander les informations client pour un mode](../../src/content/help/fr/settings/pos-behavior.mdx#fulfillment-customer)
- [Choisir un contact existant ou saisir les coordonnées de commande](../../src/content/help/fr/settings/pos-behavior.mdx#fulfillment-order-contact-entry)
- [Régler la caisse sur un écran compact](../../src/content/help/fr/settings/pos-behavior.mdx#mobile-terminal-pages)

### [Appareils et écrans cuisine](../../src/content/help/fr/settings/devices-and-kitchen-displays.mdx)

Identifiant : `device-kds`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Configurer les appareils](../../src/content/help/fr/settings/devices-and-kitchen-displays.mdx#devices)
- [Régler les postes cuisine](../../src/content/help/fr/settings/devices-and-kitchen-displays.mdx#stations)
- [Traiter les tickets cuisine](../../src/content/help/fr/settings/devices-and-kitchen-displays.mdx#service)

### [Configurer l’assistant de commande client](../../src/content/help/fr/settings/guest-order-assistant.mdx)

Identifiant : `guest-ai-settings`. Public : public. Disponibilité : available. Services : foodyadmin.

- [Activer et choisir un déclencheur](../../src/content/help/fr/settings/guest-order-assistant.mdx#activation)
- [Maintenir consignes et FAQ](../../src/content/help/fr/settings/guest-order-assistant.mdx#guidance)

### [Notifications et préférences d’équipe](../../src/content/help/fr/settings/notifications-and-team.mdx)

Identifiant : `notifications-team`. Public : public. Disponibilité : available. Services : foodyadmin.

- [Choisir les préférences de notification](../../src/content/help/fr/settings/notifications-and-team.mdx#preferences)
- [Vérifier les paramètres d’équipe](../../src/content/help/fr/settings/notifications-and-team.mdx#team)

### [Navigation, apparence et raccourcis POS](../../src/content/help/fr/settings/pos-workspace.mdx)

Identifiant : `pos-workspace`. Public : public. Disponibilité : available. Services : foodypos.

- [Retrouver les espaces de travail](../../src/content/help/fr/settings/pos-workspace.mdx#navigation)
- [Personnaliser l’appareil](../../src/content/help/fr/settings/pos-workspace.mdx#preferences)
- [Traiter une perte de connexion](../../src/content/help/fr/settings/pos-workspace.mdx#connectivity)
- [Parcourir les pages du terminal mobile](../../src/content/help/fr/settings/pos-workspace.mdx#mobile-terminal-pages)

### [Consommation et quotas des services externes](../../src/content/help/fr/settings/api-usage-and-quotas.mdx)

Identifiant : `external-api-quotas`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Consulter les consommations de votre restaurant](../../src/content/help/fr/settings/api-usage-and-quotas.mdx#read-usage)
- [Comprendre les plafonds et leur renouvellement](../../src/content/help/fr/settings/api-usage-and-quotas.mdx#limits-and-renewal)

## tables-floors

### [Plans de salle, tables et QR codes](../../src/content/help/fr/tables-floors/floor-plans.mdx)

Identifiant : `floor-plans`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodyweb, foodypos.

- [Créer un plan](../../src/content/help/fr/tables-floors/floor-plans.mdx#plan)
- [Organiser les zones de service](../../src/content/help/fr/tables-floors/floor-plans.mdx#sections)
- [Préparer les supports QR](../../src/content/help/fr/tables-floors/floor-plans.mdx#qr)
- [Utiliser la vue des tables](../../src/content/help/fr/tables-floors/floor-plans.mdx#live)
- [Utiliser Additions sur mobile](../../src/content/help/fr/tables-floors/floor-plans.mdx#mobile-terminal)

### [Accès aux tables, statuts et assistance](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx)

Identifiant : `table-service-policy`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin, foodypos.

- [Affecter salles, sections et tables](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#assign)
- [Maintenir l’état des tables](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#status)
- [Configurer les demandes d’assistance](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#assistance)
- [Retrouver les outils de service sur mobile](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#mobile-terminal)

### [Créer et imprimer les QR de table](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx)

Identifiant : `table-qr-design`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Personnaliser la carte QR](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx#design)
- [Imprimer et vérifier les destinations](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx#print)

## delivery

### [Zones, frais et calendriers de livraison](../../src/content/help/fr/delivery/zones-and-schedules.mdx)

Identifiant : `delivery-zones`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Créer une zone de livraison](../../src/content/help/fr/delivery/zones-and-schedules.mdx#zone)
- [Définir frais et minimums](../../src/content/help/fr/delivery/zones-and-schedules.mdx#fees)
- [Configurer jours et créneaux](../../src/content/help/fr/delivery/zones-and-schedules.mdx#calendar)

### [Dispatch et planification des tournées](../../src/content/help/fr/delivery/dispatch-and-routes.mdx)

Identifiant : `delivery-dispatch`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Rembourser ou annuler un paiement en ligne Verifone](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#verifone-admin-money-operations)
- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#weight-hold-margin)
- [Choisir les livraisons d’une date](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#date)
- [Affecter coursiers et arrêts](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#assign)
- [Vérifier une tournée calculée](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#optimize)
- [Choisir les contraintes horaires de la tournée](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#order-time-windows)
- [Enregistrer et suivre l’avancement](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#dispatch)
- [Définir le départ et l’arrivée de chaque livreur](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#endpoints)
- [Régler le créneau communiqué au client](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#customer-window)
- [Joindre un fichier au rappel WhatsApp](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#whatsapp-media)
- [Faire une exception de formule sur une commande](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#internal-combo-substitution)
- [Conserver l’origine du stock lors d’un déplacement](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#carte-series-stock)
- [Distinguer un quota atteint d’une adresse introuvable](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#routing-service-limits)
- [Accès aux nouveaux réglages](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#related-service-controls)
- [Prévisualiser et envoyer les rappels de la date](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#delivery-whatsapp-dispatch)
- [Utiliser la destination enregistrée du livreur](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#courier-profile-destination)
- [Code caisse à l’activation du personnel](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#staff-activation-pos-code)
- [Préparer un compte Google propre à votre établissement](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#google-account-guide)
- [Annuler un départ lancé par erreur](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#undo-departure)
- [Consulter le mode d’un autre livreur](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#superadmin-courier-mode)

### [Parcours coursier et confirmation des livraisons](../../src/content/help/fr/delivery/courier-workspace.mdx)

Identifiant : `courier`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Ouvrir la tournée affectée](../../src/content/help/fr/delivery/courier-workspace.mdx#itinerary)
- [Naviguer et contacter](../../src/content/help/fr/delivery/courier-workspace.mdx#navigate)
- [Confirmer le résultat réel](../../src/content/help/fr/delivery/courier-workspace.mdx#complete)
- [Modifier les points et démarrer la tournée](../../src/content/help/fr/delivery/courier-workspace.mdx#departure-settings)
- [Réagir à une limite du service cartographique](../../src/content/help/fr/delivery/courier-workspace.mdx#routing-service-limits)
- [Ajuster la carte et retrouver un arrêt](../../src/content/help/fr/delivery/courier-workspace.mdx#map-timeline-panel)
- [Corriger un démarrage de test](../../src/content/help/fr/delivery/courier-workspace.mdx#accidental-departure)
- [Consulter le mode d’un autre livreur](../../src/content/help/fr/delivery/courier-workspace.mdx#superadmin-courier-selection)

### [Fournisseurs de cartes et usages](../../src/content/help/fr/delivery/maps-and-usage.mdx)

Identifiant : `maps-usage`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Vérifier le fournisseur configuré](../../src/content/help/fr/delivery/maps-and-usage.mdx#provider)
- [Respecter les limites d’usage](../../src/content/help/fr/delivery/maps-and-usage.mdx#limits)
- [Accès aux nouveaux réglages](../../src/content/help/fr/delivery/maps-and-usage.mdx#related-service-controls)
- [Préparer votre propre projet Google](../../src/content/help/fr/delivery/maps-and-usage.mdx#own-google-project)

### [Créer son compte Google et préparer ses clés API pour Foody](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx)

Identifiant : `google-account-setup`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [1. Créer ou choisir le compte Google de l’établissement](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#account)
- [2. Créer un projet Google Cloud dédié](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#project)
- [3. Associer la facturation de votre établissement](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#billing)
- [4. Activer uniquement les API confirmées par Foody](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#services)
- [5. Créer et restreindre les clés API serveur](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#keys)
- [6. Créer une clé navigateur seulement si Foody la demande](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#browser)
- [7. Préparer l’authentification de l’optimisation, si demandée](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#service-account)
- [8. Régler alertes et quotas avant les essais](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#costs)
- [9. Transmettre le dossier à Foody en deux temps](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#handoff)
- [10. Vérifier l’activation et l’usage de votre projet](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#verify)
- [11. Comprendre les autres services Google et remplacer une clé](../../src/content/help/fr/delivery/google-account-and-api-keys.mdx#other-google-services)

## catering

### [Services, catalogue et offres catering](../../src/content/help/fr/catering/services-and-catalog.mdx)

Identifiant : `catering-catalog`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Créer et activer un service](../../src/content/help/fr/catering/services-and-catalog.mdx#service)
- [Maintenir groupes et articles](../../src/content/help/fr/catering/services-and-catalog.mdx#catalog)
- [Composer offres et formules](../../src/content/help/fr/catering/services-and-catalog.mdx#offers)

### [Questions, planning et tarifs catering](../../src/content/help/fr/catering/flow-and-pricing.mdx)

Identifiant : `catering-flow`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Configurer les étapes client](../../src/content/help/fr/catering/flow-and-pricing.mdx#steps)
- [Maintenir les règles tarifaires](../../src/content/help/fr/catering/flow-and-pricing.mdx#rules)

### [Examiner les devis catering](../../src/content/help/fr/catering/review-quotes.mdx)

Identifiant : `catering-quotes`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Approuver ou refuser un devis](../../src/content/help/fr/catering/review-quotes.mdx#review)
- [Vérifier acompte et preuve de remboursement](../../src/content/help/fr/catering/review-quotes.mdx#deposit)

### [Événements catering et solde](../../src/content/help/fr/catering/events-and-balance.mdx)

Identifiant : `catering-events`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Vérifier l’événement accepté](../../src/content/help/fr/catering/events-and-balance.mdx#planning)
- [Gérer une autorisation de solde compatible](../../src/content/help/fr/catering/events-and-balance.mdx#balance)

### [Établissements et routage catering](../../src/content/help/fr/catering/branches-and-routing.mdx)

Identifiant : `catering-routing`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Maintenir les établissements éligibles](../../src/content/help/fr/catering/branches-and-routing.mdx#branches)
- [Régler les règles de routage](../../src/content/help/fr/catering/branches-and-routing.mdx#rules)

## chains

### [Chaînes et gestion des établissements](../../src/content/help/fr/chains/branches-and-dashboard.mdx)

Identifiant : `chains`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir le bon établissement](../../src/content/help/fr/chains/branches-and-dashboard.mdx#scope)
- [Vérifier la présence publique](../../src/content/help/fr/chains/branches-and-dashboard.mdx#publication)

## communications

### [Connecter et utiliser WhatsApp](../../src/content/help/fr/communications/whatsapp.mdx)

Identifiant : `whatsapp`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Connecter un expéditeur](../../src/content/help/fr/communications/whatsapp.mdx#connection)
- [Utiliser Meta coexistence sous activation](../../src/content/help/fr/communications/whatsapp.mdx#meta)
- [Lire l’historique des messages](../../src/content/help/fr/communications/whatsapp.mdx#delivery)
- [Créer un modèle avec photo ou PDF](../../src/content/help/fr/communications/whatsapp.mdx#media-templates)
- [Gérer les fichiers et vérifier les envois](../../src/content/help/fr/communications/whatsapp.mdx#media-library)
- [Vérifier le rappel de livraison calculé](../../src/content/help/fr/communications/whatsapp.mdx#route-delivery-window)
- [Choisir le mode d’envoi du rappel](../../src/content/help/fr/communications/whatsapp.mdx#delivery-reminder-review-and-send)
- [Envoyer un message WhatsApp pour une ou plusieurs commandes](../../src/content/help/fr/communications/whatsapp.mdx#unified-order-whatsapp)
- [Récupérer automatiquement l’image du modèle Meta](../../src/content/help/fr/communications/whatsapp.mdx#meta-template-image-sync)
- [Choisir le destinataire WhatsApp du client](../../src/content/help/fr/communications/whatsapp.mdx#customer-whatsapp-recipient)

### [Modèles et automatisations de messages](../../src/content/help/fr/communications/templates-and-automation.mdx)

Identifiant : `message-templates`. Public : public. Disponibilité : available. Services : foodyserver, foodyadmin.

- [Créer et vérifier un modèle](../../src/content/help/fr/communications/templates-and-automation.mdx#template)
- [Associer les messages aux étapes](../../src/content/help/fr/communications/templates-and-automation.mdx#stage)
- [Associer le fichier à la notification](../../src/content/help/fr/communications/templates-and-automation.mdx#media-binding)
- [Vérifier le rappel de livraison calculé](../../src/content/help/fr/communications/templates-and-automation.mdx#route-delivery-window)
- [Choisir le mode d’envoi du rappel](../../src/content/help/fr/communications/templates-and-automation.mdx#delivery-reminder-review-and-send)
- [Récupérer automatiquement l’image du modèle Meta](../../src/content/help/fr/communications/templates-and-automation.mdx#meta-template-image-sync)

## guest

### [Commander en ligne côté client](../../src/content/help/fr/guest/online-ordering.mdx)

Identifiant : `guest-ordering`. Public : public. Disponibilité : available. Services : foodyserver, foodyweb.

- [Vérifier le plafond de préautorisation au poids](../../src/content/help/fr/guest/online-ordering.mdx#weight-hold-margin)
- [Composer le panier](../../src/content/help/fr/guest/online-ordering.mdx#basket)
- [Choisir une adresse sur téléphone](../../src/content/help/fr/guest/online-ordering.mdx#mobile-fulfillment)
- [Choisir coordonnées et remise](../../src/content/help/fr/guest/online-ordering.mdx#fulfillment)
- [Payer et vérifier la confirmation](../../src/content/help/fr/guest/online-ordering.mdx#payment)
- [Se connecter avant de commander](../../src/content/help/fr/guest/online-ordering.mdx#customer-sign-in-methods)
- [Accès aux nouveaux réglages](../../src/content/help/fr/guest/online-ordering.mdx#related-service-controls)
- [Vérifier les choix conditionnels d’un article](../../src/content/help/fr/guest/online-ordering.mdx#conditional-item-choices)
- [Renseigner un téléphone valide](../../src/content/help/fr/guest/online-ordering.mdx#contact-phone)

### [Suivi, reçus et moyens enregistrés](../../src/content/help/fr/guest/tracking-and-account.mdx)

Identifiant : `guest-account-tracking`. Public : public. Disponibilité : available. Services : foodyserver, foodylanding, foodyweb.

- [Se connecter avant de commander](../../src/content/help/fr/guest/tracking-and-account.mdx#entry-sign-in)
- [Lire l’état de commande](../../src/content/help/fr/guest/tracking-and-account.mdx#tracking)
- [Accéder à l’historique et aux reçus](../../src/content/help/fr/guest/tracking-and-account.mdx#history)
- [Gérer l’enregistrement d’un moyen](../../src/content/help/fr/guest/tracking-and-account.mdx#methods)
- [Vérifier l’aperçu des liens de reçu et de confirmation](../../src/content/help/fr/guest/tracking-and-account.mdx#link-preview)
- [Choisir sa méthode de connexion](../../src/content/help/fr/guest/tracking-and-account.mdx#social-and-password)
- [Comprendre les données de connexion](../../src/content/help/fr/guest/tracking-and-account.mdx#sign-in-privacy)
- [Se connecter pendant la commande](../../src/content/help/fr/guest/tracking-and-account.mdx#optional-entry-access)
- [Corriger un téléphone mémorisé](../../src/content/help/fr/guest/tracking-and-account.mdx#saved-phone-validation)

### [Commander avec le QR de table](../../src/content/help/fr/guest/table-qr.mdx)

Identifiant : `guest-table`. Public : public. Disponibilité : available. Services : foodyserver, foodyweb.

- [Rejoindre la bonne table](../../src/content/help/fr/guest/table-qr.mdx#session)
- [Commander et demander de l’aide](../../src/content/help/fr/guest/table-qr.mdx#ordering)

### [Envoyer une demande catering](../../src/content/help/fr/guest/catering-request.mdx)

Identifiant : `guest-catering`. Public : public. Disponibilité : available. Services : foodyserver, foodyweb.

- [Compléter le parcours catering](../../src/content/help/fr/guest/catering-request.mdx#request)
- [Commander pour une tournée précise](../../src/content/help/fr/guest/catering-request.mdx#tour)
- [Renseigner un téléphone valide](../../src/content/help/fr/guest/catering-request.mdx#contact-phone)

## internal

### [Accès interne et tableau de bord](internal/fr/access-and-dashboard.md)

Identifiant : `backoffice-access`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Vérifier le périmètre opérateur](internal/fr/access-and-dashboard.md#access)
- [Lire les indicateurs plateforme](internal/fr/access-and-dashboard.md#dashboard)
- [Accès aux nouveaux réglages](internal/fr/access-and-dashboard.md#related-service-controls)

### [Création interne de restaurants et utilisateurs](internal/fr/restaurant-onboarding.md)

Identifiant : `backoffice-onboarding`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Préparer une création de restaurant](internal/fr/restaurant-onboarding.md#create)
- [Gérer les utilisateurs autorisés](internal/fr/restaurant-onboarding.md#users)
- [Accès aux nouveaux réglages](internal/fr/restaurant-onboarding.md#related-service-controls)

### [Fonctions, abonnements et paiements internes](internal/fr/features-and-payments.md)

Identifiant : `backoffice-entitlements`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Rembourser ou annuler un paiement en ligne Verifone](internal/fr/features-and-payments.md#verifone-admin-money-operations)
- [Garder la page de paiement lisible](internal/fr/features-and-payments.md#verifone-readable-hosted-theme)
- [Vérifier affectations de fonctions et plans](internal/fr/features-and-payments.md#entitlements)
- [Configurer l’infrastructure de paiement](internal/fr/features-and-payments.md#providers)
- [Attribuer les quotas des services externes](internal/fr/features-and-payments.md#external-api-allocation)

### [Segments et prospects internes](internal/fr/market-and-prospects.md)

Identifiant : `backoffice-market`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Maintenir les segments](internal/fr/market-and-prospects.md#segments)
- [Maintenir les prospects](internal/fr/market-and-prospects.md#prospects)

### [Catalogue et médias internes partagés](internal/fr/catalog-and-assets.md)

Identifiant : `backoffice-assets`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Maintenir les ressources de catalogue](internal/fr/catalog-and-assets.md#catalog)
- [Générer et vérifier les icônes](internal/fr/catalog-and-assets.md#icons)
- [Maintenir les diapositives de connexion](internal/fr/catalog-and-assets.md#login-slides)

### [Opérations, infrastructure et clonage internes](internal/fr/operations-and-cloning.md)

Identifiant : `backoffice-operations`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Examiner les statuts](internal/fr/operations-and-cloning.md#status)
- [Vérifier les contrôles d’infrastructure](internal/fr/operations-and-cloning.md#infra)
- [Prévisualiser un clonage avant import](internal/fr/operations-and-cloning.md#clone)

### [Contrats API et opérations de livraison](internal/fr/api-and-release.md)

Identifiant : `platform-api`. Public : internal. Disponibilité : available. Services : foodyserver, foodyweb.

- [Rembourser ou annuler un paiement en ligne Verifone](internal/fr/api-and-release.md#verifone-admin-money-operations)
- [Garder la page de paiement lisible](internal/fr/api-and-release.md#verifone-readable-hosted-theme)
- [Vérifier le plafond de préautorisation au poids](internal/fr/api-and-release.md#weight-hold-margin)
- [Vérifier les contrats des transactions et du tiroir-caisse POS](internal/fr/api-and-release.md#pos-ledger-cash-drawer-contract)
- [Maintenir les contrats API contextualisés](internal/fr/api-and-release.md#contracts)
- [Valider et promouvoir le même artefact](internal/fr/api-and-release.md#release)
- [Vérifier l’impact documentaire](internal/fr/api-and-release.md#help)
- [Contrat des pièces jointes WhatsApp](internal/fr/api-and-release.md#whatsapp-media-contract)
- [Faire une exception de formule sur une commande](internal/fr/api-and-release.md#internal-combo-substitution-contract)
- [Attendre le paiement au comptoir avant la cuisine](internal/fr/api-and-release.md#counter-terminal-payment-before-kitchen)
- [Synchroniser le corpus du parcours mobile](internal/fr/api-and-release.md#mobile-help-corpus)
- [Résoudre les suggestions de rue Google](internal/fr/api-and-release.md#google-street-refinement)
- [Activer Facebook et Apple pour les clients](internal/fr/api-and-release.md#customer-social-sign-in)
- [Transactions de publication de carte et de stock de vente](internal/fr/api-and-release.md#carte-publication-stock-contract)
- [Synchroniser la procédure du journal des stocks](internal/fr/api-and-release.md#stock-history-only-corpus)
- [Sauvegarder les stocks hors série](internal/fr/api-and-release.md#library-restock)
- [Code caisse à l’activation du personnel](internal/fr/api-and-release.md#staff-activation-pos-code)
- [Contrat des modificateurs conditionnels](internal/fr/api-and-release.md#modifier-position-contract)
- [Contrat des dimensions de variante](internal/fr/api-and-release.md#descriptive-variant-contract)
- [Vérifier le panneau WhatsApp unifié](internal/fr/api-and-release.md#unified-whatsapp-order-composer)
- [Image de modèle WhatsApp Meta](internal/fr/api-and-release.md#meta-template-image-proxy)

### [Aperçus internes et alias de routes](internal/fr/design-previews.md)

Identifiant : `design-sandboxes`. Public : internal. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Vérifier les aperçus](internal/fr/design-previews.md#preview)

### [Socle applicatif partagé](internal/fr/shared-runtime.md)

Identifiant : `shared-runtime`. Public : internal. Disponibilité : available. Services : foodyadmin, foodylanding, foodyweb, foodypos, foodybackoffice.

- [Rembourser ou annuler un paiement en ligne Verifone](internal/fr/shared-runtime.md#verifone-admin-money-operations)
- [Vérifier le plafond de préautorisation au poids](internal/fr/shared-runtime.md#weight-hold-margin)
- [Vérifier les changements du socle](internal/fr/shared-runtime.md#classify)
- [Client des fichiers privés WhatsApp](internal/fr/shared-runtime.md#whatsapp-media-client)
- [Faire une exception de formule sur une commande](internal/fr/shared-runtime.md#internal-combo-substitution-contract)
- [Valider le clavier dans le sélecteur de remise](internal/fr/shared-runtime.md#mobile-fulfillment-viewport)
- [Contrôler les choix de connexion client](internal/fr/shared-runtime.md#customer-social-choice)
- [Conserver le journal des stocks en lecture seule](internal/fr/shared-runtime.md#sale-stock-history-read-only)
- [Accès aux nouveaux réglages](internal/fr/shared-runtime.md#related-service-controls)
- [Vérifier l’accès discret à la connexion](internal/fr/shared-runtime.md#optional-entry-access)
- [Contrat des modificateurs conditionnels](internal/fr/shared-runtime.md#modifier-position-contract)
- [Contrat des dimensions de variante](internal/fr/shared-runtime.md#descriptive-variant-contract)
- [Vérifier le panneau WhatsApp unifié](internal/fr/shared-runtime.md#unified-whatsapp-order-composer)
- [Vérifier les surfaces du terminal mobile](internal/fr/shared-runtime.md#mobile-terminal)
- [Vérifier les pages compactes du terminal](internal/fr/shared-runtime.md#mobile-terminal-pages)

## Traçabilité détaillée

[inventory.json](inventory.json) conserve chaque fichier, son empreinte SHA-256, les fonctions associées, les routes, les enregistrements API, les destinations Flutter, les champs de configuration Website V3, les clés traduites des contrôles et les actions nommées. [catalog/features.json](catalog/features.json) conserve les instructions rédigées dans les trois langues. Les contrats locaux de chaque service figent le même relevé pour la CI.
