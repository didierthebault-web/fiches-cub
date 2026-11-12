# Les essentiels du CUB

Application documentaire du **CUB — Club des utilisateurs des données de la BnF**. Comprendre l’essentiel, approfondir si nécessaire.

Site : https://didierthebault-web.github.io/fiches-cub/  
Dépôt : https://github.com/didierthebault-web/fiches-cub

## Objectifs et contenu

30 fiches officielles, 8 catégories et 3 niveaux. Le corpus initial est conservé intégralement dans `data/fiches.json` : textes, identifiants, catégories, niveaux, relations éditoriales, sources, dates et publication. Il compte réellement **11 Découverte, 16 Pratique et 3 Approfondissement** : les chiffres illustratifs de la demande ne remplacent pas les niveaux fournis.

Recherche plein texte locale, filtres combinables, tri, navigation par catégorie, fiches liées, impression PDF depuis le navigateur, contributions à copier et administration locale. Aucun framework ni bibliothèque réseau, aucun backend, aucun compte, aucun tracker.

## Installation et lancement

Prérequis de développement : Node.js 20 ou plus récent, sans installation npm.

```sh
npm start
```

Ouvrir http://127.0.0.1:8793/. Un serveur HTTP est nécessaire pour charger les JSON ; ne pas ouvrir `index.html` avec `file://`.

## Architecture

* `index.html` : application publique, routes `#/fiche/identifiant` et `#/fiches?...`.
* `admin.html` : administration locale, sans authentification ni accès au dépôt.
* `404.html` : page introuvable GitHub Pages.
* `about.html`, `fiche.html` : points d’entrée complémentaires.
* `js/core.js` : rendu partagé, validation éditoriale, utilitaires sûrs.
* `js/app.js` : accueil, catalogue, recherche, filtres, fiches, pages et contributions.
* `js/admin.js` : édition locale, validation, import, export, aperçu.
* `css/main.css`, `admin.css`, `print.css` : présentation responsive et impression.
* `data/fiches.json` : objet corpus avec métadonnées, catégories, niveaux et tableau `fiches`.
* `data/categories.json` : référentiel des huit catégories, descriptions et icônes.
* `data/tags.json` : vocabulaire contrôlé initial.
* `data/config.json` : termes de neutralité et outils configurables.
* `data/corpus-editorial.md` : document source de relecture, conservé en référence.
* `assets/logo/` : logos officiels récupérés sur lecub.fr.

## Modèle des fiches

Chaque fiche possède `id`, `title`, `category`, `level`, `levels`, `readingTime`, `contentType`, `tags`, `summary`, `sections`, `related`, `sources`, `firstPublished`, `lastChecked`, `status` et `published`.

Les sections conditionnelles sont : `enUnePhrase`, `en2Minutes`, `exempleConcret`, `schema`, `aRetenir` (tableau, trois éléments maximum), `voirConcretement`, `attention`, `approfondir`, `pourAllerPlusLoin`. Les autres sections existantes restent conservées. `sources` contient des objets `{organization,title,url}`. `related` contient des identifiants éditorialement choisis. `tools` accepte des objets `{id,title,description,url}` ou des identifiants de `config.tools`.

Le corpus initial utilise le type `fiche-documentaire`. L’éditeur permet d’introduire d’autres types : notion, standard, protocole, identifiant, outil, méthode. Aucun reclassement éditorial arbitraire des 30 fiches n’est effectué.

`firstPublished: null` est volontairement préservé. La date de vérification est éditoriale et n’est jamais remplacée par la date système.

## Ajouter et modifier une fiche

1. Ouvrir `admin.html`, puis Créer une fiche ou Modifier.
2. Renseigner les métadonnées et les sections pédagogiques. L’identifiant est généré depuis le titre ; une modification ultérieure change le lien public et demande confirmation.
3. Ajouter les sources, les fiches liées et les outils souhaités. Les URL des outils non fournies sont laissées à configurer, jamais inventées.
4. Prévisualiser : le même rendu est utilisé sur le site public. Le bouton Vue mobile limite la largeur de lecture à 390 px.
5. Valider, puis enregistrer. Un brouillon incomplet peut être sauvegardé ; une fiche visible doit réussir les contrôles.
6. Exporter le corpus. L’export peut remplacer directement `data/fiches.json`.

