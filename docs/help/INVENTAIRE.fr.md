# Inventaire fonctionnel Foody

Révision du relevé : 2026-10-18.

98 fiches de fonctionnalités, 359 procédures/sous-fonctionnalités, dont 89 guides publics en trois langues et 9 fiches opérateur internes. Le relevé machine contient 2049 fichiers applicatifs et 1966 surfaces de code. Aucune route de page/application relevée ne reste sans classification.

Ce relevé décrit les sources examinées, les contrôles et les procédures. Il ne certifie pas chaque état d’exécution ni une installation physique. Les chemins API relatifs à un groupe et les enfants Flutter relatifs conservent cette qualification. Les fichiers techniques partagés sont identifiés séparément.

## Services

| Service | Fichiers sources | Surfaces | Dépôt/version |
|---|---:|---:|---|
| foodylanding | 127 | 21 | 81929adc8c0f ; versioned |
| foodyadmin | 734 | 754 | 0ab1ffa36f7e ; versioned |
| foodyserver | 497 | 832 | bf31c3bc4ecb ; versioned |
| foodyweb | 329 | 163 | 46b2633a80a3 ; versioned |
| foodypos | 320 | 149 | b264c840a09d ; versioned |
| foodybackoffice | 42 | 47 | ca05bcdd4234 ; versioned |

## getting-started

### [Se connecter et récupérer un accès](../../src/content/help/fr/getting-started/first-login.mdx)

