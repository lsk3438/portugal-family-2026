/* ============================================================================
   LES LIEUX — 51 entrées : adresses, téléphones, horaires, tarifs, liens.
   Un lieu se référence depuis une journée avec place: 'saClé'.
   ----------------------------------------------------------------------------
   CONVENTIONS DE DONNÉES, valables dans tout le dossier data/ :

     ok: true    information vérifiée sur une source officielle
     ok: false   information non vérifiée → le site affiche « À confirmer »
     place:'clé' renvoie à une entrée de data/places.js
     warn: '…'   encadré d'avertissement affiché sous la fiche du lieu
     img: 'clé'  renvoie à une entrée de data/images.js
   ========================================================================== */

export const PLACES = {
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
  };
