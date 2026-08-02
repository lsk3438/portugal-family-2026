/* ====================================================================
   Événements globaux, posés une seule fois sur le document.
   La délégation survit à tous les re-rendus de vues.
   ==================================================================== */

import { $, $$, REDUCED } from './dom.js';
import { store, save } from './store.js';
import { toast } from './toast.js';
import { setAccent } from './helpers.js';
import { route } from './router.js';
import { packKey, doneKey, packRefresh } from '../views/day.js';
import { renderProgramme, setProgFilter } from '../views/programme.js';
import { mapReady, refreshMapSize, showLeg, setMapCat } from '../views/map.js';
import { openDetails, closeDetails, detailsOpen } from '../features/details.js';

/* ======================================================================
   ÉVÉNEMENTS GLOBAUX (délégation : survit à tous les re-rendus)
   ====================================================================== */
export function wire(){
  document.addEventListener('click', e => {
    // fiche détails
    const dt = e.target.closest('[data-details]');
    if (dt){ openDetails(dt.dataset.details); return; }
    if (e.target.closest('[data-dt-close]')){ closeDetails(); return; }
    // copier une adresse
    const c = e.target.closest('[data-copy]');
    if (c){
      const txt = c.dataset.copy;
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(()=>toast('Adresse copiée')).catch(()=>toast(txt));
      } else toast(txt);
      return;
    }
    // activité terminée
    const dn = e.target.closest('[data-done]');
    if (dn){
      const m = /jour\/(\d+)/.exec(location.hash); const n = m ? +m[1] : 1;
      const i = +dn.dataset.done; const s = store.json(doneKey(n), {});
      s[i] = !s[i]; save(doneKey(n), s);
      dn.setAttribute('aria-pressed', String(!!s[i]));
      $('span', dn).textContent = s[i] ? 'Fait' : 'Marquer comme fait';
      dn.closest('.step').classList.toggle('done', !!s[i]);
      return;
    }
    // filtres programme
    const pf = e.target.closest('[data-leg]');
    if (pf){ setProgFilter(pf.dataset.leg); setAccent(pf.dataset.leg==='all'?null:pf.dataset.leg); renderProgramme(); return; }
    // filtres carte — étapes
    const ml = e.target.closest('[data-mleg]');
    if (ml && mapReady()){
      const id = ml.dataset.mleg;
      $$('#map-filters button').forEach(b =>
        b.setAttribute('aria-pressed', String(id === 'all' || b.dataset.mleg === id)));
      showLeg(id);
      return;
    }
    // filtres carte — catégories
    const mc = e.target.closest('[data-mcat]');
    if (mc){
      const cat = mc.dataset.mcat;
      $$('#map-cats button').forEach(b =>
        b.setAttribute('aria-pressed', String(b.dataset.mcat === cat)));
      setMapCat(cat);
      return;
    }
  });

  document.addEventListener('change', e => {
    const t = e.target;
    if (t.type !== 'checkbox') return;
    const m = /jour\/(\d+)/.exec(location.hash); const n = m ? +m[1] : 1;
    if (t.dataset.pack !== undefined){
      const s = store.json(packKey(n), {}); s[t.dataset.pack] = t.checked; save(packKey(n), s); packRefresh(n);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && detailsOpen()) closeDetails();
  });

  window.addEventListener('hashchange', () => { closeDetails(); route(); });
  window.addEventListener('resize', refreshMapSize, { passive:true });

  /* Parallaxe du fond azulejo : le carreau glisse trois fois moins vite que
     le contenu, juste assez pour donner de la profondeur sans distraire. */
  const az = $('.azulejo');
  if (az && !REDUCED){
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        az.style.setProperty('--az-y', (window.scrollY * 0.06).toFixed(1) + 'px');
        ticking = false;
      });
    }, { passive:true });
  }
}
