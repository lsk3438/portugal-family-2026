/* ============================================================================
   LES RÉSERVATIONS À CALER AVANT LE DÉPART.
   ----------------------------------------------------------------------------
   CONVENTIONS DE DONNÉES, valables dans tout le dossier data/ :

     ok: true    information vérifiée sur une source officielle
     ok: false   information non vérifiée → le site affiche « À confirmer »
     place:'clé' renvoie à une entrée de data/places.js
     warn: '…'   encadré d'avertissement affiché sous la fiche du lieu
     img: 'clé'  renvoie à une entrée de data/images.js
   ========================================================================== */

export const BOOKINGS = [
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
  ];
