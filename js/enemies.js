import * as THREE from 'three';
import { createGlowTexture } from './textures.js';

const TAU = Math.PI * 2;

const TYPES = {
  wasp: {
    name: 'WASP', hp: 42, speed: 5.2, hover: true, radius: 0.85, score: 100,
    preferred: 11, attackRange: 24, fireDelay: 1.6, damage: 8, projectileSpeed: 19, color: 0xff2e88,
  },
  warden: {
    name: 'WARDEN', hp: 135, speed: 2.3, hover: false, radius: 1.1, score: 250,
    preferred: 9, attackRange: 30, fireDelay: 2.2, damage: 12, projectileSpeed: 22, color: 0xffb43c,
  },
  titan: {
    name: 'TITAN', hp: 620, speed: 1.35, hover: false, radius: 2.3, score: 1500,
    preferred: 13, attackRange: 40, fireDelay: 1.7, damage: 18, projectileSpeed: 24, color: 0xff4d5e,
  },
};

let glowPink, glowCyan, glowAmber, glowRed;

function initTextures() {
  if (glowPink) return;
  glowPink = createGlowTexture('#ff78c4');
  glowCyan = createGlowTexture('#9ffaff');
  glowAmber = createGlowTexture('#ffd08a');
  glowRed = createGlowTexture('#ff8a94');
}

function meshBox(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}

function tagEnemy(root, enemy) {
  // Only solid meshes take hits. Sprites (muzzle glow, eye bloom) cannot be
  // raycast without a camera and should never absorb bullets anyway.
  enemy.hitMeshes = [];
  root.traverse(o => {
    if (!o.isMesh || o.userData.noHit) return;
    o.userData.enemy = enemy;
    enemy.hitMeshes.push(o);
  });
}

export class Enemy {
  constructor(scene, type, pos, wave, world) {
    initTextures();
    this.scene = scene;
    this.type = type;
    this.def = TYPES[type];
    this.wave = wave;
    this.world = world;
    this.maxHealth = this.def.hp * (1 + Math.max(0, wave - 1) * 0.1);
    this.health = this.maxHealth;
    this.alive = true;
    this.dying = false;
    this.spawnT = 0;
    this.spawnDuration = 0.8;
    this.spawned = false;
    this.time = Math.random() * 10;
    this.fireTimer = 0.6 + Math.random() * 1.2;
    this.phase = Math.random() * TAU;
    this.strafeDir = Math.random() > 0.5 ? 1 : -1;
    this.strafeTimer = 2 + Math.random() * 3;
    this.radius = this.def.radius;
    this.hitMats = [];
    this.eyeGlow = null;
    this.attackAnim = 0;

    this.group = new THREE.Group();
    this.group.position.copy(pos);
    this.group.position.y = this.def.hover ? 2.2 : 0;
    this.baseY = this.group.position.y;
    this.scene.add(this.group);

    if (type === 'wasp') this._buildWasp();
    else if (type === 'warden') this._buildWarden();
    else this._buildTitan();

    this._buildHealthBar();
    tagEnemy(this.group, this);
    this.group.visible = false;
    this._buildSpawnPortal(pos);
  }

  /* ------------------------------ models ------------------------------ */

