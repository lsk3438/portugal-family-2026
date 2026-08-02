/* ============================================================================
   LES DOUZE JOURNÉES.
   Chaque journée : n, date, leg, title, lead, hero, gallery, sunset,
   travel, items[] (le déroulé horaire) et pack[] (à prévoir aujourd'hui).
   Ajouter un jour 13 = ajouter un objet ici, rien d'autre à toucher.
   ----------------------------------------------------------------------------
   CONVENTIONS DE DONNÉES, valables dans tout le dossier data/ :

     ok: true    information vérifiée sur une source officielle
     ok: false   information non vérifiée → le site affiche « À confirmer »
     place:'clé' renvoie à une entrée de data/places.js
     warn: '…'   encadré d'avertissement affiché sous la fiche du lieu
     img: 'clé'  renvoie à une entrée de data/images.js
   ========================================================================== */

export const DAYS = [
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
        { t: '16h00', k: 'libre', title: 'Check-in à la villa', text: "Déchargement, répartition des chambres, découverte du logement, connexion au Wi-Fi." , place: 'villa'},
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
  ];
