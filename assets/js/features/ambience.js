/* ====================================================================
   Ambiance sonore synthétisée dans le navigateur (Web Audio).
   Aucun fichier audio, aucune question de droits.
   ==================================================================== */

import { $, REDUCED } from '../core/dom.js';

/* ======================================================================
   AMBIANCE SONORE
   Rien n'est téléchargé : le son est synthétisé dans le navigateur avec
   l'API Web Audio. Deux couches — le ressac de l'Atlantique (bruit filtré
   dont l'amplitude respire lentement) et une corde pincée façon guitare
   portugaise, qui égrène un mode phrygien en notes espacées. Aucun fichier,
   aucune question de droits, quelques kilo-octets de code.
   Le son ne démarre jamais seul : il faut appuyer sur le bouton.
   ====================================================================== */
export const AMB = (() => {
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

export function wireAmbiance(){
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
