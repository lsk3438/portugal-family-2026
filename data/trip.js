/* ============================================================================
   PORTUGAL FAMILY TRIP 2026 — point d'entrée des données
   ----------------------------------------------------------------------------
   Ce fichier ne contient que les métadonnées du voyage et recompose l'objet
   TRIP à partir des autres fichiers du dossier. Pour réutiliser l'application
   pour un autre voyage, il suffit de remplacer le contenu de data/.
   ========================================================================== */

import { LEGS }      from './legs.js';
import { PLACES }    from './places.js';
import { DAYS }      from './days.js';
import { INFOS, TO_CONFIRM } from './infos.js';

export const TRIP = {
  title:  'Portugal Family Trip',
  year:   '2026',
  dates:  '9 – 20 août 2026',
  stages: 'Algarve • Lisbonne • Porto',

  /* Départ : 9 août 2026 à 09h00, heure du Portugal (UTC+1 en été). */
  departISO: '2026-08-09T09:00:00+01:00',
  endISO:    '2026-08-20T16:00:00+01:00',

  intro: "Douze jours en famille, de l’Atlantique de l’Algarve aux collines de Lisbonne, jusqu’au Douro.",

  legs:      LEGS,
  places:    PLACES,
  days:      DAYS,
  infos:     INFOS,
  toConfirm: TO_CONFIRM
};