  _materials(accent) {
    const armor = new THREE.MeshStandardMaterial({
      color: 0x3b4751, roughness: 0.4, metalness: 0.68, envMapIntensity: 1.6,
      emissive: 0x0a141b, emissiveIntensity: 0.5,
    });
    const armorLight = new THREE.MeshStandardMaterial({
      color: 0x66757f, roughness: 0.38, metalness: 0.62, envMapIntensity: 1.5,
      emissive: 0x0d1a22, emissiveIntensity: 0.45,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x151d24, roughness: 0.58, metalness: 0.6, envMapIntensity: 1.1,
    });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x3a1018, emissive: accent, emissiveIntensity: 2.2, roughness: 0.4, metalness: 0.5 });
    const glow = new THREE.MeshBasicMaterial({ color: accent, toneMapped: false });
    this.hitMats.push(
      { mat: armor, base: new THREE.Color(0x0a141b), intensity: 0.5 },
      { mat: armorLight, base: new THREE.Color(0x0d1a22), intensity: 0.45 }
    );
    return { armor, armorLight, dark, accent: accentMat, glow };
  }

  _buildWasp() {
    const { armor, armorLight, dark, accent, glow } = this._materials(this.def.color);
    this.coreMat = glow;
    const body = new THREE.Mesh(new THREE.OctahedronGeometry(0.62, 0), armor);
    body.scale.set(1, 0.82, 1.35);
    this.group.add(body);

    // armour panels
    for (const s of [-1, 1]) {
      const panel = meshBox(0.42, 0.3, 0.8, armorLight, s * 0.42, 0.02, 0);
      panel.rotation.z = s * 0.28;
      this.group.add(panel);
      const fin = meshBox(0.08, 0.45, 0.58, dark, s * 0.6, 0.1, 0.18);
      fin.rotation.z = s * 0.55;
      this.group.add(fin);
    }
    const spine = meshBox(0.18, 0.18, 1.0, dark, 0, 0.16, 0.12);
    this.group.add(spine);
    for (let i = 0; i < 4; i++) {
      const ridge = meshBox(0.36, 0.06, 0.08, accent, 0, 0.25, -0.25 + i * 0.18);
      this.group.add(ridge);
    }

    // glowing eye
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), glow);
    eye.position.set(0, -0.02, 0.63);
    eye.userData.crit = true;
    this.group.add(eye);
    this.eye = eye;
    this.eyeGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowPink, color: this.def.color, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.eyeGlow.scale.set(1.6, 1.6, 1);
    this.eyeGlow.position.copy(eye.position);
    this.group.add(this.eyeGlow);

    // rotors: four arms with rings
    this.rotors = [];
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU + Math.PI / 4;
      const arm = new THREE.Group();
      const strut = meshBox(0.78, 0.07, 0.12, dark, 0.4, 0, 0);
      arm.add(strut);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.035, 5, 14), armorLight);
      ring.rotation.x = Math.PI / 2;
      ring.position.x = 0.78;
      arm.add(ring);
      const rotor = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.012, 0.05), new THREE.MeshStandardMaterial({ color: 0x9aa8b0, metalness: 0.8, roughness: 0.3, transparent: true, opacity: 0.55 }));
      rotor.position.x = 0.78;
      rotor.position.y = 0.02;
      arm.add(rotor);
      this.rotors.push(rotor);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), glow);
      tip.position.set(0.78, 0, 0);
      tip.position.y = 0.03;
      arm.add(tip);
      arm.rotation.y = a;
      arm.rotation.z = -0.12;
      this.group.add(arm);
    }

    // underslung plasma cannon
    const gun = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.095, 0.6, 10), armorLight);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.z = 0.25;
    gun.add(barrel);
    const muzzle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 5, 12), glow);
    muzzle.position.z = 0.55;
    gun.add(muzzle);
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.025, 5, 16), accent);
    coil.position.z = 0.36;
    gun.add(coil);
    gun.position.set(0, -0.4, 0.15);
    this.group.add(gun);
    this.gun = gun;

    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, -0.4, 0.95);
    this.group.add(this.muzzle);

    this.muzzleFlash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowPink, color: this.def.color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.muzzleFlash.scale.set(1.8, 1.8, 1);
    this.muzzleFlash.position.copy(this.muzzle.position);
    this.group.add(this.muzzleFlash);

    const underGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowPink, color: this.def.color, transparent: true, opacity: 0.35,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    underGlow.scale.set(2.6, 2.6, 1);
    underGlow.position.y = -0.65;
    this.group.add(underGlow);
    this.underGlow = underGlow;
  }

  _buildWarden() {
    const { armor, armorLight, dark, accent, glow } = this._materials(this.def.color);
    this.coreMat = glow;

    const pelvis = new THREE.Group();
    pelvis.position.y = 1.3;
    this.group.add(pelvis);
    const hip = meshBox(0.9, 0.35, 0.55, armor, 0, 0, 0);
    pelvis.add(hip);
    pelvis.add(meshBox(0.6, 0.2, 0.4, accent, 0, 0, 0.3));

    const torso = new THREE.Group();
    torso.position.y = 1.78;
    this.group.add(torso);
    torso.add(meshBox(1.15, 0.85, 0.65, armor, 0, 0, 0));
    torso.add(meshBox(0.85, 0.28, 0.7, armorLight, 0, 0.44, 0));
    torso.add(meshBox(0.55, 0.5, 0.1, armorLight, 0, -0.03, 0.35));
    torso.add(meshBox(0.3, 0.12, 0.05, glow, 0, 0.05, 0.41));
    // shoulder pauldrons
    for (const s of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(s * 0.72, 0.35, 0);
      const pad = meshBox(0.42, 0.4, 0.6, armorLight, 0, 0, 0);
      pad.rotation.z = s * -0.18;
      sh.add(pad);
      sh.add(meshBox(0.1, 0.25, 0.5, accent, s * 0.22, 0.1, 0));
      torso.add(sh);
    }
    // head
    const head = new THREE.Group();
    head.position.set(0, 0.72, 0.02);
    torso.add(head);
    const skull = meshBox(0.42, 0.32, 0.45, armor, 0, 0, 0);
    skull.userData.crit = true;
    head.add(skull);
    const visor = meshBox(0.32, 0.09, 0.04, glow, 0, 0.02, 0.235);
    visor.userData.crit = true;
    head.add(visor);
    head.add(meshBox(0.44, 0.06, 0.46, armorLight, 0, 0.18, 0));
    this.head = head;

    // antenna
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 4), dark);
    antenna.position.set(0.16, 0.38, 0);
    head.add(antenna);
    const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), glow);
    antTip.position.set(0.16, 0.64, 0);
    head.add(antTip);

    // arms
    this.arms = [];
    for (const s of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(s * 0.72, 1.98, 0);
      const upper = meshBox(0.3, 0.65, 0.35, armor, 0, -0.3, 0);
      arm.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -0.62;
      const fore = meshBox(0.26, 0.55, 0.3, armorLight, 0, -0.25, 0.1);
      fore.rotation.x = -0.35;
      elbow.add(fore);
      if (s === 1) {
        // cannon arm
        const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.85, 10), dark);
        cannon.rotation.x = Math.PI / 2;
        cannon.position.set(0, -0.4, 0.52);
        elbow.add(cannon);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 5, 12), glow);
        ring.position.set(0, -0.4, 0.9);
        elbow.add(ring);
        const muzzle = new THREE.Object3D();
        muzzle.position.set(0, -0.4, 1.0);
        elbow.add(muzzle);
        this.muzzle = muzzle;
      } else {
        const fist = meshBox(0.32, 0.3, 0.32, armor, 0, -0.65, 0.15);
        elbow.add(fist);
      }
      arm.add(elbow);
      this.group.add(arm);
      this.arms.push(arm);
    }

    // legs
    this.legs = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(s * 0.35, 1.2, 0);
      const thigh = meshBox(0.38, 0.75, 0.45, armor, 0, -0.36, 0);
      leg.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.74;
      const shin = meshBox(0.32, 0.7, 0.4, armorLight, 0, -0.34, 0.02);
      knee.add(shin);
      const foot = meshBox(0.46, 0.16, 0.72, dark, 0, -0.7, 0.12);
      knee.add(foot);
      knee.add(meshBox(0.34, 0.06, 0.05, glow, 0, -0.55, 0.23));
      leg.add(knee);
      this.group.add(leg);
      this.legs.push({ leg, knee, s });
    }

    const back = meshBox(0.5, 0.6, 0.25, dark, 0, 1.9, -0.38);
    this.group.add(back);
    const reactor = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 10), accent);
    reactor.rotation.x = Math.PI / 2;
    reactor.position.set(0, 1.9, -0.52);
    this.group.add(reactor);

    this.muzzleFlash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowAmber, color: this.def.color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.muzzleFlash.scale.set(2.4, 2.4, 1);
    this.muzzleFlash.position.set(0.72, 1.55, 1.6);
    this.group.add(this.muzzleFlash);
  }

  _buildTitan() {
    const { armor, armorLight, dark, accent, glow } = this._materials(this.def.color);
    this.coreMat = glow;
    this.hitMats.push({ mat: armor, base: new THREE.Color(0x0a141b), intensity: 0.5 });

    // broad chest
    const torso = new THREE.Group();
    torso.position.y = 3.4;
    this.group.add(torso);
    torso.add(meshBox(2.6, 1.7, 1.4, armor, 0, 0, 0));
    torso.add(meshBox(2.0, 0.5, 1.45, armorLight, 0, 0.85, 0));
    torso.add(meshBox(1.2, 0.9, 0.1, armorLight, 0, -0.05, 0.72));
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 8), glow);
    core.position.set(0, 0.0, 0.8);
    core.userData.crit = true;
    torso.add(core);
    this.core = core;
    this.eyeGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowRed, color: 0xff4d5e, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.eyeGlow.scale.set(3.5, 3.5, 1);
    this.eyeGlow.position.copy(core.position);
    torso.add(this.eyeGlow);

    // head
    const head = new THREE.Group();
    head.position.set(0, 1.15, 0.1);
    torso.add(head);
    const skull = meshBox(0.9, 0.62, 0.9, armor, 0, 0, 0);
    skull.userData.crit = true;
    head.add(skull);
    head.add(meshBox(0.7, 0.12, 0.06, glow, 0, 0.05, 0.47));
    for (const s of [-1, 1]) {
      const horn = meshBox(0.12, 0.8, 0.12, armorLight, s * 0.5, 0.5, 0);
      horn.rotation.z = -s * 0.25;
      head.add(horn);
    }
    this.head = head;

    // shoulder cannons
    this.cannons = [];
    for (const s of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(s * 1.5, 0.5, 0);
      const pad = meshBox(0.8, 0.7, 1.1, armorLight, 0, 0, 0);
      shoulder.add(pad);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 1.6, 10), dark);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.1, 0.9);
      shoulder.add(barrel);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 5, 12), glow);
      ring.position.set(0, 0.1, 1.65);
      shoulder.add(ring);
      const muzzle = new THREE.Object3D();
      muzzle.position.set(0, 0.1, 1.8);
      shoulder.add(muzzle);
      this.cannons.push(muzzle);
      torso.add(shoulder);
    }
    this.muzzle = this.cannons[0];

    // heavy legs (4)
    this.legs = [];
    for (let i = 0; i < 4; i++) {
      const s = i < 2 ? -1 : 1;
      const front = i % 2 === 0 ? 1 : -1;
      const leg = new THREE.Group();
      leg.position.set(s * 1.0, 2.6, front * 0.5);
      const thigh = meshBox(0.6, 1.4, 0.7, armor, 0, -0.7, 0);
      leg.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -1.35;
      const shin = meshBox(0.55, 1.3, 0.65, armorLight, 0, -0.65, 0);
      knee.add(shin);
      const foot = meshBox(0.8, 0.3, 1.2, dark, 0, -1.35, 0.25);
      knee.add(foot);
      knee.add(meshBox(0.5, 0.08, 0.1, glow, 0, -1.0, 0.36));
      leg.add(knee);
      this.group.add(leg);
      this.legs.push({ leg, knee, s, front });
    }

    this.muzzleFlash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowRed, color: 0xff4d5e, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.muzzleFlash.scale.set(4.5, 4.5, 1);
    this.muzzleFlash.position.set(-1.5, 3.9, 2.3);
    this.group.add(this.muzzleFlash);
  }

  _buildHealthBar() {
    this.hpBar = new THREE.Group();
    const bg = new THREE.Mesh(
      new THREE.PlaneGeometry(1.35, 0.11),
      new THREE.MeshBasicMaterial({ color: 0x05090c, transparent: true, opacity: 0.75, depthTest: false, toneMapped: false })
    );
    bg.renderOrder = 8;
    bg.userData.noHit = true;
    this.hpBar.add(bg);
    this.hpFill = new THREE.Mesh(
      new THREE.PlaneGeometry(1.28, 0.07),
      new THREE.MeshBasicMaterial({ color: 0xff4d5e, transparent: true, opacity: 0.95, depthTest: false, toneMapped: false })
    );
    this.hpFill.renderOrder = 9;
    this.hpFill.position.z = 0.001;
    this.hpFill.userData.noHit = true;
    this.hpBar.add(this.hpFill);
    this.hpBar.visible = false;
    this.hpBar.position.y = this.type === 'titan' ? 7.4 : this.type === 'wasp' ? 1.35 : 3.15;
    this.group.add(this.hpBar);
  }

  _buildSpawnPortal(pos) {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.05, 5, 40),
      new THREE.MeshBasicMaterial({ color: this.def.color, transparent: true, opacity: 0.55, toneMapped: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;
    g.add(ring);
    const ring2 = ring.clone();
    ring2.scale.setScalar(1.45);
    ring2.material = ring.material.clone();
    ring2.material.opacity = 0.22;
    g.add(ring2);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 1.1, 5, 12, 1, true),
      new THREE.MeshBasicMaterial({
        color: this.def.color, transparent: true, opacity: 0.07, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
      })
    );
    beam.position.y = 2.5;
    g.add(beam);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowPink, color: this.def.color, transparent: true, opacity: 0.16,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    glow.scale.set(4, 4, 1);
    glow.position.y = 0.3;
    g.add(glow);
    g.position.set(pos.x, 0, pos.z);
    this.scene.add(g);
    this.portal = g;
    this.portalGroup = g;
    this.portalRings = [ring, ring2];
    this.portalBeam = beam;
  }

  /* ------------------------------- AI -------------------------------- */

  update(dt, t, player, others, colliders, onFire) {
    this.time += dt;
    this.fireTimer -= dt;
    if (this.attackAnim > 0) this.attackAnim = Math.max(0, this.attackAnim - dt * 4);
    if (Math.abs((this.muzzleFlash?.material.opacity) || 0) > 0) {
      this.muzzleFlash.material.opacity = Math.max(0, this.muzzleFlash.material.opacity - dt * 12);
    }

    // spawn sequence
    if (!this.spawned) {
      this.spawnT += dt;
      const k = Math.min(1, this.spawnT / this.spawnDuration);
      const rise = 1 - Math.pow(1 - k, 3);
      this.group.visible = k > 0.35;
      this.group.position.y = this.baseY - (1 - rise) * (this.def.hover ? 2.4 : 2.8);
      this.group.scale.setScalar(0.6 + rise * 0.4);
      if (this.portal) {
        this.portalRings.forEach((r, i) => {
          r.rotation.z += dt * (i ? -2 : 3);
          const sc = 1 + Math.sin(t * 8 + i) * 0.08;
          r.scale.setScalar((i ? 1.45 : 1) * sc * (1 - k * 0.4));
          r.material.opacity = (1 - k) * 0.5;
        });
        this.portalBeam.material.opacity = (1 - k) * 0.1 + 0.02;
        this.portalBeam.scale.setScalar(1 + k * 0.6);
        this.portal.scale.setScalar(1 + k * 0.2);
        if (k >= 1) {
          this.scene.remove(this.portal);
          this.portal = null;
        }
      }
      if (k >= 1) {
        this.spawned = true;
        this.group.scale.setScalar(1);
        this.group.position.y = this.baseY;
      }
      this._animateLimbs(dt, t);
      this._updateHealthBar(player.position);
      return;
    }

    if (!this.alive) return;

    const pos = this.group.position;
    const toPlayer = new THREE.Vector3(player.position.x - pos.x, 0, player.position.z - pos.z);
    const dist = toPlayer.length();
    toPlayer.normalize();

    // steering
    const def = this.def;
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeDir *= -1;
      this.strafeTimer = 1.8 + Math.random() * 3;
    }
    let move = new THREE.Vector3();
    if (dist > def.preferred) move.add(toPlayer);
    else if (dist < def.preferred * 0.62) move.sub(toPlayer);
    const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).multiplyScalar(this.strafeDir * 0.55);
    move.add(side);
    move.normalize().multiplyScalar(def.speed);

    // separation from neighbours
    for (const other of others) {
      if (other === this || !other.alive || !other.spawned) continue;
      const dx = pos.x - other.group.position.x;
      const dz = pos.z - other.group.position.z;
      const d2 = dx * dx + dz * dz;
      const minD = this.radius + other.radius + 0.4;
      if (d2 < minD * minD && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        move.x += (dx / d) * (minD - d) * 4;
        move.z += (dz / d) * (minD - d) * 4;
      }
    }

    // movement + collision
    if (def.hover) {
      pos.x += move.x * dt * (0.7 + 0.3 * Math.sin(t * 0.7 + this.phase));
      pos.z += move.z * dt;
      const targetY = 2.1 + Math.sin(t * 2.1 + this.phase) * 0.35;
      pos.y += (targetY - pos.y) * Math.min(1, dt * 2);
    } else {
      const nx = pos.x + move.x * dt;
      const nz = pos.z + move.z * dt;
      if (!this._blocked(nx, pos.z, colliders)) pos.x = nx;
      if (!this._blocked(pos.x, nz, colliders)) pos.z = nz;
      pos.y = 0;
    }

    // keep on platform
    const maxR = 24.6;
    const r = Math.hypot(pos.x, pos.z);
    if (r > maxR) { pos.x *= maxR / r; pos.z *= maxR / r; }

    // face player
    const yaw = Math.atan2(toPlayer.x, toPlayer.z);
    this.group.rotation.y = yaw;

    this._animateLimbs(dt, t);

    // attack
    const inRange = dist < def.attackRange;
    const canSee = true;
    if (inRange && canSee && this.fireTimer <= 0) {
      this.fireTimer = def.fireDelay * (0.72 + Math.random() * 0.5);
      this.attackAnim = 1;
      this._fire(player, onFire, dist);
    }

    if (this.muzzleFlash) this.muzzleFlash.material.opacity = Math.max(0, this.muzzleFlash.material.opacity - dt * 10);
    this._updateHealthBar(player.position);
  }

  _blocked(x, z, colliders) {
    const r = this.radius;
    for (const c of colliders) {
      if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return true;
    }
    return false;
  }

  _animateLimbs(dt, t) {
    const speed = this.def.speed;
    if (this.type === 'wasp') {
      for (let i = 0; i < this.rotors.length; i++) {
        this.rotors[i].rotation.y += dt * (18 + i * 1.5);
      }
      this.group.rotation.z = Math.sin(t * 1.4 + this.phase) * 0.08;
      this.underGlow.material.opacity = 0.25 + Math.sin(t * 5 + this.phase) * 0.1;
      this.gun.position.z = 0.15 - this.attackAnim * 0.12;
      this.gun.rotation.x = -this.attackAnim * 0.12;
    } else if (this.type === 'warden') {
      const walk = Math.sin(t * 5 + this.phase);
      this.legs.forEach((l, i) => {
        const ph = i ? 0 : Math.PI;
        l.leg.rotation.x = Math.sin(t * 4.2 + ph) * 0.34;
        l.knee.rotation.x = Math.max(0, Math.cos(t * 4.2 + ph)) * 0.55;
      });
      this.group.position.y = Math.abs(Math.sin(t * 4.2)) * 0.045;
      this.arms[1].rotation.x = -0.1 - this.attackAnim * 0.15;
      this.head.rotation.y = Math.sin(t * 0.7) * 0.12;
    } else {
      this.legs.forEach((l, i) => {
        const ph = (i % 2 ? 0 : Math.PI) + (l.front > 0 ? 0.4 : 0);
        l.leg.rotation.x = Math.sin(t * 2.2 + ph) * 0.2;
        l.knee.rotation.x = Math.max(0, Math.cos(t * 2.2 + ph)) * 0.32;
      });
      this.group.position.y = Math.abs(Math.sin(t * 2.2)) * 0.08;
      this.eyeGlow.scale.setScalar(3.2 + Math.sin(t * 4) * 0.4);
      this.core.scale.setScalar(1 + Math.sin(t * 3.2) * 0.08);
      this.head.rotation.y = Math.sin(t * 0.5) * 0.15;
    }
  }

  _fire(player, onFire, dist) {
    if (!onFire) return;
    if (this.muzzleFlash) this.muzzleFlash.material.opacity = 1;
    const muzzlePos = new THREE.Vector3();
    if (this.type === 'wasp') {
      this.muzzle.getWorldPosition(muzzlePos);
    } else if (this.type === 'warden') {
      this.muzzle.getWorldPosition(muzzlePos);
    } else {
      this.cannons[(Math.random() > 0.5) ? 0 : 1].getWorldPosition(muzzlePos);
    }
    const target = player.position.clone();
    target.y = 1.25;
    if (this.type === 'titan') {
      // radial burst plus aimed shots
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * TAU + this.time * 0.4;
        const t = target.clone().add(new THREE.Vector3(Math.cos(a) * 5, 0, Math.sin(a) * 5));
        onFire(this, muzzlePos, t, this.def.projectileSpeed * 0.6, this.def.damage * 0.55, true);
      }
      onFire(this, muzzlePos, target, this.def.projectileSpeed, this.def.damage, true);
      return;
    }
    const spread = this.type === 'wasp' ? 1.1 : 0.65;
    target.x += (Math.random() - 0.5) * spread * Math.min(8, dist * 0.35);
    target.z += (Math.random() - 0.5) * spread * Math.min(8, dist * 0.35);
    onFire(this, muzzlePos, target, this.def.projectileSpeed, this.def.damage, this.type === 'warden');
  }

  _updateHealthBar(playerPos) {
    if (!this.hpBar) return;
    const pct = Math.max(0, this.health / this.maxHealth);
    this.hpBar.visible = this.spawned && this.alive && pct < 0.999;
    if (!this.hpBar.visible) return;
    this.hpFill.scale.x = Math.max(0.001, pct);
    this.hpFill.position.x = -(1 - pct) * 0.64;
    this.hpFill.material.color.setHSL(0.02 + pct * 0.33, 1, 0.55);
    this.hpBar.lookAt(playerPos.x, this.hpBar.getWorldPosition(new THREE.Vector3()).y, playerPos.z);
  }

  hit(damage, point, isCrit) {
    if (!this.alive) return { killed: false };
    this.health -= damage * (isCrit ? 1 : 1);
    // emissive hit flash
    for (const h of this.hitMats) {
      h.mat.emissive.setHex(0xffffff);
      h.mat.emissiveIntensity = 1.3;
    }
    this.flashTime = 0.07;
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
      return { killed: true };
    }
    return { killed: false };
  }

  coolFlash(dt) {
    if (this.flashTime > 0) {
      this.flashTime -= dt;
      if (this.flashTime <= 0) {
        for (const h of this.hitMats) {
          h.mat.emissive.copy(h.base);
          h.mat.emissiveIntensity = h.intensity;
        }
      }
    }
  }

  dispose() {
    this.scene.remove(this.group);
    if (this.portal) this.scene.remove(this.portal);
    this.group.traverse(o => {
      if (o.geometry) o.geometry.dispose?.();
    });
  }
}

