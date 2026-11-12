# Croissance Google et IA en Israël

Travail du 1er novembre 2026 depuis Landing develop
`12441cd4e90c4000a683330255f05be609584604`, après la publication du comparatif
dans la [PR 144](https://github.com/Foody-isr/landing/pull/144).
Branche locale : `feat/israel-search-growth-20261101`.

## Candidat réalisé

- Parcours Restaurant, Cuisine et Commandes en hébreu, français et anglais,
  reliés aux procédures existantes et aux tarifs approuvés.
- Guide `/{he,fr,en}/guides/restaurant-pos-israel` : choix, démo, périmètres
  natifs/tiers et budget de trois appareils. Exemple depuis les tarifs partagés :
  890 + 99 = 989 ILS/mois ; 12 × 989 + 1 490 = 13 358 ILS avec installation
  standard la première année, hors TVA, matériel, formation et autres frais.
- Identité descriptive Foody POS, liens internes, sitemap, données Article et
  WebSite. Marque et URL existantes conservées. Aucun résultat enrichi garanti.
- Quatre captures réelles Admin avec données de test, conservées sans modification
  des pixels. Langues et version explicites ; voir [provenance](product-evidence.md).
- Événement Meta Lead et data layer après réception confirmée du formulaire,
  sans coordonnées du prospect dans les paramètres. Voir [mesure](measurement.md).
- Audit reproductible `npm run audit:discovery -- --output <file.json>`.
  Le relevé public de 18 pages répond 200, sans noindex observé. Ce constat ne
  prouve ni indexation Google/Bing ni classement ni accès des vrais robots.

## Opérations externes et accès

| Chantier | État constaté | Action restante |
|---|---|---|
| Search Console | Pas de propriété Foody dans le compte ouvert. Préfixe `https://foody-pos.co.il/` préparé, fichier HTML téléchargé et ajouté au candidat local. | Publication autorisée du fichier, puis accord explicite pour valider la propriété sur ce compte. |
| Indexation | HTTP et métadonnées vérifiés, statistiques Google non accessibles. | Soumettre `https://foody-pos.co.il/sitemap.xml`, inspecter accueil HE, Restaurant, Cuisine, Commandes et comparatif HE, puis les traductions. |
| Bing | Session déconnectée, aucun site/chiffre consulté. | Connexion du propriétaire ; examiner les nouvelles permissions OAuth avant accord. |
| Google Business Profile | Pas de fiche Foody dans le compte ouvert ; aucune créée. | Interventions physiques confirmées par le propriétaire ; téléphone fourni. Confirmer zones, horaires et éventuelle fiche sous un autre compte. |
| Fiches externes | Pages et canaux relus, textes préparés. | Autoriser destinataires/messages, envoyer depuis Foody, puis vérifier la correction. |
| Témoignages | Le propriétaire les demandera plus tard à 2–3 clients. | Texte, faits vérifiables et accord avant publication. |

Dans Google Business Profile, le nom Foody POS et la catégorie Entreprise de
logiciels sont préremplis. Google indique que Suivant accepte ses conditions ;
ce bouton n’a pas été cliqué, dans l’attente d’un accord à cette étape.

Aucun nouveau commit, push, PR, envoi externe, déploiement ou changement DNS
n’est effectué par ce suivi sans l’autorisation requise. Les paiements et données
restaurants ne changent pas. Le candidat est local, pas publié.

## Requêtes candidates, volumes non mesurés

| Intentions en hébreu | Page existante à renforcer |
|---|---|
| קופה למסעדה · קופה למסעדות · קופה לאייפד · טאבלט למלצרים | `/he/sectors/food-beverage/restaurants` |
| ניהול מלאי למסעדות · חישוב פוד קוסט · תוכנה לניהול מטבח | `/he/solutions/kitchen` |
| מערכת הזמנות למסעדה · הזמנות אונליין למסעדות | `/he/solutions/online-ordering` |
| איך לבחור קופה למסעדה | `/he/guides/restaurant-pos-israel` |

Après validation Search Console : filtrer Israël, séparer marque/hors marque,
examiner requêtes, pages, appareils, impressions, clics et CTR. Renforcer les
pages existantes sans multiplier les variantes par mot-clé ou ville. Examiner
Core Web Vitals lorsque les données de terrain sont disponibles.

## Protocole LLM

Utiliser `../visibility/prompts.json` dans de nouvelles conversations, consigner
langue, moteur/modèle, personnalisation, recherche web et essai. Séparer mention
spontanée, rang explicite et citation officielle. Les six réponses du 30 octobre
restent exploratoires ; elles ne prouvent pas une évolution après publication.
Tout nouveau pilote est conservé séparément, sans résultat simulé. La campagne
complète de 540 réponses n’est pas annoncée comme exécutée.

Comparaison proposée après publication : J0, J+14, J+30, mêmes conditions. Aucun
suivi récurrent ni coût API n’est créé par ce protocole.

## Présence locale et corrections

Le nom Foody est aussi utilisé par un [site culinaire israélien](https://shop.foody.co.il/).
Utiliser un descriptif cohérent Foody POS aide à distinguer le logiciel ; aucune
confusion précise ni position Google en Israël n’est déduite de ce constat.

Description HE prête : Foody POS היא מערכת קופה ב־iPad וב־Android, הזמנות
אונליין וניהול מטבח למסעדות ולעסקים בישראל. ממשקי הקופה והמשרד האחורי
זמינים בעברית, בצרפתית ובאנגלית. Foody Kitchen מחבר מתכונים, מלאי, פוד
קוסט, ספקים והכנות, וכולל את Foody Companion.

Le propriétaire confirme le 1er novembre que Foody intervient physiquement chez
les clients. Numéro public fourni : 053 708 1799, normalisé +972 53 708 1799
(E.164 : +972537081799 ; le zéro national ne suit pas +972). Zones réelles
d’intervention et horaires restent à renseigner, sans les inventer.
Le nom doit correspondre à la marque réellement utilisée ; ne pas ajouter de
mots-clés au nom d’établissement ou inventer une adresse d’accueil.

[Brouillons externes existants](../visibility/directory-corrections.md), aucun envoi :

- GeekChamp : anciennes offres/essai encore visibles. Canal officiel :
  https://geekchamp.com/contact/, avec page erronée et tarif public de référence.
- TechYorker : anciens 299/799, quotas/essai incohérents ; certains modules déjà
  actualisés. Canal officiel https://techyorker.com/contact/ : contact@techyorker.com.
- Ces deux sites indiquent Yorker Media comme éditeur : deux fiches ne représentent
  pas deux recommandations indépendantes.
- iTechGuides : accès direct indisponible dans l’outil ; extrait de recherche
  encore ancien. Relire directement avant tout envoi.
- Menuthere : comparatif commercial d’un éditeur de logiciel. Le brouillon propose
  un examen sans demander de rang ou d’avis favorable.

Le [pilote HE](llm-pilot.json) contient deux réponses terminées sans mention de
Foody et un refus exclu. Perplexity cite System Compare ; une
[demande d’examen en hébreu](system-compare-request.md) est prête pour son canal
officiel. Aucun résultat de progression ni absence dans tout son catalogue
n’est déduit de ce relevé.

Prioriser aussi les partenaires matériel/paiement confirmés, installateurs et
clients volontaires. Une recherche ponctuelle n’a pas confirmé de fiche Foody sur
les domaines Verifone/Star ; ce résultat ne réfute pas le statut fourni par le
propriétaire. Identifier l’interlocuteur réel avant d’envoyer une demande adaptée.
Aucune affiliation tierce, citation, adresse, statistique ou disponibilité 24/7
n’est inventée. Ne pas présenter une place achetée comme une recommandation.

## Validation

check:help, test:help, test:measurement, lint, TypeScript, build, contrat d’aide avec
le develop de base et test:marketing. Vérifier FR/HE/EN, RTL/mobile, images et liens.
Tester le formulaire contre une API locale fictive seulement. Le corpus d’aide
et les inventaires des cinq autres services restent identiques au develop de base.

Références : [Google IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[noms de site](https://developers.google.com/search/docs/appearance/site-names),
[Search Console](https://support.google.com/webmasters/answer/7576553?hl=fr),
[éligibilité locale](https://support.google.com/business/answer/13763036?hl=fr).

Résultats locaux : 47 tests d’aide, 5 tests de mesure, lint/TypeScript et build
417 pages réussis ; smoke HTTP sur 53 pages ; 30 observations bureau/mobile
FR/HE/EN sans débordement ni image cassée détectés. Les cinq réponses API et les
champs obligatoires ont été testés avec un serveur local fictif ; le double clic
réussi a produit une seule requête. Aucune indexation ni hausse LLM n’est certifiée.
