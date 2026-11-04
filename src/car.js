import * as THREE from 'three'

const geoCache = new Map()
function box(w, h, d) {
  const k = `b${w}_${h}_${d}`
  if (!geoCache.has(k)) geoCache.set(k, new THREE.BoxGeometry(w, h, d))
  return geoCache.get(k)
}

function mat(color, opts = {}) {
  return new THREE.MeshLambertMaterial({ color, ...opts })
}

function addBox(g, w, h, d, x, y, z, material) {
  const m = new THREE.Mesh(box(w, h, d), material)
  m.position.set(x, y, z)
  g.add(m)
  return m
}

function wheel(x, z, r, w, dark, rim) {
  const group = new THREE.Group()
  const tireGeo = new THREE.CylinderGeometry(r, r, w, 12)
  const tire = new THREE.Mesh(tireGeo, dark)
  tire.rotation.z = Math.PI / 2
  tire.castShadow = false
  group.add(tire)
  const rimGeo = new THREE.CylinderGeometry(r * 0.56, r * 0.56, w + 0.02, 8)
  const rm = new THREE.Mesh(rimGeo, rim)
  rm.rotation.z = Math.PI / 2
  group.add(rm)
  for (let i = 0; i < 5; i++) {
    const spoke = addBox(group, 0.02, r * 0.86, 0.09, 0, 0, 0, rim)
    spoke.rotation.x = (i / 5) * Math.PI
  }
  group.position.set(x, r, z)
  return group
}