/* ==================================================================== */

export class EnemyManager {
  constructor(scene, world, fx, audio, callbacks = {}) {
    this.scene = scene;
    this.world = world;
    this.fx = fx;
    this.audio = audio;
    this.enemies = [];
    this.projectiles = [];
    this.onDamagePlayer = callbacks.onDamagePlayer || (() => {});
    this.onKill = callbacks.onKill || (() => {});
    this.colliders = world.colliders;
    this.projectileGeo = new THREE.SphereGeometry(0.13, 8, 6);
    this.projectileCoreMat = new THREE.MeshBasicMaterial({ color: 0xfff0c0, toneMapped: false });
    this.projectileTrailTex = glowPink;
    this.projectileMats = {
      wasp: new THREE.MeshBasicMaterial({ color: 0xff5aa8, toneMapped: false }),
      warden: new THREE.MeshBasicMaterial({ color: 0xffb43c, toneMapped: false }),
      titan: new THREE.MeshBasicMaterial({ color: 0xff4d5e, toneMapped: false }),
    };
    this.projectileGlowMats = {
      wasp: new THREE.SpriteMaterial({ map: glowPink, color: 0xff2e88, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
      warden: new THREE.SpriteMaterial({ map: glowAmber, color: 0xffb43c, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
      titan: new THREE.SpriteMaterial({ map: glowRed, color: 0xff4d5e, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }),
    };
    this.raycaster = new THREE.Raycaster();
    this._tmp = new THREE.Vector3();
    this._onFire = (e, from, target, speed, damage, big) => this.fire(e, from, target, speed, damage, big);
  }

  spawn(type, position, wave) {
    const e = new Enemy(this.scene, type, position, wave, this.world);
    this.enemies.push(e);
    return e;
  }

  clear() {
    for (const e of this.enemies) e.dispose();
    this.enemies.length = 0;
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    this.projectiles.length = 0;
  }

  fire(enemy, from, target, speed, damage, isBig) {
    const dir = new THREE.Vector3().subVectors(target, from).normalize();
    const mat = this.projectileMats[enemy.type] || this.projectileMats.wasp;
    const mesh = new THREE.Mesh(this.projectileGeo, mat);
    mesh.position.copy(from);
    const glow = new THREE.Sprite(this.projectileGlowMats[enemy.type] || this.projectileGlowMats.wasp);
    glow.scale.setScalar(isBig ? 1.6 : 1.0);
    mesh.add(glow);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh, dir, speed, damage, life: 5, isBig,
      type: enemy.type,
      trailTimer: 0,
      color: enemy.def.color,
    });
    this.fx.spawnSparks(from, dir, 5, {
      color: new THREE.Color(enemy.def.color), speed: 3, size: 0.12, life: 0.25, gravity: 0, normalBias: 0.2,
    });
  }

  update(dt, t, player) {
    const list = this.enemies;
    for (let i = list.length - 1; i >= 0; i--) {
      const e = list[i];
      e.coolFlash(dt);
      e.update(dt, t, player, list, this.colliders, this._onFire);
      if (!e.alive && e.spawned && !e._counted) {
        e._counted = true;
        this._kill(e);
        list.splice(i, 1);
      }
    }

    // projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life -= dt;
      p.mesh.position.addScaledVector(p.dir, p.speed * dt);
      p.trailTimer -= dt;
      if (p.trailTimer <= 0) {
        p.trailTimer = 0.03;
        this.fx.spawnSparks(p.mesh.position, null, 1, {
          color: new THREE.Color(p.color), speed: 0.5, size: 0.13, life: 0.24, gravity: 0, spread: 0.2,
        });
      }
      const pos = p.mesh.position;
      const dx = pos.x - player.position.x;
      const dy = pos.y - (player.position.y - 0.35);
      const dz = pos.z - player.position.z;
      if (dx * dx + dy * dy + dz * dz < 1.25) {
        this.onDamagePlayer(p.damage, pos);
        this.fx.explosion(pos, 0.35, false);
        this.audio.explosion(false);
        this.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }
      if (pos.y < 0.05 || Math.hypot(pos.x, pos.z) > 28 || p.life <= 0) {
        this.fx.impact(pos.clone().setY(0.05), new THREE.Vector3(0, 1, 0), p.color, true);
        this.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }

  _kill(e) {
    const pos = e.group.position.clone();
    pos.y += e.type === 'titan' ? 3.5 : e.type === 'wasp' ? 0.2 : 1.6;
    const scale = e.type === 'titan' ? 2.6 : e.type === 'warden' ? 1.3 : 0.8;
    this.fx.explosion(pos, scale, e.type === 'titan');
    this.audio.explosion(e.type === 'titan');
    this.onKill(e, pos);
    e.dispose();
  }

  raycast(origin, direction, maxDist = 120) {
    this.raycaster.set(origin, direction);
    this.raycaster.far = maxDist;
    const objects = [];
    for (const e of this.enemies) {
      if (e.alive && e.spawned) objects.push(...e.hitMeshes);
    }
    const hits = this.raycaster.intersectObjects(objects, false);
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.enemy) o = o.parent;
      if (o && o.userData.enemy && o.userData.enemy.alive) {
        return {
          enemy: o.userData.enemy,
          point: h.point,
          distance: h.distance,
          crit: !!h.object.userData.crit,
          normal: h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld) : new THREE.Vector3(0, 1, 0),
        };
      }
    }
    return null;
  }

  countAlive() {
    let n = 0;
    for (const e of this.enemies) if (e.alive) n++;
    return n;
  }

  getEnemyPositions() {
    return this.enemies.filter(e => e.alive && e.spawned).map(e => ({
      x: e.group.position.x, z: e.group.position.z, type: e.type,
    }));
  }
}
