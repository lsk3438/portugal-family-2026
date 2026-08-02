/* =========================================================================
   PORTUGAL FAMILY TRIP 2026 — logique de l'application
   Aucune dépendance hors Leaflet (carte). Tout l'état vit dans localStorage.
   ========================================================================= */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

  /* -------------------------------------------------------------- icônes */
  const I = {
    home:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/></svg>',
    cal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    map:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20 3 17.5V4l6 2.5m0 13.5 6-2.5m-6 2.5V6.5m6 11L21 20V6.5L15 4m0 13.5V4"/></svg>',
    ticket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-6ZM13 5v2m0 4v2m0 4v2"/></svg>',
    info:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    back:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-9.4A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.6c0 5-7 9.4-7 9.4Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>',
    sun:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18M12 3v3m6.4 2.6-2.1 2.1M2.6 8.6l2.1 2.1"/><path d="M17 18a5 5 0 0 0-10 0"/><path d="m8 21 2-3m6 3-2-3"/></svg>',
    pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
    checkS:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
    link:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/></svg>',
    copy:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2.4"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4m0 0L8 8m4-4 4 4M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
    warn:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.5 21 20H3z"/><path d="M12 10v4m0 2.6v.4"/></svg>',
    car:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v2m16-2v2M3 15l1.6-5A2 2 0 0 1 6.5 8.6h11a2 2 0 0 1 1.9 1.4L21 15v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M6.5 15h.01M17.5 15h.01"/></svg>',
    health:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2.4"/><path d="M9 6V4h6v2M12 11v5m-2.5-2.5h5"/></svg>',
    doc:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M13 3v5h5M8.5 13h7M8.5 17h5"/></svg>',
    /* types d'étape */
    reveil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7.5"/><path d="M12 10v3.2l2.2 1.4M5 4 3 6m16-2 2 2"/></svg>',
    repas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2.5 2.5 0 0 0 5 0V3M8.5 10v11M17 3c-1.5 1.6-2 3.4-2 5.4 0 1.6.7 2.6 2 2.6v10"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17v1.5m16-1.5v1.5M3.2 16l1.5-5.2A2 2 0 0 1 6.6 9.4h10.8a2 2 0 0 1 1.9 1.4l1.5 5.2v2.1a.9.9 0 0 1-.9.9H4.1a.9.9 0 0 1-.9-.9z"/><path d="M6.6 16h.01M17.4 16h.01"/></svg>',
    visite:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V9l8-5 8 5v12"/><path d="M9.5 21v-6h5v6M4 21h16"/></svg>',
    plage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18c2 0 2-1.4 4-1.4S9 18 11 18s2-1.4 4-1.4S17 18 19 18M3 21c2 0 2-1.4 4-1.4S9 21 11 21s2-1.4 4-1.4S17 21 19 21"/><circle cx="17" cy="6" r="3"/><path d="M4 14 14 9"/></svg>',
    courses:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h13l-1.4 8.4a2 2 0 0 1-2 1.6H9.4a2 2 0 0 1-2-1.6L5.6 4.6A1 1 0 0 0 4.6 4H3"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>',
    libre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v4l3 1.6"/></svg>',
    soir:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>',
    wxSun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"/></svg>',
    wxPart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3.2"/><path d="M8.5 2.4v1.6M3 8H1.4M14 8h1.6M4.6 4.1 3.5 3M12.4 4.1 13.5 3"/><path d="M17.5 20H9a3.4 3.4 0 0 1 0-6.8 4.6 4.6 0 0 1 8.7 1.1 2.9 2.9 0 0 1-.2 5.7Z"/></svg>',
    wxCloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H7a4 4 0 0 1 0-8 5.4 5.4 0 0 1 10.3 1.3 3.4 3.4 0 0 1 .2 6.7Z"/></svg>',
    wxRain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.3 15.6H7a3.8 3.8 0 0 1 0-7.6 5.2 5.2 0 0 1 9.9 1.3 3.2 3.2 0 0 1 .4 6.3Z"/><path d="M9 19l-.8 2M13 19l-.8 2M17 19l-.8 2"/></svg>',
    wxStorm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.3 14.6H7a3.8 3.8 0 0 1 0-7.6 5.2 5.2 0 0 1 9.9 1.3 3.2 3.2 0 0 1 .4 6.3Z"/><path d="m12.5 17-2.2 3.2h3L11 23.4"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.6"/><circle cx="17.5" cy="16" r="2.6"/></svg>'
  };
  const CAT_ICON = { logement: I.home, activite: I.visite, plage: I.plage, restaurant: I.repas, courses: I.courses, monument: I.visite, parking: I.car, transport: I.car };
  const CAT_LABEL = { logement:'Logement', activite:'Activité', plage:'Plage', restaurant:'Restaurant', courses:'Courses', monument:'Monument', parking:'Parking', transport:'Transport' };

  /* ------------------------------------------------------ stockage tolérant */
  const store = {
    get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
    set(k,v){ try { localStorage.setItem(k,v); } catch(e){} },
    json(k,d){ try { return JSON.parse(localStorage.getItem(k)) || d; } catch(e){ return d; } }
  };
  const save = (k,v) => store.set(k, JSON.stringify(v));

  /* ---------------------------------------------------------------- toast */
  let tT;
  function toast(m){
    let el = $('.toast');
    if(!el){ el = document.createElement('div'); el.className='toast'; el.setAttribute('role','status'); document.body.appendChild(el); }
    el.textContent = m;
    requestAnimationFrame(()=>el.classList.add('on'));
    clearTimeout(tT); tT = setTimeout(()=>el.classList.remove('on'), 2600);
  }

  /* ------------------------------------------------------------- helpers */
  const img = (key, size) => (key && IMAGES[key]) ? IMAGES[key][size || 'card'] : null;
  const legOf = id => TRIP.legs.find(l => l.id === id);
  const legOfDay = d => legOf(d.leg);
  const dayByN = n => TRIP.days.find(d => d.n === n);
  const placeOf = k => (k && TRIP.places[k]) ? TRIP.places[k] : null;
  const tbc = '<span class="tbc">À confirmer</span>';
  const field = f => (f && f.ok && f.v) ? esc(f.v) : tbc;
  const latlng = u => { const m = /query=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/.exec(u||''); return m ? [ +m[1], +m[2] ] : null; };

  function setAccent(leg){
    const l = typeof leg === 'string' ? legOf(leg) : leg;
    const root = document.documentElement.style;
    root.setProperty('--accent',   l ? l.color : '#1A6698');
    root.setProperty('--accent-d', l ? l.deep  : '#0F4570');
    root.setProperty('--accent-l', l ? l.light : '#8FCBEC');
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', '#FBF8F3');
  }

  /* ======================================================================
     MÉTÉO — prévisions réelles via Open-Meteo, sans clé d'API.
     Le service couvre environ 16 jours : au-delà, on n'affiche rien plutôt
     que d'inventer une valeur.
     ====================================================================== */
  const WX = {};                       // cache mémoire : { legId: {date: {...}} }
  function wxIcon(code){
    if (code === 0) return I.wxSun;
    if (code <= 2) return I.wxPart;
    if (code <= 48) return I.wxCloud;
    if (code >= 95) return I.wxStorm;
    if (code >= 51) return I.wxRain;
    return I.wxCloud;
  }
  function wxLabel(code){
    if (code === 0) return 'Ciel dégagé';
    if (code <= 2) return 'Éclaircies';
    if (code <= 3) return 'Couvert';
    if (code <= 48) return 'Brouillard';
    if (code <= 57) return 'Bruine';
    if (code <= 67) return 'Pluie';
    if (code <= 82) return 'Averses';
    if (code >= 95) return 'Orage';
    return 'Variable';
  }
  function wxFetch(leg){
    if (WX[leg.id]) return Promise.resolve(WX[leg.id]);
    const days = TRIP.days.filter(d => d.leg === leg.id).map(d => d.date).sort();
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + leg.lat + '&longitude=' + leg.lon +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&timezone=Europe%2FLisbon&start_date=' + days[0] + '&end_date=' + days[days.length - 1];
    return fetch(url).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
      const out = {};
      (j.daily.time || []).forEach((t, i) => {
        out[t] = {
          code: j.daily.weather_code[i],
          max: Math.round(j.daily.temperature_2m_max[i]),
          min: Math.round(j.daily.temperature_2m_min[i]),
          rain: j.daily.precipitation_probability_max ? j.daily.precipitation_probability_max[i] : null
        };
      });
      WX[leg.id] = out;
      return out;
    }).catch(() => { WX[leg.id] = {}; return {}; });
  }
  function wxHTML(w, muted){
    if (!w) return '';
    return '<span class="wx' + (muted ? ' wx--muted' : '') + '" title="' + wxLabel(w.code) + '">' +
      wxIcon(w.code) + '<b>' + w.max + '°</b><small>/ ' + w.min + '°</small>' +
      (w.rain != null && w.rain >= 30 ? '<small>· ' + w.rain + ' %</small>' : '') + '</span>';
  }
  /** Grand format, pour le bandeau de l'accueil. */
  function wxTile(w){
    return wxIcon(w.code) + '<span class="fact__v"><b>' + w.max + '°</b><small>' +
      wxLabel(w.code) + ', ' + w.min + '° la nuit</small></span>';
  }
  /** Remplit tous les emplacements [data-wx="AAAA-MM-JJ"] visibles. */
  function wxFill(muted){
    const slots = $$('[data-wx]');
    if (!slots.length) return;
    const legs = {};
    slots.forEach(el => {
      const d = TRIP.days.find(x => x.date === el.dataset.wx);
      if (d) legs[d.leg] = legOf(d.leg);
    });
    Object.values(legs).forEach(leg => wxFetch(leg).then(map => {
      $$('[data-wx]').forEach(el => {
        const w = map[el.dataset.wx];
        if (!w || el.dataset.filled) return;
        el.innerHTML = el.dataset.wxfmt === 'tile' ? wxTile(w) : wxHTML(w, muted);
        el.dataset.filled = '1';
      });
    }));
  }

  /* ======================================================================
     COMPTE À REBOURS
     ====================================================================== */
  const UNITS = [['days','Jours'],['hours','Heures'],['minutes','Minutes'],['seconds','Secondes']];
  let cdTimer, cdBuilt = false;

  function cdBuild(){
    $('#cd').innerHTML = UNITS.map((u,i) =>
      `<div class="cd__u" style="--d:${i*70}ms">
         <span class="cd__n" data-u="${u[0]}"><span>--</span></span>
         <span class="cd__l">${u[1]}</span>
       </div>`).join('');
    cdBuilt = true;
  }
  function cdSet(u, v){
    const h = $(`#cd .cd__n[data-u="${u}"]`); if(!h) return;
    const txt = String(Math.max(0,v)).padStart(2,'0');
    const cur = h.lastElementChild;
    if (cur && cur.textContent === txt) return;
    if (REDUCED){ h.innerHTML = `<span>${txt}</span>`; return; }
    if (cur){ cur.classList.add('out'); setTimeout(()=>cur.remove(), 320); }
    const n = document.createElement('span'); n.className='in'; n.textContent = txt; h.appendChild(n);
  }

  function tripDayIndex(){
    const now = Date.now();
    for (let i = TRIP.days.length - 1; i >= 0; i--){
      if (now >= new Date(TRIP.days[i].date + 'T00:00:00').getTime()) return i;
    }
    return -1;
  }

  function startCountdown(){
    const start = new Date(TRIP.departISO).getTime();
    const end   = new Date(TRIP.endISO).getTime();
    const box = $('#cd'), msg = $('#cd-msg'), lab = $('#cd-label');
    if (!cdBuilt) cdBuild();

    function tick(){
      const now = Date.now();
      if (now < start){
        box.hidden = false; msg.hidden = true;
        const s = Math.floor((start - now)/1000);
        cdSet('days', Math.floor(s/86400));
        cdSet('hours', Math.floor((s%86400)/3600));
        cdSet('minutes', Math.floor((s%3600)/60));
        cdSet('seconds', s%60);
        lab.textContent = 'Le voyage commence dans…';
      } else if (now <= end){
        const i = tripDayIndex(); const d = TRIP.days[Math.max(0,i)];
        box.hidden = true; msg.hidden = false;
        msg.textContent = 'Jour ' + d.n + ' sur ' + TRIP.days.length;
        lab.textContent = 'Le voyage a commencé · ' + d.title;
        clearInterval(cdTimer);
      } else {
        box.hidden = true; msg.hidden = false;
        msg.textContent = 'Até já.';
        lab.textContent = 'Le voyage est terminé';
        clearInterval(cdTimer);
      }
    }
    tick(); clearInterval(cdTimer); cdTimer = setInterval(tick, 1000);
  }

  function renderProgress(){
    const total = TRIP.days.length;
    const done = Math.min(Math.max(tripDayIndex()+1, 0), total);
    $('#prog-bar').style.width = (done/total*100) + '%';
    const cur = done > 0 ? TRIP.days[done-1].leg : null;
    $('#prog-legs').innerHTML = TRIP.legs.map(l =>
      `<b class="${l.id===cur?'on':''}">${esc(l.name)}</b>`).join('');
  }

  /* ======================================================================
     ACCUEIL
     ====================================================================== */
  function renderHome(){
    $('#home-img').src = img(TRIP.days[0].hero, 'hero') || '';
    $('#home-img').alt = 'Marina de Vilamoura, Algarve';
    $('#home-eyebrow').textContent = TRIP.dates + ' · ' + TRIP.stages;
    $('#home-sub').textContent = TRIP.intro;

    const i = tripDayIndex();
    const d = TRIP.days[Math.max(0, i < 0 ? 0 : Math.min(i, TRIP.days.length-1))];
    const nextD = i < 0 ? TRIP.days[0] : (TRIP.days[i] || TRIP.days[0]);
    const leg = legOfDay(nextD);
    const first = nextD.items[0];
    $('#home-next').href = '#/jour/' + nextD.n;
    $('#home-next').innerHTML = `
      <div class="next__b">
        <div class="next__k">${i < 0 ? 'Première journée' : 'Aujourd’hui'} · ${esc(leg.name)}</div>
        <h3>Jour ${nextD.n} — ${esc(nextD.title)}</h3>
        <p>${esc(nextD.lead)}</p>
        <p style="font-size:14px;color:var(--ink-3);margin:0 0 16px">Première étape : <b style="color:var(--ink)">${esc(first.t)} — ${esc(first.title)}</b></p>
        <span class="next__go">Ouvrir la journée ${I.arrow}</span>
      </div>`;

    /* Bandeau de faits — uniquement des données vérifiées ou calculées.
       Ni budget ni parking : ces valeurs-là ne sont pas sourcées. */
    const nbLieux = nextD.items.filter(x => x.place).length;
    $('#home-facts').innerHTML =
      `<div class="fact" data-wx="${nextD.date}" data-wxfmt="tile">` +
        `${I.wxPart}<span class="fact__v"><b>—</b><small>Météo en ligne</small></span></div>` +
      `<div class="fact">${I.sun}<span class="fact__v"><b>${esc(nextD.sunset)}</b><small>Coucher du soleil</small></span></div>` +
      (nextD.travel ? (() => {
        const dur = /(\d+\s*h(?:\s*\d+)?)/.exec(nextD.travel);
        const route = nextD.travel.split('·')[0].trim();
        return `<div class="fact">${I.car}<span class="fact__v"><b>${esc(dur ? dur[1] : route)}</b>` +
               `<small>${esc(dur ? route : 'Route du jour')}</small></span></div>`;
      })() : '') +
      `<div class="fact">${I.pin}<span class="fact__v"><b>${nbLieux}</b><small>${nbLieux > 1 ? 'lieux au programme' : 'lieu au programme'}</small></span></div>`;
    wxFill(false);

    $('#home-legs').innerHTML = TRIP.legs.map(l => {
      const day = TRIP.days.find(x => x.leg === l.id);
      return `<a class="legcard reveal" href="#/programme?leg=${l.id}" style="--lc:${l.color};--lc-l:${l.light}">
        <img src="${img(day.hero,'card')}" alt="" loading="lazy" width="960" height="640">
        <div class="legcard__v"></div>
        <div class="legcard__b">
          <div class="legcard__n">Jours ${l.from} à ${l.to}</div>
          <h3>${esc(l.name)}</h3>
          <small>${esc(l.dates)} · ${esc(l.base)}</small>
        </div></a>`;
    }).join('');

  }

  function renderStats(sel){
    const st = bookingStates();
    const c = { todo:0, pending:0, done:0 };
    TRIP.bookings.forEach((b,i) => c[st[i] || b.status]++);
    $(sel).innerHTML =
      `<div class="bkstat"><b>${c.todo}</b><span>à réserver</span></div>
       <div class="bkstat"><b>${c.pending}</b><span>en attente</span></div>
       <div class="bkstat"><b>${c.done}</b><span>confirmé</span></div>`;
  }

  /* ======================================================================
     PROGRAMME
     ====================================================================== */
  let progFilter = 'all';
  function renderProgramme(){
    $('#prog-filters').innerHTML =
      `<button type="button" data-leg="all" aria-pressed="${progFilter==='all'}" style="--fc:var(--atlantic)">Les 12 jours</button>` +
      TRIP.legs.map(l => `<button type="button" data-leg="${l.id}" aria-pressed="${progFilter===l.id}" style="--fc:${l.color}">${esc(l.name)}</button>`).join('');

    const days = TRIP.days.filter(d => progFilter === 'all' || d.leg === progFilter);
    $('#prog-days').innerHTML = days.map((d,idx) => {
      const l = legOfDay(d);
      const visits = d.items.filter(x => x.place).length;
      return `<a class="daycard reveal" href="#/jour/${d.n}" style="--dc:${l.color};--d:${Math.min(idx,6)*45}ms">
        <div class="daycard__img"><img src="${img(d.hero,'card')}" alt="" loading="lazy" width="480" height="480"></div>
        <div class="daycard__b">
          <div class="daycard__k"><b></b>Jour ${d.n} · ${esc(d.label)}</div>
          <h3>${esc(d.title)}</h3>
          <p>${esc(d.lead)}</p>
          <div class="daycard__m">
            <span>${I.pin}${visits} lieux</span>
            <span>${I.sun}${esc(d.sunset)}</span>
            <span data-wx="${d.date}"></span>
          </div>
        </div></a>`;
    }).join('');
    observe();
    wxFill(true);
  }

  /* ======================================================================
     JOURNÉE
     ====================================================================== */
  const favs = () => store.json('pt.favs', []);
  const packKey = n => 'pt.pack.' + n;
  const doneKey = n => 'pt.done.' + n;
  let railHandler = null, nextTimer = null;

  function placeBlock(k){
    const p = placeOf(k); if(!p) return '';
    const on = favs().indexOf(k) >= 0;
    const rows = [];
    rows.push(`<div class="place__row"><b>Adresse</b><span>${field(p.address)}</span></div>`);
    if (p.hours !== undefined) rows.push(`<div class="place__row"><b>Horaires</b><span>${field(p.hours)}</span></div>`);
    if (p.price !== undefined) rows.push(`<div class="place__row"><b>Tarifs</b><span>${field(p.price)}</span></div>`);
    if (p.phone !== undefined) rows.push(`<div class="place__row"><b>Téléphone</b><span>${field(p.phone)}</span></div>`);
    const acts = [];
    if (p.url && p.url.ok) acts.push(`<a class="btn btn--p" href="${p.url.v}" target="_blank" rel="noopener noreferrer">${I.link}${esc(p.url.label || 'Site officiel')}</a>`);
    if (p.book && p.book.ok) acts.push(`<a class="btn" href="${p.book.v}" target="_blank" rel="noopener noreferrer">${I.ticket}Réserver</a>`);
    if (p.maps) acts.push(`<a class="btn" href="${p.maps}" target="_blank" rel="noopener noreferrer">${I.map}Google Maps</a>`);
    if (p.phone && p.phone.ok) acts.push(`<a class="btn" href="tel:${p.phone.v.split('·')[0].replace(/[^+0-9]/g,'')}">${I.phone}Appeler</a>`);
    if (p.address && p.address.ok) acts.push(`<button class="btn" type="button" data-copy="${esc(p.address.v)}">${I.copy}Copier l’adresse</button>`);

    return `<div class="place">
      <div class="place__top">
        ${p.img ? `<img class="place__img" src="${img(p.img,'card')}" alt="" loading="lazy" width="148" height="148">` : ''}
        <div class="place__i">
          <div class="place__c">${esc(CAT_LABEL[p.cat] || p.cat)} · ${esc(p.city)}</div>
          <div class="place__n">${esc(p.name)}</div>
          ${p.cuisine ? `<div class="place__cui">${I.repas}${esc(p.cuisine)}</div>` : ''}
          <p class="place__d">${esc(p.desc)}</p>
        </div>
        <button class="place__fav" type="button" data-fav="${k}" aria-pressed="${on}"
                aria-label="${on?'Retirer':'Ajouter'} ${esc(p.name)} des favoris">${I.heart}</button>
      </div>
      <div class="place__rows">${rows.join('')}</div>
      ${p.warn ? `<div class="place__warn">${I.warn}<span>${esc(p.warn)}</span></div>` : ''}
      ${acts.length ? `<div class="place__acts">${acts.join('')}</div>` : ''}
    </div>`;
  }

  function renderDay(n){
    const d = dayByN(n); if(!d){ go('#/programme'); return; }
    const l = legOfDay(d);
    setAccent(l);

    startBand(d);
    $('#d-backico').innerHTML = I.back;
    $('#d-chips').innerHTML =
      `<span class="chip">${esc(l.name)}</span>` +
      `<span class="chip chip--g">${esc(d.label)}</span>` +
      `<span class="chip chip--g">Jour ${d.n} / ${TRIP.days.length}</span>`;
    $('#h-jour').textContent = d.title;
    $('#h-jour').className = 'h-lg';
    $('#d-lead').textContent = d.lead;
    const nbLieux = d.items.filter(x => x.place).length;
    $('#d-facts').innerHTML =
      `<span data-wx="${d.date}"></span>` +
      `<span>${I.sun}Coucher du soleil ${esc(d.sunset)}</span>` +
      `<span>${I.pin}${nbLieux} lieux</span>` +
      (d.travel ? `<span>${I.car}${esc(d.travel)}</span>` : '');

    const done = store.json(doneKey(n), {});
    $('#d-steps').innerHTML = d.items.map((it,i) => `
      <div class="step${done[i]?' done':''}" data-i="${i}" data-h="${esc(it.t)}">
        <div class="step__dot">${I[it.k] || I.libre}</div>
        <div class="step__h">
          <span class="step__t">${esc(it.t)}</span>
          ${it.todo ? `<span class="step__todo">${esc(it.todo)}</span>` : ''}
        </div>
        <div class="step__card">
          <h4>${esc(it.title)}</h4>
          ${it.text ? `<p>${esc(it.text)}</p>` : ''}
          ${it.place ? placeBlock(it.place) : ''}
          <button class="step__done" type="button" data-done="${i}" aria-pressed="${!!done[i]}">
            ${I.checkS}<span>${done[i] ? 'Fait' : 'Marquer comme fait'}</span>
          </button>
        </div>
      </div>`).join('') +
      (d.alert ? `<div class="step"><div class="step__dot">${I.warn}</div><div class="step__h"><span class="step__t">Attention</span></div><div class="step__card"><p>${esc(d.alert)}</p></div></div>` : '') +
      (d.note ? `<div class="step"><div class="step__dot">${I.info}</div><div class="step__h"><span class="step__t">À noter</span></div><div class="step__card"><p>${esc(d.note)}</p></div></div>` : '');

    // à prévoir aujourd'hui
    const p = store.json(packKey(n), {});
    $('#d-pack').innerHTML = (d.pack||[]).map((t,i) =>
      `<li><label><input type="checkbox" data-pack="${i}" ${p[i]?'checked':''}><span class="bx" aria-hidden="true">${I.check}</span><span class="tx">${esc(t)}</span></label></li>`).join('');
    packRefresh(n);

    // pastilles + pager
    $('#d-jump').innerHTML = TRIP.days.map(x =>
      `<a href="#/jour/${x.n}" aria-current="${x.n===n}" title="${esc(x.label)}">${x.n}</a>`).join('');
    const pv = dayByN(n-1), nx = dayByN(n+1);
    $('#d-pager').innerHTML =
      (pv ? `<a href="#/jour/${pv.n}"><small>← Jour ${pv.n}</small><b>${esc(pv.title)}</b></a>`
          : `<a href="#/programme"><small>←</small><b>Programme</b></a>`) +
      (nx ? `<a class="nx" href="#/jour/${nx.n}"><small>Jour ${nx.n} →</small><b>${esc(nx.title)}</b></a>`
          : `<a class="nx" href="#/programme"><small>→</small><b>Programme</b></a>`);

    startNext(d);
    bindRail();
    wxFill(false);
    window.scrollTo(0,0);
  }

  let bandTimer = null;
  function startBand(d){
    clearInterval(bandTimer);
    const band = $('#d-band'), dots = $('#d-dots');
    if (!band) return;
    const keys = (d.gallery && d.gallery.length ? d.gallery : [d.hero]).filter(k => img(k, 'hero')).slice(0, 5);
    band.innerHTML = keys.map((k, i) =>
      `<img src="${img(k, 'hero')}" alt="${i === 0 ? esc(d.title) : ''}" class="${i === 0 ? 'on' : ''}"
            ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} width="1920" height="1080">`).join('');
    dots.innerHTML = keys.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('');
    if (keys.length < 2 || REDUCED) return;
    let i = 0;
    bandTimer = setInterval(() => {
      const imgs = $$('img', band), ds = $$('i', dots);
      imgs[i].classList.remove('on'); ds[i].classList.remove('on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('on'); ds[i].classList.add('on');
    }, 5200);
  }

  function packRefresh(n){
    const b = $$('#d-pack input');
    if(!b.length){ $('#d-packbar').style.width='0%'; $('#d-packcount').textContent=''; return; }
    const k = b.filter(x=>x.checked).length;
    $('#d-packbar').style.width = (k/b.length*100)+'%';
    $('#d-packcount').textContent = k + ' sur ' + b.length + (k===b.length ? ' — sac bouclé' : ' préparés');
  }

  function bindRail(){
    if (railHandler) window.removeEventListener('scroll', railHandler);
    const tl = $('#d-tl'), fill = $('#d-rail'); if(!tl) return;
    let t = false;
    const run = () => {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight*0.8 - r.top) / Math.max(1, r.height*0.85)));
      fill.style.height = (p*100)+'%';
      const mid = window.innerHeight*0.55;
      $$('.step', tl).forEach(s => { if(!s.classList.contains('done')) s.classList.toggle('on', s.getBoundingClientRect().top < mid); });
      t = false;
    };
    railHandler = () => { if(!t){ t = true; requestAnimationFrame(run); } };
    window.addEventListener('scroll', railHandler, { passive:true });
    run();
  }

  function startNext(d){
    clearInterval(nextTimer);
    const el = $('#d-next');
    const dayStart = new Date(d.date + 'T00:00:00').getTime();
    function tick(){
      const now = Date.now();
      if (new Date(now).toDateString() === new Date(dayStart).toDateString()){
        const up = d.items.map(it => {
          const [h,m] = it.t.replace('h',':').split(':');
          return { t: it.title, w: new Date(d.date + 'T' + h.padStart(2,'0') + ':' + (m||'00') + ':00').getTime() };
        }).filter(x => x.w > now).sort((a,b)=>a.w-b.w)[0];
        if (up){
          const mins = Math.round((up.w-now)/60000);
          const txt = mins >= 60 ? Math.floor(mins/60)+' h '+String(mins%60).padStart(2,'0') : mins+' min';
          el.innerHTML = I.clock + '<span>' + esc(up.t) + ' dans <em>' + txt + '</em></span>';
          return;
        }
        el.innerHTML = I.clock + '<span>Journée lancée</span>'; return;
      }
      const days = Math.ceil((dayStart-now)/86400000);
      el.innerHTML = I.clock + (days > 0
        ? '<span>Dans <em>' + days + ' jour' + (days>1?'s':'') + '</em></span>'
        : '<span>Journée passée</span>');
    }
    tick(); nextTimer = setInterval(tick, 30000);
  }

  /* ======================================================================
     CARTE
     ====================================================================== */
  let map = null, layers = {}, mapCat = 'all';
  function renderMap(){
    const host = $('#map');
    if (typeof L === 'undefined'){ host.innerHTML = '<p style="padding:24px">La carte n’a pas pu se charger. Les boutons « Google Maps » de chaque lieu restent fonctionnels.</p>'; return; }
    if (map) { map.invalidateSize(); return; }

    map = L.map(host, { scrollWheelZoom:false });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

    // à quelle étape appartient chaque lieu (via la première journée qui le cite)
    const legByPlace = {};
    TRIP.days.forEach(d => d.items.forEach(it => { if (it.place && !legByPlace[it.place]) legByPlace[it.place] = d.leg; }));

    const all = [];
    TRIP.legs.forEach(l => { layers[l.id] = L.layerGroup().addTo(map); });
    Object.keys(TRIP.places).forEach(k => {
      const p = TRIP.places[k]; const pos = latlng(p.maps); if(!pos) return;
      const lid = legByPlace[k] || 'algarve'; const l = legOf(lid);
      all.push(pos);
      const icon = L.divIcon({ className:'', iconSize:[26,26], iconAnchor:[13,26], popupAnchor:[0,-26],
        html:`<div class="pin" style="background:${l.color}">${CAT_ICON[p.cat]||I.pin}</div>` });
      const mk = L.marker(pos,{ icon, title:p.name, alt:p.name });
      mk.__cat = p.cat;
      mk.addTo(layers[lid]).bindPopup(
        `<div class="pop">${p.img?`<img src="${img(p.img,'card')}" alt="" loading="lazy">`:''}
          <div class="pop__b">
            <div class="pop__c">${esc(CAT_LABEL[p.cat]||p.cat)} · ${esc(p.city)}</div>
            <h4>${esc(p.name)}</h4>
            <p>${esc(p.desc.slice(0,120))}${p.desc.length>120?'…':''}</p>
            ${p.maps?`<a href="${p.maps}" target="_blank" rel="noopener noreferrer">Ouvrir dans Google Maps →</a>`:''}
          </div></div>`, { maxWidth:238 });
    });

    // itinéraire général entre les trois bases
    const route = [];
    ['vilamouraMarina','comercio','ribeira'].forEach(k => { const c = latlng(TRIP.places[k] && TRIP.places[k].maps); if(c) route.push(c); });
    if (route.length > 1) L.polyline(route, { color:'#123A5A', weight:2.5, opacity:.55, dashArray:'7 8' }).addTo(map);

    if (all.length) map.fitBounds(all, { padding:[36,36] });

    $('#map-filters').innerHTML =
      `<button type="button" data-mleg="all" aria-pressed="true" style="--fc:var(--atlantic)">Tout le voyage</button>` +
      TRIP.legs.map(l => `<button type="button" data-mleg="${l.id}" aria-pressed="true" style="--fc:${l.color}">${esc(l.name)}</button>`).join('');
    const cats = Object.keys(CAT_LABEL).filter(c => Object.keys(TRIP.places).some(k => TRIP.places[k].cat===c));
    $('#map-cats').innerHTML =
      `<button type="button" data-mcat="all" aria-pressed="true" style="--fc:var(--ink)">Toutes catégories</button>` +
      cats.map(c => `<button type="button" data-mcat="${c}" aria-pressed="false" style="--fc:var(--ink)">${esc(CAT_LABEL[c])}</button>`).join('');

    map.on('click', ()=>map.scrollWheelZoom.enable());
    map.on('mouseout', ()=>map.scrollWheelZoom.disable());
    setTimeout(()=>map && map.invalidateSize(), 80);
  }

  function applyCat(){
    Object.keys(layers).forEach(id => layers[id].eachLayer(mk => {
      const el = mk.getElement && mk.getElement();
      if (el) el.style.display = (mapCat === 'all' || mk.__cat === mapCat) ? '' : 'none';
    }));
  }

  /* ======================================================================
     RÉSERVATIONS
     ====================================================================== */
  const bookingStates = () => store.json('pt.bk', {});
  const NEXT_ST = { todo:'pending', pending:'done', done:'todo' };
  const ST_LABEL = { todo:'À réserver', pending:'En attente', done:'Confirmé' };

  function renderBookings(){
    const st = bookingStates();
    renderStats('#bk-stats');
    $('#bk-list').innerHTML = TRIP.bookings.map((b,i) => {
      const s = st[i] || b.status;
      const p = placeOf(b.place);
      const acts = [];
      if (p && p.book && p.book.ok) acts.push(`<a class="btn btn--p" href="${p.book.v}" target="_blank" rel="noopener noreferrer">${I.ticket}Réserver</a>`);
      else if (p && p.url && p.url.ok) acts.push(`<a class="btn btn--p" href="${p.url.v}" target="_blank" rel="noopener noreferrer">${I.link}Site officiel</a>`);
      if (p && p.phone && p.phone.ok) acts.push(`<a class="btn" href="tel:${p.phone.v.split('·')[0].replace(/[^+0-9]/g,'')}">${I.phone}Appeler</a>`);
      acts.push(`<a class="btn" href="#/jour/${b.day}">${I.cal}Jour ${b.day}</a>`);
      return `<article class="bkcard reveal" style="--d:${Math.min(i,8)*35}ms">
        <div class="bkcard__h">
          <div class="bkcard__i">
            <h4>${esc(b.name)}</h4>
            <div class="bkcard__m">${esc(b.date)} · ${esc(b.time)} · ${esc(b.people)}</div>
          </div>
          <button class="st st--${s}" type="button" data-bk="${i}" aria-label="Changer le statut de ${esc(b.name)}">
            ${s==='done'?I.checkS:(s==='pending'?I.clock:I.warn)}${ST_LABEL[s]}
          </button>
        </div>
        ${b.notes?`<p class="bkcard__n">${esc(b.notes)}</p>`:''}
        <div class="bkcard__a">${acts.join('')}</div>
      </article>`;
    }).join('');
    observe();
  }

  /* ======================================================================
     INFOS
     ====================================================================== */
  function renderInfos(){
    $('#infos-list').innerHTML = TRIP.infos.map(g => `
      <section class="info reveal">
        <div class="info__h">${I[g.icon] || I.info}<h3>${esc(g.title)}</h3></div>
        ${g.rows.map(r => `<div class="info__r"><b>${esc(r.k)}</b><span>${r.ok ? esc(r.v) : (r.v ? esc(r.v) : tbc)}${r.ok?'':' <span class="tbc">(à confirmer)</span>'}</span></div>`).join('')}
      </section>`).join('');

    $('#tcf').innerHTML = `<h3>${I.warn}Informations qui restent à confirmer</h3><ul>` +
      TRIP.toConfirm.map(x => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join('') + '</ul>';
    observe();
  }
  /* ======================================================================
     ANIMATIONS AU DÉFILEMENT
     ====================================================================== */
  let io;
  function observe(){
    if (REDUCED){ $$('.reveal').forEach(e=>e.classList.add('in')); return; }
    if (!io) io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin:'0px 0px -6% 0px', threshold:.06 });
    $$('.reveal:not(.in)').forEach(e => io.observe(e));
  }

  /* ======================================================================
     ROUTEUR
     ====================================================================== */
  const TABS = [
    { id:'accueil', label:'Accueil', icon:'home' },
    { id:'programme', label:'Programme', icon:'cal' },
    { id:'carte', label:'Carte', icon:'map' },
    { id:'reservations', label:'Réserv.', icon:'ticket' },
    { id:'infos', label:'Infos', icon:'info' }
  ];
  const go = h => { location.hash = h; };

  function renderTabs(cur){
    $('#tabs').innerHTML = TABS.map(t =>
      `<a class="tab" href="#/${t.id}" aria-current="${t.id===cur}">
         ${I[t.icon]}<span>${t.label}</span><span class="tab__dot"></span>
       </a>`).join('');
  }

  function show(view){
    $$('.view').forEach(v => v.classList.toggle('is-on', v.id === 'v-' + view));
  }

  function route(){
    const h = location.hash || '#/accueil';
    const mDay = /^#\/jour\/(\d+)/.exec(h);
    if (mDay){
      renderDay(+mDay[1]); show('jour'); renderTabs('programme');
      return;
    }
    const mLeg = /^#\/programme\?leg=([a-z]+)/.exec(h);
    if (mLeg){ progFilter = mLeg[1]; }
    const name = (h.replace('#/','').split('?')[0]) || 'accueil';
    const view = TABS.some(t => t.id === name) ? name : 'accueil';

    if (railHandler){ window.removeEventListener('scroll', railHandler); railHandler = null; }
    clearInterval(nextTimer); clearInterval(bandTimer);

    if (view === 'accueil'){ setAccent(null); renderHome(); startCountdown(); renderProgress(); }
    if (view === 'programme'){ setAccent(progFilter === 'all' ? null : progFilter); renderProgramme(); }
    if (view === 'reservations'){ setAccent(null); renderBookings(); }
    if (view === 'infos'){ setAccent(null); renderInfos(); }
    show(view); renderTabs(view);
    if (view === 'carte'){ setAccent(null); setTimeout(renderMap, 30); }
    window.scrollTo(0,0);
    observe();
  }

  /* ======================================================================
     ÉVÉNEMENTS GLOBAUX (délégation : survit à tous les re-rendus)
     ====================================================================== */
  function wire(){
    document.addEventListener('click', e => {
      // favoris
      const f = e.target.closest('[data-fav]');
      if (f){
        const k = f.dataset.fav; const l = favs(); const i = l.indexOf(k);
        if (i >= 0) l.splice(i,1); else l.push(k);
        save('pt.favs', l);
        const on = i < 0;
        $$(`[data-fav="${k}"]`).forEach(b => b.setAttribute('aria-pressed', String(on)));
        toast(on ? 'Ajouté à tes favoris' : 'Retiré de tes favoris');
        return;
      }
      // copier une adresse
      const c = e.target.closest('[data-copy]');
      if (c){
        const txt = c.dataset.copy;
        if (navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(txt).then(()=>toast('Adresse copiée')).catch(()=>toast(txt));
        } else toast(txt);
        return;
      }
      // activité terminée
      const dn = e.target.closest('[data-done]');
      if (dn){
        const m = /jour\/(\d+)/.exec(location.hash); const n = m ? +m[1] : 1;
        const i = +dn.dataset.done; const s = store.json(doneKey(n), {});
        s[i] = !s[i]; save(doneKey(n), s);
        dn.setAttribute('aria-pressed', String(!!s[i]));
        $('span', dn).textContent = s[i] ? 'Fait' : 'Marquer comme fait';
        dn.closest('.step').classList.toggle('done', !!s[i]);
        return;
      }
      // statut de réservation
      const bk = e.target.closest('[data-bk]');
      if (bk){
        const i = +bk.dataset.bk; const st = bookingStates();
        const cur = st[i] || TRIP.bookings[i].status;
        st[i] = NEXT_ST[cur]; save('pt.bk', st);
        renderBookings(); toast('Statut : ' + ST_LABEL[st[i]]);
        return;
      }
      // filtres programme
      const pf = e.target.closest('[data-leg]');
      if (pf){ progFilter = pf.dataset.leg; setAccent(progFilter==='all'?null:progFilter); renderProgramme(); return; }
      // filtres carte — étapes
      const ml = e.target.closest('[data-mleg]');
      if (ml && map){
        const id = ml.dataset.mleg; const btns = $$('#map-filters button');
        if (id === 'all'){
          btns.forEach(b => b.setAttribute('aria-pressed','true'));
          TRIP.legs.forEach(l => map.addLayer(layers[l.id]));
        } else {
          btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mleg === id)));
          TRIP.legs.forEach(l => { if (l.id===id) map.addLayer(layers[l.id]); else map.removeLayer(layers[l.id]); });
        }
        applyCat();
        return;
      }
      // filtres carte — catégories
      const mc = e.target.closest('[data-mcat]');
      if (mc){
        mapCat = mc.dataset.mcat;
        $$('#map-cats button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mcat === mapCat)));
        applyCat();
        return;
      }
    });

    document.addEventListener('change', e => {
      const t = e.target;
      if (t.type !== 'checkbox') return;
      const m = /jour\/(\d+)/.exec(location.hash); const n = m ? +m[1] : 1;
      if (t.dataset.pack !== undefined){
        const s = store.json(packKey(n), {}); s[t.dataset.pack] = t.checked; save(packKey(n), s); packRefresh(n);
      }
    });

    window.addEventListener('hashchange', route);
    window.addEventListener('resize', () => { if (map) map.invalidateSize(); }, { passive:true });

    /* Parallaxe du fond azulejo : le carreau glisse trois fois moins vite que
       le contenu, juste assez pour donner de la profondeur sans distraire. */
    const az = $('.azulejo');
    if (az && !REDUCED){
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          az.style.setProperty('--az-y', (window.scrollY * 0.06).toFixed(1) + 'px');
          ticking = false;
        });
      }, { passive:true });
    }
  }

  /* ======================================================================
     AMBIANCE SONORE
     Rien n'est téléchargé : le son est synthétisé dans le navigateur avec
     l'API Web Audio. Deux couches — le ressac de l'Atlantique (bruit filtré
     dont l'amplitude respire lentement) et une corde pincée façon guitare
     portugaise, qui égrène un mode phrygien en notes espacées. Aucun fichier,
     aucune question de droits, quelques kilo-octets de code.
     Le son ne démarre jamais seul : il faut appuyer sur le bouton.
     ====================================================================== */
  const AMB = (() => {
    const KEY = 'pt.amb';
    let ctx = null, master = null, timer = null, on = false;

    // mi phrygien — l'intervalle de seconde mineure donne la couleur ibérique
    const SCALE = [164.81, 174.61, 196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 392.00, 440.00];

    function reverb(){
      const secs = 2.6, n = Math.floor(ctx.sampleRate * secs);
      const buf = ctx.createBuffer(2, n, ctx.sampleRate);
      for (let c = 0; c < 2; c++){
        const d = buf.getChannelData(c);
        for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.6);
      }
      const cv = ctx.createConvolver(); cv.buffer = buf; return cv;
    }

    function ocean(dest){
      const n = ctx.sampleRate * 4;
      const buf = ctx.createBuffer(1, n, ctx.sampleRate);
      const d = buf.getChannelData(0);
      let last = 0;                                   // bruit brun : plus doux que le blanc
      for (let i = 0; i < n; i++){
        last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        d[i] = last * 3.2;
      }
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.6;
      const swell = ctx.createGain(); swell.gain.value = 0.5;
      const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 0.085;
      const lfoAmt = ctx.createGain(); lfoAmt.gain.value = 0.42;
      lfo.connect(lfoAmt); lfoAmt.connect(swell.gain);
      const lvl = ctx.createGain(); lvl.gain.value = 0.5;
      src.connect(lp); lp.connect(swell); swell.connect(lvl); lvl.connect(dest);
      src.start(); lfo.start();
    }

    // corde pincée : une bouffée de bruit entretenue par une ligne à retard
    function pluck(freq, when, vel, dest){
      const len = Math.ceil(ctx.sampleRate * 0.02);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = ctx.createBufferSource(); src.buffer = buf;
      const inG = ctx.createGain(); inG.gain.value = vel;
      const dly = ctx.createDelay(0.1); dly.delayTime.value = 1 / freq;
      const fb = ctx.createGain(); fb.gain.value = 0.962;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2300;
      const body = ctx.createBiquadFilter(); body.type = 'peaking'; body.frequency.value = 400; body.gain.value = 4.5;
      src.connect(inG); inG.connect(dly);
      dly.connect(lp); lp.connect(fb); fb.connect(dly);
      lp.connect(body); body.connect(dest);
      fb.gain.setValueAtTime(0.962, when);
      fb.gain.linearRampToValueAtTime(0, when + 3.4);
      src.start(when); src.stop(when + 0.02);
    }

    let strings = null;

    function build(){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0;
      master.connect(ctx.destination);

      const wet = reverb(); const wetG = ctx.createGain(); wetG.gain.value = 0.34;
      wet.connect(wetG); wetG.connect(master);
      const dry = ctx.createGain(); dry.gain.value = 0.85; dry.connect(master);

      ocean(dry);

      strings = ctx.createGain(); strings.gain.value = 0.5;
      strings.connect(dry); strings.connect(wet);
      return true;
    }

    function schedule(){
      if (!on) return;
      const t = ctx.currentTime + 0.05;
      const i = Math.floor(Math.random() * SCALE.length);
      pluck(SCALE[i], t, 0.5 + Math.random() * 0.3, strings);
      if (Math.random() < 0.45){                      // parfois une seconde note, très proche
        const j = Math.max(0, Math.min(SCALE.length - 1, i + (Math.random() < 0.5 ? 2 : -2)));
        pluck(SCALE[j], t + 0.19 + Math.random() * 0.14, 0.35, strings);
      }
      timer = setTimeout(schedule, 1900 + Math.random() * 2600);
    }

    function fade(to, secs){
      if (!master) return;
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(to, t + secs);
    }

    return {
      get on(){ return on; },
      wanted(){ try { return localStorage.getItem(KEY) === '1'; } catch(e){ return false; } },
      toggle(){
        if (on){
          on = false;
          fade(0, 1.2);
          clearTimeout(timer);
          setTimeout(() => { if (!on && ctx) ctx.suspend(); }, 1300);
          try { localStorage.setItem(KEY, '0'); } catch(e){}
          return false;
        }
        if (!ctx && !build()) return false;
        on = true;
        if (ctx.state === 'suspended') ctx.resume();
        clearTimeout(timer);
        timer = setTimeout(schedule, 300);
        fade(0.22, 2.2);
        try { localStorage.setItem(KEY, '1'); } catch(e){}
        return true;
      }
    };
  })();

  function wireAmbiance(){
    const btn = $('#amb');
    if (!btn) return;
    if (!(window.AudioContext || window.webkitAudioContext)) return;   // pas de son possible
    btn.hidden = false;

    btn.addEventListener('click', () => {
      const playing = AMB.toggle();
      btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      btn.setAttribute('aria-label', playing ? 'Couper l’ambiance sonore' : 'Écouter l’ambiance sonore du voyage');
      btn.classList.remove('pulse');
    });

    if (AMB.wanted()){
      // la personne avait déjà activé le son : on le reprend à son premier geste,
      // sans rien lui redemander, parce que le navigateur exige une interaction
      const resume = () => {
        document.removeEventListener('pointerdown', resume);
        if (AMB.on) return;
        const playing = AMB.toggle();
        btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      };
      document.addEventListener('pointerdown', resume, { once:true });
    } else if (!REDUCED){
      setTimeout(() => btn.classList.add('pulse'), 1800);
    }
  }

  /* -------------------------------------------------------------- démarrage */
  function boot(){
    wire();
    wireAmbiance();
    if (!location.hash) location.hash = '#/accueil';
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
