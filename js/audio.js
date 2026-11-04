/* Procedural WebAudio soundscape — no audio assets required. */

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfx = null;
    this.music = null;
    this.ready = false;
    this.noise = null;
    this._ambienceStarted = false;
    this._lastStep = 0;
  }

  init() {
    if (this.ready) { this.ctx.resume(); return; }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    const ctx = this.ctx;

    this.master = ctx.createGain();
    this.master.gain.value = 0.72;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 18;
    comp.ratio.value = 4;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    this.master.connect(comp).connect(ctx.destination);

    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);

    this.music = ctx.createGain();
    this.music.gain.value = 0.0;
    this.music.connect(this.master);

    // reverb bus
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.4, 2.6);
    this.reverbGain = ctx.createGain();
    this.reverbGain.gain.value = 0.28;
    this.reverb.connect(this.reverbGain).connect(this.master);

    this.noise = this._noiseBuffer(2.0);
    this.ready = true;
    this._startAmbience();
  }

  _noiseBuffer(sec) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * sec), ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      data[i] = last * 3.5;
    }
    return buf;
  }

  _impulse(sec, decay) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }

  _noiseSrc(dur = 1) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    src.loopEnd = this.noise.duration;
    src.start(this.ctx.currentTime, Math.random() * 0.5);
    src.stop(this.ctx.currentTime + dur + 0.1);
    return src;
  }

  _startAmbience() {
    if (this._ambienceStarted) return;
    this._ambienceStarted = true;
    const ctx = this.ctx;

    // rain bed — filtered noise, gently modulated
    const rain = this._noiseSrc(9999);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.35;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 500;
    const g = ctx.createGain(); g.gain.value = 0.055;
    rain.connect(bp).connect(hp).connect(g).connect(this.master);
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.018;
    lfo.connect(lfoG).connect(g.gain); lfo.start();

    // deep city rumble
    const rumble = this._noiseSrc(9999);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 110; lp.Q.value = 0.6;
    const rg = ctx.createGain(); rg.gain.value = 0.14;
    rumble.connect(lp).connect(rg).connect(this.master);

    // sustained dystopian pad
    const padGain = ctx.createGain(); padGain.gain.value = 0.035;
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass'; padFilter.frequency.value = 420; padFilter.Q.value = 4;
    padGain.connect(padFilter).connect(this.music);
    [55, 82.41, 110, 164.81].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 ? 'sawtooth' : 'triangle';
      o.frequency.value = f;
      o.detune.value = (i - 1.5) * 6;
      const og = ctx.createGain(); og.gain.value = 0.25 / (i + 1);
      o.connect(og).connect(padGain);
      o.start();
      const lf = ctx.createOscillator(); lf.frequency.value = 0.03 + i * 0.011;
      const lfg = ctx.createGain(); lfg.gain.value = 2.5;
      lf.connect(lfg).connect(o.frequency); lf.start();
    });
    this.music.gain.setTargetAtTime(0.3, ctx.currentTime, 4);
  }

  setCombat(on) {
    if (!this.ready) return;
    this.music.gain.setTargetAtTime(on ? 0.42 : 0.28, this.ctx.currentTime, 2);
  }

  _env(node, t0, a, d, peak = 1) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d);
    node.connect(g);
    return g;
  }

  gunshot() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    // crack
    const src = this._noiseSrc(0.2);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 9500;
    src.connect(hp).connect(lp);
    const g = this._env(lp, t, 0.003, 0.16, 0.75);
    g.connect(this.sfx); g.connect(this.reverb);

    // body thump
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(160, t);
    o.frequency.exponentialRampToValueAtTime(44, t + 0.12);
    const og = this._env(o, t, 0.004, 0.16, 0.55);
    og.connect(this.sfx);
    o.start(t); o.stop(t + 0.22);

    // mech clack
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.setValueAtTime(680, t);
    o2.frequency.exponentialRampToValueAtTime(180, t + 0.03);
    const g2 = this._env(o2, t, 0.001, 0.035, 0.07);
    g2.connect(this.sfx); o2.start(t); o2.stop(t + 0.06);
  }

  hit(crit = false) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(crit ? 1600 : 1150, t);
    o.frequency.exponentialRampToValueAtTime(crit ? 2100 : 1500, t + 0.03);
    const g = this._env(o, t, 0.002, crit ? 0.13 : 0.07, 0.16);
    g.connect(this.sfx); o.start(t); o.stop(t + 0.18);
  }

  kill() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = this._noiseSrc(0.4);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 700; bp.Q.value = 1.4;
    src.connect(bp);
    const g = this._env(bp, t, 0.005, 0.35, 0.32);
    g.connect(this.sfx); g.connect(this.reverb);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(90, t);
    o.frequency.exponentialRampToValueAtTime(30, t + 0.4);
    const og = this._env(o, t, 0.01, 0.4, 0.45); og.connect(this.sfx);
    o.start(t); o.stop(t + 0.5);
  }

  explosion(big = false) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = this._noiseSrc(1.2);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(big ? 900 : 1600, t);
    lp.frequency.exponentialRampToValueAtTime(big ? 80 : 180, t + 0.9);
    src.connect(lp);
    const g = this._env(lp, t, 0.006, big ? 1.1 : 0.6, big ? 0.95 : 0.55);
    g.connect(this.sfx); g.connect(this.reverb);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(big ? 80 : 120, t);
    o.frequency.exponentialRampToValueAtTime(20, t + (big ? 0.9 : 0.5));
    const og = this._env(o, t, 0.01, big ? 0.95 : 0.5, big ? 0.8 : 0.5);
    og.connect(this.sfx); o.start(t); o.stop(t + 1.1);
  }

  reload() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    // magazine out
    const click = (at, f, dur, vol) => {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const g = this._env(o, t + at, 0.001, dur, vol);
      g.connect(this.sfx); o.start(t + at); o.stop(t + at + dur + 0.05);
    };
    click(0, 240, 0.05, 0.1);
    click(0.16, 160, 0.07, 0.14);
    click(0.62, 320, 0.04, 0.1);
    click(0.78, 520, 0.03, 0.12);
    const src = this._noiseSrc(0.12);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2200;
    src.connect(bp);
    const g = this._env(bp, t + 0.78, 0.002, 0.08, 0.08);
    g.connect(this.sfx);
  }

  empty() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 140;
    const g = this._env(o, t, 0.001, 0.05, 0.09); g.connect(this.sfx);
    o.start(t); o.stop(t + 0.08);
  }

  damage() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.25);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 800;
    o.connect(lp);
    const g = this._env(lp, t, 0.006, 0.3, 0.3); g.connect(this.sfx); g.connect(this.reverb);
    o.start(t); o.stop(t + 0.4);
  }

  wave() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    [220, 330, 440].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = this._env(o, t + i * 0.16, 0.03, 0.5, 0.12);
      g.connect(this.sfx); g.connect(this.reverb);
      o.start(t + i * 0.16); o.stop(t + i * 0.16 + 0.6);
    });
  }

  step(sprint = false) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    if (now - this._lastStep < (sprint ? 0.24 : 0.34)) return;
    this._lastStep = now;
    const ctx = this.ctx, t = now;
    const src = this._noiseSrc(0.1);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    src.connect(lp);
    const g = this._env(lp, t, 0.004, 0.09, 0.13);
    g.connect(this.sfx);
  }

  ui() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 880;
    const g = this._env(o, t, 0.002, 0.08, 0.08); g.connect(this.sfx);
    o.start(t); o.stop(t + 0.12);
  }
}
