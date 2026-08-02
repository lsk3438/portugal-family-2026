/* ====================================================================
   Vue Participants : les neuf voyageurs, dans leur propre onglet — pas
   une section perdue au milieu des infos pratiques.
   ==================================================================== */

import { $, esc } from '../core/dom.js';
import { TRAVELLERS } from '../../../data/travellers.js';
import { observe } from '../features/reveal.js';

/* ======================================================================
   PARTICIPANTS
   ====================================================================== */
export function renderParticipants(){
  /* Une initiale dessinée tient lieu de portrait tant qu'aucune photo n'est
     fournie — mieux qu'un rond vide, et remplaçable en une ligne dans
     data/travellers.js dès qu'une photo existe. */
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
  observe();
}
