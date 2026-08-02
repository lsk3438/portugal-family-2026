/* ============================================================================
   MÉDIAS D'OUVERTURE — le bandeau qui défile sur l'accueil
   ----------------------------------------------------------------------------
   Quatre photographies par région, dans l'ordre du voyage : Algarve, puis
   Lisbonne, puis Porto. Toutes viennent de Wikimedia Commons sous licence
   libre ; le champ `credit` est la mention exacte exigée par la licence et
   s'affiche dans le pied de page.

   Largeurs disponibles côté Wikimedia : 960, 1280 et 1920 seulement. Les
   autres renvoient une erreur 400 — ne pas en inventer.

   VIDÉOS : si un fichier est déposé dans assets/videos/, il suffit d'ajouter
   `video: 'assets/videos/monfichier.mp4'` à l'entrée concernée. La photo sert
   alors d'image de secours : si la vidéo ne se charge pas, ou si le téléphone
   est en économie de données, c'est elle qui reste affichée.
   ========================================================================== */

const W = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';

export const HERO = [
  {
    leg: 'algarve', subject: 'Falaises de la Praia da Marinha',
    src: W + '9/97/Praia_da_Marinha-Algarve-Portugal.jpg/1920px-Praia_da_Marinha-Algarve-Portugal.jpg',
    small: W + '9/97/Praia_da_Marinha-Algarve-Portugal.jpg/960px-Praia_da_Marinha-Algarve-Portugal.jpg',
    credit: 'Tobi 87 — CC BY-SA 3.0'
  },
  {
    leg: 'algarve', subject: 'Marina de Vilamoura',
    src: W + 'f/f9/Marina_de_Vilamoura_%2836193353894%29.jpg/1920px-Marina_de_Vilamoura_%2836193353894%29.jpg',
    small: W + 'f/f9/Marina_de_Vilamoura_%2836193353894%29.jpg/960px-Marina_de_Vilamoura_%2836193353894%29.jpg',
    credit: 'Eduard Marmet — CC BY-SA 2.0'
  },
  {
    leg: 'algarve', subject: 'Praia de Benagil',
    src: W + 'd/d7/Praia_de_Benagil_%281%29.jpg/1920px-Praia_de_Benagil_%281%29.jpg',
    small: W + 'd/d7/Praia_de_Benagil_%281%29.jpg/960px-Praia_de_Benagil_%281%29.jpg',
    credit: 'Joseolgon — CC BY-SA 4.0'
  },
  {
    leg: 'algarve', subject: 'Praia Dona Ana, Lagos',
    src: W + '7/72/Beach_Praia_do_Ana_Lagos_%2827712030935%29.jpg/1920px-Beach_Praia_do_Ana_Lagos_%2827712030935%29.jpg',
    small: W + '7/72/Beach_Praia_do_Ana_Lagos_%2827712030935%29.jpg/960px-Beach_Praia_do_Ana_Lagos_%2827712030935%29.jpg',
    credit: 'dronepicr — CC BY 2.0'
  },

  {
    leg: 'lisbonne', subject: 'Les toits de l’Alfama',
    src: W + '0/08/View_from_Miradouro_de_Santa_Luzia%2C_Lisbon%2C_20250603_2015_9043.jpg/1920px-View_from_Miradouro_de_Santa_Luzia%2C_Lisbon%2C_20250603_2015_9043.jpg',
    small: W + '0/08/View_from_Miradouro_de_Santa_Luzia%2C_Lisbon%2C_20250603_2015_9043.jpg/960px-View_from_Miradouro_de_Santa_Luzia%2C_Lisbon%2C_20250603_2015_9043.jpg',
    credit: 'Jakub Hałun — CC BY 4.0'
  },
  {
    leg: 'lisbonne', subject: 'Le tramway 28',
    src: W + '9/9a/Tram_28%3B_Lisbon_%285282021178%29.jpg/1920px-Tram_28%3B_Lisbon_%285282021178%29.jpg',
    small: W + '9/9a/Tram_28%3B_Lisbon_%285282021178%29.jpg/960px-Tram_28%3B_Lisbon_%285282021178%29.jpg',
    credit: 'Christine Zenino — CC BY 2.0'
  },
  {
    leg: 'lisbonne', subject: 'Tour de Belém',
    src: W + '7/72/Lisbon_Torre_de_Bel%C3%A9m_BW_2018-10-03_16-38-01.jpg/1920px-Lisbon_Torre_de_Bel%C3%A9m_BW_2018-10-03_16-38-01.jpg',
    small: W + '7/72/Lisbon_Torre_de_Bel%C3%A9m_BW_2018-10-03_16-38-01.jpg/960px-Lisbon_Torre_de_Bel%C3%A9m_BW_2018-10-03_16-38-01.jpg',
    credit: 'Berthold Werner — CC BY-SA 4.0'
  },
  {
    leg: 'lisbonne', subject: 'Praça do Comércio',
    src: W + '0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/1920px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG',
    small: W + '0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/960px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG',
    credit: 'Diego Delso — CC BY-SA 3.0'
  },

  {
    leg: 'porto', subject: 'La Ribeira depuis Gaia',
    src: W + '6/69/View_of_Porto_old_town_from_Cais_de_Gaia_with_Porto_Cathedral%2C_20250605_1623_9881.jpg/1920px-View_of_Porto_old_town_from_Cais_de_Gaia_with_Porto_Cathedral%2C_20250605_1623_9881.jpg',
    small: W + '6/69/View_of_Porto_old_town_from_Cais_de_Gaia_with_Porto_Cathedral%2C_20250605_1623_9881.jpg/960px-View_of_Porto_old_town_from_Cais_de_Gaia_with_Porto_Cathedral%2C_20250605_1623_9881.jpg',
    credit: 'Jakub Hałun — CC BY 4.0'
  },
  {
    leg: 'porto', subject: 'Pont Dom Luís I',
    src: W + '2/2b/Ponte_Dom_Lu%C3%ADs_I_in_Porto%2C_Portugal.jpg/1920px-Ponte_Dom_Lu%C3%ADs_I_in_Porto%2C_Portugal.jpg',
    small: W + '2/2b/Ponte_Dom_Lu%C3%ADs_I_in_Porto%2C_Portugal.jpg/960px-Ponte_Dom_Lu%C3%ADs_I_in_Porto%2C_Portugal.jpg',
    credit: 'ThomasLendt — CC BY-SA 4.0'
  },
  {
    leg: 'porto', subject: 'Vignobles en terrasses du Douro',
    src: W + '5/53/Terraced_vineyards_in_the_douro_valley.jpg/1920px-Terraced_vineyards_in_the_douro_valley.jpg',
    small: W + '5/53/Terraced_vineyards_in_the_douro_valley.jpg/960px-Terraced_vineyards_in_the_douro_valley.jpg',
    credit: 'Rosino — CC BY-SA 2.0'
  },
  {
    leg: 'porto', subject: 'Azulejos de la Capela das Almas',
    src: W + '3/33/Capela_das_Almas_%28Porto%29_01.jpg/1920px-Capela_das_Almas_%28Porto%29_01.jpg',
    small: W + '3/33/Capela_das_Almas_%28Porto%29_01.jpg/960px-Capela_das_Almas_%28Porto%29_01.jpg',
    credit: 'John Samuel — CC BY-SA 4.0'
  }
];
