# Portugal Family Trip 2026

Application web du voyage familial au Portugal, du **9 au 20 août 2026** : Algarve, Lisbonne, Porto.
Pas de connexion, pas de vidéo, pas de compte : le site s'ouvre directement sur l'accueil.

## Ce que contient l'application

Cinq onglets, pensés pour le téléphone :

| Onglet | Contenu |
|---|---|
| **Accueil** | Compte à rebours jusqu'au 9 août 2026 à 09h00 heure du Portugal, journée en cours, prochaine étape, progression Algarve → Lisbonne → Porto, les trois étapes, état des réservations |
| **Programme** | Les 12 journées, filtrables par étape, chacune ouvrable en détail : déroulé horaire, fiches de lieux, listes de courses, « à prendre aujourd'hui » |
| **Carte** | Tous les lieux épinglés, filtrables par étape et par catégorie, itinéraire général, lien Google Maps sur chaque point |
| **Réservations** | Les 17 réservations à faire, avec statut cliquable : à réserver → en attente → confirmé |
| **Infos** | Logements, voitures, transports, urgences, documents, météo, checklist générale et la liste complète de ce qui reste à confirmer |

Fonctionne hors connexion pour l'interface une fois la page chargée ; les photos, la carte et les polices ont besoin du réseau. Installable sur l'écran d'accueil (manifeste web inclus).

## Lancer le site en local

Le site est un fichier unique. Il suffit d'ouvrir `index.html` dans un navigateur.

Pour un rendu strictement identique à la production (la carte et les polices se chargent mieux via HTTP) :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne — GitHub Pages

C'est la méthode retenue. Le dépôt ne contient que les sources ; le fichier `.github/workflows/pages.yml` lance `node build.mjs` à chaque `git push` sur `main`, puis publie le dossier `public/`.

**Réglage à faire une seule fois**

1. Le dépôt doit être **public** : *Settings → General → Danger Zone → Change repository visibility*. GitHub Pages n'est pas disponible sur les dépôts privés du plan gratuit.
2. *Settings → Pages → Build and deployment → Source* : choisir **GitHub Actions** (et non « Deploy from a branch »).
3. Onglet *Actions* : le workflow « Déploiement GitHub Pages » se lance. Au bout d'une à deux minutes, l'adresse apparaît dans *Settings → Pages*.

Adresse finale : `https://lsk3438.github.io/portugal-family-2026/`

Ensuite, chaque modification poussée sur `main` remet le site à jour toute seule.

**Alternative : Vercel**

Le fichier `vercel.json` est conservé au cas où. Il permet d'héberger le site **sans rendre le dépôt public** : sur [vercel.com](https://vercel.com), *Add New → Project*, importer le dépôt, ne rien changer, *Deploy*. `vercel.json` fournit déjà `buildCommand: node build.mjs` et `outputDirectory: public`, et ajoute les en-têtes qui empêchent l'indexation par les moteurs de recherche.

## Modifier le contenu

**Tout le contenu du voyage tient dans un seul fichier : `src/trip.js`.**

Horaires, textes, lieux, adresses, téléphones, liens, réservations, checklists, infos pratiques : tout est là, et rien de tout cela ne se trouve dans les composants.

```bash
# après n'importe quelle modification
node build.mjs     # génère public/index.html — c'est ce que lance GitHub Pages
python3 build.py   # équivalent en Python, génère index.html à la racine
```

Les deux scripts produisent le même site ; seul `build.mjs` est utilisé par le déploiement automatique.

### Conventions du fichier de données

- `ok: true` — information vérifiée sur une source officielle, affichée telle quelle.
- `ok: false` — information non vérifiée : le site affiche **À confirmer** en doré.
- `place: 'clé'` — renvoie à une entrée de `TRIP.places`, qui fournit photo, adresse, téléphone, horaires, tarifs et liens.
- `warn: '…'` — encadré d'avertissement affiché sous la fiche du lieu.

### Changer un horaire

Dans `TRIP.days`, chaque journée contient une liste `items` :

```js
{ t: '10h30', k: 'route', title: 'Départ pour Loulé', text: "…", place: 'loule', todo: 'À réserver' }
```

`t` est l'heure affichée et sert aussi au compte à rebours « prochaine étape ».
`k` détermine l'icône : `reveil`, `repas`, `route`, `visite`, `plage`, `courses`, `libre`, `soir`.

### Ajouter un lieu

Ajouter une entrée dans `TRIP.places`, puis y faire référence depuis une journée avec `place: 'maCle'`.
Pour la photo, ajouter une entrée dans `src/images.json` avec une URL Wikimedia Commons (`card` et `hero`), puis indiquer `img: 'maCle'`.

## Structure

```
├── .github/workflows/
│   └── pages.yml           ← construit et publie le site sur GitHub Pages
├── build.mjs               ← assemble les sources en public/index.html
├── build.py                ← même chose en Python, sort index.html à la racine
├── vercel.json             ← config de secours pour un hébergement Vercel
└── src/
    ├── trip.js             ← TOUTES les données du voyage
    ├── app.js              ← logique : routeur, compte à rebours, carte, favoris
    ├── style.css           ← direction artistique
    ├── index.template.html ← structure de la page
    └── images.json         ← URLs des photos Wikimedia
```

## Confidentialité

La page porte une balise `noindex, nofollow` : elle ne remonte pas dans les moteurs de recherche. Aucune donnée n'est envoyée nulle part — favoris, checklists et statuts de réservation restent dans le navigateur de chaque personne, sur son propre appareil, et ne se synchronisent pas entre téléphones.

**Ce dépôt est public**, condition imposée par GitHub Pages sur le plan gratuit. Concrètement, tout le contenu de `src/trip.js` est lisible par n'importe qui sur github.com. Aujourd'hui ce fichier ne contient rien de personnel : les adresses des logements sont en « À confirmer » et les numéros de téléphone sont ceux de restaurants et de monuments, tous publics.

À ne donc **pas** écrire dans `src/trip.js` tant que le dépôt est public :

- l'adresse exacte des logements, associée aux dates d'absence ;
- les numéros de téléphone personnels des participants ;
- les références de vol, de location de voiture, de police d'assurance ;
- les codes de boîte à clés, les identifiants Wi-Fi.

Ces informations-là se transmettent par message. Si elles doivent figurer dans le site, il faut d'abord repasser le dépôt en privé et l'héberger sur Vercel, qui accepte les dépôts privés gratuitement.

## Crédits

Photos : [Wikimedia Commons](https://commons.wikimedia.org/), licences libres.
Carte : [Leaflet](https://leafletjs.com/) et fonds [OpenStreetMap](https://www.openstreetmap.org/copyright).
Typographies : Cormorant Garamond et Inter (Google Fonts).
