/* ====================================================================
   Vue Accueil : héros, compte à rebours, bandeau du jour, les trois étapes.
   ==================================================================== */

import { $, esc } from '../core/dom.js';
import { I } from '../core/icons.js';
import { TRIP } from '../../../data/trip.js';
import { img, legOfDay } from '../core/helpers.js';
import { tripDayIndex } from '../features/countdown.js';
import { wxFill } from '../features/weather.js';
import { startHeroReel } from '../features/heroreel.js';

/* ======================================================================
   ACCUEIL
   ====================================================================== */
export function renderHome(){
  startHeroReel();
  $('#home-eyebrow').textContent = TRIP.dates + ' · ' + TRIP.stages;
  $('#home-sub').textContent = TRIP.intro;

  const i = tripDayIndex();
  const d = TRIP.days[Math.max(0, i < 0 ? 0 : Math.min(i, TRIP.days.length-1))];
  const nextD = i < 0 ? TRIP.days[0] : (TRIP.days[i] || TRIP.days[0]);
  const leg = legOfDay(nextD);
  const first = nextD.items[0];
  $('#home-next').href = '#/jour/' + nextD.n;
  $('#home-next').innerHTML = `
    <div class="next__b">
      <div class="next__k">${i < 0 ? 'Première journée' : 'Aujourd’hui'} · ${esc(leg.name)}</div>
      <h3>Jour ${nextD.n} — ${esc(nextD.title)}</h3>
      <p>${esc(nextD.lead)}</p>
      <p style="font-size:14px;color:var(--ink-3);margin:0 0 16px">Première étape : <b style="color:var(--ink)">${esc(first.t)} — ${esc(first.title)}</b></p>
      <span class="next__go">Ouvrir la journée ${I.arrow}</span>
    </div>`;

  /* Bandeau de faits — uniquement des données vérifiées ou calculées.
     Ni budget ni parking : ces valeurs-là ne sont pas sourcées. */
  const nbLieux = nextD.items.filter(x => x.place).length;
  $('#home-facts').innerHTML =
    `<div class="fact" data-wx="${nextD.date}" data-wxfmt="tile">` +
      `${I.wxPart}<span class="fact__v"><b>—</b><small>Météo en ligne</small></span></div>` +
    `<div class="fact">${I.sun}<span class="fact__v"><b>${esc(nextD.sunset)}</b><small>Coucher du soleil</small></span></div>` +
    (nextD.travel ? (() => {
      const dur = /(\d+\s*h(?:\s*\d+)?)/.exec(nextD.travel);
      const route = nextD.travel.split('·')[0].trim();
      return `<div class="fact">${I.car}<span class="fact__v"><b>${esc(dur ? dur[1] : route)}</b>` +
             `<small>${esc(dur ? route : 'Route du jour')}</small></span></div>`;
    })() : '') +
    `<div class="fact">${I.pin}<span class="fact__v"><b>${nbLieux}</b><small>${nbLieux > 1 ? 'lieux au programme' : 'lieu au programme'}</small></span></div>`;
  wxFill(false);

  $('#home-legs').innerHTML = TRIP.legs.map(l => {
    return `<a class="legcard reveal" href="#/programme?leg=${l.id}" style="--lc:${l.vivid || l.color};--lc-l:${l.light}">
      <img src="${img('leg-' + l.id,'card')}" alt="" loading="lazy" width="960" height="640">
      <div class="legcard__v"></div>
      <div class="legcard__b">
        <div class="legcard__n">Jours ${l.from} à ${l.to}</div>
        <h3>${esc(l.name)}</h3>
        <small>${esc(l.dates)} · ${esc(l.base)}</small>
      </div></a>`;
  }).join('');

}
