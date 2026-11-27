# Candidat de publication du 1er novembre 2026

Le candidat actuel est dans `../foodylanding-ready`, branche
`feat/llm-visibility-ready-20261101`, depuis le commit develop
`07209ebcf06a34924d7700846ba0a708625cea7a`. Le checkout initial et ses modifications
restent conservés dans `../foodylanding`. Le propriétaire a autorisé le commit,
le push et une PR unique vers develop en poursuivant ce candidat préparé.
La production et les messages externes ne sont pas inclus dans cette autorisation.

## Résultat à relire

L’aperçu utilise `http://127.0.0.1:3108/fr/compare/tabit`, avec les versions
hébraïque et anglaise. Le candidat conserve le tableau compact des neuf différences
natives, les preuves Foody, les trois exemples interactifs avec données fictives
et la distinction des offres Restaurant/Cuisine. Les absences Tabit restent
attribuées à l’évaluation Foody, non confirmées indépendamment. Aucun devis privé
de concurrent, témoignage client inventé ou économie totale garantie n’est publié.

La reprise conserve les derniers guides, leur corpus et tous les inventaires des
autres services exactement depuis le develop actuel. Le contrat source Landing
est actualisé sur ce socle. Le relevé réel du 30 octobre reste historique : six
réponses terminées, trois essais exclus ; il ne constitue pas une amélioration
mesurée ni un résultat de cette version encore locale.

## Audit du site public avant publication

Les treize lectures HTTP du fichier `public-audit-2026-11-01.json` constatent :

- `robots.txt`, sitemap, accueils et pages Restaurant FR/HE/EN, ainsi que POS et
  tarifs français : HTTP 200 ; canoniques attendues sur les pages consultées.
- Les trois URL du comparatif : HTTP 404, absentes du sitemap actuellement servi.
  C’est cohérent avec l’absence de publication de ce candidat.
- La règle robots actuelle permet OAI-SearchBot, Googlebot et bingbot sur ces
  trois chemins. Cette lecture ne teste ni les IP réelles des robots ni le CDN.

OpenAI décrit [OAI-SearchBot comme son robot de recherche](https://developers.openai.com/api/docs/bots),
avec un contrôle distinct de celui de GPTBot. La politique actuelle n’exige pas
de changement pour autoriser ces chemins. L’accès HTTP et les métadonnées ne
prouvent pas l’indexation ; aucune inspection Search Console/Bing n’est revendiquée.

## Dossiers externes préparés

`directory-corrections.md` contient les corrections GeekChamp et TechYorker,
le dossier iTechGuides à revérifier et un nouveau brouillon Menuthere. Les deux
premières fiches contiennent encore des anciennes offres ou montants lors de
la relecture. Menuthere n’inclut pas Foody dans l’article consulté et édite sa
propre solution : le brouillon demande un examen factuel du produit, sans rang
ou avis favorable. Aucun message n’a été envoyé et aucune option payante achetée.

## Passage par Git et développement

Le titre et le corps proposés sont dans `PULL_REQUEST.md`. L’autorisation explicite
porte sur un commit du candidat, son push et une seule PR de cette branche vers
`develop`. Vérifier que le socle n’a pas évolué entre-temps, puis
respecter les contrôles requis et la validation du déploiement de développement.
La CI existante valide les PR ; elle ne définit pas elle-même le déploiement.
La nouvelle étape marketing sert le build déjà produit et vérifie les 50 routes
locales, sans seconde compilation ni appel de formulaire de contact.

La production demande ensuite l’approbation humaine prévue par le workspace et
la promotion de l’artefact de développement vérifié. Ce dossier ne modifie aucun
déclencheur de production. Aucun passage de branche `main` n’est nécessaire à
la préparation de cette PR.

## Vérification après publication autorisée

Vérifier les trois URL publiques et leurs preuves, leurs canoniques/hreflang, les
trois entrées du sitemap et la politique robots/CDN. Inspecter ensuite les URL
dans les outils d’indexation autorisés et noter le résultat réel. Les demandes
externes nécessitent des destinataires et une autorisation d’envoi explicites.
Les témoignages restent différés, conformément à la demande du propriétaire.

Compléter et répéter les mesures comparables du questionnaire après découverte
des pages, en conservant les échecs d’accès séparés. Aucun suivi récurrent ou
appel API payant n’est créé par cette préparation.
