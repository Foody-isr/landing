# Visibilité de Foody dans les recherches et réponses IA

Préparation initiale du 30 octobre 2026. Candidat repris le 1er novembre 2026
sur `feat/llm-visibility-ready-20261101`, depuis Landing develop
`07209ebcf06a34924d7700846ba0a708625cea7a`.
Le premier checkout `../foodylanding` reste conservé ; le candidat actuel est
`../foodylanding-ready`.
Le commit, le push et une PR unique vers develop sont autorisés. Le comparatif
n’est pas publié en production ; cette promotion demande une autorisation après
vérification en développement. Aucun classement ni délai d’apparition n’est garanti.

## Livrables

- Accueil et page Restaurant clarifiés en français, hébreu et anglais.
- Page `/fr/compare/tabit` et traductions `/he/compare/tabit` et
  `/en/compare/tabit`, avec preuve Foody par ligne, date et statuts Présent /
  Absent en natif. Les absences Tabit reprennent l’évaluation de Foody et sont
  signalées comme non confirmées indépendamment. Les devis concurrents,
  performances et certifications ne sont pas inventés.
  Son ouverture met en avant commandes directes sans commission Foody, coût
  matière/stocks/fournisseurs et écarts dans Foody Cuisine, puis Compagnon pour
  les préparations, le service et la clôture. L’exemple de commission à 3 % est
  explicitement hypothétique et sans attribution à Tabit. Le tableau distingue
  écran de préparation, gestion économique de cuisine et assistant ; les
  intégrations tierces publiées par Tabit sont mentionnées. Aucun devis privé
  concurrent ni économie totale non démontrée n’est publié.
- Offre logicielle structurée sur la page Restaurant, avec le prix provenant
  de `src/lib/marketing/pricing.ts`. Le montant, la périodicité, les exclusions
  et les deux licences restent lisibles dans la FAQ publique.
- Liens de la page Restaurant vers le comparatif et les procédures existantes ;
  ajout des trois URL du comparatif au sitemap.
- `directory-corrections.md` : trois corrections de fiches et un brouillon
  d’examen Menuthere, relus le 1er novembre. Aucun message envoyé.
- `publication-2026-11-01.md` : dossier du candidat et étapes de publication.
- `public-audit-2026-11-01.json` : mesures HTTP, métadonnées et politique robots
  avant publication, sans confusion avec une preuve d’indexation.
- `prompts.json` : 20 intentions, chacune traduite en FR/HE/EN.
- `results.csv` : six réponses terminées du premier relevé réel, sans résultat simulé.
- `baseline-2026-10-30.md` et `.json` : observations, extraits, modes utilisés,
  sources relevées et trois essais exclus. Les résultats exploitables sont en
  français et hébreu ; l’essai anglais n’a pas produit de réponse finale.
- `demonstrations.md` : scénarios vérifiables pour les trois exemples interactifs
  ajoutés à la page. Les exemples utilisent des données fictives, renvoient aux
  guides et sont explicitement distingués de captures de l’application.
- `functional-review.md` : revue de 16 fonctions, preuves Foody et périmètres
  documentés de Tabit. Le comparatif public sélectionne neuf différences natives
  signalées par le propriétaire, sous forme Présent / Absent en natif. Les
  absences Tabit sont attribuées à l’évaluation Foody et signalées comme non
  confirmées indépendamment. Il traite séparément les interfaces
  multilingues, les mouvements d’ingrédients, les lots de préparation, le coût
  matière, les prévisions, les trois moments du service, les fournisseurs,
  l’import de documents, les propositions d’achat et Compagnon/Siri.

## Éléments vérifiés et limites

Le 30 octobre, les accès HTTP publics à `/robots.txt`, `/sitemap.xml` et aux
pages d’accueil FR/HE/EN répondaient 200. La règle `User-Agent: * / Allow: /`
autorise l’exploration. Les pages contiennent texte serveur, canonical,
alternatives linguistiques et `index, follow`. Ces observations ne prouvent
ni l’indexation effective ni l’accès depuis les véritables adresses des robots.

