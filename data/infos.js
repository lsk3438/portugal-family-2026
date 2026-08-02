/* ============================================================================
   INFOS PRATIQUES et liste de ce qui reste à confirmer.
   ----------------------------------------------------------------------------
   CONVENTIONS DE DONNÉES, valables dans tout le dossier data/ :

     ok: true    information vérifiée sur une source officielle
     ok: false   information non vérifiée → le site affiche « À confirmer »
     place:'clé' renvoie à une entrée de data/places.js
     warn: '…'   encadré d'avertissement affiché sous la fiche du lieu
     img: 'clé'  renvoie à une entrée de data/images.js
   ========================================================================== */

export const INFOS = [
    {
      title: 'Logements', icon: 'home',
      rows: [
        { k: 'Villa en Algarve', v: 'Adresse à confirmer · check-in 9 août 16h00 · check-out 13 août 10h00', ok: false },
        { k: 'Logement à Lisbonne', v: 'Adresse à confirmer · arrivée 13 août vers 13h00 · départ 17 août 10h00', ok: false },
        { k: 'Logement à Porto', v: 'Adresse à confirmer · arrivée 17 août vers 13h00 · départ 20 août', ok: false },
        { k: 'Wi-Fi', v: 'Identifiants à récupérer à chaque check-in', ok: false }
      ]
    },
    {
      title: 'Voitures et transports', icon: 'car',
      rows: [
        { k: 'Location', v: 'Deux voitures, récupération à l’aéroport de Faro le 9 août · loueur et références à confirmer', ok: false },
        { k: 'Restitution', v: 'Lieu et heure à confirmer selon le vol retour du 20 août', ok: false },
        { k: 'Transports Lisbonne', v: 'Carte navegante rechargeable · trajet 1,90 € · pass 24h Carris/Metro 7,25 € · 3,30 € si vous payez à bord du tram', ok: true },
        { k: 'Transports Porto', v: 'Carte Andante rechargeable · métro station Bolhão et Jardim do Morro', ok: true },
        { k: 'Trajet Algarve → Lisbonne', v: 'Environ 2 h 45 par l’A2 — à confirmer selon les logements', ok: false },
        { k: 'Trajet Lisbonne → Porto', v: 'Environ 313 km et 3 h 25 par l’A1, hors trafic', ok: true },
        { k: 'Trajet Porto → Pinhão', v: 'Environ 125 km et 1 h 35 hors trafic', ok: true }
      ]
    },
    {
      title: 'Urgences et santé', icon: 'health',
      rows: [
        { k: 'Numéro d’urgence européen', v: '112 — valable dans tout le Portugal', ok: true },
        { k: 'Carte européenne d’assurance maladie', v: 'À emporter pour chaque participant', ok: true },
        { k: 'Pharmacie', v: 'Les pharmacies de garde sont affichées sur la porte de chaque officine · adresse la plus proche de chaque logement à noter sur place', ok: false },
        { k: 'Assurance voyage', v: 'Numéro de police et téléphone d’assistance à noter', ok: false }
      ]
    },
    {
      title: 'Documents', icon: 'doc',
      rows: [
        { k: 'Pièces d’identité', v: 'Passeport ou carte d’identité en cours de validité pour chaque participant', ok: true },
        { k: 'Permis de conduire', v: 'Du ou des conducteurs, à présenter au loueur', ok: true },
        { k: 'Billets d’avion', v: 'Références à ajouter ici', ok: false },
        { k: 'Billets d’activités', v: 'Aquashow, Regaleira, Pena, Torre de Belém, Lello — à garder sur le téléphone', ok: false }
      ]
    },
    {
      title: 'Météo et lumière en août', icon: 'sun',
      rows: [
        { k: 'Algarve', v: 'Chaud et sec, souvent au-dessus de 30 °C dans les terres · mer autour de 22 °C', ok: false },
        { k: 'Lisbonne', v: '25 à 32 °C, quasiment aucune pluie · la ville est pentue et pavée', ok: false },
        { k: 'Porto et Douro', v: 'Plus doux, environ 24 °C en journée, frais le soir au bord du fleuve · la vallée du Douro est plus chaude', ok: false },
        { k: 'Coucher du soleil', v: 'De 20h33 le 9 août en Algarve à 20h28 le 20 août à Porto — calculé pour chaque journée', ok: true }
      ]
    }
  ];

export const TO_CONFIRM = [
    { t: 'Nombre exact de participants', d: "Le site ne peut pas calculer de budget ni de capacité de restaurant sans ce chiffre." },
    { t: 'Nombre et âge des enfants', d: "Déterminant pour les tarifs : gratuité jusqu’à 12 ans au Castelo de São Jorge et au Padrão, jusqu’à 10 ans à la Torre dos Clérigos, jusqu’à 5 ans à la Regaleira et sur la croisière du Douro." },
    { t: 'Adresses exactes des trois logements', d: "Villa en Algarve, logement à Lisbonne, logement à Porto." },
    { t: 'Horaires de check-in et check-out', d: "Pour caler les journées 1, 5, 9 et 12." },
    { t: 'Heure et adresse du mariage', d: "Annoncé à 14h00 le 17 août. L’adresse conditionne l’heure de départ de Lisbonne." },
    { t: 'Réservation du yacht et port de départ', d: "Vilamoura ou Portimão. L’horaire 17h30 – 20h30 est provisoire, calé sur un coucher de soleil à 20h31." },
    { t: 'Restaurante O Cesteiro', d: "Horaires issus d’une fiche non datée, pas de site officiel, ouverture le dimanche non confirmée." },
    { t: 'NoSoloÁgua Portimão', d: "Horaires et tarifs non publiés. Politique « adults only » le week-end à confirmer, même si le 12 août est un mercredi." },
    { t: 'Oven Lisboa', d: "Pas de site officiel, deux numéros de téléphone différents, horaires non confirmés." },
    { t: 'Restaurant de poisson à Estoril', d: "Choix à arrêter entre CIMAS, Bolina et O Mira, puis à réserver." },
    { t: 'O Tasco do Strauss', d: "Aucune source officielle ne confirme que l’établissement est encore en activité en 2026." },
    { t: 'Torre de Belém', d: "Rouverte le 27 mai 2026 avec créneaux de 30 min et 900 visiteurs par jour. Les modalités exactes de réservation n’ont pas pu être vérifiées." },
    { t: 'Restaurant à Belém le 16 août', d: "Aucune adresse choisie pour l’instant." },
    { t: 'Restaurant du soir à Porto le 18 août', d: "Adega São Nicolau, Taberna dos Mercadores et Abadia do Porto sont vérifiés ; le choix reste à faire." },
    { t: 'Quinta do Douro', d: "Tarifs, politique enfants et obligation de réservation non publiés par Quinta do Bomfim." },
    { t: 'Cave de porto', d: "Sandeman publie ses tarifs (23 € la visite de base). Cálem, Graham’s et Taylor’s ne publient ni horaires complets ni tarifs de visite simple." },
    { t: 'Heure de départ finale le 20 août', d: "16h00 est une estimation : à caler sur le vol retour." }
  ];
