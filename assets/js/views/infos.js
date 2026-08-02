/* ====================================================================
   Vue Infos : logements, transports, urgences, documents, et la liste
   complète de ce qui reste à confirmer.
   ==================================================================== */

import { $, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { tbc } from '../core/helpers.js';
import { observe } from '../features/reveal.js';
import { TRAVELLERS } from '../../../data/travellers.js';

/* ======================================================================
   INFOS
   ====================================================================== */
export function renderInfos(){
  $('#infos-list').innerHTML = TRIP.infos.map(g => `
    <section class="info reveal">
      <div class="info__h">${I[g.icon] || I.info}<h3>${esc(g.title)}</h3></div>
      ${g.rows.map(r => `<div class="info__r"><b>${esc(r.k)}</b><span>${r.ok ? esc(r.v) : (r.v ? esc(r.v) : tbc)}${r.ok?'':' <span class="tbc">(à confirmer)</span>'}</span></div>`).join('')}
    </section>`).join('');

  /* Les voyageurs. Une initiale dessinée tient lieu de portrait tant qu'aucune
     photo n'est fournie — mieux qu'un rond vide, et remplaçable en une ligne. */
  $('#trav').innerHTML =
    `<p class="trav__n">${TRAVELLERS.length} participants</p>` +
    `<ul class="trav">` + TRAVELLERS.map(t => {
      const ini = t.nom.split(/\s+/).slice(0,2).map(w => w.charAt(0)).join('');
      const meta = [t.role, t.groupe, t.type].filter(Boolean).join(' · ');
      return `<li class="trav__p">` +
        (t.photo ? `<img src="${t.photo}" alt="" loading="lazy">`
                 : `<span class="trav__i" aria-hidden="true">${esc(ini)}</span>`) +
        `<span class="trav__b"><b>${esc(t.nom)}</b>` +
        (meta ? `<small>${esc(meta)}</small>` : '') + `</span></li>`;
    }).join('') + `</ul>`;

  $('#tcf').innerHTML = `<h3>${I.warn}Informations qui restent à confirmer</h3><ul>` +
    TRIP.toConfirm.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join('') + '</ul>';
  observe();
}
