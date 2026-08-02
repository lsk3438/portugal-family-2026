/* ====================================================================
   Raccourcis DOM et échappement HTML.
   Importés par presque tous les autres modules.
   ==================================================================== */

export const $  = (s, r) => (r || document).querySelector(s);
export const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
export const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