Identifiant : `account-access`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Activer une invitation](../../src/content/help/fr/getting-started/first-login.mdx#activate)
- [Sélectionner le restaurant](../../src/content/help/fr/getting-started/first-login.mdx#restaurant)
- [Récupérer l’accès](../../src/content/help/fr/getting-started/first-login.mdx#recover)

### [Configurer votre restaurant avec Foody](../../src/content/help/fr/getting-started/complete-setup-guide.mdx)

Identifiant : `getting-started-complete-setup-guide`. Public : public. Disponibilité : available. Services : foodylanding, foodyadmin.

- [Vérifier la configuration avec votre interlocuteur Foody](../../src/content/help/fr/getting-started/complete-setup-guide.mdx#section-1)

### [Comment tout s'articule : de l'ingrédient au plat épuisé](../../src/content/help/fr/getting-started/how-it-all-connects.mdx)

Identifiant : `getting-started-how-it-all-connects`. Public : public. Disponibilité : available. Services : foodylanding, foodyadmin.

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

### [Utiliser le centre d’aide et l’assistant Foody](../../src/content/help/fr/getting-started/using-support.mdx)

Identifiant : `getting-started-using-support`. Public : public. Disponibilité : available. Services : foodylanding, foodyadmin, foodyserver.

- [Trouver une réponse](../../src/content/help/fr/getting-started/using-support.mdx#section-1)
- [Poser une question](../../src/content/help/fr/getting-started/using-support.mdx#section-2)
- [Si vous ne trouvez pas la réponse](../../src/content/help/fr/getting-started/using-support.mdx#section-3)
- [Signaler une procédure différente de votre écran](../../src/content/help/fr/getting-started/using-support.mdx#report-outdated-guide)

### [Offres, démonstration et contact Foody](../../src/content/help/fr/getting-started/offers-and-contact.mdx)

Identifiant : `landing-offers`. Public : public. Disponibilité : available. Services : foodylanding.

- [Comparer les offres publiques](../../src/content/help/fr/getting-started/offers-and-contact.mdx#offers)
- [Demander une démonstration ou de l’aide](../../src/content/help/fr/getting-started/offers-and-contact.mdx#contact)

### [Rechercher et naviguer dans FoodyAdmin](../../src/content/help/fr/getting-started/search-and-navigation.mdx)

Identifiant : `global-search`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Retrouver une fiche métier](../../src/content/help/fr/getting-started/search-and-navigation.mdx#search)
- [Filtrer et examiner une liste](../../src/content/help/fr/getting-started/search-and-navigation.mdx#lists)

## account

### [Sécurité du compte et clés d’accès](../../src/content/help/fr/account/security.mdx)

Identifiant : `account-security`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Ajouter une clé d’accès](../../src/content/help/fr/account/security.mdx#enrol)
- [Se connecter avec une clé d’accès](../../src/content/help/fr/account/security.mdx#use)
- [Retirer une clé inutilisée](../../src/content/help/fr/account/security.mdx#remove)

### [Abonnement et facturation](../../src/content/help/fr/account/subscription.mdx)

Identifiant : `billing`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Lire l’abonnement actuel](../../src/content/help/fr/account/subscription.mdx#read)
- [Vérifier un changement de formule](../../src/content/help/fr/account/subscription.mdx#change)
- [Consulter les événements de facturation](../../src/content/help/fr/account/subscription.mdx#events)

## staff

### [Employés et invitations](../../src/content/help/fr/staff/invite-staff.mdx)

Identifiant : `staff-invitations`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Inviter un employé](../../src/content/help/fr/staff/invite-staff.mdx#invite)
- [Renvoyer une invitation](../../src/content/help/fr/staff/invite-staff.mdx#resend)
- [Vérifier et retirer un accès](../../src/content/help/fr/staff/invite-staff.mdx#review)

### [Rôles et permissions](../../src/content/help/fr/staff/roles-and-permissions.mdx)

Identifiant : `staff-roles`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Créer un rôle](../../src/content/help/fr/staff/roles-and-permissions.mdx#create)
- [Affecter et vérifier](../../src/content/help/fr/staff/roles-and-permissions.mdx#assign)
- [Modifier ou retirer un rôle](../../src/content/help/fr/staff/roles-and-permissions.mdx#change)

### [Accès POS, appareils et shifts](../../src/content/help/fr/staff/devices-and-shifts.mdx)

Identifiant : `staff-devices-shifts`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Activer un appareil POS](../../src/content/help/fr/staff/devices-and-shifts.mdx#pair)
- [Utiliser un code POS personnel](../../src/content/help/fr/staff/devices-and-shifts.mdx#pin)
- [Consulter les shifts](../../src/content/help/fr/staff/devices-and-shifts.mdx#report)

## customers

### [Clients, adresses et doublons](../../src/content/help/fr/customers/managing-customers.mdx)

Identifiant : `customers-profiles`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Retrouver un client](../../src/content/help/fr/customers/managing-customers.mdx#find)
- [Modifier les coordonnées de livraison](../../src/content/help/fr/customers/managing-customers.mdx#edit)
- [Autoriser la commande en espèces](../../src/content/help/fr/customers/managing-customers.mdx#trusted)
- [Fusionner des doublons](../../src/content/help/fr/customers/managing-customers.mdx#merge)

## marketing

### [Promotions en ligne et codes de réduction](../../src/content/help/fr/marketing/promotions.mdx)

Identifiant : `promotions`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Créer une promotion](../../src/content/help/fr/marketing/promotions.mdx#create)
- [Définir les limites](../../src/content/help/fr/marketing/promotions.mdx#limits)
- [Vérifier le résultat client](../../src/content/help/fr/marketing/promotions.mdx#verify)

### [Stories et contenus Instagram](../../src/content/help/fr/marketing/stories-and-instagram.mdx)

Identifiant : `social-stories`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb.

- [Connecter et choisir le contenu](../../src/content/help/fr/marketing/stories-and-instagram.mdx#connection)
- [Vérifier la page Stories](../../src/content/help/fr/marketing/stories-and-instagram.mdx#display)

## analytics

### [Lire le tableau de bord et les rapports](../../src/content/help/fr/analytics/dashboard.mdx)

Identifiant : `analytics-dashboard`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Commencer par l’accueil](../../src/content/help/fr/analytics/dashboard.mdx#section-1)
- [Vérifier la base de date](../../src/content/help/fr/analytics/dashboard.mdx#section-2)
- [Comparaisons et données indisponibles](../../src/content/help/fr/analytics/dashboard.mdx#section-3)
- [Rapports détaillés](../../src/content/help/fr/analytics/dashboard.mdx#section-4)

### [Assistant métier du restaurant](../../src/content/help/fr/analytics/business-assistant.mdx)

Identifiant : `business-ai`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Interroger les données métier](../../src/content/help/fr/analytics/business-assistant.mdx#question)
- [Comprendre le périmètre du panneau](../../src/content/help/fr/analytics/business-assistant.mdx#limits)

## kitchen

### [Disponibilité (épuisé & stock faible)](../../src/content/help/fr/kitchen/availability.mdx)

Identifiant : `kitchen-availability`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Ouvrir Stock & disponibilité](../../src/content/help/fr/kitchen/availability.mdx#section-1)
- [Choisir la source du stock](../../src/content/help/fr/kitchen/availability.mdx#section-2)
- [Choisir et gérer une règle](../../src/content/help/fr/kitchen/availability.mdx#section-3)
- [Forcer un statut puis enregistrer](../../src/content/help/fr/kitchen/availability.mdx#section-4)
- [Vérifier le calcul et les quantités par taille](../../src/content/help/fr/kitchen/availability.mdx#section-5)
- [Contrôler après enregistrement](../../src/content/help/fr/kitchen/availability.mdx#section-6)

### [Operations Quotidiennes](../../src/content/help/fr/kitchen/daily-operations.mdx)

Identifiant : `kitchen-daily-operations`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/kitchen/daily-operations.mdx#section-1)
- [En une phrase](../../src/content/help/fr/kitchen/daily-operations.mdx#section-2)
- [Le Rapport Quotidien](../../src/content/help/fr/kitchen/daily-operations.mdx#section-3)
- [Suivi des Ventes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-4)
- [Importer depuis le POS](../../src/content/help/fr/kitchen/daily-operations.mdx#section-5)
- [Saisie manuelle des ventes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-6)
- [Livraisons Recues](../../src/content/help/fr/kitchen/daily-operations.mdx#section-7)
- [Comptage & Ecarts de Stock](../../src/content/help/fr/kitchen/daily-operations.mdx#section-8)
- [Comment ca marche](../../src/content/help/fr/kitchen/daily-operations.mdx#section-9)
- [Comment interpreter rapidement](../../src/content/help/fr/kitchen/daily-operations.mdx#section-10)
- [Exemple concret](../../src/content/help/fr/kitchen/daily-operations.mdx#section-11)
- [Saisie du stock de fermeture](../../src/content/help/fr/kitchen/daily-operations.mdx#section-12)
- [Detail par ingredient](../../src/content/help/fr/kitchen/daily-operations.mdx#section-13)
- [Analyse du Food Cost](../../src/content/help/fr/kitchen/daily-operations.mdx#section-14)
- [Importation de Recettes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-15)
- [Retrospective](../../src/content/help/fr/kitchen/daily-operations.mdx#section-16)
- [Cloture de la Journee](../../src/content/help/fr/kitchen/daily-operations.mdx#section-17)
- [Approvisionnements Estimes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-18)
- [Generer la commande de demain](../../src/content/help/fr/kitchen/daily-operations.mdx#section-19)
- [Verification et envoi](../../src/content/help/fr/kitchen/daily-operations.mdx#section-20)
- [Comprendre la prediction](../../src/content/help/fr/kitchen/daily-operations.mdx#section-21)
- [Le Flux de Travail Complet](../../src/content/help/fr/kitchen/daily-operations.mdx#section-22)
- [Prerequis](../../src/content/help/fr/kitchen/daily-operations.mdx#section-23)
- [Erreurs Frequentes](../../src/content/help/fr/kitchen/daily-operations.mdx#section-24)
- [Conseils](../../src/content/help/fr/kitchen/daily-operations.mdx#section-25)
- [Articles lies](../../src/content/help/fr/kitchen/daily-operations.mdx#section-26)

### [Coût matière](../../src/content/help/fr/kitchen/food-cost.mdx)

Identifiant : `kitchen-food-cost`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/kitchen/food-cost.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/kitchen/food-cost.mdx#section-2)
- [Ce que vous voyez](../../src/content/help/fr/kitchen/food-cost.mdx#section-3)
- [Comment l'utiliser](../../src/content/help/fr/kitchen/food-cost.mdx#section-4)
- [Théorique vs réel](../../src/content/help/fr/kitchen/food-cost.mdx#section-5)

### [Préparations](../../src/content/help/fr/kitchen/preparations.mdx)

Identifiant : `kitchen-preparations`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/kitchen/preparations.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/kitchen/preparations.mdx#section-2)
- [Pourquoi les utiliser](../../src/content/help/fr/kitchen/preparations.mdx#section-3)
- [Exemple](../../src/content/help/fr/kitchen/preparations.mdx#section-4)

### [Gestion des Stocks](../../src/content/help/fr/kitchen/stock-management.mdx)

Identifiant : `kitchen-stock-management`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

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

### [Fournisseurs et commandes d’achat](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx)

Identifiant : `suppliers-purchasing`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Gérer les produits fournisseurs](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#supplier)
- [Transformer les besoins en commande d’achat](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#needs)
- [Vérifier et envoyer la commande](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#send)
- [Réceptionner ou annuler volontairement](../../src/content/help/fr/kitchen/suppliers-and-purchases.mdx#receive)

### [Scanner et vérifier les livraisons fournisseurs](../../src/content/help/fr/kitchen/delivery-note-import.mdx)

Identifiant : `delivery-import`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Capturer le document](../../src/content/help/fr/kitchen/delivery-note-import.mdx#capture)
- [Associer produits et unités](../../src/content/help/fr/kitchen/delivery-note-import.mdx#mapping)
- [Reprendre un brouillon](../../src/content/help/fr/kitchen/delivery-note-import.mdx#draft)
- [Confirmer une fois et vérifier le stock](../../src/content/help/fr/kitchen/delivery-note-import.mdx#confirm)

### [Laboratoire de recettes et versions](../../src/content/help/fr/kitchen/recipe-lab.mdx)

Identifiant : `recipe-lab`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

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

Identifiant : `stock-units-policy`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Gérer les unités de mesure](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx#units)
- [Régler stock et disponibilité](../../src/content/help/fr/kitchen/units-and-stock-settings.mdx#policy)

## menu

### [Articles, catégories et menus clients](../../src/content/help/fr/menu/categories-and-items.mdx)

Identifiant : `menu-categories-and-items`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Consulter la bibliothèque Articles](../../src/content/help/fr/menu/categories-and-items.mdx#section-1)
- [Rechercher, filtrer et choisir les colonnes](../../src/content/help/fr/menu/categories-and-items.mdx#filters)
- [Créer, modifier et effectuer des actions groupées](../../src/content/help/fr/menu/categories-and-items.mdx#edit)
- [Rendre un article visible aux clients](../../src/content/help/fr/menu/categories-and-items.mdx#section-2)

### [Créer un article du menu, étape par étape](../../src/content/help/fr/menu/creating-a-menu-item.mdx)

Identifiant : `menu-creating-a-menu-item`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Vérifier les accès et ouvrir l’éditeur](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-1)
- [Informations de l’article et photo](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-3)
- [Classement et diffusion](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-6)
- [Prix et variantes](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-7)
- [Personnalisations et autres sections](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-10)
- [Enregistrer, puis compléter la recette](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-11)
- [Vérifier l’affichage et résoudre une absence](../../src/content/help/fr/menu/creating-a-menu-item.mdx#section-12)

### [Configurer les ingrédients et portions](../../src/content/help/fr/menu/ingredients-and-portions.mdx)

Identifiant : `menu-ingredients-and-portions`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Ouvrir la recette dans l’éditeur continu](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-1)
- [Ajouter une matière première ou une préparation](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-2)
- [Saisir la quantité pour une portion](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-4)
- [Définir les quantités par taille](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-7)
- [Préremplir et contrôler les cellules](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-11)
- [Vérifier unités, coût et modificateurs](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-13)
- [Enregistrer et reprendre après une erreur](../../src/content/help/fr/menu/ingredients-and-portions.mdx#section-19)

### [Menus, cartes & groupes (ce que voient les clients)](../../src/content/help/fr/menu/menus-and-groups.mdx)

Identifiant : `menu-menus-and-groups`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/menu/menus-and-groups.mdx#section-1)
- [La structure](../../src/content/help/fr/menu/menus-and-groups.mdx#section-2)
- [Gérer vos menus](../../src/content/help/fr/menu/menus-and-groups.mdx#section-3)
- [Où ça se vend : en ligne ou en caisse](../../src/content/help/fr/menu/menus-and-groups.mdx#section-4)
- [Quand ça se vend : horaires de disponibilité](../../src/content/help/fr/menu/menus-and-groups.mdx#section-5)
- [Le lien avec la disponibilité](../../src/content/help/fr/menu/menus-and-groups.mdx#section-6)
- [Démarrage rapide](../../src/content/help/fr/menu/menus-and-groups.mdx#section-7)

### [Variantes et tailles](../../src/content/help/fr/menu/variants-and-sizes.mdx)

Identifiant : `menu-variants-and-sizes`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Comprendre le prix et la portion](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-1)
- [Ajouter et enregistrer les variantes](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-2)
- [Disponibilité, ordre et lignes réservées aux combos](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-7)
- [Réutiliser un groupe enregistré](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-8)
- [Relier les tailles à la recette](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-10)
- [Contrôler après enregistrement](../../src/content/help/fr/menu/variants-and-sizes.mdx#section-14)

### [Modificateurs et règles de sélection](../../src/content/help/fr/menu/modifiers.mdx)

Identifiant : `menu-modifiers`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Créer un groupe réutilisable](../../src/content/help/fr/menu/modifiers.mdx#group)
- [Définir les suppléments de prix](../../src/content/help/fr/menu/modifiers.mdx#pricing)
- [Associer les groupes aux articles](../../src/content/help/fr/menu/modifiers.mdx#link)
- [Configurer les précisions client](../../src/content/help/fr/menu/modifiers.mdx#notes)

### [Importer un catalogue et gérer les images](../../src/content/help/fr/menu/import-and-images.mdx)

Identifiant : `catalog-import`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Choisir la source](../../src/content/help/fr/menu/import-and-images.mdx#input)
- [Vérifier les articles extraits](../../src/content/help/fr/menu/import-and-images.mdx#review)
- [Enregistrer et placer dans les groupes](../../src/content/help/fr/menu/import-and-images.mdx#commit)
- [Téléverser ou générer une image](../../src/content/help/fr/menu/import-and-images.mdx#images)

### [Combos et formules configurables](../../src/content/help/fr/menu/combos.mdx)

Identifiant : `combos`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb, foodypos.

- [Définir les étapes de la formule](../../src/content/help/fr/menu/combos.mdx#steps)
- [Vérifier le prix de la formule](../../src/content/help/fr/menu/combos.mdx#price)
- [Prendre une commande combo](../../src/content/help/fr/menu/combos.mdx#order)

### [Bibliothèque de remises du personnel](../../src/content/help/fr/menu/pos-discounts.mdx)

Identifiant : `pos-discount-library`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Créer une remise nommée](../../src/content/help/fr/menu/pos-discounts.mdx#definition)
- [Appliquer avec autorisation](../../src/content/help/fr/menu/pos-discounts.mdx#apply)
- [Distinguer les codes en ligne](../../src/content/help/fr/menu/pos-discounts.mdx#distinction)

## orders

### [Gérer les commandes](../../src/content/help/fr/orders/managing-orders.mdx)

Identifiant : `orders-managing-orders`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Qu'est-ce que c'est ?](../../src/content/help/fr/orders/managing-orders.mdx#section-1)
- [Comment ça marche (simplement)](../../src/content/help/fr/orders/managing-orders.mdx#section-2)
- [Le flux d'une commande](../../src/content/help/fr/orders/managing-orders.mdx#section-3)
- [Bon à savoir](../../src/content/help/fr/orders/managing-orders.mdx#section-4)

### [Types de commandes et remise](../../src/content/help/fr/orders/order-types.mdx)

Identifiant : `order-types`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Sur place et tables](../../src/content/help/fr/orders/order-types.mdx#dine-in)
- [Retrait](../../src/content/help/fr/orders/order-types.mdx#pickup)
- [Livraison](../../src/content/help/fr/orders/order-types.mdx#delivery)
- [Commandes planifiées et séries](../../src/content/help/fr/orders/order-types.mdx#scheduled)

### [Prendre une commande sur la caisse](../../src/content/help/fr/orders/taking-an-order-pos.mdx)

Identifiant : `pos-order-entry`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Ouvrir la bonne addition](../../src/content/help/fr/orders/taking-an-order-pos.mdx#start)
- [Ajouter et personnaliser les articles](../../src/content/help/fr/orders/taking-an-order-pos.mdx#add)
- [Affecter places et services](../../src/content/help/fr/orders/taking-an-order-pos.mdx#seat-course)
- [Envoyer et vérifier la préparation](../../src/content/help/fr/orders/taking-an-order-pos.mdx#send)
- [Reprendre ou encaisser](../../src/content/help/fr/orders/taking-an-order-pos.mdx#resume)

### [Consulter et modifier une commande](../../src/content/help/fr/orders/order-details.mdx)

Identifiant : `order-detail`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Retrouver la bonne commande](../../src/content/help/fr/orders/order-details.mdx#filter)
- [Créer une commande du personnel](../../src/content/help/fr/orders/order-details.mdx#create)
- [Modifier les informations enregistrées](../../src/content/help/fr/orders/order-details.mdx#edit)
- [Accepter, préparer et remettre](../../src/content/help/fr/orders/order-details.mdx#status)
- [Envoyer volontairement les messages client](../../src/content/help/fr/orders/order-details.mdx#communications)

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

- [Répartir couverts ou articles](../../src/content/help/fr/orders/split-bills.mdx#allocation)
- [Partager les articles sélectionnés](../../src/content/help/fr/orders/split-bills.mdx#share)
- [Regrouper les fractions enregistrées](../../src/content/help/fr/orders/split-bills.mdx#combine)

### [Déplacer, fusionner et transférer les articles](../../src/content/help/fr/orders/move-and-merge-bills.mdx)

Identifiant : `pos-check-move`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Déplacer une addition](../../src/content/help/fr/orders/move-and-merge-bills.mdx#move)
- [Fusionner des additions occupées](../../src/content/help/fr/orders/move-and-merge-bills.mdx#merge)
- [Transférer des articles enregistrés](../../src/content/help/fr/orders/move-and-merge-bills.mdx#transfer)

### [Couverts, services, attente et envoi cuisine](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx)

Identifiant : `pos-courses`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Affecter couverts et services](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#seats)
- [Mettre en attente ou lancer un service](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#release)
- [Répéter des plats comme nouvelle vente](../../src/content/help/fr/orders/courses-and-kitchen-release.mdx#repeat)

### [Remise, offert et annulation](../../src/content/help/fr/orders/discount-comp-void.mdx)

Identifiant : `pos-comp-void`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Appliquer une remise](../../src/content/help/fr/orders/discount-comp-void.mdx#discount)
- [Offrir ou retirer un offert](../../src/content/help/fr/orders/discount-comp-void.mdx#comp)
- [Annuler un plat avec motif](../../src/content/help/fr/orders/discount-comp-void.mdx#void)

## payments

### [Comprendre le statut d’un paiement](../../src/content/help/fr/payments/how-payments-work.mdx)

Identifiant : `payments-how-payments-work`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb.

- [Configuration](../../src/content/help/fr/payments/how-payments-work.mdx#section-1)
- [Vérifier un paiement en ligne](../../src/content/help/fr/payments/how-payments-work.mdx#section-2)
- [Résultat en échec ou incertain](../../src/content/help/fr/payments/how-payments-work.mdx#section-3)

### [Encaisser sur la caisse](../../src/content/help/fr/payments/pos-checkout.mdx)

Identifiant : `pos-payments`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Enregistrer les espèces](../../src/content/help/fr/payments/pos-checkout.mdx#cash)
- [Encaisser un paiement connecté](../../src/content/help/fr/payments/pos-checkout.mdx#card)
- [Vérifier pourboire et reçu](../../src/content/help/fr/payments/pos-checkout.mdx#receipt-tip)

### [Prestataires, moyens enregistrés et Cibus](../../src/content/help/fr/payments/providers-and-cibus.mdx)

Identifiant : `payment-configuration`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Faire activer un prestataire](../../src/content/help/fr/payments/providers-and-cibus.mdx#provider)
- [Comprendre les moyens enregistrés](../../src/content/help/fr/payments/providers-and-cibus.mdx#saved-methods)
- [Configurer et utiliser Cibus](../../src/content/help/fr/payments/providers-and-cibus.mdx#cibus)
- [Régler politique de paiement, TVA et pourboires](../../src/content/help/fr/payments/providers-and-cibus.mdx#policy-vat-tips)

## printers

### [Installer une Epson TM-U220IIB avec Foody](../../src/content/help/fr/printers/epson-tm-u220iib.mdx)

Identifiant : `printers-epson-tm-u220iib`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

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

### [Profils d’impression et routage](../../src/content/help/fr/printers/profiles-and-routing.mdx)

Identifiant : `printer-profiles`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Trouver une imprimante Epson sur le réseau local](../../src/content/help/fr/printers/profiles-and-routing.mdx#discover-epson)
- [Créer ou modifier un profil partagé](../../src/content/help/fr/printers/profiles-and-routing.mdx#profile)
- [Régler les options des tickets](../../src/content/help/fr/printers/profiles-and-routing.mdx#ticket-options)
- [Affecter la bonne imprimante](../../src/content/help/fr/printers/profiles-and-routing.mdx#assign)

### [Statut et historique d’impression](../../src/content/help/fr/printers/status-and-history.mdx)

Identifiant : `printer-diagnostics`. Public : public. Disponibilité : available. Services : foodyserver, foodypos.

- [Vérifier la connexion](../../src/content/help/fr/printers/status-and-history.mdx#status)
- [Lire les dernières 24 heures](../../src/content/help/fr/printers/status-and-history.mdx#history)

## website-qr

### [Modifier et publier le site du restaurant](../../src/content/help/fr/website-qr/customize-your-site.mdx)

Identifiant : `website-qr-customize-your-site`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb.

- [Ouvrir l’éditeur](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-1)
- [Enregistrer et publier sont deux actions différentes](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-2)
- [Menu et commandes](../../src/content/help/fr/website-qr/customize-your-site.mdx#section-3)

### [Apparence et identité du site](../../src/content/help/fr/website-qr/design-and-branding.mdx)

Identifiant : `website-design`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir un thème et les couleurs](../../src/content/help/fr/website-qr/design-and-branding.mdx#theme)
- [Régler les polices et rôles de texte](../../src/content/help/fr/website-qr/design-and-branding.mdx#fonts)
- [Cadrer les images des articles](../../src/content/help/fr/website-qr/design-and-branding.mdx#images)

### [En-tête, navigation et pied de page](../../src/content/help/fr/website-qr/navigation-and-footer.mdx)

Identifiant : `website-navigation`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Configurer l’en-tête](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#header)
- [Gérer les liens et le bouton principal](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#links)
- [Configurer le contenu du pied de page](../../src/content/help/fr/website-qr/navigation-and-footer.mdx#footer)

### [Sections, médias et animations](../../src/content/help/fr/website-qr/sections-and-media.mdx)

Identifiant : `website-sections`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Ajouter, déplacer et masquer les sections](../../src/content/help/fr/website-qr/sections-and-media.mdx#structure)
- [Rédiger et sélectionner le contenu](../../src/content/help/fr/website-qr/sections-and-media.mdx#content)
- [Régler images et vidéo](../../src/content/help/fr/website-qr/sections-and-media.mdx#media)
- [Prévisualiser les animations](../../src/content/help/fr/website-qr/sections-and-media.mdx#motion)

### [Concevoir la page de commande](../../src/content/help/fr/website-qr/order-page.mdx)

Identifiant : `website-order-design`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir disposition et navigation du menu](../../src/content/help/fr/website-qr/order-page.mdx#menu-layout)
- [Personnaliser la fiche article](../../src/content/help/fr/website-qr/order-page.mdx#item-surface)
- [Placer les contenus de découverte](../../src/content/help/fr/website-qr/order-page.mdx#discovery)

### [Design du paiement, de la confirmation et du reçu](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx)

Identifiant : `website-journey`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Prévisualiser paiement et confirmation](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#checkout)
- [Régler contenu et actions du reçu](../../src/content/help/fr/website-qr/checkout-and-receipt.mdx#receipt)

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

Identifiant : `pos-service-modes`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Choisir un profil de mode](../../src/content/help/fr/settings/service-mode.mdx#mode)
- [Configurer le service à table et au comptoir](../../src/content/help/fr/settings/service-mode.mdx#service)
- [Garder la remise indépendante](../../src/content/help/fr/settings/service-mode.mdx#fulfillment)

### [Traitement des commandes et flux cuisine](../../src/content/help/fr/settings/workflow-settings.mdx)

Identifiant : `order-workflow`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Vérifier l’acceptation des commandes](../../src/content/help/fr/settings/workflow-settings.mdx#approval)
- [Configurer la progression cuisine](../../src/content/help/fr/settings/workflow-settings.mdx#kitchen)
- [Régler les délais de préparation](../../src/content/help/fr/settings/workflow-settings.mdx#clock)
- [Vérifier les réglages enregistrés](../../src/content/help/fr/settings/workflow-settings.mdx#save)

### [Profil, langues et horaires du restaurant](../../src/content/help/fr/settings/restaurant-profile.mdx)

Identifiant : `restaurant-profile`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Modifier les informations du restaurant](../../src/content/help/fr/settings/restaurant-profile.mdx#identity)
- [Définir les langues proposées](../../src/content/help/fr/settings/restaurant-profile.mdx#languages)
- [Maintenir les horaires](../../src/content/help/fr/settings/restaurant-profile.mdx#hours)

### [Règles de commande et de remise](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx)

Identifiant : `fulfillment-policy`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Choisir les canaux de commande](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#channels)
- [Régler les limites de planification](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#schedule)
- [Utiliser l’accès de test temporaire](../../src/content/help/fr/settings/fulfillment-and-ordering.mdx#test-access)

### [Comportement POS, services et ajustements](../../src/content/help/fr/settings/pos-behavior.mdx)

Identifiant : `pos-behavior`. Public : public. Disponibilité : available. Services : foodyadmin, foodypos.

- [Régler le comportement du menu](../../src/content/help/fr/settings/pos-behavior.mdx#menu-behavior)
- [Configurer les services de cuisine](../../src/content/help/fr/settings/pos-behavior.mdx#courses)
- [Vérifier les ajustements autorisés](../../src/content/help/fr/settings/pos-behavior.mdx#adjustments)

### [Appareils et écrans cuisine](../../src/content/help/fr/settings/devices-and-kitchen-displays.mdx)

Identifiant : `device-kds`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

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

## tables-floors

### [Plans de salle, tables et QR codes](../../src/content/help/fr/tables-floors/floor-plans.mdx)

Identifiant : `floor-plans`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodyweb, foodypos.

- [Créer un plan](../../src/content/help/fr/tables-floors/floor-plans.mdx#plan)
- [Organiser les zones de service](../../src/content/help/fr/tables-floors/floor-plans.mdx#sections)
- [Préparer les supports QR](../../src/content/help/fr/tables-floors/floor-plans.mdx#qr)
- [Utiliser la vue des tables](../../src/content/help/fr/tables-floors/floor-plans.mdx#live)

### [Accès aux tables, statuts et assistance](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx)

Identifiant : `table-service-policy`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver, foodypos.

- [Affecter salles, sections et tables](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#assign)
- [Maintenir l’état des tables](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#status)
- [Configurer les demandes d’assistance](../../src/content/help/fr/tables-floors/staff-and-assistance.mdx#assistance)

### [Créer et imprimer les QR de table](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx)

Identifiant : `table-qr-design`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Personnaliser la carte QR](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx#design)
- [Imprimer et vérifier les destinations](../../src/content/help/fr/tables-floors/qr-design-and-print.mdx#print)

## delivery

### [Zones, frais et calendriers de livraison](../../src/content/help/fr/delivery/zones-and-schedules.mdx)

Identifiant : `delivery-zones`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Créer une zone de livraison](../../src/content/help/fr/delivery/zones-and-schedules.mdx#zone)
- [Définir frais et minimums](../../src/content/help/fr/delivery/zones-and-schedules.mdx#fees)
- [Configurer jours et créneaux](../../src/content/help/fr/delivery/zones-and-schedules.mdx#calendar)

### [Dispatch et planification des tournées](../../src/content/help/fr/delivery/dispatch-and-routes.mdx)

Identifiant : `delivery-dispatch`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Choisir les livraisons d’une date](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#date)
- [Affecter coursiers et arrêts](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#assign)
- [Vérifier une tournée calculée](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#optimize)
- [Enregistrer et suivre l’avancement](../../src/content/help/fr/delivery/dispatch-and-routes.mdx#dispatch)

### [Parcours coursier et confirmation des livraisons](../../src/content/help/fr/delivery/courier-workspace.mdx)

Identifiant : `courier`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Ouvrir la tournée affectée](../../src/content/help/fr/delivery/courier-workspace.mdx#itinerary)
- [Naviguer et contacter](../../src/content/help/fr/delivery/courier-workspace.mdx#navigate)
- [Confirmer le résultat réel](../../src/content/help/fr/delivery/courier-workspace.mdx#complete)

### [Fournisseurs de cartes et usages](../../src/content/help/fr/delivery/maps-and-usage.mdx)

Identifiant : `maps-usage`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Vérifier le fournisseur configuré](../../src/content/help/fr/delivery/maps-and-usage.mdx#provider)
- [Respecter les limites d’usage](../../src/content/help/fr/delivery/maps-and-usage.mdx#limits)

## catering

### [Services, catalogue et offres catering](../../src/content/help/fr/catering/services-and-catalog.mdx)

Identifiant : `catering-catalog`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Créer et activer un service](../../src/content/help/fr/catering/services-and-catalog.mdx#service)
- [Maintenir groupes et articles](../../src/content/help/fr/catering/services-and-catalog.mdx#catalog)
- [Composer offres et formules](../../src/content/help/fr/catering/services-and-catalog.mdx#offers)

### [Questions, planning et tarifs catering](../../src/content/help/fr/catering/flow-and-pricing.mdx)

Identifiant : `catering-flow`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Configurer les étapes client](../../src/content/help/fr/catering/flow-and-pricing.mdx#steps)
- [Maintenir les règles tarifaires](../../src/content/help/fr/catering/flow-and-pricing.mdx#rules)

### [Examiner les devis catering](../../src/content/help/fr/catering/review-quotes.mdx)

Identifiant : `catering-quotes`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Approuver ou refuser un devis](../../src/content/help/fr/catering/review-quotes.mdx#review)
- [Vérifier acompte et preuve de remboursement](../../src/content/help/fr/catering/review-quotes.mdx#deposit)

### [Événements catering et solde](../../src/content/help/fr/catering/events-and-balance.mdx)

Identifiant : `catering-events`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Vérifier l’événement accepté](../../src/content/help/fr/catering/events-and-balance.mdx#planning)
- [Gérer une autorisation de solde compatible](../../src/content/help/fr/catering/events-and-balance.mdx#balance)

### [Établissements et routage catering](../../src/content/help/fr/catering/branches-and-routing.mdx)

Identifiant : `catering-routing`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Maintenir les établissements éligibles](../../src/content/help/fr/catering/branches-and-routing.mdx#branches)
- [Régler les règles de routage](../../src/content/help/fr/catering/branches-and-routing.mdx#rules)

## chains

### [Chaînes et gestion des établissements](../../src/content/help/fr/chains/branches-and-dashboard.mdx)

Identifiant : `chains`. Public : public. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Choisir le bon établissement](../../src/content/help/fr/chains/branches-and-dashboard.mdx#scope)
- [Vérifier la présence publique](../../src/content/help/fr/chains/branches-and-dashboard.mdx#publication)

## communications

### [Connecter et utiliser WhatsApp](../../src/content/help/fr/communications/whatsapp.mdx)

Identifiant : `whatsapp`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Connecter un expéditeur](../../src/content/help/fr/communications/whatsapp.mdx#connection)
- [Utiliser Meta coexistence sous activation](../../src/content/help/fr/communications/whatsapp.mdx#meta)
- [Lire l’historique des messages](../../src/content/help/fr/communications/whatsapp.mdx#delivery)

### [Modèles et automatisations de messages](../../src/content/help/fr/communications/templates-and-automation.mdx)

Identifiant : `message-templates`. Public : public. Disponibilité : available. Services : foodyadmin, foodyserver.

- [Créer et vérifier un modèle](../../src/content/help/fr/communications/templates-and-automation.mdx#template)
- [Associer les messages aux étapes](../../src/content/help/fr/communications/templates-and-automation.mdx#stage)

## guest

### [Commander en ligne côté client](../../src/content/help/fr/guest/online-ordering.mdx)

Identifiant : `guest-ordering`. Public : public. Disponibilité : available. Services : foodyweb.

- [Composer le panier](../../src/content/help/fr/guest/online-ordering.mdx#basket)
- [Choisir coordonnées et remise](../../src/content/help/fr/guest/online-ordering.mdx#fulfillment)
- [Payer et vérifier la confirmation](../../src/content/help/fr/guest/online-ordering.mdx#payment)

### [Suivi, reçus et moyens enregistrés](../../src/content/help/fr/guest/tracking-and-account.mdx)

Identifiant : `guest-account-tracking`. Public : public. Disponibilité : available. Services : foodyweb.

- [Lire l’état de commande](../../src/content/help/fr/guest/tracking-and-account.mdx#tracking)
- [Accéder à l’historique et aux reçus](../../src/content/help/fr/guest/tracking-and-account.mdx#history)
- [Gérer l’enregistrement d’un moyen](../../src/content/help/fr/guest/tracking-and-account.mdx#methods)

### [Commander avec le QR de table](../../src/content/help/fr/guest/table-qr.mdx)

Identifiant : `guest-table`. Public : public. Disponibilité : available. Services : foodyserver, foodyweb.

- [Rejoindre la bonne table](../../src/content/help/fr/guest/table-qr.mdx#session)
- [Commander et demander de l’aide](../../src/content/help/fr/guest/table-qr.mdx#ordering)

### [Envoyer une demande catering](../../src/content/help/fr/guest/catering-request.mdx)

Identifiant : `guest-catering`. Public : public. Disponibilité : available. Services : foodyserver, foodyweb.

- [Compléter le parcours catering](../../src/content/help/fr/guest/catering-request.mdx#request)
- [Commander pour une tournée précise](../../src/content/help/fr/guest/catering-request.mdx#tour)

## internal

### [Accès interne et tableau de bord](internal/fr/access-and-dashboard.md)

Identifiant : `backoffice-access`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Vérifier le périmètre opérateur](internal/fr/access-and-dashboard.md#access)
- [Lire les indicateurs plateforme](internal/fr/access-and-dashboard.md#dashboard)

### [Création interne de restaurants et utilisateurs](internal/fr/restaurant-onboarding.md)

Identifiant : `backoffice-onboarding`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Préparer une création de restaurant](internal/fr/restaurant-onboarding.md#create)
- [Gérer les utilisateurs autorisés](internal/fr/restaurant-onboarding.md#users)

### [Fonctions, abonnements et paiements internes](internal/fr/features-and-payments.md)

Identifiant : `backoffice-entitlements`. Public : internal. Disponibilité : available. Services : foodyserver, foodybackoffice.

- [Vérifier affectations de fonctions et plans](internal/fr/features-and-payments.md#entitlements)
- [Configurer l’infrastructure de paiement](internal/fr/features-and-payments.md#providers)

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

- [Maintenir les contrats API contextualisés](internal/fr/api-and-release.md#contracts)
- [Valider et promouvoir le même artefact](internal/fr/api-and-release.md#release)
- [Vérifier l’impact documentaire](internal/fr/api-and-release.md#help)

### [Aperçus internes et alias de routes](internal/fr/design-previews.md)

Identifiant : `design-sandboxes`. Public : internal. Disponibilité : available. Services : foodyadmin, foodyweb.

- [Vérifier les aperçus](internal/fr/design-previews.md#preview)

### [Socle applicatif partagé](internal/fr/shared-runtime.md)

Identifiant : `shared-runtime`. Public : internal. Disponibilité : available. Services : foodylanding, foodyadmin, foodyweb, foodypos, foodybackoffice.

- [Vérifier les changements du socle](internal/fr/shared-runtime.md#classify)

## Traçabilité détaillée

[inventory.json](inventory.json) conserve chaque fichier, son empreinte SHA-256, les fonctions associées, les routes, les enregistrements API, les destinations Flutter, les champs de configuration Website V3, les clés traduites des contrôles et les actions nommées. [catalog/features.json](catalog/features.json) conserve les instructions rédigées dans les trois langues. Les contrats locaux de chaque service figent le même relevé pour la CI.
