/* ====================================================================
   Vue Journée : bandeau photo défilant, déroulé horaire, fiches de lieux,
   liste « à prévoir aujourd'hui ».
   ==================================================================== */

import { $, $$, REDUCED, esc } from '../core/dom.js';
import { I, CAT_LABEL } from '../core/icons.js';
import { store, save } from '../core/store.js';
import { TRIP } from '../../../data/trip.js';
import { img, legOfDay, dayByN, placeOf, setAccent, placeThumb } from '../core/helpers.js';
import { go } from '../core/router.js';
import { observe } from '../features/reveal.js';
import { wxFill } from '../features/weather.js';
import { rows, links } from '../features/details.js';

/* ======================================================================
   JOURNÉE
   ====================================================================== */
export const packKey = n => 'pt.pack.' + n;
export const doneKey = n => 'pt.done.' + n;
let railHandler = null, nextTimer = null;

/** Coupe tout ce que la vue Journée a mis en route — écouteur de défilement,
    minuterie de la prochaine étape, défilé de photos. Appelé par le routeur
    à chaque changement de vue, pour ne rien laisser tourner en arrière-plan. */
export function stopDay(){
  if (railHandler){ window.removeEventListener('scroll', railHandler); railHandler = null; }
  clearInterval(nextTimer); nextTimer = null;
  clearInterval(bandTimer); bandTimer = null;
}

export function placeBlock(k){
  const p = placeOf(k); if(!p) return '';

  /* Fiche complète, directement dans le déroulé de la journée : photo, nom,
     description, PUIS les informations pratiques vérifiées — adresse,
     horaires, tarifs, téléphone — et tous les liens utiles. Demande de
     Chris : aucune ligne « À confirmer », aucun encadré « Reste à
     compléter », aucun avertissement — seules les informations sûres
     s'affichent, et chaque fiche garde un vrai descriptif. */
  return `<div class="place">
    <div class="place__top">
      ${placeThumb(k, 'card', 'place__img')}
      <div class="place__i">
        <div class="place__c">${esc(CAT_LABEL[p.cat] || p.cat)} · ${esc(p.city)}</div>
        <div class="place__n">${esc(p.name)}</div>
        ${p.cuisine ? `<div class="place__cui">${I.repas}${esc(p.cuisine)}</div>` : ''}
        <p class="place__d">${esc(p.desc)}</p>
      </div>
    </div>
    <div class="place__rows">${rows(p)}</div>
    <div class="place__acts">${links(k, p)}</div>
  </div>`;
}

export function renderDay(n){
  const d = dayByN(n); if(!d){ go('#/programme'); return; }
  const l = legOfDay(d);
  setAccent(l);

  startBand(d);
  $('#d-backico').innerHTML = I.back;
  $('#d-chips').innerHTML =
    `<span class="chip">${esc(l.name)}</span>` +
    `<span class="chip chip--g">${esc(d.label)}</span>` +
    `<span class="chip chip--g">Jour ${d.n} / ${TRIP.days.length}</span>`;
  $('#h-jour').textContent = d.title;
  $('#h-jour').className = 'h-lg';
  $('#d-lead').textContent = d.lead;
  const nbLieux = d.items.filter(x => x.place).length;
  $('#d-facts').innerHTML =
    `<span data-wx="${d.date}"></span>` +
    `<span>${I.sun}Coucher du soleil ${esc(d.sunset)}</span>` +
    `<span>${I.pin}${nbLieux} lieux</span>` +
    (d.travel ? `<span>${I.car}${esc(d.travel)}</span>` : '');

  const done = store.json(doneKey(n), {});
  $('#d-steps').innerHTML = d.items.map((it,i) => `
    <div class="step${done[i]?' done':''}" data-i="${i}" data-h="${esc(it.t)}">
      <div class="step__dot">${I[it.k] || I.libre}</div>
      <div class="step__h">
        <span class="step__t">${esc(it.t)}</span>
        ${it.todo ? `<span class="step__todo">${esc(it.todo)}</span>` : ''}
      </div>
      <div class="step__card">
        <h4>${esc(it.title)}</h4>
        ${it.text ? `<p>${esc(it.text)}</p>` : ''}
        ${it.place ? placeBlock(it.place) : ''}
        <button class="step__done" type="button" data-done="${i}" aria-pressed="${!!done[i]}">
          ${I.checkS}<span>${done[i] ? 'Fait' : 'Marquer comme fait'}</span>
        </button>
      </div>
    </div>`).join('') +
    (d.alert ? `<div class="step"><div class="step__dot">${I.warn}</div><div class="step__h"><span class="step__t">Attention</span></div><div class="step__card"><p>${esc(d.alert)}</p></div></div>` : '') +
    (d.note ? `<div class="step"><div class="step__dot">${I.info}</div><div class="step__h"><span class="step__t">À noter</span></div><div class="step__card"><p>${esc(d.note)}</p></div></div>` : '');

  // à prévoir aujourd'hui
  const p = store.json(packKey(n), {});
  $('#d-pack').innerHTML = (d.pack||[]).map((t,i) =>
    `<li><label><input type="checkbox" data-pack="${i}" ${p[i]?'checked':''}><span class="bx" aria-hidden="true">${I.check}</span><span class="tx">${esc(t)}</span></label></li>`).join('');
  packRefresh(n);

  // pastilles + pager
  $('#d-jump').innerHTML = TRIP.days.map(x =>
    `<a href="#/jour/${x.n}" aria-current="${x.n===n}" title="${esc(x.label)}">${x.n}</a>`).join('');
  const pv = dayByN(n-1), nx = dayByN(n+1);
  $('#d-pager').innerHTML =
    (pv ? `<a href="#/jour/${pv.n}"><small>← Jour ${pv.n}</small><b>${esc(pv.title)}</b></a>`
        : `<a href="#/programme"><small>←</small><b>Programme</b></a>`) +
    (nx ? `<a class="nx" href="#/jour/${nx.n}"><small>Jour ${nx.n} →</small><b>${esc(nx.title)}</b></a>`
        : `<a class="nx" href="#/programme"><small>→</small><b>Programme</b></a>`);

  startNext(d);
  bindRail();
  wxFill(false);
  window.scrollTo(0,0);
}

