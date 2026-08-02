/* ====================================================================
   Vue Carte : Leaflet + fonds OpenStreetMap, un calque par étape,
   filtres par catégorie, itinéraire général.
   ==================================================================== */

import { $, $$, esc } from '../core/dom.js';
import { I, CAT_ICON, CAT_LABEL } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { legOf, latlng, img } from '../core/helpers.js';

/* ======================================================================
   CARTE
   ====================================================================== */
let map = null, layers = {}, mapCat = 'all';
export function renderMap(){
  const host = $('#map');
  if (typeof L === 'undefined'){ host.innerHTML = '<p style="padding:24px">La carte n’a pas pu se charger. Les boutons « Google Maps » de chaque lieu restent fonctionnels.</p>'; return; }
  if (map) { map.invalidateSize(); return; }

  map = L.map(host, { scrollWheelZoom:false });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

  // à quelle étape appartient chaque lieu (via la première journée qui le cite)
  const legByPlace = {};
  TRIP.days.forEach(d => d.items.forEach(it => { if (it.place && !legByPlace[it.place]) legByPlace[it.place] = d.leg; }));

  const all = [];
  TRIP.legs.forEach(l => { layers[l.id] = L.layerGroup().addTo(map); });
  Object.keys(TRIP.places).forEach(k => {
    const p = TRIP.places[k]; const pos = latlng(p.maps); if(!pos) return;
    const lid = legByPlace[k] || 'algarve'; const l = legOf(lid);
    all.push(pos);
    const icon = L.divIcon({ className:'', iconSize:[26,26], iconAnchor:[13,26], popupAnchor:[0,-26],
      html:`<div class="pin" style="background:${l.color}">${CAT_ICON[p.cat]||I.pin}</div>` });
    const mk = L.marker(pos,{ icon, title:p.name, alt:p.name });
    mk.__cat = p.cat;
    mk.addTo(layers[lid]).bindPopup(
      `<div class="pop">${p.img?`<img src="${img(p.img,'card')}" alt="" loading="lazy">`:''}
        <div class="pop__b">
          <div class="pop__c">${esc(CAT_LABEL[p.cat]||p.cat)} · ${esc(p.city)}</div>
          <h4>${esc(p.name)}</h4>
          <p>${esc(p.desc.slice(0,120))}${p.desc.length>120?'…':''}</p>
          ${p.maps?`<a href="${p.maps}" target="_blank" rel="noopener noreferrer">Ouvrir dans Google Maps →</a>`:''}
        </div></div>`, { maxWidth:238 });
  });

  // itinéraire général entre les trois bases
  const route = [];
  ['vilamouraMarina','comercio','ribeira'].forEach(k => { const c = latlng(TRIP.places[k] && TRIP.places[k].maps); if(c) route.push(c); });
  if (route.length > 1) L.polyline(route, { color:'#123A5A', weight:2.5, opacity:.55, dashArray:'7 8' }).addTo(map);

  if (all.length) map.fitBounds(all, { padding:[36,36] });

  $('#map-filters').innerHTML =
    `<button type="button" data-mleg="all" aria-pressed="true" style="--fc:var(--atlantic)">Tout le voyage</button>` +
    TRIP.legs.map(l => `<button type="button" data-mleg="${l.id}" aria-pressed="true" style="--fc:${l.color}">${esc(l.name)}</button>`).join('');
  const cats = Object.keys(CAT_LABEL).filter(c => Object.keys(TRIP.places).some(k => TRIP.places[k].cat===c));
  $('#map-cats').innerHTML =
    `<button type="button" data-mcat="all" aria-pressed="true" style="--fc:var(--ink)">Toutes catégories</button>` +
    cats.map(c => `<button type="button" data-mcat="${c}" aria-pressed="false" style="--fc:var(--ink)">${esc(CAT_LABEL[c])}</button>`).join('');

  map.on('click', ()=>map.scrollWheelZoom.enable());
  map.on('mouseout', ()=>map.scrollWheelZoom.disable());
  setTimeout(()=>map && map.invalidateSize(), 80);
}

/** La carte est-elle déjà construite ? */
export const mapReady = () => map !== null;

/** Recalcule la taille du canevas après un changement d'orientation. */
export function refreshMapSize(){ if (map) map.invalidateSize(); }

/** N'affiche qu'une étape, ou toutes si id === 'all'. */
export function showLeg(id){
  if (!map) return;
  TRIP.legs.forEach(l => {
    if (id === 'all' || l.id === id) map.addLayer(layers[l.id]);
    else map.removeLayer(layers[l.id]);
  });
  applyCat();
}

/** Ne garde que les lieux d'une catégorie, ou tous si cat === 'all'. */
export function setMapCat(cat){ mapCat = cat; applyCat(); }

function applyCat(){
  Object.keys(layers).forEach(id => layers[id].eachLayer(mk => {
    const el = mk.getElement && mk.getElement();
    if (el) el.style.display = (mapCat === 'all' || mk.__cat === mapCat) ? '' : 'none';
  }));
}