export function buildCar(vehicle, opts = {}) {
  const v = vehicle || {}
  const color = new THREE.Color(v.color || '#7b3b2a')
  const accent = new THREE.Color(v.accent || '#d9a441')
  const bodyMat = mat(color)
  const darkMat = mat('#141416')
  const glassMat = mat('#10151c', { transparent: true, opacity: 0.9 })
  const accentMat = mat(accent, { emissive: accent.clone().multiplyScalar(0.5) })
  const lightMat = new THREE.MeshBasicMaterial({ color: '#fff4cf' })
  const tailMat = new THREE.MeshBasicMaterial({ color: '#ff2b1d' })
  const rimMat = mat('#8a8478')
  const group = new THREE.Group()
  const shape = v.shape || 'muscle'
  const wheels = []

  if (shape === 'truck') {
    addBox(group, 2.3, 0.55, 4.7, 0, 0.78, 0, bodyMat)
    addBox(group, 2.35, 0.5, 2.5, 0, 1.16, -0.9, bodyMat)
    addBox(group, 2.0, 0.62, 1.25, 0, 1.22, 1.55, bodyMat)
    addBox(group, 1.85, 0.5, 1.35, 0, 1.7, -0.9, glassMat)
    addBox(group, 2.36, 0.16, 4.75, 0, 0.52, 0, darkMat)
    addBox(group, 2.5, 0.18, 0.4, 0, 0.86, 2.3, darkMat) // bull bar
    addBox(group, 0.22, 0.55, 0.22, -0.9, 0.85, 2.35, darkMat)
    addBox(group, 0.22, 0.55, 0.22, 0.9, 0.85, 2.35, darkMat)
    addBox(group, 0.35, 0.55, 2.4, 0, 1.5, -0.9, accentMat) // roof rack
    for (const x of [-0.98, 0.98]) for (const z of [-1.6, 1.65]) wheels.push(wheel(x, z, 0.56, 0.42, darkMat, rimMat))
    // exhaust stacks
    addBox(group, 0.16, 0.85, 0.16, -0.85, 1.65, -0.2, rimMat)
    addBox(group, 0.16, 0.85, 0.16, 0.85, 1.65, -0.2, rimMat)
  } else if (shape === 'buggy') {
    addBox(group, 2.1, 0.42, 3.7, 0, 0.78, 0, bodyMat)
    addBox(group, 1.5, 0.45, 1.5, 0, 1.16, -0.55, bodyMat)
    addBox(group, 1.7, 0.52, 0.9, 0, 1.13, 0.9, bodyMat)
    addBox(group, 1.3, 0.4, 1.15, 0, 1.53, -0.55, glassMat)
    // roll bars
    const barMat = mat('#35383a')
    addBox(group, 2.0, 0.1, 0.1, 0, 1.62, -0.4, barMat)
    addBox(group, 0.1, 0.7, 0.1, -0.95, 1.3, -0.4, barMat)
    addBox(group, 0.1, 0.7, 0.1, 0.95, 1.3, -0.4, barMat)
    addBox(group, 0.1, 0.7, 0.1, -0.95, 1.3, 0.5, barMat)
    addBox(group, 0.1, 0.7, 0.1, 0.95, 1.3, 0.5, barMat)
    addBox(group, 2.1, 0.14, 0.18, 0, 1.1, 1.9, accentMat)
    for (const x of [-1.08, 1.08]) for (const z of [-1.42, 1.42]) wheels.push(wheel(x, z, 0.62, 0.5, darkMat, accentMat))
  } else if (shape === 'sedan') {
    addBox(group, 2.08, 0.52, 4.35, 0, 0.73, 0, bodyMat)
    addBox(group, 1.86, 0.55, 2.1, 0, 1.15, -0.15, bodyMat)
    addBox(group, 1.7, 0.38, 1.85, 0, 1.5, -0.15, glassMat)
    addBox(group, 2.02, 0.12, 4.4, 0, 0.55, 0, darkMat)
    addBox(group, 1.5, 0.12, 0.8, 0, 1.22, -2.1, accentMat)
    for (const x of [-1.02, 1.02]) for (const z of [-1.42, 1.42]) wheels.push(wheel(x, z, 0.48, 0.34, darkMat, rimMat))
  } else if (shape === 'exotic') {
    addBox(group, 2.2, 0.36, 4.5, 0, 0.62, 0, bodyMat)
    addBox(group, 1.55, 0.48, 1.65, 0, 1.02, -0.45, bodyMat)
    addBox(group, 1.35, 0.32, 1.35, 0, 1.32, -0.45, glassMat)
    addBox(group, 1.7, 0.2, 1.2, 0, 0.83, 1.5, bodyMat) // wedge hood
    addBox(group, 2.24, 0.09, 1.45, 0, 0.84, -1.95, accentMat) // wing
    addBox(group, 0.12, 0.42, 0.3, -0.92, 0.76, -1.95, accentMat)
    addBox(group, 0.12, 0.42, 0.3, 0.92, 0.76, -1.95, accentMat)
    addBox(group, 1.9, 0.08, 0.55, 0, 0.38, 2.35, darkMat) // splitter
    for (const x of [-1.06, 1.06]) for (const z of [-1.5, 1.46]) wheels.push(wheel(x, z, 0.5, 0.38, darkMat, accentMat))
  } else {
    // muscle
    addBox(group, 2.16, 0.5, 4.4, 0, 0.72, 0, bodyMat)
    addBox(group, 1.78, 0.52, 2.0, 0, 1.13, -0.35, bodyMat)
    addBox(group, 1.6, 0.38, 1.7, 0, 1.45, -0.35, glassMat)
    addBox(group, 1.7, 0.18, 1.35, 0, 0.86, 1.55, bodyMat)
    addBox(group, 2.0, 0.4, 0.14, 0, 0.5, 2.28, darkMat) // grille
    addBox(group, 1.75, 0.06, 0.6, 0, 0.52, -2.15, accentMat) // rear diffuser
    addBox(group, 0.18, 0.08, 1.1, -0.72, 1.0, 1.25, accentMat) // hood stripe
    addBox(group, 0.18, 0.08, 1.1, 0.72, 1.0, 1.25, accentMat)
    for (const x of [-1.02, 1.02]) for (const z of [-1.45, 1.48]) wheels.push(wheel(x, z, 0.49, 0.36, darkMat, rimMat))
  }

  // lights
  const yFront = shape === 'truck' ? 1.28 : shape === 'buggy' ? 1.05 : 0.8
  const zFront = shape === 'truck' ? 2.38 : shape === 'buggy' ? 1.92 : 2.27
  for (const x of [-0.68, 0.68]) {
    addBox(group, 0.34, 0.16, 0.08, x, yFront, zFront, lightMat)
    if (shape !== 'exotic') addBox(group, 0.36, 0.16, 0.08, x, yFront, -2.27, tailMat)
  }
  if (shape === 'exotic') {
    addBox(group, 1.8, 0.1, 0.05, 0, 0.78, 2.26, new THREE.MeshBasicMaterial({ color: '#bfeaff' }))
    addBox(group, 1.7, 0.08, 0.05, 0, 0.78, -2.28, tailMat)
    // glowing underlight
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 4.8), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.22, depthWrite: false }))
    glow.rotation.x = -Math.PI / 2
    glow.position.y = 0.13
    group.add(glow)
  }

  // spikes / battle damage flavor
  if (v.spikes || v.shape === 'truck' || v.id === 'wool_reaper' || v.id === 'beast_titan') {
    const spikeMat = mat('#b9b0a0')
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.42, 5), spikeMat)
      s.position.set(-0.8 + i * 0.4, 1.22, 2.2)
      s.rotation.x = Math.PI / 2
      group.add(s)
    }
  }

  // decals / roof number
  if (opts.boss) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.7, 4), accentMat)
    fin.position.set(0, 1.65, -0.35)
    group.add(fin)
  }

  // headlight cone in menu, not race
  if (opts.beams) {
    for (const x of [-0.55, 0.55]) {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(1.4, 9, 12, 1, true),
        new THREE.MeshBasicMaterial({ color: '#ffe7a8', transparent: true, opacity: 0.045, depthWrite: false, side: THREE.DoubleSide })
      )
      cone.rotation.x = Math.PI / 2
      cone.position.set(x, 0.8, 6.9)
      group.add(cone)
    }
  }

  group.userData.wheels = wheels
  group.userData.bodyMat = bodyMat
  group.userData.accentMat = accentMat
  group.userData.tailMat = tailMat
  group.traverse(o => { if (o.isMesh) { o.frustumCulled = true } })
  return group
}

export function spinWheels(car, speed, dt) {
  const wheels = car?.userData?.wheels
  if (!wheels) return
  const spin = speed * dt * 1.9
  for (const w of wheels) w.children[0].rotation.y += spin
}

export function makeSkidMark(color = '#1a1a1a') {
  const g = new THREE.PlaneGeometry(0.32, 1.4)
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.34, depthWrite: false })
  return new THREE.Mesh(g, m)
}
