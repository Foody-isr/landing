# Trois démonstrations Foody

Préparées le 30 octobre 2026 pour le comparatif, avec le corpus d’aide public
actuel. La page propose trois exemples interactifs en FR/HE/EN, explicitement
identifiés comme illustrations avec données fictives. Ils ne sont ni des captures
de l’application, ni des témoignages, ni une vérification des absences Tabit.

## Interfaces multilingues

But : montrer que la langue de travail concerne la caisse et le back-office,
au-delà du menu client.

L’exemple public change les libellés d’administration et de caisse entre les
trois langues ; le sens de lecture de l’exemple suit la langue choisie. Il ne
modifie pas la langue de la page ou les préférences d’un compte.

Pour une prise de vue produit : montrer le même restaurant de démonstration,
les mêmes données synthétiques et les deux interfaces dans les trois langues.
Conserver les titres et contrôles utiles à l’identification des écrans. Vérifier
la version et les traductions visibles avant de monter une séquence. Ne pas
utiliser de client réel, coordonnées, chiffre d’affaires ou identifiant de compte.

Preuves de disponibilité : FAQ POS et ressources de langue Admin/POS gelées,
référencées dans `functional-review.md`. L’illustration ne remplace pas ces preuves.

## De la vente au stock et au coût matière

But : expliquer le lien entre recette configurée, consommation et coût du plat.

L’exemple public part de 10 kg et consomme 200 g par plat. Une vente donne 9,8 kg
restants, cinq ventes 9 kg, et cinquante ventes 0 kg ; le bouton est alors désactivé.
Réinitialiser ne change que cet exemple. Le coût illustratif reste distinct :
11,20 ₪ HT ÷ 40 ₪ HT = 28 %, sans présenter ce taux comme un bénéfice net.

Pour une prise de vue produit : préparer une recette, des unités et prix de stock
cohérents dans un environnement de démonstration. Montrer les consommations selon
les étapes réellement configurées, puis le calcul du coût matière. Montrer
séparément un comptage physique et l’écart attendu/compté. Une vente POS déjà
décomptée ne doit pas être déduite une seconde fois à la clôture. Un ingrédient
non rapproché ou sans coût n’est pas un zéro fiable.

Procédures à vérifier avant capture :

- `/{lang}/help/kitchen/daily-operations`
- `/{lang}/help/kitchen/food-cost`
- `/{lang}/help/menu/ingredients-and-portions`

## Compagnon : les trois moments du service

But : montrer une continuité entre préparation, suivi et bilan, avec l’illustration
Compagnon existante. Les trois boutons changent les tâches fictives de la journée.

Pour une prise de vue produit : montrer la journée courante d’un restaurant de
démonstration, les préparations et livraisons à vérifier avant service, les besoins
pendant service, puis le bilan attendu/compté et les écarts. Les objectifs pendant
service restent une simulation locale ; consulter une prévision ne produit pas
un lot. Une prévision est une estimation, une proposition d’achat un brouillon
à contrôler puis envoyer manuellement. Ne pas envoyer de demande à un fournisseur.
Siri exige un iPad compatible et une activation ; aucun enregistrement vocal n’est
nécessaire à cette première démonstration.

Procédure : `/{lang}/help/kitchen/daily-operations`. Périmètre commercial : module
Kitchen/Cuisine seul ou offre Restaurant & Kitchen/Cuisine, comme indiqué sur la
page et les tarifs actuels.

## Publication des prises de vue

Avant d’ajouter un média réel, noter sa version, sa langue, le scénario exécuté
et les données synthétiques utilisées. Écarter les captures dépassées. Une
démonstration Foody prouve ce que Foody fait ; elle ne confirme pas ce qu’un
concurrent ne fait pas. Les témoignages clients restent différés par le propriétaire.
