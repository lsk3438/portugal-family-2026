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

export function setAccent(leg){
  const l = typeof leg === 'string' ? legOf(leg) : leg;
  const root = document.documentElement.style;
  root.setProperty('--accent',   l ? l.color : '#1A6698');
  root.setProperty('--accent-d', l ? l.deep  : '#0F4570');
  root.setProperty('--accent-l', l ? l.light : '#8FCBEC');
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', '#FBF8F3');
}
