/* ============================================================================
   PHOTOS — une clé par lieu, deux tailles (card 960 px, hero 1920 px).
   Toutes les images viennent de Wikimedia Commons, sous licence libre : elles
   sont servies depuis upload.wikimedia.org, pas recopiées dans le dépôt, ce
   qui évite d'en redistribuer des copies et garde le dépôt léger.
   Pour ajouter une photo : trouver le fichier sur commons.wikimedia.org,
   puis ajouter ici une clé avec ses deux URLs. Seules les largeurs 960, 1280
   et 1920 existent côté Wikimedia — les autres renvoient une erreur 400.
   ========================================================================== */

export const IMAGES = {
 "faro": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Faro_airport_01.jpg/960px-Faro_airport_01.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Faro_airport_01.jpg/1920px-Faro_airport_01.jpg"
 },
 "vilamoura-marina": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg/960px-Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg/1920px-Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg",
  "credit": "Marina de Vilamoura en plein jour — Wikimedia Commons, CC BY-SA 2.0"
 },
 "vilamoura-praia": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vilamoura_Beach_%28Praia_da_Marina%29.jpg/960px-Vilamoura_Beach_%28Praia_da_Marina%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vilamoura_Beach_%28Praia_da_Marina%29.jpg/1920px-Vilamoura_Beach_%28Praia_da_Marina%29.jpg"
 },
 "loule": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mercado_Municipal_de_Loul%C3%A9%2C_Algarve%2C_Portugal.JPG/960px-Mercado_Municipal_de_Loul%C3%A9%2C_Algarve%2C_Portugal.JPG",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mercado_Municipal_de_Loul%C3%A9%2C_Algarve%2C_Portugal.JPG/1920px-Mercado_Municipal_de_Loul%C3%A9%2C_Algarve%2C_Portugal.JPG"
 },
 "falesia": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Praia_da_Falesia_%2814707442719%29.jpg/960px-Praia_da_Falesia_%2814707442719%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Praia_da_Falesia_%2814707442719%29.jpg/1920px-Praia_da_Falesia_%2814707442719%29.jpg"
 },
 "aquashow": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aquashow_Algarve_04.jpg/960px-Aquashow_Algarve_04.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aquashow_Algarve_04.jpg/1920px-Aquashow_Algarve_04.jpg"
 },
 "rocha": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Praia_da_rocha_portim%C3%A3o.jpg/960px-Praia_da_rocha_portim%C3%A3o.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Praia_da_rocha_portim%C3%A3o.jpg/1920px-Praia_da_rocha_portim%C3%A3o.jpg"
 },
 "piedade": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ponta_da_Piedade%2C_Lagos_%2820518421738%29.jpg/960px-Ponta_da_Piedade%2C_Lagos_%2820518421738%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ponta_da_Piedade%2C_Lagos_%2820518421738%29.jpg/1920px-Ponta_da_Piedade%2C_Lagos_%2820518421738%29.jpg"
 },
 "comercio": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lisbon_%2836211708233%29_%28cropped%29.jpg/960px-Lisbon_%2836211708233%29_%28cropped%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lisbon_%2836211708233%29_%28cropped%29.jpg/1920px-Lisbon_%2836211708233%29_%28cropped%29.jpg"
 },
 "arco": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/960px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/1920px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG"
 },
 "rua-augusta": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rua_Augusta_from_the_Arco_Triunfal%2C_Lisbon%2C_20250604_1428_9281.jpg/960px-Rua_Augusta_from_the_Arco_Triunfal%2C_Lisbon%2C_20250604_1428_9281.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rua_Augusta_from_the_Arco_Triunfal%2C_Lisbon%2C_20250604_1428_9281.jpg/1920px-Rua_Augusta_from_the_Arco_Triunfal%2C_Lisbon%2C_20250604_1428_9281.jpg"
 },
 "chiado": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lisbon_10064_Lisboa_Pra%C3%A7a_Lu%C3%ADs_de_Cam%C3%B5es_2006_Luca_Galuzzi_%28cropped%29.jpg/960px-Lisbon_10064_Lisboa_Pra%C3%A7a_Lu%C3%ADs_de_Cam%C3%B5es_2006_Luca_Galuzzi_%28cropped%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lisbon_10064_Lisboa_Pra%C3%A7a_Lu%C3%ADs_de_Cam%C3%B5es_2006_Luca_Galuzzi_%28cropped%29.jpg/1920px-Lisbon_10064_Lisboa_Pra%C3%A7a_Lu%C3%ADs_de_Cam%C3%B5es_2006_Luca_Galuzzi_%28cropped%29.jpg"
 },
 "colombo": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Centro_Comercial_Colombo_Novembro_2023.jpg/960px-Centro_Comercial_Colombo_Novembro_2023.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Centro_Comercial_Colombo_Novembro_2023.jpg/1920px-Centro_Comercial_Colombo_Novembro_2023.jpg"
 },
 "tram28": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tram_of_line_28E_on_Rua_Augusto_Rosa_in_Lisbon%2C_20250603_2011_9033.jpg/960px-Tram_of_line_28E_on_Rua_Augusto_Rosa_in_Lisbon%2C_20250603_2011_9033.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tram_of_line_28E_on_Rua_Augusto_Rosa_in_Lisbon%2C_20250603_2011_9033.jpg/1920px-Tram_of_line_28E_on_Rua_Augusto_Rosa_in_Lisbon%2C_20250603_2011_9033.jpg"
 },
 "castelo": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LisbonCastle.jpg/960px-LisbonCastle.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LisbonCastle.jpg/1920px-LisbonCastle.jpg"
 },
 "santa-luzia": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lisboa_-_Miradouro_de_Santa_Luzia_%2853851940999%29.jpg/960px-Lisboa_-_Miradouro_de_Santa_Luzia_%2853851940999%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lisboa_-_Miradouro_de_Santa_Luzia_%2853851940999%29.jpg/1920px-Lisboa_-_Miradouro_de_Santa_Luzia_%2853851940999%29.jpg"
 },
 "tamariz": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Praia_do_Tamariz%2C_Estoril%2C_Portugal%2C_2022-07-26%2C_DD_22-24_HDR.jpg/960px-Praia_do_Tamariz%2C_Estoril%2C_Portugal%2C_2022-07-26%2C_DD_22-24_HDR.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Praia_do_Tamariz%2C_Estoril%2C_Portugal%2C_2022-07-26%2C_DD_22-24_HDR.jpg/1920px-Praia_do_Tamariz%2C_Estoril%2C_Portugal%2C_2022-07-26%2C_DD_22-24_HDR.jpg"
 },
 "boca": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Hell%27s_Mouth_Cascais.jpg/960px-Hell%27s_Mouth_Cascais.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Hell%27s_Mouth_Cascais.jpg/1920px-Hell%27s_Mouth_Cascais.jpg"
 },
 "regaleira": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Quinta_da_Regaleira%2C_Sintra%2C_Portugal%2C_2019-05-25%2C_DD_56.jpg/960px-Quinta_da_Regaleira%2C_Sintra%2C_Portugal%2C_2019-05-25%2C_DD_56.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Quinta_da_Regaleira%2C_Sintra%2C_Portugal%2C_2019-05-25%2C_DD_56.jpg/1920px-Quinta_da_Regaleira%2C_Sintra%2C_Portugal%2C_2019-05-25%2C_DD_56.jpg"
 },
 "pena": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg/960px-Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg/1920px-Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg"
 },
 "eduardo7": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Empty_Parque_Eduardo_VII_during_the_COVID-19_lockdown%2C_Lisbon%2C_Portugal_julesvernex2-2.jpg/960px-Empty_Parque_Eduardo_VII_during_the_COVID-19_lockdown%2C_Lisbon%2C_Portugal_julesvernex2-2.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Empty_Parque_Eduardo_VII_during_the_COVID-19_lockdown%2C_Lisbon%2C_Portugal_julesvernex2-2.jpg/1920px-Empty_Parque_Eduardo_VII_during_the_COVID-19_lockdown%2C_Lisbon%2C_Portugal_julesvernex2-2.jpg"
 },
 "torre-belem": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg/960px-Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg/1920px-Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg"
 },
 "padrao": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Padr%C3%A3o_Descobrimentos_April_2009-3c.jpg/960px-Padr%C3%A3o_Descobrimentos_April_2009-3c.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Padr%C3%A3o_Descobrimentos_April_2009-3c.jpg/1920px-Padr%C3%A3o_Descobrimentos_April_2009-3c.jpg"
 },
 "pasteis": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Takeout_%E2%80%A2_Original_Past%C3%A9is_de_Bel%C3%A9m_%281837%29_%2850660175068%29.jpg/960px-Takeout_%E2%80%A2_Original_Past%C3%A9is_de_Bel%C3%A9m_%281837%29_%2850660175068%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Takeout_%E2%80%A2_Original_Past%C3%A9is_de_Bel%C3%A9m_%281837%29_%2850660175068%29.jpg/1920px-Takeout_%E2%80%A2_Original_Past%C3%A9is_de_Bel%C3%A9m_%281837%29_%2850660175068%29.jpg"
 },
 "cristo-rei": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Francisco_Franco_Cristo_Rei_Lisboa_2.jpg/960px-Francisco_Franco_Cristo_Rei_Lisboa_2.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Francisco_Franco_Cristo_Rei_Lisboa_2.jpg/1920px-Francisco_Franco_Cristo_Rei_Lisboa_2.jpg"
 },
 "sao-bento": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sao_Bento_train_station_in_Porto_%281%29.jpg/960px-Sao_Bento_train_station_in_Porto_%281%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sao_Bento_train_station_in_Porto_%281%29.jpg/1920px-Sao_Bento_train_station_in_Porto_%281%29.jpg"
 },
 "se-porto": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Porto_Cathedral%2C_July_2023.jpg/960px-Porto_Cathedral%2C_July_2023.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Porto_Cathedral%2C_July_2023.jpg/1920px-Porto_Cathedral%2C_July_2023.jpg"
 },
 "clerigos": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Torre_dos_Clerigos_in_Porto_%282%29.jpg/960px-Torre_dos_Clerigos_in_Porto_%282%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Torre_dos_Clerigos_in_Porto_%282%29.jpg/1920px-Torre_dos_Clerigos_in_Porto_%282%29.jpg"
 },
 "lello-ext": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Exterior_view_of_Livraria_Lello_01.jpg/960px-Exterior_view_of_Livraria_Lello_01.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Exterior_view_of_Livraria_Lello_01.jpg/1920px-Exterior_view_of_Livraria_Lello_01.jpg"
 },
 "lello": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Interior_view_of_Livraria_Lello_01.jpg/960px-Interior_view_of_Livraria_Lello_01.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Interior_view_of_Livraria_Lello_01.jpg/1920px-Interior_view_of_Livraria_Lello_01.jpg"
 },
 "ribeira": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cais_da_Ribeira_in_Porto_%281%29.jpg/960px-Cais_da_Ribeira_in_Porto_%281%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cais_da_Ribeira_in_Porto_%281%29.jpg/1920px-Cais_da_Ribeira_in_Porto_%281%29.jpg"
 },
 "ponte-luis": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Puente_de_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2019-06-02%2C_DD_29-31_HDR.jpg/960px-Puente_de_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2019-06-02%2C_DD_29-31_HDR.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Puente_de_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2019-06-02%2C_DD_29-31_HDR.jpg/1920px-Puente_de_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2019-06-02%2C_DD_29-31_HDR.jpg"
 },
 "morro": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jardim_do_Morro%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/960px-Jardim_do_Morro%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jardim_do_Morro%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/1920px-Jardim_do_Morro%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG"
 },
 "calem": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Caves_C%C3%A1lem_-_Vila_Nova_de_Gaia_-_Portugal_%2853194899655%29.jpg/960px-Caves_C%C3%A1lem_-_Vila_Nova_de_Gaia_-_Portugal_%2853194899655%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Caves_C%C3%A1lem_-_Vila_Nova_de_Gaia_-_Portugal_%2853194899655%29.jpg/1920px-Caves_C%C3%A1lem_-_Vila_Nova_de_Gaia_-_Portugal_%2853194899655%29.jpg"
 },
 "sandeman": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bodega_Sandeman%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/960px-Bodega_Sandeman%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bodega_Sandeman%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG/1920px-Bodega_Sandeman%2C_Vila_Nova_de_Gaia%2C_Portugal%2C_2012-05-09%2C_DD_01.JPG"
 },
 "bolhao": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mercado_do_Bolhao_%2826431828935%29.jpg/960px-Mercado_do_Bolhao_%2826431828935%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mercado_do_Bolhao_%2826431828935%29.jpg/1920px-Mercado_do_Bolhao_%2826431828935%29.jpg"
 },
 "bomfim": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Quinta_do_Bomfim%2C_Pinh%C3%A3o%2C_Vila_Real%2C_Portugal_06.jpg/960px-Quinta_do_Bomfim%2C_Pinh%C3%A3o%2C_Vila_Real%2C_Portugal_06.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Quinta_do_Bomfim%2C_Pinh%C3%A3o%2C_Vila_Real%2C_Portugal_06.jpg/1920px-Quinta_do_Bomfim%2C_Pinh%C3%A3o%2C_Vila_Real%2C_Portugal_06.jpg"
 },
 "pacheca": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Quinta_da_Pacheca_2012.jpg/960px-Quinta_da_Pacheca_2012.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Quinta_da_Pacheca_2012.jpg/1920px-Quinta_da_Pacheca_2012.jpg"
 },
 "douro-cruise": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Douro_River_-_Pinhao.jpg/960px-Douro_River_-_Pinhao.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Douro_River_-_Pinhao.jpg/1920px-Douro_River_-_Pinhao.jpg"
 },
 "loivos": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Miradouro_de_Casal_de_Loivos_8.jpg/960px-Miradouro_de_Casal_de_Loivos_8.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Miradouro_de_Casal_de_Loivos_8.jpg/1920px-Miradouro_de_Casal_de_Loivos_8.jpg"
 },
 "pinhao": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pinh%C3%A3o%2C_Vale_do_Douro%2C_Portugal_2.jpg/960px-Pinh%C3%A3o%2C_Vale_do_Douro%2C_Portugal_2.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pinh%C3%A3o%2C_Vale_do_Douro%2C_Portugal_2.jpg/1920px-Pinh%C3%A3o%2C_Vale_do_Douro%2C_Portugal_2.jpg"
 },
 "marinha": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Praia_da_Marinha-Algarve-Portugal.jpg/960px-Praia_da_Marinha-Algarve-Portugal.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Praia_da_Marinha-Algarve-Portugal.jpg/1920px-Praia_da_Marinha-Algarve-Portugal.jpg"
 },
 "alfama": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Alfama%2C_Lisboa_-_2010-09-09.jpg/960px-Alfama%2C_Lisboa_-_2010-09-09.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Alfama%2C_Lisboa_-_2010-09-09.jpg/1920px-Alfama%2C_Lisboa_-_2010-09-09.jpg"
 },

 /* ------------------------------------------------------------------
    RESTAURANTS SANS PHOTO LIBRE — photos reprises depuis leur fiche
    Tripadvisor, à la demande explicite du foyer, qui accepte le risque :
    ce ne sont pas des images sous licence libre, seulement les seules
    disponibles pour ces onze adresses. Chaque URL a été vérifiée (HTTP 200,
    image réelle) avant d'être ajoutée ici. Une seule définition existe côté
    Tripadvisor pour chacune : « card » et « hero » pointent la même image. */
 "cesteiro-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/03/62/44/9a/restaurante-o-cesteiro.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/03/62/44/9a/restaurante-o-cesteiro.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "nosoloagua-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-p/12/e0/90/6f/melhor-espaco-do-algarve.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-p/12/e0/90/6f/melhor-espaco-do-algarve.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "theoven-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-s/2b/b3/0a/06/pani-puri.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-s/2b/b3/0a/06/pani-puri.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "cimas-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/03/ea/cf/32/cimas-english-bar-restaurant.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/03/ea/cf/32/cimas-english-bar-restaurant.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "bolina-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/09/2d/15/cb/bolina.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/09/2d/15/cb/bolina.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "omira-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-s/31/55/7d/82/acorda-de-gambas.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-s/31/55/7d/82/acorda-de-gambas.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "strauss-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/10/b2/c8/ec/o-tasco-do-strauss.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/10/b2/c8/ec/o-tasco-do-strauss.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "saonicolau-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9c/81/06/adega-de-sao-nicolau.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-s/0e/9c/81/06/adega-de-sao-nicolau.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "mercadores-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/08/f9/fd/e5/taberna-dos-mercadores.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/08/f9/fd/e5/taberna-dos-mercadores.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },
 "abadia-ta": {
  "card": "https://media-cdn.tripadvisor.com/media/photo-f/0e/b3/2d/f3/abadia-restaurant.jpg",
  "hero": "https://media-cdn.tripadvisor.com/media/photo-f/0e/b3/2d/f3/abadia-restaurant.jpg",
  "credit": "Photo : fiche Tripadvisor de l’établissement"
 },

 /* --- Cartes d'étapes de l'accueil : trois vues de jour, spectaculaires --- */
 "leg-algarve": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg/960px-Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg/1920px-Marina_de_Vilamoura_-_Portugal_%283841747853%29.jpg",
  "credit": "Marina de Vilamoura — Wikimedia Commons, CC BY-SA 2.0"
 },
 "leg-lisbonne": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lisbon_Pra%C3%A7a_do_Com%C3%A9rcio_BW_2018-10-08_17-45-56.jpg/960px-Lisbon_Pra%C3%A7a_do_Com%C3%A9rcio_BW_2018-10-08_17-45-56.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lisbon_Pra%C3%A7a_do_Com%C3%A9rcio_BW_2018-10-08_17-45-56.jpg/1920px-Lisbon_Pra%C3%A7a_do_Com%C3%A9rcio_BW_2018-10-08_17-45-56.jpg",
  "credit": "Praça do Comércio, Lisbonne — Wikimedia Commons, CC BY-SA 4.0"
 },
 "leg-porto": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Panoramic_View_of_Porto%27s_Ribeira_District_and_Dom_Lu%C3%ADs_I_Bridge_%2855245842707%29.jpg/960px-Panoramic_View_of_Porto%27s_Ribeira_District_and_Dom_Lu%C3%ADs_I_Bridge_%2855245842707%29.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Panoramic_View_of_Porto%27s_Ribeira_District_and_Dom_Lu%C3%ADs_I_Bridge_%2855245842707%29.jpg/1920px-Panoramic_View_of_Porto%27s_Ribeira_District_and_Dom_Lu%C3%ADs_I_Bridge_%2855245842707%29.jpg",
  "credit": "La Ribeira et le pont Dom Luís I, Porto — Wikimedia Commons, CC BY 4.0"
 },

 /* --- Villa : photo de l'annonce Airbnb, fournie par Chris --- */
 "villa": {
  "card": "https://a0.muscache.com/im/pictures/miso/Hosting-704227875262201756/original/bdefaeef-b129-47ef-b91c-c04fa4ca96f4.jpeg?im_w=720",
  "hero": "https://a0.muscache.com/im/pictures/miso/Hosting-704227875262201756/original/bdefaeef-b129-47ef-b91c-c04fa4ca96f4.jpeg?im_w=1200",
  "credit": "Photo : annonce Airbnb du logement"
 },

 /* --- ALDI : devanture ALDI libre de droits (photo d'illustration) --- */
 "aldi": {
  "card": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Aldi_at_Vista_Palms_Orlando_FL_2025-02-12_16-24-58.jpg/960px-Aldi_at_Vista_Palms_Orlando_FL_2025-02-12_16-24-58.jpg",
  "hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Aldi_at_Vista_Palms_Orlando_FL_2025-02-12_16-24-58.jpg/1920px-Aldi_at_Vista_Palms_Orlando_FL_2025-02-12_16-24-58.jpg",
  "credit": "Devanture ALDI (photo d’illustration) — Wikimedia Commons, CC BY 4.0"
 }
};
