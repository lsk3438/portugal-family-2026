# Portugal Family Trip 2026

Application web du voyage familial au Portugal, du **9 au 20 août 2026** : Algarve, Lisbonne, Porto.
Pas de connexion, pas de vidéo, pas de compte : le site s'ouvre directement sur l'accueil.

## Ce que contient l'application

Cinq onglets, pensés pour le téléphone :

| Onglet | Contenu |
|---|---|
| **Accueil** | Compte à rebours jusqu'au 9 août 2026 à 09h00 heure du Portugal, journée en cours, bandeau du jour (météo, coucher du soleil, route, nombre de lieux), progression Algarve → Lisbonne → Porto, les trois étapes |
| **Programme** | Les 12 journées, filtrables par étape, chacune ouvrable en détail : bandeau photo, déroulé horaire, fiches de lieux, « à prévoir aujourd'hui » |
| **Carte** | Tous les lieux épinglés, filtrables par étape et par catégorie, itinéraire général, lien Google Maps sur chaque point |
| **Réservations** | Les 17 réservations à faire, avec statut cliquable : à réserver → en attente → confirmé |
| **Infos** | Logements, voitures, transports, urgences, documents, météo et la liste complète de ce qui reste à confirmer |

Fonctionne hors connexion pour l'interface une fois la page chargée ; les photos, la carte et les polices ont besoin du réseau. Installable sur l'écran d'accueil (manifeste web inclus).

## Direction artistique

- **Une couleur par région**, appliquée aux bordures, badges, pastilles, boutons et éléments actifs : Algarve bleu Atlantique `#1A6698`, Lisbonne vert `#2F6B4A`, Porto bordeaux `#8E2B3F`. La bascule d'une région à l'autre est animée (`@property` sur `--accent`). Chaque teinte est vérifiée WCAG AA sur le fond papier (5.83 / 5.97 / 7.72).
- **Fond azulejo** : un carreau géométrique dessiné en SVG, appliqué en masque pour qu'il prenne la couleur de la région. Fixe, opacité 7,5 %, léger parallaxe au défilement, dérive très lente. Désactivé si le système demande moins d'animations.
- **Ambiance sonore** : synthétisée dans le navigateur avec l'API Web Audio — ressac de l'Atlantique (bruit brun filtré, amplitude respirante) et corde pincée en mi phrygien. Aucun fichier audio, aucune question de droits. Le son ne démarre jamais seul : le bouton flottant pulse trois fois puis se tait.
- **Micro-interactions** : élévation et bordure teintée au survol (souris uniquement), enfoncement au doigt sur téléphone.

## Architecture

Le projet est découpé comme un vrai projet front : le contenu d'un côté, le code de l'autre, et jamais de fichier fourre-tout.

```
portugal-family-2026/
├── index.html              ← la page, servie telle quelle par GitHub Pages
├── manifest.json           ← installation sur l'écran d'accueil
├── package.json            ← esbuild, uniquement pour le fichier unique
├── build.mjs               ← replie le site en un seul fichier (public/)
│
├── data/                   ← TOUT LE CONTENU DU VOYAGE, zéro logique
│   ├── trip.js             ← métadonnées + recomposition de l'objet TRIP
│   ├── legs.js             ← les trois étapes et leurs couleurs
│   ├── days.js             ← les douze journées
│   ├── places.js           ← les 51 lieux (adresses, tél., horaires, tarifs)
│   ├── bookings.js         ← les réservations
│   ├── infos.js            ← infos pratiques + « à confirmer »
│   └── images.js           ← URLs des photos Wikimedia
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
        └── views/          ← home · programme · day · map · bookings · infos
```

**Modules ES natifs.** Chaque fichier déclare ce dont il a besoin avec `import` et ce qu'il offre avec `export`. Aucun ordre de balises `<script>` à respecter, aucune variable globale, aucune étape de compilation pour mettre le site en ligne : le navigateur résout les dépendances tout seul.

**Réutiliser le site pour un autre voyage** revient à remplacer le contenu de `data/`. Le reste ne bouge pas.

