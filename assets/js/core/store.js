/* ====================================================================
   Stockage local tolérant : si le navigateur refuse localStorage
   (navigation privée, cookies bloqués), le site continue de fonctionner
   sans jamais lever d'erreur.
   ==================================================================== */

/* ------------------------------------------------------ stockage tolérant */
export const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} },
  json(k,d){ try { return JSON.parse(localStorage.getItem(k)) || d; } catch(e){ return d; } }
};
export const save = (k,v) => store.set(k, JSON.stringify(v));
