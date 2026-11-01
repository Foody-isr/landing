# Validation locale du 1er novembre 2026

Branche : `feat/llm-visibility-ready-20261101`, basée sur Landing develop
`07209ebcf06a34924d7700846ba0a708625cea7a`.
État capturé lors des contrôles ci-dessous : changements non commités, sans
publication. Le commit, le push et la PR vers develop ont ensuite été autorisés.
Le checkout initial du 30 octobre reste conservé sans modification.

Contrôles réussis :

- `npm run check:help` : 106 fonctionnalités, 291 traductions publiques validées.
- `npm run test:help` : 47 tests réussis.
- `npm run lint` : aucune erreur ni avertissement ESLint.
- `npx tsc --noEmit` : réussi.
- `npm run build` : 414 pages statiques générées, dont les trois comparatifs.
- `node scripts/check-help-contract.mjs --base 07209ebcf06a34924d7700846ba0a708625cea7a` : sources,
  inventaire et revue exacte cohérents ; autres services conservés à l’identique.
- `MARKETING_BASE_URL=http://127.0.0.1:3108 npm run test:marketing` : 50 pages,
  canonical, hreflang, RTL, H1, liens, données structurées, prix visible,
  sitemap, sécurité, redirections et cartes de partage vérifiés.
- La nouvelle étape CI a été exécutée telle qu’écrite dans `help.yml` : démarrage
  du serveur sur le build existant, disponibilité HTTP, contrôle des 50 pages et
  arrêt du serveur. Aucun formulaire soumis ni requête métier.
- Navigateur Chromium : pages Restaurant et comparatif en FR/HE/EN à 1440 px
  et 375 px, soit 12 contrôles ; aucun débordement du document ni erreur de
  fonctionnement/hydratation. Sur mobile, toutes les cellules des deux
  fournisseurs tiennent dans la largeur. Les en-têtes de tableau restent
  accessibles. Les comparatifs FR/HE restent lisibles sans JavaScript.
- Revue visuelle des captures du comparatif et capture de la page Restaurant.
  Les requêtes externes sont bloquées pendant les tests navigateur, dont Meta.
- Articles publics, release et corpus support identiques au develop actuel ;
  manifeste régénéré depuis ce corpus. Les inventaires et surfaces des cinq
  autres services sont conservés exactement depuis ce même socle.
- Kit de mesure : 20 identifiants uniques × 3 langues, dont 15 intentions sans
  marque. Premier relevé réel : six réponses terminées, avec questions, extraits,
  modes et citations dans le JSON et le CSV ; trois essais exclus. La campagne
  complète de 540 réponses n’a pas été exécutée et aucun résultat n’est simulé.
- `git diff --check` : réussi.
- Audit public du 1er novembre : treize lectures HTTP GET uniquement, conservées
  dans `public-audit-2026-11-01.json`. Pages existantes accessibles, trois
  comparatifs encore 404 et absents du sitemap servi, politique robots autorisant
  leurs chemins. Ce contrôle n’est ni une inspection d’indexation ni un test des
  IP réelles des robots.

Suivi du format demandé : la page publique affiche neuf fonctions sous le titre
« Fonctionnalités natives », au format Foody Présent / Tabit Absent. Les lignes françaises visent le
back-office et le POS en français, sans déclarer tous les produits Tabit
monolingues. Les absences reprennent l’évaluation du propriétaire et une note
visible précise qu’elles ne sont pas confirmées indépendamment, avec exclusion
des logiciels tiers. La note est liée au tableau pour les lecteurs d’écran.

Le tableau compact place les liens « Détails » avec les fonctionnalités et
réserve les deux colonnes de statut aux mentions courtes, centrées et sur une
ligne. Les descriptions sont simplifiées dans les trois langues. Les lignes
restent sous 110 px à 1440 px de largeur ; les deux fournisseurs sont côte à côte
sur mobile. Une seule note sous le tableau précise le périmètre natif et
l’attribution de l’évaluation, sans nouvelle affirmation sur Tabit.

Les trois exemples interactifs passent les contrôles navigateur dans chaque
langue et largeur : passage de l’exemple au sens hébreu puis anglais, cinq ventes
de 200 g donnant 9 kg restants depuis 10 kg, réinitialisation, limite à zéro et
trois contenus distincts du Compagnon. Le scénario de cinquante ventes vérifie
la désactivation à stock nul sur ordinateur. Aucun exemple ne déclenche d’appel
métier ; les requêtes externes restent bloquées pendant les tests. Le HTML
contient les trois parcours et leur mention de données fictives, également sans
JavaScript. Les exemples ne sont pas présentés comme des captures réelles.

Les 47 tests d’aide, lint, TypeScript, build, contrat et contrôle des 50 pages
marketing passent. Les tests vérifient neuf statuts Présent, neuf statuts Absent,
la note d’attribution, les neuf preuves Foody et leurs liens, ainsi que le
périmètre tarifaire Cuisine. Les 12 vérifications navigateur et les deux parcours
sans JavaScript passent avec neuf lignes. Les guides et le corpus restent
inchangés. Aucun devis privé ni confirmation indépendante fictive n’est publié.

Les tests ne prouvent pas l’indexation, les accès depuis les IP réelles des robots
ou une amélioration du classement. La vérification Search Console/Bing/CDN doit
suivre la publication autorisée. Les demandes aux annuaires restent des brouillons.
Les témoignages sont différés selon la demande du propriétaire.

Les captures et le script navigateur de cette passe se trouvent à côté du worktree,
dans `../evidence-2026-11-01/`. Les preuves du 30 octobre restent dans `../evidence/`.
L’aperçu HTTP local utilise le port 3108 et sert `foodylanding-ready` ; il n’est pas un déploiement
de développement ou de production. Ne pas lancer d’autre build dans ce worktree
pendant qu’un serveur y sert les fichiers `.next`.
