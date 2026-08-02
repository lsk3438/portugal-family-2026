/* ============================================================================
   FICHE DÉTAILS
   ----------------------------------------------------------------------------
   Panneau qui monte depuis le bas et occupe presque tout l'écran sur
   téléphone : grande photo, description complète, toutes les informations
   pratiques, et les liens utiles en bas, à portée de pouce.

   Règle absolue, héritée du cahier des charges : rien n'est inventé. Un
   champ absent des données n'est pas comblé par une valeur plausible — il
   apparaît dans « Reste à compléter », pour qu'on sache quoi aller vérifier.
   ========================================================================== */

import { $, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { placeOf, field, tbc, img, placeArt, legOfPlace } from '../core/helpers.js';

let lastFocus = null;

/* Les rubriques attendues sur une fiche complète. Celles qui manquent sont
   listées à la fin plutôt que remplies au hasard. */
const EXPECTED = [
  ['hours',   'Horaires'],
  ['price',   'Tarifs'],
  ['phone',   'Téléphone'],
  ['stay',    'Temps sur place'],
  ['parking', 'Parking'],
  ['kids',    'Avec les enfants'],
  ['bring',   'À prendre avec soi'],
  ['tips',    'Conseils']
];

export function rows(p){
  const out = [`<div class="dt__row"><b>Adresse</b><span>${field(p.address)}</span></div>`];
  if (!(p.url && p.url.ok))
    out.push(`<div class="dt__row"><b>Site officiel</b><span>${tbc}</span></div>`);
  EXPECTED.forEach(([k, label]) => {
    if (p[k] === undefined) return;
    out.push(`<div class="dt__row"><b>${label}</b><span>${field(p[k])}</span></div>`);
  });
  return out.join('');
}

export function missing(p){
  const m = EXPECTED.filter(([k]) => p[k] === undefined).map(([, label]) => label);
  if (!m.length) return '';
  return `<div class="dt__todo">${I.info}<span><b>Reste à compléter :</b> ${esc(m.join(' · '))}.
    Ces informations n’ont pas été vérifiées sur une source officielle, donc elles ne sont pas affichées.</span></div>`;
}

/* Les liens, dans l'ordre d'utilité. Aucun bouton n'est jamais vide : si le
   lien manque, on affiche « Lien à confirmer » à la place. */
export function links(key, p){
  const a = [];
  if (p.book && p.book.ok)
    a.push(`<a class="btn btn--p" href="${p.book.v}" target="_blank" rel="noopener noreferrer">${I.ticket}Réserver</a>`);
  if (p.url && p.url.ok){
    a.push(`<a class="btn btn--p" href="${p.url.v}" target="_blank" rel="noopener noreferrer">${I.link}${esc(p.url.label || 'Site officiel')}</a>`);
  } else {
    /* Pas de site officiel connu. Plutôt qu'un bouton mort, une recherche
       Tripadvisor sur le nom et la ville : le lien fonctionne toujours, et il
       n'affirme rien de faux — c'est une recherche, pas une fiche inventée. */
    const q = encodeURIComponent(p.name + ' ' + p.city);
    a.push(`<a class="btn" href="https://www.tripadvisor.fr/Search?q=${q}" target="_blank" rel="noopener noreferrer">${I.link}Chercher sur Tripadvisor</a>`);
  }
  if (p.maps)
    a.push(`<a class="btn" href="${p.maps}" target="_blank" rel="noopener noreferrer">${I.map}Google Maps</a>`);
  if (p.phone && p.phone.ok)
    a.push(`<a class="btn" href="tel:${p.phone.v.split('·')[0].replace(/[^+0-9]/g, '')}">${I.phone}Appeler</a>`);
  if (p.address && p.address.ok)
    a.push(`<button class="btn" type="button" data-copy="${esc(p.address.v)}">${I.copy}Copier l’adresse</button>`);
  return a.join('');
}

/* Petite galerie : les autres photos disponibles pour ce lieu. */
function gallery(p){
  const keys = (p.gallery || []).filter(k => img(k, 'card'));
  if (!keys.length) return '';
  return `<div class="dt__gal">` +
    keys.map(k => `<img src="${img(k, 'card')}" alt="" loading="lazy">`).join('') + `</div>`;
}

/** Dans quelle journée ce lieu apparaît-il, et à quelle heure ? */
function whenHTML(key){
  const hits = [];
  TRIP.days.forEach(d => d.items.forEach(it => {
    if (it.place === key) hits.push({ d, t: it.t, title: it.title });
  }));
  if (!hits.length) return '';
  return hits.map(h =>
    `<a class="dt__when" href="#/jour/${h.d.n}">${I.cal}<span><b>Jour ${h.d.n} · ${esc(h.t)}</b>${esc(h.title)}</span></a>`
  ).join('');
}

/* La fiche jour (day.js) affiche déjà toutes les informations pratiques —
   adresse, horaires, tarifs, téléphone — directement, sans les cacher
   derrière un clic. Ce panneau n'ajoute donc plus les mêmes lignes : il
   apporte le récit du lieu, ses autres photos et les moments du séjour où
   on le retrouve. « Voir le récit » n'a jamais retiré d'information. */
export function openDetails(key){
  const p = placeOf(key); if (!p) return;
  const leg = legOfPlace(key);
  const hero = p.img ? img(p.img, 'hero') : placeArt(key, p);

  lastFocus = document.activeElement;
  const host = $('#dt');
  host.innerHTML = `
    <div class="dt__scrim" data-dt-close></div>
    <div class="dt__panel" role="dialog" aria-modal="true" aria-labelledby="dt-title" style="--dc:${leg.color}">
      <div class="dt__hero">
        <img src="${hero}" alt="" ${p.img ? '' : 'class="is-art"'}>
        <div class="dt__veil"></div>
        <button class="dt__x" type="button" data-dt-close aria-label="Fermer la fiche">${I.close}</button>
        <div class="dt__head">
          <div class="dt__k">${esc(leg.name)} · ${esc(p.city)}</div>
          <h2 class="dt__t" id="dt-title">${esc(p.name)}</h2>
          ${p.cuisine ? `<div class="dt__cui">${I.repas}${esc(p.cuisine)}</div>` : ''}
        </div>
      </div>
      <div class="dt__body">
        <p class="dt__desc">${esc(p.desc)}</p>
        ${gallery(p)}
        ${whenHTML(key)}
      </div>
      <div class="dt__acts">${links(key, p)}</div>
    </div>`;

  host.hidden = false;
  document.body.classList.add('is-locked');
  requestAnimationFrame(() => host.classList.add('on'));
  const x = host.querySelector('.dt__x');
  if (x) x.focus();
}

export function closeDetails(){
  const host = $('#dt');
  if (!host || host.hidden) return;
  host.classList.remove('on');
  document.body.classList.remove('is-locked');
  setTimeout(() => { host.hidden = true; host.innerHTML = ''; }, 300);
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

export function detailsOpen(){
  const host = $('#dt');
  return !!host && !host.hidden;
}
