/* ====================================================================
   Message éphémère en bas d'écran.
   ==================================================================== */

import { $ } from './dom.js';

/* ---------------------------------------------------------------- toast */
let tT;
export function toast(m){
  let el = $('.toast');
  if(!el){ el = document.createElement('div'); el.className='toast'; el.setAttribute('role','status'); document.body.appendChild(el); }
  el.textContent = m;
  requestAnimationFrame(()=>el.classList.add('on'));
  clearTimeout(tT); tT = setTimeout(()=>el.classList.remove('on'), 2600);
}
