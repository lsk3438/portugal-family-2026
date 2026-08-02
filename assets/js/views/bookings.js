/* ====================================================================
   Vue Réservations : statut cliquable, mémorisé sur l'appareil.
   ==================================================================== */

import { $, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { store } from '../core/store.js';
import { TRIP } from '../../../data/trip.js';
import { placeOf, legOf } from '../core/helpers.js';
import { observe } from '../features/reveal.js';

export function renderStats(sel){
  const st = bookingStates();
  const c = { todo:0, pending:0, done:0 };
  TRIP.bookings.forEach((b,i) => c[st[i] || b.status]++);
  $(sel).innerHTML =
    `<div class="bkstat"><b>${c.todo}</b><span>à réserver</span></div>
     <div class="bkstat"><b>${c.pending}</b><span>en attente</span></div>
     <div class="bkstat"><b>${c.done}</b><span>confirmé</span></div>`;
}

/* ======================================================================
   RÉSERVATIONS
   ====================================================================== */
export const bookingStates = () => store.json('pt.bk', {});
export const NEXT_ST = { todo:'pending', pending:'done', done:'todo' };
export const ST_LABEL = { todo:'À réserver', pending:'En attente', done:'Confirmé' };

export function renderBookings(){
  const st = bookingStates();
  renderStats('#bk-stats');
  $('#bk-list').innerHTML = TRIP.bookings.map((b,i) => {
    const s = st[i] || b.status;
    const p = placeOf(b.place);
    const acts = [];
    if (p && p.book && p.book.ok) acts.push(`<a class="btn btn--p" href="${p.book.v}" target="_blank" rel="noopener noreferrer">${I.ticket}Réserver</a>`);
    else if (p && p.url && p.url.ok) acts.push(`<a class="btn btn--p" href="${p.url.v}" target="_blank" rel="noopener noreferrer">${I.link}Site officiel</a>`);
    if (p && p.phone && p.phone.ok) acts.push(`<a class="btn" href="tel:${p.phone.v.split('·')[0].replace(/[^+0-9]/g,'')}">${I.phone}Appeler</a>`);
    acts.push(`<a class="btn" href="#/jour/${b.day}">${I.cal}Jour ${b.day}</a>`);
    return `<article class="bkcard reveal" style="--d:${Math.min(i,8)*35}ms">
      <div class="bkcard__h">
        <div class="bkcard__i">
          <h4>${esc(b.name)}</h4>
          <div class="bkcard__m">${esc(b.date)} · ${esc(b.time)} · ${esc(b.people)}</div>
        </div>
        <button class="st st--${s}" type="button" data-bk="${i}" aria-label="Changer le statut de ${esc(b.name)}">
          ${s==='done'?I.checkS:(s==='pending'?I.clock:I.warn)}${ST_LABEL[s]}
        </button>
      </div>
      ${b.notes?`<p class="bkcard__n">${esc(b.notes)}</p>`:''}
      <div class="bkcard__a">${acts.join('')}</div>
    </article>`;
  }).join('');
  observe();
}
