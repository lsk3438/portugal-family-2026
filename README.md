# Portugal Family Trip 2026

Application web du voyage familial au Portugal, du **9 au 20 août 2026** : Algarve, Lisbonne, Porto.
Pas de connexion, pas de compte : le site s'ouvre directement sur l'accueil.

## Ce que contient l'application

Cinq onglets, pensés pour le téléphone :

| Onglet | Contenu |
|---|---|
| **Accueil** | Compte à rebours jusqu'au 9 août 2026 à 09h00 heure du Portugal, journée en cours, bandeau du jour (météo, coucher du soleil, route, nombre de lieux), progression Algarve → Lisbonne → Porto, les trois étapes |
| **Programme** | Les 12 journées, filtrables par étape, chacune ouvrable en détail : bandeau photo, déroulé horaire, fiches de lieux — adresse, horaires, tarifs, téléphone et liens visibles directement, sans clic — « à prévoir aujourd'hui » |
| **Carte** | Tous les lieux épinglés, filtrables par étape et par catégorie, itinéraire général, lien Google Maps sur chaque point |
| **Participants** | Les neuf voyageurs du séjour |
| **Infos** | Logements, voitures, transports, urgences, documents, météo et la liste complète de ce qui reste à confirmer |

Fonctionne hors connexion pour l'interface une fois la page chargée ; les photos, la carte et les polices ont besoin du réseau. Installable sur l'écran d'accueil (manifeste web inclus).

## Direction artistique

- **Une couleur par région**, appliquée aux bordures, badges, pastilles, boutons et éléments actifs : Algarve bleu Atlantique `#1A6698`, Lisbonne vert `#2F6B4A`, Porto bordeaux `#8E2B3F`. La bascule d'une région à l'autre est animée (`@property` sur `--accent`). Chaque teinte est vérifiée WCAG AA sur le fond papier (5.83 / 5.97 / 7.72).
- **Fond azulejo** : un carreau géométrique dessiné en SVG, appliqué en masque pour qu'il prenne la couleur de la région. Fixe, opacité respirante entre 10 et 17 %, halo mouvant, parallaxe au défilement. Tout se coupe si le système demande moins d'animations.
- **Bandeau d'ouverture** : douze photographies libres de droits, quatre par région, en fondu de sept secondes. Seule la première part avec la page ; les suivantes sont préchargées une par une, et la couleur d'accent du site suit la région affichée.
- **Ambiance sonore** : « Chiado » de Jahzzar, CC BY-SA 3.0, avec repli sur une ambiance synthétisée en Web Audio si le fichier ne se charge pas. Démarrage automatique tenté, puis au premier geste — les navigateurs mobiles refusent toujours le premier.
- **Fiches Détails** : « Voir le récit » ouvre un panneau plein écran avec une grande photo, d'autres images du lieu et les moments du séjour où il revient — un complément, jamais un endroit où cacher une information. Adresse, horaires, tarifs, téléphone et liens restent affichés directement sur la fiche du jour, sans clic supplémentaire. Les rubriques non vérifiées ne sont pas inventées : elles sont listées dans « Reste à compléter ».
- **Photos des restaurants** : dix restaurants sans site officiel ni photo Wikimedia utilisent une photo reprise de leur fiche Tripadvisor, à la demande explicite du foyer — ce ne sont pas des images sous licence libre, seulement les seules disponibles pour ces adresses ; le risque est assumé pour un usage privé, non indexé. Un onzième lieu (ALDI Quarteira) reste sans photo et reçoit une vignette dessinée.
- **Micro-interactions** : élévation et bordure teintée au survol (souris uniquement), enfoncement au doigt sur téléphone.

## Architecture

Le projet est découpé comme un vrai projet front : le contenu d'un côté, le code de l'autre, et jamais de fichier fourre-tout.

```
portugal-family-2026/
├── index.html              ← la page, servie telle quelle par Vercel
├── manifest.json           ← installation sur l'écran d'accueil
├── package.json            ← esbuild, uniquement pour le fichier unique
├── build.mjs               ← replie le site en un seul fichier (public/)
│
├── data/                   ← TOUT LE CONTENU DU VOYAGE, zéro logique
│   ├── trip.js             ← métadonnées + recomposition de l'objet TRIP
│   ├── legs.js             ← les trois étapes et leurs couleurs
│   ├── days.js             ← les douze journées
│   ├── places.js           ← les 52 lieux (adresses, tél., horaires, tarifs)
│   ├── infos.js            ← infos pratiques + « à confirmer »
│   ├── images.js           ← URLs des photos Wikimedia
│   ├── hero.js             ← les douze médias du bandeau d'accueil
│   └── travellers.js       ← les neuf voyageurs  ⚠ données personnelles
│
└── assets/
    ├── icon.svg
    ├── css/
    │   ├── tokens.css      ← couleurs, espacements, ombres, typographies
    │   ├── base.css        ← remise à zéro, typographie, fond azulejo
    │   ├── layout.css      ← en-tête, onglets, vues, sections
    │   ├── components.css  ← cartes, fiches, listes, bandeaux
    │   ├── ambience.css    ← bouton d'ambiance sonore
    │   ├── responsive.css  ← élargissement tablette et bureau
    │   └── interactions.css← survol, pression, animations réduites, impression
    └── js/
        ├── main.js         ← point d'entrée : 20 lignes
        ├── core/           ← dom · icons · store · toast · helpers · router · events
        ├── features/       ← countdown · weather · ambience · reveal
        │                     details · heroreel
        └── views/          ← home · programme · day · map · participants · infos
```

