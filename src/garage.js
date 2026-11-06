import * as THREE from 'three'
import { buildCar } from './car.js'

export class GaragePreview {
  constructor(canvas) {
    this.canvas = canvas
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    this.camera.position.set(4.8, 2.9, 7.2)
    this.camera.lookAt(0, 0.6, 0)
    this.cameraTarget = { azimuth: 0.59, elevation: 0.27 }
    this.cameraCurrent = { ...this.cameraTarget }
    this.cameraRadius = 8.7
    this.cameraCurrentRadius = this.cameraRadius
    this.cameraLookAt = new THREE.Vector3(0, 0.6, 0)
    this.dragging = false
    this.lastPointerX = 0
    this.bindCameraControls()
    const hemi = new THREE.HemisphereLight(0x8c9cb5, 0x1a0f0c, 0.75)
    this.scene.add(hemi)
    const key = new THREE.DirectionalLight(0xffb080, 2.1)
    key.position.set(4, 7, 5)
    this.scene.add(key)
    const rim = new THREE.PointLight(0xff3b30, 2.6, 16)
    rim.position.set(-4, 2, -3)
    this.scene.add(rim)
    const blue = new THREE.PointLight(0x3aa8ff, 1.4, 18)
    blue.position.set(5, 2, -4)
    this.scene.add(blue)
    this.rings = new THREE.Group()
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(2.5 + i * 0.9, 2.54 + i * 0.9, 48), new THREE.MeshBasicMaterial({ color: i === 0 ? 0xc99c42 : 0x6d2727, transparent: true, opacity: i === 0 ? 0.55 : 0.25, side: THREE.DoubleSide }))
      ring.rotation.x = -Math.PI / 2
      ring.position.y = 0.01
      this.rings.add(ring)
    }
    this.scene.add(this.rings)
    const floor = new THREE.Mesh(new THREE.CircleGeometry(11, 40), new THREE.MeshLambertMaterial({ color: 0x181514 }))
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.02
    this.scene.add(floor)
    this.car = null
    this.active = false
    this.t = 0
    this.clock = new THREE.Clock()
    this.resize()
  }

  setVehicle(vehicle) {
    if (this.car) {
      this.scene.remove(this.car)
      this.car.traverse(o => {
        if (o.isMesh) {
          o.geometry?.dispose?.()
          if (o.material?.map) o.material.map.dispose?.()
          o.material?.dispose?.()
        }
      })
    }
    this.car = buildCar(vehicle, { beams: true, boss: true })
    this.car.position.y = 0.12
    this.car.rotation.y = -0.5
    this.scene.add(this.car)
  }

  bindCameraControls() {
    this.canvas.style.touchAction = 'none'
    this.canvas.addEventListener('pointerdown', event => {
      if (event.button !== 0) return
      this.dragging = true
      this.lastPointerX = event.clientX
      this.lastPointerY = event.clientY
      this.canvas.setPointerCapture(event.pointerId)
    })
    this.canvas.addEventListener('pointermove', event => {
      if (!this.dragging) return
      const dx = event.clientX - this.lastPointerX
      const dy = event.clientY - this.lastPointerY
      this.lastPointerX = event.clientX
      this.lastPointerY = event.clientY
      this.cameraTarget.azimuth -= dx * 0.008
      this.cameraTarget.elevation = THREE.MathUtils.clamp(this.cameraTarget.elevation + dy * 0.006, -0.02, 0.85)
    })
    const stopDrag = () => { this.dragging = false }
    this.canvas.addEventListener('pointerup', stopDrag)
    this.canvas.addEventListener('pointercancel', stopDrag)
    this.canvas.addEventListener('wheel', event => {
      event.preventDefault()
      this.cameraRadius = THREE.MathUtils.clamp(this.cameraRadius + event.deltaY * 0.008, 6, 12)
    }, { passive: false })

    this.canvas.parentElement?.querySelectorAll('[data-camera-angle]').forEach(button => {
      button.addEventListener('click', () => {
        const presets = {
          front: { azimuth: 0.59, elevation: 0.27 },
          side: { azimuth: Math.PI / 2, elevation: 0.2 },
          rear: { azimuth: Math.PI, elevation: 0.24 }
        }
        const preset = presets[button.dataset.cameraAngle]
        if (preset) this.cameraTarget = { ...preset }
        else if (button.dataset.cameraAngle === 'reset') {
          this.cameraTarget = { azimuth: 0.59, elevation: 0.27 }
          this.cameraRadius = 8.7
        }
      })
    })
  }

  resize() {
    const parent = this.canvas.parentElement
    if (!parent) return
    const w = parent.clientWidth || 600
    const h = parent.clientHeight || 360
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.fov = w / h < 1 ? 46 : 34
    this.camera.updateProjectionMatrix()
  }

  start() {
    if (this.active) return
    this.active = true
    this.clock.getDelta()
    this.loop()
  }

  stop() { this.active = false; if (this.raf) cancelAnimationFrame(this.raf) }

  loop() {
    if (!this.active) return
    this.raf = requestAnimationFrame(() => this.loop())
    const dt = Math.min(0.05, this.clock.getDelta())
    this.t += dt
    const cameraEase = 1 - Math.exp(-8 * dt)
    const angleDelta = THREE.MathUtils.euclideanModulo(this.cameraTarget.azimuth - this.cameraCurrent.azimuth + Math.PI, Math.PI * 2) - Math.PI
    this.cameraCurrent.azimuth += angleDelta * cameraEase
    this.cameraCurrent.elevation += (this.cameraTarget.elevation - this.cameraCurrent.elevation) * cameraEase
    this.cameraCurrentRadius += (this.cameraRadius - this.cameraCurrentRadius) * cameraEase
    const horizontalRadius = Math.cos(this.cameraCurrent.elevation) * this.cameraCurrentRadius
    this.camera.position.set(
      Math.sin(this.cameraCurrent.azimuth) * horizontalRadius,
      this.cameraLookAt.y + Math.sin(this.cameraCurrent.elevation) * this.cameraCurrentRadius,
      Math.cos(this.cameraCurrent.azimuth) * horizontalRadius
    )
    this.camera.lookAt(this.cameraLookAt)
    if (this.car) {
      this.car.position.y = 0.12 + Math.sin(this.t * 0.8) * 0.02
      for (const w of this.car.userData.wheels || []) w.children[0].rotation.y += dt * 0.3
    }
    this.rings.rotation.y += dt * 0.04
    this.renderer.render(this.scene, this.camera)
  }
}
