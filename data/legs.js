/* ============================================================================
   LES TROIS ÉTAPES et leur identité chromatique.
   color = teinte principale (vérifiée AA sur le fond papier)
   deep  = variante foncée   light = variante claire, pour les textes sur photo
   ----------------------------------------------------------------------------
   CONVENTIONS DE DONNÉES, valables dans tout le dossier data/ :

     ok: true    information vérifiée sur une source officielle
     ok: false   information non vérifiée → le site affiche « À confirmer »
     place:'clé' renvoie à une entrée de data/places.js
     warn: '…'   encadré d'avertissement affiché sous la fiche du lieu
     img: 'clé'  renvoie à une entrée de data/images.js
   ========================================================================== */

export const LEGS = [
    /* vivid = version saturée, réservée aux cartes d'étapes de l'accueil
       (badge, liseré). Les teintes `color`, plus posées, restent la référence
       AA pour les textes sur fond papier dans le reste du site. */
    { id: 'algarve',  name: 'Algarve',  short: 'Algarve',  from: 1, to: 4,  dates: '9 → 12 août', base: 'Vilamoura / Quarteira', color: '#1A6698', vivid: '#0E8FE0', deep: '#0F4570', light: '#8FCBEC', lat: 37.075, lon: -8.12 },
    { id: 'lisbonne', name: 'Lisbonne', short: 'Lisbonne', from: 5, to: 8,  dates: '13 → 16 août', base: 'Lisbonne', color: '#2F6B4A', vivid: '#16A34A', deep: '#1E4A33', light: '#93D3AC', lat: 38.72, lon: -9.14 },
    { id: 'porto',    name: 'Porto',    short: 'Porto',    from: 9, to: 12, dates: '17 → 20 août', base: 'Porto', color: '#8E2B3F', vivid: '#D62B4E', deep: '#5E1A28', light: '#F2A6B4', lat: 41.15, lon: -8.61 }
  ];
