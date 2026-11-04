import * as THREE from 'three';
import { createSparkTexture, createSmokeTexture, createRingTexture, createDecalTexture } from './textures.js';

const MAX_SPARKS = 900;

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;

    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(MAX_SPARKS * 3);
    this.col = new Float32Array(MAX_SPARKS * 3);
    this.size = new Float32Array(MAX_SPARKS);
    this.alpha = new Float32Array(MAX_SPARKS);
    this.vel = new Float32Array(MAX_SPARKS * 3);
    this.life = new Float32Array(MAX_SPARKS);
    this.maxLife = new Float32Array(MAX_SPARKS);
    this.baseSize = new Float32Array(MAX_SPARKS);
    this.gravity = new Float32Array(MAX_SPARKS);
    this.cursor = 0;
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    geo.setDrawRange(0, MAX_SPARKS);

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTex: { value: createSparkTexture() } },
      vertexShader: `
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (280.0 / max(-mv.z, 2.0));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform sampler2D uTex; varying vec3 vColor; varying float vAlpha;
        void main(){
          vec4 t = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(vColor * t.rgb, t.a * vAlpha);
          if (gl_FragColor.a < 0.01) discard;
        }`,
    });
    this.sparkPoints = new THREE.Points(geo, mat);
    this.sparkPoints.frustumCulled = false;
    this.scene.add(this.sparkPoints);

    this._buildSmoke();
    this._buildShockwaves();
    this._buildTracers();
    this._buildDecals();
    this._buildDebris();
    this._buildLights();
  }

  _buildSmoke() {
    const tex = createSmokeTexture();
    this.smoke = [];
    for (let i = 0; i < 42; i++) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, transparent: true, opacity: 0, depthWrite: false,
        color: 0x9fb6c0, blending: THREE.NormalBlending, rotation: Math.random() * 6.28,
      }));
      m.visible = false;
      this.scene.add(m);
      this.smoke.push({ m, life: 0, maxLife: 1, vel: new THREE.Vector3(), grow: 1, baseScale: 1 });
    }
    this.smokeCursor = 0;
  }

  _buildShockwaves() {
    const tex = createRingTexture();
    this.waves = [];
    for (let i = 0; i < 10; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: tex, transparent: true, opacity: 0, depthWrite: false,
        blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false, color: 0xffa050,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      this.scene.add(m);
      this.waves.push({ m, life: 0, maxLife: 1, size: 1 });
    }
    this.waveCursor = 0;
  }

  _buildTracers() {
    const geo = new THREE.CylinderGeometry(0.012, 0.012, 1, 5, 1, true);
    this.tracers = [];
    for (let i = 0; i < 20; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffd9a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
        depthWrite: false, toneMapped: false, side: THREE.DoubleSide,
      });
      const m = new THREE.Mesh(geo, mat);
      m.visible = false;
      this.scene.add(m);
      this.tracers.push({ m, life: 0, maxLife: 0.08 });
    }
    this.tracerCursor = 0;
  }

  _buildDecals() {
    const hole = createDecalTexture(0);
    const scorch = createDecalTexture(1);
    this.decals = [];
    for (let i = 0; i < 46; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: i % 4 === 0 ? scorch : hole,
        transparent: true, opacity: 0, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
        toneMapped: false, color: 0xffffff,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 0.32), mat);
      m.visible = false;
      this.scene.add(m);
      this.decals.push({ m, life: 0, maxLife: 26 });
    }
    this.decalCursor = 0;
  }

  _buildDebris() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x39434b, roughness: 0.5, metalness: 0.8 });
    this.debris = [];
    for (let i = 0; i < 32; i++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.18), mat);
      m.visible = false;
      this.scene.add(m);
      this.debris.push({ m, vel: new THREE.Vector3(), spin: new THREE.Vector3(), life: 0, maxLife: 1.5 });
    }
    this.debrisCursor = 0;
  }

  _buildLights() {
    this.lights = [];
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xffa050, 0, 14, 2);
      l.position.set(0, 2, 0);
      this.scene.add(l);
      this.lights.push({ l, life: 0 });
    }
    this.lightCursor = 0;
  }

  /* ----------------------------------------------------------------- */

  spawnSparks(pos, normal, count = 10, options = {}) {
    const {
      color = new THREE.Color(0xffc070), speed = 5, size = 0.12,
      spread = 1, gravity = 7, life = 0.5, normalBias = 0.6,
    } = options;
    for (let i = 0; i < count; i++) {
      const idx = this.cursor;
      this.cursor = (this.cursor + 1) % MAX_SPARKS;
      const i3 = idx * 3;
      this.pos[i3] = pos.x + (Math.random() - 0.5) * 0.12;
      this.pos[i3 + 1] = pos.y + (Math.random() - 0.5) * 0.12;
      this.pos[i3 + 2] = pos.z + (Math.random() - 0.5) * 0.12;
      const d = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      if (normal) d.addScaledVector(normal, normalBias).normalize();
      d.x += (Math.random() - 0.5) * spread;
      d.y += (Math.random() - 0.5) * spread;
      d.z += (Math.random() - 0.5) * spread;
      d.normalize();
      const sp = speed * (0.35 + Math.random());
      this.vel[i3] = d.x * sp;
      this.vel[i3 + 1] = d.y * sp;
      this.vel[i3 + 2] = d.z * sp;
      this.col[i3] = color.r;
      this.col[i3 + 1] = color.g;
      this.col[i3 + 2] = color.b;
      this.baseSize[idx] = size * (0.5 + Math.random());
      this.size[idx] = this.baseSize[idx];
      this.life[idx] = life * (0.5 + Math.random());
      this.maxLife[idx] = this.life[idx];
      this.alpha[idx] = 1;
      this.gravity[idx] = gravity;
    }
  }

  tracer(from, to, color = 0xffd9a0) {
    const t = this.tracers[this.tracerCursor];
    this.tracerCursor = (this.tracerCursor + 1) % this.tracers.length;
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    if (len < 0.01) return;
    dir.normalize();
    t.m.position.copy(from).addScaledVector(dir, len / 2);
    t.m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    t.m.scale.set(1, len, 1);
    t.m.material.color.set(color);
    t.m.material.opacity = 0.9;
    t.m.visible = true;
    t.life = t.maxLife;
  }

  impact(pos, normal, color = 0xffc070, big = false) {
    this.spawnSparks(pos, normal, big ? 20 : 9, {
      color: new THREE.Color(color), speed: big ? 7 : 5, size: big ? 0.16 : 0.1,
      life: big ? 0.7 : 0.45, normalBias: 0.9,
    });
    this.smokePuff(pos, normal, big ? 0.55 : 0.25);
    const d = this.decals[this.decalCursor];
    this.decalCursor = (this.decalCursor + 1) % this.decals.length;
    d.m.position.copy(pos).addScaledVector(normal, 0.012);
    d.m.lookAt(pos.clone().add(normal));
    d.m.rotateZ(Math.random() * TAU);
    d.m.scale.setScalar(big ? 1.8 : 0.9 + Math.random() * 0.3);
    d.m.material.opacity = 0.9;
    d.m.visible = true;
    d.life = d.maxLife;
  }

  smokePuff(pos, normal, scale = 0.3, color = 0x9fb6c0) {
    const s = this.smoke[this.smokeCursor];
    this.smokeCursor = (this.smokeCursor + 1) % this.smoke.length;
    s.m.visible = true;
    s.m.position.copy(pos);
    s.m.material.color.set(color);
    s.m.material.opacity = 0.35;
    s.baseScale = scale;
    s.m.scale.setScalar(scale);
    s.life = 0.7 + Math.random() * 0.5;
    s.maxLife = s.life;
    s.vel.set((Math.random() - 0.5) * 0.4, 0.4 + Math.random() * 0.5, (Math.random() - 0.5) * 0.4);
    if (normal) s.vel.addScaledVector(normal, 0.5);
    s.grow = 1.2 + Math.random() * 1.2;
  }

  explosion(pos, scale = 1, big = false) {
    this.spawnSparks(pos, null, big ? 100 : 46, {
      color: new THREE.Color(0xff9a3c), speed: (big ? 14 : 8) * scale, size: 0.2 * scale,
      life: 0.9, gravity: 9, spread: 1.7,
    });
    this.spawnSparks(pos, null, big ? 40 : 16, {
      color: new THREE.Color(0x8ff7ff), speed: 9 * scale, size: 0.14 * scale,
      life: 0.7, gravity: 4, spread: 1.4,
    });
    for (let i = 0; i < (big ? 12 : 5); i++) {
      this.smokePuff(
        pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2)),
        null, (0.5 + Math.random() * 0.8) * scale, 0x5d6970
      );
    }
    const w = this.waves[this.waveCursor];
    this.waveCursor = (this.waveCursor + 1) % this.waves.length;
    w.m.position.copy(pos);
    w.m.position.y = Math.max(0.06, pos.y - 0.5);
    w.m.material.color.set(big ? 0xffb060 : 0xffa050);
    w.m.visible = true;
    w.life = 0.55;
    w.maxLife = 0.55;
    w.size = (big ? 8 : 3.2) * scale;
    w.m.scale.setScalar(0.2);
    w.m.material.opacity = 0.9;

    const l = this.lights[this.lightCursor];
    this.lightCursor = (this.lightCursor + 1) % this.lights.length;
    l.l.position.copy(pos);
    l.l.intensity = big ? 90 : 40;
    l.l.color.set(0xffa050);
    l.life = 0.4;
    this.lifeLight = l;

    for (let i = 0; i < (big ? 12 : 5); i++) {
      const d = this.debris[this.debrisCursor];
      this.debrisCursor = (this.debrisCursor + 1) % this.debris.length;
      d.m.visible = true;
      d.m.position.copy(pos);
      d.m.scale.setScalar(0.7 + Math.random() * 1.3);
      d.vel.set((Math.random() - 0.5) * 7, 2 + Math.random() * 5, (Math.random() - 0.5) * 7);
      d.vel.multiplyScalar(scale);
      d.spin.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
      d.life = 1.6;
      d.maxLife = 1.6;
    }
  }

  update(dt) {
    this.time += dt;
    // sparks
    for (let i = 0; i < MAX_SPARKS; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const i3 = i * 3;
      this.vel[i3 + 1] -= this.gravity[i] * dt;
      this.pos[i3] += this.vel[i3] * dt;
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt;
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      if (this.pos[i3 + 1] < 0.02) {
        this.pos[i3 + 1] = 0.02;
        this.vel[i3 + 1] *= -0.35;
        this.vel[i3] *= 0.7;
        this.vel[i3 + 2] *= 0.7;
      }
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = k;
      this.size[i] = this.baseSize[i] * (0.4 + k * 0.8);
    }
    const g = this.sparkPoints.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.aColor.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true;
    g.attributes.aAlpha.needsUpdate = true;

    // smoke
    for (const s of this.smoke) {
      if (!s.m.visible) continue;
      s.life -= dt;
      if (s.life <= 0) { s.m.visible = false; continue; }
      s.m.position.addScaledVector(s.vel, dt);
      s.vel.y *= 1 - dt * 0.4;
      const k = s.life / s.maxLife;
      s.m.scale.setScalar(s.baseScale * (1 + (1 - k) * s.grow * 2.6));
      s.m.material.opacity = Math.sin(k * Math.PI) * 0.3;
    }

    // shockwaves
    for (const w of this.waves) {
      if (!w.m.visible) continue;
      w.life -= dt;
      if (w.life <= 0) { w.m.visible = false; continue; }
      const k = 1 - w.life / w.maxLife;
      w.m.scale.setScalar(0.2 + k * w.size);
      w.m.material.opacity = (1 - k) * 0.8;
    }

    // tracers
    for (const t of this.tracers) {
      if (!t.m.visible) continue;
      t.life -= dt;
      if (t.life <= 0) { t.m.visible = false; continue; }
      t.m.material.opacity = Math.max(0, t.life / t.maxLife) * 0.9;
    }

    // decals
    for (const d of this.decals) {
      if (!d.m.visible) continue;
      d.life -= dt;
      if (d.life <= 0) { d.m.visible = false; continue; }
      if (d.life < 4) d.m.material.opacity = Math.max(0, d.life / 4) * 0.9;
    }

    // debris
    for (const d of this.debris) {
      if (!d.m.visible) continue;
      d.life -= dt;
      if (d.life <= 0) { d.m.visible = false; continue; }
      d.vel.y -= 12 * dt;
      d.m.position.addScaledVector(d.vel, dt);
      d.m.rotation.x += d.spin.x * dt;
      d.m.rotation.y += d.spin.y * dt;
      d.m.rotation.z += d.spin.z * dt;
      if (d.m.position.y < 0.06) {
        d.m.position.y = 0.06;
        d.vel.y = Math.abs(d.vel.y) * 0.4;
        d.vel.x *= 0.7; d.vel.z *= 0.7;
        d.spin.multiplyScalar(0.6);
      }
      if (d.life < 0.4) d.m.visible = false;
    }

    // explosion lights
    for (const l of this.lights) {
      if (l.life <= 0) { l.l.intensity = 0; continue; }
      l.life -= dt;
      l.l.intensity *= Math.max(0, 1 - dt * 8);
    }
  }
}

const TAU = Math.PI * 2;
