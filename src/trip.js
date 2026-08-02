/* =========================================================================
   PORTUGAL FAMILY TRIP 2026 — FICHIER DE DONNÉES UNIQUE
   -------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour changer le contenu du site :
   horaires, lieux, textes, liens, réservations, checklists.
   Après modification :  python3 build.py
   -------------------------------------------------------------------------
   Conventions :
   · ok:true      → information vérifiée sur une source officielle
   · ok:false     → information non vérifiée → le site affiche « À confirmer »
   · place:'clé'  → renvoie à une entrée de PLACES ci-dessous
   ========================================================================= */

const TRIP = {
  title: 'Portugal Family Trip',
  year: '2026',
  dates: '9 – 20 août 2026',
  stages: 'Algarve • Lisbonne • Porto',
  // Départ : 9 août 2026 à 09h00, heure du Portugal (WEST = UTC+1 en été)
  departISO: '2026-08-09T09:00:00+01:00',
  endISO:    '2026-08-20T16:00:00+01:00',
  intro: "Douze jours en famille, de l’Atlantique de l’Algarve aux collines de Lisbonne, jusqu’au Douro.",

  /* ---------------------------------------------------------------- ÉTAPES */
  legs: [
    { id: 'algarve',  name: 'Algarve',  short: 'Algarve',  from: 1, to: 4,  dates: '9 → 12 août', base: 'Vilamoura / Quarteira', color: '#1A6698', deep: '#0F4570', light: '#8FCBEC', lat: 37.075, lon: -8.12 },
    { id: 'lisbonne', name: 'Lisbonne', short: 'Lisbonne', from: 5, to: 8,  dates: '13 → 16 août', base: 'Lisbonne', color: '#2F6B4A', deep: '#1E4A33', light: '#93D3AC', lat: 38.72, lon: -9.14 },
    { id: 'porto',    name: 'Porto',    short: 'Porto',    from: 9, to: 12, dates: '17 → 20 août', base: 'Porto', color: '#8E2B3F', deep: '#5E1A28', light: '#F2A6B4', lat: 41.15, lon: -8.61 }
  ],

  /* ---------------------------------------------------------------- LIEUX
     cat : logement · activite · plage · restaurant · courses · monument · parking · transport
     Tous les liens ci-dessous ont été testés. Les champs marqués ok:false
     s'affichent en « À confirmer » sur le site.                            */
  places: {
    /* ---------- ALGARVE ---------- */
    faro: {
      name: 'Aéroport de Faro', cat: 'transport', city: 'Faro', img: 'faro',
      desc: "Principal aéroport de l’Algarve, à environ 4 km à l’ouest de Faro.",
      address: { v: 'Aeroporto de Faro, 8006-901 Faro', ok: true },
      phone: { v: '+351 289 800 800', ok: true },
      url: { v: 'https://www.aeroportofaro.pt/pt/fao/home', ok: true, label: 'Site de l’aéroport' },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0176,-7.9697'
    },
    vilamouraMarina: {
      name: 'Marina de Vilamoura', cat: 'activite', city: 'Vilamoura', img: 'vilamoura-marina',
      desc: "La plus grande marina du Portugal selon son exploitant : 825 postes d’amarrage, restaurants et boutiques le long des pontons.",
      address: { v: 'Marina de Vilamoura, Quarteira', ok: true },
      phone: { v: '+351 289 310 560', ok: true },
      url: { v: 'https://marinadevilamoura.com/berth/marina-information/', ok: true, label: 'Site de la marina' },
      hours: { v: 'Réception 08h30 – 21h30 (1er juin au 15 septembre)', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0766676,-8.1214326'
    },
    vilamouraPraia: {
      name: 'Praia de Vilamoura', cat: 'plage', city: 'Vilamoura', img: 'vilamoura-praia',
      desc: "Plage de sable doré adjacente à la marina, Pavillon Bleu, avec parking et accès pour personnes à mobilité réduite.",
      address: { v: 'Praia de Vilamoura, 8125 Quarteira', ok: true },
      phone: { v: '+351 289 315 430', ok: true },
      url: { v: 'https://visit-loule.pt/en/22341/vilamoura-beach', ok: true, label: 'Fiche Visit Loulé' },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0711363,-8.1158308'
    },
    cesteiro: {
      name: 'Restaurante O Cesteiro', cat: 'restaurant', city: 'Vilamoura', img: null,
      desc: "Restaurant familial de poisson et fruits de mer ouvert depuis 1986, avec vue sur la marina de Vilamoura.", cuisine: 'Poisson et fruits de mer',
      address: { v: 'Av. Cerro da Vila, Edifício Vilamarina 84, 8125-401 Vilamoura', ok: true },
      phone: { v: '+351 289 312 961', ok: true },
      url: { v: 'https://www.visitportugal.com/en/NR/exeres/015A1E9E-D164-49C9-A92E-6E1B6DD0287F', ok: true, label: 'Fiche Turismo de Portugal' },
      hours: { v: '13h00 – 15h00 et 19h00 – 00h00 (fiche non datée)', ok: false },
      maps: null,
      warn: "Pas de site web propre. Horaires issus d’une fiche non datée : appeler pour confirmer et réserver."
    },
    aldi: {
      name: 'ALDI Quarteira', cat: 'courses', city: 'Quarteira', img: null,
      desc: "Supermarché pour les courses du séjour : eau, petits-déjeuners, snacks, produits du logement.",
      address: { v: 'Av. da Fonte Santa 275, 8120-020 Quarteira', ok: true },
      phone: { v: null, ok: false },
      url: { v: 'https://www.aldi.pt/lojas-e-horarios/quarteira/avenida-da-fonte-santa-275/6334249.html', ok: true, label: 'Page du magasin' },
      hours: { v: 'Tous les jours 07h30 – 22h30', ok: true },
      maps: null
    },
    loule: {
      name: 'Mercado Municipal de Loulé', cat: 'courses', city: 'Loulé', img: 'loule',
      desc: "Halle néo-arabe inaugurée en 1908 : 26 boutiques et 78 étals de poisson, fruits, légumes et produits régionaux.",
      address: { v: 'Praça da República, 8100-535 Loulé', ok: true },
      phone: { v: '+351 289 401 080', ok: true },
      url: { v: 'https://visit-loule.pt/en/22202/loule-municipal-market', ok: true, label: 'Fiche officielle' },
      hours: { v: 'Lundi au samedi 07h00 – 15h00 · fermé le dimanche', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.1382439,-8.0223671'
    },
    falesia: {
      name: 'Praia da Falésia', cat: 'plage', city: 'Albufeira', img: 'falesia',
      desc: "Cinq kilomètres et demi de sable au pied de falaises d’argile rouge et ocre. Pavillon Bleu, surveillée de mai à octobre.",
      address: { v: 'Praia da Falésia, Albufeira (accès Açoteias / Alfamar)', ok: true },
      phone: { v: null, ok: false },
      url: { v: 'https://www.visitportugal.com/en/NR/exeres/89FE5D92-5182-489B-B5F7-D0E7EFA2683B', ok: true, label: 'Fiche Turismo de Portugal' },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0804958,-8.1494606',
      warn: "La plage est longue et compte plusieurs accès. Choisir l’accès avant de partir."
    },
    aquashow: {
      name: 'Aquashow Park', cat: 'activite', city: 'Quarteira', img: 'aquashow',
      desc: "Parc aquatique familial : toboggans, piscine à vagues, rivière lente et zones enfants.",
      address: { v: 'Volta do Parque 1, 8125-313 Quarteira', ok: true },
      phone: { v: '+351 289 315 129', ok: true },
      url: { v: 'https://aquashowpark.com/en/home/', ok: true, label: 'Site officiel' },
      book: { v: 'https://aquashowtickets.com/en/prices-and-timetable/', ok: true },
      hours: { v: 'Parc extérieur ouvert du 1er mai au 30 septembre 2026, tous les jours 10h00 – 18h00', ok: true },
      price: { v: 'Haute saison (juillet-août) : adulte 34,20 € en ligne / 38 € sur place ; enfant de 1 m à 10 ans et senior 25,20 € / 28 € ; gratuit sous 1 m. Remise de 10 % à l’achat en ligne à l’avance.', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0943541,-8.0724718',
      warn: "Le parc couvert est fermé pendant l’été 2026 (réouverture annoncée le 1er octobre)."
    },
    rocha: {
      name: 'Praia da Rocha', cat: 'plage', city: 'Portimão', img: 'rocha',
      desc: "Plage emblématique de Portimão, plus d’un kilomètre de sable entre falaises ocre et passerelles en bois.",
      address: { v: 'Praia da Rocha, 8500-802 Portimão', ok: true },
      phone: { v: '+351 282 242 620', ok: true },
      url: { v: 'https://visitportimao.com/en/beaches/praia-da-rocha/', ok: true, label: 'Visit Portimão' },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.1155086,-8.5320834'
    },
    nosoloagua: {
      name: 'NoSoloÁgua Portimão', cat: 'restaurant', city: 'Portimão', img: null,
      desc: "Beach club et pool club près de la Marina de Portimão : piscine d’eau salée, transats, restaurant et programmation musicale.", cuisine: 'Beach club en bord de mer',
      address: { v: 'Praia Marina de Portimão, Bloco 4, Loja 1, 8500 Portimão', ok: true },
      phone: { v: '+351 910 789 991 (piscine) · +351 911 139 426 (plage)', ok: true },
      url: { v: 'https://nosoloagua.com/nsaptm/en/homeen/', ok: true, label: 'Site officiel' },
      book: { v: 'https://nosoloagua.com/nsaptm/en/contacts/', ok: true },
      hours: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.1153868,-8.5275692',
      warn: "Le formulaire de réservation officiel indique « Fridays, Saturdays and Sundays — Adults only (Under 18 not allowed) ». Le 12 août est un mercredi, donc a priori sans objet, mais à confirmer par téléphone. Les coordonnées GPS publiées par l’établissement sont erronées ; celles utilisées ici viennent d’OpenStreetMap."
    },
    yachtVilamoura: {
      name: 'Yacht privé — Marina de Vilamoura', cat: 'activite', city: 'Vilamoura', img: 'piedade',
      desc: "Affrètement privé avec équipage au départ de la marina de Vilamoura : navigation le long de la côte, falaises, arrêt baignade et coucher de soleil.",
      address: { v: 'Marina de Vilamoura, Edifício Vila Marina 22, Quarteira', ok: true },
      phone: { v: '+351 289 115 961 · +351 930 593 494', ok: true },
      url: { v: 'https://www.vilamoura-yacht-charters.pt/', ok: true, label: 'Vilamoura Yacht Charters' },
      hours: { v: 'Bureau ouvert tous les jours 08h00 – 19h00', ok: true },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=37.0766676,-8.1214326',
      warn: "Autre opérateur vérifié au départ de Vilamoura : Vilamoura Watersports Centre, +351 937 777 913, watersportsvilamoura.com. Aucun prix n’est repris ici : demander un devis."
    },

    /* ---------- LISBONNE ---------- */
    theOven: {
      name: 'Oven Lisboa', cat: 'restaurant', city: 'Lisbonne', img: null,
      desc: "Restaurant indo-népalais de la Baixa, spécialisé dans les cuissons au tandoor, cité au Guide MICHELIN.", cuisine: 'Indo-népalais, cuissons au tandoor',
      address: { v: 'Rua dos Fanqueiros 232, 1100-232 Lisboa', ok: true },
      phone: { v: '+351 964 515 454', ok: false },
      url: { v: null, ok: false },
      hours: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7121059,-9.1364112',
      warn: "Pas de site officiel. Deux numéros différents circulent. Cuisine épicée : à vérifier pour les enfants. Réservation à confirmer par téléphone."
    },
    comercio: {
      name: 'Praça do Comércio', cat: 'monument', city: 'Lisbonne', img: 'comercio',
      desc: "Vaste place au bord du Tage, reconstruite après le séisme de 1755, bordée d’arcades et dominée par la statue équestre de Dom José I.",
      address: { v: 'Praça do Comércio, 1100-148 Lisboa', ok: true },
      url: { v: 'https://www.visitlisboa.com/en/places/praca-do-comercio-terreiro-do-paco', ok: true, label: 'Visit Lisboa' },
      price: { v: 'Gratuit, espace public', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.70777778,-9.13638889'
    },
    arco: {
      name: 'Arco da Rua Augusta', cat: 'monument', city: 'Lisbonne', img: 'arco',
      desc: "Arc de triomphe ouvrant la Rua Augusta sur la Praça do Comércio ; un ascenseur puis un escalier mènent à une terrasse à 360°.",
      address: { v: 'Rua Augusta 2, 1100-053 Lisboa', ok: true },
      phone: { v: '+351 210 998 599', ok: true },
      url: { v: 'https://www.visitlisboa.com/en/places/arco-da-rua-augusta', ok: true, label: 'Visit Lisboa' },
      book: { v: 'https://shop.visitlisboa.com/collections/tourist-attractions', ok: true },
      hours: { v: '10h00 – 19h00 (horaire affiché sur la fiche officielle)', ok: false },
      price: { v: '5,00 € par personne · gratuit avec la Lisboa Card', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7084,-9.1368',
      warn: "Escalier en colimaçon étroit sur les derniers mètres : peu adapté aux poussettes."
    },
    ruaAugusta: {
      name: 'Rua Augusta et Chiado', cat: 'monument', city: 'Lisbonne', img: 'rua-augusta',
      desc: "Grande artère piétonne de la Baixa reliant la Praça do Comércio au Rossio, puis le Chiado et ses cafés historiques.",
      address: { v: 'Rua Augusta, Baixa, Lisboa', ok: true },
      url: { v: 'https://www.visitlisboa.com/en/places/rua-augusta', ok: true, label: 'Visit Lisboa' },
      price: { v: 'Gratuit', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7113158,-9.1379346'
    },
    colombo: {
      name: 'Centro Colombo', cat: 'courses', city: 'Lisbonne', img: 'colombo',
      desc: "L’un des plus grands centres commerciaux de la péninsule Ibérique : plus de 340 boutiques, une soixantaine de restaurants, cinéma et bowling.",
      address: { v: 'Av. Lusíada, 1500-392 Lisboa', ok: true },
      phone: { v: '+351 217 113 600', ok: true },
      url: { v: 'https://www.visitlisboa.com/en/places/colombo-shopping-center', ok: true, label: 'Fiche Visit Lisboa' },
      hours: { v: '08h00 – 00h00 selon la fiche Visit Lisboa', ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7547749,-9.1889082',
      warn: "Le site colombo.pt bloque la lecture automatique : les horaires n’ont pas pu être recoupés. Métro ligne bleue, station Colégio Militar/Luz."
    },
    tram28: {
      name: 'Eléctrico 28E', cat: 'transport', city: 'Lisbonne', img: 'tram28',
      desc: "Tramway historique traversant Graça, l’Alfama, la Baixa, le Chiado et l’Estrela à bord de motrices des années 1930.",
      address: { v: 'Terminus nord : Martim Moniz · terminus sud : Campo de Ourique (Prazeres)', ok: true },
      url: { v: 'https://carris.pt/viaje/carreiras/28e-martim-moniz-prazeres', ok: true, label: 'Ligne officielle Carris' },
      hours: { v: 'Environ 05h45 – 22h30, fréquence 9 à 11 min en pointe', ok: true },
      price: { v: 'Tarifs Carris 2026 : 3,30 € à bord du tramway · 1,90 € le trajet avec carte rechargée · pass 24h Carris/Metro 7,25 €', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7167,-9.1358',
      warn: "La ligne 28E a connu plusieurs modifications de parcours en 2026. Vérifier carris.pt/viaje/alteracoes-de-servico la veille. Pickpockets très actifs."
    },
    castelo: {
      name: 'Castelo de São Jorge', cat: 'monument', city: 'Lisbonne', img: 'castelo',
      desc: "Château d’origine mauresque perché sur la plus haute colline de Lisbonne : onze tours, site archéologique, musée et vue sur le Tage.",
      address: { v: 'Rua de Santa Cruz do Castelo, 1100-129 Lisboa', ok: true },
      phone: { v: '+351 218 800 620', ok: true },
      url: { v: 'https://castelodesaojorge.pt/en/', ok: true, label: 'Site officiel' },
      book: { v: 'https://castelosaojorge.bol.pt/', ok: true },
      hours: { v: 'Tous les jours 09h00 – 21h00 du 1er mars au 31 octobre, dernière admission 20h30', ok: true },
      price: { v: 'Adulte 17 € · 13-25 ans 8,50 € · senior 65+ 14 € · gratuit pour les moins de 12 ans', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.71388889,-9.13361111'
    },
    santaLuzia: {
      name: 'Miradouro de Santa Luzia', cat: 'monument', city: 'Lisbonne', img: 'santa-luzia',
      desc: "Belvédère d’Alfama orné de panneaux d’azulejos, avec pergola, bassin et vue sur les toits et le Tage.",
      address: { v: 'Largo das Portas do Sol e de Santa Luzia, 1100-487 Lisboa', ok: true },
      url: { v: 'https://www.visitlisboa.com/en/places/miradouro-de-santa-luzia', ok: true, label: 'Visit Lisboa' },
      price: { v: 'Gratuit, accès libre', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7117413,-9.1302160'
    },
    alfama: {
      name: 'Alfama', cat: 'monument', city: 'Lisbonne', img: 'alfama',
      desc: "Le quartier le plus ancien de Lisbonne, seul rescapé du séisme de 1755 : ruelles en escalier, azulejos et linge aux fenêtres.",
      address: { v: 'Alfama, Lisboa', ok: true },
      url: { v: 'https://www.visitlisboa.com/fr/des-entroits/alfama', ok: true, label: 'Visit Lisboa' },
      price: { v: 'Gratuit', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.71222,-9.13000'
    },
    cimas: {
      name: 'CIMAS – The English Bar', cat: 'restaurant', city: 'Estoril', img: null,
      desc: "Restaurant historique de Monte Estoril, de style english bar : gibier, poissons et fruits de mer de l’Atlantique, desserts flambés.", cuisine: 'Gibier, poisson et fruits de mer',
      address: { v: 'Avenida de Sabóia 9, Monte Estoril, 2765-278 Estoril', ok: true },
      phone: { v: '+351 214 681 254', ok: true },
      url: { v: 'https://www.cimas.com.pt/en/', ok: true, label: 'Site officiel' },
      hours: { v: 'Lundi au samedi : 12h30 – 15h00 et 19h00 – 23h00 · fermé le dimanche', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7049934,-9.4079212',
      warn: "À environ 780 m de la Praia do Tamariz, avec une montée. Fermé le dimanche."
    },
    bolina: {
      name: 'Bolina', cat: 'restaurant', city: 'Estoril', img: null,
      desc: "Restaurant de poisson installé directement sur la promenade du Paredão, entre la Praia do Tamariz et la Praia da Poça.", cuisine: 'Poisson, face à la plage',
      address: { v: 'Paredão, entre Praia do Tamariz et Praia da Poça, 2765-262 Estoril', ok: true },
      phone: { v: '+351 21 468 7821', ok: false },
      url: { v: null, ok: false },
      hours: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7020762,-9.3960662',
      warn: "À 4-5 minutes à pied de la plage, sur le plat. Les horaires relevés suggèrent une fermeture à 18h00, donc pas de service du soir : appeler avant de compter dessus."
    },
    oMira: {
      name: 'O Mira', cat: 'restaurant', city: 'São Pedro do Estoril', img: null,
      desc: "Restaurant portugais en bord de mer à São Pedro do Estoril : grillades et cuisine familiale, salle climatisée et terrasse.", cuisine: 'Portugais, grillades',
      address: { v: 'Av. Marginal 4 B, 2765-584 São Pedro do Estoril', ok: true },
      phone: { v: '+351 214 688 069', ok: true },
      url: { v: 'https://omira.eatbu.com/?lang=en', ok: true, label: 'Site officiel' },
      hours: { v: 'Tous les jours 12h00 – 23h00', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.6943361,-9.3703710',
      warn: "À 2,7 km de la Praia do Tamariz : prévoir la voiture ou le train, pas la marche avec des enfants."
    },
    tamariz: {
      name: 'Praia do Tamariz', cat: 'plage', city: 'Estoril', img: 'tamariz',
      desc: "Plage emblématique de la Costa do Estoril : 190 m de sable, promenade du Paredão et piscine océanique gratuite.",
      address: { v: 'Av. Marginal, Estoril (face aux jardins du Casino)', ok: true },
      url: { v: 'https://ambiente.cascais.pt/pt/espacos/praias/praia-do-tamariz', ok: true, label: 'Cascais Ambiente' },
      price: { v: 'Accès gratuit · piscine océanique gratuite', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.70275,-9.399355'
    },
    boca: {
      name: 'Boca do Inferno', cat: 'monument', city: 'Cascais', img: 'boca',
      desc: "Gouffre marin et arche rocheuse creusés par l’Atlantique dans la falaise, avec plateformes d’observation.",
      address: { v: 'Av. Rei Humberto II de Itália 642, 2750-642 Cascais', ok: true },
      phone: { v: '+351 215 870 256', ok: true },
      url: { v: 'https://www.visitcascais.com/pt/partners/boca-do-inferno', ok: true, label: 'Visit Cascais' },
      price: { v: 'Gratuit, accès libre', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.69111111,-9.43111111',
      warn: "Falaises et projections d’eau : surveiller les enfants, ne pas franchir les garde-corps."
    },
    regaleira: {
      name: 'Quinta da Regaleira', cat: 'monument', city: 'Sintra', img: 'regaleira',
      desc: "Domaine romantique classé UNESCO : palais néomanuélin, jardins initiatiques, grottes et puits initiatique en spirale.",
      address: { v: 'Quinta da Regaleira 9, 2710-567 Sintra', ok: true },
      phone: { v: '+351 219 106 650', ok: true },
      url: { v: 'https://www.regaleira.pt/en/', ok: true, label: 'Site officiel' },
      book: { v: 'https://regaleira.byblueticket.pt/', ok: true },
      hours: { v: 'Avril à septembre 10h00 – 19h30 · dernière entrée 17h30 · créneaux toutes les 30 minutes', ok: true },
      price: { v: 'Adulte 18-64 ans 20 € · 6-17 ans 15 € · senior 15 € · pack famille 2 adultes + 2 jeunes 60 € · gratuit jusqu’à 5 ans', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.795875,-9.397281',
      warn: "Le pack famille à 60 € est plus avantageux que 4 billets séparés (70 €). Terrain pentu, escaliers humides, souterrains : chaussures fermées, poussette déconseillée."
    },
    strauss: {
      name: 'O Tasco do Strauss', cat: 'restaurant', city: 'Sintra', img: null,
      desc: "Petite tasca de Sintra installée dans les locaux de la Sociedade Filarmónica dos Aliados, orientée boissons et petiscos.", cuisine: 'Tasca, petiscos et boissons',
      address: { v: 'Largo dos Aliados 2, 2710-168 Sintra', ok: false },
      phone: { v: '+351 920 730 180', ok: false },
      url: { v: null, ok: false },
      hours: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.7925315,-9.3807098',
      warn: "AUCUNE source officielle n’a confirmé que cet établissement est toujours en activité en 2026. Adresse et téléphone proviennent uniquement d’agrégateurs d’avis. À appeler avant de compter dessus, et à remplacer si nécessaire."
    },
    pena: {
      name: 'Parque e Palácio Nacional da Pena', cat: 'monument', city: 'Sintra', img: 'pena',
      desc: "Palais romantique du XIXe siècle aux façades polychromes, entouré d’un parc paysager de 85 hectares classé UNESCO.",
      address: { v: 'Estrada da Pena, Sintra', ok: true },
      phone: { v: '+351 219 237 300', ok: true },
      url: { v: 'https://www.parquesdesintra.pt/en/parks-monuments/park-and-national-palace-of-pena/', ok: true, label: 'Site officiel' },
      book: { v: 'https://bilheteira.parquesdesintra.pt/', ok: true },
      hours: { v: 'Parc 09h00 – 19h00 (dernière admission 18h00) · palais 09h30 – 18h30 (dernier billet 17h30)', ok: true },
      price: { v: 'Parc seul : adulte 12 €, 6-17 ans 10 €, famille 40 €. Parc + palais : adulte 20 €, jeune 18 €, famille 65 €.', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.78777778,-9.39055556',
      warn: "Entrée au palais uniquement sur créneau horaire nominatif, à réserver à l’avance. Les véhicules privés ne peuvent PAS accéder au monument : bus 434 (passe 24h 10,96 €) ou navette. Le billet famille parc + palais (65 €) est plus avantageux que 4 billets séparés (76 €)."
    },
    eduardo7: {
      name: 'Parque Eduardo VII', cat: 'monument', city: 'Lisbonne', img: 'eduardo7',
      desc: "Plus grand parc du centre de Lisbonne, dans l’axe de l’Avenida da Liberdade, avec ses parterres en damier et un belvédère jusqu’au Tage.",
      address: { v: 'Parque Eduardo VII, 1070 Lisboa', ok: true },
      url: { v: null, ok: false },
      price: { v: 'Parc gratuit', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.72833333,-9.15277778'
    },
    torreBelem: {
      name: 'Torre de Belém', cat: 'monument', city: 'Lisbonne', img: 'torre-belem',
      desc: "Tour fortifiée manuéline du XVIe siècle sur la rive du Tage, classée au patrimoine mondial de l’UNESCO depuis 1983.",
      address: { v: 'Av. Brasília, 1400-038 Lisboa', ok: true },
      phone: { v: '+351 213 620 034', ok: true },
      url: { v: 'https://www.museusemonumentos.pt/en/museus-e-monumentos/belem-tower', ok: true, label: 'Site officiel' },
      book: { v: 'https://mmp.bymeoblueticket.pt/', ok: true },
      hours: { v: 'Mardi au dimanche 09h30 – 18h00, dernière entrée 17h30 · fermé le lundi', ok: false },
      price: { v: '15,00 € · gratuit jusqu’à 12 ans inclus', ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.69166667,-9.21611111',
      warn: "La tour a rouvert le 27 mai 2026 après un an de travaux, avec un NOUVEAU système d’accès par créneaux de 30 minutes et 900 visiteurs par jour maximum. La fiche officielle n’est pas à jour. Réservation en ligne indispensable en août. La visite extérieure peut suffire si la file est longue."
    },
    padrao: {
      name: 'Padrão dos Descobrimentos', cat: 'monument', city: 'Lisbonne', img: 'padrao',
      desc: "Monument de 52 m en forme de caravelle inauguré en 1960, avec 33 figures des Découvertes et un belvédère au sommet.",
      address: { v: 'Av. Brasília, 1400-038 Lisboa', ok: true },
      phone: { v: '+351 213 031 950', ok: true },
      url: { v: 'https://padraodosdescobrimentos.pt/en/', ok: true, label: 'Site officiel' },
      book: { v: 'https://padraodosdescobrimentos.pt/en/tickets/', ok: true },
      hours: { v: 'Mars à septembre 10h00 – 19h00, dernière entrée 18h30', ok: true },
      price: { v: 'Billet complet 10 € · 13-25 ans 5 € · senior 8,50 € · gratuit pour les moins de 12 ans', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.69360556,-9.20571944'
    },
    pasteis: {
      name: 'Pastéis de Belém', cat: 'restaurant', city: 'Lisbonne', img: 'pasteis',
      desc: "Pâtisserie fondée en 1837, seule détentrice de la recette originale du pastel de Belém, avec de vastes salles en azulejos.", cuisine: 'Pâtisserie, pastéis de Belém',
      address: { v: 'Rua de Belém 84 à 92, 1300-085 Lisboa', ok: true },
      phone: { v: '+351 213 637 423', ok: true },
      url: { v: 'https://pasteisdebelem.pt/en/', ok: true, label: 'Site officiel' },
      hours: { v: 'Tous les jours 08h00 – 22h00 du 1er juillet au 30 septembre', ok: true },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.6974795,-9.2033202',
      warn: "Deux files distinctes : la vente à emporter, souvent très longue, et les salles intérieures, généralement plus rapides. Entrez plutôt dans la salle."
    },
    cristoRei: {
      name: 'Santuário de Cristo Rei', cat: 'monument', city: 'Almada', img: 'cristo-rei',
      desc: "Sanctuaire inauguré en 1959 dont la statue de 28 m repose sur un portique de 82 m, avec plateforme panoramique face à Lisbonne.",
      address: { v: 'Alto do Pragal, Av. Cristo Rei, 2800-058 Almada', ok: true },
      phone: { v: '+351 212 751 000', ok: true },
      url: { v: 'https://cristorei.pt/', ok: true, label: 'Site officiel' },
      hours: { v: 'Avril à septembre 10h00 – 19h00, dernier accès à l’ascenseur 20 min avant la fermeture', ok: true },
      price: { v: '13 ans et plus 10 € · 8-12 ans 3 € · gratuit de 0 à 7 ans', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=38.67861,-9.17134',
      warn: "Billets vendus UNIQUEMENT sur place, aucune vente en ligne : prévoir de la file en août."
    },

    /* ---------- PORTO ---------- */
    saoBento: {
      name: 'Estação de São Bento', cat: 'monument', city: 'Porto', img: 'sao-bento',
      desc: "Gare de 1916 dont le hall est recouvert d’environ 20 000 azulejos peints par Jorge Colaço entre 1905 et 1916.",
      address: { v: 'Praça de Almeida Garrett, 4000-069 Porto', ok: true },
      url: { v: 'https://www.cp.pt/passageiros/pt/consultar-horarios/estacoes/porto-sao-bento', ok: true, label: 'Fiche CP' },
      price: { v: 'Accès libre au hall', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1454799,-8.6105220'
    },
    sePorto: {
      name: 'Sé Catedral do Porto', cat: 'monument', city: 'Porto', img: 'se-porto',
      desc: "Cathédrale romane du XIIe siècle remaniée aux XVIIe et XVIIIe siècles, avec un cloître gothique orné d’azulejos.",
      address: { v: 'Terreiro da Sé, 4050-573 Porto', ok: true },
      phone: { v: '+351 222 059 028', ok: true },
      url: { v: 'https://www.diocese-porto.pt/pt/catedral-do-porto/', ok: true, label: 'Diocèse de Porto' },
      hours: { v: 'Été 09h00 – 18h30 · messe quotidienne à 11h00', ok: true },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1427992,-8.6112059',
      warn: "Aucun tarif de cloître publié par le diocèse."
    },
    clerigos: {
      name: 'Torre dos Clérigos', cat: 'monument', city: 'Porto', img: 'clerigos',
      desc: "Tour baroque de 1763 signée Nicolau Nasoni, emblème de Porto, avec plateforme panoramique et musée de la Confrérie.",
      address: { v: 'R. de São Filipe de Nery, 4050-546 Porto', ok: true },
      phone: { v: '+351 220 145 489', ok: true },
      url: { v: 'https://www.torredosclerigos.pt/en/', ok: true, label: 'Site officiel' },
      book: { v: 'https://www.torredosclerigos.pt/en/ticket-office/', ok: true },
      hours: { v: 'Tous les jours 09h00 – 19h00, dernière entrée 30 min avant la fermeture', ok: true },
      price: { v: 'Tour + musée 10 € · étudiants 7 € · gratuit pour les moins de 10 ans · billet de nuit 5 €', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1456547,-8.6146275'
    },
    lello: {
      name: 'Livraria Lello', cat: 'monument', city: 'Porto', img: 'lello',
      desc: "Librairie néogothique ouverte en 1906, célèbre pour son escalier rouge et son plafond en bois sculpté.",
      address: { v: 'Rua das Carmelitas 144, 4050-161 Porto', ok: true },
      phone: { v: '+351 222 002 037', ok: true },
      url: { v: 'https://www.livrarialello.pt/en', ok: true, label: 'Site officiel' },
      book: { v: 'https://tickets.livrarialello.pt/', ok: true },
      hours: { v: 'Tous les jours 09h00 – 19h30', ok: true },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1468317,-8.6148485',
      warn: "Billet-voucher OBLIGATOIRE pour entrer, même pour acheter un livre ; son montant est déduit de l’achat. Gratuit jusqu’à 3 ans inclus. Billet valable jusqu’à 60 min après l’heure réservée. Le prix n’est pas publié en clair : le voir sur la billetterie."
    },
    saoNicolau: {
      name: 'Adega São Nicolau', cat: 'restaurant', city: 'Porto', img: null,
      desc: "Petite adresse traditionnelle de la Ribeira : poisson, morue et plats de terroir, avec une terrasse donnant sur le Douro.", cuisine: 'Poisson, morue et terroir',
      address: { v: 'Rua de S. Nicolau 1, 4050-161 Porto', ok: true },
      phone: { v: '+351 222 008 232', ok: true },
      url: { v: 'https://adegasnicolau.eatbu.com/?lang=en', ok: true, label: 'Page officielle' },
      hours: { v: 'Lundi au samedi 12h00 – 15h00 et 19h00 – 22h30 · fermé le dimanche', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1404291,-8.6148874',
      warn: "Petit établissement, pas de réservation en ligne : appeler."
    },
    mercadores: {
      name: 'Taberna dos Mercadores', cat: 'restaurant', city: 'Porto', img: null,
      desc: "Toute petite taverne de la Ribeira, huit tables seulement : poisson frais du jour, palourdes, poulpe, morue, agneau du nord.", cuisine: 'Poisson frais, taverne de la Ribeira',
      address: { v: 'Rua dos Mercadores 36-38, 4050-373 Porto', ok: true },
      phone: { v: '+351 222 010 510', ok: true },
      url: { v: 'https://tabernadosmercadores.com/', ok: true, label: 'Site officiel' },
      hours: { v: 'Mardi au dimanche 12h30 – 22h30, dernier service 21h45 · fermé le lundi', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1413553,-8.6129667',
      warn: "Huit tables : les réservations partent parfois des mois à l’avance. Appels pris entre 10h30 et 11h30."
    },
    abadia: {
      name: 'Restaurante Abadia do Porto', cat: 'restaurant', city: 'Porto', img: null,
      desc: "Institution de la Baixa depuis plus de 80 ans : bacalhau com broa, arroz de tamboril, polvo à lagareiro et tripas à moda do Porto.", cuisine: 'Cuisine du Porto, bacalhau',
      address: { v: 'Rua Ateneu Comercial do Porto 22-24, 4000-380 Porto', ok: true },
      phone: { v: '+351 222 008 757 · +351 963 566 127', ok: true },
      url: { v: 'https://www.abadiadoporto.com/', ok: true, label: 'Site officiel' },
      hours: { v: 'Mardi au samedi 12h00 – 15h00 et 18h30 – 22h30 · lundi 18h30 – 22h30 · fermé le dimanche', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1480480,-8.6079063'
    },
    ribeira: {
      name: 'Cais da Ribeira', cat: 'monument', city: 'Porto', img: 'ribeira',
      desc: "Quai piétonnier au pied des maisons colorées de la Ribeira, en bord de Douro, classé au patrimoine mondial de l’UNESCO.",
      address: { v: 'Cais da Ribeira, 4050-199 Porto', ok: true },
      price: { v: 'Gratuit, accès libre', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1405460,-8.6118425'
    },
    ponteLuis: {
      name: 'Ponte Dom Luís I', cat: 'monument', city: 'Porto', img: 'ponte-luis',
      desc: "Pont métallique à double tablier inauguré en 1886, œuvre de Théophile Seyrig ; les deux niveaux sont accessibles à pied.",
      address: { v: 'Entre la Ribeira (Porto) et Vila Nova de Gaia', ok: true },
      price: { v: 'Gratuit pour les piétons', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.139863,-8.609336',
      warn: "Tablier SUPÉRIEUR : piétons et métro ligne D, c’est le niveau panoramique, il débouche sur le Jardim do Morro. Tablier inférieur : piétons et voitures, il relie la Ribeira au quai de Gaia."
    },
    morro: {
      name: 'Jardim do Morro', cat: 'monument', city: 'Vila Nova de Gaia', img: 'morro',
      desc: "Jardin en belvédère à la sortie du tablier supérieur du pont, avec vue plongeante sur Porto et le Douro.",
      address: { v: 'Av. da República, Santa Marinha, 4430-148 Vila Nova de Gaia', ok: true },
      url: { v: 'https://gaiacablecar.com/en/prices-and-timetable/', ok: true, label: 'Téléphérique de Gaia' },
      hours: { v: 'Jardin libre · téléphérique 10h00 – 20h00 du 26 avril au 24 septembre', ok: true },
      price: { v: 'Jardin gratuit · téléphérique aller-retour adulte 10 €, enfant 5-12 ans 5 €, pack famille 2+2 22,50 €', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1376202,-8.6086894',
      warn: "Métro ligne D, station Jardim do Morro, juste à la sortie du tablier supérieur du pont."
    },
    sandeman: {
      name: 'Caves Sandeman', cat: 'activite', city: 'Vila Nova de Gaia', img: 'sandeman',
      desc: "Caves sur le quai de Gaia, reconnaissables à la silhouette du « Don » : visite guidée de 50 minutes et dégustation de trois portos.",
      address: { v: 'Largo Miguel Bombarda 47, 4400-222 Vila Nova de Gaia', ok: true },
      phone: { v: '+351 223 740 534', ok: true },
      url: { v: 'https://winetourism.sogrape.com/en/visit/sandeman', ok: true, label: 'Site officiel' },
      hours: { v: 'Tous les jours 10h00 – 12h30 et 14h00 – 18h00 · dernières visites 12h15 et 17h15', ok: true },
      price: { v: 'Porto Sandeman Visit 23 € (50 min, 3 portos) · Port Wine & Chocolate 32 € · Sandeman 1790 Visit 35 €', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1375905,-8.6124806',
      warn: "Aucun tarif enfant publié. Seule la « Visit & Metaverse Experience » impose 16 ans minimum. Demander une boisson sans alcool pour les enfants et les non-buveurs."
    },
    calem: {
      name: 'Caves Cálem', cat: 'activite', city: 'Vila Nova de Gaia', img: 'calem',
      desc: "Cave sur le quai de Gaia avec musée interactif du porto, visite guidée des chais et dégustation, option spectacle de fado.",
      address: { v: 'Av. de Diogo Leite 344, 4400-111 Vila Nova de Gaia', ok: true },
      phone: { v: '+351 916 113 451', ok: true },
      url: { v: 'https://tour.calem.pt/en/', ok: true, label: 'Site des visites' },
      book: { v: 'https://cavescalem.byblueticket.pt/', ok: true },
      hours: { v: null, ok: false },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1380237,-8.6109786',
      warn: "Ni horaires complets ni tarifs publiés en clair par l’exploitant. Voir la billetterie officielle."
    },
    bolhao: {
      name: 'Mercado do Bolhão', cat: 'courses', city: 'Porto', img: 'bolhao',
      desc: "Marché historique du XIXe siècle rouvert après restauration : étals de produits frais, boutiques et restaurants sur plusieurs niveaux.",
      address: { v: 'Rua Formosa 322, 4000-248 Porto', ok: true },
      phone: { v: '+351 223 326 024', ok: true },
      url: { v: 'https://mercadobolhao.pt/', ok: true, label: 'Site officiel' },
      hours: { v: 'Lundi au vendredi 08h00 – 20h00 · samedi 08h00 – 18h00 · fermé le dimanche', ok: true },
      price: { v: 'Entrée libre', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1493156,-8.6069470',
      warn: "Le site officiel se contredit : 20h00 sur le bandeau et la FAQ, 19h00 sur la page contacts. Métro station Bolhão, accès direct."
    },
    bomfim: {
      name: 'Quinta do Bomfim', cat: 'activite', city: 'Pinhão', img: 'bomfim',
      desc: "Domaine de la famille Symington au bord du Douro à Pinhão : chais, dégustations, balades dans les vignes et restaurant Bomfim 1896.",
      address: { v: 'Quinta do Bomfim, 5085-060 Pinhão, Alijó', ok: true },
      phone: { v: '+351 254 730 370', ok: true },
      url: { v: 'https://www.symington.com/visit/quinta-do-bomfim/3', ok: true, label: 'Site officiel' },
      hours: { v: '1er mars au 31 octobre : tous les jours 10h00 – 19h00, dernière visite 17h30', ok: true },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.189245,-7.540943',
      warn: "Aucun tarif publié. Politique enfants non publiée. Restaurant Bomfim 1896 sur place. Réserver par téléphone ou e-mail, la dernière visite est à 17h30."
    },
    pacheca: {
      name: 'Quinta da Pacheca', cat: 'activite', city: 'Lamego', img: 'pacheca',
      desc: "Domaine du Douro à Cambres près de Lamego : visites et dégustations, restaurant et hôtel 5 étoiles avec ses chambres en tonneaux.",
      address: { v: 'Cambres, 5100-381 Lamego', ok: false },
      phone: { v: null, ok: false },
      url: { v: 'https://pacheca.com/pages/quintadapacheca', ok: true, label: 'Site officiel' },
      hours: { v: null, ok: false },
      price: { v: null, ok: false },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1541385,-7.7966718',
      warn: "Alternative à Bomfim. Le site est protégé par une porte de vérification d’âge : adresse, téléphone, horaires et tarifs n’ont pas pu être vérifiés."
    },
    croisierePinhao: {
      name: 'Croisière d’une heure au départ de Pinhão', cat: 'activite', city: 'Pinhão', img: 'douro-cruise',
      desc: "Mini-croisière en barco rabelo traditionnel, de Pinhão à Romaneira et retour, à travers les terrasses viticoles classées UNESCO.",
      address: { v: 'Cais do Pinhão', ok: true },
      phone: { v: '+351 226 191 090 (Cruzeiros Douro)', ok: true },
      url: { v: 'https://www.cruzeiros-douro.pt/pt/cruzeiros-1-dia/cruzeiro-pinhao-romaneira-pinhao', ok: true, label: 'Cruzeiros Douro' },
      hours: { v: 'Avril à octobre 10h00 – 17h30, départs toutes les 30 minutes', ok: true },
      price: { v: '15 € par adulte · 50 % de réduction de 6 à 11 ans · gratuit jusqu’à 5 ans inclus', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1896,-7.5464',
      warn: "Deux autres opérateurs vérifiés au même quai : Portodouro (départs toutes les heures de 10h30 à 17h30, 15 €, +351 229 389 933) et Companhia Turística do Douro (50 min, à partir de 15 €, +351 254 732 702, parking gratuit à 1 min)."
    },
    loivos: {
      name: 'Miradouro de Casal de Loivos', cat: 'monument', city: 'Alijó', img: 'loivos',
      desc: "Belvédère à environ 6 km au-dessus de Pinhão, la vue la plus réputée sur la boucle du Douro et ses terrasses.",
      address: { v: 'Casal de Loivos, Alijó', ok: true },
      price: { v: 'Gratuit, accès libre', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.1985339,-7.5321377'
    },
    pinhao: {
      name: 'Pinhão', cat: 'monument', city: 'Alijó', img: 'pinhao',
      desc: "Petit bourg au bord du Douro, au cœur des terrasses viticoles, célèbre pour les azulejos de sa gare.",
      address: { v: 'Pinhão, Alijó', ok: true },
      maps: 'https://www.google.com/maps/search/?api=1&query=41.18885,-7.54563'
    }
  },

  /* ------------------------------------------------------------ 12 JOURNÉES
     Chaque `item` : { t: heure, k: type, title, text, place, todo }
     k : reveil · repas · route · visite · plage · courses · libre · soir     */
  days: [
    {
      n: 1, date: '2026-08-09', label: 'Dimanche 9 août', leg: 'algarve', sunset: '20h33',
      gallery: ['vilamoura-marina','vilamoura-praia','faro','marinha'],
      title: 'Arrivée en Algarve', hero: 'vilamoura-marina',
      lead: "Faro, Vilamoura, Quarteira. Journée légère après les vols : rien de fatigant.",
      items: [
        { t: '09h00', k: 'route', title: 'Arrivée du groupe 1 à Faro', text: "Récupération des bagages puis des deux voitures de location.", place: 'faro' },
        { t: '10h00', k: 'route', title: 'Arrivée du groupe 2', text: "Regroupement de toute la famille et répartition dans les véhicules." },
        { t: '10h30', k: 'route', title: 'Départ vers Vilamoura', text: "Environ 25 à 30 minutes selon la circulation — durée à confirmer le jour même." },
        { t: '11h00', k: 'visite', title: 'Marina et plage de Vilamoura', text: "Promenade sur les pontons, yachts, photos, café ou glace, puis un moment sur la plage.", place: 'vilamouraMarina' },
        { t: '12h45', k: 'repas', title: 'Déjeuner portugais', text: "Poisson et fruits de mer face à la marina.", place: 'cesteiro', todo: 'À réserver' },
        { t: '14h30', k: 'courses', title: 'Courses à ALDI Quarteira', text: "Eau, jus, petits-déjeuners, snacks, fruits, boissons, produits pour le logement, glaces.", place: 'aldi' },
        { t: '16h00', k: 'libre', title: 'Check-in à la villa', text: "Déchargement, répartition des chambres, découverte du logement, connexion au Wi-Fi." },
        { t: '17h00', k: 'libre', title: 'Piscine et temps libre', text: "Repos jusqu’au dîner." },
        { t: '20h00', k: 'soir', title: 'Dîner simple à la villa', text: "Avec les courses du jour." },
        { t: '21h30', k: 'soir', title: 'Première soirée en famille', text: "Tranquille." }
      ],
      pack: ['Maillot et serviette dans le bagage cabine', 'Crème solaire 50', 'Lunettes de soleil', 'Permis de conduire pour le loueur', 'Passeports ou cartes d’identité', 'Une veste légère pour le soir']
    },
    {
      n: 2, date: '2026-08-10', label: 'Lundi 10 août', leg: 'algarve', sunset: '20h32',
      gallery: ['loule','falesia','marinha','piedade'],
      title: 'Loulé, Falésia et barbecue', hero: 'loule',
      lead: "Du marché à l’assiette : on achète le matin ce qu’on grillera le soir.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner à la villa', text: "" },
        { t: '10h30', k: 'route', title: 'Départ pour Loulé', text: "Durée du trajet à confirmer." },
        { t: '11h00', k: 'courses', title: 'Mercado Municipal de Loulé', text: "Produits locaux, fromages, charcuteries, légumes, fruits, pain, pâtisseries, poissons, fruits de mer, gambas, viandes. Demander au poissonnier de nettoyer et préparer les poissons.", place: 'loule' },
        { t: '12h45', k: 'route', title: 'Départ du marché', text: "" },
        { t: '13h15', k: 'libre', title: 'Retour à la villa', text: "Décharger immédiatement : poissons et fruits de mer au réfrigérateur, boissons au frais." },
        { t: '13h30', k: 'repas', title: 'Déjeuner à la villa', text: "" },
        { t: '14h30', k: 'libre', title: 'Repos et préparation plage', text: "" },
        { t: '15h30', k: 'route', title: 'Départ vers Praia da Falésia', text: "" },
        { t: '16h00', k: 'plage', title: 'Praia da Falésia', text: "Baignade, promenade au pied des falaises rouges, photos, boisson fraîche.", place: 'falesia' },
        { t: '19h15', k: 'route', title: 'Retour à la villa', text: "" },
        { t: '20h00', k: 'soir', title: 'Barbecue « Saveurs de l’Algarve »', text: "Poissons grillés, gambas, viandes, légumes, salades, pain portugais, fruits, desserts." },
        { t: '22h00', k: 'soir', title: 'Piscine, musique, soirée familiale', text: "" }
      ],
      pack: ['Sacs isothermes pour le marché', 'Espèces pour le marché', 'Maillots et serviettes', 'Crème solaire', 'Chapeaux', 'Eau']
    },
    {
      n: 3, date: '2026-08-11', label: 'Mardi 11 août', leg: 'algarve', sunset: '20h31',
      gallery: ['aquashow','falesia','vilamoura-praia'],
      title: 'Aquashow', hero: 'aquashow',
      lead: "Journée familiale et dynamique, suivie d’une soirée calme. Pas d’autre grande sortie ce jour-là.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h00', k: 'libre', title: 'Préparation des sacs', text: "Maillots, serviettes, crème solaire, eau, casquettes, vêtements de rechange, affaires des enfants." },
        { t: '10h30', k: 'route', title: 'Départ pour Aquashow', text: "" },
        { t: '11h00', k: 'visite', title: 'Aquashow Waterpark', text: "Attractions aquatiques, toboggans, piscine à vagues, rivière lente, zones enfants, déjeuner ou collation sur place. Le parc ouvre à 10h00 et ferme à 18h00 : à caler selon l’énergie du groupe.", place: 'aquashow', todo: 'Billets à acheter en ligne' },
        { t: '16h00', k: 'route', title: 'Retour à la villa', text: "" },
        { t: '17h00', k: 'libre', title: 'Douche, repos, piscine', text: "" },
        { t: '20h00', k: 'soir', title: 'Dîner simple au logement', text: "Soirée libre." }
      ],
      pack: ['Maillots', 'Serviettes', 'Crème solaire résistante à l’eau', 'Casquettes', 'Eau', 'Vêtements de rechange', 'Sac étanche pour le téléphone', 'Billets Aquashow sur le téléphone']
    },
    {
      n: 4, date: '2026-08-12', label: 'Mercredi 12 août', leg: 'algarve', sunset: '20h31',
      gallery: ['rocha','piedade','marinha','falesia'],
      title: 'Portimão, beach club et yacht', hero: 'rocha',
      lead: "Le temps fort de l’Algarve : après-midi au bord de la piscine, puis coucher de soleil en mer.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'route', title: 'Départ pour Portimão', text: "Temps de trajet à confirmer." },
        { t: '11h30', k: 'plage', title: 'Praia da Rocha', text: "Plage, promenade sur les passerelles, photos, baignade rapide si souhaité.", place: 'rocha' },
        { t: '13h00', k: 'repas', title: 'NoSoloÁgua Portimão', text: "Déjeuner, beach club, piscine, transats, boissons, temps en famille.", place: 'nosoloagua', todo: 'À réserver' },
        { t: '17h00', k: 'visite', title: 'Arrivée au port et embarquement', text: "Retrouver l’équipage au ponton." },
        { t: '17h30', k: 'visite', title: 'Croisière privée en yacht — environ 3 h', text: "Navigation le long de la côte, falaises, grottes selon l’itinéraire, arrêt baignade si les conditions le permettent, musique, boissons, apéritif, coucher de soleil.", place: 'yachtVilamoura', todo: 'À réserver' },
        { t: '20h30', k: 'route', title: 'Retour au port', text: "" },
        { t: '21h00', k: 'soir', title: 'Retour à la villa ou repas rapide', text: "Selon l’énergie du groupe." }
      ],
      pack: ['Maillots et serviettes', 'Crème solaire', 'Chapeaux', 'Veste légère pour la mer en fin de journée', 'Chaussures antidérapantes pour le bateau', 'Appareil photo chargé', 'Médicament contre le mal de mer si besoin'],
      alert: "L’horaire du yacht est PROVISOIRE. Le coucher de soleil du 12 août à Portimão est calculé à 20h31 : une sortie de 16h30 à 19h30 ne le couvrirait pas. Le créneau 17h30 – 20h30 est proposé sous réserve de la disponibilité du bateau et de l’heure officielle du coucher du soleil."
    },
    {
      n: 5, date: '2026-08-13', label: 'Jeudi 13 août', leg: 'lisbonne', sunset: '20h35',
      gallery: ['comercio','arco','rua-augusta','chiado','colombo'],
      title: 'Algarve → Lisbonne', hero: 'comercio',
      lead: "Matinée de route, après-midi d’installation, première soirée dans la Baixa.",
      travel: 'Algarve → Lisbonne · environ 2 h 45 de route par l’A2 — à confirmer selon les logements',
      items: [
        { t: '07h30', k: 'reveil', title: 'Réveil', text: "" },
        { t: '08h00', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '08h45', k: 'libre', title: 'Bagages et vérification de la villa', text: "Passeports, chargeurs, vêtements, médicaments, frigo, poubelles, chambres, salles de bain, clés, voitures chargées." },
        { t: '10h00', k: 'route', title: 'Check-out et départ vers Lisbonne', text: "" },
        { t: '13h00', k: 'libre', title: 'Arrivée au logement à Lisbonne', text: "Dépôt des affaires, installation rapide." },
        { t: '14h00', k: 'repas', title: 'Déjeuner', text: "Restaurant indo-népalais de la Baixa.", place: 'theOven', todo: 'À vérifier et réserver' },
        { t: '15h30', k: 'visite', title: 'Première promenade dans la Baixa', text: "Praça do Comércio, Arco da Rua Augusta, Rua Augusta, Chiado, places, statues, artistes de rue.", place: 'comercio' },
        { t: '19h00', k: 'route', title: 'Direction Centro Colombo', text: "Métro ligne bleue, station Colégio Militar/Luz." },
        { t: '19h30', k: 'courses', title: 'Centro Colombo', text: "Courses pour le logement, petits-déjeuners, boissons, dîner léger ou café, shopping libre.", place: 'colombo' },
        { t: '22h00', k: 'soir', title: 'Retour au logement', text: "" }
      ],
      pack: ['Bagages faits avant 9h', 'Carte de transport à acheter en arrivant', 'Chargeurs', 'Chaussures de marche', 'Bouteille d’eau'],
      note: "La cathédrale de Lisbonne n’est volontairement pas dans cette journée."
    },
    {
      n: 6, date: '2026-08-14', label: 'Vendredi 14 août', leg: 'lisbonne', sunset: '20h35',
      gallery: ['tram28','castelo','alfama','santa-luzia','tamariz'],
      title: 'Lisbonne historique, Estoril et Cascais', hero: 'castelo',
      lead: "Le matin dans la vieille ville, l’après-midi au bord de l’océan, le soir sur les falaises.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'route', title: 'Départ vers le centre historique', text: "" },
        { t: '11h00', k: 'visite', title: 'Expérience Tram 28', text: "Point de départ conseillé : Martim Moniz, pour avoir une place assise. Forte affluence à prévoir.", place: 'tram28' },
        { t: '11h45', k: 'visite', title: 'Castelo de São Jorge', text: "Remparts, panoramas, jardins, paons en liberté, photos.", place: 'castelo' },
        { t: '13h15', k: 'visite', title: 'Descente dans l’Alfama', text: "Ruelles, azulejos, Miradouro de Santa Luzia, photos.", place: 'santaLuzia' },
        { t: '14h00', k: 'route', title: 'Départ vers Estoril', text: "" },
        { t: '15h00', k: 'repas', title: 'Déjeuner de poissons à Estoril', text: "Trois adresses vérifiées, à départager selon la proximité de la plage et la capacité pour le groupe.", place: 'cimas', todo: 'Choix à arrêter et à réserver' },
        { t: '16h30', k: 'plage', title: 'Praia do Tamariz', text: "Plage, front de mer, courte promenade, photos.", place: 'tamariz' },
        { t: '17h30', k: 'route', title: 'Départ vers Cascais', text: "" },
        { t: '18h00', k: 'visite', title: 'Boca do Inferno', text: "Falaises, promenade, photos, coucher de soleil à 20h35.", place: 'boca' },
        { t: '21h00', k: 'route', title: 'Retour vers Lisbonne', text: "" },
        { t: '22h00', k: 'soir', title: 'Dîner simple au logement', text: "Ou selon les envies." }
      ],
      pack: ['Chaussures fermées à semelle adhérente', 'Maillots et serviettes', 'Crème solaire', 'Coupe-vent pour les falaises', 'Carte de transport rechargée', 'Sac devant soi dans le tram'],
      note: "Trois restaurants vérifiés à Estoril : CIMAS (à 780 m, fermé le dimanche), Bolina (à 300 m sur le Paredão, semble fermer à 18h00), O Mira (à 2,7 km, ouvert tous les jours 12h-23h). Le choix reste à faire."
    },
    {
      n: 7, date: '2026-08-15', label: 'Samedi 15 août', leg: 'lisbonne', sunset: '20h34',
      gallery: ['regaleira','pena','chiado'],
      title: 'Sintra', hero: 'regaleira',
      lead: "Le puits initiatique le matin, le palais de Pena l’après-midi.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'route', title: 'Départ pour Sintra', text: "" },
        { t: '11h15', k: 'visite', title: 'Quinta da Regaleira', text: "Puits initiatique, tunnels, jardins, grottes, architecture, photos.", place: 'regaleira', todo: 'Billets à réserver' },
        { t: '13h15', k: 'repas', title: 'Pause au Tasco do Strauss', text: "Petit bar caché dans une ruelle en pierre, orienté boissons et petiscos.", place: 'strauss', todo: 'Existence à confirmer par téléphone' },
        { t: '14h45', k: 'route', title: 'Transport vers le Palais de Pena', text: "Bus 434 ou navette : les véhicules privés ne peuvent pas accéder au monument." },
        { t: '15h15', k: 'visite', title: 'Palácio Nacional da Pena', text: "Extérieurs, terrasses, architecture, points de vue, jardins proches. La visite intérieure n’est pas prioritaire.", place: 'pena', todo: 'Créneau à réserver' },
        { t: '17h45', k: 'route', title: 'Retour vers Lisbonne', text: "" },
        { t: '19h00', k: 'soir', title: 'Soirée libre', text: "Dîner au logement, restaurant ou repos." }
      ],
      pack: ['Billets Regaleira et Pena sur le téléphone', 'Chaussures fermées, le terrain est pentu et humide', 'Pull léger, il fait plus frais à Sintra', 'Eau et en-cas', 'Batterie externe'],
      note: "Vérifier si le billet « parc seul » suffit pour ce que vous voulez voir à Pena : il coûte 12 € contre 20 € avec le palais, et il n’impose pas de créneau horaire."
    },
    {
      n: 8, date: '2026-08-16', label: 'Dimanche 16 août', leg: 'lisbonne', sunset: '20h32',
      gallery: ['eduardo7','torre-belem','padrao','pasteis','cristo-rei'],
      title: 'Parque Eduardo VII, Belém et Cristo Rei', hero: 'padrao',
      lead: "Panorama le matin, Découvertes à midi, l’autre rive du Tage l’après-midi.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'route', title: 'Départ', text: "" },
        { t: '11h00', k: 'visite', title: 'Parque Eduardo VII', text: "Promenade, panorama sur Lisbonne, photos de groupe.", place: 'eduardo7' },
        { t: '12h15', k: 'visite', title: 'Torre de Belém', text: "À adapter selon les horaires et la file. La visite extérieure peut suffire.", place: 'torreBelem', todo: 'Créneau à réserver' },
        { t: '13h00', k: 'visite', title: 'Padrão dos Descobrimentos', text: "Façade, carte du monde au sol, promenade au bord du Tage.", place: 'padrao' },
        { t: '14h00', k: 'repas', title: 'Pastéis de Belém', text: "Dégustation, photos, courte pause.", place: 'pasteis' },
        { t: '14h30', k: 'repas', title: 'Déjeuner à Belém', text: "Restaurant à choisir et à ajouter ici.", todo: 'À définir' },
        { t: '16h00', k: 'route', title: 'Départ vers Cristo Rei', text: "En traversant le pont du 25-Avril." },
        { t: '16h45', k: 'visite', title: 'Santuário de Cristo Rei', text: "Sanctuaire, panorama sur Lisbonne et le pont, photos.", place: 'cristoRei' },
        { t: '19h00', k: 'soir', title: 'Retour vers Lisbonne', text: "Soirée libre ou dîner au logement." }
      ],
      pack: ['Chapeaux, il n’y a pas d’ombre à Belém', 'Crème solaire', 'Eau', 'Espèces pour les pastéis', 'Billet Torre de Belém sur le téléphone'],
      note: "Le Centro Vasco da Gama n’est pas imposé : à garder comme option si le groupe veut encore sortir."
    },
    {
      n: 9, date: '2026-08-17', label: 'Lundi 17 août', leg: 'porto', sunset: '20h32',
      gallery: ['ponte-luis','ribeira','sao-bento'],
      title: 'Lisbonne → Porto et mariage', hero: 'ponte-luis',
      lead: "Route le matin, mariage l’après-midi. Deux programmes en parallèle.",
      travel: 'Lisbonne → Porto · environ 313 km et 3 h 25 de route par l’A1, hors trafic et hors pauses',
      items: [
        { t: '07h30', k: 'reveil', title: 'Réveil', text: "" },
        { t: '08h00', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '08h30', k: 'libre', title: 'Bagages et check-out', text: "" },
        { t: '10h00', k: 'route', title: 'Départ de Lisbonne — impérativement', text: "Environ 3 h 25 de route hors trafic. Prévoir une pause." },
        { t: '13h00', k: 'libre', title: 'Arrivée au logement à Porto', text: "Déposer les valises, installation rapide, douche, préparation." },
        { t: '14h30', k: 'soir', title: 'Groupe mariage — départ', text: "Le mariage est annoncé à 14h00, une arrivée vers 15h00 reste acceptable selon l’organisation.", todo: 'Heure et adresse à confirmer' },
        { t: '14h30', k: 'libre', title: 'Programme libre — pour les autres', text: "Repos au logement, sortie libre, petite découverte du quartier. Aucune activité obligatoire." }
      ],
      pack: ['Bagages faits avant 9h', 'Tenue de mariage accessible, pas au fond du coffre', 'Chaussures habillées', 'Chargeur pour la route', 'Eau et en-cas pour la voiture'],
      alert: "Deux programmes distincts ce jour-là : « groupe mariage » et « programme libre ». L’heure et l’adresse exactes du mariage restent à confirmer."
    },
    {
      n: 10, date: '2026-08-18', label: 'Mardi 18 août', leg: 'porto', sunset: '20h31',
      gallery: ['sao-bento','se-porto','clerigos','lello','ribeira'],
      title: 'Porto historique', hero: 'ribeira',
      lead: "Une boucle à pied : les lieux sont tous proches les uns des autres.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'route', title: 'Départ', text: "" },
        { t: '11h00', k: 'visite', title: 'Gare de São Bento', text: "Azulejos, hall historique, photos. Gratuit.", place: 'saoBento' },
        { t: '11h30', k: 'visite', title: 'Cathédrale de Porto', text: "Extérieur, cloître si le groupe le souhaite, panorama.", place: 'sePorto' },
        { t: '12h30', k: 'visite', title: 'Torre dos Clérigos', text: "Extérieur, montée optionnelle : 10 €, gratuit pour les moins de 10 ans.", place: 'clerigos' },
        { t: '13h00', k: 'visite', title: 'Livraria Lello', text: "Billet-voucher obligatoire, à prendre en ligne à l’avance.", place: 'lello', todo: 'Billet à réserver' },
        { t: '14h00', k: 'repas', title: 'Déjeuner à Porto', text: "Adega São Nicolau dans la Ribeira, ou l’une des deux alternatives vérifiées.", place: 'saoNicolau', todo: 'À réserver par téléphone' },
        { t: '15h30', k: 'visite', title: 'Ribeira', text: "Façades, quais, ambiance, promenade.", place: 'ribeira' },
        { t: '17h00', k: 'visite', title: 'Pont Dom Luís I', text: "Traversée à pied par le tablier supérieur pour la vue.", place: 'ponteLuis' },
        { t: '18h00', k: 'visite', title: 'Vila Nova de Gaia', text: "Promenade, vue sur Porto. La cave de porto peut se faire ici ou être gardée pour le 20.", place: 'sandeman' },
        { t: '19h30', k: 'visite', title: 'Jardim do Morro', text: "Vue panoramique, coucher de soleil à 20h31, photos.", place: 'morro' },
        { t: '21h00', k: 'soir', title: 'Dîner', text: "Restaurant avec vue ou bonne adresse de Porto. La francesinha est à tester comme plat du soir, pas en goûter après un déjeuner complet.", place: 'abadia', todo: 'À choisir' }
      ],
      pack: ['Chaussures confortables, la journée est entièrement à pied', 'Billet Livraria Lello sur le téléphone', 'Veste légère pour le soir au bord du fleuve', 'Eau', 'Batterie externe']
    },
    {
      n: 11, date: '2026-08-19', label: 'Mercredi 19 août', leg: 'porto', sunset: '20h25',
      gallery: ['pinhao','bomfim','douro-cruise','loivos','pacheca'],
      title: 'Vallée du Douro', hero: 'bomfim',
      lead: "Une des journées fortes du voyage. La route elle-même fait partie du spectacle.",
      travel: 'Porto → Pinhão · environ 125 km et 1 h 35 de route hors trafic. La N222 le long du fleuve est plus longue mais bien plus belle que l’A4',
      items: [
        { t: '08h30', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h00', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h00', k: 'route', title: 'Départ de Porto vers Pinhão', text: "Environ 1 h 35 par l’autoroute, davantage par la route panoramique." },
        { t: '12h00', k: 'visite', title: 'Arrivée dans le secteur de Pinhão', text: "", place: 'pinhao' },
        { t: '12h15', k: 'visite', title: 'Quinta do Bomfim — visite et dégustation', text: "Chais, dégustation, balade dans les vignes. Prévoir une expérience adaptée et des boissons sans alcool pour les enfants et les non-buveurs.", place: 'bomfim', todo: 'À réserver' },
        { t: '14h00', k: 'repas', title: 'Déjeuner avec vue sur la vallée', text: "Restaurant du domaine, ou une adresse bien située à Pinhão." },
        { t: '16h00', k: 'visite', title: 'Croisière sur le Douro', text: "Une heure en barco rabelo au départ de Pinhão, dans la partie la plus spectaculaire de la vallée.", place: 'croisierePinhao', todo: 'À réserver' },
        { t: '17h15', k: 'visite', title: 'Miradouro de Casal de Loivos — optionnel', text: "Uniquement si la journée reste fluide.", place: 'loivos' },
        { t: '17h45', k: 'route', title: 'Départ vers Porto', text: "" },
        { t: '20h00', k: 'soir', title: 'Retour au logement', text: "" },
        { t: '20h30', k: 'soir', title: 'Dîner à Porto ou au logement', text: "" }
      ],
      pack: ['Chapeaux, les quintas sont à découvert', 'Crème solaire', 'Eau et en-cas pour la route', 'Veste légère pour le bateau', 'Appareil photo chargé', 'Un conducteur qui ne déguste pas'],
      note: "Alternative à Bomfim si la disponibilité manque : Quinta da Pacheca, à Cambres près de Lamego, avec restaurant et hôtel sur place. Ses horaires et tarifs n’ont pas pu être vérifiés."
    },
    {
      n: 12, date: '2026-08-20', label: 'Jeudi 20 août', leg: 'porto', sunset: '20h28',
      gallery: ['bolhao','calem','sandeman','ribeira'],
      title: 'Dernière journée à Porto', hero: 'bolhao',
      lead: "Départ prévu vers 16h00. La matinée reste pleine.",
      items: [
        { t: '09h00', k: 'reveil', title: 'Réveil', text: "" },
        { t: '09h30', k: 'repas', title: 'Petit-déjeuner', text: "" },
        { t: '10h30', k: 'libre', title: 'Check-out ou dépôt des bagages', text: "Selon les conditions du logement." },
        { t: '11h00', k: 'visite', title: 'Cave de porto à Vila Nova de Gaia', text: "Si elle n’a pas été faite le 18. Sinon : Mercado do Bolhão, dernière promenade en centre-ville, achats de produits portugais, café.", place: 'calem', todo: 'À réserver si retenu' },
        { t: '12h00', k: 'courses', title: 'Mercado do Bolhão', text: "Derniers achats : porto, conserves de poisson, produits portugais.", place: 'bolhao' },
        { t: '13h00', k: 'repas', title: 'Déjeuner final à Porto', text: "" },
        { t: '14h30', k: 'libre', title: 'Dernière promenade ou récupération des bagages', text: "" },
        { t: '15h30', k: 'libre', title: 'Regroupement', text: "" },
        { t: '16h00', k: 'route', title: 'Départ de Porto', text: "", todo: 'Heure exacte à confirmer' }
      ],
      pack: ['Bagages et enregistrement en ligne', 'Place dans la valise pour le porto', 'Passeports à portée de main', 'Chargeurs récupérés dans toutes les chambres', 'Carte de transport pour l’aéroport']
    }
  ],

  /* ------------------------------------------------------------ RÉSERVATIONS
     status : 'todo' (à réserver) · 'pending' (en attente) · 'done' (confirmé)  */
  bookings: [
    { name: 'Restaurante O Cesteiro', place: 'cesteiro', status: 'todo', day: 1, date: '9 août', time: '12h45', people: 'À confirmer', notes: "Appeler : pas de réservation en ligne. Vérifier l’ouverture le dimanche." },
    { name: 'Aquashow Park — billets', place: 'aquashow', status: 'todo', day: 3, date: '11 août', time: 'Journée', people: 'À confirmer', notes: "Achat en ligne : 10 % moins cher qu’à la caisse. Adulte 34,20 €, enfant 25,20 € en haute saison." },
    { name: 'NoSoloÁgua Portimão', place: 'nosoloagua', status: 'todo', day: 4, date: '12 août', time: '13h00', people: 'À confirmer', notes: "Formulaire en ligne, réponse sous 48 h. Confirmer la politique enfants et le minimum de consommation." },
    { name: 'Yacht privé — environ 3 h', place: 'yachtVilamoura', status: 'todo', day: 4, date: '12 août', time: '17h30 – 20h30 (provisoire)', people: 'À confirmer', notes: "Horaire à caler sur le coucher de soleil de 20h31. Demander un devis, le port de départ et la politique enfants." },
    { name: 'Oven Lisboa', place: 'theOven', status: 'todo', day: 5, date: '13 août', time: '14h00', people: 'À confirmer', notes: "Pas de site officiel, deux numéros circulent. Vérifier l’adresse, les horaires et le niveau d’épices." },
    { name: 'Restaurant de poisson à Estoril', place: 'cimas', status: 'todo', day: 6, date: '14 août', time: '15h00', people: 'À confirmer', notes: "Choix à arrêter entre CIMAS, Bolina et O Mira. Vérifier la capacité pour le groupe." },
    { name: 'Quinta da Regaleira — billets', place: 'regaleira', status: 'todo', day: 7, date: '15 août', time: '11h15', people: 'À confirmer', notes: "Créneaux toutes les 30 min. Pack famille 60 € plus avantageux que 4 billets séparés." },
    { name: 'Palácio da Pena — créneau', place: 'pena', status: 'todo', day: 7, date: '15 août', time: '15h15', people: 'À confirmer', notes: "Créneau horaire nominatif obligatoire pour le palais. Décider parc seul (12 €) ou parc + palais (20 €)." },
    { name: 'O Tasco do Strauss', place: 'strauss', status: 'todo', day: 7, date: '15 août', time: '13h15', people: 'À confirmer', notes: "Existence en 2026 NON confirmée. Appeler avant de compter dessus." },
    { name: 'Torre de Belém — créneau', place: 'torreBelem', status: 'todo', day: 8, date: '16 août', time: '12h15', people: 'À confirmer', notes: "Rouverte le 27 mai 2026 : créneaux de 30 min, 900 visiteurs par jour maximum. Réserver tôt." },
    { name: 'Restaurant à Belém', status: 'todo', day: 8, date: '16 août', time: '14h30', people: 'À confirmer', notes: "Adresse encore à choisir." },
    { name: 'Mariage', status: 'todo', day: 9, date: '17 août', time: '14h00', people: 'Groupe mariage', notes: "Heure et adresse exactes à confirmer." },
    { name: 'Livraria Lello — billet', place: 'lello', status: 'todo', day: 10, date: '18 août', time: '13h00', people: 'À confirmer', notes: "Billet-voucher obligatoire, déductible de l’achat d’un livre. Gratuit jusqu’à 3 ans." },
    { name: 'Adega São Nicolau', place: 'saoNicolau', status: 'todo', day: 10, date: '18 août', time: '14h00', people: 'À confirmer', notes: "Appeler : pas de réservation en ligne. Alternatives : Taberna dos Mercadores, Abadia do Porto." },
    { name: 'Quinta do Bomfim — visite', place: 'bomfim', status: 'todo', day: 11, date: '19 août', time: '12h15', people: 'À confirmer', notes: "Vérifier la disponibilité au 19 août, les langues, l’accès enfants et le déjeuner sur place." },
    { name: 'Croisière au départ de Pinhão', place: 'croisierePinhao', status: 'todo', day: 11, date: '19 août', time: '16h00', people: 'À confirmer', notes: "15 € par adulte, 50 % de 6 à 11 ans, gratuit jusqu’à 5 ans. Départs toutes les 30 min d’avril à octobre." },
    { name: 'Cave de porto à Gaia', place: 'calem', status: 'todo', day: 12, date: '20 août', time: '11h00', people: 'À confirmer', notes: "Uniquement si la cave n’a pas été faite le 18. Sandeman publie ses tarifs (23 € la visite de base), Cálem non." }
  ],

  /* ------------------------------------------------------------------ INFOS */
  infos: [
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
  ],

  

  /* ------------------------------------------------------------ À CONFIRMER */
  toConfirm: [
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
  ]
};
