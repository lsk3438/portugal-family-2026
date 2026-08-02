/* ====================================================================
   Apparition progressive des cartes au défilement.
   ==================================================================== */

import { $$, REDUCED } from '../core/dom.js';

/* ======================================================================
   ANIMATIONS AU DÉFILEMENT
   ====================================================================== */
let io;
export function observe(){
  if (REDUCED){ $$('.reveal').forEach(e=>e.classList.add('in')); return; }
  if (!io) io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin:'0px 0px -6% 0px', threshold:.06 });
  $$('.reveal:not(.in)').forEach(e => io.observe(e));
}
