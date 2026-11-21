# Revue fonctionnelle Foody / Tabit

Revue du 30 octobre 2026. Le périmètre de comparaison est la fonction native
précise et son parcours métier, pas uniquement le nom d’un module ou le prix.
La revue ci-dessous porte sur 16 critères. À la demande explicite du propriétaire,
la page FR/HE/EN affiche neuf différences sélectionnées au format « Foody :
Présent / Tabit : Absent en natif ». Chaque ligne Foody renvoie à une preuve
publique. Les conditions d’inclusion du module Cuisine restent explicites.

Les absences Tabit reprennent les évaluations communiquées par Foody et ne sont
pas indépendamment confirmées. Cette attribution et le périmètre natif sans
logiciel tiers sont visibles sous le tableau et liés par aria-describedby. Les
deux lignes de langue visent précisément le français des interfaces Admin et POS,
sans présenter tous les produits Tabit comme monolingues.

## Preuves Foody

La revue utilise les guides publics du corpus inchangé et les sources gelées
déjà référencées dans l’inventaire Landing :

- Admin `ab567d1da10bd273ed2ca672a2a3e4b0047cd5de`,
  `src/lib/i18n.tsx` : locales `en`, `he`, `fr` du back-office métier.
- POS `735f5063e8b0e83d33bdfecddd17420e032d4887`, `lib/main.dart`,
  les ressources EN/FR/HE et `appearance_settings_page.dart` : langues du POS.
- API `84ba64cc4049d8168ff8caece566a319f26ca0f3`,
  `internal/stock/forecast_history.go` : estimation de demande depuis les ventes
  historiques, sans recompter des ventes déjà représentées par un rapport importé.

| Critère concret | Preuve publique Foody |
|---|---|
| Back-office FR/HE/EN | FAQ POS, vérifiée contre le fournisseur de locales Admin |
| Caisse FR/HE/EN | FAQ POS et sources POS ci-dessus |
| Décrémentation des ingrédients liée aux recettes | `kitchen/daily-operations` |
| Lot de préparation : débit ingrédients, crédit produit | `kitchen/preparations` |
| Recettes, prix d’achat et coût matière | `kitchen/food-cost` |
| Prévision issue de l’historique | `kitchen/daily-operations`, source API |
| Avant service : préparations, prévisions, livraisons | `kitchen/daily-operations` |
| Pendant service : besoins et stocks des préparations | `kitchen/daily-operations` |
| Clôture : attendu/compté, pertes et écarts | `kitchen/daily-operations` |
| Réceptions fournisseurs et écarts de quantités | `kitchen/suppliers-and-purchases` |
| Import assisté de bons avec validation produits/unités/prix | `kitchen/delivery-note-import` |
| Propositions d’approvisionnement par fournisseur | `kitchen/daily-operations` |
| Compagnon quotidien et accès Siri compatible | page produit Kitchen Companion |
| Commandes directes à 0 % de commission Foody | page produit Orders et tarifs |
| Envoi en préparation et impression séparée | page matériel et tarifs |
| Périmètre des offres et coûts séparés | page tarifs |

Les recettes et correspondances doivent être configurées. Une prévision reste
une estimation, une proposition d’achat reste un brouillon et son envoi est
manuel. La clôture ne déclenche aucun achat automatique. Les écarts fournisseurs
affirmés ici sont ceux des réceptions/quantités et vérifications documentées ;
la page ne promet pas un audit automatique de toute facture fournisseur.
Le coût matière ne constitue pas le bénéfice net. Siri nécessite un iPad
compatible et l’activation ; aucune commande financière vocale n’est annoncée.

## Ce que les sources Tabit établissent réellement

- [86ing an item in Tabit Office](https://support-us.tabit.cloud/hc/en-us/articles/15533941186706-86ing-an-item-in-Tabit-Office)
  documente des limites de disponibilité des plats. Cela ne suffit pas à établir
  le parcours complet de matières premières, recettes et inventaire physique.
- [All-day ingredients](https://support-us.tabit.cloud/hc/en-us/articles/20616966960018-What-are-all-day-ingredients)
  documente un comptage d’ingrédients nécessaires aux commandes actives en KDS.
  Il ne faut ni le nier ni l’assimiler à une fabrication de lot avec mouvements
  de stock et bilan matière.
- [Future Production Management](https://support-us.tabit.cloud/hc/en-us/articles/33014885075346-Future-Production-Management)
  documente quotas par jour, dates particulières, report et alertes. Ce texte
  n’établit pas une prévision automatique de ventes issue de l’historique.
- [Overview of Tabit’s Integrations](https://support-us.tabit.cloud/hc/en-us/articles/12570827573266-Overview-of-Tabit-s-Integrations)
  décrit des partenaires pour inventaire et reporting, dont MarketMan et
  Restaurant365. Il ne prouve pas leur inclusion commerciale ou disponibilité
  dans une offre israélienne particulière.

Ces sources internationales sont distinguées de la page commerciale Israël.
La recherche n’a pas établi les langues FR/HE/EN des deux interfaces Tabit,
ni une absence exhaustive de fonctions natives. Les informations métier
communiquées par le propriétaire orientent les points à examiner, mais les
affirmations publiques ne convertissent pas une absence de documentation en
une absence certaine de capacité.

## Comment établir une différence vérifiable en démonstration

Faire exécuter la même chaîne avec des données synthétiques : interface de caisse
et administration en français/hébreu ; commande reliée à une recette ; mouvements
des ingrédients ; fabrication d’un lot ; prévision depuis l’historique ; besoins
avant service ; contrôle pendant service ; réception avec écart ; bilan attendu
contre compté ; génération de propositions fournisseurs sans envoi automatique.
Noter version, marché, modules natifs, outils tiers et coût de la même configuration.
Une confirmation datée permettrait de qualifier ces absences comme vérifiées.
En attendant, les croix publiques restent attribuées à l’évaluation Foody et
explicitement non confirmées indépendamment. Les fonctions Tabit documentées
ci-dessus ne sont pas présentées comme absentes globalement.

## Relecture du 1er novembre 2026

Les pages officielles [Tabit Kitchen](https://www.tabit.cloud/products/tabitkitchen/),
[Tabit Chef](https://www.tabit.cloud/products/tabitchef/) et
[intégrations](https://www.tabit.cloud/integrations/) ont été relues. La première
décrit le KDS et le suivi des commandes en préparation, la deuxième le suivi
d’indicateurs et les alertes pour la direction, et la troisième présente des
partenaires BOH dont MarketMan et Restaurant365. Ces périmètres ne sont pas niés.
Cette relecture n’établit aucune nouvelle absence native ; le statut attribué
des neuf différences et la date de l’évaluation fournie le 30 octobre sont
conservés. Elle ne transforme pas le silence d’une page publique en preuve négative.
