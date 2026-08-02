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

## Déployer sur Vercel

Le dépôt ne contient que les sources : `vercel.json` demande à Vercel de lancer `node build.mjs`, qui écrit le site assemblé dans `public/index.html`. Rien d'autre à configurer.

**Depuis l'interface web**

1. Sur [vercel.com](https://vercel.com), cliquer sur **Add New → Project**.
2. Importer le dépôt `portugal-family-2026` (autoriser Vercel à lire le dépôt privé).
3. Laisser **Framework Preset** sur `Other` et ne rien changer : `vercel.json` fournit déjà `buildCommand: node build.mjs` et `outputDirectory: public`.
4. Cliquer sur **Deploy**. Le site est en ligne en une minute environ.

Aucune variable d'environnement n'est nécessaire.

**Depuis le terminal**

```bash
npm i -g vercel
cd portugal-family-2026
vercel          # déploiement de prévisualisation
vercel --prod   # mise en production
```

Le fichier `vercel.json` fourni ajoute les bons en-têtes de cache et empêche l'indexation par les moteurs de recherche.

Chaque `git push` redéploie automatiquement.

## Modifier le contenu

**Tout le contenu du voyage tient dans un seul fichier : `src/trip.js`.**

Horaires, textes, lieux, adresses, téléphones, liens, réservations, checklists, infos pratiques : tout est là, et rien de tout cela ne se trouve dans les composants.

```bash
# après n'importe quelle modification
python3 build.py
```

Le script régénère `index.html`.

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
├── index.html              ← le site généré, c'est le seul fichier à déployer
├── build.py                ← assemble les sources en index.html
├── vercel.json             ← en-têtes et redirections pour Vercel
└── src/
    ├── trip.js             ← TOUTES les données du voyage
    ├── app.js              ← logique : routeur, compte à rebours, carte, favoris
    ├── style.css           ← direction artistique
    ├── index.template.html ← structure de la page
    └── images.json         ← URLs des photos Wikimedia
```

## Confidentialité

La page porte une balise `noindex`. Aucune donnée n'est envoyée nulle part : favoris, checklists et statuts de réservation restent dans le navigateur de chaque personne, sur son propre appareil. Ils ne se synchronisent pas entre téléphones.

## Crédits

Photos : [Wikimedia Commons](https://commons.wikimedia.org/), licences libres.
Carte : [Leaflet](https://leafletjs.com/) et fonds [OpenStreetMap](https://www.openstreetmap.org/copyright).
Typographies : Cormorant Garamond et Inter (Google Fonts).
