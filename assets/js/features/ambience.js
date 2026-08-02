/* ============================================================================
   AMBIANCE SONORE
   ----------------------------------------------------------------------------
   Deux sources, dans cet ordre :

   1. Un vrai morceau — « Chiado », de Jahzzar, tiré de l'album « Paris,
      Lisboa », sous licence Creative Commons BY-SA 3.0. L'album a été composé
      en marchant dans Lisbonne, et Chiado est un quartier de la ville : le
      morceau ne remplit pas un trou, il parle du même endroit que le site.
      La licence exige une attribution visible — elle est dans le pied de page.
      La retirer rendrait l'usage illicite.

   2. Si le fichier ne se charge pas — réseau coupé, lien mort, format refusé —
      une ambiance synthétisée dans le navigateur prend le relais : ressac de
      l'Atlantique et corde pincée en mode phrygien. Aucun octet téléchargé.

   Le démarrage automatique est tenté à l'ouverture. Tous les navigateurs
   mobiles le refusent tant que la personne n'a rien touché : dans ce cas le
   son part au premier geste, sans rien demander. Le bouton flottant reste
   maître, et le choix est mémorisé sur l'appareil.

   Pour utiliser un autre morceau : déposer le fichier dans
   assets/audio/ambiance.mp3 — il est essayé en premier. Ne pas y mettre de
   musique commerciale protégée.
   ========================================================================== */

import { $, REDUCED } from '../core/dom.js';

const KEY = 'pt.amb';
const VOLUME = 0.22;

export const PISTE = {
  titre:   'Chiado',
  auteur:  'Jahzzar',
  album:   'Paris, Lisboa',
  licence: 'CC BY-SA 3.0',
  page:    'https://archive.org/details/Paris_Lisboa-11367',
  sources: [
    { src: 'assets/audio/ambiance.mp3', type: 'audio/mpeg' },
    { src: 'https://archive.org/download/Paris_Lisboa-11367/Jahzzar_-_04_-_Chiado.mp3', type: 'audio/mpeg' },
    { src: 'https://archive.org/download/Paris_Lisboa-11367/Jahzzar_-_04_-_Chiado.ogg',  type: 'audio/ogg'  }
  ]
};

/* ---------------------------------------------------------------- le morceau */
let audio = null, fichierMort = false;

function buildAudio(){
  if (audio) return audio;
  audio = new Audio();
  audio.loop = true;
  audio.preload = 'none';
  audio.volume = 0;
  PISTE.sources.forEach(s => {
    const el = document.createElement('source');
    el.src = s.src; el.type = s.type;
    audio.appendChild(el);
  });
  // l'événement error remonte depuis la dernière <source> quand aucune ne marche
  audio.addEventListener('error', () => { fichierMort = true; }, true);
  return audio;
}

function fadeAudio(to, ms){
  if (!audio) return;
  const from = audio.volume, t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / ms);
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * k));
    if (k < 1) requestAnimationFrame(step);
    else if (to === 0) audio.pause();
  };
  requestAnimationFrame(step);
}

/* ------------------------------------------------------ l'ambiance de secours */
const SYNTH = (() => {
  let ctx = null, master = null, timer = null, strings = null, on = false;
  const SCALE = [164.81, 174.61, 196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 392.00, 440.00];

  function reverb(){
    const n = Math.floor(ctx.sampleRate * 2.6);
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
    let last = 0;
    for (let i = 0; i < n; i++){ last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.2; }
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.6;
    const swell = ctx.createGain(); swell.gain.value = 0.5;
    const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 0.085;
    const amt = ctx.createGain(); amt.gain.value = 0.42;
    lfo.connect(amt); amt.connect(swell.gain);
    const lvl = ctx.createGain(); lvl.gain.value = 0.5;
    src.connect(lp); lp.connect(swell); swell.connect(lvl); lvl.connect(dest);
    src.start(); lfo.start();
  }
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
  function build(){
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
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
    if (Math.random() < 0.45){
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
    supported: () => !!(window.AudioContext || window.webkitAudioContext),
    start(){
      if (!ctx && !build()) return false;
      on = true;
      if (ctx.state === 'suspended') ctx.resume();
      clearTimeout(timer); timer = setTimeout(schedule, 300);
      fade(VOLUME, 2.2);
      return true;
    },
    stop(){
      on = false; clearTimeout(timer); fade(0, 1.2);
      setTimeout(() => { if (!on && ctx) ctx.suspend(); }, 1300);
    }
  };
})();

/* -------------------------------------------------------------- orchestration */
let playing = false;

function start(){
  const a = buildAudio();
  a.preload = 'auto';

  /* Trois issues possibles, et il faut les traiter toutes les trois :

     - la lecture démarre  → on monte le volume en fondu ;
     - la lecture est refusée faute de geste (NotAllowedError) → on ne bascule
       sur rien, le fichier est bon, on attendra le clic ;
     - la lecture n'aboutit pas — fichier illisible, ou requête qui reste en
       suspens sur un réseau lent — → l'ambiance synthétisée prend le relais.

     Le troisième cas est le piège : sur une connexion médiocre, la promesse
     de play() peut ne jamais se résoudre. Sans délai de garde, le bouton
     resterait muet sans que personne comprenne pourquoi. */
  let réglé = false;
  const secours = () => {
    if (réglé) return false;
    réglé = true;
    fichierMort = true;
    try { a.pause(); } catch(e){}
    return SYNTH.supported() ? SYNTH.start() : false;
  };

  let p;
  try { p = a.play(); } catch(e){ p = null; }
  if (!p || !p.then){ fadeAudio(VOLUME, 2200); return Promise.resolve(true); }

  const lecture = p.then(() => {
    if (réglé) return false;
    réglé = true;
    fadeAudio(VOLUME, 2200);
    return true;
  }).catch(err => {
    if (err && err.name === 'NotAllowedError'){ réglé = true; return false; }
    return secours();
  });

  const garde = new Promise(res => setTimeout(() => res(secours()), 4000));
  return Promise.race([lecture, garde]);
}

function stop(){
  fadeAudio(0, 1000);
  SYNTH.stop();
}

function refleter(btn){
  btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  btn.setAttribute('aria-label', playing ? 'Couper la musique' : 'Écouter la musique du voyage');
  try { localStorage.setItem(KEY, playing ? '1' : '0'); } catch(e){}
}

export function wireAmbiance(){
  const btn = $('#amb');
  if (!btn) return;
  btn.hidden = false;

  btn.addEventListener('click', () => {
    btn.classList.remove('pulse');
    if (playing){ stop(); playing = false; refleter(btn); return; }
    start().then(ok => { playing = ok; refleter(btn); });
  });

  let voulu = true;
  try { voulu = localStorage.getItem(KEY) !== '0'; } catch(e){}
  if (!voulu) return;

  /* Tentative de démarrage automatique. Les navigateurs mobiles la refusent
     tant que rien n'a été touché : ce n'est pas une erreur, on attend le
     premier geste et le son part à ce moment-là. */
  start().then(ok => {
    playing = ok;
    if (ok){ refleter(btn); return; }
    const auPremierGeste = () => {
      if (playing) return;
      start().then(k => { playing = k; refleter(btn); btn.classList.remove('pulse'); });
    };
    document.addEventListener('pointerdown', auPremierGeste, { once:true });
    if (!REDUCED) setTimeout(() => { if (!playing) btn.classList.add('pulse'); }, 1400);
  });
}