**Modules ES natifs.** Chaque fichier déclare ce dont il a besoin avec `import` et ce qu'il offre avec `export`. Aucun ordre de balises `<script>` à respecter, aucune variable globale, aucune étape de compilation pour mettre le site en ligne : le navigateur résout les dépendances tout seul.

**Réutiliser le site pour un autre voyage** revient à remplacer le contenu de `data/`. Le reste ne bouge pas.

**Ajouter un jour 13** revient à ajouter un objet dans `data/days.js`. Aucune page à créer : les journées, les filtres, la carte, le compte à rebours et le pager se recalculent à partir des données.

## Les deux formes du site

| Fichier | À quoi il sert |
|---|---|
| `index.html` + `assets/` + `data/` | Le site tel qu'il est servi en ligne. Modules ES : il lui faut un serveur HTTP, il ne s'ouvre pas depuis le disque. |
| `public/index.html` (212 Ko) | Le site entier replié dans un seul fichier par `node build.mjs`. À envoyer par message, ou à ouvrir hors connexion. |

Pour travailler en local :

```bash
npm install        # une seule fois, pour esbuild
npm run dev        # sert le dossier sur http://localhost:8000
npm run build      # régénère public/index.html
```

## Mise en ligne — Vercel

Le dépôt est **privé** : il contient l'adresse du logement et les noms des neuf participants, dont des mineurs. GitHub Pages n'accepte pas les dépôts privés sur le plan gratuit — Vercel si, et gratuitement.

1. Sur [vercel.com](https://vercel.com), se connecter avec le compte GitHub.
2. **Add New → Project**, importer `portugal-family-2026`. Autoriser Vercel à lire le dépôt privé.
3. Ne rien changer : `vercel.json` demande de servir la racine telle quelle, sans build. Aucune variable d'environnement.
4. **Deploy**. Une minute plus tard, l'adresse en `.vercel.app` est prête à être partagée.

Chaque `git push` sur `main` redéploie automatiquement.

Le site n'est pas indexé (`noindex, nofollow` en balise et en en-tête HTTP), mais **il reste accessible à qui possède l'adresse**. Ne pas la publier ailleurs que dans la conversation familiale.

**Si le dépôt devait redevenir public**, il faudrait d'abord vider `data/travellers.js` et retirer l'adresse exacte de la villa dans `data/places.js`.

## Modifier le contenu

**Tout le contenu du voyage tient dans le dossier `data/`, et nulle part ailleurs.**

Horaires, textes, lieux, adresses, téléphones, liens, réservations, infos pratiques : tout est là, et rien de tout cela ne se trouve dans les composants.

Rien à recompiler pour mettre le site en ligne : Vercel sert `data/` directement. `node build.mjs` ne sert qu'à régénérer la version « fichier unique ».

### Conventions des fichiers de données

- `ok: true` — information vérifiée sur une source officielle, affichée telle quelle.
- `ok: false` — information non vérifiée : le site affiche **À confirmer** en doré.
- `place: 'clé'` — renvoie à une entrée de `data/places.js`, qui fournit photo, adresse, téléphone, horaires, tarifs et liens.
- `warn: '…'` — encadré d'avertissement affiché sous la fiche du lieu.

### Changer un horaire

Dans `data/days.js`, chaque journée contient une liste `items` :

```js
{ t: '10h30', k: 'route', title: 'Départ pour Loulé', text: "…", place: 'loule', todo: 'À réserver' }
```

`t` est l'heure affichée et sert aussi au compte à rebours « prochaine étape ».
`k` détermine l'icône : `reveil`, `repas`, `route`, `visite`, `plage`, `courses`, `libre`, `soir`.

### Ajouter un lieu

Ajouter une entrée dans `data/places.js`, puis y faire référence depuis une journée avec `place: 'maCle'`.
Pour la photo, ajouter une entrée dans `data/images.js` avec une URL Wikimedia Commons (`card` et `hero`), puis indiquer `img: 'maCle'`.

## Confidentialité

La page porte une balise `noindex, nofollow` et Vercel ajoute l'en-tête HTTP correspondant : le site ne remonte pas dans les moteurs de recherche. Aucune donnée n'est envoyée nulle part — listes du jour et statuts de réservation restent dans le navigateur de chaque personne, sur son propre appareil, et ne se synchronisent pas entre téléphones.

**Ce dépôt est privé, et doit le rester.** Il contient :

- l'adresse exacte du logement, à côté des dates où il est occupé ;
- les noms complets de neuf personnes, dont quatre enfants ;
- à terme, le code Wi-Fi, le code de porte et les contacts sur place.

Ces informations sont utiles dans le site et n'ont rien à faire sur un dépôt public : un commit publié reste dans l'historique même après suppression.

## Crédits

Photos : [Wikimedia Commons](https://commons.wikimedia.org/), licences libres. Les crédits exacts des douze photos du bandeau d'accueil sont dans `data/hero.js` et s'affichent sous chaque image. Dix photos de restaurants viennent de leur fiche Tripadvisor respective (voir « Photos des restaurants » plus haut) — ce ne sont pas des images sous licence libre.

Musique : « Chiado », de [Jahzzar](https://archive.org/details/Paris_Lisboa-11367), album « Paris, Lisboa », sous licence CC BY-SA 3.0. **L'attribution affichée dans le pied de page est exigée par la licence : la retirer rendrait l'usage illicite.** Pour utiliser un autre morceau, déposer le fichier dans `assets/audio/ambiance.mp3` — il est essayé en premier.
Carte : [Leaflet](https://leafletjs.com/) et fonds [OpenStreetMap](https://www.openstreetmap.org/copyright).
Typographies : Cormorant Garamond et Inter (Google Fonts).
