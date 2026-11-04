import * as THREE from 'three'
import { buildCar } from './car.js'
import { VEHICLES } from './data.js'

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function moonTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const x = c.getContext('2d')
  const g = x.createRadialGradient(128, 118, 10, 128, 128, 116)
  g.addColorStop(0, '#ffd9a6'); g.addColorStop(0.42, '#e97b42'); g.addColorStop(0.78, '#9e2d22'); g.addColorStop(1, 'rgba(70,10,12,0)')
  x.fillStyle = g; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill()
  x.globalCompositeOperation = 'multiply'
  x.fillStyle = 'rgba(60,15,15,0.4)'
  for (let i = 0; i < 16; i++) {
    x.beginPath(); x.arc(60 + Math.random() * 140, 60 + Math.random() * 140, 3 + Math.random() * 14, 0, 7); x.fill()
  }
  // skull impression
  x.globalCompositeOperation = 'source-over'
  x.fillStyle = 'rgba(55,10,12,0.35)'
  x.beginPath(); x.ellipse(128, 120, 48, 55, 0, 0, 7); x.fill()
  x.beginPath(); x.ellipse(110, 112, 13, 17, 0, 0, 7); x.fill()
  x.beginPath(); x.ellipse(146, 112, 13, 17, 0, 0, 7); x.fill()
  x.fillRect(122, 134, 12, 20)
  x.fillStyle = 'rgba(55,10,12,0.25)'
  for (let i = 0; i < 5; i++) x.fillRect(112 + i * 7, 158, 4, 18)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export class MenuBackdrop {
  constructor(canvas) {
    this.canvas = canvas
    this.active = false
    this.quality = 'medium'
    this.clock = new THREE.Clock()
    this.flash = 0
    this.nextBolt = 2.5
    this.t = 0
    this.init()
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: this.quality !== 'low', powerPreference: 'high-performance' })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x1c1210, 0.017)
    this.camera = new THREE.PerspectiveCamera(47, 2, 0.5, 260)
    this.camera.position.set(0, 5.4, 19)
    this.camera.lookAt(0, 2.2, 0)

    const hemi = new THREE.HemisphereLight(0x8899bb, 0x2a1510, 0.55)
    this.scene.add(hemi)
    this.moonLight = new THREE.DirectionalLight(0xff7c45, 1.4)
    this.moonLight.position.set(-18, 20, -30)
    this.scene.add(this.moonLight)
    this.rim = new THREE.PointLight(0xff5a2b, 2.2, 60)
    this.rim.position.set(-8, 4, 2)
    this.scene.add(this.rim)
    this.blue = new THREE.PointLight(0x3b9fd6, 1.5, 35)
    this.blue.position.set(7, 3, -1)
    this.scene.add(this.blue)

    // ground + road
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), new THREE.MeshLambertMaterial({ color: 0x1b1817 }))
    ground.rotation.x = -Math.PI / 2
    this.scene.add(ground)
    const road = new THREE.Mesh(new THREE.PlaneGeometry(16, 150), new THREE.MeshLambertMaterial({ color: 0x242221 }))
    road.rotation.x = -Math.PI / 2
    road.position.set(4, 0.02, -55)
    road.rotation.z = -0.06
    this.scene.add(road)
    for (let i = 0; i < 16; i++) {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 3.5), new THREE.MeshBasicMaterial({ color: 0xb99b52 }))
      line.rotation.x = -Math.PI / 2
      line.rotation.z = -0.06
      line.position.set(4 + Math.sin(-0.06) * (i * 8 - 50), 0.035, -50 + i * 8)
      line.rotation.z = -0.06
      this.scene.add(line)
    }
    // road edges
    for (const side of [-1, 1]) {
      const edge = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 150), new THREE.MeshBasicMaterial({ color: 0x6d5a36 }))
      edge.rotation.x = -Math.PI / 2
      edge.position.set(4 + side * 8, 0.03, -55)
      edge.rotation.z = -0.06
      this.scene.add(edge)
    }

    // ruined skyline
    const rnd = mulberry32(1337)
    const bMat = new THREE.MeshLambertMaterial({ color: 0x100e0e })
    const bMat2 = new THREE.MeshLambertMaterial({ color: 0x171211 })
    for (let i = 0; i < 44; i++) {
      const side = rnd() > 0.5 ? 1 : -1
      const w = 4 + rnd() * 12
      const h = 10 + rnd() * 44
      const d = 4 + rnd() * 12
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), rnd() > 0.5 ? bMat : bMat2)
      b.position.set(side * (24 + rnd() * 55), h / 2, -25 - rnd() * 85)
      b.rotation.y = rnd() * 0.5
      this.scene.add(b)
      // broken top
      if (rnd() > 0.6) {
        const top = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 3 + rnd() * 6, d * 0.6), bMat)
        top.position.set(b.position.x + side * 2, h + 2, b.position.z)
        top.rotation.z = (rnd() - 0.5) * 0.5
        this.scene.add(top)
      }
      // windows
      if (rnd() > 0.35) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.55), new THREE.MeshBasicMaterial({ color: rnd() > 0.7 ? 0x9b3a1f : 0x5a4c37 }))
        win.position.set(b.position.x - side * w * 0.51, h * 0.55, b.position.z + d * 0.51)
        win.rotation.y = side > 0 ? -0.02 : 0.02
        this.scene.add(win)
      }
    }
    // foreground rubble
    for (let i = 0; i < 28; i++) {
      const r = 0.3 + rnd() * 1.6
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), new THREE.MeshLambertMaterial({ color: 0x2a2320, flatShading: true }))
      rock.position.set((rnd() - 0.5) * 50, r * 0.4, 4 + rnd() * 18)
      rock.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3)
      this.scene.add(rock)
    }

    // moon
    const moon = new THREE.Mesh(new THREE.PlaneGeometry(34, 34), new THREE.MeshBasicMaterial({ map: moonTexture(), transparent: true, depthWrite: false, fog: false }))
    moon.position.set(-17, 20, -78)
    this.scene.add(moon)
    this.moon = moon

    // hero car
    const heroV = { ...VEHICLES[0], color: '#4a2018', accent: '#d9a441' }
    this.hero = buildCar(heroV, { beams: true, boss: true })
    this.hero.position.set(3.5, 0.15, 3.6)
    this.hero.rotation.y = -0.38
    this.hero.scale.setScalar(1.15)
    this.scene.add(this.hero)
    const carLight = new THREE.PointLight(0xff6b2b, 2.4, 14)
    carLight.position.set(3, 1.6, 4)
    this.scene.add(carLight)
    // dust under car
    const dust = new THREE.Mesh(new THREE.CircleGeometry(3.8, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }))
    dust.rotation.x = -Math.PI / 2
    dust.position.set(3.5, 0.06, 3.6)
    this.scene.add(dust)

    // chain silhouettes hanging from sky
    this.chains = []
    for (let c = 0; c < 3; c++) {
      const x = -32 + c * 24 + rnd() * 8
      const pts = []
      for (let i = 0; i < 10; i++) pts.push(new THREE.Vector3(x + Math.sin(i * 0.7) * 0.3, 30 - i * 2.2, -18 - c * 8))
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x39322b }))
      this.scene.add(line)
    }

    // rain
    this.rainCount = 1400
    const pos = new Float32Array(this.rainCount * 3)
    for (let i = 0; i < this.rainCount; i++) {
      pos[i * 3] = (rnd() - 0.5) * 90
      pos[i * 3 + 1] = rnd() * 35
      pos[i * 3 + 2] = -20 + (rnd() - 0.5) * 70
    }
    const rainGeo = new THREE.BufferGeometry()
    rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    this.rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0x8aa2ad, size: 0.1, transparent: true, opacity: 0.5, depthWrite: false }))
    this.scene.add(this.rain)

    // embers
    this.emberCount = 220
    const ep = new Float32Array(this.emberCount * 3)
    for (let i = 0; i < this.emberCount; i++) {
      ep[i * 3] = (rnd() - 0.5) * 60
      ep[i * 3 + 1] = rnd() * 20
      ep[i * 3 + 2] = -30 + rnd() * 40
    }
    const eGeo = new THREE.BufferGeometry(); eGeo.setAttribute('position', new THREE.BufferAttribute(ep, 3))
    this.embers = new THREE.Points(eGeo, new THREE.PointsMaterial({ color: 0xff6a2a, size: 0.18, transparent: true, opacity: 0.8, depthWrite: false }))
    this.scene.add(this.embers)

    // lightning line
    this.boltMat = new THREE.LineBasicMaterial({ color: 0xd9e6ff, transparent: true, opacity: 0 })
    this.bolt = new THREE.Line(new THREE.BufferGeometry(), this.boltMat)
    this.bolt.frustumCulled = false
    this.scene.add(this.bolt)
    this.flashLight = new THREE.PointLight(0xbdd8ff, 0, 160)
    this.flashLight.position.set(-15, 28, -35)
    this.scene.add(this.flashLight)

    this.resize()
  }

  setQuality(q) {
    this.quality = q
    if (!this.renderer) return
    this.renderer.setPixelRatio(q === 'low' ? 1 : q === 'high' ? Math.min(2, window.devicePixelRatio || 1) : Math.min(1.5, window.devicePixelRatio || 1))
    this.rain.visible = q !== 'low'
    this.embers.visible = q !== 'low'
    this.resize()
  }

  resize() {
    if (!this.renderer) return
    const w = window.innerWidth, h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.renderer.setPixelRatio(this.quality === 'low' ? 1 : Math.min(this.quality === 'high' ? 2 : 1.5, window.devicePixelRatio || 1))
    this.camera.aspect = w / h
    this.camera.fov = w / h < 0.85 ? 58 : 47
    this.camera.updateProjectionMatrix()
  }

  start() {
    if (this.active) return
    this.active = true
    this.clock.getDelta()
    this.loop()
  }

  stop() {
    this.active = false
    if (this.raf) cancelAnimationFrame(this.raf)
  }

  loop() {
    if (!this.active) return
    this.raf = requestAnimationFrame(() => this.loop())
    const dt = Math.min(0.05, this.clock.getDelta())
    this.t += dt
    const t = this.t
    this.camera.position.x = Math.sin(t * 0.09) * 1.8
    this.camera.position.y = 5.4 + Math.sin(t * 0.16) * 0.22
    this.camera.lookAt(0, 2.2 + Math.sin(t * 0.1) * 0.1, 0)
    this.hero.position.y = 0.15 + Math.sin(t * 0.8) * 0.012
    this.hero.rotation.z = Math.sin(t * 0.6) * 0.004
    this.rim.intensity = 1.6 + Math.sin(t * 3.2) * 0.45
    this.blue.intensity = 1.2 + Math.sin(t * 2.1 + 1) * 0.4

    // rain
    if (this.rain.visible) {
      const p = this.rain.geometry.attributes.position.array
      for (let i = 0; i < this.rainCount; i++) {
        p[i * 3 + 1] -= (18 + (i % 5)) * dt
        p[i * 3] += 4.2 * dt
        if (p[i * 3 + 1] < 0) {
          p[i * 3 + 1] = 35
          p[i * 3] = (Math.random() - 0.5) * 90
          p[i * 3 + 2] = -20 + (Math.random() - 0.5) * 70
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true
    }
    if (this.embers.visible) {
      const e = this.embers.geometry.attributes.position.array
      for (let i = 0; i < this.emberCount; i++) {
        e[i * 3 + 1] += (0.8 + (i % 4) * 0.4) * dt
        e[i * 3] += Math.sin(t + i) * 0.1 * dt
        if (e[i * 3 + 1] > 24) e[i * 3 + 1] = 0
      }
      this.embers.geometry.attributes.position.needsUpdate = true
    }

    // lightning
    this.nextBolt -= dt
    if (this.flash > 0) {
      this.flash = Math.max(0, this.flash - dt * 2.6)
      this.flashLight.intensity = this.flash * 11
      this.moonLight.intensity = 1.4 + this.flash * 2.5
      this.boltMat.opacity = this.flash
    } else {
      this.boltMat.opacity = 0
      this.flashLight.intensity = 0
      this.moonLight.intensity = 1.4
    }
    if (this.nextBolt <= 0) {
      this.nextBolt = 4 + Math.random() * 8
      this.makeBolt()
    }

    this.renderer.render(this.scene, this.camera)
  }

  makeBolt() {
    const x0 = (Math.random() - 0.5) * 50
    const z0 = -45 - Math.random() * 30
    const pts = [new THREE.Vector3(x0, 32, z0)]
    let x = x0, y = 32, z = z0
    for (let i = 0; i < 9; i++) {
      x += (Math.random() - 0.5) * 5
      y -= 2.7 + Math.random() * 2
      z += (Math.random() - 0.5) * 2
      pts.push(new THREE.Vector3(x, y, z))
    }
    this.bolt.geometry.dispose()
    this.bolt.geometry = new THREE.BufferGeometry().setFromPoints(pts)
    this.flash = 0.9
    this.flashLight.position.set(x0, 24, z0)
  }
}