Les états sont Brouillon, À relire, Validée, Publiée, À mettre à jour. La visibilité publique dépend **uniquement de `published === true`**. Le choix Publiée active ce champ ; il peut être ajusté explicitement. Une fiche À mettre à jour peut rester visible.

## Administration et confidentialité

Les données sont enregistrées dans le **localStorage** de l’origine du site, sur cet appareil et ce navigateur : clés `cub-editorial-v1` et `cub-tags-v1`. Aucun stockage distant et aucun secret GitHub. Effacer les données du navigateur efface les brouillons : exporter régulièrement une sauvegarde datée.

L’administration n’est pas une zone sécurisée de publication ; chacun peut y préparer ses propres copies locales. Elle ne peut modifier ni le site public ni le dépôt. Les exports locaux peuvent contenir des brouillons : relire les données avant de les committer. Les fiches non publiées sont exclues de l’interface, mais un JSON déposé publiquement reste téléchargeable ; ne pas y placer de données confidentielles.

L’import remplace la base locale après confirmation, vérifie la structure et refuse des fiches publiées invalides. Le bouton Charger la base publique recharge le corpus chargé au démarrage ; recharger la page avant cette action pour récupérer un déploiement plus récent.

Le vocabulaire se gère dans le tableau de bord. Exporter aussi `tags.json` si celui-ci change. Les termes de neutralité peuvent être configurés et exportés dans `config.json` ; une détection produit une alerte sans bloquer automatiquement une sauvegarde.

## Workflow éditorial et mises à jour

```text
Administration locale
      ↓
Export fiches.json (et tags/config si modifiés)
      ↓
Remplacement dans data/ et commit dans le dépôt
      ↓
GitHub Pages
```

Les propositions et corrections génèrent uniquement un texte copiable. La correction reprend titre, identifiant et URL. Aucun formulaire ne prétend envoyer de message.

## GitHub Pages

Hébergement statique depuis la branche `main`, dossier racine `/`. Le fichier `.nojekyll` désactive Jekyll. Dans Settings → Pages : Deploy from a branch → main → / (root). Aucun build nécessaire.

Les routes par hash assurent l’ouverture directe des fiches et fonctionnent sous `/fiches-cub/`. Modifier un identifiant casse les anciens liens externes ; éviter de le faire après publication. Les relations internes sont adaptées par l’éditeur lors d’un changement d’identifiant. La suppression confirmée retire les liens entrants.

## Validation

```sh
npm test
node tests/content.cjs "chemin/vers/le/corpus-original.json"
```

Le deuxième contrôle compare intégralement le JSON initial. Pour les tests navigateur, installer Playwright dans l’environnement de test et définir `CUB_PLAYWRIGHT` vers son module, démarrer le serveur puis lancer `node tests/browser.cjs`. Pour la production, définir `CUB_BASE=https://didierthebault-web.github.io/fiches-cub/`.

Les tests couvrent le corpus, les liens internes, la neutralité, la recherche sans accents/casse, les filtres, le tri, les routes, les contributions, l’impression, les écrans mobile/desktop, l’édition locale, la persistance, la prévisualisation, l’import/export et les erreurs JavaScript. Les captures et PDF de test sont générés localement et exclus du dépôt.

## Accessibilité et impression

HTML sémantique, langue française, lien d’évitement, focus clavier visible, champs étiquetés, boutons natifs, statut de recherche annoncé, niveaux en texte et symboles, dialogue natif avec fermeture Échap et liens externes explicites. Contrastes foncés sur fonds clairs. La feuille d’impression masque navigation et actions, conserve titre, logo, texte, sources, dates et licence. Aucune certification RGAA n’est revendiquée : un audit humain reste nécessaire.

## Licence et limites

Contenus : **CC BY 4.0**, sauf mention contraire. Citer le CUB, le titre, le lien, la licence et les adaptations. Les logos et ressources externes conservent leurs droits respectifs. Les textes des sources sont restitués tels que fournis ; les liens sont validés syntaxiquement, leur disponibilité distante n’est pas garantie.

Pas de comptes, favoris, quiz, commentaires, IA, recherche sémantique, API publique, backend ni publication automatique depuis le navigateur. L’édition utilise une mise en forme limitée et sûre pour « En 2 minutes » : paragraphes, **gras**, *italique* et listes. Le HTML actif est exclu. Les métadonnées SEO changent côté client ; les robots qui n’exécutent pas JavaScript ne voient que les métadonnées générales. Le partage des liens par hash reste stable. Les navigateurs modernes sont nécessaires.