let bandTimer = null;
export function startBand(d){
  clearInterval(bandTimer);
  const band = $('#d-band'), dots = $('#d-dots');
  if (!band) return;
  const keys = (d.gallery && d.gallery.length ? d.gallery : [d.hero]).filter(k => img(k, 'hero')).slice(0, 5);
  band.innerHTML = keys.map((k, i) =>
    `<img src="${img(k, 'hero')}" alt="${i === 0 ? esc(d.title) : ''}" class="${i === 0 ? 'on' : ''}"
          ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} width="1920" height="1080">`).join('');
  dots.innerHTML = keys.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('');
  if (keys.length < 2 || REDUCED) return;
  let i = 0;
  bandTimer = setInterval(() => {
    const imgs = $$('img', band), ds = $$('i', dots);
    imgs[i].classList.remove('on'); ds[i].classList.remove('on');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('on'); ds[i].classList.add('on');
  }, 5200);
}

export function packRefresh(n){
  const b = $$('#d-pack input');
  if(!b.length){ $('#d-packbar').style.width='0%'; $('#d-packcount').textContent=''; return; }
  const k = b.filter(x=>x.checked).length;
  $('#d-packbar').style.width = (k/b.length*100)+'%';
  $('#d-packcount').textContent = k + ' sur ' + b.length + (k===b.length ? ' — sac bouclé' : ' préparés');
}

export function bindRail(){
  if (railHandler) window.removeEventListener('scroll', railHandler);
  const tl = $('#d-tl'), fill = $('#d-rail'); if(!tl) return;
  let t = false;
  const run = () => {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (window.innerHeight*0.8 - r.top) / Math.max(1, r.height*0.85)));
    fill.style.height = (p*100)+'%';
    const mid = window.innerHeight*0.55;
    $$('.step', tl).forEach(s => { if(!s.classList.contains('done')) s.classList.toggle('on', s.getBoundingClientRect().top < mid); });
    t = false;
  };
  railHandler = () => { if(!t){ t = true; requestAnimationFrame(run); } };
  window.addEventListener('scroll', railHandler, { passive:true });
  run();
}

export function startNext(d){
  clearInterval(nextTimer);
  const el = $('#d-next');
  const dayStart = new Date(d.date + 'T00:00:00').getTime();
  function tick(){
    const now = Date.now();
    if (new Date(now).toDateString() === new Date(dayStart).toDateString()){
      const up = d.items.map(it => {
        const [h,m] = it.t.replace('h',':').split(':');
        return { t: it.title, w: new Date(d.date + 'T' + h.padStart(2,'0') + ':' + (m||'00') + ':00').getTime() };
      }).filter(x => x.w > now).sort((a,b)=>a.w-b.w)[0];
      if (up){
        const mins = Math.round((up.w-now)/60000);
        const txt = mins >= 60 ? Math.floor(mins/60)+' h '+String(mins%60).padStart(2,'0') : mins+' min';
        el.innerHTML = I.clock + '<span>' + esc(up.t) + ' dans <em>' + txt + '</em></span>';
        return;
      }
      el.innerHTML = I.clock + '<span>Journée lancée</span>'; return;
    }
    const days = Math.ceil((dayStart-now)/86400000);
    el.innerHTML = I.clock + (days > 0
      ? '<span>Dans <em>' + days + ' jour' + (days>1?'s':'') + '</em></span>'
      : '<span>Journée passée</span>');
  }
  tick(); nextTimer = setInterval(tick, 30000);
}
