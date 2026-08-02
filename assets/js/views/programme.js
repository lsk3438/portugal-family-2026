/* ====================================================================
   Vue Programme : les douze journées, filtrables par étape.
   ==================================================================== */

import { $, $$, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { img, legOf, legOfDay } from '../core/helpers.js';
import { observe } from '../features/reveal.js';
import { wxFill } from '../features/weather.js';

/* ======================================================================
   PROGRAMME
   ====================================================================== */
export let progFilter = 'all';

/** Le filtre est modifié depuis le routeur et depuis les événements globaux :
    en modules ES, une variable importée est en lecture seule, d'où ce setter. */
export function setProgFilter(v){ progFilter = v; }
export function renderProgramme(){
  $('#prog-filters').innerHTML =
    `<button type="button" data-leg="all" aria-pressed="${progFilter==='all'}" style="--fc:var(--atlantic)">Les 12 jours</button>` +
    TRIP.legs.map(l => `<button type="button" data-leg="${l.id}" aria-pressed="${progFilter===l.id}" style="--fc:${l.color}">${esc(l.name)}</button>`).join('');

  const days = TRIP.days.filter(d => progFilter === 'all' || d.leg === progFilter);
  $('#prog-days').innerHTML = days.map((d,idx) => {
    const l = legOfDay(d);
    const visits = d.items.filter(x => x.place).length;
    return `<a class="daycard reveal" href="#/jour/${d.n}" style="--dc:${l.color};--d:${Math.min(idx,6)*45}ms">
      <div class="daycard__img"><img src="${img(d.hero,'card')}" alt="" loading="lazy" width="480" height="480"></div>
      <div class="daycard__b">
        <div class="daycard__k"><b></b>Jour ${d.n} · ${esc(d.label)}</div>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.lead)}</p>
        <div class="daycard__m">
          <span>${I.pin}${visits} lieux</span>
          <span>${I.sun}${esc(d.sunset)}</span>
          <span data-wx="${d.date}"></span>
        </div>
      </div></a>`;
  }).join('');
  observe();
  wxFill(true);
}
