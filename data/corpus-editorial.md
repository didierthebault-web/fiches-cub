# Les essentiels du CUB

## Corpus éditorial enrichi — 30 fiches · version 1.1

Comprendre l’essentiel, approfondir si nécessaire.

Les identifiants, titres et niveaux principaux du corpus initial sont conservés. Les deux exemples détaillés transmis par le CUB servent de références pour la progression pédagogique. Les exemples complémentaires sont didactiques et ne remplacent pas la documentation normative.

---

# 1. Une donnée bibliographique, c’est quoi ?

**Comprendre les données · 4 min (lecture complète)**

**Tags :** Données bibliographiques · Métadonnées · Notice · Catalogue · Description

## En une phrase

Une donnée bibliographique est une information structurée utilisée pour identifier, décrire, retrouver ou relier une ressource documentaire : titre, auteur, date de publication, éditeur, identifiant, langue, sujet, etc.

## ● En 2 minutes

Lorsqu’un catalogue décrit un livre, une revue, une carte, un enregistrement sonore ou une autre ressource, il ne stocke pas seulement une longue description en texte libre.

Il organise l’information en **données distinctes**.

Pour un livre, on pourra par exemple trouver :

```text
Titre        Le Petit Prince
Auteur       Antoine de Saint-Exupéry
Date         1943
Langue       français
Identifiant  à relever dans la notice
Sujet        littérature française
```

Chacune de ces informations constitue une donnée bibliographique.

En les structurant séparément, il devient possible de rechercher tous les documents d’un auteur, de filtrer une recherche par date, de rapprocher plusieurs descriptions ou encore d’échanger les informations entre différents systèmes.

La BnF diffuse ainsi des fichiers de **métadonnées descriptives** contenant des notices bibliographiques et des notices d’autorité. Les notices bibliographiques décrivent notamment les documents signalés dans ses catalogues et dans la Bibliographie nationale française.

Une donnée bibliographique n’existe donc pas isolément : plusieurs données sont regroupées pour constituer une **description structurée de la ressource**.

Cette description est généralement appelée :

> **notice bibliographique**

## Exemple concret

Prenons cette publication :

> *Le Petit Prince* / Antoine de Saint-Exupéry

On pourrait la représenter ainsi :

```text
RESSOURCE
   │
   ├── Titre
   │      └── Le Petit Prince
   │
   ├── Auteur
   │      └── Antoine de Saint-Exupéry
   │
   ├── Langue
   │      └── français
   │
   ├── Date
   │      └── 1943
   │
   └── Identifiants
          └── …
```

Le document reste le même.

Ce qui change, c’est la manière dont les informations qui le décrivent sont **organisées et rendues exploitables**.

Cet exemple situe le texte en 1943 : il ne décrit pas toutes ses éditions. Une réédition, une traduction ou une version numérique possède ses propres données de publication ; aucun ISBN contemporain n’est attribué ici à l’édition de 1943.

## À retenir

1. Une donnée bibliographique décrit un aspect précis d’une ressource documentaire.
2. Plusieurs données organisées ensemble constituent une notice bibliographique.
3. La structuration permet de rechercher, échanger, comparer et réutiliser les informations.

## ●● Voir comment

Une description rédigée ainsi :

> *Le Petit Prince, écrit par Antoine de Saint-Exupéry et publié en 1943.*

est compréhensible par un humain.

Mais une machine peut plus facilement exploiter :

```text
titre = Le Petit Prince
auteur = Antoine de Saint-Exupéry
date = 1943
```

La structuration permet ensuite de poser des questions comme :

```text
Trouver les documents
dont l'auteur =
Antoine de Saint-Exupéry
```

ou :

```text
Trouver les documents
publiés en 1943
```

## Attention à ne pas confondre

### Donnée bibliographique ≠ document

La donnée **décrit** la ressource ; elle n’est pas la ressource elle-même.

### Donnée bibliographique ≠ notice bibliographique

Une donnée correspond à une information particulière.

Une notice rassemble plusieurs données organisées pour décrire une ressource.

### Notice bibliographique ≠ exemplaire

Une notice peut décrire une publication dont plusieurs exemplaires physiques ou numériques sont conservés.

## ●●● Approfondir

Une information n’est réellement exploitable que si l’on sait ce qu’elle signifie.

La valeur :

```text
1943
```

n’est pas suffisante en elle-même.

Elle peut représenter :

- une date de publication ;
- une date de création ;
- une date de reproduction ;
- une date associée à une personne.

Il faut donc associer la valeur à une **structure et à une sémantique**.

Les formats bibliographiques jouent notamment ce rôle.

Dans un format structuré, chaque information est placée dans une zone ou un élément qui précise sa fonction.

C’est ce qui permet à différents systèmes de comprendre et d’échanger les données.

La BnF met par exemple ses notices à disposition dans plusieurs formats structurés et via différents mécanismes de récupération.

## Voir concrètement

Prenez une notice dans un catalogue et essayez d’identifier séparément :

- le titre ;
- l’auteur ou les auteurs ;
- la date de publication ;
- la langue ;
- un identifiant ;
- un sujet.

Vous venez de décomposer une notice en **données bibliographiques**.

Les outils du CUB consacrés à l’exploration des notices permettent de poursuivre cette observation.

## Pour aller plus loin

Comparer une notice affichée dans un catalogue et son export structuré. Les produits bibliographiques de la BnF présentent les différents ensembles de notices ; le portail API et jeux de données décrit leurs voies de récupération. Les liens de référence figurent dans Sources.

## Fiches liées

- Métadonnée ou donnée : quelle différence ?
- Notice bibliographique, notice d’autorité, exemplaire : quelle différence ?
- UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?
- ISBN, ISSN, ARK, ISNI, VIAF : à quoi servent les identifiants ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)

Dernière vérification : 2026-11-12

---

# 2. Notice bibliographique, notice d’autorité, exemplaire : quelle différence ?

**Comprendre les données · 4 min (lecture complète)**

**Tags :** Notice bibliographique · Autorité · Exemplaire

## En une phrase

Une notice bibliographique décrit une ressource, une notice d’autorité identifie une entité, et un exemplaire correspond à une occurrence particulière de cette ressource.

## ● En 2 minutes

Un catalogue décrit plusieurs choses qu’il faut distinguer : **la publication**, les **entités qui lui sont associées** et les **exemplaires détenus**. Ces informations peuvent être reliées, mais elles ne répondent pas à la même question.

La notice bibliographique répond à « quelle ressource est décrite ? ». Elle rassemble titre, mention d’édition, publication, langue, caractéristiques matérielles et identifiants. Elle peut décrire aussi bien une carte qu’un livre, une revue ou un enregistrement sonore.

La notice d’autorité répond à « de quelle entité parle-t-on ? ». Elle permet notamment de distinguer deux personnes de même nom, de rassembler des variantes ou d’identifier une collectivité, une œuvre ou un sujet. Ses informations sont choisies pour l’identification et la gestion des accès.

Les données d’exemplaire répondent à « quel objet particulier est conservé, et où ? ». Une cote, un numéro d’inventaire, une provenance ou un état matériel concernent cet exemplaire. Une adresse d’accès peut aussi caractériser un exemplaire numérique. Séparer ces niveaux évite de confondre une caractéristique commune à une publication et une propriété d’un objet particulier.

## Exemple concret

Exemple fictif : une bibliothèque possède deux exemplaires d’une même édition d’un roman. Le titre et la date de publication sont communs et figurent dans la description bibliographique. Le premier exemplaire porte la cote R 125 et une dédicace ; le second porte la cote R 126 et présente une couverture endommagée.

Les deux exemplaires peuvent être rattachés à la même notice bibliographique. Le nom de la personne responsable du roman peut, lui, pointer vers une notice d’autorité partagée avec les descriptions de ses autres publications.

## Schéma

```text
Autorité de personne ← responsabilité ← Notice bibliographique
                                           ├── Exemplaire 1 : cote R 125
                                           └── Exemplaire 2 : cote R 126
```

## À retenir

1. La notice bibliographique décrit une ressource.
2. La notice d’autorité identifie une entité.
3. L’exemplaire décrit une occurrence particulière.

## ●● Voir comment

### Trois questions pour lire une information

- « Ce renseignement décrit-il la publication ? » : le placer du côté bibliographique.
- « Sert-il à identifier une personne, une œuvre ou une autre entité ? » : examiner les autorités.
- « Est-il propre à l’objet que je tiens en main ou à l’accès local ? » : regarder les données d’exemplaire.

Une dédicace manuscrite observée dans un volume ne doit donc pas être automatiquement attribuée à tous les exemplaires de l’édition.

## Attention à ne pas confondre

Une notice bibliographique n’est pas nécessairement la description d’une œuvre abstraite : elle peut réunir des informations relevant de plusieurs niveaux. Une notice d’autorité n’est pas une biographie exhaustive. Enfin, la localisation et la disponibilité d’un exemplaire ne disent pas, à elles seules, quelle publication il représente.

Le nombre de notices ne correspond donc ni au nombre d’œuvres ni au nombre d’objets conservés.

## ●●● Approfondir

La distinction devient essentielle lorsqu’on échange des données. Importer une description bibliographique ne signifie pas importer les exemplaires détenus par l’établissement d’origine, ni obtenir automatiquement toutes les autorités associées. Il faut examiner ce que le service fournit et comment les liens sont exprimés.

IFLA LRM apporte une autre grille de lecture, avec Œuvre, Expression, Manifestation et Item. Ces entités ne sont pas des synonymes des trois types de notices : une notice existante peut contenir des éléments correspondant à plusieurs entités du modèle. Une migration demande donc une analyse, pas un simple renommage des fichiers.

## Voir concrètement

Choisissez une notice de livre et relevez cinq informations bibliographiques. Ouvrez ensuite un accès auteur, puis les informations de localisation. Classez ce que vous voyez dans trois colonnes : publication, entité, exemplaire. Cherchez enfin si l’autorité et la notice bibliographique possèdent chacune un identifiant distinct.

## Pour aller plus loin

Prolongez la lecture avec IFLA LRM pour distinguer les entités conceptuelles des fichiers de notices. Dans la documentation des produits bibliographiques de la BnF, comparez aussi le périmètre des jeux bibliographiques et des jeux d’autorité : leur récupération répond à des besoins différents.

## Fiches liées

