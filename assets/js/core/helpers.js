/* ====================================================================
   Accès aux données du voyage et bascule de couleur par région.
   ==================================================================== */

import { TRIP } from '../../../data/trip.js';
import { IMAGES } from '../../../data/images.js';
import { esc } from './dom.js';

/* ------------------------------------------------------------- helpers */
export const img = (key, size) => (key && IMAGES[key]) ? IMAGES[key][size || 'card'] : null;
export const legOf = id => TRIP.legs.find(l => l.id === id);
export const legOfDay = d => legOf(d.leg);
export const dayByN = n => TRIP.days.find(d => d.n === n);
export const placeOf = k => (k && TRIP.places[k]) ? TRIP.places[k] : null;
export const tbc = '<span class="tbc">À confirmer</span>';
export const field = f => (f && f.ok && f.v) ? esc(f.v) : tbc;
export const latlng = u => { const m = /query=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/.exec(u||''); return m ? [ +m[1], +m[2] ] : null; };

/* ------------------------------------------------- à quelle étape appartient
   un lieu : la première journée qui le cite fait foi. */
const LEG_BY_PLACE = {};
export function legOfPlace(key){
  if (!LEG_BY_PLACE.__built){
    TRIP.days.forEach(d => d.items.forEach(it => {
      if (it.place && !LEG_BY_PLACE[it.place]) LEG_BY_PLACE[it.place] = d.leg;
    }));
    LEG_BY_PLACE.__built = true;
  }
  return legOf(LEG_BY_PLACE[key]) || TRIP.legs[0];
}

/* ------------------------------------------------------------- vignettes
   Onze lieux — les restaurants, pour l'essentiel — n'ont aucune photo sous
   licence libre : Wikimedia ne documente pas les tascas, et reprendre une
   image de Tripadvisor ou d'Instagram serait une contrefaçon. Plutôt qu'un
   trou dans la mise en page, ces lieux reçoivent une vignette composée :
   carreau azulejo, couleur de leur région, initiale du nom. Le jour où une
   vraie photo existe, il suffit d'ajouter la clé dans data/images.js. */
export function placeArt(key, p){
  const leg = legOfPlace(key);
  // on retire les mots de genre pour tomber sur la vraie initiale du nom :
  // « Restaurante O Cesteiro » donne C, pas R ni O
  let nom = (p.name || '?');
  for (let i = 0; i < 4; i++) nom = nom.replace(/^(Restaurante|Restaurant|Adega|Taberna|Tasco|Casa|O|A|Os|As|do|da|de)\s+/i, '');
  const initial = (nom.trim() || p.name || '?').charAt(0).toUpperCase();
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>` +
      `<rect width='400' height='400' fill='${leg.deep}'/>` +
      `<g fill='none' stroke='${leg.light}' stroke-width='7' opacity='.34'>` +
        `<circle cx='0' cy='0' r='140'/><circle cx='400' cy='0' r='140'/>` +
        `<circle cx='0' cy='400' r='140'/><circle cx='400' cy='400' r='140'/>` +
        `<path d='M200 44 L356 200 L200 356 L44 200 Z'/>` +
        `<path d='M200 110 Q242 200 200 290 Q158 200 200 110 Z'/>` +
        `<path d='M110 200 Q200 242 290 200 Q200 158 110 200 Z'/>` +
      `</g>` +
      `<text x='200' y='268' font-size='190' text-anchor='middle' ` +
            `font-family='Georgia, serif' fill='${leg.light}' opacity='.92'>${esc(initial)}</text>` +
    `</svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/** Rend la balise image d'un lieu : la photo si elle existe, la vignette sinon. */
export function placeThumb(key, size, cls){
  const p = placeOf(key); if (!p) return '';
  const src = p.img ? img(p.img, size) : null;
  return `<img class="${cls}${src ? '' : ' is-art'}" src="${src || placeArt(key, p)}" alt="" loading="lazy">`;
}

export function setAccent(leg){
  const l = typeof leg === 'string' ? legOf(leg) : leg;
  const root = document.documentElement.style;
  root.setProperty('--accent',   l ? l.color : '#1A6698');
  root.setProperty('--accent-d', l ? l.deep  : '#0F4570');
  root.setProperty('--accent-l', l ? l.light : '#8FCBEC');
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', '#FBF8F3');
}
