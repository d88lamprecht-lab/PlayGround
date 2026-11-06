import * as THREE from 'three'
import { Track, N_SAMPLES } from './track.js'
import { buildCar, spinWheels } from './car.js'
import { BOSSES, ORIGINS, TERRAINS, VEHICLES, WEATHERS } from './data.js'
import { audio } from './audio.js'
import { formatTime } from './storage.js'

const RIVALS = [
  { name: 'Marrow', origin: 'ghoul', vehicle: 'rust_reaper', color: '#4e4b3f', accent: '#b6a25a', story: 'A graveyard mechanic who learned to race by dragging engines out of the dead. Marrow keeps a tally of every rival he has buried and swears your name will be the last mark.' },
  { name: 'Vex', origin: 'mutant', vehicle: 'acid_runner', color: '#43552b', accent: '#b6ff37', story: 'Vex grew up in the refinery runoff, where a quick turn meant the difference between a clean lung and a melted one. Every race is a test of how much poison a body can turn into speed.' },
  { name: 'Sister Ash', origin: 'ghost', vehicle: 'hearse_taxi', color: '#2a3138', accent: '#9fc4d6', story: 'Once a funeral driver for the last towns with lights, Sister Ash now carries the names of the lost across the circuit. She races so the dead are remembered before the living forget.' },
  { name: 'Grimm', origin: 'demon', vehicle: 'midnight_coffin', color: '#251314', accent: '#ff3b30', story: 'Grimm made a pact with the night and paid for it in daylight. He appears wherever the road runs black, collecting wagers, secrets, and the occasional soul.' },
  { name: 'Halo', origin: 'demigod', vehicle: 'valkyrie', color: '#b8b2a2', accent: '#ffcf6a', story: 'A fallen sky-knight who abandoned the throne roads after seeing what the Queen did to the ground below. Halo still fights by a code, though the wasteland keeps trying to break it.' },
  { name: 'Cinder', origin: 'human', vehicle: 'dune_worm', color: '#7e4d2d', accent: '#ff8a3d', story: 'Cinder was a courier between the desert settlements, threading storms with medicine strapped to the chassis. When the routes became battle lines, she kept driving—and learned to deliver a warning at full throttle.' },
  { name: 'Pale Kid', origin: 'ghost', vehicle: 'bubble_bumper', color: '#5d4a66', accent: '#b6ffcf', story: 'No one knows where the Pale Kid came from, only that the little car appears at midnight and vanishes before dawn. The Kid treats every race as a game, and every finish as a promise to come back.' },
  { name: 'Brick', origin: 'mutant', vehicle: 'wool_reaper', color: '#7b745f', accent: '#8f171b', story: 'Brick is the last bouncer from the old arena circuit, a wall of muscle with a soft spot for battered machines. He believes a car—and a person—deserves one more chance after the first wreck.' }
]

const GANG_PURSUERS = [
  { name: 'Bone Fang', story: 'The gang’s tracker, Bone Fang marks escape routes with teeth wired to the guardrails.' },
  { name: 'Rust Maw', story: 'Rust Maw strips abandoned cars for armor and wears every stolen plate like a trophy.' },
  { name: 'Grave Crawler', story: 'A tunnel runner who knows the old drainage maps better than the roads above.' },
  { name: 'Dust Throat', story: 'Dust Throat rides point through the storms, calling targets by the sound of their engines.' }
].map((driver, i) => ({ ...driver, origin: 'demon', vehicle: 'rust_reaper', color: ['#583427', '#3e3228', '#2a2722', '#4b3b2b'][i], accent: '#c35b2c', pursuit: true }))

const POLICE_PURSUERS = [
  { name: 'Unit 13', story: 'Unit 13 is a silent patrol car whose driver still follows the evacuation orders issued before the world ended.' },
  { name: 'Unit 09', story: 'Unit 09 was rebuilt from a checkpoint interceptor and sent back onto the road with its original arrest list intact.' },
  { name: 'Precinct 77', story: 'Precinct 77 is the last mobile command unit of a dead jurisdiction, enforcing laws no town remembers.' }
].map((driver, i) => ({ ...driver, origin: 'ghost', vehicle: 'midnight_coffin', color: '#111820', accent: i % 2 ? '#ff3b30' : '#3f8cff', pursuit: true }))

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t
const damageColor = v => `hsl(${Math.round(Math.max(0, 120 - clamp(v, 0, 100) * 1.6))} 85% ${Math.round(50 - clamp(v, 0, 100) * 0.1)}%)`
const angDiff = (a, b) => {
  let d = a - b
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return d
}

const VEHICLE_MAP = Object.fromEntries(VEHICLES.map(v => [v.id, v]))
const NPC_VEHICLES = ['rust_reaper', 'acid_runner', 'dune_worm', 'hearse_taxi', 'foxfire', 'bubble_bumper', 'midnight_coffin', 'boost_hog']

export class RaceGame {
  constructor(canvas, options) {
    this.canvas = canvas
    this.opts = options
    this.settings = options.settings || {}
    this.profile = options.profile
    this.terrain = TERRAINS.find(t => t.id === options.terrain) || TERRAINS[0]
    this.weather = WEATHERS.find(w => w.id === options.weather) || WEATHERS[0]
    this.mode = options.mode || 'race'
    this.laps = options.laps || 2
    this.difficulty = options.difficulty || { id: 'normal', ai: 0.94 }
    this.boss = options.bossId ? BOSSES.find(b => b.id === options.bossId) : null
    this.vehicle = VEHICLE_MAP[options.vehicleId] || VEHICLES[0]
    this.origin = ORIGINS.find(o => o.id === this.profile?.origin) || ORIGINS[0]
    this.paused = false
    this.finished = false
    this.finishing = 0
    this.clock = new THREE.Clock()
    this.elapsed = 0
    this.t = 0
    this.hudTimer = 0
    this.mapTimer = 0
    this.shake = 0
    this.steerSmooth = 0
    this.input = { left: false, right: false, accel: false, brake: false, handbrake: false, nitro: false, special: false }
    this.specialCharge = 100
    this.specialActive = 0
    this.specialLatch = false
    this.specialColor = this.origin.id === 'demon' ? '#ff3b30' : this.origin.id === 'ghost' ? '#8be7ff' : this.origin.id === 'mutant' ? '#8cff3b' : this.origin.id === 'ghoul' ? '#c9d36a' : this.origin.id === 'demigod' ? '#ffd166' : '#ff9a3d'
    this.specialName = {
      human: 'ADRENALINE', mutant: 'TOXIC RAM', ghost: 'PHASE', ghoul: 'FEAST', demon: 'HELLFIRE', demigod: 'THUNDERCLAP'
    }[this.origin.id] || 'SPECIAL'
    this.tutorial = this.mode === 'tutorial' ? {
      step: 0, progress: 0, throttleTime: 0, steerTime: 0, brakeTime: 0, nitroUses: 0, shown: false
    } : null
    this.raceTime = 0
    this.lapStart = 0
    this.bestLap = null
    this.nitro = 100
    this.boostTime = 0
    this.hull = 100
    this.zoneDamage = { front: 0, left: 0, right: 0, rear: 0 }
    this.respawnInvuln = 0
    this.respawns = 0
    this.lastCheckpoint = { index: 18, lap: 1 }
    this.cargo = 100
    this.comfort = 100
    this.escapeLeft = options.escapeTime || 60
    this.gore = this.settings.gore || 'blood'
    this.impact = []
    this.collisionCooldown = 0
    this.wallCooldown = 0
    this.lastStrike = null
    this.firstStepTime = 0
    this.state = 'countdown'
    this.countdown = 4.2
    this.hudWarningCd = 0
    this.warnHold = 0
    this.position = 1
    this.finishOrder = 0
    this.onFinish = options.onFinish || (() => {})
    this.onPause = options.onPause || (() => {})
    this.onQuit = options.onQuit || (() => {})
    this.initRenderer()
    this.initScene()
    this.buildHUD()
    this.bind()
    this.audioStarted = false
    this.loop = this.loop.bind(this)
    this.resize = this.resize.bind(this)
    window.addEventListener('resize', this.resize)
    document.addEventListener('visibilitychange', this.onVisibility)
    this.raf = requestAnimationFrame(this.loop)
  }