**Ajouter un jour 13** revient à ajouter un objet dans `data/days.js`. Aucune page à créer : les journées, les filtres, la carte, le compte à rebours et le pager se recalculent à partir des données.

## Les deux formes du site

| Fichier | À quoi il sert |
|---|---|
| `index.html` + `assets/` + `data/` | Le site tel qu'il est servi en ligne. Modules ES : il lui faut un serveur HTTP, il ne s'ouvre pas depuis le disque. |
| `public/index.html` (187 Ko) | Le site entier replié dans un seul fichier par `node build.mjs`. À envoyer par message, à ouvrir hors connexion, ou à déployer sur Vercel. |

Pour travailler en local :

```bash
npm install        # une seule fois, pour esbuild
npm run dev        # sert le dossier sur http://localhost:8000
npm run build      # régénère public/index.html
```

## Mise en ligne — GitHub Pages

Pas de GitHub Actions, pas de build à distance : le dépôt contient déjà `index.html` et les fichiers de `assets/` et `data/` qu'il charge, GitHub les sert tels quels.

**Réglage à faire une seule fois**

1. Le dépôt doit être **public** : *Settings → General → Danger Zone → Change repository visibility*. GitHub Pages n'est pas disponible sur les dépôts privés du plan gratuit.
2. *Settings → Pages → Build and deployment → Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis *Save*.
3. Recharger la page au bout d'une minute : l'adresse s'affiche en haut.

Adresse finale : `https://lsk3438.github.io/portugal-family-2026/`

Ensuite, chaque modification poussée sur `main` remet le site à jour toute seule.

Le fichier `.nojekyll` désactive le préprocesseur Jekyll de GitHub, qui n'a rien à faire ici.

**Alternative : Vercel**

Le fichier `vercel.json` est conservé au cas où. Il permet d'héberger le site **sans rendre le dépôt public** : sur [vercel.com](https://vercel.com), *Add New → Project*, importer le dépôt, ne rien changer, *Deploy*. `vercel.json` fournit déjà `buildCommand: node build.mjs` et `outputDirectory: public`, et ajoute les en-têtes qui empêchent l'indexation par les moteurs de recherche.

## Modifier le contenu

**Tout le contenu du voyage tient dans le dossier `data/`, et nulle part ailleurs.**

Horaires, textes, lieux, adresses, téléphones, liens, réservations, infos pratiques : tout est là, et rien de tout cela ne se trouve dans les composants.

Rien à recompiler pour mettre le site en ligne : GitHub Pages sert `data/` directement. `node build.mjs` ne sert qu'à régénérer la version « fichier unique ».

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

La page porte une balise `noindex, nofollow` : elle ne remonte pas dans les moteurs de recherche. Aucune donnée n'est envoyée nulle part — favoris, listes du jour et statuts de réservation restent dans le navigateur de chaque personne, sur son propre appareil, et ne se synchronisent pas entre téléphones.

**Ce dépôt est public**, condition imposée par GitHub Pages sur le plan gratuit. Concrètement, tout le contenu de `data/` est lisible par n'importe qui sur github.com. Aujourd'hui ce fichier ne contient rien de personnel : les adresses des logements sont en « À confirmer » et les numéros de téléphone sont ceux de restaurants et de monuments, tous publics.

À ne donc **pas** écrire dans `data/` tant que le dépôt est public :

- l'adresse exacte des logements, associée aux dates d'absence ;
- les numéros de téléphone personnels des participants ;
- les références de vol, de location de voiture, de police d'assurance ;
- les codes de boîte à clés, les identifiants Wi-Fi.

Ces informations-là se transmettent par message. Si elles doivent figurer dans le site, il faut d'abord repasser le dépôt en privé et l'héberger sur Vercel, qui accepte les dépôts privés gratuitement.

## Crédits

Photos : [Wikimedia Commons](https://commons.wikimedia.org/), licences libres.
Carte : [Leaflet](https://leafletjs.com/) et fonds [OpenStreetMap](https://www.openstreetmap.org/copyright).
Typographies : Cormorant Garamond et Inter (Google Fonts).
