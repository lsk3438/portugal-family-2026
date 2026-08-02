/* ============================================================================
   BANDEAU D'OUVERTURE
   ----------------------------------------------------------------------------
   Douze médias qui se succèdent en fondu lent, dans l'ordre du voyage :
   l'Algarve, puis Lisbonne, puis Porto. Chaque image dérive imperceptiblement
   pendant qu'elle est visible, ce qui donne de la vie sans distraire.

   Chargement progressif : seule la première image part avec la page. Les
   autres ne sont demandées qu'au fur et à mesure, et la suivante est
   préchargée pendant que la courante est à l'écran — le fondu n'attend
   jamais le réseau.

   Une entrée peut porter un champ `video` ; la photo devient alors son image
   de secours, et elle reste affichée si la vidéo échoue ou si le téléphone
   demande d'économiser les données.
   ========================================================================== */

import { $, REDUCED } from '../core/dom.js';
import { HERO } from '../../../data/hero.js';
import { setAccent } from '../core/helpers.js';

const DUREE = 7000;                 // durée d'affichage d'un média
let timer = null, index = 0, built = false;

/** Le navigateur signale-t-il une connexion coûteuse ou lente ? */
function economie(){
  const c = navigator.connection;
  if (!c) return false;
  return !!c.saveData || /2g/.test(c.effectiveType || '');
}

function media(item, eager){
  if (item.video && !economie() && !REDUCED){
    return `<video muted playsinline loop preload="none" poster="${item.small}">` +
           `<source src="${item.video}" type="video/mp4"></video>`;
  }
  const src = economie() ? item.small : item.src;
  return `<img src="${eager ? src : ''}" data-src="${src}" alt=""` +
         (eager ? ' fetchpriority="high"' : ' loading="lazy"') + '>';
}

/** Demande le média d'un index s'il ne l'a pas encore été. */
function precharge(i){
  const el = $('#home-reel').children[i];
  if (!el) return;
  const im = el.querySelector('img');
  if (im && !im.getAttribute('src')) im.src = im.dataset.src;
  const vi = el.querySelector('video');
  if (vi && vi.preload === 'none'){ vi.preload = 'auto'; vi.load(); }
}

function montrer(i){
  const reel = $('#home-reel'), dots = $('#home-dots');
  if (!reel) return;
  [...reel.children].forEach((el, k) => el.classList.toggle('on', k === i));
  if (dots) [...dots.children].forEach((el, k) => el.classList.toggle('on', k === i));

  const item = HERO[i];
  const credit = $('#home-credit');
  if (credit) credit.textContent = item.subject + ' · ' + item.credit;

  const v = reel.children[i] && reel.children[i].querySelector('video');
  if (v) v.play().catch(() => {});          // si le navigateur refuse, la photo reste

  setAccent(item.leg);
  precharge((i + 1) % HERO.length);
}

export function startHeroReel(){
  const reel = $('#home-reel');
  if (!reel) return;

  if (!built){
    reel.innerHTML = HERO.map((it, i) =>
      `<div class="hero__slide${i === 0 ? ' on' : ''}">${media(it, i === 0)}</div>`).join('');
    const dots = $('#home-dots');
    if (dots) dots.innerHTML = HERO.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('');
    built = true;
    index = 0;
    montrer(0);
  }

  stopHeroReel();
  if (HERO.length < 2 || REDUCED) return;
  timer = setInterval(() => {
    index = (index + 1) % HERO.length;
    montrer(index);
  }, DUREE);
}

export function stopHeroReel(){
  clearInterval(timer);
  timer = null;
}