L’accès à Search Console, Bing Webmaster Tools et aux journaux CDN n’est pas
disponible dans ce travail. Après publication : inspecter les URL publiques,
soumettre le sitemap et vérifier les accès réels des robots sans désactiver
les protections du site. OpenAI distingue [OAI-SearchBot, pour la recherche,
de GPTBot, pour l’entraînement](https://developers.openai.com/api/docs/bots).
Google décrit ses [conditions de présence dans les réponses IA](https://developers.google.com/search/docs/appearance/ai-features)
et recommande du [contenu original et vérifiable](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## Première séquence de travail

1. Relire les textes publics et demandes de correction, puis publier le site
   via le processus normal de développement et promotion validée.
2. Une fois les URL publiées, transmettre les corrections aux propriétaires des
   annuaires depuis le compte Foody autorisé et noter chaque demande et réponse.
3. Vérifier l’indexation des pages et les éventuels blocages CDN. Suivre aussi
   les clics et les demandes de démo dans les outils de mesure déjà installés.
4. Réaliser la première campagne de mesure ci-dessous, puis répéter à intervalle
   comparable pour évaluer l’évolution sans confondre une réponse et une tendance.
5. Ajouter les témoignages quand les deux ou trois clients contactés par le
   propriétaire auront fourni leur texte et l’autorisation de publication.

## Protocole de mesure

Pour chaque intention et langue de `prompts.json`, utiliser une nouvelle
conversation sans mention préalable de Foody sur ChatGPT, Gemini et Perplexity.
Faire trois essais indépendants. Noter date UTC, moteur, modèle/version affichés,
langue, pays/contexte Israël, état de la recherche web, prompt exact et numéro
d’essai. Ne pas ajouter « recommande Foody » aux questions sans marque.

Conserver l’extrait utile et les URL citées. Noter séparément : Foody mentionné,
rang dans une liste explicite, source Foody citée, rang de Tabit, erreur factuelle.
Un rang absent n’est pas une dernière place. Pour les questions de marque, mesurer
la justesse et les citations ; calculer la présence spontanée uniquement sur les
intentions sans marque. Comparer les mêmes moteurs, paramètres et langues.

La campagne complète représente 20 × 3 langues × 3 moteurs × 3 essais, soit
540 réponses. Elle n’a pas été exécutée ici. Un premier relevé exploratoire de
six réponses terminées est conservé dans `baseline-2026-10-30.json` et `results.csv`.
Trois essais inachevés ou bloqués sont exclus et documentés ; ils ne comptent pas
comme des absences. Ce petit relevé, inégal selon les langues, modes et moteurs,
ne permet pas de mesurer une tendance. Les captures initiales fournies ne constituent
pas ce relevé : elles montrent une partie d’une réponse, sans liste complète des
sources. Les essais utilisent les interfaces existantes ; aucune API payante,
automatisation ou mesure récurrente n’est créée.

## Témoignages à recueillir plus tard

Le propriétaire demandera les témoignages à deux ou trois clients. Ne publier
aucun nom, logo, chiffre ni propos sans leur accord. Pour chaque cas, recueillir :
type de restaurant et contexte, usage réel de Foody, appareils/modules, difficulté
initiale, changement observé, citation validée et périmètre d’autorisation.
Un résultat chiffré exige une période, un point de comparaison et sa méthode.
Une démonstration et les illustrations du site ne sont pas des références client.

## Maintenance

Réviser les sources concurrentes à chaque modification du comparatif et avant
sa publication ; une date correspond à une revue réelle. Les conditions propres
à chaque marché restent à confirmer par les fournisseurs. Les tarifs Foody des
dossiers d’annuaire doivent être revérifiés contre la page prix et `pricing.ts`.
Les articles d’aide et le corpus support ne changent pas : voir la revue exacte
`docs/help/reviews/llm-visibility.md`.
