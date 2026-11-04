// Procedural dark-classical score + arcade SFX. No external audio assets.
const NOTE = m => 440 * Math.pow(2, (m - 69) / 12)

export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.music = null
    this.sfxBus = null
    this.vol = { master: 0.8, music: 0.7, sfx: 0.85 }
    this.scene = null
    this.timer = null
    this.nextTime = 0
    this.step = 0
    this.engine = null
    this.started = false
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
      return
    }
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    this.ctx = new Ctx()
    this.master = this.ctx.createGain()
    this.music = this.ctx.createGain()
    this.sfxBus = this.ctx.createGain()
    this.music.connect(this.master)
    this.sfxBus.connect(this.master)
    this.master.connect(this.ctx.destination)
    this.applyVolumes()
    this.started = true
  }

  applyVolumes() {
    if (!this.ctx) return
    const now = this.ctx.currentTime
    this.master.gain.setTargetAtTime(this.vol.master, now, 0.05)
    this.music.gain.setTargetAtTime(this.vol.music * 0.7, now, 0.05)
    this.sfxBus.gain.setTargetAtTime(this.vol.sfx, now, 0.05)
  }

  setVolumes({ master, music, sfx } = {}) {
    if (master != null) this.vol.master = master
    if (music != null) this.vol.music = music
    if (sfx != null) this.vol.sfx = sfx
    this.applyVolumes()
  }

  setScene(scene) {
    this.ensure()
    if (!this.ctx) return
    if (this.scene === scene) return
    this.scene = scene
    this.step = 0
    this.nextTime = this.ctx.currentTime + 0.08
    if (this.timer) clearInterval(this.timer)
    if (!scene) return
    this.timer = setInterval(() => this.scheduler(), 25)
  }

  scheduler() {
    if (!this.ctx || !this.scene) return
    const bpm = this.scene === 'race' ? 136 : this.scene === 'results' ? 92 : 74
    const stepDur = 60 / bpm / 4
    while (this.nextTime < this.ctx.currentTime + 0.2) {
      this.playStep(this.step, this.nextTime, stepDur)
      this.step = (this.step + 1) % 64
      this.nextTime += stepDur
    }
  }

  playStep(step, t, sd) {
    const menu = this.scene === 'menu' || this.scene === 'results'
    const bar = Math.floor(step / 16)
    const s = step % 16
    const chordsMenu = [
      [50, 53, 57, 62], // Dm
      [46, 50, 53, 58], // Bb
      [43, 50, 55, 58], // Gm
      [45, 49, 52, 57] // A
    ]
    const chordsRace = [
      [38, 50, 53, 57],
      [36, 48, 52, 55],
      [34, 46, 50, 53],
      [33, 45, 49, 52]
    ]
    const chords = menu ? chordsMenu : chordsRace
    const chord = chords[bar % 4]

    if (menu) {
      // Low organ drone on bar start
      if (s === 0) {
        chord.slice(0, 3).forEach((n, i) => this.tone(NOTE(n), t, sd * 15, 0.055, 'sawtooth', { filter: 520 + i * 90, attack: 0.9, release: 1.8, detune: i * 3 }))
        this.tone(NOTE(chord[0] - 12), t, sd * 16, 0.07, 'sine', { attack: 0.5, release: 2 })
      }
      // Cello ostinato
      if (s % 2 === 0) {
        const pattern = [0, 0, 7, 0, 10, 7, 0, 5]
        const n = chord[0] - 12 + pattern[(s / 2) % 8]
        this.tone(NOTE(n), t, sd * 1.7, 0.085, 'sawtooth', { filter: 340, attack: 0.02, release: 0.25 })
      }
      // Timpani
      if (s === 0 || s === 6 || s === 10) this.kick(t, s === 0 ? 0.2 : 0.12, menu ? 82 : 100)
      // Bell / harpsichord dread
      if (s === 8 && bar % 2 === 0) this.tone(NOTE(chord[2] + 24), t, 1.8, 0.035, 'triangle', { attack: 0.005, release: 1.6 })
      if (s === 12 && bar === 3) this.tone(NOTE(chord[1] + 12), t, 1.2, 0.04, 'sawtooth', { filter: 1800, attack: 0.01, release: 1 })
    } else {
      // Race: driving strings, brass, industrial percussion
      if (s === 0) {
        this.tone(NOTE(chord[0] - 12), t, sd * 14, 0.1, 'sawtooth', { filter: 260, attack: 0.1, release: 0.6 })
      }
      const bassPattern = [0, 0, 12, 0, 7, 0, 10, 12]
      if (s % 2 === 0) {
        const n = chord[0] + bassPattern[(s / 2) % 8]
        this.tone(NOTE(n - 12), t, sd * 1.45, 0.105, 'square', { filter: 300, attack: 0.005, release: 0.16 })
      }
      // string stabs
      if (s === 0 || s === 6) {
        chord.slice(1).forEach(n => this.tone(NOTE(n + 12), t, sd * 2.2, 0.034, 'sawtooth', { filter: 2100, attack: 0.01, release: 0.25, detune: 4 }))
      }
      // brass alarm
      if (s === 12 && bar % 2 === 1) {
        this.tone(NOTE(chord[2] + 12), t, sd * 2, 0.045, 'square', { filter: 1200, attack: 0.01, release: 0.4 })
        this.tone(NOTE(chord[3] + 12), t + sd * 0.5, sd * 1.6, 0.04, 'square', { filter: 1200, attack: 0.01, release: 0.4 })
      }
      if (s === 0 || s === 4 || s === 8 || s === 12) this.kick(t, s === 0 ? 0.22 : 0.15, 96)
      if (s === 2 || s === 10) this.snare(t, 0.1)
      if (s % 2 === 1) this.hat(t, 0.025)
    }
  }

  tone(freq, t, dur, gain, type = 'sine', opts = {}) {
    if (!this.ctx) return
    const o = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    const f = this.ctx.createBiquadFilter()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    if (opts.detune) o.detune.setValueAtTime(opts.detune, t)
    f.type = 'lowpass'
    f.frequency.setValueAtTime(opts.filter || 1600, t)
    f.Q.value = opts.q || 0.7
    const a = opts.attack ?? 0.02
    const r = opts.release ?? 0.3
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + a)
    g.gain.setTargetAtTime(0.0001, t + Math.max(a, dur - r), Math.max(0.02, r / 3))
    o.connect(f); f.connect(g); g.connect(this.music)
    o.start(t)
    o.stop(t + dur + 0.1)
  }

  kick(t, gain = 0.2, startFreq = 100) {
    if (!this.ctx) return
    const o = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    o.type = 'sine'
    o.frequency.setValueAtTime(startFreq, t)
    o.frequency.exponentialRampToValueAtTime(32, t + 0.22)
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32)
    o.connect(g); g.connect(this.music)
    o.start(t); o.stop(t + 0.34)
  }

  snare(t, gain = 0.1) {
    if (!this.ctx) return
    const len = 0.16
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * len, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length)
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    const f = this.ctx.createBiquadFilter()
    f.type = 'bandpass'; f.frequency.value = 1700; f.Q.value = 0.8
    const g = this.ctx.createGain(); g.gain.value = gain
    src.connect(f); f.connect(g); g.connect(this.music)
    src.start(t)
  }

  hat(t, gain = 0.03) {
    if (!this.ctx) return
    const len = 0.045
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * len, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2)
    const src = this.ctx.createBufferSource(); src.buffer = buf
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 6500
    const g = this.ctx.createGain(); g.gain.value = gain
    src.connect(f); f.connect(g); g.connect(this.music)
    src.start(t)
  }

  sfx(name, extra = {}) {
    this.ensure()
    if (!this.ctx || this.vol.sfx <= 0.001) return
    const t = this.ctx.currentTime
    const g = this.sfxBus
    if (name === 'click') {
      this.blip(t, 420, 0.06, 0.08, 'square')
    } else if (name === 'back') {
      this.blip(t, 240, 0.09, 0.07, 'square')
    } else if (name === 'count') {
      this.blip(t, 320, 0.18, 0.16, 'square', 600)
    } else if (name === 'go') {
      this.blip(t, 620, 0.45, 0.2, 'sawtooth', 1240)
      this.kickSfx(t, 0.2, 90)
    } else if (name === 'boost') {
      this.whoosh(t, 0.45, 0.16, 280, 1800)
    } else if (name === 'hit') {
      this.noiseSfx(t, 0.12, 0.16, 420)
      this.blip(t, 90, 0.16, 0.1, 'square', 40)
    } else if (name === 'scrape') {
      this.noiseSfx(t, 0.08, 0.06, 2600)
    } else if (name === 'lightning') {
      this.noiseSfx(t, 0.7, 0.3, 900)
      this.kickSfx(t, 0.15, 70)
    } else if (name === 'win') {
      [58, 62, 65, 70, 74].forEach((n, i) => this.musicBlip(t + i * 0.09, NOTE(n), 0.5, 0.09, 'sawtooth'))
    } else if (name === 'lose') {
      [58, 55, 51, 46].forEach((n, i) => this.musicBlip(t + i * 0.14, NOTE(n), 0.7, 0.09, 'sawtooth'))
    } else if (name === 'reward') {
      [70, 74, 77, 82].forEach((n, i) => this.blip(t + i * 0.07, NOTE(n), 0.35, 0.08, 'triangle'))
    } else if (name === 'siren') {
      this.siren(t)
    } else if (name === 'thunder') {
      this.noiseSfx(t, 1.2, 0.22, 320)
    } else if (name === 'ui_open') {
      this.blip(t, 180, 0.2, 0.08, 'sawtooth', 380)
    }
  }

  blip(t, freq, dur, gain, type = 'square', targetFreq = null) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain()
    o.type = type; o.frequency.setValueAtTime(freq, t)
    if (targetFreq) o.frequency.exponentialRampToValueAtTime(targetFreq, t + dur)
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + dur + 0.02)
  }

  blip2(t, f1, f2, dur, gain, type = 'square') {
    this.blip(t, f1, dur, gain, type, f2)
  }

  kickSfx(t, gain, freq) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain()
    o.type = 'sine'; o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.28)
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + 0.32)
  }

  noiseSfx(t, dur, gain, freq) {
    const len = dur
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * len, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 1.4)
    const src = this.ctx.createBufferSource(); src.buffer = buf
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq
    const g = this.ctx.createGain(); g.gain.value = gain
    src.connect(f); f.connect(g); g.connect(this.sfxBus); src.start(t)
  }

  whoosh(t, dur, gain, f1, f2) {
    const len = dur
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * len, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin((i / d.length) * Math.PI)
    const src = this.ctx.createBufferSource(); src.buffer = buf
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.2
    f.frequency.setValueAtTime(f1, t); f.frequency.exponentialRampToValueAtTime(f2, t + dur)
    const g = this.ctx.createGain(); g.gain.value = gain
    src.connect(f); f.connect(g); g.connect(this.sfxBus); src.start(t)
  }

  siren(t) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain()
    o.type = 'sawtooth'; o.frequency.setValueAtTime(580, t)
    o.frequency.linearRampToValueAtTime(940, t + 0.35)
    o.frequency.linearRampToValueAtTime(580, t + 0.7)
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.08, t + 0.05)
    g.gain.linearRampToValueAtTime(0.0001, t + 0.75)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + 0.8)
  }

  musicBlip(t, freq, dur, gain, type) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain()
    o.type = type; o.frequency.setValueAtTime(freq, t)
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(gain, t + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g); g.connect(this.music); o.start(t); o.stop(t + dur + 0.02)
  }

  startEngine() {
    this.ensure()
    if (!this.ctx || this.engine) return
    const o1 = this.ctx.createOscillator()
    const o2 = this.ctx.createOscillator()
    const f = this.ctx.createBiquadFilter()
    const g = this.ctx.createGain()
    o1.type = 'sawtooth'; o2.type = 'square'
    o1.frequency.value = 45; o2.frequency.value = 90
    f.type = 'lowpass'; f.frequency.value = 420; f.Q.value = 1.4
    g.gain.value = 0.0001
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfxBus)
    o1.start(); o2.start()
    g.gain.setTargetAtTime(0.045, this.ctx.currentTime, 0.5)
    this.engine = { o1, o2, f, g }
  }

  updateEngine(speed, throttle = 0, boost = false) {
    if (!this.engine || !this.ctx) return
    const t = this.ctx.currentTime
    const v = Math.min(1, speed / 60)
    this.engine.o1.frequency.setTargetAtTime(42 + v * 150 + (boost ? 60 : 0), t, 0.06)
    this.engine.o2.frequency.setTargetAtTime(84 + v * 290 + (boost ? 110 : 0), t, 0.06)
    this.engine.f.frequency.setTargetAtTime(300 + v * 1200 + throttle * 240, t, 0.1)
    this.engine.g.gain.setTargetAtTime(0.028 + v * 0.035 + (boost ? 0.02 : 0), t, 0.08)
  }

  stopEngine() {
    if (!this.engine || !this.ctx) return
    const e = this.engine
    e.g.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.15)
    setTimeout(() => {
      try { e.o1.stop(); e.o2.stop() } catch {}
    }, 500)
    this.engine = null
  }

  stopAll() {
    if (this.timer) clearInterval(this.timer)
    this.timer = null
    this.scene = null
    this.stopEngine()
  }
}

export const audio = new AudioEngine()
