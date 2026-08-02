/* ====================================================================
   Compte à rebours jusqu'au départ, puis compteur de jours sur place,
   et barre de progression Algarve → Lisbonne → Porto.
   ==================================================================== */

import { $, $$, REDUCED, esc } from '../core/dom.js';
import { TRIP } from '../../../data/trip.js';

/* ======================================================================
   COMPTE À REBOURS
   ====================================================================== */
export const UNITS = [['days','Jours'],['hours','Heures'],['minutes','Minutes'],['seconds','Secondes']];
let cdTimer, cdBuilt = false;

export function cdBuild(){
  $('#cd').innerHTML = UNITS.map((u,i) =>
    `<div class="cd__u" style="--d:${i*70}ms">
       <span class="cd__n" data-u="${u[0]}"><span>--</span></span>
       <span class="cd__l">${u[1]}</span>
     </div>`).join('');
  cdBuilt = true;
}
export function cdSet(u, v){
  const h = $(`#cd .cd__n[data-u="${u}"]`); if(!h) return;
  const txt = String(Math.max(0,v)).padStart(2,'0');
  const cur = h.lastElementChild;
  if (cur && cur.textContent === txt) return;
  if (REDUCED){ h.innerHTML = `<span>${txt}</span>`; return; }
  if (cur){ cur.classList.add('out'); setTimeout(()=>cur.remove(), 320); }
  const n = document.createElement('span'); n.className='in'; n.textContent = txt; h.appendChild(n);
}

export function tripDayIndex(){
  const now = Date.now();
  for (let i = TRIP.days.length - 1; i >= 0; i--){
    if (now >= new Date(TRIP.days[i].date + 'T00:00:00').getTime()) return i;
  }
  return -1;
}

export function startCountdown(){
  const start = new Date(TRIP.departISO).getTime();
  const end   = new Date(TRIP.endISO).getTime();
  const box = $('#cd'), msg = $('#cd-msg'), lab = $('#cd-label');
  if (!cdBuilt) cdBuild();

  function tick(){
    const now = Date.now();
    if (now < start){
      box.hidden = false; msg.hidden = true;
      const s = Math.floor((start - now)/1000);
      cdSet('days', Math.floor(s/86400));
      cdSet('hours', Math.floor((s%86400)/3600));
      cdSet('minutes', Math.floor((s%3600)/60));
      cdSet('seconds', s%60);
      lab.textContent = 'Le voyage commence dans…';
    } else if (now <= end){
      const i = tripDayIndex(); const d = TRIP.days[Math.max(0,i)];
      box.hidden = true; msg.hidden = false;
      msg.textContent = 'Jour ' + d.n + ' sur ' + TRIP.days.length;
      lab.textContent = 'Le voyage a commencé · ' + d.title;
      clearInterval(cdTimer);
    } else {
      box.hidden = true; msg.hidden = false;
      msg.textContent = 'Até já.';
      lab.textContent = 'Le voyage est terminé';
      clearInterval(cdTimer);
    }
  }
  tick(); clearInterval(cdTimer); cdTimer = setInterval(tick, 1000);
}

export function renderProgress(){
  const total = TRIP.days.length;
  const done = Math.min(Math.max(tripDayIndex()+1, 0), total);
  $('#prog-bar').style.width = (done/total*100) + '%';
  const cur = done > 0 ? TRIP.days[done-1].leg : null;
  $('#prog-legs').innerHTML = TRIP.legs.map(l =>
    `<b class="${l.id===cur?'on':''}">${esc(l.name)}</b>`).join('');
}
