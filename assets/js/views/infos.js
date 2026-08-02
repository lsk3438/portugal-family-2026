/* ====================================================================
   Vue Infos : logements, transports, urgences, documents, et la liste
   complète de ce qui reste à confirmer.
   ==================================================================== */

import { $, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { tbc } from '../core/helpers.js';
import { observe } from '../features/reveal.js';

/* ======================================================================
   INFOS
   ====================================================================== */
export function renderInfos(){
  $('#infos-list').innerHTML = TRIP.infos.map(g => `
    <section class="info reveal">
      <div class="info__h">${I[g.icon] || I.info}<h3>${esc(g.title)}</h3></div>
      ${g.rows.map(r => `<div class="info__r"><b>${esc(r.k)}</b><span>${r.ok ? esc(r.v) : (r.v ? esc(r.v) : tbc)}${r.ok?'':' <span class="tbc">(à confirmer)</span>'}</span></div>`).join('')}
    </section>`).join('');

  $('#tcf').innerHTML = `<h3>${I.warn}Informations qui restent à confirmer</h3><ul>` +
    TRIP.toConfirm.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join('') + '</ul>';
  observe();
}
