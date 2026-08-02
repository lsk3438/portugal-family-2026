/* ====================================================================
   Routeur par ancre : #/accueil, #/programme, #/jour/N, #/carte,
   #/reservations, #/infos. Chaque vue est rendue à la demande.
   ==================================================================== */

import { $, $$ } from './dom.js';
import { I } from './icons.js';
import { setAccent } from './helpers.js';
import { observe } from '../features/reveal.js';
import { startCountdown, renderProgress } from '../features/countdown.js';
import { renderHome } from '../views/home.js';
import { stopHeroReel } from '../features/heroreel.js';
import { renderProgramme, progFilter, setProgFilter } from '../views/programme.js';
import { renderDay, stopDay } from '../views/day.js';
import { renderMap } from '../views/map.js';
import { renderBookings } from '../views/bookings.js';
import { renderInfos } from '../views/infos.js';

/* ======================================================================
   ROUTEUR
   ====================================================================== */
export const TABS = [
  { id:'accueil', label:'Accueil', icon:'home' },
  { id:'programme', label:'Programme', icon:'cal' },
  { id:'carte', label:'Carte', icon:'map' },
  { id:'reservations', label:'Réserv.', icon:'ticket' },
  { id:'infos', label:'Infos', icon:'info' }
];
export const go = h => { location.hash = h; };

export function renderTabs(cur){
  $('#tabs').innerHTML = TABS.map(t =>
    `<a class="tab" href="#/${t.id}" aria-current="${t.id===cur}">
       ${I[t.icon]}<span>${t.label}</span><span class="tab__dot"></span>
     </a>`).join('');
}

export function show(view){
  $$('.view').forEach(v => v.classList.toggle('is-on', v.id === 'v-' + view));
}

export function route(){
  const h = location.hash || '#/accueil';
  const mDay = /^#\/jour\/(\d+)/.exec(h);
  if (mDay){
    renderDay(+mDay[1]); show('jour'); renderTabs('programme');
    return;
  }
  const mLeg = /^#\/programme\?leg=([a-z]+)/.exec(h);
  if (mLeg){ setProgFilter(mLeg[1]); }
  const name = (h.replace('#/','').split('?')[0]) || 'accueil';
  const view = TABS.some(t => t.id === name) ? name : 'accueil';

  stopDay();
  if (view !== 'accueil') stopHeroReel();

  if (view === 'accueil'){ setAccent(null); renderHome(); startCountdown(); renderProgress(); }
  if (view === 'programme'){ setAccent(progFilter === 'all' ? null : progFilter); renderProgramme(); }
  if (view === 'reservations'){ setAccent(null); renderBookings(); }
  if (view === 'infos'){ setAccent(null); renderInfos(); }
  show(view); renderTabs(view);
  if (view === 'carte'){ setAccent(null); setTimeout(renderMap, 30); }
  window.scrollTo(0,0);
  observe();
}
