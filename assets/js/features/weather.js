/* ====================================================================
   Météo réelle via Open-Meteo, sans clé d'API.
   Le service couvre environ 16 jours : au-delà on n'affiche rien
   plutôt que d'inventer une valeur.
   ==================================================================== */

import { $$ } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { legOf } from '../core/helpers.js';

/* ======================================================================
   MÉTÉO — prévisions réelles via Open-Meteo, sans clé d'API.
   Le service couvre environ 16 jours : au-delà, on n'affiche rien plutôt
   que d'inventer une valeur.
   ====================================================================== */
const WX = {};                       // cache mémoire : { legId: {date: {...}} }
export function wxIcon(code){
  if (code === 0) return I.wxSun;
  if (code <= 2) return I.wxPart;
  if (code <= 48) return I.wxCloud;
  if (code >= 95) return I.wxStorm;
  if (code >= 51) return I.wxRain;
  return I.wxCloud;
}
export function wxLabel(code){
  if (code === 0) return 'Ciel dégagé';
  if (code <= 2) return 'Éclaircies';
  if (code <= 3) return 'Couvert';
  if (code <= 48) return 'Brouillard';
  if (code <= 57) return 'Bruine';
  if (code <= 67) return 'Pluie';
  if (code <= 82) return 'Averses';
  if (code >= 95) return 'Orage';
  return 'Variable';
}
export function wxFetch(leg){
  if (WX[leg.id]) return Promise.resolve(WX[leg.id]);
  const days = TRIP.days.filter(d => d.leg === leg.id).map(d => d.date).sort();
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + leg.lat + '&longitude=' + leg.lon +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
    '&timezone=Europe%2FLisbon&start_date=' + days[0] + '&end_date=' + days[days.length - 1];
  return fetch(url).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
    const out = {};
    (j.daily.time || []).forEach((t, i) => {
      out[t] = {
        code: j.daily.weather_code[i],
        max: Math.round(j.daily.temperature_2m_max[i]),
        min: Math.round(j.daily.temperature_2m_min[i]),
        rain: j.daily.precipitation_probability_max ? j.daily.precipitation_probability_max[i] : null
      };
    });
    WX[leg.id] = out;
    return out;
  }).catch(() => { WX[leg.id] = { __error: true }; return WX[leg.id]; });
}
export function wxHTML(w, muted){
  if (!w) return '';
  return '<span class="wx' + (muted ? ' wx--muted' : '') + '" title="' + wxLabel(w.code) + '">' +
    wxIcon(w.code) + '<b>' + w.max + '°</b><small>/ ' + w.min + '°</small>' +
    (w.rain != null && w.rain >= 30 ? '<small>· ' + w.rain + ' %</small>' : '') + '</span>';
}
/** Grand format, pour le bandeau de l'accueil. */
export function wxTile(w){
  return wxIcon(w.code) + '<span class="fact__v"><b>' + w.max + '°</b><small>' +
    wxLabel(w.code) + ', ' + w.min + '° la nuit</small></span>';
}
/** Le service ne répond pas (réseau coupé, requête refusée…) : un message
    visible vaut mieux qu'un silence qu'on croirait être un bug. */
function wxFailHTML(muted){
  return '<span class="wx wx--muted' + (muted ? '' : '') + '">' + I.warn + '<small>Météo indisponible</small></span>';
}
function wxFailTile(){
  return I.warn + '<span class="fact__v"><b>—</b><small>Météo indisponible</small></span>';
}
/** Remplit tous les emplacements [data-wx="AAAA-MM-JJ"] visibles. */
export function wxFill(muted){
  const slots = $$('[data-wx]');
  if (!slots.length) return;
  const legs = {};
  slots.forEach(el => {
    const d = TRIP.days.find(x => x.date === el.dataset.wx);
    if (d) legs[d.leg] = legOf(d.leg);
  });
  Object.values(legs).forEach(leg => wxFetch(leg).then(map => {
    $$('[data-wx]').forEach(el => {
      if (el.dataset.filled) return;
      const w = map[el.dataset.wx];
      if (map.__error){
        el.innerHTML = el.dataset.wxfmt === 'tile' ? wxFailTile() : wxFailHTML(muted);
        el.dataset.filled = '1';
        return;
      }
      if (!w) return;
      el.innerHTML = el.dataset.wxfmt === 'tile' ? wxTile(w) : wxHTML(w, muted);
      el.dataset.filled = '1';
    });
  }));
}