  initRenderer() {
    this.renderer = this.canvas._hellrideRenderer
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: this.settings.quality !== 'low', powerPreference: 'high-performance' })
      this.renderer.outputColorSpace = THREE.SRGBColorSpace
      this.canvas._hellrideRenderer = this.renderer
    }
    const q = this.settings.quality || 'medium'
    this.renderer.setPixelRatio(q === 'low' ? 1 : q === 'high' ? Math.min(2, window.devicePixelRatio || 1) : Math.min(1.5, window.devicePixelRatio || 1))
    this.renderer.setSize(window.innerWidth, window.innerHeight, false)
    this.renderer.setClearColor(0x0b0b0d, 1)
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.3, 500)
    this.track = new Track({ terrain: this.terrain.id, weather: this.weather.id, seed: this.opts.seed || Math.floor(Math.random() * 9999), quality: this.settings.quality })
    this.track.applyToScene(this.scene)
    this.racers = []
    this.player = this.makePlayer()
    this.lastCheckpoint = { index: this.player.index, lap: 1 }
    this.buildOpponents()
    this.updatePositions()
    this.light = new THREE.AmbientLight(0xffffff, 0.05)
    this.scene.add(this.light)
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(2.5, 3.1, 40),
      new THREE.MeshBasicMaterial({ color: this.specialColor, transparent: true, opacity: 0.75, depthWrite: false, side: THREE.DoubleSide })
    )
    ring.rotation.x = -Math.PI / 2
    ring.position.y = 0.12
    ring.visible = false
    this.player.car.add(ring)
    this.specialRing = ring
    this.camera.position.set(this.player.pos.x, this.player.pos.y + 4, this.player.pos.z - 10)
    this.camera.lookAt(this.player.pos)
    this.flashEl = null
  }

  makePlayer() {
    const pose = this.track.startPose(0)
    const car = buildCar(this.vehicle)
    car.position.copy(pose.pos)
    car.rotation.y = pose.yaw
    car.traverse(o => { if (o.isMesh) o.frustumCulled = true })
    this.scene.add(car)
    const mod = this.origin.mod || {}
    const stats = {
      maxSpeed: (26 + this.vehicle.speed * 0.3) * (mod.speed || 1) * this.weather.grip ** 0.1,
      accel: (7.5 + this.vehicle.accel * 0.16) * (mod.accel || 1),
      grip: (0.62 + this.vehicle.grip * 0.006) * (mod.grip || 1) * this.terrain.grip * this.weather.grip,
      armor: this.vehicle.armor * (mod.armor || 1),
      boost: this.vehicle.boost
    }
    return {
      id: 'player', name: this.profile?.name || 'YOU', isPlayer: true,
      car, pos: pose.pos.clone(), yaw: pose.yaw, speed: 0, maxSpeed: stats.maxSpeed,
      stats, index: pose.index, prevIndex: pose.index, lap: 1, lateral: pose.lateral,
      finished: false, finishOrder: null, finishTime: null, lastLapAt: 0, lapTimes: [],
      collCount: 0, offset: 0, damage: 0, _v: new THREE.Vector3()
    }
  }

  buildOpponents() {
    const isEscape = this.mode === 'gang' || this.mode === 'police'
    let defs = []
    if (isEscape) {
      defs = [...(this.mode === 'police' ? POLICE_PURSUERS : GANG_PURSUERS)]
    } else if (this.mode === 'pvp') {
      const r = RIVALS[Math.floor(Math.random() * RIVALS.length)]
      defs.push({ ...r, name: 'RIVAL · ' + r.name })
    } else if (this.boss) {
      defs.push({
        name: this.boss.name, boss: true, origin: this.boss.portrait.origin,
        vehicle: this.boss.vehicle, color: VEHICLE_MAP[this.boss.vehicle]?.color,
        accent: VEHICLE_MAP[this.boss.vehicle]?.accent, skill: 1.02
      })
      const pool = RIVALS.filter(r => r.name !== 'Marrow')
      for (let i = 0; i < 4; i++) defs.push({ ...pool[(i + this.boss.order) % pool.length], name: pool[(i + this.boss.order) % pool.length].name })
    } else {
      const count = this.mode === 'tutorial' ? 3 : 5
      const shuffled = [...RIVALS].sort(() => Math.random() - 0.5)
      for (let i = 0; i < count; i++) defs.push(shuffled[i % shuffled.length])
    }

    defs.forEach((def, i) => {
      const v = VEHICLE_MAP[def.vehicle] || VEHICLE_MAP[NPC_VEHICLES[i % NPC_VEHICLES.length]]
      const car = buildCar({ ...v, color: def.color || v.color, accent: def.accent || v.accent }, { boss: def.boss })
      const pose = this.track.startPose(i + 1)
      car.position.copy(pose.pos)
      car.rotation.y = pose.yaw
      this.scene.add(car)
      const skill = def.skill || (0.9 + (i % 3) * 0.035)
      const stats = {
        maxSpeed: 26 + v.speed * 0.29,
        accel: 7 + v.accel * 0.13,
        grip: 0.6 + v.grip * 0.005
      }
      const racer = {
        id: 'ai_' + i, name: def.name, isPlayer: false, car, pos: pose.pos.clone(), yaw: pose.yaw,
        speed: 0, maxSpeed: stats.maxSpeed, stats, index: pose.index, prevIndex: pose.index,
        lap: 1, lateral: pose.lateral, lane: pose.lateral, finished: false, finishOrder: null,
        finishTime: null, skill, boss: !!def.boss, pursuit: !!def.pursuit, wobble: Math.random() * 8,
        carDef: def, colors: { accent: def.accent || v.accent, color: def.color || v.color }, lastCollision: 0
      }
      this.racers.push(racer)
    })
    this.racers.unshift(this.player)
  }

  buildHUD() {
    const hudHost = document.getElementById('race-ui')
    if (!hudHost) return
    const modeNames = {
      tutorial: 'TUTORIAL · FIRST BLOOD', race: 'SINGLE RACE', pvp: 'PVP DUEL', boss: 'BOSS CHALLENGE',
      transport: 'TRANSPORT', taxi: 'TAXI', gang: 'ESCAPE GANG', police: 'APOCALYPTIC POLICE',
      cup: 'CUP CHAMPIONSHIP', tournament: 'TOURNAMENT'
    }
    hudHost.innerHTML = `
      <div class="race-hud" id="raceHud">
        <div class="rh-top">
          <div class="rh-block rh-pos"><span>POSITION</span><b id="hudPos">6/6</b></div>
          <div class="rh-block"><span>LAP</span><b id="hudLap">1/${this.laps}</b></div>
          <div class="rh-block"><span>TIME</span><b id="hudTime">00:00.00</b></div>
          <div class="rh-mode">
            <div class="rh-mode-name">${modeNames[this.mode] || 'RACE'}</div>
            <div class="rh-weather"><i>${this.weather.icon}</i> ${this.weather.name.toUpperCase()} <em>WIND ${this.weather.wind.toFixed(1)}</em></div>
          </div>
          <button class="rh-pause" id="racePause" aria-label="Pause">❚❚</button>
        </div>
        <div class="rh-objective" id="hudObjective">
          <div class="rh-obj-label" id="hudObjLabel">OBJECTIVE</div>
          <div class="rh-obj-main" id="hudObjMain">${this.mode === 'taxi' ? 'Passenger comfort' : this.mode === 'transport' ? 'Cargo integrity' : this.mode === 'gang' || this.mode === 'police' ? 'Survive the pursuit' : 'Win the race'}</div>
          <div class="rh-bar"><i id="hudObjBar"></i></div>
          <div class="rh-obj-sub" id="hudObjSub"></div>
        </div>
        <div class="rh-damage" id="hudDamage">
          <div class="rh-dmg-head"><span>VEHICLE DAMAGE</span><b id="hudDmgPct">0%</b></div>
          <div class="rh-dmg-car">
            <span class="rh-dmg-part front" id="dmgFront"><em>FRONT</em></span>
            <span class="rh-dmg-part left" id="dmgLeft"><em>L</em></span>
            <span class="rh-dmg-core"></span>
            <span class="rh-dmg-part right" id="dmgRight"><em>R</em></span>
            <span class="rh-dmg-part rear" id="dmgRear"><em>REAR</em></span>
          </div>
          <div class="rh-dmg-legend"><span>GOOD</span><i></i><span>BAD</span></div>
        </div>
        <div class="rh-minimap-wrap"><canvas id="hudMinimap" width="300" height="300"></canvas><div class="rh-map-label">${this.terrain.short}</div></div>
        <div class="rh-speedo">
          <div class="rh-speed-num"><b id="hudSpeed">0</b><span>KM/H</span></div>
          <div class="rh-nitro" id="hudNitroWrap"><span>NITRO</span><div class="rh-nitro-track"><i id="hudNitro"></i></div></div>
          <div class="rh-hull"><span>HULL</span><div class="rh-hull-track"><i id="hudHull"></i></div></div>
          <div class="rh-special" id="hudSpecialWrap"><span id="hudSpecialLabel">${this.specialName}</span><div class="rh-special-track"><i id="hudSpecial"></i></div></div>
        </div>
        <div class="rh-touch" id="touchControls">
          <div class="rh-steer">
            <button data-key="left" aria-label="Turn left"><b>◀</b><span>TURN</span></button>
            <button data-key="right" aria-label="Turn right"><b>▶</b><span>TURN</span></button>
          </div>
          <div class="rh-pedals">
            <div class="rh-pedal-row">
              <button data-key="nitro" class="rh-nitro-btn" aria-label="Nitro"><b>N₂O</b><span>NITRO</span></button>
              <button data-key="special" class="rh-special-btn" aria-label="Special move"><b>✦</b><span>${this.specialName}</span></button>
            </div>
            <div class="rh-pedal-row">
              <button data-key="brake" class="rh-brake" aria-label="Stop or reverse"><b>▼</b><span>STOP / REV</span></button>
              <button data-key="handbrake" class="rh-handbrake" aria-label="Handbrake"><b>HB</b><span>DRIFT</span></button>
              <button data-key="accel" class="rh-accel" aria-label="Accelerate"><b>▲</b><span>ACCEL</span></button>
            </div>
          </div>
        </div>
        <div class="rh-warning" id="hudWarning"></div>
        <div class="rh-toast" id="hudToast"></div>
        <div class="rh-count" id="hudCount"></div>
        <div class="rh-tutorial" id="hudTutorial"></div>
        <div class="rh-flash" id="hudFlash"></div>
        <div class="rh-tut-banner" id="hudTutBanner">${this.tutorial ? '<b>WAKE UP, DRIVER.</b><span>Grip the wheel. The wasteland does not forgive.</span>' : ''}</div>
      </div>
    `
    this.el = {
      pos: document.getElementById('hudPos'), lap: document.getElementById('hudLap'), time: document.getElementById('hudTime'),
      objBar: document.getElementById('hudObjBar'), objLabel: document.getElementById('hudObjLabel'), objMain: document.getElementById('hudObjMain'), objSub: document.getElementById('hudObjSub'),
      speed: document.getElementById('hudSpeed'), nitro: document.getElementById('hudNitro'), hull: document.getElementById('hudHull'),
      special: document.getElementById('hudSpecial'), specialLabel: document.getElementById('hudSpecialLabel'), specialWrap: document.getElementById('hudSpecialWrap'),
      count: document.getElementById('hudCount'), tutorial: document.getElementById('hudTutorial'), warning: document.getElementById('hudWarning'),
      toast: document.getElementById('hudToast'), flash: document.getElementById('hudFlash'), minimap: document.getElementById('hudMinimap'),
      dmgPct: document.getElementById('hudDmgPct'), dmgFront: document.getElementById('dmgFront'),
      dmgLeft: document.getElementById('dmgLeft'), dmgRight: document.getElementById('dmgRight'), dmgRear: document.getElementById('dmgRear'),
      tutBanner: document.getElementById('hudTutBanner')
    }
    this.mapCtx = this.el.minimap.getContext('2d')
    this.mapBounds = this.track.samples.reduce((b, s) => {
      b.minX = Math.min(b.minX, s.p.x); b.maxX = Math.max(b.maxX, s.p.x)
      b.minZ = Math.min(b.minZ, s.p.z); b.maxZ = Math.max(b.maxZ, s.p.z)
      return b
    }, { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity })
    document.getElementById('racePause').addEventListener('click', () => { audio.sfx('click'); this.requestPause() })
    hudHost.querySelectorAll('#touchControls button').forEach(btn => {
      const key = btn.dataset.key
      const down = e => { e.preventDefault(); this.input[key] = true; btn.classList.add('active'); audio.ensure() }
      const up = e => { e.preventDefault(); this.input[key] = false; btn.classList.remove('active') }
      btn.addEventListener('pointerdown', down)
      btn.addEventListener('pointerup', up)
      btn.addEventListener('pointercancel', up)
      btn.addEventListener('pointerleave', up)
      btn.addEventListener('contextmenu', e => e.preventDefault())
    })
  }

  bind() {
    this.keyHandler = e => {
      const k = e.key.toLowerCase()
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', ' ', 'shift'].includes(k)) e.preventDefault()
      if (k === 'a' || k === 'arrowleft') this.input.left = true
      if (k === 'd' || k === 'arrowright') this.input.right = true
      if (k === 'w' || k === 'arrowup') this.input.accel = true
      if (k === 's' || k === 'arrowdown') this.input.brake = true
      if (k === 'q') this.input.handbrake = true
      if (k === ' ' || k === 'shift') this.input.nitro = true
      if (k === 'f' || k === 'e') this.input.special = true
      if (k === 'escape' || k === 'p') this.requestPause()
      if (k === 'm') {
        audio.setVolumes({ master: audio.vol.master > 0 ? 0 : 0.8 })
        this.toast(audio.vol.master > 0 ? 'SOUND ON' : 'MUTED')
      }
    }
    this.keyUp = e => {
      const k = e.key.toLowerCase()
      if (k === 'a' || k === 'arrowleft') this.input.left = false
      if (k === 'd' || k === 'arrowright') this.input.right = false
      if (k === 'w' || k === 'arrowup') this.input.accel = false
      if (k === 's' || k === 'arrowdown') this.input.brake = false
      if (k === 'q') this.input.handbrake = false
      if (k === ' ' || k === 'shift') this.input.nitro = false
      if (k === 'f' || k === 'e') this.input.special = false
    }
    this.blur = () => { for (const k in this.input) this.input[k] = false }
    this.onVisibility = () => { if (document.hidden && this.state === 'racing') this.requestPause() }
    window.addEventListener('keydown', this.keyHandler)
    window.addEventListener('keyup', this.keyUp)
    window.addEventListener('blur', this.blur)
  }

  resize() {
    if (!this.renderer) return
    this.renderer.setSize(window.innerWidth, window.innerHeight, false)
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.fov = window.innerWidth / window.innerHeight < 0.85 ? 72 : 62
    this.camera.updateProjectionMatrix()
  }

  async startAudio() {
    if (this.audioStarted) return
    this.audioStarted = true
    audio.ensure()
    audio.setScene('race')
    audio.startEngine()
  }

  requestPause() {
    if (this.finished) return
    this.paused = !this.paused
    if (this.paused) {
      audio.stopEngine()
      this.onPause(true)
    } else {
      audio.startEngine()
      this.onPause(false)
      this.clock.getDelta()
    }
  }

  resume() {
    if (!this.paused) return
    this.paused = false
    audio.startEngine()
    this.onPause(false)
    this.clock.getDelta()
  }

  toast(text, ms = 1400) {
    if (!this.el?.toast) return
    this.el.toast.textContent = text
    this.el.toast.classList.add('show')
    clearTimeout(this._toastTimer)
    this._toastTimer = setTimeout(() => this.el?.toast.classList.remove('show'), ms)
  }

  loop() {
    if (this.disposed) return
    this.raf = requestAnimationFrame(this.loop)
    const dt = Math.min(0.045, this.clock.getDelta())
    if (!this.paused) this.update(dt)
    this.renderer.render(this.scene, this.camera)
  }

  update(dt) {
    this.t += dt
    if (this.state === 'countdown') {
      this.countdown -= dt
      this.updateCountdown()
      this.updateAI(dt, true)
      this.track.update(dt, this.player.pos)
      this.updateCamera(dt, true)
      this.updateHUD(dt)
      return
    }
    if (this.state !== 'racing' && this.state !== 'finished') return

    if (this.state === 'racing') {
      this.raceTime += dt
      if (this.mode === 'gang' || this.mode === 'police') {
        this.escapeLeft -= dt
        if (this.escapeLeft <= 0) {
          this.escapeLeft = 0
          this.finishRace('escaped')
        }
      }
    }

    if (this.state === 'racing') {
      this.updatePlayer(dt)
      this.updateAI(dt, false)
      this.handleWeather(dt)
      this.updatePositions()
      this.updateTutorial(dt)
    } else {
      this.player.speed = Math.max(0, this.player.speed - 12 * dt)
      this.player.pos.addScaledVector(new THREE.Vector3(Math.sin(this.player.yaw), 0, Math.cos(this.player.yaw)), this.player.speed * dt)
      this.updateAI(dt, false)
    }

    if (this.finishing > 0) {
      this.finishing -= dt
      if (this.finishing <= 0) this.deliverResults()
    }

    this.track.update(dt, this.player.pos)
    this.updateCamera(dt, false)
    this.updateImpactParticles(dt)
    this.updateHUD(dt)
  }

  updateCountdown() {
    const cd = this.countdown
    let text = ''
    if (cd > 3.2) text = 'READY'
    else if (cd > 2.2) text = '3'
    else if (cd > 1.2) text = '2'
    else if (cd > 0.2) text = '1'
    else text = 'GO'
    if (this.el?.count) {
      this.el.count.textContent = text
      this.el.count.className = 'rh-count show ' + (text === 'GO' ? 'go' : '')
    }
    const lit = Math.max(0, Math.min(3, Math.ceil((4.2 - cd) / 1.1)))
    this.track.startLights.forEach((l, i) => {
      const on = i < lit
      l.material.color.set(on ? (lit >= 3 ? '#7bff49' : '#ff2b1d') : '#3a1010')
    })
    if (this.countdown <= 0) {
      this.state = 'racing'
      if (this.el?.count) { this.el.count.textContent = 'GO'; this.el.count.className = 'rh-count show go' }
      setTimeout(() => { if (this.el?.count) this.el.count.className = 'rh-count' }, 650)
      if (this.el?.tutBanner) setTimeout(() => this.el.tutBanner.classList.add('hide'), 2500)
      audio.sfx('go')
      this.startAudio()
      this.lapStart = 0
      this.updateTutorialHUD()
    }
    if (Math.floor(cd * 2) !== Math.floor((cd + 0.016) * 2) && cd < 3.2 && cd > 0.2) audio.sfx('count')
  }

  statsForPlayer() {
    return this.player.stats
  }

  activateSpecial() {
    const p = this.player
    this.specialCharge = 0
    this.specialActive = 4.2
    this.specialLatch = true
    const origin = this.origin.id
    audio.sfx('boost')
    if (origin === 'human') {
      this.nitro = 100
      this.hull = Math.min(100, this.hull + 8)
    } else if (origin === 'ghoul') {
      this.hull = Math.min(100, this.hull + 30)
      this.nitro = Math.min(100, this.nitro + 40)
    } else if (origin === 'mutant') {
      for (const ai of this.racers) {
        if (ai.isPlayer) continue
        const d = Math.hypot(ai.pos.x - p.pos.x, ai.pos.z - p.pos.z)
        if (d < 18) {
          const nx = (ai.pos.x - p.pos.x) / (d || 1), nz = (ai.pos.z - p.pos.z) / (d || 1)
          ai.pos.x += nx * 5
          ai.pos.z += nz * 5
          ai.speed *= 0.62
        }
      }
      this.shake = Math.max(this.shake, 0.9)
      this.impactAt(p.pos, 2)
    } else if (origin === 'demon') {
      for (const ai of this.racers) {
        if (ai.isPlayer) continue
        const d = Math.hypot(ai.pos.x - p.pos.x, ai.pos.z - p.pos.z)
        if (d < 22) ai.speed *= 0.65
      }
      this.impactAt(p.pos, 1.4)
    } else if (origin === 'demigod') {
      for (const ai of this.racers) {
        if (ai.isPlayer) continue
        const d = Math.hypot(ai.pos.x - p.pos.x, ai.pos.z - p.pos.z)
        if (d < 50) ai.speed *= 0.72
      }
      this.track.triggerLightning(p.pos)
      this.flashScreen()
      audio.sfx('lightning')
    }
    this.toast(`${this.specialName} — ACTIVE`, 1500)
    if (this.specialRing) {
      this.specialRing.visible = true
      this.specialRing.material.color.set(this.specialColor)
    }
  }

  updatePlayer(dt) {
    const p = this.player
    const input = this.input
    const s = p.stats
    const speedAbs = Math.abs(p.speed)
    const speedRatio = clamp(speedAbs / p.maxSpeed, 0, 1.4)
    const grip = s.grip * (this.weather.id === 'flood' ? 0.82 : 1)
    let steerTarget = (input.left ? -1 : 0) + (input.right ? 1 : 0)
    this.steerSmooth = lerp(this.steerSmooth, steerTarget, 1 - Math.pow(0.001, dt))
    const steer = this.steerSmooth
    const handbrake = input.handbrake

    // special move charge / activation
    if (this.specialActive > 0) {
      this.specialActive = Math.max(0, this.specialActive - dt)
    } else if (this.specialCharge < 100) {
      this.specialCharge = Math.min(100, this.specialCharge + dt * (100 / 21))
    }
    if (input.special && !this.specialLatch && this.specialCharge >= 100) this.activateSpecial()
    this.specialLatch = input.special
    const specialOn = this.specialActive > 0

    const boostActive = input.nitro && this.nitro > 1 && p.speed > 4
    if (boostActive) {
      this.nitro = Math.max(0, this.nitro - dt * 28)
      this.boostTime = 0.18
      if (!this._boostSound || this.t - this._boostSound > 0.6) { audio.sfx('boost'); this._boostSound = this.t }
    } else {
      this.nitro = Math.min(100, this.nitro + dt * (3.4 + s.boost * 0.08))
      this.boostTime = Math.max(0, this.boostTime - dt)
    }
    const boosting = this.boostTime > 0
    const maxSpeed = p.maxSpeed * (boosting ? 1.34 : 1) * (specialOn ? 1.12 : 1) * (this.weather.id === 'flood' ? 0.88 : 1)
    if (input.accel) {
      p.speed += s.accel * (boosting ? 1.55 : 1) * (specialOn ? 1.16 : 1) * dt
      if (this.tutorial) this.tutorial.throttleTime += dt
    } else if (input.brake) {
      if (p.speed > 0.4) p.speed -= s.accel * 2.05 * dt
      else p.speed -= s.accel * 0.62 * dt
      if (this.tutorial) this.tutorial.brakeTime += dt
    } else {
      const dir = Math.sign(p.speed)
      p.speed -= dir * (1.6 + speedAbs * 0.11) * dt
      if (Math.abs(p.speed) < 0.25) p.speed = 0
    }
    if (handbrake) {
      const dir = Math.sign(p.speed)
      p.speed -= dir * s.accel * (p.speed > 0 ? 1.05 : 0.4) * dt
      this.shake = Math.max(this.shake, 0.12)
    }
    if (boosting) p.speed += s.accel * 0.55 * dt
    if (Math.abs(steer) > 0.4 && speedAbs > 3 && this.tutorial) this.tutorial.steerTime += dt
    if (p.speed > maxSpeed) p.speed = lerp(p.speed, maxSpeed, 1 - Math.pow(0.2, dt))
    p.speed = clamp(p.speed, -12, Math.max(maxSpeed, 1))

    let steerRate = (1.55 - speedRatio * 0.34) * grip * clamp(speedAbs / 6, 0, 1) * (speedAbs > 26 ? 1.08 : 1)
    if (handbrake) steerRate *= 1.62
    p.yaw += steer * steerRate * dt * (input.brake && p.speed > 0 ? 0.78 : 1)
    p.drifting = handbrake && speedAbs > 14

    // forward movement + crosswind
    const fwd = new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw))
    const near = this.track.nearest(p.pos, p.index, 36)
    const right = near.sample.right
    let wind = this.weather.wind
    if (this.weather.id === 'twister' && this.track.tornado) {
      const dx = p.pos.x - this.track.tornado.position.x, dz = p.pos.z - this.track.tornado.position.z
      const d = Math.hypot(dx, dz)
      if (d < 34) {
        const pull = (1 - d / 34) * 22
        p.pos.x += (dx / (d + 0.01)) * pull * dt
        p.pos.z += (dz / (d + 0.01)) * pull * dt
        wind += 2.5 * (1 - d / 34)
        this.shake = Math.max(this.shake, 0.4 * (1 - d / 34))
        if (this.t > (this._tornadoWarn || 0)) { this.warn('TWISTER PULL'); this._tornadoWarn = this.t + 4 }
      }
    }
    const windPush = wind * 0.85 * (0.35 + speedRatio)
    p.pos.x += (fwd.x * p.speed + right.x * windPush) * dt
    p.pos.z += (fwd.z * p.speed + right.z * windPush) * dt

    const nn = this.track.nearest(p.pos, p.index, 40)
    const half = this.track.width / 2
    const lat = nn.lateral
    const offroad = Math.abs(lat) > half + 0.5
    if (offroad) {
      p.speed -= p.speed * (this.weather.id === 'quicksand' ? 1.4 : 0.7) * dt
      this.shake = Math.max(this.shake, 0.16 * clamp(Math.abs(lat) / (half + 5), 0, 1))
      if (this.weather.id === 'quicksand' && Math.abs(lat) > half + 2) {
        p.speed = Math.max(0, p.speed - 12 * dt)
        if (this.t > (this._sandWarn || 0)) { this.warn('QUICKSAND — GET BACK ON THE ROAD'); this._sandWarn = this.t + 3 }
        if (this.cargo > 0) this.cargo = Math.max(0, this.cargo - dt * 4)
      }
    }
    // wall / boundary
    if (Math.abs(lat) > half + 3.4) {
      const sign = Math.sign(lat)
      p.pos.x -= right.x * sign * (Math.abs(lat) - half - 3.4)
      p.pos.z -= right.z * sign * (Math.abs(lat) - half - 3.4)
      p.speed *= 0.7
      this.lastCollisionAt = this.t
      if (this.wallCooldown <= 0) {
        this.impactAt(p.pos, 1)
        this.damagePlayer(4 + Math.abs(p.speed) * 0.18, lat > 0 ? 'right' : 'left')
        this.wallCooldown = 0.5
        this.shake = Math.max(this.shake, 0.6)
        audio.sfx('hit')
      }
    }
    this.wallCooldown = Math.max(0, this.wallCooldown - dt)
    this.collisionCooldown = Math.max(0, this.collisionCooldown - dt)
    this.respawnInvuln = Math.max(0, this.respawnInvuln - dt)
    this.warnHold = Math.max(0, this.warnHold - dt)

    // track height / slope
    const behind = this.track.sampleAt(nn.index - 3)
    const ahead = this.track.sampleAt(nn.index + 3)
    const pitch = -Math.atan2(ahead.p.y - behind.p.y, 10)
    const y = nn.sample.p.y + 0.02
    p.pos.y = y
    p.index = nn.index
    p.lateral = lat
    p.car.position.copy(p.pos)
    p.car.rotation.set(pitch, p.yaw, -steer * speedRatio * 0.07, 'YXZ')
    spinWheels(p.car, p.speed, dt)
    p.car.userData.tailMat?.color.set(input.brake || p.speed < 1 ? '#ff2b1d' : '#7a1714')

    // lap crossing
    if (p.prevIndex > N_SAMPLES * 0.72 && nn.index < N_SAMPLES * 0.28) {
      p.lap++
      const lapTime = this.raceTime - p.lastLapAt
      p.lastLapAt = this.raceTime
      p.lapTimes.push(lapTime)
      if (this.bestLap == null || lapTime < this.bestLap) this.bestLap = lapTime
      if (this.state === 'racing' && p.lap > this.laps && this.mode !== 'gang' && this.mode !== 'police') {
        this.finishRace('finished')
      }
      if (this.tutorial) this.toast(`LAP ${Math.min(p.lap, this.laps)} / ${this.laps} · ${formatTime(lapTime)}`, 1500)
      this.lastCheckpoint = { index: 0, lap: p.lap }
    } else if (p.prevIndex < N_SAMPLES * 0.28 && nn.index > N_SAMPLES * 0.72) {
      p.lap = Math.max(1, p.lap - 1)
    } else {
      // quarter-lap checkpoints: the car restarts here after being wrecked
      const cpStep = Math.floor(N_SAMPLES / 4)
      const cpIndex = Math.floor(nn.index / cpStep) * cpStep
      if (cpIndex > this.lastCheckpoint.index) this.lastCheckpoint = { index: cpIndex, lap: p.lap }
    }
    p.prevIndex = nn.index

    // offroad dust / skid effects
    if (offroad && p.speed > 12 && Math.random() < dt * 18) {
      this.spawnDust(p.pos, offroad)
    }

    // collisions with AI
    for (const ai of this.racers) {
      if (ai.isPlayer || ai.finished) continue
      const dx = p.pos.x - ai.pos.x, dz = p.pos.z - ai.pos.z
      const d = Math.hypot(dx, dz)
      if (d < 2.25 && this.collisionCooldown <= 0) {
        this.collisionCooldown = 0.4
        const nx = dx / (d || 1), nz = dz / (d || 1)
        p.pos.x += nx * (2.25 - d) * 0.6
        p.pos.z += nz * (2.25 - d) * 0.6
        ai.pos.x -= nx * 0.5
        ai.pos.z -= nz * 0.5
        p.speed *= 0.88
        ai.speed *= 0.9
        const relX = ai.pos.x - p.pos.x, relZ = ai.pos.z - p.pos.z
        const forwardDot = relX * Math.sin(p.yaw) + relZ * Math.cos(p.yaw)
        const rightDot = relX * Math.cos(p.yaw) - relZ * Math.sin(p.yaw)
        const hitZone = Math.abs(forwardDot) >= Math.abs(rightDot)
          ? (forwardDot > 0 ? 'front' : 'rear')
          : (rightDot > 0 ? 'right' : 'left')
        this.damagePlayer(3, hitZone)
        this.impactAt(p.pos, 0.7)
        this.shake = Math.max(this.shake, 0.35)
        audio.sfx('hit')
        if (this.cargo > 0) this.cargo = Math.max(0, this.cargo - 6)
        if (this.comfort > 0) this.comfort = Math.max(0, this.comfort - 10)
        if (ai.pursuit) this.damagePlayer(4, 'rear')
      }
    }

    // acid / rain damage slow
    if (this.weather.id === 'acid') {
      if (Math.random() < dt * 0.6) this.damagePlayer(0.6, Math.random() < 0.5 ? 'left' : 'right')
    }

    // Tutorial input observation
    if (this.tutorial && this.input.nitro && this.nitro < 99.8 && !this.tutorial._nitroFlag) {
      this.tutorial._nitroFlag = true; this.tutorial.nitroUses++
    }
    if (!this.input.nitro) this.tutorial && (this.tutorial._nitroFlag = false)

    if (this.specialRing) {
      this.specialRing.visible = this.specialActive > 0
      if (this.specialRing.visible) {
        this.specialRing.rotation.z += dt * 3.4
        const pulse = 1 + Math.sin(this.t * 8) * 0.12
        this.specialRing.scale.setScalar(pulse)
        this.specialRing.material.opacity = 0.55 + Math.sin(this.t * 10) * 0.2
      }
    }
    this.dustCd = Math.max(0, (this.dustCd || 0) - dt)
    audio.updateEngine(Math.abs(p.speed) / Math.max(1, p.maxSpeed), input.accel ? 1 : 0, boosting)
    this.shake = Math.max(0, this.shake - dt * 1.5)
  }

  updateAI(dt, countdown = false) {
    const player = this.player
    for (const ai of this.racers) {
      if (ai.isPlayer) continue
      if (ai.finished) {
        ai.speed = Math.max(0, ai.speed - 8 * dt)
      } else {
        const near = this.track.nearest(ai.pos, ai.index, 38)
        ai.index = near.index
        const look = 10 + Math.floor(ai.speed * 0.6)
        const curveAhead = this.track.sampleAt(near.index + 6)
        const targetSample = this.track.sampleAt(near.index + look)
        let target
        if (ai.pursuit && !countdown) {
          // chase the player directly, with a slight offset so they swarm
          const angle = ai.wobble + this.t * 0.5
          target = new THREE.Vector3(player.pos.x + Math.cos(angle) * 1.6, player.pos.y, player.pos.z + Math.sin(angle) * 1.6)
        } else {
          const wobble = Math.sin(this.t * 0.5 + ai.wobble) * 1.1
          target = this.track.worldAt(near.index + look, clamp(ai.lane + wobble, -this.track.width * 0.32, this.track.width * 0.32), 0.2)
        }
        const desiredYaw = Math.atan2(target.x - ai.pos.x, target.z - ai.pos.z)
        const diff = angDiff(desiredYaw, ai.yaw)
        const turn = (1.8 - clamp(ai.speed / ai.maxSpeed, 0, 1) * 0.35) * dt * (ai.pursuit ? 1.25 : 1)
        ai.yaw += clamp(diff, -turn, turn)

        // curvature slowdown
        const curveDiff = Math.abs(angDiff(Math.atan2(curveAhead.tan.x, curveAhead.tan.z), Math.atan2(near.sample.tan.x, near.sample.tan.z)))
        let curveFactor = 1 - clamp(curveDiff * 0.45, 0, 0.22)
        let rubber = 1
        const myTotal = ai.lap * N_SAMPLES + ai.index
        const pTotal = player.lap * N_SAMPLES + player.index
        const gap = myTotal - pTotal
        if (gap < -60) rubber = 1.075
        else if (gap > 70) rubber = 0.93
        if (this.mode === 'tutorial') rubber = 0.72
        const targetSpeed = ai.maxSpeed * ai.skill * this.difficulty.ai * curveFactor * rubber * (this.weather.id === 'flood' ? 0.9 : 1) * (countdown ? 0 : 1)
        if (ai.speed < targetSpeed) ai.speed += ai.stats.accel * dt * (ai.pursuit ? 1.18 : 1)
        else ai.speed = lerp(ai.speed, targetSpeed, 1 - Math.pow(0.5, dt))
        if (countdown) ai.speed = 0
        ai.speed = Math.max(0, ai.speed)
      }

      const fwd = new THREE.Vector3(Math.sin(ai.yaw), 0, Math.cos(ai.yaw))
      ai.pos.x += fwd.x * ai.speed * dt
      ai.pos.z += fwd.z * ai.speed * dt
      const near2 = this.track.nearest(ai.pos, ai.index, 42)
      const half = this.track.width / 2
      let lat = near2.lateral
      if (Math.abs(lat) > half + 2.2) {
        const sign = Math.sign(lat)
        ai.pos.x -= near2.sample.right.x * sign * (Math.abs(lat) - half - 2.2)
        ai.pos.z -= near2.sample.right.z * sign * (Math.abs(lat) - half - 2.2)
        ai.speed *= 0.94
      }
      ai.pos.y = near2.sample.p.y + 0.02
      ai.lateral = near2.lateral
      const behind = this.track.sampleAt(near2.index - 3)
      const ahead = this.track.sampleAt(near2.index + 3)
      const pitch = -Math.atan2(ahead.p.y - behind.p.y, 10)
      ai.car.position.copy(ai.pos)
      ai.car.rotation.set(pitch, ai.yaw, Math.sin(this.t * 3 + ai.wobble) * 0.012, 'YXZ')
      spinWheels(ai.car, ai.speed, dt)
      if (ai.prevIndex > N_SAMPLES * 0.72 && near2.index < N_SAMPLES * 0.28) {
        ai.lap++
        if (!ai.finished && ai.lap > this.laps && this.mode !== 'gang' && this.mode !== 'police') {
          ai.finished = true
          ai.finishOrder = ++this.finishOrder
          ai.finishTime = this.raceTime
        }
      } else if (ai.prevIndex < N_SAMPLES * 0.28 && near2.index > N_SAMPLES * 0.72) {
        ai.lap = Math.max(1, ai.lap - 1)
      }
      ai.prevIndex = near2.index
      ai.index = near2.index
    }
  }

  handleWeather(dt) {
    const p = this.player
    if (!this.track.lastStrike || this.track.lastStrike === this.lastStrike) return
    this.lastStrike = this.track.lastStrike
    const dx = p.pos.x - this.lastStrike.x, dz = p.pos.z - this.lastStrike.z
    if (Math.hypot(dx, dz) < 17) {
      this.damagePlayer(14, 'front')
      this.shake = Math.max(this.shake, 1)
      this.impactAt(p.pos, 1.4)
      this.flashScreen()
      this.warn('LIGHTNING STRIKE — HULL DAMAGED')
      audio.sfx('lightning')
      p.speed *= 0.6
    } else if (this.t > (this._lightWarn || 0)) {
      this.warn('LIGHTNING NEARBY')
      this._lightWarn = this.t + 6
    }
  }

  damagePlayer(amount, zone = null) {
    if (this.state !== 'racing' || this.respawnInvuln > 0) return
    if (this.specialActive > 0) {
      if (this.origin.id === 'ghost') return
      if (this.origin.id === 'mutant') amount *= 0.45
      else if (this.origin.id === 'demigod') amount *= 0.72
    }
    if (!zone) {
      const roll = Math.random()
      zone = roll < 0.4 ? 'front' : roll < 0.6 ? 'left' : roll < 0.8 ? 'right' : 'rear'
    }
    const panelFactor = zone === 'front' || zone === 'rear' ? 1.15 : 0.95
    this.zoneDamage[zone] = Math.min(100, this.zoneDamage[zone] + amount * panelFactor)
    this.hull = Math.max(0, this.hull - amount)
    if (this.hull <= 0) this.respawnAtCheckpoint()
  }

  respawnAtCheckpoint() {
    if (this.state !== 'racing') return
    const cp = this.lastCheckpoint || { index: 18, lap: 1 }
    const s = this.track.sampleAt(cp.index)
    const p = this.player
    p.pos.set(s.p.x, s.p.y + 0.02, s.p.z)
    p.yaw = Math.atan2(s.tan.x, s.tan.z)
    p.speed = 0
    p.index = cp.index
    p.prevIndex = cp.index
    p.lateral = 0
    p.car.position.copy(p.pos)
    p.car.rotation.set(0, p.yaw, 0, 'YXZ')
    this.lastCheckpoint = { index: cp.index, lap: cp.lap || p.lap }
    this.hull = 100
    this.zoneDamage = { front: 0, left: 0, right: 0, rear: 0 }
    this.respawnInvuln = 2.4
    this.respawns++
    this.shake = 0
    this.collisionCooldown = 1.2
    this.wallCooldown = 1.2
    this.camera.position.set(
      p.pos.x - Math.sin(p.yaw) * 10,
      p.pos.y + 6,
      p.pos.z - Math.cos(p.yaw) * 10
    )
    this.toast('WRECKED · RESTARTED AT CHECKPOINT', 2200)
    this.warn('CHECKPOINT RESTART · HULL RESTORED')
    if (this.el?.count) {
      this.el.count.textContent = 'CHECKPOINT'
      this.el.count.className = 'rh-count show go'
      clearTimeout(this._cpCountT)
      this._cpCountT = setTimeout(() => { if (this.el?.count) this.el.count.className = 'rh-count' }, 1100)
    }
    audio.sfx('hit')
    setTimeout(() => audio.sfx('go'), 180)
    this.updateHUD(0.1)
  }

  updatePositions() {
    const list = [...this.racers].sort((a, b) => {
      if (a.finished && b.finished) return a.finishOrder - b.finishOrder
      if (a.finished) return -1
      if (b.finished) return 1
      return (b.lap * N_SAMPLES + b.index) - (a.lap * N_SAMPLES + a.index)
    })
    this.standings = list
    this.position = list.findIndex(r => r.isPlayer) + 1
  }

  updateCamera(dt, countdown) {
    const p = this.player
    const speedRatio = clamp(p.speed / (p.maxSpeed || 40), 0, 1.3)
    const portrait = window.innerWidth / Math.max(1, window.innerHeight) < 0.85
    const back = (portrait ? 13.4 : 8.6) + speedRatio * (portrait ? 2.1 : 2.5)
    const desired = new THREE.Vector3(
      p.pos.x - Math.sin(p.yaw) * back,
      p.pos.y + (portrait ? 5.6 : 3.9) + speedRatio * 0.4,
      p.pos.z - Math.cos(p.yaw) * back
    )
    const k = 1 - Math.pow(0.0009, dt)
    this.camera.position.lerp(desired, k)
    if (this.shake > 0.01 && this.settings.cameraShake !== false) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.45
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.3
    }
    const lookAt = new THREE.Vector3(
      p.pos.x + Math.sin(p.yaw) * (portrait ? 6 : 7),
      p.pos.y + (portrait ? 2.1 : 1.5),
      p.pos.z + Math.cos(p.yaw) * (portrait ? 6 : 7)
    )
    this.camera.lookAt(lookAt)
    const targetFov = (portrait ? 70 : 62) + speedRatio * 7 + (this.boostTime > 0 ? 4 : 0)
    this.camera.fov = lerp(this.camera.fov, targetFov, 1 - Math.pow(0.02, dt))
    this.camera.updateProjectionMatrix()
    if (this.track.tornado) this.track.tornado.rotation.y += dt * 0.2
  }

  updateTutorial(dt) {
    if (!this.tutorial || this.state !== 'racing') return
    const t = this.tutorial
    if (t.step === 0 && t.throttleTime > 0.8) this.completeTutorialStep('THROTTLE')
    else if (t.step === 1 && t.steerTime > 0.65) this.completeTutorialStep('STEERING')
    else if (t.step === 2 && t.nitroUses > 0) this.completeTutorialStep('NITRO')
    else if (t.step === 3 && t.brakeTime > 0.45) this.completeTutorialStep('BRAKING')
    this.updateTutorialHUD()
  }

  completeTutorialStep(label) {
    if (!this.tutorial) return
    audio.sfx('reward')
    this.toast(`${label} — LEARNED`, 1300)
    this.tutorial.step++
    if (this.tutorial.step > 4) this.tutorial.step = 4
    this.updateTutorialHUD()
  }

  updateTutorialHUD() {
    if (!this.tutorial || !this.el?.tutorial) return
    const steps = [
      ['ACCELERATE', 'Hold <kbd>W</kbd> / <kbd>↑</kbd> or the ACCEL pedal. Speed is survival.'],
      ['TURN', 'Use <kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd> or the left-side TURN pedals.'],
      ['NITRO', 'Tap <kbd>SPACE</kbd> or N₂O. The blue meter refills over time.'],
      ['STOP / REVERSE', 'Hold <kbd>S</kbd> / <kbd>↓</kbd> to stop, then reverse. <kbd>Q</kbd> is the HANDBRAKE.'],
      ['SPECIAL', 'Tap <kbd>F</kbd> / ✦ when charged. Then finish the lap and survive the weather.']
    ]
    const [title, text] = steps[Math.min(4, this.tutorial.step)]
    this.el.tutorial.innerHTML = `<div class="tut-kicker">TUTORIAL · ${Math.min(5, this.tutorial.step + 1)}/5</div><b>${title}</b><p>${text}</p>`
    this.el.tutorial.classList.add('show')
  }

  updateHUD(dt) {
    if (!this.el) return
    this.hudTimer += dt
    if (this.hudTimer > 0.06) {
      this.hudTimer = 0
      const p = this.player
      this.el.pos.textContent = `${this.position}/${this.racers.length}`
      const lapShow = this.mode === 'gang' || this.mode === 'police' ? '—' : `${Math.min(p.lap, this.laps)}/${this.laps}`
      this.el.lap.textContent = lapShow
      this.el.time.textContent = formatTime(this.raceTime)
      this.el.speed.textContent = Math.round(Math.abs(p.speed) * 3.4)
      this.el.nitro.style.width = this.nitro + '%'
      this.el.hull.style.width = this.hull + '%'
      if (this.specialActive > 0) {
        this.el.special.style.width = '100%'
        this.el.specialLabel.textContent = this.specialName + ' ACTIVE'
        this.el.specialWrap.classList.add('active')
        this.el.specialWrap.classList.remove('ready')
      } else {
        this.el.special.style.width = this.specialCharge + '%'
        this.el.specialLabel.textContent = this.specialCharge >= 100 ? this.specialName + ' READY' : this.specialName + ' ' + Math.floor(this.specialCharge) + '%'
        this.el.specialWrap.classList.toggle('ready', this.specialCharge >= 100)
        this.el.specialWrap.classList.remove('active')
      }
      if (this.hull < 35) this.el.hull.classList.add('danger'); else this.el.hull.classList.remove('danger')
      const dmgPct = 100 - this.hull
      if (this.el.dmgPct) {
        this.el.dmgPct.textContent = `${Math.round(dmgPct)}%`
        this.el.dmgPct.style.color = damageColor(dmgPct)
        this.el.dmgFront.style.background = damageColor(this.zoneDamage.front)
        this.el.dmgLeft.style.background = damageColor(this.zoneDamage.left)
        this.el.dmgRight.style.background = damageColor(this.zoneDamage.right)
        this.el.dmgRear.style.background = damageColor(this.zoneDamage.rear)
      }
      if (this.tutorial) {
        const bar = document.getElementById('hudObjBar')
        if (bar) bar.style.width = `${this.tutorial.step * 20}%`
        this.el.objSub.textContent = `Tutorial ${Math.min(5, this.tutorial.step + 1)}/5`
      } else if (this.mode === 'transport') {
        this.el.objLabel.textContent = 'CARGO INTEGRITY'
        this.el.objMain.textContent = `${Math.round(this.cargo)}%`
        this.el.objBar.style.width = this.cargo + '%'
        this.el.objSub.textContent = this.cargo > 60 ? 'Fragile. Keep it off the walls.' : this.cargo > 0 ? 'Cargo failing! Find the line.' : 'CARGO LOST'
        this.el.objBar.classList.toggle('danger', this.cargo < 35)
      } else if (this.mode === 'taxi') {
        this.el.objLabel.textContent = 'PASSENGER COMFORT'
        this.el.objMain.textContent = `${Math.round(this.comfort)}%`
        this.el.objBar.style.width = this.comfort + '%'
        this.el.objSub.textContent = this.comfort > 60 ? 'Keep the fare breathing.' : 'The passenger is screaming.'
        this.el.objBar.classList.toggle('danger', this.comfort < 35)
      } else if (this.mode === 'gang' || this.mode === 'police') {
        this.el.objLabel.textContent = 'SURVIVE'
        this.el.objMain.textContent = formatTime(this.escapeLeft).slice(0, 5)
        this.el.objBar.style.width = `${Math.max(0, Math.min(100, (this.escapeLeft / (this.opts.escapeTime || 60)) * 100))}%`
        this.el.objSub.textContent = `HULL ${Math.round(this.hull)}% · ${this.mode === 'police' ? 'PRECINCT 13' : 'BONE GANG'}`
      } else {
        this.el.objLabel.textContent = 'OBJECTIVE'
        this.el.objMain.textContent = this.boss ? `BEAT ${this.boss.name.toUpperCase()}` : 'WIN THE RACE'
        this.el.objBar.style.width = `${Math.max(0, 100 - (this.position - 1) * 22)}%`
        this.el.objSub.textContent = this.position === 1 ? 'LEADING' : `${this.position - 1} DRIVER${this.position > 2 ? 'S' : ''} AHEAD`
        this.el.objBar.classList.toggle('danger', false)
      }
      if (this.warnHold <= 0) {
        if (this.weather.id === 'hurricane') this.el.warning.textContent = 'CROSSWIND · HOLD THE LINE'
        else if (this.weather.id === 'twister') this.el.warning.textContent = 'TWISTER · DO NOT GET PULLED IN'
        else if (this.weather.id === 'flood') this.el.warning.textContent = 'FLOODED ROAD · LOW GRIP'
        else if (this.weather.id === 'acid') this.el.warning.textContent = 'ACID RAIN · HULL CORRODING'
        else if (this.weather.id === 'storm') this.el.warning.textContent = 'THUNDERSTORM · LIGHTNING ACTIVE'
        else if (this.weather.id === 'quicksand') this.el.warning.textContent = 'QUICKSAND · STAY ON ASPHALT'
        else this.el.warning.textContent = ''
      }
    }
    this.mapTimer += dt
    if (this.mapTimer > 0.13) {
      this.mapTimer = 0
      this.drawMinimap()
    }
  }

  drawMinimap() {
    if (!this.mapCtx) return
    const ctx = this.mapCtx, w = 300, h = 300
    const b = this.mapBounds
    const pad = 34
    const rangeX = b.maxX - b.minX, rangeZ = b.maxZ - b.minZ
    const scale = (w - pad * 2) / Math.max(rangeX, rangeZ)
    const ox = (w - rangeX * scale) / 2, oz = (h - rangeZ * scale) / 2
    const map = (x, z) => [ox + (x - b.minX) * scale, oz + (z - b.minZ) * scale]
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = 'rgba(8,8,9,0.55)'
    ctx.beginPath(); ctx.roundRect(0, 0, w, h, 18); ctx.fill()
    ctx.strokeStyle = 'rgba(216,164,74,0.3)'; ctx.lineWidth = 2; ctx.stroke()
    ctx.strokeStyle = 'rgba(230,220,190,0.72)'
    ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath()
    for (let i = 0; i <= N_SAMPLES; i += 8) {
      const s = this.track.sampleAt(i)
      const [x, y] = map(s.p.x, s.p.z)
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
    }
    ctx.closePath(); ctx.stroke()
    // start line
    const st = this.track.samples[0]
    const [sx, sy] = map(st.p.x, st.p.z)
    ctx.fillStyle = '#e8dcc0'; ctx.fillRect(sx - 3, sy - 3, 6, 6)
    // dotted shortest line
    for (const ai of this.racers) {
      const [x, y] = map(ai.pos.x, ai.pos.z)
      if (ai.isPlayer) {
        ctx.save(); ctx.translate(x, y); ctx.rotate(-ai.yaw + Math.PI)
        ctx.fillStyle = '#ff4136'
        ctx.shadowBlur = 12; ctx.shadowColor = '#ff4136'
        ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(6, 6); ctx.lineTo(0, 2); ctx.lineTo(-6, 6); ctx.closePath(); ctx.fill()
        ctx.restore()
      } else {
        ctx.fillStyle = ai.boss ? '#ffd166' : ai.pursuit ? '#6aa6ff' : 'rgba(220,215,200,0.75)'
        ctx.beginPath(); ctx.arc(x, y, ai.boss ? 5 : 3.2, 0, 7); ctx.fill()
      }
    }
    // wind arrow
    ctx.save()
    ctx.translate(w - 30, 28)
    ctx.strokeStyle = 'rgba(120,220,255,0.75)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(-12, 0); ctx.lineTo(10, 0); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(4, -4); ctx.lineTo(10, 0); ctx.lineTo(4, 4); ctx.stroke()
    ctx.restore()
  }

  updateImpactParticles(dt) {
    for (let i = this.impact.length - 1; i >= 0; i--) {
      const fx = this.impact[i]
      fx.life -= dt
      if (fx.life <= 0) {
        this.scene.remove(fx.mesh)
        fx.mesh.geometry.dispose(); fx.mesh.material.dispose()
        this.impact.splice(i, 1)
        continue
      }
      fx.mesh.position.y += dt * 1.8
      fx.mesh.material.opacity = Math.max(0, fx.life / 0.55)
    }
  }

  impactAt(pos, scale = 1) {
    const color = this.gore === 'off' ? '#ffc46a' : this.gore === 'zombie' ? '#6fbf38' : '#a3151b'
    const count = 18
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 2.4 * scale
      arr[i * 3 + 1] = Math.random() * 2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2.4 * scale
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    const mesh = new THREE.Points(geo, new THREE.PointsMaterial({ color, size: 0.36, transparent: true, opacity: 1, depthWrite: false }))
    mesh.position.copy(pos)
    this.scene.add(mesh)
    this.impact.push({ mesh, life: 0.55 })
    if (this.gore !== 'off') {
      this.el?.flash?.classList.remove('gore')
      void this.el?.flash?.offsetWidth
      this.el?.flash?.classList.add('gore')
      setTimeout(() => this.el?.flash?.classList.remove('gore'), 280)
    }
  }

  spawnDust(pos) {
    if (this.dustCd > 0) return
    this.dustCd = 0.04
    const arr = new Float32Array(9)
    for (let i = 0; i < 3; i++) { arr[i * 3] = (Math.random() - 0.5) * 1.4; arr[i * 3 + 1] = 0.2 + Math.random(); arr[i * 3 + 2] = (Math.random() - 0.5) * 1.4 }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    const mesh = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#b8a078', size: 0.55, transparent: true, opacity: 0.6, depthWrite: false }))
    mesh.position.copy(pos)
    this.scene.add(mesh)
    this.impact.push({ mesh, life: 0.4 })
  }

  flashScreen() {
    if (!this.el?.flash) return
    this.el.flash.classList.remove('lightning')
    void this.el.flash.offsetWidth
    this.el.flash.classList.add('lightning')
    setTimeout(() => this.el?.flash?.classList.remove('lightning'), 320)
  }

  warn(text) {
    if (!this.el?.warning) return
    this.warnHold = 2.2
    this.el.warning.textContent = text
    this.el.warning.classList.remove('pulse')
    void this.el.warning.offsetWidth
    this.el.warning.classList.add('pulse')
  }

  finishRace(reason) {
    if (this.state !== 'racing') return
    this.state = 'finished'
    this.finishReason = reason
    this.finished = true
    const p = this.player
    p.finished = true
    p.finishOrder = ++this.finishOrder
    p.finishTime = this.raceTime
    this.updatePositions()
    this.finishing = 1.4
    audio.stopEngine()
    if (reason === 'finished' || reason === 'escaped') audio.sfx('win')
    else audio.sfx('lose')
    if (this.el?.count) { this.el.count.textContent = reason === 'wrecked' ? 'WRECKED' : 'FINISH'; this.el.count.className = 'rh-count show ' + (reason === 'wrecked' ? 'lose' : 'go') }
    if (this.el?.tutorial) this.el.tutorial.classList.remove('show')
    this.updateHUD(0.1)
  }

  deliverResults() {
    if (this.delivered) return
    this.delivered = true
    const standings = [...this.racers].sort((a, b) => {
      if (a.finished && b.finished) return a.finishOrder - b.finishOrder
      if (a.finished) return -1
      if (b.finished) return 1
      return (b.lap * N_SAMPLES + b.index) - (a.lap * N_SAMPLES + a.index)
    })
    const pos = standings.findIndex(r => r.isPlayer) + 1
    const success = this.finishReason === 'escaped' ? true : this.finishReason === 'finished' ? pos === 1 || (this.mode === 'transport' || this.mode === 'taxi') : false
    const results = {
      mode: this.mode,
      reason: this.finishReason,
      success,
      position: pos,
      total: this.racers.length,
      time: this.raceTime,
      bestLap: this.bestLap,
      hull: this.hull,
      cargo: this.cargo,
      comfort: this.comfort,
      laps: this.laps,
      terrain: this.terrain.id,
      weather: this.weather.id,
      bossId: this.boss?.id || null,
      standings: standings.map(r => ({
        name: r.isPlayer ? this.player.name : r.name,
        isPlayer: !!r.isPlayer,
        boss: !!r.boss,
        vehicle: r.isPlayer ? this.vehicle.name : (VEHICLE_MAP[r.carDef?.vehicle]?.name || r.carDef?.name || 'Rust Bucket'),
        time: r.finishTime,
        finished: r.finished
      }))
    }
    this.onFinish(results)
  }

  setPaused(v) {
    if (v === this.paused) return
    this.paused = v
    if (v) audio.stopEngine(); else { audio.startEngine(); this.clock.getDelta() }
  }

  dispose() {
    this.disposed = true
    if (this.raf) cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('keydown', this.keyHandler)
    window.removeEventListener('keyup', this.keyUp)
    window.removeEventListener('blur', this.blur)
    document.removeEventListener('visibilitychange', this.onVisibility)
    clearTimeout(this._toastTimer)
    audio.stopEngine()
    audio.setScene('menu')
    this.track.dispose()
    for (const fx of this.impact) { fx.mesh.geometry.dispose(); fx.mesh.material.dispose() }
    this.impact = []
    document.getElementById('race-ui').innerHTML = ''
    this.renderer.setClearColor(0x0b0b0d, 1)
  }
}
