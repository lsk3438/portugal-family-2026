/* ============================================================================
   PORTUGAL FAMILY TRIP 2026 — point d'entrée de l'application
   ----------------------------------------------------------------------------
   Ce fichier ne fait que trois choses : poser les écouteurs globaux, allumer
   le bouton d'ambiance, et lancer le routeur. Toute la logique vit dans
   core/, features/ et views/ ; tout le contenu vit dans data/.
   ========================================================================== */

import { route }         from './core/router.js';
import { wire }          from './core/events.js';
import { wireAmbiance }  from './features/ambience.js';

function boot(){
  wire();
  wireAmbiance();
  if (!location.hash) location.hash = '#/accueil';
  route();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
