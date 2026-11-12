# Vérification du corpus enrichi — version 1.1

Les tests de contenu contrôlent désormais l’enrichissement des 30 fiches et la conservation des métadonnées stables du corpus initial : identifiants, titres, catégories, niveaux principaux, dates et relations. Les textes ne sont plus comparés à l’identique puisque leur développement est demandé.

Chaque fiche comporte les sections pédagogiques attendues, un schéma, une entrée courte, au maximum trois idées à retenir et une durée de lecture complète. La neutralité et la validité syntaxique des sources sont contrôlées.

`tests/enriched.cjs` parcourt les 30 fiches sur grand et petit écran, vérifie les sommaires sans changement de route, les tableaux, les schémas, les blocs d’approfondissement, l’impression et l’édition de la nouvelle section. Le rendu limité Markdown est testé avec du texte contenant du HTML pour vérifier son échappement.

Les tests de parcours existants restent applicables : recherche, filtres, tri, fiches, contributions et administration locale. Les captures du tableau des identifiants et du rendu d’impression ont été inspectées. Aucune certification d’accessibilité ni validation bibliographique institutionnelle n’est revendiquée par ces tests techniques.

## Historique de validation de la V1.0

Vérifiée le 12 novembre 2026 sur https://didierthebault-web.github.io/fiches-cub/.

Les tests automatisés locaux puis en production ont réussi :

- Corpus JSON public identique au corpus original fourni : 30 fiches, 8 catégories, 11 Découverte, 16 Pratique, 3 Approfondissement.
- Textes, sources, relations éditoriales et dates conservés ; aucune détection de terme SIGB dans les fiches initiales.
- Accueil, catégories, recherche instantanée sans accents ni distinction de casse, filtres combinés, réinitialisation et tri alphabétique.
- Ouverture directe des 30 URL par hash ; titre de page spécifique, sources visibles et totalité des liens entre fiches.
- Page 404 réelle renvoyée avec code HTTP 404.
- Contributions et corrections : génération de texte avec contexte, sans envoi simulé.
- Affichage à 1440 px et 390 px, sans débordement horizontal des pages testées.
- Impression : navigation et actions masquées ; sources et contenus présents ; PDF de contrôle produit localement.
- Administration : création, modification, duplication, suppression confirmée, persistance locale, import et export JSON.
- Prévisualisation commune au rendu public, large et mobile ; gras, listes et outils associés fonctionnels.
- Contrôles de publication : lien JavaScript refusé ; alerte de neutralité affichée ; brouillon enregistrable et exclu du catalogue public.
- Aucune erreur JavaScript relevée pendant ces parcours.

Les captures desktop/mobile ont été inspectées dans l’environnement de développement. Le PDF de contrôle a été généré par le navigateur avec la feuille d’impression. Les fichiers de contrôle sont générés dans `tests/` et exclus du dépôt.

Limites : pas d’audit RGAA certifié, pas de vérification exhaustive de la disponibilité distante des sources. Les URL des outils non fournies restent à configurer dans l’administration. La stabilité du site repose sur la disponibilité de GitHub Pages.

Commandes de reproduction : `npm test`, `node tests/browser.cjs` (serveur local lancé), puis `node tests/production.cjs`. Voir le README pour les variables d’environnement Playwright et l’URL de test.
