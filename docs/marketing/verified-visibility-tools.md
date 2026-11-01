# Visibilité Foody : outils, preuves et mesure

Revue du 1er novembre 2026, préparée sur Landing develop
`194d0f191042def8d32359ea375a663acb2069ee`.

## Contenu localisé

- Calculateur autonome à `/{he,fr,en}/tools/food-cost-calculator` : quantités nettes,
  grammes/ml/pièces, rendements, portions, prix HT, coût matière, food cost,
  marge matière et prix correspondant à un objectif choisi. Les montants ne
  sont ni des prix fournisseurs recommandés ni des résultats clients. Aucun
  enregistrement ou envoi des recettes. Calculs couverts par les tests dédiés.
- Trois parcours à `/{he,fr,en}/demos/kitchen` : liaison vente/recette/stock,
  réception fournisseur et journée Compagnon. Chaque parcours expose ses
  prérequis et sa procédure publique dans les trois langues.
- Identité à `/{he,fr,en}/about` : domaine officiel, modules, interventions sur
  place dans toutes les villes d’Israël, téléphone/e-mail et horaires fournis
  par le propriétaire. Les rendez-vous restent à convenir. Aucune adresse
  privée, immatriculation, ancienneté, note ou recommandation client inventée.
- Liens contextuels, footer, métadonnées, langues réciproques et sitemap mis à jour.
  Ces pages offrent des ressources utiles et citables ; elles ne garantissent
  ni indexation, ni citation IA, ni première position.

## Comparaison concurrente

Sources officielles consultées le 1er novembre :

- [Tabit Israël](https://tabit.cloud/il/) : KDS et prévisions Tabit Bizz présentés.
- [Tabit Bizz](https://support-us.tabit.cloud/hc/en-us/articles/39397401980306-Tabit-Bizz-overview) :
  prévisions de ventes documentées, donc ne pas écrire « absent » pour ce besoin.
- [Intégrations, documentation US](https://support-us.tabit.cloud/hc/en-us/articles/12570827573266-Overview-of-Tabit-s-Integrations) :
  ne démontre pas la disponibilité d’un connecteur pour un contrat israélien.
- [Évolution de production, documentation Israël](https://support-il.tabit.cloud/hc/he-il/articles/35665904767634) :
  planification de produits finis, distincte de la nomenclature d’ingrédients.

Neuf fonctions Foody restent présentes, avec leurs liens de preuve. La prévision
Tabit est « documentée » ; les huit autres cases sont « à confirmer » car les
sources examinées ne permettent pas de conclure à une absence. L’absence de
mention dans une page n’est pas une preuve d’absence. Une configuration datée,
son marché, son contrat et ses modules sont nécessaires pour conclure davantage.
Aucun devis privé ou taux de commission non vérifié indépendamment n’est publié.
Les quatre demandes externes déjà envoyées ne sont pas renvoyées.

## Provenance des captures

Les huit images sont pixel-identiques à Admin
`fe74c937ead44aa74c321aaaa4553dfab5a73052`, dans
`docs/foodyadmin-redesign/evidence/`. Les quatre ajouts sont
`stock-workspace-he-dark.png`, `stock-workspace-fr-mobile.png`,
`supplies-detail-he-dark.png` et `supplier-receive.png`.
Dimensions, hashes et chemins figurent dans
`israel-growth/product-assets.json`. Inspection visuelle : restaurant de
simulation Atelier Foody et fournisseurs de démonstration ; pas de données
clients réelles. Les captures datent du 4 octobre, pas du jour de publication.

La réception française montre une ligne liée et une ligne sans lien au stock.
La valeur d’exemple 6 kg commandés / 5,5 kg reçus ne prétend pas être une action
visible sur cette capture. Les historiques de coût peuvent employer le coût
courant du stock : ne pas présenter leur montant comme un avoir automatique.
Les exemples numériques sont séparés et accompagnés de leurs hypothèses.

## Analytics et publication

Création Google explicitement autorisée par le propriétaire, y compris conditions
et traitement des données. Compte 414297109 ; propriété 561799404 ; flux
16247446109 ; ID public G-31GLDB1C55. Paramètres : Israël, fuseau Israël, ILS,
1–10 personnes, génération de prospects et compréhension du trafic. Les quatre
partages optionnels ont été désélectionnés à la création. Mesures améliorées
désactivées dans le flux ; `generate_lead` déclaré événement clé, sans valeur
monétaire arbitraire. Voir README et `israel-growth/measurement.md` pour le
contrat de consentement, les chemins et catégories autorisés.

La création ne prouve pas que le tag est en production. Le lot doit passer la
validation Landing, une PR vers develop et la vérification de son artefact,
puis la promotion autorisée de cet artefact exact. Les témoignages restent
reportés par le propriétaire et le profil Google reste en attente de validation.