- Une donnée bibliographique, c’est quoi ?
- Qu’est-ce qu’une notice d’autorité ?
- IFLA LRM : pourquoi parler d’Œuvre, Expression, Manifestation et Item ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Transition bibliographique — [Programme Transition bibliographique](https://www.transition-bibliographique.fr/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)

Dernière vérification : 2026-11-12

---

# 3. ISBN, ISSN, ARK, ISNI, VIAF : à quoi servent les identifiants ?

**Identifier · 5 min (lecture complète)**

**Tags :** ISBN · ISSN · ARK · ISNI · VIAF · Identifiants · Autorités

## En une phrase

Un identifiant permet de désigner une ressource ou une entité de manière stable et non ambiguë afin de la retrouver, de la distinguer des autres et de relier des données provenant de différents systèmes.

## ● En 2 minutes

Un titre, un nom ou une description ne suffisent pas toujours pour identifier précisément une ressource.

Plusieurs livres peuvent avoir le même titre. Deux personnes peuvent porter le même nom. Une même personne peut également apparaître sous différentes formes :

> Victor Hugo
> Hugo, Victor
> V. Hugo

Les identifiants fournissent des **points de référence plus stables**. Mais tous n’identifient pas la même chose.

### ISBN

L’**ISBN — International Standard Book Number** — identifie une publication monographique dans une édition et un format déterminés.

Un livre imprimé, une édition de poche et une version numérique peuvent donc recevoir des ISBN différents. Depuis 2007, les ISBN attribués comportent 13 chiffres.

### ISSN

L’**ISSN — International Standard Serial Number** — est un identifiant à huit caractères destiné aux publications en série et, plus largement, aux ressources continues : revues, journaux, collections, publications annuelles ou certaines ressources en ligne.

Un ISSN correspond notamment à un titre sur un support donné.

### ARK

L’**ARK — Archival Resource Key** — est un système d’identification pérenne pouvant s’appliquer à des ressources très diverses : documents numériques, notices, objets physiques ou concepts.

La BnF utilise notamment des ARK pour identifier durablement ses ressources et ses notices.

### ISNI

L’**ISNI — International Standard Name Identifier** — permet d’identifier de manière univoque et à l’échelle internationale des personnes et des organismes impliqués dans la création, la production ou la diffusion de contenus.

### VIAF

**VIAF — Virtual International Authority File** — fonctionne différemment : il rapproche et relie les fichiers d’autorité produits par de nombreuses institutions afin de regrouper les différentes formes utilisées pour désigner une même entité.

## Exemple concret

Imaginons un ouvrage écrit par une autrice.

```text
                    UNE PUBLICATION
                          │
              ┌───────────┼───────────┐
              │           │           │
             ISBN        ARK        Auteur
              │           │           │
              │           │       ┌───┴────┐
              │           │       │        │
          édition /     notice    ISNI     VIAF
           format       ou       │        │
                      ressource   │        │
                                 │        │
                         identité       autorités
                         publique        reliées
```

L'intérêt n'est donc pas de disposer d'**un identifiant universel**, mais d'utiliser l'identifiant adapté à ce que l'on cherche à désigner.

## À retenir

1. Un identifiant répond à la question « de quelle ressource ou de quelle entité parle-t-on précisément ? »
2. ISBN, ISSN, ARK, ISNI et VIAF n'identifient pas les mêmes objets et ne sont donc pas interchangeables.
3. Les identifiants facilitent le rapprochement, l'échange et la mise en relation des données entre catalogues et bases de données.

## ●● Voir comment

| Identifiant | Sert principalement à… | Exemple d'usage |
|---|---|---|
| **ISBN** | Identifier une édition et un format d'une publication monographique | Retrouver ou rapprocher des notices d'un même livre |
| **ISSN** | Identifier une publication en série ou une ressource continue | Identifier précisément une revue |
| **ARK** | Identifier durablement une ressource | Pointer vers une notice ou une ressource numérique |
| **ISNI** | Identifier une identité publique de personne ou d'organisme | Distinguer deux auteurs homonymes |
| **VIAF** | Relier des notices d'autorité issues de différentes institutions | Rapprocher plusieurs formes d'un même nom |

## Attention à ne pas confondre

### ISBN ≠ identifiant du contenu abstrait d'une œuvre

Deux éditions ou deux formats d'un même titre peuvent porter des ISBN différents.

### ISSN ≠ ISBN

L'ISSN identifie une ressource continue ; l'ISBN identifie une publication monographique déterminée. Une publication peut, dans certains cas, porter les deux identifiants.

### ARK et URL d’accès

Un ARK est un **identifiant pérenne**, souvent exprimé sous forme d’URL. Sa pérennité dépend de la gestion durable de l'association entre cet identifiant et la ressource qu'il désigne.

### ISNI ≠ VIAF

L'ISNI est un identifiant international attribué à une identité publique. VIAF est avant tout un dispositif d'**appariement et de mise en relation de fichiers d'autorité**.

## ●●● Approfondir

Les identifiants prennent toute leur importance lorsqu'ils sont utilisés pour relier plusieurs ensembles de données.

Une notice bibliographique peut ainsi contenir un ISBN permettant de rapprocher des descriptions d'une même publication. Une personne associée à cette publication peut disposer d'un ISNI et être reliée à différentes notices d'autorité regroupées dans VIAF.

On passe alors progressivement d'une logique fondée sur des chaînes de caractères :

```text
Victor Hugo
```

à une logique fondée sur des entités identifiées :

```text
Personne
   │
   ├── identifiant ISNI
   ├── identifiant VIAF
   └── identifiants d'autorité institutionnels
```

Cette capacité à relier des données provenant de sources différentes constitue l'un des fondements de l'interopérabilité et des données liées.

## Voir concrètement

Choisissez une notice bibliographique et cherchez :

- un ISBN ou un ISSN ;
- un identifiant pérenne de la notice ;
- les identifiants associés aux personnes ou collectivités ;
- les liens vers d'autres référentiels.

Puis posez-vous la question :

> **Qu'est-ce que chaque identifiant désigne exactement ?**

Les outils du CUB consacrés aux identifiants et à l'exploration des notices permettent de poursuivre cette observation.

## Pour aller plus loin

Consulter les définitions et règles d’attribution des agences ISBN et ISSN, puis les présentations ARK, ISNI et VIAF. Pour chaque système, noter l’objet identifié, l’organisme responsable et la façon de retrouver ses métadonnées. Les liens officiels figurent dans Sources.

## Fiches liées

- Un ARK, comment ça fonctionne ?
- ISBN : que désigne réellement ce numéro ?
- ISNI et VIAF : comment identifier et relier les personnes ?
- Qu’est-ce qu’une notice d’autorité ?
- URI et données liées : pourquoi utiliser des identifiants ?

## Sources

- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)
- Centre international de l’ISSN — [Qu’est-ce que l’ISSN ?](https://www.issn.org/fr/comprendre-lissn/quest-ce-que-lissn/)
- ARK Alliance — [About ARKs — structure et gestion pérenne](https://arks.org/about/)
- Bibliothèque nationale de France — [ISNI — International Standard Name Identifier](https://www.bnf.fr/fr/isni-international-standard-name-identifier)
- OCLC — [VIAF — Virtual International Authority File](https://www.oclc.org/developer/api/oclc-apis/viaf.en.html)

Dernière vérification : 2026-11-12

---

# 4. Métadonnée ou donnée : quelle différence ?

**Comprendre les données · 4 min (lecture complète)**

**Tags :** Donnée · Métadonnée · Structure

## En une phrase

Une donnée est une information ; une métadonnée est une donnée utilisée pour décrire ou contextualiser une autre ressource.

## ● En 2 minutes

Le mot **donnée** désigne une information enregistrée sous une forme utilisable. Le mot **métadonnée** précise le rôle de cette information : elle sert à décrire, identifier, gérer ou contextualiser une ressource.

Pour une photographie numérique, le sujet photographié appartient au contenu de l’image. Le titre attribué à la photographie, son auteur, ses dimensions en pixels, son format et ses conditions de réutilisation sont des métadonnées. Certaines sont descriptives, d’autres techniques, administratives ou liées aux droits.

La différence ne se situe pas entre une information importante et une information accessoire. Sans date, auteur ou provenance, une ressource peut devenir difficile à retrouver, à interpréter ou à réutiliser correctement.

La distinction dépend aussi du point de vue. Dans une bibliothèque numérique, une notice est un ensemble de métadonnées décrivant un document. Dans une étude sur les pratiques de catalogage, ces notices deviennent elles-mêmes les données analysées. Il faut donc toujours nommer la ressource décrite et le contexte de l’usage.

## Exemple concret

Un service conserve un fichier image nommé « photo-001.tif ». Il lui associe un titre, une date de prise de vue, une personne créatrice, un format et une mention de droits. Ces informations permettent de retrouver et de gérer le fichier sans examiner tous ses pixels.

Si le service analyse les dates de ses photographies pour construire une chronologie, la métadonnée « date de prise de vue » devient une donnée d’entrée du traitement. Son rôle change, pas nécessairement sa valeur.

## Schéma

```text
Ressource : photographie
  ├── Description : titre, personne créatrice, sujet
  ├── Technique : format, dimensions
  └── Gestion : provenance, droits

Les métadonnées sont aussi des données réutilisables.
```

## À retenir

1. Une métadonnée décrit une ressource.
2. Une même information peut changer de rôle selon le contexte.
3. Les métadonnées facilitent recherche et réutilisation.

## ●● Voir comment

### Commencer par « à propos de quoi ? »

Pour chaque information, précisez la ressource à laquelle elle s’applique. « Français » peut indiquer la langue d’un document, celle d’un résumé ou celle de l’interface. « 2024 » peut correspondre à une publication, une numérisation ou une modification de notice.

Une métadonnée exploitable associe donc une valeur, une propriété définie et un contexte. Les noms de colonnes et les définitions du jeu de données sont aussi importants que les cellules.

## Attention à ne pas confondre

Métadonnée ne signifie pas donnée facultative, publique ou librement réutilisable. Une métadonnée peut contenir une information personnelle ou être soumise à des conditions particulières.

Un nom de fichier ne constitue pas, à lui seul, une description complète. De même, une propriété « date » sans définition ne permet pas de savoir quel événement elle décrit.

## ●●● Approfondir

Plusieurs ensembles de métadonnées peuvent décrire la même ressource pour des besoins différents : découverte, conservation, gestion des droits ou analyse scientifique. Ils peuvent diverger sans être nécessairement contradictoires, à condition que leur périmètre soit explicite.

La provenance aide à évaluer une information : qui l’a produite, selon quelle règle, et à quel moment ? Lorsqu’on fusionne des ensembles, conserver cette provenance évite de traiter toutes les valeurs comme également certaines. Une transformation doit aussi préserver les distinctions utiles : la date de numérisation ne doit pas écraser la date de publication.

## Voir concrètement

Prenez un document numérique et sa notice. Repérez deux métadonnées descriptives, une métadonnée technique et une information de gestion. Pour chaque date, cherchez ce qu’elle mesure réellement. Imaginez ensuite une analyse qui réutiliserait ces métadonnées : quelles précisions vous manqueraient pour interpréter les résultats ?

## Pour aller plus loin

Examinez la documentation d’un jeu de données avant ses valeurs : définition des propriétés, provenance, dates et conditions de réutilisation. Dans les offres BnF citées en sources, repérez ce qui décrit une ressource et ce qui décrit la production du jeu de métadonnées lui-même.

## Fiches liées

- Une donnée bibliographique, c’est quoi ?
- Pourquoi structurer les données ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)

Dernière vérification : 2026-11-12

---

# 5. Pourquoi structurer les données ?

**Comprendre les données · 4 min (lecture complète)**

**Tags :** Données structurées · Interopérabilité

## En une phrase

Structurer les données consiste à organiser chaque information selon une règle connue afin qu’elle puisse être comprise et réutilisée automatiquement.

## ● En 2 minutes

Structurer une information consiste à séparer ses composants et à préciser leur fonction. Une phrase comme « Roman de Camille Martin, publié à Lyon en 2021 » est lisible, mais son exploitation automatique demande de reconnaître une responsabilité, un lieu et une date.

Une structure explicite distingue par exemple un titre, une personne responsable, une date de publication et un lieu de publication. La machine peut alors trier les dates, filtrer les langues ou rechercher un auteur dans un champ déterminé, sans deviner le sens de chaque mot.

La structure ne suffit toutefois pas. Il faut des **définitions communes** : une propriété appelée « date » peut avoir plusieurs sens. Il faut également des règles de saisie, un traitement des valeurs multiples et une façon de représenter une information absente ou incertaine.

Les formats fournissent des éléments pour organiser les données ; les règles de description précisent comment renseigner ces éléments. Une bonne structuration rend les échanges et les contrôles possibles, mais ne garantit pas que chaque valeur soit exacte.

## Exemple concret

Dans un exemple fictif, deux descriptions sont rédigées différemment : « Atlas des rivières / Camille Martin, 2021 » et « Camille Martin : Atlas des rivières (2021) ». Leur texte brut diffère, mais leurs composants peuvent correspondre.

En séparant titre, responsabilité et date, on peut comparer ces composants individuellement. On découvre alors éventuellement une différence importante : l’une des descriptions concerne une édition révisée, information qu’un rapprochement fondé seulement sur le titre aurait ignorée.

## Schéma

```text
Description libre
      ↓ analyse et règles explicites
Titre | Responsabilité | Date de publication | Édition
      ↓
Recherche · tri · comparaison · échange
```

## À retenir

1. Structurer signifie séparer et identifier les informations.
2. La donnée structurée est plus facilement exploitable.
3. Les standards permettent une interprétation commune.

## ●● Voir comment

### Définir une colonne avant de la remplir

Écrivez une courte définition pour chaque champ : objet décrit, valeurs attendues, possibilité de répétition et convention pour l’absence d’information. Séparez, par exemple, la date de publication de la date de création de la notice.

Si plusieurs auteurs sont présents, prévoyez une liste ou des occurrences répétées. Une cellule contenant des noms séparés par une ponctuation non documentée devient difficile à interpréter et à exporter sans perte.

## Attention à ne pas confondre

Structuré ne veut pas dire exact. Un ISBN saisi dans le bon champ peut être faux. Une date peut respecter une syntaxe tout en décrivant le mauvais événement.

Évitez aussi de confondre « absence de valeur », « valeur inconnue » et « propriété non applicable » : selon l’usage, ces situations demandent des traitements différents.

## ●●● Approfondir

Un changement de structure nécessite une correspondance entre les éléments sources et cibles. Certains se correspondent directement ; d’autres demandent une transformation ; certains n’ont pas d’équivalent. C’est le principe d’une table de correspondance, ou mapping.

Documentez les choix : concaténation de plusieurs éléments, conversion d’une date, perte d’une précision ou conservation d’une valeur d’origine. Tester l’aller-retour sur quelques notices aide à repérer les pertes, sans garantir à lui seul une conversion parfaite. Une structure utile est celle qui préserve les distinctions nécessaires aux usages visés.

## Voir concrètement

Choisissez trois descriptions rédigées librement et proposez cinq champs pour les représenter. Remplissez-les, puis demandez à une autre personne de refaire l’exercice avec vos définitions. Les divergences indiquent les règles à préciser. Testez enfin une recherche qui était difficile dans les phrases de départ.

## Pour aller plus loin

Consultez la documentation UNIMARC pour voir comment un standard distingue fonctions des zones et composants. Poursuivez avec la fiche sur les syntaxes : une structure documentaire peut être représentée de plusieurs manières, sans que les choix de conversion soient pour autant neutres.

## Fiches liées

- Une donnée bibliographique, c’est quoi ?
- UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- IFLA — [UNIMARC — Formats et mises à jour](https://www.ifla.org/g/unimarc-rg/unimarc-updates/)

Dernière vérification : 2026-11-12

---

# 6. Un ARK, comment ça fonctionne ?

**Identifier · 4 min (lecture complète)**

**Tags :** ARK · Identifiant pérenne · BnF

## En une phrase

Un ARK est un identifiant conçu pour désigner durablement une ressource indépendamment des changements d’emplacement.

## ● En 2 minutes

Un **ARK**, pour Archival Resource Key, permet de nommer une ressource dans un dispositif conçu pour maintenir son identification dans le temps. Il peut désigner une notice, un document numérisé ou un autre objet, selon la politique de l’organisme qui l’attribue.

Dans une adresse de type « https://catalogue.bnf.fr/ark:/12148/… », on peut distinguer le service d’accès, le préfixe ARK, le numéro de l’autorité de nommage et le nom attribué à la ressource. La partie finale représentée ici par des points de suspension n’est pas un identifiant utilisable.

La différence importante est celle entre **nommer** et **localiser**. Une URL de résolution associe l’identifiant à un service qui donne accès à la ressource ou à des informations sur celle-ci. L’organisation peut modifier le stockage interne sans nécessairement changer l’identifiant partagé avec les utilisateurs.

Cette pérennité n’est pas produite par la syntaxe seule : elle repose sur des engagements et une gestion durable. Un identifiant mal recopié, réattribué ou privé de service de résolution ne devient pas fiable simplement parce qu’il commence par « ark: ».

## Exemple concret

Vous consultez une notice dans le catalogue général de la BnF. Son adresse contient un ARK. Vous copiez cette adresse dans une bibliographie pour retrouver la notice ultérieurement.

Si un document numérisé associé possède un autre ARK, les deux identifiants ne sont pas interchangeables : l’un peut désigner la notice du catalogue et l’autre la ressource numérique. Leur proximité documentaire ne signifie pas identité de l’objet désigné.

## Schéma

```text
URL de résolution (exemple de structure)
https://catalogue.bnf.fr/ark:/12148/nom-de-ressource
└ service d’accès ┘└ schéma ┘└ NAAN ┘└ nom attribué ┘

La fin « nom-de-ressource » est un substitut didactique.
```

## À retenir

1. L’ARK identifie durablement.
2. Il peut être intégré dans une URL.
3. La BnF l’utilise pour des notices et ressources.

## ●● Voir comment

### Lire puis vérifier

Relevez l’ARK complet depuis la ressource, sans le reconstituer de mémoire. Identifiez l’organisme responsable, ouvrez le lien et vérifiez ce que la page décrit. Notez séparément l’identifiant de la notice et celui d’une éventuelle numérisation.

Pour un traitement automatique, conservez la valeur d’origine. Ne retirez pas arbitrairement les suffixes : certains peuvent distinguer une partie ou une variante de la ressource.

## Attention à ne pas confondre

Un ARK peut être exprimé dans une URL ; l’opposition « ARK ou URL » est donc trop simplificatrice. Ce qui importe est la fonction d’identification et la politique de résolution.

Un ARK de notice ne donne pas automatiquement un droit d’accès au document. Pérennité de l’identification, disponibilité d’un fichier et conditions de réutilisation sont trois questions distinctes.

## ●●● Approfondir

L’autorité de nommage, repérée par un NAAN, attribue les noms dans son espace. Le service de résolution peut être distinct de cette autorité. Cette séparation permet de penser le maintien d’un identifiant au-delà de l’adresse technique actuelle.

Pour réutiliser des ARK à grande échelle, documentez les objets auxquels ils s’appliquent, les éventuelles redirections et les règles de conservation. Une redirection peut signaler une évolution à examiner, pas nécessairement une erreur. Lors d’une fusion de données, conserver les anciens identifiants et leur provenance facilite la traçabilité et le suivi des liens déjà diffusés.

## Voir concrètement

Ouvrez une notice BnF et une ressource numérique associée, si elle existe. Copiez leurs liens et comparez les ARK. Décrivez en une phrase l’objet désigné par chacun. Pour une citation, choisissez celui qui correspond à votre propos : la description bibliographique, le document numérique ou une partie précise.

## Pour aller plus loin

La présentation de l’ARK Alliance détaille la structure, les services de résolution et la gestion de la pérennité. Complétez votre lecture par la fiche sur les URI : demandez-vous, pour chaque lien utilisé, quel objet est identifié et quelle organisation maintient cette référence.

## Fiches liées

- ISBN, ISSN, ARK, ISNI, VIAF : à quoi servent les identifiants ?
- URI et données liées : pourquoi utiliser des identifiants ?

## Sources

- ARK Alliance — [ARK](https://arks.org/)
- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- ARK Alliance — [About ARKs — structure et gestion pérenne](https://arks.org/about/)

Dernière vérification : 2026-11-12

---

# 7. ISBN : que désigne réellement ce numéro ?

**Identifier · 4 min (lecture complète)**

**Tags :** ISBN · Livre · Édition

## En une phrase

L’ISBN identifie une publication monographique déterminée dans une édition et une forme particulières, pas l’œuvre abstraite.

## ● En 2 minutes

L’**ISBN**, International Standard Book Number, sert à identifier une publication monographique dans une édition et une forme déterminées. Il intervient dans les échanges entre éditeurs, libraires, distributeurs et bibliothèques.

Un même texte peut exister sous différentes formes commerciales ou éditoriales : volume relié, poche, EPUB ou autre édition. Ces produits peuvent recevoir des ISBN distincts. Une nouvelle impression inchangée n’entraîne pas automatiquement un nouvel ISBN ; une nouvelle édition ou une autre forme du produit peut, en revanche, en nécessiter un.

Depuis 2007, les ISBN nouvellement attribués comportent treize chiffres. Les ISBN à dix caractères restent présents dans les documents et les catalogues anciens. Le dernier caractère est une clé de contrôle calculée à partir des précédents.

Un ISBN constitue donc un indice précieux pour identifier une publication ou rapprocher des descriptions. Il ne décrit pourtant ni l’ensemble des éditions d’une œuvre ni un exemplaire particulier. Sa présence dans une notice doit toujours être interprétée avec le contexte bibliographique.

## Exemple concret

Exemple fictif : un roman paraît en grand format, puis en poche ; une version numérique est aussi commercialisée. Le contenu peut être proche, mais les trois produits ne doivent pas être assimilés automatiquement à une seule édition.

Deux exemplaires achetés du même produit portent normalement le même ISBN. Leurs numéros d’inventaire locaux sont différents. L’ISBN aide à reconnaître la publication ; le numéro d’inventaire distingue l’objet conservé par la bibliothèque.

## Schéma

```text
Œuvre
  ├── Édition / forme A → ISBN A → plusieurs exemplaires
  ├── Édition / forme B → ISBN B
  └── Édition / forme C → ISBN C

A, B et C sont des désignations didactiques.
```

## À retenir

1. L’ISBN n’identifie pas une œuvre abstraite.
2. Des éditions différentes peuvent avoir des ISBN différents.
3. L’ISBN est un indice fort mais non absolu.

## ●● Voir comment

### Contrôler avant de rapprocher

Relevez l’ISBN et conservez sa forme d’origine. Préparez une version normalisée pour la comparaison, puis vérifiez longueur et clé. Comparez ensuite titre, responsabilité, édition, éditeur, date et support.

Si une notice contient plusieurs ISBN, examinez leurs qualificatifs : l’un peut correspondre à un volume, un ensemble ou une autre présentation. Ne choisissez pas simplement le premier numéro rencontré.

## Attention à ne pas confondre

Un ISBN n’identifie pas l’œuvre abstraite, le texte indépendamment de sa publication, ni l’exemplaire détenu. Un numéro syntaxiquement valide peut être erronément associé à une notice.

Une conversion d’un ISBN-10 en ISBN-13 exige un calcul de clé ; ajouter seulement un préfixe est incorrect. Enfin, tous les documents anciens ou patrimoniaux ne possèdent pas d’ISBN.

## ●●● Approfondir

Dans un algorithme de rapprochement, l’ISBN peut servir à rechercher des candidats, puis d’autres données à confirmer leur correspondance. Les valeurs invalides, annulées ou associées à des formes différentes doivent être distinguées selon le format source.

Lorsqu’une même valeur apparaît dans plusieurs descriptions, deux explications restent possibles : les notices décrivent le même produit, ou l’une comporte une erreur. Une règle de fusion doit prévoir ces exceptions et conserver les données nécessaires à une vérification. L’absence d’ISBN n’interdit pas non plus le rapprochement : elle impose de travailler avec d’autres critères.

## Voir concrètement

Comparez un livre et une autre édition ou forme du même titre. Relevez les ISBN, les dates et les mentions d’édition. Vérifiez ensuite que l’ISBN de chaque notice correspond à l’objet observé. Notez les éléments qu’une recherche sur le seul titre n’aurait pas permis de distinguer.

## Pour aller plus loin

La documentation de l’International ISBN Agency précise le périmètre d’attribution et les différentes formes de publication. Pour un cas d’édition inhabituel, consultez ces règles plutôt que de déduire l’attribution d’un ISBN du seul titre. Poursuivez avec les contrôles d’identifiants et les doublons.

## Fiches liées

- ISBN, ISSN, ARK, ISNI, VIAF : à quoi servent les identifiants ?
- Comment reconnaître un doublon bibliographique ?
- Pourquoi contrôler les identifiants dans un catalogue ?

## Sources

- International ISBN Agency — [ISBN](https://www.isbn-international.org/)
- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)

Dernière vérification : 2026-11-12

---

# 8. ISNI et VIAF : comment identifier et relier les personnes ?

**Identifier · 3 min (lecture complète)**

**Tags :** ISNI · VIAF · Autorités

## En une phrase

ISNI fournit un identifiant international d’identité publique ; VIAF rapproche des notices d’autorité provenant de nombreuses institutions.

## ● En 2 minutes

Un nom ne suffit pas à identifier une personne. Il peut changer, être translittéré, abrégé ou partagé par plusieurs individus. **ISNI** et **VIAF** répondent à cette difficulté, avec des fonctions différentes.

L’ISNI attribue un identifiant international à une identité publique de personne ou d’organisme impliqué dans la création, la production ou la diffusion de contenus. Il peut être associé à une description comprenant des noms, des activités et des informations aidant à l’identification.

VIAF rassemble des notices d’autorité provenant de plusieurs institutions et cherche à rapprocher celles qui désignent une même entité. Un regroupement, ou cluster, donne accès aux formes et aux identifiants issus des fichiers contributeurs.

Ces dispositifs permettent de traverser les différences de langue, de conventions de nommage et d’organisation des catalogues. Ils ne dispensent pas d’examiner les notices : un regroupement peut demander une correction, et une identité publique ne correspond pas nécessairement à toutes les façons dont une personne physique se présente.

## Exemple concret

Exemple fictif : une personne publie sous un nom avec accents dans un catalogue et sous une forme translittérée dans un autre. Les deux chaînes diffèrent, mais les titres associés et les dates concordent.

Une autorité institutionnelle peut porter un ISNI et être reliée à un regroupement VIAF contenant les autorités des deux institutions. L’identifiant permet de suivre ces liens sans imposer que tous les catalogues affichent exactement le même nom.

## Schéma

```text
Autorité du catalogue A ─┐
                        ├── Regroupement VIAF
Autorité du catalogue B ─┘
          │
          └── ISNI de l’identité publique, s’il est renseigné
```

## À retenir

1. ISNI et VIAF ont des fonctions différentes.
2. Ils améliorent l’identification.
3. Ils facilitent l’interopérabilité.

## ●● Voir comment

### Vérifier l’entité derrière le numéro

Depuis une notice d’autorité, ouvrez les identifiants externes. Comparez les noms, dates, activités et publications associées. Cherchez les institutions à l’origine des données.

En cas de discordance, ne concluez pas immédiatement à une identité : un homonyme, une attribution erronée ou un regroupement imparfait est possible. Documentez le doute et utilisez le canal de correction prévu par le fournisseur concerné.

## Attention à ne pas confondre

ISNI et VIAF ne sont pas interchangeables. Le premier identifie une identité publique ; le second organise des rapprochements entre fichiers d’autorité. Leurs numéros ne se convertissent pas l’un dans l’autre par une opération de formatage.

Une même orthographe ne prouve pas une identité. Inversement, plusieurs formes de nom ne prouvent pas qu’il s’agit de personnes différentes.

## ●●● Approfondir

Les identifiants institutionnels restent utiles même lorsqu’un identifiant international existe. Ils portent le contexte de la description et permettent de remonter à la source d’un rapprochement. Une bonne réutilisation conserve donc le lien entre identifiant externe, identifiant d’origine et provenance.

Les relations d’identité doivent être qualifiées avec prudence. Un alignement produit automatiquement n’a pas le même statut qu’une vérification documentée. Pour un traitement en volume, prévoyez les cas d’homonymie, de pseudonymie et de modification des regroupements ; enregistrez la date de collecte et évitez de transformer une hypothèse de rapprochement en certitude définitive.

## Voir concrètement

Choisissez une autorité de personne comportant des liens ISNI et VIAF. Repérez les institutions contributrices, les variantes et les éléments d’identification. Expliquez ce qu’apporte chaque service. Si un renseignement diverge, notez sa source plutôt que de l’écraser silencieusement dans votre propre jeu de données.

## Pour aller plus loin

Comparez la présentation ISNI de la BnF et la documentation VIAF d’OCLC. Relevez ce qui concerne l’attribution d’une identité publique et ce qui concerne le regroupement de notices sources. La fiche sur les autorités permet ensuite d’examiner la qualité des descriptions qui soutiennent ces liens.

## Fiches liées

- Qu’est-ce qu’une notice d’autorité ?
- Pourquoi relier une notice bibliographique à une autorité ?

## Sources

- ISNI International Agency — [ISNI](https://isni.org/)
- VIAF / OCLC — [VIAF](https://viaf.org/)
- Bibliothèque nationale de France — [ISNI — International Standard Name Identifier](https://www.bnf.fr/fr/isni-international-standard-name-identifier)
- OCLC — [VIAF — Virtual International Authority File](https://www.oclc.org/developer/api/oclc-apis/viaf.en.html)

Dernière vérification : 2026-11-12

---

# 9. UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?

**Formats & standards · 4 min (lecture complète)**

**Tags :** UNIMARC · Champs · Sous-champs

## En une phrase

UNIMARC organise les informations bibliographiques dans des zones codées afin qu’elles puissent être interprétées et échangées.

## ● En 2 minutes

UNIMARC est une famille de formats destinés à structurer et à échanger des données bibliographiques et d’autorité. Dans une notice bibliographique, les informations sont réparties en **zones**, repérées par des étiquettes de trois caractères, généralement numériques.

Ces numéros jouent le rôle de repères : ils permettent d’identifier une fonction sans dépendre du libellé affiché dans une interface. Les grands blocs regroupent notamment identifiants, informations codées, description, sujets ou responsabilités.

Dans de nombreuses zones de données, deux positions d’indicateurs précisent le traitement ou la nature de l’information. Le contenu est ensuite découpé en **sous-champs**. Dans les affichages lisibles, leur délimiteur est souvent représenté par un signe dollar suivi d’un code.

La signification d’un sous-champ dépend de la zone où il se trouve. Un « $a » n’a donc pas une définition universelle. Certaines zones de contrôle ou informations codées suivent une autre logique : on ne peut pas appliquer mécaniquement le même découpage à toute la notice. La documentation du format reste nécessaire pour lire précisément chaque élément.

## Exemple concret

Voici une ligne didactique, sans prétendre fournir une notice complète :

```text
200 1# $aAtlas des rivières$fCamille Martin
```

La zone 200 porte le titre et des mentions de responsabilité. « $a » introduit ici le titre propre ; « $f » une première mention de responsabilité. Le signe « # » représente une position laissée en blanc dans cet affichage.

Le nom transcrit dans la zone 200 ne remplace pas nécessairement un accès contrôlé à la personne dans une autre zone.

## Schéma

```text
Notice bibliographique
  └── Zone 200
        ├── Indicateurs : 1 et blanc
        ├── $a : titre propre
        └── $f : première mention de responsabilité
```

## À retenir

1. Le numéro de zone indique sa fonction.
2. Les sous-champs organisent l’information.
3. La structure permet l’échange automatisé.

## ●● Voir comment

### Lire du général au particulier

Commencez par identifier le format de la notice et sa version ou son profil. Repérez ensuite une zone, consultez sa définition, puis examinez les indicateurs et les sous-champs. Vérifiez si la zone ou le sous-champ peut se répéter.

Lorsque plusieurs occurrences existent, conservez leurs groupes : deux zones répétées ne sont pas toujours équivalentes à une seule zone réunissant toutes leurs valeurs.

## Attention à ne pas confondre

UNIMARC n’est ni une règle complète de catalogage ni la seule façon de stocker physiquement un fichier. Le sens d’une donnée, ses règles de description et son encodage relèvent de couches différentes.

Les zones locales et les profils d’établissement peuvent varier. Un même numéro rencontré dans un autre format MARC n’a pas forcément la même signification.

## ●●● Approfondir

La répétabilité, les indicateurs et les liens entre zones participent à l’information. Une conversion qui conserve seulement les chaînes de caractères peut perdre la structure qui les rend interprétables. Les contrôles doivent donc porter aussi sur les associations et les cardinalités.

Un profil d’application sélectionne et précise les usages du format dans un contexte donné. Pour échanger avec un partenaire, il faut connaître à la fois le format commun et les particularités du jeu exporté. Documenter les zones locales, les conventions de blanc et les règles de lien réduit les interprétations erronées lors d’un import.

## Voir concrètement

Dans une notice exportée, repérez une zone de titre, une zone d’identifiant et un accès de responsabilité. Consultez leur documentation avant de nommer les sous-champs. Comparez ensuite l’affichage public : quelles données sont réunies à l’écran alors qu’elles sont séparées dans l’export ?

## Pour aller plus loin

Le répertoire IFLA des formats et mises à jour donne accès aux manuels bibliographiques et d’autorité. Choisissez le manuel correspondant à votre notice et relevez sa version. La fiche de lecture UNIMARC permet de mettre ces repères en pratique avant une conversion ou un contrôle.

## Fiches liées

- Lire une notice UNIMARC en 2 minutes
- ISO 2709 : comment plusieurs notices sont-elles stockées dans un fichier MARC ?
- MARC, MARCXML, XML, JSON : quelles différences ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- IFLA — [UNIMARC — Formats et mises à jour](https://www.ifla.org/g/unimarc-rg/unimarc-updates/)

Dernière vérification : 2026-11-12

---

# 10. Lire une notice UNIMARC en 2 minutes

**Formats & standards · 4 min (lecture complète)**

**Tags :** UNIMARC · Notice · Lecture

## En une phrase

Pour lire une notice UNIMARC, on identifie successivement la zone, les indicateurs puis les sous-champs.

## ● En 2 minutes

Pour commencer à lire une notice UNIMARC, il est plus utile de comprendre son organisation que de mémoriser une longue liste de zones. Posez successivement trois questions : **quelle zone ? quels indicateurs ? quels sous-champs ?**

L’étiquette de zone donne une première indication sur le rôle de l’information. Dans une zone de données, les indicateurs précisent certains aspects de son interprétation. Les sous-champs répartissent le contenu en composants identifiés, selon les définitions propres à cette zone.

Travaillez d’abord sur une notice simple dont vous connaissez la ressource. Repérez le titre, un identifiant et une responsabilité ; comparez-les avec l’affichage du catalogue. Cette correspondance aide à comprendre ce qui est transcrit, codé ou utilisé comme point d’accès.

Une lecture de découverte ne permet pas d’interpréter toutes les zones. Certaines données codées se lisent par position, et certaines informations techniques demandent une documentation spécifique. L’objectif est de savoir s’orienter et de reconnaître le moment où il faut consulter le manuel, plutôt que de deviner.

## Exemple concret

Exemple didactique :

```text
200 1# $aAtlas des rivières$eobserver les paysages$fCamille Martin
```

On repère la zone 200, deux indicateurs, puis trois sous-champs. Ici, « $a » correspond au titre propre, « $e » à un complément du titre et « $f » à une première mention de responsabilité.

Cette seule ligne ne fournit ni une notice bibliographique complète ni une identification contrôlée de toutes les personnes mentionnées.

## Schéma

```text
200   1#   $aAtlas des rivières   $eobserver les paysages   $fCamille Martin
 │     │             │                     │                    │
zone  indicateurs   titre             complément          responsabilité
```

## À retenir

1. Une notice UNIMARC se lit par niveaux.
2. Les zones ont une fonction définie.
3. La documentation du format reste la référence.

## ●● Voir comment

### Un parcours de lecture en cinq étapes

- Confirmer qu’il s’agit bien d’UNIMARC bibliographique.
- Choisir une zone dont la fonction est documentée.
- Lire les indicateurs dans leur contexte, y compris les blancs.
- Découper les sous-champs sans perdre leur ordre ou leur répétition.
- Reformuler ce que la zone signifie, puis comparer au document décrit.

Si une information manque dans cette zone, cherchez si elle figure ailleurs avant de conclure qu’elle est absente de la notice.

## Attention à ne pas confondre

Le signe « $ » est souvent une représentation lisible du délimiteur, pas nécessairement le caractère réellement stocké dans le fichier. Une position blanche n’est pas toujours une erreur.

Le nom figurant dans une mention de responsabilité n’équivaut pas automatiquement à un lien vers une autorité. Enfin, les exemples abrégés des outils pédagogiques ne constituent pas des modèles complets de catalogage.

## ●●● Approfondir

Une notice possède plusieurs dimensions : contenu bibliographique, structure du format et conventions de l’export. Un affichage peut remplacer des caractères de contrôle, masquer le leader ou simplifier les liens. Lire cet affichage ne suffit donc pas toujours pour diagnostiquer le fichier original.

Pour préparer un traitement, conservez un échantillon brut et un affichage lisible. Vérifiez les répétitions, les accents, les liens et les champs codés sur plusieurs cas. Une extraction réussie sur une notice simple peut échouer sur une publication en plusieurs volumes ou une notice comportant plusieurs responsabilités.

## Voir concrètement

Prenez trois notices de ressources différentes. Pour chacune, annotez une zone de titre, un identifiant et une responsabilité. Cherchez un élément répété et expliquez pourquoi il l’est. Notez les codes que vous ne comprenez pas encore et retrouvez leurs définitions dans le manuel plutôt que de les déduire du seul contenu.

## Pour aller plus loin

Approfondissez une seule zone avec le manuel UNIMARC : définition, indicateurs, sous-champs, répétabilité et exemples. Faites ensuite l’exercice sur une zone d’une autre fonction. L’objectif est d’apprendre à consulter la documentation, pas de généraliser le sens d’un code à toutes les zones.

## Fiches liées

- UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?
- MARC, MARCXML, XML, JSON : quelles différences ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- IFLA — [UNIMARC — Formats et mises à jour](https://www.ifla.org/g/unimarc-rg/unimarc-updates/)

Dernière vérification : 2026-11-12

---

# 11. MARC, MARCXML, XML, JSON : quelles différences ?

**Formats & standards · 4 min (lecture complète)**

**Tags :** MARC · MARCXML · XML · JSON

## En une phrase

MARC décrit une structure bibliographique ; MARCXML représente MARC en XML ; XML et JSON sont des syntaxes générales de représentation de données.

## ● En 2 minutes

Ces termes désignent des couches différentes. **MARC** renvoie à une famille de formats bibliographiques ; UNIMARC et MARC 21 en sont deux exemples, avec des définitions de zones distinctes. **XML** et **JSON** sont des syntaxes générales de représentation de données.

MARCXML désigne notamment le schéma publié par la Library of Congress pour représenter la structure MARC en XML. On y retrouve des éléments de notice, de zone et de sous-champ. Les services qui l’utilisent doivent préciser le format bibliographique et le profil réellement fournis.

XML organise des éléments avec des balises, attributs et espaces de noms. JSON organise des objets, tableaux et valeurs. Aucun de ces noms ne suffit à expliquer ce que représente un titre, une personne ou une relation : cette signification dépend d’un modèle, d’un vocabulaire ou d’un schéma documenté.

Passer de MARC à XML ou JSON peut conserver une structure proche de la source, ou la transformer profondément. Le mot « conversion » ne dit donc pas si l’information, l’ordre, les répétitions et les liens sont préservés. Il faut examiner le résultat et les règles de correspondance.

## Exemple concret

Trois représentations didactiques d’un titre :

```text
Affichage UNIMARC : 200 1# $aAtlas des rivières
XML simplifié    : <titre>Atlas des rivières</titre>
JSON simplifié   : {"titre":"Atlas des rivières"}
```

Les deux dernières lignes ne sont pas présentées comme des exports MARCXML complets. Elles montrent seulement qu’un même texte peut être emballé dans des syntaxes différentes. Leur propriété « titre » doit être définie pour que l’échange ait un sens.

## Schéma

```text
Sémantique : que signifie l’information ?
        ↓
Structure : quels éléments, liens, répétitions ?
        ↓
Sérialisation : comment les écrire dans un fichier ?
```

## À retenir

1. MARC porte une sémantique bibliographique.
2. XML et JSON sont des syntaxes générales.
3. Changer de syntaxe ne signifie pas changer de modèle.

## ●● Voir comment

### Quatre renseignements à demander

Avant un import, demandez : quel format bibliographique ? quelle syntaxe ? quel schéma ou profil ? quel encodage de caractères ? Un fichier « XML » sans autre précision ne répond qu’à une partie de ces questions.

Comparez ensuite quelques notices avant et après conversion : plusieurs auteurs restent-ils distincts ? Les indicateurs sont-ils conservés ? Les liens et les informations locales ont-ils une place dans le résultat ?

## Attention à ne pas confondre

XML n’est pas synonyme de MARCXML. JSON ne signifie pas automatiquement données liées : JSON-LD est un dispositif particulier, avec un contexte et des règles supplémentaires.

Un fichier bien formé peut rester incompatible avec le modèle attendu. À l’inverse, deux fichiers de syntaxe différente peuvent représenter des informations proches. Une extension de fichier n’est pas une preuve suffisante.

## ●●● Approfondir

Une conversion fidèle doit préciser ce qu’elle conserve et ce qu’elle transforme. Les répétitions, les valeurs vides, les types numériques et les espaces peuvent recevoir des traitements différents selon les outils. Un identifiant composé de chiffres doit souvent rester une chaîne afin de préserver d’éventuels zéros initiaux.

Il faut distinguer validation syntaxique, validation de schéma et contrôle bibliographique. Ces contrôles sont complémentaires : un document peut passer les deux premiers tout en attribuant le titre à la mauvaise ressource. Tester des cas atypiques est aussi nécessaire que vérifier un exemple simple.

## Voir concrètement

Ouvrez une même notice sous deux formes fournies par un service documenté. Recherchez le titre, une zone répétée et un identifiant. Établissez une petite table de correspondance. Signalez explicitement les éléments qui n’ont pas d’équivalent ; ne concluez pas à une conservation parfaite sur la seule présence du titre.

## Pour aller plus loin

Les exemples MARCXML de la Library of Congress permettent de comparer structure de notice et représentation XML. La documentation du service BnF explique les schémas qu’il expose. Vérifiez précisément le schéma d’un fichier reçu avant de le qualifier de MARCXML ou de concevoir son import.

## Fiches liées

- UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?
- ISO 2709 : comment plusieurs notices sont-elles stockées dans un fichier MARC ?

## Sources

- Library of Congress — [MARCXML — schéma et exemples](https://www.loc.gov/standards/marcxml/)
- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- W3C — [RDF 1.1 Primer — introduction au modèle de données](https://www.w3.org/TR/rdf11-primer/)

Dernière vérification : 2026-11-12

---

# 12. ISO 2709 : comment plusieurs notices sont-elles stockées dans un fichier MARC ?

**Formats & standards · 4 min (lecture complète)**

**Tags :** ISO 2709 · MARC · Fichier

## En une phrase

ISO 2709 définit une structure permettant de stocker et d’échanger des notices sous forme d’enregistrements organisés.

## ● En 2 minutes

ISO 2709 décrit une organisation d’enregistrements permettant l’échange de données. Dans les usages MARC, un fichier peut contenir plusieurs notices placées successivement, chacune avec sa propre structure et ses limites.

On distingue notamment un **label de notice**, souvent appelé leader, un **répertoire** et les **zones de données**. Le répertoire permet de localiser les zones en indiquant leurs étiquettes, longueurs et positions selon les conventions du format. Des caractères de contrôle servent de délimiteurs.

Cette organisation concerne l’écriture physique des enregistrements. Elle ne définit pas à elle seule ce que signifie une zone 200 ou comment décrire une publication. Le format bibliographique apporte les définitions des données ; les règles de catalogage précisent leur contenu.

Un fichier ISO 2709 n’est donc pas un texte composé d’une notice par ligne. L’ouvrir dans un éditeur de texte peut afficher des signes inhabituels ou masquer les séparateurs. Pour l’analyser ou le modifier, il faut un lecteur qui respecte les longueurs, les positions, les caractères de contrôle et l’encodage.

## Exemple concret

Imaginez un fichier contenant trois notices. Un lecteur approprié repère le premier enregistrement, lit les indications qui permettent d’en parcourir les zones, puis passe au suivant. Il ne cherche pas simplement un saut de ligne.

Si un programme ajoute des caractères dans une zone sans mettre à jour la structure attendue, les positions peuvent devenir incohérentes. Les notices suivantes risquent alors d’être mal lues, même si le titre ajouté paraît correct dans un éditeur de texte.

## Schéma

```text
Fichier
  ├── Notice 1 : label | répertoire | zones | fin de notice
  ├── Notice 2 : label | répertoire | zones | fin de notice
  └── Notice 3 : label | répertoire | zones | fin de notice
```

## À retenir

1. ISO 2709 décrit l’organisation physique.
2. UNIMARC décrit la sémantique des zones.
3. Les deux sont complémentaires.

## ●● Voir comment

### Examiner sans altérer

Conservez une copie du fichier original. Utilisez un outil capable d’identifier les enregistrements et d’en produire un affichage lisible. Comparez le nombre de notices annoncées et lues, puis contrôlez quelques accents et zones répétées.

Si une notice est illisible, cherchez si le problème vient de la structure, de l’encodage ou du format déclaré. Évitez de remplacer globalement des caractères avant d’avoir identifié leur rôle.

## Attention à ne pas confondre

ISO 2709 ne signifie pas UNIMARC : plusieurs formats peuvent utiliser cette organisation. Le répertoire n’est pas une table des matières bibliographique ; c’est une structure de repérage des zones.

Une longueur en octets n’est pas toujours égale à un nombre de caractères affichés. Avec des caractères multioctets, un calcul fondé uniquement sur les lettres visibles peut produire un fichier invalide.

## ●●● Approfondir

La sérialisation impose des contraintes qui dépassent le contenu des zones : longueur totale, position de départ des données, séparateurs et cohérence du répertoire. Une bibliothèque de lecture et d’écriture spécialisée prend en charge ces calculs ; une modification manuelle de texte ne le fait pas nécessairement.

Lors d’une conversion vers XML, le besoin de conserver les positions physiques disparaît généralement, mais pas celui de préserver la structure bibliographique. Inversement, revenir vers ISO 2709 exige de reconstruire des enregistrements conformes. Une transformation doit donc être validée à la fois sur le nombre de notices et sur leur contenu.

## Voir concrètement

Sur un petit fichier de test, comptez les notices avec un lecteur approprié et affichez-en deux. Repérez leader, répertoire et zones. Exportez une copie lisible pour l’observation, puis vérifiez que les valeurs correspondent à l’original. Gardez le fichier brut séparé de cet affichage pédagogique.

## Pour aller plus loin

La documentation de structure MARC de la Library of Congress décrit une mise en œuvre d’ISO 2709. Elle aide à repérer longueurs, positions et séparateurs ; elle ne remplace pas les définitions UNIMARC des zones. Comparez ces deux niveaux dans un fichier que vous savez correctement encodé.

## Fiches liées

- UNIMARC : pourquoi une notice est-elle composée de chiffres et de sous-champs ?
- MARC, MARCXML, XML, JSON : quelles différences ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- Library of Congress — [Structure des enregistrements MARC — mise en œuvre d’ISO 2709](https://www.loc.gov/marc/specifications/specrecstruc.html)

Dernière vérification : 2026-11-12

---

# 13. Une API, à quoi ça sert ?

**Interroger & récupérer · 4 min (lecture complète)**

**Tags :** API · Données · Service web

## En une phrase

Une API permet à un programme de demander automatiquement des données ou des services à une autre application selon des règles définies.

## ● En 2 minutes

Une **API**, ou interface de programmation, décrit la manière dont un programme peut utiliser un service. Dans le cas d’une API web, une application envoie une requête à une adresse documentée, avec des paramètres, puis reçoit une réponse.

Cette interface peut permettre une recherche de notices, la consultation d’une ressource par identifiant ou l’accès à des images et à leurs métadonnées. Les opérations, les formats et les conditions d’accès dépendent du service : il n’existe pas de comportement universel de « l’API ».

La documentation précise le point d’entrée, les paramètres, les limites, les formats de réponse et les erreurs possibles. Certaines API sont publiques ; d’autres nécessitent une authentification. Dans tous les cas, une application doit traiter les réponses incomplètes, les erreurs et les indisponibilités.

L’intérêt principal est l’automatisation. Au lieu de recopier des données affichées dans une page, on utilise une interface destinée à être interprétée par un programme. Cela ne supprime pas le travail bibliographique : il reste à choisir les bonnes données, à comprendre leur modèle et à contrôler leur réutilisation.

## Exemple concret

Une application documentaire veut afficher les références correspondant à un identifiant. Elle prépare une requête selon la documentation du service, la transmet, reçoit un résultat structuré, puis sélectionne les champs à montrer.

Si aucun résultat n’est retourné, elle doit le signaler. Si plusieurs résultats existent, elle ne doit pas choisir silencieusement le premier. Si le service est momentanément indisponible, l’absence de réponse ne doit pas être présentée comme une absence de notice.

## Schéma

```text
Besoin → requête documentée → API → réponse structurée
                                         ↓
                            contrôle → traitement → affichage
```

## À retenir

1. Une API est une interface destinée aux programmes.
2. Elle automatise la récupération de données.
3. Chaque API possède sa propre documentation.

## ●● Voir comment

### Lire une documentation utilement

Repérez l’adresse du service, une opération simple, les paramètres obligatoires et un exemple de réponse. Identifiez ensuite le format des données, la pagination et les messages d’erreur. Notez les conditions de réutilisation et les limites éventuelles.

Commencez par une demande réduite et vérifiable. Conservez la requête exacte pour pouvoir reproduire le test ou expliquer une différence de résultat.

## Attention à ne pas confondre

Une API n’est pas nécessairement un téléchargement complet de base, un service gratuit ou un accès sans restrictions. Une réponse JSON n’indique pas que les données ont un modèle uniforme.

SRU peut être exposé comme une API de recherche ; OAI-PMH organise un autre type d’échange. Les mots « API » et « protocole » ne désignent pas deux catégories toujours exclusives.

## ●●● Approfondir

Une réutilisation fiable sépare récupération, contrôle et présentation. Le programme peut recevoir une réponse techniquement réussie mais contenant un diagnostic métier ou aucun résultat. Il doit aussi anticiper pagination, changements de schéma et éventuelles limitations de débit.

La provenance reste essentielle : nom du service, identifiants, date de collecte et règles de transformation. Un cache peut éviter des appels inutiles, à condition d’avoir une stratégie d’actualisation. Enfin, la possibilité d’ouvrir une adresse dans un navigateur ne garantit pas qu’un appel depuis une page web soit autorisé : les règles d’accès entre origines doivent être vérifiées.

## Voir concrètement

Dans le portail API et jeux de données de la BnF, choisissez un service correspondant à un besoin précis. Relevez son entrée, sa documentation et son format de réponse. Testez une requête courte, puis expliquez le parcours de la demande jusqu’à l’affichage, y compris le cas où aucun résultat n’est trouvé.

## Pour aller plus loin

Le portail BnF permet de comparer les contrats de plusieurs services. Pour chacun, relevez une requête réussie, une réponse vide et un cas d’erreur documenté. Les fiches SRU et OAI-PMH montrent ensuite pourquoi le type d’opération et le suivi des résultats comptent davantage que le seul mot API.

## Fiches liées

- SRU : comment interroger un catalogue à distance ?
- CQL : comment écrire une requête SRU ?
- API, SRU et OAI-PMH : lequel utiliser ?

## Sources

- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)
- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)

Dernière vérification : 2026-11-12

---

# 14. SRU : comment interroger un catalogue à distance ?

**Interroger & récupérer · 4 min (lecture complète)**

**Tags :** SRU · Recherche · Catalogue

## En une phrase

SRU est un protocole permettant d’envoyer des requêtes de recherche à un serveur distant et de récupérer des résultats structurés.

## ● En 2 minutes

**SRU** est un protocole de recherche et de récupération de données à distance. Une application transmet une requête à un serveur, puis reçoit une réponse structurée comprenant des informations sur les résultats et, selon la demande, des notices.

Une requête peut préciser l’opération, la version du protocole, l’expression de recherche, le début de la page demandée, la taille de cette page et le schéma des notices. La recherche s’exprime généralement en CQL, un langage qui permet d’indiquer les index et les relations utilisés.

La réponse distingue le nombre de résultats trouvés et les notices effectivement retournées. Elle peut aussi contenir un diagnostic. Récupérer dix notices ne signifie donc pas qu’il n’existe que dix résultats, et obtenir une réponse HTTP ne suffit pas à conclure que la recherche est valide.

SRU est utile pour interroger un catalogue selon des critères documentés. Il ne garantit ni que tous les champs soient interrogeables, ni que les index d’un serveur existent sur un autre. Il faut consulter la documentation du point d’accès choisi et vérifier les formats réellement disponibles.

## Exemple concret

Exemple de paramètres pour une petite recherche dans le service SRU du catalogue général de la BnF :

```text
operation = searchRetrieve
version = 1.2
query = bib.title all "atlas"
startRecord = 1
maximumRecords = 5
```

Il s’agit d’une présentation lisible des paramètres, pas d’une URL prête à copier. La valeur de query doit être correctement encodée dans l’adresse. La documentation du service précise les schémas de sortie et les limites applicables.

## Schéma

```text
Requête : critères + pagination + schéma demandé
                  ↓
              Serveur SRU
                  ↓
Réponse : nombre de résultats + notices + diagnostics éventuels
```

## À retenir

1. SRU est un protocole de recherche.
2. La requête peut utiliser CQL.
3. Les résultats sont structurés.

## ●● Voir comment

### Contrôler une première page

Commencez avec peu de notices. Vérifiez l’expression de recherche, le nombre total annoncé et le contenu réellement reçu. Repérez les identifiants et le schéma des notices avant de traiter les zones.

Pour récupérer d’autres résultats, utilisez la pagination documentée. Ne confondez pas position de départ et numéro de page. Conservez la requête et la date de collecte pour rendre votre extraction reproductible.

## Attention à ne pas confondre

SRU n’est pas d’abord un protocole de synchronisation d’entrepôt. Une suite de recherches paginées dans un catalogue vivant peut être affectée par des modifications entre deux appels.

La réponse SRU et les notices qu’elle contient sont deux niveaux distincts. Ne traitez pas tous les éléments XML de l’enveloppe comme s’ils appartenaient à la notice bibliographique.

## ●●● Approfondir

La chaîne de traitement comporte plusieurs étapes : construire la requête, interpréter l’enveloppe SRU, lire le format des notices, contrôler les résultats et conserver la provenance. Une erreur à un niveau peut passer inaperçue si l’on ne vérifie que la présence d’un titre.

Le service BnF documente des sorties bibliographiques et d’autorité, ainsi que leurs schémas. Les conventions techniques peuvent évoluer : un exemple enregistré doit rester associé à sa documentation et à son contexte de test. Pour une collecte volumineuse, examiner les offres de fichiers ou d’entrepôts peut être plus adapté qu’une succession de recherches interactives.

## Voir concrètement

Utilisez le formulaire de construction de requêtes indiqué dans la documentation SRU de la BnF. Faites une recherche par titre avec une petite limite de résultats. Identifiez query, startRecord et maximumRecords dans l’adresse obtenue, puis retrouvez le nombre total annoncé et l’identifiant d’une notice dans la réponse.

## Pour aller plus loin

Consultez les exemples et les schémas de sortie dans la documentation SRU de la BnF. Poursuivez avec CQL pour la logique de recherche, puis avec la comparaison des modes d’accès pour décider si une recherche paginée convient réellement à votre objectif de collecte.

## Fiches liées

- Une API, à quoi ça sert ?
- CQL : comment écrire une requête SRU ?
- API, SRU et OAI-PMH : lequel utiliser ?

## Sources

- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)
- Library of Congress — [CQL — Contextual Query Language, spécification](https://www.loc.gov/standards/sru/cql/spec.html)

Dernière vérification : 2026-11-12

---

# 15. CQL : comment écrire une requête SRU ?

**Interroger & récupérer · 4 min (lecture complète)**

**Tags :** CQL · SRU · Requête

## En une phrase

CQL est un langage permettant d’exprimer précisément ce que l’on souhaite rechercher dans un service SRU.

## ● En 2 minutes

**CQL**, Contextual Query Language, sert à exprimer une recherche de manière structurée. Dans un service SRU, il décrit ce que l’on cherche ; les autres paramètres de la requête organisent notamment l’opération et la pagination.

Une clause associe généralement un **index**, une **relation** et un **terme**. L’index désigne ce qu’on interroge, par exemple un titre. La relation précise comment confronter le terme aux données indexées. Le terme est la valeur recherchée.

Plusieurs clauses peuvent être combinées avec des opérateurs tels que AND, OR ou NOT. Les parenthèses permettent de rendre les groupements explicites. La signification des relations et la liste des index acceptés doivent être vérifiées pour le serveur interrogé.

Écrire une requête correcte demande donc deux connaissances : la grammaire CQL et la documentation du service. Une expression bien formée peut utiliser un index absent du serveur, ou produire un résultat inattendu si l’on suppose que « = », « all » et « any » ont partout le même comportement.

## Exemple concret

Exemple adapté aux noms d’index documentés pour le catalogue général de la BnF :

```text
(bib.author all "victor hugo") and (bib.title all "miserables")
```

« bib.author » et « bib.title » sont les index ; « all » est la relation ; les expressions entre guillemets sont les termes. Cet exemple ne constitue pas une règle universelle pour tous les services SRU. Il faut tester le comportement des accents, des variantes et de l’indexation dans le service concerné.

## Schéma

```text
bib.title   all   "atlas des rivières"
    │        │             │
  index   relation       terme

clause A  AND  clause B  → combinaison de critères
```

## À retenir

1. CQL exprime la logique d’une recherche.
2. Les index dépendent du serveur.
3. La documentation du service est indispensable.

## ●● Voir comment

### Construire progressivement

Testez d’abord une clause simple avec un terme que vous savez présent. Ajoutez un deuxième critère et comparez les résultats. Si nécessaire, revenez à chaque clause séparée pour comprendre ce qui réduit ou élargit la recherche.

Pour une expression complexe, utilisez des parenthèses et conservez une version lisible avant l’encodage dans l’URL. Cela facilite le diagnostic des guillemets, caractères réservés et regroupements logiques.

## Attention à ne pas confondre

CQL n’est pas SQL et ne donne pas un accès direct aux tables internes du catalogue. Un index de recherche ne correspond pas nécessairement à un champ brut : il peut rassembler plusieurs éléments.

Une requête qui ne retourne rien n’est pas forcément mal écrite. Une requête qui retourne beaucoup de résultats n’est pas forcément pertinente : il faut examiner les notices.

## ●●● Approfondir

La spécification CQL prévoit des relations, des modificateurs et des ensembles de contexte. Tous ne sont pas forcément pris en charge par un serveur donné. Une application portable doit séparer les concepts de recherche de leur traduction dans les index d’un service.

Pour évaluer une requête, observez à la fois le nombre de résultats et des exemples représentatifs. Un critère trop strict peut exclure des notices pertinentes ; un critère trop large peut accroître le bruit. La documentation technique et la connaissance du contenu du catalogue sont donc complémentaires pour ajuster une stratégie de recherche.

## Voir concrètement

Construisez trois variantes : une recherche par titre, une par responsabilité et leur combinaison. Notez le nombre de résultats, puis examinez quelques notices. Reformulez en français ce que chaque expression demande réellement. Vérifiez enfin que les index et relations employés figurent dans la documentation du service.

## Pour aller plus loin

La spécification CQL explique la grammaire ; la documentation BnF précise les index et relations disponibles dans son service. Utilisez ces deux références ensemble. Conservez une petite série de requêtes annotées, avec le sens attendu et les observations sur les résultats, pour vos prochains tests.

## Fiches liées

- SRU : comment interroger un catalogue à distance ?
- Une API, à quoi ça sert ?

## Sources

- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)
- Library of Congress — [CQL — Contextual Query Language, spécification](https://www.loc.gov/standards/sru/cql/spec.html)

Dernière vérification : 2026-11-12

---

# 16. OAI-PMH : qu’est-ce que le moissonnage de métadonnées ?

**Interroger & récupérer · 4 min (lecture complète)**

**Tags :** OAI-PMH · Moissonnage · Métadonnées

## En une phrase

OAI-PMH est un protocole permettant à un service de collecter régulièrement les métadonnées mises à disposition par un autre service.

## ● En 2 minutes

**OAI-PMH** organise le moissonnage de métadonnées : un fournisseur expose un entrepôt, et un collecteur récupère les enregistrements pour alimenter un autre service. Il s’agit d’un cadre d’échange, pas d’un moteur de recherche plein texte sur les documents.

Le protocole prévoit six opérations, dont Identify pour connaître l’entrepôt, ListMetadataFormats pour les formats, ListSets pour les ensembles éventuels et ListRecords pour les enregistrements. GetRecord permet de demander un enregistrement déterminé ; ListIdentifiers fournit des en-têtes.

La collecte peut être organisée par format, par ensemble lorsque le fournisseur en propose, et par intervalle de dates. Les dates servent au suivi des créations, modifications ou suppressions selon la politique de l’entrepôt ; elles ne sont pas les dates de publication des documents.

Lorsqu’une réponse est découpée, un jeton de reprise, ou resumptionToken, permet de poursuivre la collecte. Un moissonneur doit suivre ce mécanisme et vérifier que la récupération est complète avant de considérer sa base comme actualisée. Une collecte régulière demande donc un suivi des étapes et des erreurs.

## Exemple concret

Un portail veut intégrer les descriptions d’une collection numérique. Il réalise une collecte initiale, puis interroge régulièrement l’entrepôt pour récupérer les changements depuis une borne documentée.

Il mémorise les identifiants et les dates techniques, met à jour les descriptions et applique la politique de suppression annoncée. Le protocole lui transmet des métadonnées ; le téléchargement des images ou des documents eux-mêmes relève d’autres liens ou services.

## Schéma

```text
Entrepôt OAI-PMH
  ↓ collecte initiale puis incrémentale
Moissonneur : identifiants + dates + jetons de reprise
  ↓ contrôles et mise à jour
Base locale / portail de recherche
```

## À retenir

1. OAI-PMH sert surtout à collecter des métadonnées.
2. Il permet des mises à jour régulières.
3. Il est adapté aux échanges entre entrepôts et portails.

## ●● Voir comment

### Préparer un moissonnage

Examinez d’abord Identify : granularité des dates, politique de suppression et informations de l’entrepôt. Consultez les formats proposés et les ensembles éventuels, puis testez une collecte réduite.

Enregistrez les bornes demandées, le format et les étapes franchies. Si la collecte échoue, ne marquez pas la totalité de l’intervalle comme traitée. Une stratégie de reprise doit éviter de perdre des modifications aux frontières temporelles.

## Attention à ne pas confondre

L’identifiant OAI d’un item de l’entrepôt n’est pas nécessairement l’identifiant pérenne du document décrit. Le terme « item » du protocole ne doit pas non plus être confondu automatiquement avec l’Item du modèle IFLA LRM.

Un ensemble OAI n’est pas forcément une catégorie thématique, et tous les entrepôts n’offrent pas de découpage en ensembles.

## ●●● Approfondir

Un même item OAI peut être diffusé sous plusieurs formats de métadonnées. Les récupérer ne signifie pas obtenir plusieurs documents distincts. La clé de suivi doit tenir compte de l’entrepôt, de l’identifiant et du format, selon l’organisation de l’application.

Le moissonneur doit aussi distinguer suppression déclarée et absence dans une collecte partielle. Ne pas revoir une notice dans un intervalle donné ne suffit pas à décider qu’elle a disparu. Une synchronisation fiable repose sur la politique annoncée par le fournisseur, les identifiants stables et la conservation d’un journal de collecte.

## Voir concrètement

Consultez la présentation des entrepôts OAI de la BnF. Identifiez un entrepôt et ses formats, puis lisez une réponse Identify et un exemple d’enregistrement. Repérez séparément l’identifiant de l’item OAI, la date technique et les liens vers la ressource décrite. Expliquez comment votre portail traiterait une interruption.

## Pour aller plus loin

La spécification OAI-PMH définit les opérations, les datestamps, les suppressions et les jetons de reprise. La présentation des entrepôts BnF en décrit les usages concrets. Avant un moissonnage suivi, écrivez comment votre application reprendra après une interruption sans perdre de changements.

## Fiches liées

- Une API, à quoi ça sert ?
- API, SRU et OAI-PMH : lequel utiliser ?

## Sources

- Bibliothèque nationale de France — [Les entrepôts OAI de la BnF](https://www.bnf.fr/fr/les-entrepots-oai-de-la-bnf)
- Open Archives Initiative — [OAI-PMH](https://www.openarchives.org/pmh/)
- Open Archives Initiative — [The Open Archives Initiative Protocol for Metadata Harvesting](https://www.openarchives.org/OAI/openarchivesprotocol.html)

Dernière vérification : 2026-11-12

---

# 17. API, SRU et OAI-PMH : lequel utiliser ?

**Interroger & récupérer · 4 min (lecture complète)**

**Tags :** API · SRU · OAI-PMH

## En une phrase

Le bon mécanisme dépend de l’objectif : interroger précisément, utiliser un service spécialisé ou collecter régulièrement des métadonnées.

## ● En 2 minutes

Il faut commencer par le besoin, et non par le nom d’un protocole. Cherchez-vous une notice précise, une réponse à une question documentaire, une copie initiale d’un corpus ou un mécanisme de mise à jour régulière ? Ces objectifs ne demandent pas la même organisation.

**SRU** convient à une recherche structurée dans un catalogue qui expose ce protocole. **OAI-PMH** organise la collecte de métadonnées et le suivi des changements selon les possibilités de l’entrepôt. Une **API spécialisée** peut offrir d’autres opérations, par exemple l’accès à une image ou à une ressource particulière.

Le terme API reste générique : un service SRU peut être présenté comme une API. Il ne s’agit donc pas de choisir entre trois objets de même nature. Il faut comparer les fonctions réellement offertes, la couverture des données et les modalités d’utilisation.

Un téléchargement de fichier peut aussi être le meilleur point de départ pour un grand corpus. À l’inverse, récupérer régulièrement un fichier complet pour répondre à quelques recherches ponctuelles peut être disproportionné. Le bon choix dépend aussi des contraintes d’actualisation et des moyens disponibles.

## Exemple concret

Un établissement veut : retrouver quelques notices par titre ; alimenter chaque semaine un portail ; afficher un document numérisé. Il peut utiliser des services différents pour ces trois tâches.

La recherche ponctuelle appelle une interface de recherche. L’alimentation régulière exige un suivi des créations et des changements. L’affichage du document dépend d’un service donnant accès au contenu et de ses conditions. Une seule réponse technique ne couvre pas nécessairement les trois besoins.

## Schéma

```text
Recherche structurée ? → service de recherche, par exemple SRU
Collecte suivie ?      → entrepôt et mécanisme de mise à jour
Service spécialisé ?   → API correspondant à l’opération
Copie en volume ?      → examiner aussi les fichiers proposés
```

## À retenir

1. Choisir selon le besoin.
2. SRU vise surtout la recherche.
3. OAI-PMH vise surtout la collecte.

## ●● Voir comment

### Comparer les offres

| Question | Pourquoi la poser ? |
|---|---|
| Quelles données sont couvertes ? | Éviter de confondre un sous-ensemble et le catalogue complet |
| Quels formats sont proposés ? | Préparer l’interprétation et la conversion |
| Comment suivre les changements ? | Maintenir une base locale cohérente |
| Quelles limites et conditions ? | Organiser un usage adapté au service |

Répondez à ces questions avec la documentation de chaque point d’accès.

## Attention à ne pas confondre

OAI-PMH n’est pas une solution de recherche interactive par titre et auteur. SRU ne remplace pas automatiquement un flux de synchronisation. Une API dédiée n’est pas nécessairement plus récente, plus complète ou plus simple parce qu’elle renvoie du JSON.

Les données disponibles dans deux services d’une même institution peuvent différer par leur périmètre ou leur rythme de mise à jour.

## ●●● Approfondir

Une architecture peut combiner plusieurs mécanismes : charger une base initiale depuis un fichier, suivre des changements avec un entrepôt et vérifier ponctuellement une description par une recherche. Il faut alors conserver l’origine de chaque valeur et définir quelle source fait référence pour chaque usage.

La comparaison doit aussi porter sur le coût de maintien : gestion des interruptions, changements de schéma, doublons et suppression des données. Un service facile à appeler une fois peut être plus difficile à synchroniser durablement. Un prototype sur un petit échantillon permet d’évaluer ces contraintes avant de choisir une architecture complète.

## Voir concrètement

Décrivez trois besoins de votre établissement en une phrase chacun. Pour chaque besoin, relevez dans le portail BnF une offre candidate, son périmètre, son format et son mode d’actualisation. Justifiez le choix sans utiliser l’argument « c’est une API » comme explication suffisante.

## Pour aller plus loin

Comparez les documentations SRU et OAI-PMH, puis examinez une offre de fichiers sur le portail BnF. Construisez une petite matrice besoin, couverture, format et actualisation. Vous pourrez ensuite choisir sur des critères explicites plutôt que sur une préférence générale pour un protocole.

## Fiches liées

- Une API, à quoi ça sert ?
- SRU : comment interroger un catalogue à distance ?
- OAI-PMH : qu’est-ce que le moissonnage de métadonnées ?

## Sources

- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)
- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)
- Open Archives Initiative — [The Open Archives Initiative Protocol for Metadata Harvesting](https://www.openarchives.org/OAI/openarchivesprotocol.html)

Dernière vérification : 2026-11-12

---

# 18. Qu’est-ce qu’une notice d’autorité ?

**Relier les données · 4 min (lecture complète)**

**Tags :** Autorité · Personne · Collectivité · Œuvre

## En une phrase

Une notice d’autorité sert à identifier de manière contrôlée une personne, une collectivité, une œuvre, un lieu ou une autre entité.

## ● En 2 minutes

Une **notice d’autorité** rassemble des informations destinées à identifier une entité et à organiser les accès qui la désignent. Elle peut concerner une personne, une collectivité, une œuvre, un lieu ou un concept, selon le référentiel.

Elle comprend souvent une forme privilégiée, des variantes de nom ou de désignation, des éléments distinctifs, des identifiants, des relations et des sources. Ces éléments servent à reconnaître l’entité malgré les changements de langue, d’écriture ou de forme du nom.

Pour une personne, des dates, une activité ou des publications associées peuvent aider à distinguer des homonymes. Pour un sujet, un terme retenu, des renvois et des relations permettent d’organiser la recherche. Les informations nécessaires ne sont donc pas les mêmes pour toutes les catégories d’autorités.

La notice ne vise pas à tout dire sur l’entité. Son rôle est de rendre l’identification et les points d’accès plus fiables. La qualité dépend de la documentation, du contexte de création et des mises à jour, et non de la seule longueur du texte.

## Exemple concret

Dans un exemple fictif, deux personnes nommées « Camille Martin » publient dans des domaines différents. L’une travaille sur les rivières, l’autre compose de la musique.

Deux notices d’autorité distinctes permettent de conserver cette différence. Les dates, les activités et les sources aident à attribuer chaque publication à la bonne personne. Une troisième forme, « C. Martin », ne peut pas être rattachée automatiquement à l’une d’elles sur la seule ressemblance du nom.

## Schéma

```text
Forme A ─┐
Forme B ─┼── Autorité identifiée → identifiant + sources
Forme C ─┘           │
                     └── relations vers d’autres entités
```

## À retenir

1. Une autorité identifie une entité, pas un document.
2. Elle rassemble les variantes.
3. Elle améliore recherche et mise en relation.

## ●● Voir comment

### Lire une autorité

Repérez la catégorie d’entité et l’identifiant. Distinguez la forme affichée, les variantes et les éléments d’identification. Cherchez ensuite les sources qui justifient la description, puis les liens vers d’autres référentiels.

Posez-vous une question précise : quels éléments permettent d’affirmer qu’il s’agit de cette personne ou de cette entité, plutôt que d’un homonyme ? L’absence de source ou de précision peut appeler une vérification complémentaire.

## Attention à ne pas confondre

Une notice d’autorité n’est pas une biographie exhaustive, une page de présentation ni une liste complète de publications. Une forme privilégiée n’est pas forcément la seule forme correcte dans tous les contextes linguistiques.

Le mot « autorité » désigne ici une fonction de contrôle documentaire ; il ne garantit pas que toutes les informations soient définitives ou exemptes d’erreur.

## ●●● Approfondir

Les autorités constituent des points d’appui pour les regroupements et les données liées. Leur identifiant permet de relier des notices sans recopier les mêmes éléments descriptifs à chaque occurrence. Mais l’existence d’un identifiant ne suffit pas à rendre un lien correct : il faut que l’entité associée soit bien celle de la ressource.

Lors d’une réutilisation, conservez les identifiants d’origine et les sources des rapprochements. Une fusion ou une scission d’autorités peut modifier les relations à suivre. Le maintien des liens et la gestion des corrections font donc partie du cycle de vie des données.

## Voir concrètement

Ouvrez une autorité de personne et une autorité de sujet. Comparez les types d’informations disponibles : variantes, identifiants, notes, relations et sources. Relevez ce qui permet l’identification dans chaque cas. Expliquez pourquoi une simple liste de noms ne rendrait pas le même service.

## Pour aller plus loin

Les produits d’autorité BnF présentent plusieurs catégories d’entités et leurs périmètres. La documentation ISNI montre comment certaines autorités peuvent être reliées à des identifiants internationaux. Poursuivez avec les liens bibliographiques pour comprendre ce que cette identification apporte aux publications associées.

## Fiches liées

- ISNI et VIAF : comment identifier et relier les personnes ?
- Pourquoi relier une notice bibliographique à une autorité ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Bibliothèque nationale de France — [ISNI — International Standard Name Identifier](https://www.bnf.fr/fr/isni-international-standard-name-identifier)

Dernière vérification : 2026-11-12

---

# 19. Pourquoi relier une notice bibliographique à une autorité ?

**Relier les données · 4 min (lecture complète)**

**Tags :** Autorités · Relations · Interopérabilité

## En une phrase

Relier une notice à une autorité permet de remplacer une simple chaîne de caractères par une relation vers une entité identifiée.

## ● En 2 minutes

Dans une notice bibliographique, un nom écrit en toutes lettres est une chaîne de caractères. Un lien vers une autorité ajoute une information essentielle : **quelle entité est désignée** par ce nom dans ce contexte.

Ce lien permet de distinguer des homonymes et de rassembler les publications d’une même personne malgré les variantes de son nom. Il peut aussi conduire à des identifiants externes, des sources et d’autres relations, sans recopier toute la description de l’entité dans chaque notice bibliographique.

Les catalogues peuvent utiliser ce principe pour une responsabilité, une collectivité, une œuvre ou un sujet. La fonction de la relation compte autant que sa destination : être auteur, traducteur ou sujet d’un document ne décrit pas le même rôle.

Un lien est donc plus riche qu’une simple égalité de texte, mais il doit être juste. Associer plusieurs notices à la mauvaise autorité peut regrouper artificiellement des publications de personnes différentes et diffuser cette confusion lors des échanges. Le contrôle documentaire reste nécessaire au moment de créer ou de reprendre les liens.

## Exemple concret

Une publication mentionne « C. Martin » ; une autre écrit « Camille Martin ». Des éléments documentés permettent d’établir qu’il s’agit de la même personne. Le catalogue peut conserver les mentions transcrites et faire pointer les accès vers la même autorité.

Une troisième publication d’un homonyme doit pointer vers une autre autorité, même si l’affichage du nom est identique. Le regroupement dépend de l’identification de la personne, pas d’une ressemblance typographique.

## Schéma

```text
Notice A ── auteur ─────┐
Notice B ── traducteur ─┼── Autorité de personne P
Notice C ── auteur ───────── Autorité de personne Q

P et Q peuvent avoir le même nom affiché.
```

## À retenir

1. Une autorité évite les formes incohérentes.
2. Plusieurs notices peuvent pointer vers la même entité.
3. Les relations sont fondamentales pour les données liées.

## ●● Voir comment

### Contrôler la cible et la relation

Relevez l’identifiant de l’autorité liée. Vérifiez les éléments distinctifs de l’entité et leur concordance avec la publication. Examinez ensuite le rôle exprimé par l’accès ou par le lien.

Comparez enfin les regroupements obtenus : les publications semblent-elles cohérentes ? Une liste comportant des domaines, dates ou personnes incompatibles peut révéler un lien à examiner, sans suffire à elle seule à conclure à une erreur.

## Attention à ne pas confondre

Rassembler des variantes de nom ne signifie pas effacer toutes les formes transcrites. Corriger une autorité ne corrige pas forcément les mentions de responsabilité présentes dans les publications.

Un lien valide techniquement peut viser la mauvaise entité. À l’inverse, une notice sans lien n’est pas automatiquement fausse : elle peut être incomplète, issue d’un autre contexte ou nécessiter un travail de rapprochement.

## ●●● Approfondir

Dans un échange de notices, les liens doivent rester interprétables. Un numéro local sans indication de son référentiel risque d’être pris pour une valeur appartenant à une autre base. Associer l’identifiant à son espace de nommage ou à une URI réduit cette ambiguïté.

Il faut aussi distinguer la personne de la notice qui la décrit et la relation bibliographique du lien technique utilisé pour l’encoder. Cette précision devient importante lors d’une conversion vers un modèle orienté entités : le but n’est pas seulement de transporter un numéro, mais de préserver le sens du rôle et la provenance de l’identification.

## Voir concrètement

Dans deux notices d’un même créateur, suivez le lien d’autorité et comparez les identifiants, pas seulement les noms affichés. Relevez ensuite deux rôles différents de cette personne. Cherchez un cas d’homonymie et expliquez quelles données permettent de maintenir deux regroupements distincts.

## Pour aller plus loin

Reprenez la fiche sur les notices d’autorité, puis celle sur les URI. Comparez la valeur affichée, le numéro de notice et l’entité visée. Pour chaque lien exporté, vérifiez que le format conserve les informations nécessaires à son interprétation hors du catalogue d’origine.

## Fiches liées

- Qu’est-ce qu’une notice d’autorité ?
- URI et données liées : pourquoi utiliser des identifiants ?

## Sources

- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Transition bibliographique — [Programme Transition bibliographique](https://www.transition-bibliographique.fr/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)

Dernière vérification : 2026-11-12

---

# 20. URI et données liées : pourquoi utiliser des identifiants ?

**Relier les données · 4 min (lecture complète)**

**Tags :** URI · Données liées · Identifiants

## En une phrase

Une URI permet de désigner une ressource ou une entité de manière identifiable sur le Web et de construire des relations entre données.

## ● En 2 minutes

Une **URI**, Uniform Resource Identifier, sert à identifier une ressource. Dans les données liées, elle permet de désigner une entité ou une propriété dans des énoncés lisibles par des machines, au lieu de s’appuyer uniquement sur des noms en texte libre.

Un nom comme « Paris » peut désigner plusieurs lieux. Une URI choisie dans un référentiel précise de quel lieu on parle. Un autre jeu de données peut utiliser cette même URI pour exprimer une relation, sans recopier toute la description du lieu.

Dans les pratiques du Web de données, les identifiants HTTP permettent souvent de retrouver une représentation de la ressource : page lisible, données structurées ou autre réponse selon le service. Il faut toutefois distinguer l’entité identifiée et la page qui la décrit.

Les identifiants ne suffisent pas à produire des données liées. Les relations doivent également avoir un sens défini et être correctement utilisées. Un lien fondé sur une ressemblance de nom peut être techniquement cliquable et pourtant bibliographiquement faux. La qualité de l’identification reste centrale.

## Exemple concret

Deux bases décrivent des publications associées à un lieu. L’une écrit « Paris », l’autre « Paris (France) ». Si les deux liens visent l’identifiant du même lieu dans un référentiel adapté, les applications disposent d’un point de rapprochement explicite.

Cela ne signifie pas que toutes leurs propriétés soient identiques. L’une peut décrire un lieu de publication et l’autre un sujet géographique : la relation utilisée doit rester distincte.

## Schéma

```text
Publication A ── lieu de publication ──> URI du lieu
Publication B ── sujet géographique ──> URI du lieu

Même entité cible, relations différentes.
```

## À retenir

1. Une URI sert à identifier.
2. Les identifiants relient les jeux de données.
3. Les données liées reposent sur des relations explicites.

## ●● Voir comment

### Décrire ce que le lien affirme

Pour une URI rencontrée dans une notice, relevez la propriété qui l’introduit. Ouvrez la référence lorsque cela est possible et vérifiez le type d’entité : personne, œuvre, lieu, concept ou document.

Notez aussi l’institution ou le vocabulaire responsable de l’identifiant. Un nombre isolé sans indication de sa base d’origine ne fournit pas le même niveau de contexte.

## Attention à ne pas confondre

Une URI n’est pas forcément une page web lisible, ni une garantie de pérennité. Une URL est une forme d’identification et de localisation utilisée sur le Web ; tous les identifiants ne doivent pas être opposés mécaniquement aux URL.

Deux URI différentes peuvent désigner la même entité, mais on ne peut pas le déduire de leur seul texte. Une correspondance doit être établie et qualifiée.

## ●●● Approfondir

Les environnements RDF utilisent également des IRI, qui étendent les possibilités d’écriture des identifiants. Au niveau documentaire, l’enjeu reste de choisir des références explicites et de comprendre les distinctions qu’elles portent.

Un alignement peut exprimer une identité, une correspondance proche ou un autre type de relation. Ces affirmations n’ont pas la même force. Avant de fusionner des données, vérifiez la sémantique de la propriété et le niveau décrit : une notice, une personne et une identité publique ne sont pas interchangeables. Conserver la provenance de l’alignement aide à revenir sur un rapprochement contesté.

## Voir concrètement

Sur une ressource exposée en données liées, repérez deux URI et les propriétés qui les relient. Écrivez en français la signification de chaque lien. Si deux sources emploient des URI différentes pour une entité apparemment identique, cherchez une relation documentée plutôt que d’en déduire automatiquement une égalité.

## Pour aller plus loin

Le primer RDF du W3C explique comment les identifiants et les propriétés participent aux énoncés. Poursuivez avec la fiche RDF et examinez un petit jeu de données liées : cherchez le type des ressources et la définition des relations avant de combiner les valeurs de plusieurs sources.

## Fiches liées

- Un ARK, comment ça fonctionne ?
- RDF : comment transformer des données en relations ?
- De la notice au graphe : que change la transition bibliographique ?

## Sources

- W3C — [RDF 1.1 Primer — introduction au modèle de données](https://www.w3.org/TR/rdf11-primer/)

Dernière vérification : 2026-11-12

---

# 21. RDF : comment transformer des données en relations ?

**Relier les données · 3 min (lecture complète)**

**Tags :** RDF · Triplet · Graphe

## En une phrase

RDF représente l’information sous forme d’énoncés reliant un sujet, une propriété et une valeur ou une autre ressource.

## ● En 2 minutes

**RDF**, Resource Description Framework, est un modèle de données qui représente des affirmations sous forme de **triplets** : un sujet, un prédicat et un objet. Le prédicat exprime la relation ou la propriété affirmée à propos du sujet.

L’objet peut être une autre ressource identifiée, ou une valeur littérale comme un titre ou une date. Plusieurs triplets qui partagent des ressources forment un graphe. Cette organisation permet de combiner des informations provenant de plusieurs sources, à condition de respecter le sens des identifiants et des vocabulaires.

Pour une publication, on peut exprimer un titre avec une valeur textuelle et une relation de responsabilité vers une personne. La personne peut être décrite par d’autres triplets. On évite ainsi de réduire tous les liens à des chaînes de caractères isolées.

RDF n’impose pas une seule écriture de fichier. Un même graphe peut être sérialisé notamment en Turtle, RDF/XML ou JSON-LD. Lire un graphe demande de comprendre les relations et les ressources, et pas seulement de reconnaître des balises ou des accolades.

## Exemple concret

Exemple purement didactique, avec des noms de propriétés à définir dans une application réelle :

```text
publication-1 → aPourTitre → "Atlas des rivières"
publication-1 → aPourCréateur → personne-1
personne-1   → aPourNom → "Camille Martin"
```

Le titre est une valeur textuelle. La personne est une ressource vers laquelle on établit une relation. Pour produire du RDF réutilisable, les identifiants et les propriétés doivent appartenir à des espaces de nommage explicites.

## Schéma

```text
                aPourCréateur
publication-1 ─────────────────→ personne-1
      │                              │
 aPourTitre                       aPourNom
      ↓                              ↓
"Atlas des rivières"          "Camille Martin"
```

## À retenir

1. RDF décrit des relations.
2. Un triplet comporte sujet, propriété et objet.
3. Plusieurs triplets forment un graphe.

## ●● Voir comment

### Lire un énoncé

Identifiez d’abord le sujet. Cherchez ensuite la définition du prédicat : « est créé par », « décrit », « a pour sujet » et « est une variante de » ne sont pas équivalents. Regardez enfin si l’objet est une ressource ou une valeur littérale.

Pour un littéral, une langue ou un type de données peut préciser l’interprétation. Une chaîne « 2021 » n’exprime pas automatiquement une date de publication.

## Attention à ne pas confondre

Un graphe RDF n’est pas simplement un dessin de nœuds et de flèches : il porte des énoncés définis. Toute conversion en JSON ne produit pas du RDF, et XML n’est pas automatiquement RDF/XML.

Ajouter des relations ne rend pas les affirmations exactes. Une propriété choisie au hasard peut donner une apparence structurée à une information fausse.

## ●●● Approfondir

Transformer une notice en RDF exige de choisir les entités, leurs identifiants, les propriétés et les règles de correspondance. Recopier une zone dans une propriété mal définie risque de perdre une distinction documentaire essentielle.

Les vocabulaires existants permettent de partager des définitions, mais ils doivent être utilisés selon leur sémantique. La provenance des triplets, les règles de transformation et les contrôles restent nécessaires. Les requêtes sur un graphe exploitent ces relations ; elles ne réparent pas les erreurs d’identification ou de modélisation présentes dans les données.

## Voir concrètement

Prenez une petite description de publication et écrivez cinq triplets didactiques. Distinguez les objets littéraux des ressources identifiées. Vérifiez que chaque prédicat peut être reformulé sans ambiguïté. Comparez ensuite deux sérialisations du même exemple : le graphe logique change-t-il, ou seulement son écriture ?

## Pour aller plus loin

Le primer RDF du W3C propose des exemples de triplets, de littéraux et de sérialisations. Choisissez un de ces exemples et identifiez le graphe indépendamment de son écriture. La fiche sur la transition bibliographique permet ensuite de distinguer changement de représentation et travail d’identification des entités.

## Fiches liées

- URI et données liées : pourquoi utiliser des identifiants ?
- De la notice au graphe : que change la transition bibliographique ?
- IFLA LRM : pourquoi parler d’Œuvre, Expression, Manifestation et Item ?

## Sources

- W3C — [RDF 1.1 Primer — introduction au modèle de données](https://www.w3.org/TR/rdf11-primer/)

Dernière vérification : 2026-11-12

---

# 22. Comment reconnaître un doublon bibliographique ?

**Qualité & contrôle · 4 min (lecture complète)**

**Tags :** Doublons · ISBN · Qualité

## En une phrase

Un doublon bibliographique correspond à plusieurs descriptions qui semblent représenter la même ressource et doivent être comparées avant toute fusion.

## ● En 2 minutes

Un doublon bibliographique est une situation où plusieurs descriptions semblent représenter la même ressource au niveau retenu pour le traitement. Avant de fusionner, il faut définir ce que l’on veut considérer comme identique : même édition, même manifestation, même œuvre ou autre périmètre.

Les notices peuvent présenter des différences de ponctuation, de translittération ou de complétude sans décrire des ressources différentes. Inversement, deux titres presque identiques peuvent correspondre à des éditions, des supports ou des traductions distincts.

La comparaison utilise plusieurs indices : identifiants, titre, responsabilités, mention d’édition, publication, date et caractéristiques du support. Aucun indice ne doit être considéré comme infaillible. Un identifiant peut être mal attribué ; une date peut être approximative ; un nom peut désigner un homonyme.

Il faut donc séparer la **recherche de candidats** de la **décision de fusion**. Un traitement automatique peut attirer l’attention sur des paires à examiner. La décision dépend ensuite des règles bibliographiques, du contexte et des conséquences sur les exemplaires et les liens.

## Exemple concret

Exemple fictif : deux notices partagent un ISBN et un titre proche. La première décrit un volume de 180 pages ; la seconde une version numérique. Ce désaccord doit être examiné, même si un score automatique est élevé.

Autre cas : deux notices diffèrent seulement par la ponctuation du titre et l’abréviation d’un prénom, mais concordent sur l’édition, l’éditeur, la date et la forme du document. Elles sont de bons candidats à une vérification de doublon.

## Schéma

```text
Notices candidates
      ↓ comparaison de plusieurs critères
Concordances + contradictions + informations manquantes
      ↓ examen documenté
Même ressource / ressources distinctes / cas indécidable
```

## À retenir

1. Un doublon ne se décide pas sur un seul champ.
2. Les identifiants doivent être contrôlés.
3. Les cas ambigus exigent une validation humaine.

## ●● Voir comment

### Utiliser une grille de décision

Pour chaque paire, notez les critères concordants, les différences importantes et les données absentes. Une contradiction sur le support ou l’édition mérite plus d’attention qu’une différence typographique mineure.

Classez le résultat en correspondance confirmée, rejetée ou à examiner. Conservez les identifiants des notices et la justification : une décision explicable est plus utile qu’un score isolé.

## Attention à ne pas confondre

Même titre ne signifie pas même ressource. Même ISBN ne garantit pas que les deux descriptions sont correctes. Deux traductions d’une œuvre peuvent être liées sans être des doublons à fusionner.

Une notice plus courte n’est pas nécessairement mauvaise. La complétude et l’exactitude sont des dimensions différentes ; choisir systématiquement la notice la plus longue peut conserver des erreurs.

## ●●● Approfondir

Une fusion peut affecter les autorités, les exemplaires, les URL et les identifiants déjà diffusés. Elle nécessite donc une règle de conservation des valeurs, une traçabilité et, si possible, un moyen de revenir sur une erreur.

Les seuils automatiques doivent être évalués sur un échantillon représentatif comprenant de vrais doublons et des cas proches mais distincts. Il faut mesurer les faux rapprochements autant que les doublons manqués. Les exemples et la grille proposés ici constituent une méthode de travail pédagogique, pas une norme universelle de dédoublonnage.

## Voir concrètement

Sélectionnez cinq paires de notices : doublons probables, titres proches et éditions différentes. Remplissez une grille de comparaison avant de regarder un éventuel score. Discutez les désaccords avec une autre personne et formulez les règles qui manquaient. Ne réalisez aucune fusion sur le seul résultat de cet exercice.

## Pour aller plus loin

Consultez les règles ISBN pour les différences d’édition et de forme, puis IFLA LRM pour préciser le niveau d’identité recherché. Cette préparation aide à définir une politique locale de dédoublonnage. Conservez les cas limites comme exemples de validation plutôt que de les masquer dans un score moyen.

## Fiches liées

- ISBN : que désigne réellement ce numéro ?
- Qu’est-ce qu’une donnée bibliographique de qualité ?
- Comment comparer deux corpus bibliographiques ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)

Dernière vérification : 2026-11-12

---

# 23. Qu’est-ce qu’une donnée bibliographique de qualité ?

**Qualité & contrôle · 4 min (lecture complète)**

**Tags :** Qualité · Complétude · Cohérence

## En une phrase

Une donnée bibliographique de qualité est suffisamment exacte, complète, cohérente et structurée pour permettre l’identification et la réutilisation.

## ● En 2 minutes

La qualité d’une donnée dépend de son aptitude à servir un usage défini. Pour identifier une publication, une édition exacte et un identifiant fiable sont déterminants. Pour analyser les langues d’un corpus, la présence et l’interprétation du code de langue deviennent centrales.

Plusieurs dimensions se complètent : **exactitude**, **complétude**, **cohérence**, **structure**, **actualité**, **traçabilité** et **possibilité de réutilisation**. Une description peut être riche mais erronée, bien structurée mais ambiguë, ou correcte tout en étant insuffisante pour une analyse particulière.

Les contrôles techniques repèrent certaines erreurs : format invalide, valeur impossible selon une règle, champ requis absent ou lien mal formé. Les contrôles bibliographiques examinent le sens : la date concerne-t-elle la bonne publication ? L’identifiant vise-t-il la bonne ressource ? L’autorité désigne-t-elle la bonne personne ?

Améliorer la qualité ne signifie donc pas remplir tous les champs à tout prix. Il faut prioriser les défauts qui empêchent les usages, éviter d’inventer les informations manquantes et conserver la trace des corrections.

## Exemple concret

Une notice contient un ISBN à la bonne longueur avec une clé correcte, mais cet ISBN appartient à une autre édition. Le contrôle syntaxique réussit ; le contrôle bibliographique échoue.

À l’inverse, une notice sans ISBN peut décrire correctement une publication ancienne qui n’en possède pas. Compter toutes les absences comme des erreurs donnerait ici une mesure trompeuse. Le contrôle doit tenir compte du type de ressource et de ce que l’on peut raisonnablement attendre.

## Schéma

```text
Usage visé
   ↓
Critères de qualité adaptés
   ↓
Contrôles techniques + examen bibliographique
   ↓
Corrections documentées + nouvelle évaluation
```

## À retenir

1. La qualité possède plusieurs dimensions.
2. Une donnée correcte mais mal structurée reste difficile à réutiliser.
3. Les contrôles portent sur le sens autant que sur la forme.

## ●● Voir comment

### Définir des indicateurs utiles

Pour un corpus donné, choisissez quelques critères mesurables : présence d’un titre, cohérence des dates, validité des identifiants, qualité des liens d’autorité. Définissez la population concernée et les exceptions.

Examinez un échantillon des anomalies avant de lancer une correction en masse. Un taux élevé peut révéler une règle mal adaptée plutôt qu’un défaut réel du corpus. Gardez la valeur source et la justification de la correction.

## Attention à ne pas confondre

Validité technique ne signifie pas qualité globale. Une valeur absente n’a pas toujours besoin d’être complétée, et une valeur présente n’est pas forcément exacte.

Un pourcentage de complétude n’est comparable entre deux ensembles que si les périmètres, les définitions et les règles de calcul sont compatibles. Un indicateur unique masque souvent des situations très différentes.

## ●●● Approfondir

Une démarche qualité associe diagnostic, priorisation, correction et suivi. Les contrôles doivent être versionnés : si une règle change, l’évolution d’un indicateur peut refléter la nouvelle règle plutôt qu’une transformation du corpus.

Les corrections automatiques doivent rester proportionnées à la certitude disponible. Normaliser une ponctuation connue n’a pas le même niveau de risque qu’attribuer une autorité à partir d’un nom ambigu. Documenter les seuils, les exceptions et les sources aide à distinguer nettoyage technique, enrichissement et décision bibliographique. Cette démarche doit rester révisable à partir de nouveaux éléments.

## Voir concrètement

Choisissez un usage concret et dix notices. Définissez trois critères de qualité, puis appliquez-les avec leurs exceptions. Comparez un contrôle automatique et une vérification manuelle. Classez les anomalies par conséquence pour l’usage et proposez une correction traçable plutôt qu’un simple objectif de remplissage des champs.

## Pour aller plus loin

Les documentations de formats et d’identifiants donnent des règles vérifiables, mais tous les objectifs qualité ne sont pas normatifs. Associez chaque contrôle à un usage et à une définition. Les fiches sur les identifiants et la comparaison de corpus permettent de tester cette démarche sur des cas concrets.

## Fiches liées

- Pourquoi structurer les données ?
- Pourquoi contrôler les identifiants dans un catalogue ?
- Comment comparer deux corpus bibliographiques ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)

Dernière vérification : 2026-11-12

---

# 24. Pourquoi contrôler les identifiants dans un catalogue ?

**Qualité & contrôle · 4 min (lecture complète)**

**Tags :** Identifiants · Contrôle · Qualité

## En une phrase

Les identifiants facilitent les rapprochements automatiques ; une erreur peut donc propager rapidement une mauvaise correspondance.

## ● En 2 minutes

Les identifiants servent souvent de points d’appui aux traitements automatiques : retrouver une notice, rapprocher deux descriptions ou créer un lien vers une autorité. Une erreur peut donc être réutilisée et propagée beaucoup plus vite qu’une simple faute dans un texte affiché.

Le contrôle comporte plusieurs niveaux. On examine la **forme** : caractères autorisés, longueur et structure. On vérifie, lorsqu’elle existe, la **clé de contrôle**. On regarde ensuite la **cohérence bibliographique** : l’identifiant désigne-t-il la ressource ou l’entité décrite ?

Il faut également connaître la nature de la valeur : identifiant de publication, de notice, d’exemplaire ou d’identité publique. Une valeur correcte mais employée au mauvais niveau peut produire une mauvaise correspondance.

La présence répétée d’un identifiant mérite une analyse, mais n’est pas toujours une anomalie. Plusieurs exemplaires d’une même publication peuvent partager un ISBN ; plusieurs descriptions peuvent reprendre le même identifiant à des fins d’échange. Le contexte doit guider l’interprétation du contrôle.

## Exemple concret

Exemple fictif : un import associe à un livre l’ISBN d’une édition numérique. Le numéro possède une clé correcte et passe un contrôle arithmétique, mais le support de la notice ne correspond pas au produit identifié.

Un autre champ contient « 000123 » comme numéro local. Le convertir en entier transforme la valeur en « 123 » et peut rompre sa correspondance avec le système d’origine. Ce contrôle relève de la conservation de l’identifiant, pas d’un calcul bibliographique.

## Schéma

```text
Identifiant source
  ├── Contrôle de forme
  ├── Clé, si le système en prévoit une
  ├── Objet effectivement désigné
  └── Provenance et statut de la valeur
           ↓
Réutilisation adaptée / anomalie à examiner
```

## À retenir

1. Un identifiant valide peut être mal attribué.
2. Contrôles automatiques et bibliographiques sont complémentaires.
3. Plus l’identifiant automatise, plus sa qualité est critique.

## ●● Voir comment

### Une chaîne de vérification

Conservez d’abord la valeur brute et le nom de son référentiel. Préparez une forme normalisée seulement pour le contrôle ou la comparaison. Appliquez les règles propres au type d’identifiant, puis confrontez les métadonnées de référence à la notice.

Classez les résultats : valeur valide, invalide, non vérifiable ou incohérente avec la ressource. Ces catégories évitent de transformer une absence de réponse du service en preuve d’erreur.

## Attention à ne pas confondre

Une clé correcte n’atteste pas l’attribution à la bonne ressource. L’échec d’ouverture d’une URL peut provenir d’une interruption de service plutôt que d’un identifiant inexistant.

Tous les identifiants n’ont pas une clé, et tous ne sont pas purement numériques. Il faut éviter une règle globale qui supprimerait lettres, ponctuation ou zéros initiaux sans vérifier leur rôle.

## ●●● Approfondir

Un contrôle en volume doit gérer les statuts et les exceptions. Une valeur annulée, obsolète ou redirigée ne doit pas être traitée comme une valeur courante sans examen. Les formats sources peuvent exprimer ces distinctions par des zones, sous-champs ou qualificatifs.

Lorsqu’une correction est effectuée, enregistrez la valeur initiale, la règle appliquée, la source de vérification et la date du contrôle. Le rapport d’anomalies peut ensuite alimenter une vérification humaine. L’automatisation est surtout utile pour détecter des problèmes reproductibles et préparer les dossiers à examiner, pas pour transformer toute ressemblance en certitude.

## Voir concrètement

Préparez un petit lot contenant une valeur correcte, une erreur de saisie, une valeur correcte associée à la mauvaise édition et un numéro local à zéros initiaux. Comparez les résultats des contrôles de forme et de sens. Expliquez quelles anomalies un calcul de clé ne peut pas repérer.

## Pour aller plus loin

La documentation ISBN fournit des règles de structure et d’attribution ; celle de l’ARK Alliance éclaire la résolution et la pérennité. Comparez les contrôles pertinents pour ces deux familles : on ne peut pas appliquer une même validation arithmétique à tous les systèmes d’identifiants.

## Fiches liées

- ISBN : que désigne réellement ce numéro ?
- Comment reconnaître un doublon bibliographique ?
- Qu’est-ce qu’une donnée bibliographique de qualité ?

## Sources

- International ISBN Agency — [ISBN](https://www.isbn-international.org/)
- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)
- ARK Alliance — [About ARKs — structure et gestion pérenne](https://arks.org/about/)

Dernière vérification : 2026-11-12

---

# 25. Comment comparer deux corpus bibliographiques ?

**Qualité & contrôle · 4 min (lecture complète)**

**Tags :** Corpus · Comparaison · Normalisation

## En une phrase

Comparer deux corpus consiste à rechercher les correspondances entre leurs notices en utilisant plusieurs critères puis à examiner les écarts.

## ● En 2 minutes

Comparer deux corpus consiste à établir des correspondances entre leurs descriptions, puis à examiner les différences. Avant de lancer le traitement, il faut définir son objectif : repérer un recouvrement, enrichir des notices, retrouver des identifiants ou préparer un dédoublonnage.

On commence par connaître les périmètres : types de ressources, périodes, formats et niveaux de description. Deux corpus de tailles proches peuvent couvrir des ensembles très différents. Une notice absente des résultats n’est pas forcément absente du fonds : les règles de recherche peuvent l’avoir manquée.

Le rapprochement comprend généralement une préparation des données, une recherche de candidats, une comparaison des critères et une validation. Les identifiants peuvent fournir des candidats fiables, mais il faut aussi traiter les ressources sans identifiant et les valeurs erronées.

La normalisation aide à comparer accents, ponctuation ou formes de dates. Elle doit rester documentée et réversible. Transformer toutes les valeurs en une seule forme simplifiée peut effacer des différences utiles, notamment entre éditions, langues ou supports.

## Exemple concret

Le corpus A comporte « Atlas des rivières : observer les paysages » ; le corpus B abrège le titre et le prénom du responsable. Une comparaison stricte des chaînes ne trouve rien. Une recherche de candidats fondée sur plusieurs éléments propose une paire à examiner.

L’examen de l’édition, de la date et du support permet ensuite de confirmer ou de rejeter la correspondance. Si plusieurs candidats restent plausibles, le résultat doit demeurer ambigu plutôt que devenir une association arbitraire.

## Schéma

```text
A + B → compréhension des formats
      → préparation et normalisation
      → recherche de candidats
      → comparaison et justification
      → correspondances / écarts / ambiguïtés
```

## À retenir

1. Comparer ne signifie pas seulement chercher des égalités exactes.
2. Recherche de candidats et décision finale sont distinctes.
3. La validation humaine reste indispensable.

## ●● Voir comment

### Produire un rapport interprétable

Conservez pour chaque paire les identifiants d’origine, les critères utilisés, les concordances, les contradictions et la décision. Séparez les notices sans candidat de celles qui ont plusieurs candidats.

Testez les règles sur un échantillon annoté avant de traiter l’ensemble. Examinez les faux rapprochements et les correspondances manquées. Le taux global de correspondance ne suffit pas à mesurer la qualité du résultat.

## Attention à ne pas confondre

Un score de similarité n’est pas une décision bibliographique. Une correspondance « un vers plusieurs » n’est pas nécessairement un bug : le niveau de description peut différer entre les sources.

L’absence de correspondance ne prouve pas l’absence de ressource. Enfin, enrichir une notice ne signifie pas remplacer toutes ses valeurs par celles de l’autre corpus sans vérifier leur provenance.

## ●●● Approfondir

La méthode doit gérer les relations un-à-un, un-à-plusieurs et les cas indécidables. Il peut être pertinent de rapprocher des œuvres dans un projet et des manifestations dans un autre ; les critères et les résultats ne seront alors pas comparables.

Pour un enrichissement, définissez quelle source est utilisée pour chaque propriété et comment traiter les conflits. Conservez la date de collecte et la version des règles. La reproductibilité permet de comprendre pourquoi une paire est acceptée lors d’un traitement puis rejetée après une modification du corpus ou de la méthode. Cette grille est une démarche pédagogique à adapter au contexte.

## Voir concrètement

Comparez deux petits échantillons dont vous connaissez le contenu. Établissez d’abord manuellement quelques correspondances de référence. Appliquez ensuite vos règles et analysez les écarts. Produisez trois listes : confirmés, rejetés et à examiner, chacune accompagnée d’une justification et des identifiants sources.

## Pour aller plus loin

Reprenez les fiches sur les doublons, la qualité et les identifiants. Elles correspondent à trois étapes différentes d’un rapprochement. Avant d’augmenter la taille des corpus, constituez un échantillon de référence comprenant correspondances certaines, absences, ambiguïtés et cas proches mais distincts.

## Fiches liées

- Comment reconnaître un doublon bibliographique ?
- Pourquoi contrôler les identifiants dans un catalogue ?
- Qu’est-ce qu’une donnée bibliographique de qualité ?

## Sources

- IFLA — [UNIMARC](https://www.ifla.org/g/unimarc-rg/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)
- International ISBN Agency — [What is an ISBN?](https://www.isbn-international.org/index.php/content/what-isbn/10)

Dernière vérification : 2026-11-12

---

# 26. IFLA LRM : pourquoi parler d’Œuvre, Expression, Manifestation et Item ?

**Transition bibliographique · 4 min (lecture complète)**

**Tags :** IFLA LRM · Œuvre · Expression · Manifestation · Item

## En une phrase

IFLA LRM distingue différentes entités afin de mieux représenter le contenu intellectuel, sa réalisation, sa publication et son exemplaire particulier.

## ● En 2 minutes

**IFLA LRM**, Library Reference Model, est un modèle conceptuel de l’information bibliographique. Il aide à distinguer les entités décrites et leurs relations, au lieu de considérer toute information comme une propriété indifférenciée d’un « livre ».

L’**Œuvre** correspond à une création intellectuelle ou artistique distincte. L’**Expression** en est une réalisation déterminée, par exemple une version linguistique du texte. La **Manifestation** réunit des caractéristiques résultant de la production et de la diffusion de ressources incarnant une ou plusieurs expressions. L’**Item** est un objet particulier exemplifiant une manifestation.

Ces distinctions permettent de séparer une création, ses réalisations, ses éditions ou présentations et les exemplaires conservés. Elles rendent explicites des différences que les lecteurs connaissent déjà lorsqu’ils demandent « ce roman », « sa traduction française », « cette édition » ou « cet exemplaire dédicacé ».

Le modèle ne se limite pas à ces quatre entités : il comprend aussi d’autres entités et relations utiles à l’organisation de l’information. Il ne constitue pas, à lui seul, un format de fichier, un logiciel ou un manuel complet de saisie.

## Exemple concret

Exemple fictif simplifié : un roman constitue une œuvre. Son texte original et une traduction peuvent être analysés comme des expressions distinctes. Une édition imprimée de la traduction constitue une manifestation ; l’exemplaire dédicacé conservé dans une bibliothèque est un item.

Cette représentation est un exercice d’analyse. Dans des cas complexes, comme les compilations ou les ressources composites, le découpage demande de consulter les définitions et les règles applicables plutôt que de suivre automatiquement une chaîne de quatre cases.

## Schéma

```text
Œuvre : création
  ↓ réalisée dans
Expression : réalisation du contenu
  ↓ incorporée dans
Manifestation : caractéristiques de production
  ↓ exemplifiée par
Item : objet particulier
```

## À retenir

1. Une œuvre n’est pas une édition.
2. Une manifestation peut avoir plusieurs items.
3. Les relations entre entités permettent une description plus précise.

## ●● Voir comment

### Associer les informations au bon niveau

Prenez une publication et répartissez les informations : titre de l’œuvre, langue de l’expression, caractéristiques de l’édition, cote ou particularité de l’exemplaire. Les hésitations sont utiles : elles révèlent des termes insuffisamment définis.

Vérifiez ensuite les relations. Une personne peut être liée à une expression comme traducteur sans être le créateur de l’œuvre. Le rôle doit être explicité, pas seulement la présence du nom.

## Attention à ne pas confondre

Une œuvre n’est pas une édition. Une expression n’est pas un fichier au seul motif qu’il existe sous un autre nom informatique. Un item n’est pas toujours réductible à une cote.

Les quatre entités ne correspondent pas automatiquement à quatre notices existantes ni à quatre écrans d’un catalogue. Le modèle sert à analyser les informations, pas à imposer une interface unique.

## ●●● Approfondir

LRM est pensé pour représenter des entités et leurs relations, notamment dans des environnements de données liées. Cela n’impose pas de sérialisation unique : un modèle conceptuel peut être mis en œuvre dans plusieurs architectures techniques.

Passer de notices existantes à cette organisation suppose de déterminer quelles données décrivent quelles entités et comment reconnaître les entités déjà présentes ailleurs. Une traduction, une réédition et une numérisation ne se distinguent pas seulement par leur date. La granularité, les identifiants et les règles de rapprochement doivent être documentés pour éviter des regroupements abusifs.

## Voir concrètement

Choisissez une œuvre disponible dans deux langues et plusieurs éditions. Construisez un schéma avec les informations dont vous disposez réellement, puis associez un exemplaire précis. Signalez les points incertains. Consultez les définitions IFLA avant de décider qu’un changement correspond à une nouvelle expression ou à une nouvelle manifestation.

## Pour aller plus loin

Consultez les documents IFLA LRM accessibles depuis la page des modèles conceptuels de l’IFLA, en particulier les définitions et les relations. Poursuivez ensuite avec RDA-FR pour voir comment un code de description s’appuie sur ces distinctions sans se confondre avec le modèle.

## Fiches liées

- RDA-FR : qu’est-ce qui change dans la description bibliographique ?
- De la notice au graphe : que change la transition bibliographique ?
- Notice bibliographique, notice d’autorité, exemplaire : quelle différence ?

## Sources

- Transition bibliographique — [Programme Transition bibliographique](https://www.transition-bibliographique.fr/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)

Dernière vérification : 2026-11-12

---

# 27. RDA-FR : qu’est-ce qui change dans la description bibliographique ?

**Transition bibliographique · 4 min (lecture complète)**

**Tags :** RDA-FR · Entités · Relations

## En une phrase

RDA-FR fait évoluer la description bibliographique vers une organisation davantage centrée sur les entités, leurs attributs et leurs relations.

## ● En 2 minutes

**RDA-FR** est la transposition française du standard RDA pour le signalement des ressources des bibliothèques. Le code organise la description autour d’entités, d’éléments et de relations, en lien avec les modèles conceptuels bibliographiques.

Cette approche invite à préciser ce que l’on décrit : une œuvre, une expression, une manifestation, un item, une personne ou une autre entité. Elle permet aussi de nommer les relations entre ces éléments au lieu de les laisser implicites dans des chaînes de texte.

Le changement ne se résume pas à déplacer une valeur d’une zone vers une autre. Il concerne les définitions, les sources d’information, les choix de description et les relations à établir. Les règles de catalogage, le format d’encodage et le système documentaire constituent des couches différentes.

Le site dédié au code RDA-FR permet de consulter les instructions et leurs mises à jour. Comme le code évolue, une consigne doit être rattachée à la version ou à la date pertinente. Cette fiche explique les principes ; elle ne remplace pas une instruction de catalogage ni les directives d’application d’une institution.

## Exemple concret

Une publication présente un texte traduit. Une description peut identifier l’œuvre concernée, l’expression dans cette langue, la manifestation publiée et les personnes impliquées avec leurs rôles.

L’auteur de l’œuvre et la personne qui traduit ne jouent pas le même rôle. Les relier sans qualifier les relations ferait perdre une information utile au lecteur et au traitement automatique. L’objectif est de décrire ces responsabilités avec le vocabulaire et les éléments appropriés.

## Schéma

```text
Règles RDA-FR → choix et définition des éléments décrits
                       ↓
Entités + attributs + relations
                       ↓ encodage selon une mise en œuvre
Format d’échange / base / affichage
```

## À retenir

1. RDA-FR ne se réduit pas à de nouvelles règles de saisie.
2. Les relations deviennent centrales.
3. La transition est normative, intellectuelle et technique.

## ●● Voir comment

### Consulter une règle

Commencez par l’entité concernée sur le site du code. Identifiez l’élément ou la relation recherché, lisez sa définition puis les instructions et exemples associés. Vérifiez les mises à jour utiles au contexte.

Traduisez ensuite la consigne dans le format et le profil de votre projet. Ne déduisez pas directement une règle de saisie d’un seul exemple : il peut illustrer un cas particulier.

## Attention à ne pas confondre

RDA-FR n’est pas un format comme UNIMARC, ni une obligation d’utiliser RDF pour chaque fichier. IFLA LRM est un modèle conceptuel ; RDA-FR fournit des instructions de description et d’accès.

Une évolution du code n’implique pas que toutes les notices anciennes doivent être réécrites immédiatement de la même façon. Les stratégies d’application et de reprise des données doivent être précisées par le projet concerné.

## ●●● Approfondir

Une mise en œuvre doit articuler les règles de description, les vocabulaires, les identifiants, l’encodage et les pratiques de contrôle. Une table de correspondance technique ne résout pas à elle seule les ambiguïtés des données antérieures.

Le programme national Transition bibliographique s’est clos à la fin de 2025 ; ses objectifs se poursuivent dans les implémentations et les ressources professionnelles. Les évolutions du code sont à suivre sur le site RDA-FR dédié. Il est donc utile de distinguer l’histoire du programme, les instructions normatives disponibles et le calendrier propre à chaque établissement.

## Voir concrètement

Sur le site RDA-FR, consultez une entité puis une relation qui vous intéresse. Reformulez leur définition et examinez un exemple. Prenez ensuite une notice existante : quelles informations permettent déjà cette description, et lesquelles restent ambiguës ? Notez les questions qui nécessitent une décision éditoriale plutôt qu’une simple conversion de format.

## Pour aller plus loin

Le site du code RDA-FR permet de naviguer par entité, relation et référentiel. Consultez aussi ses mises à jour pour situer une instruction. Le site historique de la Transition bibliographique reste utile pour comprendre le contexte du programme, distinct de la mise en œuvre dans chaque établissement.

## Fiches liées

- IFLA LRM : pourquoi parler d’Œuvre, Expression, Manifestation et Item ?
- De la notice au graphe : que change la transition bibliographique ?
- RDF : comment transformer des données en relations ?

## Sources

- Abes / Bibliothèque nationale de France — [Transition bibliographique — historique et ressources](https://www.transition-bibliographique.fr/)
- RDA-FR — [Code de catalogage RDA-FR](https://code.rdafr.fr/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)

Dernière vérification : 2026-11-12

---

# 28. De la notice au graphe : que change la transition bibliographique ?

**Transition bibliographique · 4 min (lecture complète)**

**Tags :** Transition bibliographique · Graphe · Entités

## En une phrase

La transition bibliographique fait évoluer la représentation des catalogues d’un ensemble de notices relativement autonomes vers un réseau d’entités explicitement reliées.

## ● En 2 minutes

Une notice traditionnelle rassemble de nombreuses informations dans un même ensemble. Elle peut déjà contenir des liens vers des autorités, mais une partie des relations reste exprimée par des textes ou des conventions d’affichage.

Une organisation en **graphe d’entités** rend ces relations plus explicites. Personnes, œuvres, expressions, manifestations, items et sujets peuvent être identifiés séparément et reliés selon des propriétés définies. L’utilisateur peut alors naviguer entre les réalisations d’une œuvre, les rôles d’une personne ou les éditions disponibles.

Cette approche facilite les regroupements et la réutilisation, à condition que les entités et les relations soient correctement établies. La même personne peut intervenir dans plusieurs ressources sans que sa description complète soit recopiée partout. Un lien vers un autre référentiel peut apporter un contexte supplémentaire.

La transition est donc intellectuelle, éditoriale et technique. Transformer automatiquement des zones en nœuds ne suffit pas à décider quelles notices représentent la même œuvre ou la même personne. Les règles d’identification, les sources et les choix de granularité restent indispensables.

## Exemple concret

Dans un catalogue fictif, trois notices décrivent deux éditions du texte original d’un roman et une traduction. Une navigation orientée entités peut relier les manifestations aux expressions concernées, puis ces expressions à l’œuvre.

Le lecteur distingue les langues et les éditions tout en retrouvant leur lien commun. Les exemplaires disponibles restent associés aux publications qu’ils représentent. Un regroupement incorrect pourrait, au contraire, mélanger une adaptation et une traduction : il doit pouvoir être examiné et corrigé.

## Schéma

```text
Personne → crée → Œuvre
                  ├── Expression originale → Manifestations
                  └── Expression traduite  → Manifestations
                                                   ↓
                                                 Items
```

## À retenir

1. La logique évolue de la notice vers le réseau de relations.
2. Les entités peuvent être identifiées séparément.
3. Le graphe facilite l’interopérabilité.

## ●● Voir comment

### Passer d’un écran aux relations

Prenez un groupe de notices proches. Listez les entités que vous pensez reconnaître, puis écrivez les relations en français : « est une traduction de », « est créé par », « exemplifie ». Vérifiez les définitions du modèle utilisé.

Conservez les informations qui justifient chaque rapprochement. Un nom et un titre semblables ne suffisent pas toujours à établir une identité ; signalez les liens proposés mais non confirmés.

## Attention à ne pas confondre

Un graphe de données n’est pas seulement une visualisation interactive. Une flèche sans définition n’explique pas une relation. RDF est un modèle de représentation possible ; il ne constitue pas, à lui seul, le travail de transition bibliographique.

Relier deux descriptions n’oblige pas à fusionner leurs sources. Des informations contradictoires peuvent demander une comparaison et une conservation de leur provenance.

## ●●● Approfondir

La reprise des données nécessite des correspondances entre zones, éléments et entités, mais aussi des décisions de rapprochement. Certaines distinctions n’ont jamais été enregistrées explicitement ; elles ne peuvent pas toujours être déduites sans incertitude.

Une migration progressive peut faire coexister des notices et des entités identifiées. Il faut alors maintenir les liens, les identifiants historiques et les règles de mise à jour. La réussite se mesure aussi par les services rendus : navigation plus compréhensible, regroupements fiables, échanges mieux documentés. Un graphe plus volumineux ne constitue pas, à lui seul, un progrès si les relations restent ambiguës.

## Voir concrètement

À partir de quelques publications d’une même œuvre, dessinez un graphe de cinq à dix nœuds. Donnez un sens précis à chaque flèche et une source à chaque identification. Comparez ce graphe aux notices de départ : quelles relations étaient déjà présentes, lesquelles avez-vous déduites et lesquelles restent à vérifier ?

## Pour aller plus loin

Reprenez IFLA LRM pour le choix des entités, RDA-FR pour les instructions et RDF pour la représentation des énoncés. Ces références traitent des couches complémentaires. Appliquez-les à quelques cas complexes avant d’automatiser le regroupement de notices en entités.

## Fiches liées

- IFLA LRM : pourquoi parler d’Œuvre, Expression, Manifestation et Item ?
- RDA-FR : qu’est-ce qui change dans la description bibliographique ?
- RDF : comment transformer des données en relations ?
- URI et données liées : pourquoi utiliser des identifiants ?

## Sources

- Transition bibliographique — [Programme Transition bibliographique](https://www.transition-bibliographique.fr/)
- W3C — [RDF 1.1 Primer — introduction au modèle de données](https://www.w3.org/TR/rdf11-primer/)
- IFLA — [IFLA’s Bibliographic Conceptual Models — IFLA LRM](https://www.ifla.org/g/bcm-rg/ifla-s-bibliographic-conceptual-models/)
- RDA-FR — [Code de catalogage RDA-FR](https://code.rdafr.fr/)

Dernière vérification : 2026-11-12

---

# 29. Quelles données peut-on récupérer auprès de la BnF ?

**Outils & réutilisation BnF · 4 min (lecture complète)**

**Tags :** BnF · Données · API · Jeux de données

## En une phrase

La BnF met à disposition des métadonnées bibliographiques, des données d’autorité, des données liées et différents services permettant de les interroger ou de les télécharger.

## ● En 2 minutes

La BnF diffuse plusieurs familles de données et plusieurs services. Il faut distinguer les **descriptions de ressources**, les **autorités**, les **données liées**, les **métadonnées de collections numériques** et les **contenus numériques** eux-mêmes.

Les notices bibliographiques permettent notamment d’identifier et de décrire les ressources signalées dans les catalogues. Les autorités organisent les accès aux personnes, collectivités, œuvres, lieux ou sujets. Les métadonnées associées aux documents numérisés décrivent d’autres objets et peuvent conduire à des fichiers ou à des services d’accès.

Les voies de récupération dépendent du jeu de données : recherche structurée, entrepôt de moissonnage, API spécialisée, fichier en volume ou exposition de données liées. Il n’existe donc pas une « API BnF » unique donnant tous les objets dans un même format et avec le même calendrier.

Le portail API et jeux de données permet de partir du besoin puis d’identifier une offre. Il faut lire le périmètre, le format, les modalités d’actualisation et les conditions applicables. Une donnée décrivant un document et l’accès au contenu de ce document constituent deux questions différentes.

## Exemple concret

Un projet veut constituer une bibliographie puis afficher, lorsque c’est possible, un lien vers un document numérisé. La description bibliographique peut venir d’un service du catalogue ; l’accès à la numérisation et à ses métadonnées peut relever d’une autre offre.

Les deux ensembles doivent être reliés avec des identifiants et des relations compris. La présence d’une notice n’implique pas qu’un document numérisé soit disponible, ni qu’il soit librement réutilisable dans tous les contextes.

## Schéma

```text
Besoin
  ├── Décrire une publication → données bibliographiques
  ├── Identifier une entité   → données d’autorité
  ├── Relier des descriptions → données liées
  └── Accéder à une numérisation → métadonnées et services associés
```

## À retenir

1. Il n’existe pas une seule « API BnF ».
2. Le mode d’accès dépend du besoin.
3. Les données peuvent être interrogées ou récupérées en volume.

## ●● Voir comment

### Constituer la fiche d’identité d’une offre

Relevez le nom du jeu, la source, les objets décrits, les formats disponibles et le mode de récupération. Notez si l’offre est une sélection ou un ensemble plus large, et comment les créations et mises à jour sont diffusées.

Identifiez ensuite les conditions et les informations de provenance à conserver. Testez quelques enregistrements représentatifs avant d’organiser une récupération importante.

## Attention à ne pas confondre

Catalogue général, bibliothèque numérique et exposition en données liées ne sont pas des copies strictement équivalentes d’une même base. Leurs objets, leurs identifiants et leurs rythmes de mise à jour peuvent différer.

La licence affichée pour une offre ne doit pas être étendue par supposition à toutes les ressources accessibles par ses liens. Vérifiez les conditions associées aux métadonnées et, séparément, aux contenus.

## ●●● Approfondir

Pour une réutilisation durable, il faut connaître la chaîne de production et de transformation de l’offre choisie. Une notice diffusée dans un format d’échange peut résulter d’une conversion ; certaines informations peuvent être regroupées, qualifiées ou exposées différemment.

Documentez les différences entre la source interrogée, l’export reçu et les données finalement stockées dans votre application. Une source institutionnelle fournit un cadre de confiance, mais chaque traitement doit encore vérifier sa couverture, ses limites et sa compatibilité avec l’usage. Les conditions de réutilisation sont à consulter dans la documentation courante de l’offre, sans les déduire du seul nom de l’institution.

## Voir concrètement

Dans le portail BnF, choisissez deux offres correspondant à des besoins différents. Comparez objets décrits, formats, accès et actualisation. Téléchargez ou consultez un petit exemple de chacune et repérez les identifiants. Expliquez ce qu’il faudrait vérifier avant de relier ces ensembles dans une application.

## Pour aller plus loin

Le portail API et jeux de données de la BnF constitue le point d’entrée pour les offres et leur documentation. Comparez une recherche SRU et un produit bibliographique en fichier. Demandez-vous ce qui change en matière de couverture, de transformation et de suivi des mises à jour.

## Fiches liées

- Une API, à quoi ça sert ?
- SRU : comment interroger un catalogue à distance ?
- OAI-PMH : qu’est-ce que le moissonnage de métadonnées ?
- Comment réutiliser les données de la BnF dans une application ?

## Sources

- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)
- Bibliothèque nationale de France — [Les produits bibliographiques](https://www.bnf.fr/fr/les-produits-bibliographiques)
- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)

Dernière vérification : 2026-11-12

---

# 30. Comment réutiliser les données de la BnF dans une application ?

**Outils & réutilisation BnF · 4 min (lecture complète)**

**Tags :** BnF · API · SRU · OAI-PMH · Réutilisation

## En une phrase

Réutiliser les données de la BnF consiste à choisir le service adapté, récupérer les données, les transformer si nécessaire puis les intégrer à son usage.

## ● En 2 minutes

Réutiliser des données commence par une question concrète : que doit pouvoir faire l’application, sur quelles ressources, avec quel besoin d’actualisation ? Cette étape évite de choisir une interface uniquement parce qu’elle est facile à appeler.

On identifie ensuite l’offre adaptée : recherche de notices, collecte régulière, fichier en volume, autorités, données liées ou service de contenus numériques. La documentation précise les objets, formats, limites et conditions. Un échantillon permet de vérifier que les données répondent réellement au besoin.

La récupération doit être séparée de la transformation. Conservez, autant que possible, une copie source et les identifiants ; documentez les champs sélectionnés, les conversions et les valeurs écartées. Une chaîne de traitement doit signaler les erreurs au lieu de les transformer silencieusement en données manquantes.

L’intégration comprend enfin le contrôle bibliographique, l’affichage, la provenance et la stratégie de mise à jour. Une application qui fonctionne le jour de sa création doit aussi prévoir les modifications de notices, les changements de schéma et les interruptions de service.

## Exemple concret

Exemple fictif : une application présente les publications d’une collection. Un premier prototype récupère quelques descriptions, vérifie leur périmètre, extrait titre, responsabilité et identifiant, puis affiche un lien vers la source.

Avant de généraliser, l’équipe examine les ressources sans identifiant attendu, les titres multiples et les réponses vides. Elle choisit ensuite une stratégie d’actualisation et conserve la date de collecte. Les données locales d’enrichissement restent distinguées de celles reçues de la BnF.

## Schéma

```text
Besoin → offre documentée → échantillon
   → récupération + provenance
   → transformation explicite
   → validation + affichage
   → actualisation et suivi des erreurs
```

## À retenir

1. Commencer par définir le besoin.
2. Lire les formats, limites et conditions d’utilisation.
3. Conserver les identifiants et la provenance.

## ●● Voir comment

### Préparer un premier traitement

- Écrire le besoin et le périmètre en quelques lignes.
- Choisir une source et relever ses conditions d’usage.
- Tester un petit lot comprenant des cas atypiques.
- Définir les correspondances entre source et application.
- Vérifier les résultats et conserver les identifiants.
- Prévoir la reprise après interruption et le suivi des changements.

Pour chaque étape, indiquez ce qui sera contrôlé par le programme et ce qui nécessitera un examen humain.

## Attention à ne pas confondre

Accéder à une API ne dispense pas de vérifier les conditions de réutilisation. Une donnée récupérée n’est pas nécessairement exhaustive ou immédiatement adaptée à un usage particulier.

Ne confondez pas donnée source, valeur transformée et enrichissement local. Une absence dans la réponse peut provenir du périmètre, de la requête ou d’une erreur ; elle ne prouve pas toujours que l’information n’existe pas.

## ●●● Approfondir

Une chaîne reproductible conserve au minimum la source, la requête ou le fichier, la date de collecte et la version des règles de transformation. Les identifiants permettent de suivre les mises à jour sans dépendre seulement des titres affichés.

Pour relancer un traitement sans créer de doublons, définissez une stratégie d’identification et de mise à jour explicite. Prévoyez la gestion des suppressions, les valeurs locales à conserver et les conflits entre versions. Un journal d’erreurs et un échantillon de validation aident à distinguer une panne de récupération d’une modification réelle des données. Ces choix doivent être testés avant une intégration à grande échelle.

## Voir concrètement

Décrivez un prototype utile à votre établissement. Choisissez une offre BnF et constituez un lot de dix ressources. Pour chacune, conservez identifiant, source et date de collecte. Produisez une table des transformations, puis simulez une deuxième collecte : comment reconnaissez-vous les ressources déjà présentes, les modifications et les cas à examiner ?

## Pour aller plus loin

Les documentations BnF, SRU et OAI-PMH permettent de préciser la récupération et l’actualisation. Complétez le prototype par une procédure de contrôle, un journal de traitement et une règle de conservation de la provenance. Vérifiez les conditions courantes de l’offre avant de diffuser votre propre service.

## Fiches liées

- Une API, à quoi ça sert ?
- SRU : comment interroger un catalogue à distance ?
- OAI-PMH : qu’est-ce que le moissonnage de métadonnées ?
- Quelles données peut-on récupérer auprès de la BnF ?

## Sources

- Bibliothèque nationale de France — [API et jeux de données — catalogue des services](https://api.bnf.fr/)
- Bibliothèque nationale de France — [API SRU Catalogue général](https://api.bnf.fr/fr/api-sru-catalogue-general)
- Open Archives Initiative — [The Open Archives Initiative Protocol for Metadata Harvesting](https://www.openarchives.org/OAI/openarchivesprotocol.html)

Dernière vérification : 2026-11-12
