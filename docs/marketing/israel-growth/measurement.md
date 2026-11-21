# Mesure des demandes de démo

La réception métier est HTTP réussi + JSON avec `ok: true`. Clic, validation HTML,
erreur HTTP, JSON invalide, `ok: false` ou timeout ne sont pas des conversions.
Le garde de soumission concurrente est conservé. Une nouvelle demande confirmée
distincte peut produire un nouvel événement.

En production : Meta `trackSingle` / Pixel `1059276727609296` / événement `Lead`,
et `dataLayer` avec `event: foody_demo_submitted`. Paramètres fermés : `language`,
`acquisition_source`, `acquisition_channel`, `landing_language`.

Aucune réponse du formulaire, nom, entreprise, e-mail, téléphone, URL complète,
texte UTM ou valeur de click ID n’est ajoutée à ces paramètres. Le Pixel existant
conserve ses propres métadonnées navigateur/URL : cela n’implique pas une absence
totale de données techniques chez Meta. Pas d’Advanced Matching ajouté.

La première attribution du tab est conservée dans `foody-acquisition-v1` en
sessionStorage, avec les seules catégories. Les navigations et changements de
langue la conservent. En cas de stockage bloqué, elle reste en mémoire sur la page.
Les UTM reconnus et domaines de referrer deviennent des catégories ; les valeurs
arbitraires ne sont pas stockées. `gclid`/`msclkid` sont des drapeaux de canal payé,
sans conserver leur valeur. Referrer absent peut masquer une visite IA/organique :
direct n’est pas une attribution certaine.

GA4 a été créé avec l’accord explicite du propriétaire le 1er novembre 2026 :
compte 414297109, propriété 561799404, flux 16247446109, mesure publique
`G-31GLDB1C55`. Le lot suivant ajoute une intégration distincte, sur consentement
explicite Google et uniquement sur le domaine public en build de production.
Le refus ne charge pas la bibliothèque Google ; le retrait désactive la mesure
et efface les cookies de cette propriété. Les mesures améliorées sont désactivées.
`generate_lead` est déclaré événement clé sans valeur monétaire arbitraire.
Les pages sont envoyées manuellement avec une URL sans paramètres ni fragments,
et une liste fermée de chemins. Les guides sont regroupés au niveau `/help`.
Les referrers sont réduits à des racines reconnues.

La preuve de création n’est pas une preuve de publication ou de collecte :
contrôler le déploiement et une visite consentante après publication. Les erreurs
analytiques ne peuvent pas invalider une réception confirmée. Ce suivi reste
indicatif et n’est pas un journal serveur des prospects.

`npm run test:analytics` vérifie sources Israël/IA/payantes, domaines trompeurs,
UTM arbitraires/prototypes, champs de stockage inattendus, exceptions analytiques
et absence d’émission en développement. Les parcours de formulaire sont vérifiés
avec une API locale fictive ; aucun prospect n’est envoyé en production.
