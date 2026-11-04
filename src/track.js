import * as THREE from 'three'
import { TERRAINS, WEATHERS } from './data.js'

const N_SAMPLES = 720

function rng(seed) {
  let a = seed >>> 0
  return () => {
    a += 0x6D2B79F5
    let t = a
    t = Math.imul(t ^ t >>> 15, t | 1)
    t ^= t + Math.imul(t ^ t >>> 7, t | 61)
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function makeRoadTexture(terrain) {
  const c = document.createElement('canvas')
  c.width = 256; c.height = 512
  const x = c.getContext('2d')
  x.fillStyle = terrain.road
  x.fillRect(0, 0, 256, 512)
  // asphalt grain
  const r = rng(terrain.id.length * 7001 + 11)
  for (let i = 0; i < 4500; i++) {
    const v = 20 + Math.floor(r() * 55)
    x.fillStyle = `rgba(${v},${v - 3},${v - 4},${0.1 + r() * 0.22})`
    x.fillRect(r() * 256, r() * 512, 1 + r() * 3, 1 + r() * 2)
  }
  // cracks
  x.strokeStyle = 'rgba(4,4,5,0.45)'
  for (let i = 0; i < 12; i++) {
    x.lineWidth = 0.8 + r() * 1.8
    let px = r() * 256, py = r() * 512
    x.beginPath(); x.moveTo(px, py)
    for (let j = 0; j < 5; j++) { px += (r() - 0.5) * 26; py += 10 + r() * 30; x.lineTo(px, py) }
    x.stroke()
  }
  // edge lines
  x.fillStyle = 'rgba(205,188,142,0.55)'
  x.fillRect(12, 0, 3, 512)
  x.fillRect(241, 0, 3, 512)
  // center dashed line
  x.fillStyle = 'rgba(216,182,92,0.66)'
  for (let i = 0; i < 6; i++) x.fillRect(125, i * 86 + 12, 6, 50)
  // oil / blood stains
  x.fillStyle = 'rgba(12,7,6,0.22)'
  for (let i = 0; i < 8; i++) { x.beginPath(); x.ellipse(r() * 256, r() * 512, 6 + r() * 24, 4 + r() * 13, r() * 3, 0, 7); x.fill() }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function makeBannerTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128
  const x = c.getContext('2d')
  x.fillStyle = '#120c0b'; x.fillRect(0, 0, 512, 128)
  x.fillStyle = '#a3151b'; x.fillRect(0, 0, 512, 10); x.fillRect(0, 118, 512, 10)
  for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? '#d9c89a' : '#161212'; x.fillRect(i * 32, 104, 32, 24) }
  x.font = 'bold 66px Impact, Arial Black, sans-serif'
  x.fillStyle = '#e8dcc0'; x.textAlign = 'center'
  x.fillText('HELLRIDE', 256, 76)
  x.font = 'bold 22px monospace'; x.fillStyle = '#d03a2a'
  x.fillText('S T A R T   /   F I N I S H', 256, 100)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

function makeSunTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256
  const x = c.getContext('2d')
  const g = x.createRadialGradient(128, 128, 2, 128, 128, 128)
  g.addColorStop(0, 'rgba(255,238,190,1)'); g.addColorStop(0.14, 'rgba(255,185,100,0.9)'); g.addColorStop(0.5, 'rgba(210,80,40,0.18)'); g.addColorStop(1, 'rgba(120,30,20,0)')
  x.fillStyle = g; x.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

function makeSkyMaterial(top, horizon) {
  return new THREE.ShaderMaterial({
    uniforms: { topColor: { value: new THREE.Color(top) }, horizonColor: { value: new THREE.Color(horizon) } },
    vertexShader: 'varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 topColor; uniform vec3 horizonColor; varying vec3 vPos;
      void main(){ float h = clamp(normalize(vPos).y * 1.4 + 0.15, 0.0, 1.0); vec3 c = mix(horizonColor, topColor, pow(h, 0.72)); gl_FragColor = vec4(c, 1.0); }`,
    side: THREE.BackSide, depthWrite: false, fog: false
  })
}

function dummyMatrix(obj) {
  obj.updateMatrix()
  return obj.matrix
}

export class Track {
  constructor({ terrain = 'wasteland', weather = 'cloudy', seed = 1, quality = 'medium' } = {}) {
    this.terrain = TERRAINS.find(t => t.id === terrain) || TERRAINS[0]
    this.weather = WEATHERS.find(w => w.id === weather) || WEATHERS[0]
    this.seed = seed
    this.quality = quality
    this.rand = rng(seed * 7919 + this.terrain.id.length * 131 + this.weather.id.length * 17)
    this.width = 15.5
    this.group = new THREE.Group()
    this.t = 0
    this.buildCurve()
    this.buildEnvironment()
    this.buildRoad()
    this.buildGate()
    this.buildProps()
    this.buildWeather()
  }

  buildCurve() {
    const r = this.rand
    const count = 11
    const pts = []
    const baseR = 100 + r() * 36
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + (r() - 0.5) * 0.2
      const radius = baseR * (0.72 + r() * 0.63)
      const elev = (this.terrain.elevation || 2) * (0.4 + 0.6 * Math.sin(a * 3 + r() * 0.7)) * (this.terrain.id === 'mountains' || this.terrain.id === 'volcano' ? 1 : 0.35)
      pts.push(new THREE.Vector3(Math.cos(a) * radius, elev, Math.sin(a) * radius))
    }
    pts.push(pts[0].clone())
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5)
    this.samples = []
    for (let i = 0; i < N_SAMPLES; i++) {
      const t = i / N_SAMPLES
      const p = this.curve.getPointAt(t)
      const tan = this.curve.getTangentAt(t)
      tan.y = 0
      tan.normalize()
      const right = new THREE.Vector3(-tan.z, 0, tan.x)
      this.samples.push({ p, tan, right })
    }
    // smooth surface height to avoid nausea
    const raw = this.samples.map(s => s.p.y)
    for (let iter = 0; iter < 3; iter++) {
      for (let i = 0; i < N_SAMPLES; i++) {
        const a = raw[(i - 1 + N_SAMPLES) % N_SAMPLES], b = raw[i], c = raw[(i + 1) % N_SAMPLES]
        raw[i] = (a + b * 2 + c) / 4
      }
    }
    this.computeLength()
    this.samples.forEach((s, i) => { s.p.y = raw[i] })
  }

  computeLength() {
    let len = 0
    for (let i = 0; i < N_SAMPLES; i++) {
      const a = this.samples[i].p, b = this.samples[(i + 1) % N_SAMPLES].p
      len += a.distanceTo(b)
    }
    this.length = len
  }

  buildEnvironment() {
    const t = this.terrain, w = this.weather
    this.skyColor = new THREE.Color(t.sky)
    this.horizonColor = new THREE.Color(t.horizon).lerp(new THREE.Color(w.tint), 0.25)
    this.fogColor = new THREE.Color(t.fog).lerp(new THREE.Color(w.tint), 0.35)
    this.skyMat = makeSkyMaterial('#' + this.skyColor.getHexString(), '#' + this.horizonColor.getHexString())
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(450, 24, 12), this.skyMat)
    this.group.add(this.sky)

    const sun = new THREE.Mesh(new THREE.PlaneGeometry(55, 55), new THREE.MeshBasicMaterial({ map: makeSunTexture(), transparent: true, depthWrite: false, fog: false }))
    sun.position.set(-140, 90, -210)
    sun.lookAt(0, 0, 0)
    this.group.add(sun)
    this.sun = sun

    const hemi = new THREE.HemisphereLight(0xa4b5c8, new THREE.Color(t.ground).multiplyScalar(0.38), 0.9)
    this.group.add(hemi)
    this.hemi = hemi
    const dir = new THREE.DirectionalLight(0xffb27a, 1.35)
    dir.position.set(-60, 90, -40)
    this.group.add(dir)
    this.dir = dir
    const fill = new THREE.DirectionalLight(0x7890b8, 0.5)
    fill.position.set(40, 30, 60)
    this.group.add(fill)

    // ground
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600, 1, 1), new THREE.MeshLambertMaterial({ color: new THREE.Color(t.ground).multiplyScalar(0.7) }))
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.6
    this.group.add(ground)
    this.ground = ground

    // distant mountain ring
    const r = this.rand
    const ringMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(t.ground).lerp(this.fogColor, 0.55), flatShading: true })
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + r() * 0.15
      const dist = 220 + r() * 80
      const h = 30 + r() * 85
      const cone = new THREE.Mesh(new THREE.ConeGeometry(24 + r() * 40, h, 5 + Math.floor(r() * 2)), ringMat)
      cone.position.set(Math.cos(a) * dist, h * 0.34 - 4, Math.sin(a) * dist)
      cone.rotation.y = r() * 3
      this.group.add(cone)
      this.addDisposable(cone)
    }
    this.addDisposable(ground)
  }

  buildRoad() {
    const { samples, width } = this
    const roadW = width
    const landW = 66
    const positions = [], uvs = [], indices = []
    const landPos = [], landIdx = []
    for (let i = 0; i <= N_SAMPLES; i++) {
      const s = samples[i % N_SAMPLES]
      const y = s.p.y
      const lx = s.p.x - s.right.x * roadW / 2, lz = s.p.z - s.right.z * roadW / 2
      const rx = s.p.x + s.right.x * roadW / 2, rz = s.p.z + s.right.z * roadW / 2
      positions.push(lx, y + 0.06, lz, rx, y + 0.06, rz)
      const v = i * (this.length / N_SAMPLES) / 7
      uvs.push(0, v, 1, v)
      // land: outer low, inner high
      landPos.push(
        s.p.x - s.right.x * landW, y - 0.6, s.p.z - s.right.z * landW,
        s.p.x - s.right.x * (roadW / 2 + 0.7), y - 0.02, s.p.z - s.right.z * (roadW / 2 + 0.7),
        s.p.x + s.right.x * (roadW / 2 + 0.7), y - 0.02, s.p.z + s.right.z * (roadW / 2 + 0.7),
        s.p.x + s.right.x * landW, y - 0.6, s.p.z + s.right.z * landW
      )
    }
    for (let i = 0; i < N_SAMPLES; i++) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3
      indices.push(a, b, c, b, d, c)
      const l = i * 4
      // left slope
      landIdx.push(l, l + 1, l + 4, l + 1, l + 5, l + 4)
      // center
      landIdx.push(l + 1, l + 2, l + 5, l + 2, l + 6, l + 5)
      // right slope
      landIdx.push(l + 2, l + 3, l + 6, l + 3, l + 7, l + 6)
    }
    const roadGeo = new THREE.BufferGeometry()
    roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    roadGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    roadGeo.setIndex(indices)
    roadGeo.computeVertexNormals()
    const roadMat = new THREE.MeshLambertMaterial({ map: makeRoadTexture(this.terrain), color: '#ffffff' })
    const road = new THREE.Mesh(roadGeo, roadMat)
    this.group.add(road)
    this.road = road
    this.addDisposable(road)

    const landGeo = new THREE.BufferGeometry()
    landGeo.setAttribute('position', new THREE.Float32BufferAttribute(landPos, 3))
    landGeo.setIndex(landIdx)
    landGeo.computeVertexNormals()
    const landMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(this.terrain.ground), flatShading: true })
    const land = new THREE.Mesh(landGeo, landMat)
    this.group.add(land)
    this.land = land
    this.addDisposable(land)

    // edge markers / barrier posts (instanced)
    const postGeo = new THREE.BoxGeometry(0.18, 0.9, 0.18)
    const postMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(this.terrain.accent).multiplyScalar(0.55) })
    const posts = new THREE.InstancedMesh(postGeo, postMat, Math.floor(N_SAMPLES / 10) * 2)
    const dummy = new THREE.Object3D()
    let pi = 0
    for (let i = 0; i < N_SAMPLES; i += 10) {
      const s = samples[i]
      for (const side of [-1, 1]) {
        dummy.position.set(s.p.x + s.right.x * side * (roadW / 2 + 1.2), s.p.y + 0.45, s.p.z + s.right.z * side * (roadW / 2 + 1.2))
        dummy.rotation.y = Math.atan2(s.tan.x, s.tan.z)
        dummy.updateMatrix()
        posts.setMatrixAt(pi++, dummy.matrix)
      }
    }
    posts.count = pi
    this.group.add(posts)
    this.addDisposable(posts)

    // glowing reflectors
    const refGeo = new THREE.SphereGeometry(0.16, 6, 5)
    const refMat = new THREE.MeshBasicMaterial({ color: this.terrain.accent })
    const refs = new THREE.InstancedMesh(refGeo, refMat, 80)
    let ri = 0
    for (let i = 0; i < N_SAMPLES; i += 20) {
      const s = samples[i]
      for (const side of [-1, 1]) {
        dummy.position.set(s.p.x + s.right.x * side * (roadW / 2 + 1.25), s.p.y + 1.02, s.p.z + s.right.z * side * (roadW / 2 + 1.25))
        dummy.rotation.set(0, 0, 0)
        dummy.updateMatrix()
        refs.setMatrixAt(ri++, dummy.matrix)
      }
    }
    refs.count = ri
    this.group.add(refs)
    this.addDisposable(refs)
  }

  buildGate() {
    const s = this.samples[0]
    const yaw = Math.atan2(s.tan.x, s.tan.z)
    const gate = new THREE.Group()
    gate.position.copy(s.p)
    gate.rotation.y = yaw
    const metal = new THREE.MeshLambertMaterial({ color: '#24211f' })
    const red = new THREE.MeshLambertMaterial({ color: '#8f171b' })
    for (const side of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.05, 8, 1.05), metal)
      pillar.position.set(side * 10.5, 4, 0)
      gate.add(pillar)
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.72, 1.2, 4), red)
      cap.position.set(side * 10.5, 8.6, 0); cap.rotation.y = Math.PI / 4
      gate.add(cap)
    }
    const banner = new THREE.Mesh(new THREE.BoxGeometry(21, 3.1, 0.32), new THREE.MeshBasicMaterial({ map: makeBannerTexture() }))
    banner.position.set(0, 7.3, 0)
    gate.add(banner)
    // checkers on the ground
    const c = document.createElement('canvas'); c.width = 256; c.height = 64
    const cx = c.getContext('2d')
    for (let i = 0; i < 16; i++) for (let j = 0; j < 4; j++) { cx.fillStyle = (i + j) % 2 ? '#e7ddc3' : '#171313'; cx.fillRect(i * 16, j * 16, 16, 16) }
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace
    const line = new THREE.Mesh(new THREE.PlaneGeometry(this.width, 3.2), new THREE.MeshBasicMaterial({ map: tex }))
    line.rotation.x = -Math.PI / 2
    line.position.y = 0.1
    gate.add(line)
    this.group.add(gate)
    this.gate = gate

    // start lights on gate
    this.startLights = []
    for (let i = 0; i < 3; i++) {
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), new THREE.MeshBasicMaterial({ color: '#3a1010' }))
      l.position.set(-1.8 + i * 1.8, 5.55, 0.25)
      gate.add(l)
      this.startLights.push(l)
    }
  }

  buildProps() {
    const kind = this.terrain.props
    for (const k of kind) this.buildProp(k)
    // roadside wreck clusters
    if (!kind.includes('wreck')) this.buildProp('wreck')
  }

  propPositions(count, min = 18, max = 55) {
    const out = []
    const r = this.rand
    for (let n = 0; n < count; n++) {
      const i = Math.floor(r() * N_SAMPLES)
      const s = this.samples[i]
      const side = r() > 0.5 ? 1 : -1
      const lateral = min + r() * (max - min)
      const baseY = lateral < 36 ? s.p.y - 0.15 : -0.5
      out.push({
        x: s.p.x + s.right.x * side * lateral,
        y: baseY,
        z: s.p.z + s.right.z * side * lateral,
        rot: r() * Math.PI * 2,
        scale: 0.7 + r() * 1.2,
        tangent: s.tan,
        side
      })
    }
    return out
  }

  buildInstanced(geo, material, points, mapFn) {
    if (!points.length) return null
    const mesh = new THREE.InstancedMesh(geo, material, points.length)
    const dummy = new THREE.Object3D()
    points.forEach((p, i) => {
      mapFn(dummy, p, i)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    this.group.add(mesh)
    this.addDisposable(mesh)
    return mesh
  }

  buildProp(kind) {
    const t = this.terrain
    const baseCol = new THREE.Color(t.ground)
    const accent = new THREE.Color(t.accent)
    const rockMat = new THREE.MeshLambertMaterial({ color: baseCol.clone().multiplyScalar(0.75), flatShading: true })
    const darkMat = new THREE.MeshLambertMaterial({ color: baseCol.clone().multiplyScalar(0.35), flatShading: true })
    const metalMat = new THREE.MeshLambertMaterial({ color: '#2b2927', flatShading: true })
    const boneMat = new THREE.MeshLambertMaterial({ color: '#bdb198', flatShading: true })
    const acMat = new THREE.MeshBasicMaterial({ color: accent })
    const pts = this.propPositions(kind === 'mountain' ? 14 : 34, kind === 'mountain' ? 40 : 17, kind === 'mountain' ? 100 : 62)

    if (kind === 'rock') {
      this.buildInstanced(new THREE.DodecahedronGeometry(1, 0), rockMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 0.6, p.z)
        d.rotation.set(p.rot, p.rot * 1.4, p.rot * 0.4)
        d.scale.set(p.scale * 2.2, p.scale * 1.5, p.scale * 2)
      })
    } else if (kind === 'mountain') {
      this.buildInstanced(new THREE.ConeGeometry(1, 1, 5), rockMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 5, p.z)
        d.scale.set(p.scale * 18, p.scale * 18, p.scale * 18)
        d.rotation.y = p.rot
      })
    } else if (kind === 'dune') {
      this.buildInstanced(new THREE.SphereGeometry(1, 7, 5), new THREE.MeshLambertMaterial({ color: baseCol.clone().multiplyScalar(1.15) }), pts, (d, p) => {
        d.position.set(p.x, p.y - p.scale * 0.7, p.z)
        d.scale.set(p.scale * 9, p.scale * 2.5, p.scale * 7)
      })
    } else if (kind === 'pine') {
      this.buildInstanced(new THREE.CylinderGeometry(0.28, 0.38, 4, 5), darkMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 2, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
      this.buildInstanced(new THREE.ConeGeometry(2.4, 7, 6), new THREE.MeshLambertMaterial({ color: new THREE.Color(t.ground).multiplyScalar(0.6), flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 5.4, p.z); d.scale.set(p.scale * 1.3, p.scale * 1.6, p.scale * 1.3); d.rotation.y = p.rot
      })
    } else if (kind === 'tree' || kind === 'palm') {
      this.buildInstanced(new THREE.CylinderGeometry(0.35, 0.55, 6, 5), darkMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 3, p.z); d.scale.setScalar(p.scale); d.rotation.z = (p.rot - 3.14) * 0.03
      })
      const crownCol = new THREE.Color(t.ground).multiplyScalar(0.72).lerp(new THREE.Color(t.accent), 0.18)
      this.buildInstanced(new THREE.IcosahedronGeometry(2.4, 0), new THREE.MeshLambertMaterial({ color: crownCol, flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 6.4, p.z)
        d.scale.set(p.scale * 1.5, p.scale * (kind === 'palm' ? 0.55 : 1.2), p.scale * 1.5)
        d.rotation.y = p.rot
      })
    } else if (kind === 'cactus') {
      this.buildInstanced(new THREE.CylinderGeometry(0.45, 0.55, 4.5, 6), new THREE.MeshLambertMaterial({ color: '#4c6138', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 2.2, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
    } else if (kind === 'fern') {
      this.buildInstanced(new THREE.ConeGeometry(1.7, 3.2, 5), new THREE.MeshLambertMaterial({ color: '#305a2f', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 1.2, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
    } else if (kind === 'wreck' || kind === 'rubble' || kind === 'cart') {
      this.buildInstanced(new THREE.BoxGeometry(2.2, 0.9, 4.6), new THREE.MeshLambertMaterial({ color: '#4c3a30', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + 0.55, p.z); d.rotation.set((p.rot - 3) * 0.05, p.rot, (p.rot - 3) * 0.03); d.scale.setScalar(p.scale)
      })
      this.buildInstanced(new THREE.BoxGeometry(1.8, 0.7, 1.8), darkMat, pts, (d, p) => {
        d.position.set(p.x, p.y + 1.22, p.z - 0.55 * Math.cos(p.rot)); d.rotation.y = p.rot; d.scale.setScalar(p.scale)
      })
    } else if (kind === 'tower') {
      this.buildInstanced(new THREE.BoxGeometry(6, 16, 6), new THREE.MeshLambertMaterial({ color: baseCol.clone().multiplyScalar(0.5), flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 8, p.z); d.scale.set(p.scale * 1.4, p.scale * (1.5 + p.rot), p.scale * 1.4); d.rotation.y = p.rot * 0.1
      })
      const neonPts = pts.filter((_, i) => i % 3 === 0)
      this.buildInstanced(new THREE.BoxGeometry(0.16, 2.2, 0.16), acMat, neonPts, (d, p) => {
        d.position.set(p.x + p.side * 3.2, p.y + p.scale * 12, p.z); d.scale.set(1, p.scale * 2, 1)
      })
    } else if (kind === 'house') {
      this.buildInstanced(new THREE.BoxGeometry(7, 5, 6), new THREE.MeshLambertMaterial({ color: baseCol.clone().multiplyScalar(1.25), flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 2.5, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
      this.buildInstanced(new THREE.ConeGeometry(5.1, 3, 4), darkMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 5.8, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot + Math.PI / 4
      })
    } else if (kind === 'bunker') {
      this.buildInstanced(new THREE.BoxGeometry(8, 3.2, 5), new THREE.MeshLambertMaterial({ color: '#514d42', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + 1.6, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
      this.buildInstanced(new THREE.BoxGeometry(1.4, 1.6, 0.2), metalMat, pts.filter((_, i) => i % 4 === 0), (d, p) => {
        d.position.set(p.x, p.y + 1.6, p.z); d.rotation.y = p.rot
      })
    } else if (kind === 'pylon') {
      this.buildInstanced(new THREE.CylinderGeometry(0.32, 0.5, 10, 4), metalMat, pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 5, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
      this.buildInstanced(new THREE.BoxGeometry(0.12, 0.12, 10), darkMat, pts.filter((_, i) => i % 2 === 0), (d, p) => {
        d.position.set(p.x, p.y + p.scale * 8, p.z); d.rotation.y = p.rot
      })
    } else if (kind === 'bones') {
      this.buildInstanced(new THREE.DodecahedronGeometry(0.7, 0), boneMat, pts, (d, p) => {
        d.position.set(p.x, p.y + 0.35, p.z); d.scale.set(p.scale, p.scale * 0.8, p.scale * 1.15); d.rotation.set(p.rot, p.rot, p.rot)
      })
      this.buildInstanced(new THREE.CylinderGeometry(0.18, 0.18, 5, 5), boneMat, pts.slice(0, 20), (d, p) => {
        d.position.set(p.x + 1.5, p.y + 0.2, p.z); d.rotation.set(Math.PI / 2, p.rot, 0)
      })
    } else if (kind === 'ice') {
      this.buildInstanced(new THREE.ConeGeometry(1.6, 6, 5), new THREE.MeshLambertMaterial({ color: '#bfe9f2', flatShading: true, transparent: true, opacity: 0.9 }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 2, p.z); d.scale.set(p.scale, p.scale * 2.5, p.scale); d.rotation.y = p.rot
      })
    } else if (kind === 'lava') {
      const lavaMat = new THREE.MeshBasicMaterial({ color: '#ff6a24' })
      this.buildInstanced(new THREE.CircleGeometry(1, 10), lavaMat, pts.slice(0, 22), (d, p) => {
        d.position.set(p.x, p.y + 0.08, p.z); d.rotation.x = -Math.PI / 2; d.scale.set(p.scale * 4, p.scale * 2.4, 1)
      })
      this.buildInstanced(new THREE.ConeGeometry(1, 1, 5), new THREE.MeshLambertMaterial({ color: '#2b1b1a', emissive: '#5c1c0e', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 2.5, p.z); d.scale.set(p.scale * 2, p.scale * 5, p.scale * 2); d.rotation.y = p.rot
      })
    } else if (kind === 'sign') {
      this.buildInstanced(new THREE.BoxGeometry(0.22, 5, 0.22), metalMat, pts.filter((_, i) => i % 3 === 0), (d, p) => {
        d.position.set(p.x, p.y + 2.5, p.z); d.scale.setScalar(p.scale)
      })
      this.buildInstanced(new THREE.BoxGeometry(4.5, 2, 0.18), acMat, pts.filter((_, i) => i % 3 === 0), (d, p) => {
        d.position.set(p.x, p.y + 4.2, p.z); d.rotation.y = p.rot; d.scale.setScalar(p.scale)
      })
    } else if (kind === 'mine') {
      this.buildInstanced(new THREE.BoxGeometry(7, 6, 5), metalMat, pts, (d, p) => {
        d.position.set(p.x, p.y + 3, p.z); d.rotation.y = p.rot; d.scale.setScalar(p.scale)
      })
      this.buildInstanced(new THREE.BoxGeometry(2.8, 3.2, 0.3), new THREE.MeshBasicMaterial({ color: '#0a0807' }), pts, (d, p) => {
        d.position.set(p.x, p.y + 1.6, p.z); d.rotation.y = p.rot
      })
    } else if (kind === 'idol') {
      this.buildInstanced(new THREE.CylinderGeometry(1.4, 1.8, 9, 4), new THREE.MeshLambertMaterial({ color: '#55503c', flatShading: true }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 4.5, p.z); d.scale.setScalar(p.scale); d.rotation.y = p.rot
      })
      this.buildInstanced(new THREE.SphereGeometry(1.3, 6, 5), new THREE.MeshBasicMaterial({ color: accent }), pts, (d, p) => {
        d.position.set(p.x, p.y + p.scale * 9.2, p.z); d.scale.setScalar(p.scale)
      })
    } else if (kind === 'wire') {
      this.buildInstanced(new THREE.CylinderGeometry(0.12, 0.12, 3, 4), metalMat, pts, (d, p) => {
        d.position.set(p.x, p.y + 1.5, p.z); d.scale.setScalar(p.scale)
      })
    } else if (kind === 'crater') {
      this.buildInstanced(new THREE.CircleGeometry(1, 10), new THREE.MeshLambertMaterial({ color: '#211c19' }), pts, (d, p) => {
        d.position.set(p.x, p.y + 0.05, p.z); d.rotation.x = -Math.PI / 2; d.scale.set(p.scale * 4, p.scale * 3, 1)
      })
    }
  }

  buildWeather() {
    const w = this.weather.id
    const r = this.rand
    this.precip = null
    this.tornado = null
    this.water = null
    this.quicksand = null
    this.flash = 0
    this.nextStrike = 6

    if (w === 'acid' || w === 'storm' || w === 'hurricane') {
      const count = this.quality === 'low' ? 600 : 1300
      const arr = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        arr[i * 3] = (r() - 0.5) * 100
        arr[i * 3 + 1] = r() * 45
        arr[i * 3 + 2] = (r() - 0.5) * 100
      }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
      const col = w === 'acid' ? '#8fdc5a' : w === 'storm' ? '#a8bfd8' : '#93b9c2'
      this.rain = new THREE.Points(geo, new THREE.PointsMaterial({ color: col, size: 0.12, transparent: true, opacity: 0.55, depthWrite: false }))
      this.rain.frustumCulled = false
      this.group.add(this.rain)
      this.addDisposable(this.rain)
      this.rainCount = count
    }

    if (w === 'twister') {
      this.tornado = this.makeTornado()
      this.group.add(this.tornado)
    }

    if (w === 'flood') {
      const waterMat = new THREE.MeshBasicMaterial({ color: '#2d4540', transparent: true, opacity: 0.5, depthWrite: false })
      const water = new THREE.Mesh(new THREE.PlaneGeometry(420, 420), waterMat)
      water.rotation.x = -Math.PI / 2
      water.position.y = -0.18
      this.group.add(water)
      this.water = water
      this.addDisposable(water)
    }

    if (w === 'quicksand') {
      const c = document.createElement('canvas'); c.width = c.height = 128
      const x = c.getContext('2d')
      x.fillStyle = '#5a4325'; x.fillRect(0, 0, 128, 128)
      for (let i = 0; i < 48; i++) {
        x.fillStyle = `rgba(${90 + r() * 60},${65 + r() * 40},${25 + r() * 30},0.5)`
        x.beginPath(); x.arc(r() * 128, r() * 128, 3 + r() * 14, 0, 7); x.fill()
      }
      const tex = new THREE.CanvasTexture(c)
      const mat = new THREE.MeshLambertMaterial({ map: tex, color: '#c0a06a' })
      const q = new THREE.Mesh(new THREE.PlaneGeometry(420, 420), mat)
      q.rotation.x = -Math.PI / 2; q.position.y = -0.55
      this.group.add(q); this.quicksand = q
      this.addDisposable(q)
    }

    if (w === 'clear' || w === 'cloudy') {
      // ash motes / heat shimmer
      const count = 160
      const arr = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) { arr[i * 3] = (r() - 0.5) * 90; arr[i * 3 + 1] = r() * 20; arr[i * 3 + 2] = (r() - 0.5) * 90 }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
      this.ash = new THREE.Points(geo, new THREE.PointsMaterial({ color: w === 'clear' ? '#e6b27c' : '#9c948c', size: 0.1, transparent: true, opacity: 0.4, depthWrite: false }))
      this.group.add(this.ash); this.addDisposable(this.ash)
    }

    // lightning flash light
    this.strikeLight = new THREE.PointLight(0xcfe4ff, 0, 120)
    this.strikeLight.position.set(0, 30, 0)
    this.group.add(this.strikeLight)
    this.boltMat = new THREE.LineBasicMaterial({ color: 0xe6f0ff, transparent: true, opacity: 0 })
    this.bolt = new THREE.Line(new THREE.BufferGeometry(), this.boltMat)
    this.bolt.frustumCulled = false
    this.group.add(this.bolt)

    // wet sheen for rain weathers
    if (w === 'acid' || w === 'storm' || w === 'hurricane' || w === 'flood') {
      this.road.material.color = new THREE.Color('#a8b2ac')
    }
  }

  makeTornado() {
    const g = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({ color: '#8c7b65', transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false })
    const rings = []
    for (let i = 0; i < 7; i++) {
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(1.2 + i * 1.4, 2.4 + i * 2.3, 7, 16, 1, true), mat)
      ring.position.y = 3 + i * 5
      ring.userData.spin = 0.7 + Math.random() * 0.8
      g.add(ring); rings.push(ring)
    }
    const s = this.samples[Math.floor(this.samples.length * 0.68)]
    const side = this.rand() > 0.5 ? 1 : -1
    g.position.set(s.p.x + s.right.x * side * 38, s.p.y - 1, s.p.z + s.right.z * side * 38)
    g.userData.rings = rings
    g.userData.radius = 20
    return g
  }

  nearest(pos, hint = 0, window = 46) {
    let best = -1, bestD = Infinity
    const start = hint - window, end = hint + window
    for (let k = start; k <= end; k++) {
      const i = ((k % N_SAMPLES) + N_SAMPLES) % N_SAMPLES
      const s = this.samples[i]
      const dx = pos.x - s.p.x, dz = pos.z - s.p.z
      const d = dx * dx + dz * dz
      if (d < bestD) { bestD = d; best = i }
    }
    if (bestD > 900) {
      for (let i = 0; i < N_SAMPLES; i += 8) {
        const s = this.samples[i]
        const dx = pos.x - s.p.x, dz = pos.z - s.p.z
        const d = dx * dx + dz * dz
        if (d < bestD) { bestD = d; best = i }
      }
    }
    const s = this.samples[best]
    const dx = pos.x - s.p.x, dz = pos.z - s.p.z
    const lateral = dx * s.right.x + dz * s.right.z
    return { index: best, distance: Math.sqrt(bestD), lateral, sample: s }
  }

  sampleAt(index) {
    return this.samples[((index % N_SAMPLES) + N_SAMPLES) % N_SAMPLES]
  }

  worldAt(index, lateral = 0, yOff = 0) {
    const s = this.sampleAt(index)
    return new THREE.Vector3(s.p.x + s.right.x * lateral, s.p.y + yOff, s.p.z + s.right.z * lateral)
  }

  startPose(slot = 0) {
    // grid behind the start line, staggered rows
    const row = Math.floor(slot / 2)
    const col = slot % 2
    const index = 18 + row * 13
    const s = this.sampleAt(index)
    const lateral = (col === 0 ? -1 : 1) * 3.6
    return {
      pos: new THREE.Vector3(s.p.x + s.right.x * lateral, s.p.y + 0.02, s.p.z + s.right.z * lateral),
      yaw: Math.atan2(s.tan.x, s.tan.z),
      index,
      lateral
    }
  }

  applyToScene(scene) {
    scene.add(this.group)
    scene.background = this.skyColor.clone().lerp(new THREE.Color(this.weather.tint), 0.08)
    const fogDensity = 0.0048 * this.weather.fog
    scene.fog = new THREE.FogExp2(this.fogColor.getHex(), fogDensity)
  }

  update(dt, cameraPos = null) {
    this.t += dt
    const w = this.weather.id
    if (this.rain) {
      const p = this.rain.geometry.attributes.position.array
      const wind = this.weather.wind
      const speed = w === 'hurricane' ? 36 : 22
      for (let i = 0; i < this.rainCount; i++) {
        p[i * 3 + 1] -= speed * dt
        p[i * 3] += (2.2 + wind * 5) * dt
        p[i * 3 + 2] += wind * 1.4 * dt
        if (p[i * 3 + 1] < -2) {
          p[i * 3 + 1] = 40
          p[i * 3] = (Math.random() - 0.5) * 110
          p[i * 3 + 2] = (Math.random() - 0.5) * 110
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true
      this.rain.position.x = cameraPos ? cameraPos.x * 0.35 : 0
      this.rain.position.z = cameraPos ? cameraPos.z * 0.35 : 0
    }
    if (this.ash) {
      const p = this.ash.geometry.attributes.position.array
      for (let i = 0; i < 160; i++) {
        p[i * 3 + 1] += (0.4 + i % 3 * 0.3) * dt
        p[i * 3] += Math.sin(this.t + i) * 0.08 * dt
        if (p[i * 3 + 1] > 20) p[i * 3 + 1] = 0
      }
      this.ash.geometry.attributes.position.needsUpdate = true
    }
    if (this.tornado) {
      for (const ring of this.tornado.userData.rings) ring.rotation.y += ring.userData.spin * dt
      this.tornado.rotation.y += 0.08 * dt
    }
    if (this.water) {
      this.water.material.opacity = 0.42 + Math.sin(this.t * 1.2) * 0.06
    }
    if (this.sun) this.sun.position.y = 90 + Math.sin(this.t * 0.1) * 2
    // lightning
    if (w === 'storm' || w === 'acid' || w === 'hurricane') {
      this.nextStrike -= dt
      if (this.flash > 0) {
        this.flash = Math.max(0, this.flash - dt * 2.8)
        this.boltMat.opacity = this.flash
        this.strikeLight.intensity = this.flash * 14
        this.hemi.intensity = 0.9 + this.flash * 1.6
      } else {
        this.boltMat.opacity = 0
        this.strikeLight.intensity = 0
        this.hemi.intensity = 0.9
      }
      if (this.nextStrike <= 0) {
        this.nextStrike = 5 + Math.random() * 7
        this.triggerLightning(cameraPos)
      }
    }
  }

  triggerLightning(near = null) {
    let x = near?.x ?? 0, z = near?.z ?? 0
    x += (Math.random() - 0.5) * 50
    z += (Math.random() - 0.5) * 50
    const pts = [new THREE.Vector3(x, 45, z)]
    let px = x, py = 45, pz = z
    for (let i = 0; i < 8; i++) {
      px += (Math.random() - 0.5) * 5
      py -= 4 + Math.random() * 2.5
      pz += (Math.random() - 0.5) * 3
      pts.push(new THREE.Vector3(px, py, pz))
    }
    this.bolt.geometry.dispose()
    this.bolt.geometry = new THREE.BufferGeometry().setFromPoints(pts)
    this.flash = 1
    this.strikeLight.position.set(x, 25, z)
    this.lastStrike = { x, z }
    return { x, z }
  }

  addDisposable(obj) {
    if (!this._disposables) this._disposables = []
    this._disposables.push(obj)
  }

  dispose() {
    this.group.traverse(o => {
      if (o.isMesh || o.isPoints || o.isLine) {
        o.geometry?.dispose?.()
        const mats = Array.isArray(o.material) ? o.material : [o.material]
        for (const m of mats) {
          if (!m) continue
          if (m.map) m.map.dispose?.()
          m.dispose?.()
        }
      }
    })
    this.group.removeFromParent()
  }
}

export { N_SAMPLES }
