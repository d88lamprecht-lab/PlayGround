import * as THREE from 'three';
import { createGlowTexture, createMuzzleTexture } from './textures.js';

/* ================================================================== *
 *  VX-9 «SPECTRE» — fully procedural first-person rifle
 * ================================================================== */

const TAU = Math.PI * 2;

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}
function cyl(r1, r2, h, mat, x = 0, y = 0, z = 0, seg = 12) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat);
  m.position.set(x, y, z);
  return m;
}

export class Weapon {
  constructor(camera, scene, audio) {
    this.camera = camera;
    this.scene = scene;
    this.audio = audio;

    this.ammo = 30;
    this.magSize = 30;
    this.reserve = 150;
    this.reloading = false;
    this.reloadT = 0;
    this.reloadDuration = 1.75;
    this.fireInterval = 0.085;
    this.cooldown = 0;
    this.ads = 0;
    this.sprint = 0;
    this.recoil = 0;
    this.kick = 0;
    this.shots = 0;
    this.flashTime = 0;
    this.shells = [];
    this.time = 0;
    this.damage = 26;
    this.critMultiplier = 2.1;

    this.root = new THREE.Group();
    this.root.position.set(0.3, -0.325, -0.7);
    this.root.rotation.set(0.012, -0.03, 0.0);
    this.root.scale.setScalar(0.7);
    this.camera.add(this.root);
    // camera-local fill lights make the procedural weapon and gloves read against the night
    this.fillLight = new THREE.PointLight(0xbfeaff, 4.4, 3.2, 2);
    this.fillLight.position.set(0.5, 0.32, 0.18);
    this.camera.add(this.fillLight);
    this.rimLight = new THREE.PointLight(0xff8a3a, 3.6, 2.4, 2);
    this.rimLight.position.set(-0.38, -0.2, 0.08);
    this.camera.add(this.rimLight);

    this._build();
    this._buildHands();
    this._buildShells();

    this._basePos = this.root.position.clone();
    this._baseRot = this.root.rotation.clone();
    this._sway = new THREE.Vector2();
    this._swayTarget = new THREE.Vector2();
  }

  _build() {
    const gunmetal = new THREE.MeshStandardMaterial({ color: 0x47525b, roughness: 0.3, metalness: 0.92, envMapIntensity: 1.6 });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x1c252c, roughness: 0.38, metalness: 0.9, envMapIntensity: 1.4 });
    const polymer = new THREE.MeshStandardMaterial({ color: 0x2b353d, roughness: 0.66, metalness: 0.22, envMapIntensity: 1.1 });
    const rubber = new THREE.MeshStandardMaterial({ color: 0x151a1f, roughness: 0.92, metalness: 0.08 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x8a4212, emissive: 0xff7a1a, emissiveIntensity: 2.8, roughness: 0.38, metalness: 0.55 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xb6ffff, toneMapped: false });
    const glowDim = new THREE.MeshBasicMaterial({ color: 0x5fe6f0, toneMapped: false, transparent: true, opacity: 0.85 });
    this.mats = { gunmetal, darkMetal, polymer, rubber, accent, glow };

    // main receiver
    const receiver = box(0.135, 0.155, 0.55, gunmetal, 0, 0, -0.12);
    this.root.add(receiver);
    this.root.add(box(0.142, 0.03, 0.42, darkMetal, 0, 0.09, -0.14));
    this.root.add(box(0.12, 0.02, 0.34, accent, 0.0, -0.082, -0.18));

    // upper rail + teeth
    this.root.add(box(0.06, 0.028, 0.52, darkMetal, 0, 0.108, -0.16));
    for (let i = 0; i < 13; i++) {
      this.root.add(box(0.072, 0.012, 0.018, gunmetal, 0, 0.128, -0.39 + i * 0.038));
    }

    // handguard / barrel shroud
    const shroud = box(0.105, 0.115, 0.46, polymer, 0, 0.005, -0.62);
    this.root.add(shroud);
    for (let i = 0; i < 6; i++) {
      this.root.add(box(0.112, 0.014, 0.05, darkMetal, 0, 0.045, -0.45 - i * 0.065));
    }
    // vent slots
    for (const s of [-1, 1]) {
      for (let i = 0; i < 5; i++) {
        this.root.add(box(0.01, 0.028, 0.045, rubber, s * 0.056, 0.0, -0.47 - i * 0.062));
      }
    }
    // side rails
    this.root.add(box(0.022, 0.05, 0.24, darkMetal, 0.062, 0.012, -0.58));
    this.root.add(box(0.022, 0.05, 0.24, darkMetal, -0.062, 0.012, -0.58));

    // barrel + gas block
    const barrel = cyl(0.022, 0.022, 0.42, darkMetal, 0, 0.018, -0.95, 10);
    barrel.rotation.x = Math.PI / 2;
    this.root.add(barrel);
    this.root.add(box(0.07, 0.075, 0.09, gunmetal, 0, 0.022, -0.77));

    // muzzle brake
    const brake = cyl(0.05, 0.045, 0.13, darkMetal, 0, 0.018, -1.19, 10);
    brake.rotation.x = Math.PI / 2;
    this.root.add(brake);
    for (let i = 0; i < 3; i++) {
      this.root.add(box(0.11, 0.012, 0.02, rubber, 0, 0.018, -1.16 - i * 0.03));
    }
    // muzzle crown glow
    const crown = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.005, 4, 12), glowDim);
    crown.rotation.y = Math.PI / 2;
    crown.position.set(0, 0.018, -1.255);
    this.root.add(crown);

    // magazine (separate ref for reload animation)
    this.mag = new THREE.Group();
    const magBody = box(0.085, 0.25, 0.14, polymer, 0, -0.17, 0);
    this.mag.add(magBody);
    this.mag.add(box(0.09, 0.03, 0.148, gunmetal, 0, -0.05, 0));
    this.mag.add(box(0.02, 0.2, 0.03, accent, 0.048, -0.18, 0.01));
    for (let i = 0; i < 5; i++) this.mag.add(box(0.09, 0.008, 0.14, rubber, 0, -0.09 - i * 0.035, 0));
    this.mag.position.set(0, -0.02, -0.15);
    this.mag.rotation.x = -0.12;
    this.root.add(this.mag);

    // pistol grip
    const grip = box(0.075, 0.2, 0.1, polymer, 0, -0.17, 0.06);
    grip.rotation.x = 0.28;
    this.root.add(grip);
    const gripPad = box(0.078, 0.06, 0.104, rubber, 0, -0.255, 0.09);
    gripPad.rotation.x = 0.28;
    this.root.add(gripPad);
    // trigger guard
    const guard = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.008, 4, 12, Math.PI), darkMetal);
    guard.rotation.set(Math.PI / 2, 0, Math.PI);
    guard.position.set(0, -0.105, -0.015);
    this.root.add(guard);

    // stock
    this.root.add(box(0.09, 0.115, 0.22, polymer, 0, -0.005, 0.29));
    this.root.add(box(0.1, 0.14, 0.05, rubber, 0, -0.01, 0.41));
    this.root.add(box(0.02, 0.09, 0.28, gunmetal, 0.048, 0.02, 0.3));
    // cheek rest
    this.root.add(box(0.07, 0.035, 0.16, rubber, 0, 0.075, 0.3));

    // scope
    const scope = new THREE.Group();
    const tube = cyl(0.042, 0.042, 0.26, darkMetal, 0, 0, 0, 14);
    tube.rotation.x = Math.PI / 2;
    scope.add(tube);
    const bell = cyl(0.058, 0.042, 0.08, gunmetal, 0, 0, -0.16, 14);
    bell.rotation.x = Math.PI / 2;
    scope.add(bell);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.048, 16), new THREE.MeshBasicMaterial({ color: 0x9df8ff, transparent: true, opacity: 0.55, toneMapped: false }));
    lens.position.set(0, 0, -0.201);
    lens.rotation.y = Math.PI;
    scope.add(lens);
    for (const z of [-0.08, 0.08]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.007, 5, 16), gunmetal);
      ring.rotation.x = Math.PI / 2;
      ring.position.z = z;
      scope.add(ring);
    }
    scope.position.set(0, 0.16, -0.15);
    this.root.add(scope);
    this.scope = scope;
    // scope mount
    this.root.add(box(0.03, 0.07, 0.04, darkMetal, 0, 0.12, -0.06));
    this.root.add(box(0.03, 0.07, 0.04, darkMetal, 0, 0.12, -0.25));

    // energy cell / glowing coil on the side
    const cell = box(0.028, 0.07, 0.16, accent, 0.076, -0.01, -0.22);
    this.root.add(cell);
    this.root.add(box(0.012, 0.02, 0.1, glow, 0.09, -0.01, -0.22));
    // little heat sink fins
    for (let i = 0; i < 5; i++) {
      this.root.add(box(0.07, 0.045, 0.008, darkMetal, 0, 0.06, 0.18 + i * 0.028));
    }

    // extra detailing: cyan ID line, fasteners, ejection glow, angled foregrip
    this.root.add(box(0.004, 0.012, 0.32, glowDim, 0.069, 0.055, -0.12));
    this.root.add(box(0.04, 0.012, 0.004, glowDim, 0.0, 0.035, -0.445));
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.006, 6), gunmetal);
        screw.rotation.z = Math.PI / 2;
        screw.position.set(side * 0.069, 0.04 - i * 0.04, -0.34 + i * 0.13);
        this.root.add(screw);
      }
    }
    const ejGlow = box(0.006, 0.026, 0.05, accent, 0.07, 0.02, -0.07);
    this.root.add(ejGlow);
    const foregrip = box(0.055, 0.16, 0.075, polymer, 0, -0.12, -0.52);
    foregrip.rotation.x = -0.18;
    this.root.add(foregrip);
    this.root.add(box(0.06, 0.025, 0.08, rubber, 0, -0.2, -0.505));
    // serial plate
    this.root.add(box(0.002, 0.025, 0.11, darkMetal, 0.071, -0.045, -0.02));

    // charging handle
    this.root.add(box(0.08, 0.025, 0.03, gunmetal, 0.06, 0.09, -0.34));
    // ejection port
    this.root.add(box(0.015, 0.05, 0.08, rubber, 0.069, 0.02, -0.07));

    // side cables (thin tubes)
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x080b0e, roughness: 0.9 });
    for (let i = 0; i < 2; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.075, 0.03, -0.3),
        new THREE.Vector3(0.1, -0.02, -0.18 + i * 0.04),
        new THREE.Vector3(0.08, -0.07, -0.04 + i * 0.04),
      ]);
      const c = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.006, 3, false), cableMat);
      this.root.add(c);
    }

    // front sight + rear sight
    this.root.add(box(0.012, 0.04, 0.02, darkMetal, 0, 0.09, -0.72));
    this.root.add(box(0.05, 0.012, 0.02, glowDim, 0, 0.113, -0.72));

    // muzzle flash node
    this.flashGroup = new THREE.Group();
    this.flashGroup.position.set(0, 0.018, -1.3);
    const flash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: createMuzzleTexture(), color: 0xffd9a0, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    }));
    flash.scale.set(0.55, 0.55, 1);
    this.flashGroup.add(flash);
    this.flashSprite = flash;

    const flashCore = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.6, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xffb055, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
    );
    flashCore.rotation.x = -Math.PI / 2;
    flashCore.position.z = -0.24;
    this.flashGroup.add(flashCore);
    this.flashCore = flashCore;

    this.flashLight = new THREE.PointLight(0xffa050, 0, 6, 2);
    this.flashLight.position.set(0, 0.02, -0.4);
    this.flashGroup.add(this.flashLight);
    this.root.add(this.flashGroup);

    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.018, -1.33);
    this.root.add(this.muzzle);
  }

  _buildHands() {
    const glove = new THREE.MeshStandardMaterial({ color: 0x2b333a, roughness: 0.84, metalness: 0.16, envMapIntensity: 0.9 });
    const glovePlate = new THREE.MeshStandardMaterial({ color: 0x48555e, roughness: 0.46, metalness: 0.64, envMapIntensity: 1.1 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x252d33, roughness: 0.9, metalness: 0.06 });
    const cuff = new THREE.MeshStandardMaterial({ color: 0x161c21, roughness: 0.95, metalness: 0.02 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x7a3a10, emissive: 0xff7a1a, emissiveIntensity: 1.6, roughness: 0.5 });

    // right hand around grip
    const rh = new THREE.Group();
    rh.add(box(0.095, 0.13, 0.12, glove, 0, 0, 0));
    for (let i = 0; i < 4; i++) {
      const finger = box(0.024, 0.075, 0.035, glove, -0.038 + i * 0.026, -0.035, -0.055);
      finger.rotation.x = 0.4;
      rh.add(finger);
    }
    rh.add(box(0.03, 0.08, 0.035, glove, -0.055, 0.005, -0.05));
    rh.add(box(0.09, 0.03, 0.1, glovePlate, 0.0, 0.06, 0.01));
    for (let i = 0; i < 3; i++) rh.add(box(0.024, 0.02, 0.03, glovePlate, -0.02 + i * 0.026, 0.07, -0.045));
    rh.add(box(0.095, 0.02, 0.02, cuff, 0.0, 0.035, 0.062));
    rh.position.set(0.02, -0.2, 0.065);
    rh.rotation.set(0.28, 0.15, -0.05);
    this.root.add(rh);

    // right forearm receding down/right
    const rArm = new THREE.Group();
    const rSleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.24, 6, 10), sleeve);
    rSleeve.rotation.set(1.24, 0, 0.16);
    rSleeve.position.set(0.1, -0.31, 0.32);
    rArm.add(rSleeve);
    const rCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.052, 0.055, 10), cuff);
    rCuff.rotation.set(1.24, 0, 0.16);
    rCuff.position.set(0.09, -0.25, 0.24);
    rArm.add(rCuff);
    const rPlate = box(0.1, 0.08, 0.12, glovePlate, 0.06, -0.15, 0.12);
    rPlate.rotation.x = 0.4;
    rArm.add(rPlate);
    // wrist display
    const display = box(0.07, 0.035, 0.005, new THREE.MeshBasicMaterial({ color: 0x2effcf, toneMapped: false }), 0.08, -0.11, 0.18);
    display.rotation.x = 0.6;
    rArm.add(display);
    this.root.add(rArm);

    // left hand on handguard
    const lh = new THREE.Group();
    lh.add(box(0.085, 0.11, 0.13, glove, 0, 0, 0));
    for (let i = 0; i < 4; i++) {
      const finger = box(0.022, 0.065, 0.03, glove, -0.033 + i * 0.022, -0.032, 0.05);
      finger.rotation.x = -0.5;
      lh.add(finger);
    }
    lh.add(box(0.03, 0.07, 0.03, glove, -0.05, 0.01, 0.045));
    lh.add(box(0.085, 0.028, 0.09, glovePlate, 0, 0.055, 0));
    for (let i = 0; i < 3; i++) lh.add(box(0.022, 0.018, 0.026, glovePlate, -0.022 + i * 0.024, 0.064, -0.04));
    lh.add(box(0.02, 0.055, 0.03, glovePlate, 0.045, 0.01, -0.035));
    lh.position.set(-0.035, -0.085, -0.6);
    lh.rotation.set(-0.1, -0.2, 0.2);
    this.root.add(lh);
    this.leftHand = lh;

    const lArm = new THREE.Group();
    const lSleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.046, 0.3, 6, 10), sleeve);
    lSleeve.rotation.set(1.28, 0.0, -0.3);
    lSleeve.position.set(-0.17, -0.35, -0.35);
    lArm.add(lSleeve);
    const lCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.054, 0.048, 0.05, 10), cuff);
    lCuff.rotation.set(1.28, 0.0, -0.3);
    lCuff.position.set(-0.12, -0.29, -0.42);
    lArm.add(lCuff);
    const lPlate = box(0.1, 0.075, 0.11, glovePlate, -0.07, -0.18, -0.48);
    lPlate.rotation.x = 0.4;
    lArm.add(lPlate);
    const lAccent = box(0.02, 0.06, 0.07, accent, -0.12, -0.21, -0.47);
    lAccent.rotation.x = 0.4;
    lArm.add(lAccent);
    this.root.add(lArm);
  }

  _buildShells() {
    const geo = new THREE.CylinderGeometry(0.012, 0.012, 0.045, 6);
    const mat = new THREE.MeshStandardMaterial({ color: 0xc99a4a, roughness: 0.25, metalness: 1.0, envMapIntensity: 1.5 });
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(geo, mat);
      m.visible = false;
      m.castShadow = false;
      this.scene.add(m);
      this.shells.push({ m, vel: new THREE.Vector3(), spin: new THREE.Vector3(), life: 0, active: false });
    }
  }

  /* ----------------------------------------------------------------- */

  canFire() {
    return !this.reloading && this.cooldown <= 0 && this.ammo > 0;
  }

  tryFire() {
    if (this.reloading) return false;
    if (this.cooldown > 0) return false;
    if (this.ammo <= 0) {
      this.audio.empty();
      this.cooldown = 0.25;
      this.startReload();
      return false;
    }
    this.ammo--;
    this.shots++;
    this.cooldown = this.fireInterval;
    this.recoil = Math.min(1, this.recoil + 0.75);
    this.kick += 0.055 + Math.random() * 0.035;
    this.flashTime = 0.055;
    this.flashSeed = Math.random() * TAU;
    this.audio.gunshot();
    this._ejectShell();
    return true;
  }

  startReload() {
    if (this.reloading) return;
    if (this.ammo >= this.magSize) return;
    if (this.reserve <= 0) return;
    this.reloading = true;
    this.reloadT = 0;
    this.audio.reload();
  }

  finishReload() {
    const need = this.magSize - this.ammo;
    const take = Math.min(need, this.reserve);
    this.ammo += take;
    this.reserve -= take;
    this.reloading = false;
    this.reloadT = 0;
  }

  _ejectShell() {
    const slot = this.shells.find(s => !s.active) || this.shells[0];
    const p = new THREE.Vector3(0.12, 0.03, -0.1);
    this.root.localToWorld(p);
    slot.m.position.copy(p);
    slot.m.visible = true;
    slot.active = true;
    slot.life = 0.9;
    slot.vel.set(2.4 + Math.random() * 1.2, 1.6 + Math.random() * 1.4, 0.5 + Math.random());
    slot.vel.applyQuaternion(this.camera.quaternion);
    slot.spin.set(Math.random() * 18, Math.random() * 18, Math.random() * 18);
  }

  update(dt, t, state = {}) {
    this.time = t;
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.flashTime > 0) this.flashTime = Math.max(0, this.flashTime - dt);

    // reload timeline
    if (this.reloading) {
      this.reloadT += dt / this.reloadDuration;
      if (this.reloadT >= 1) this.finishReload();
    }

    // aim / sprint blend
    this.ads += ((state.aiming ? 1 : 0) - this.ads) * Math.min(1, dt * 14);
    this.sprint += ((state.sprinting ? 1 : 0) - this.sprint) * Math.min(1, dt * 9);
    this.recoil = Math.max(0, this.recoil - dt * 7.5);
    this.kick = Math.max(0, this.kick - dt * 9);

    // sway target from look input, plus walk bob
    const look = state.lookDelta || { x: 0, y: 0 };
    this._swayTarget.x += look.x * 0.00055;
    this._swayTarget.y += look.y * 0.00055;
    this._swayTarget.clampScalar(-0.03, 0.03);
    this._sway.lerp(this._swayTarget, Math.min(1, dt * 8));
    this._swayTarget.multiplyScalar(1 - Math.min(1, dt * 3.5));

    const speed = state.speed || 0;
    const moveAmt = Math.min(1, speed / 6.2);
    const bobSpeed = state.sprinting ? 13 : 9;
    const bobX = Math.sin(t * bobSpeed) * 0.012 * moveAmt * (1 - this.ads * 0.8);
    const bobY = Math.cos(t * bobSpeed * 2) * 0.006 * moveAmt * (1 - this.ads * 0.8);
    const breath = Math.sin(t * 1.3) * 0.0025;

    // reload pose
    const rl = this.reloading ? Math.sin(Math.min(1, this.reloadT) * Math.PI) : 0;

    const hip = this._basePos;
    const adsPos = new THREE.Vector3(0.0, -0.155, -0.4);
    const targetX = THREE.MathUtils.lerp(hip.x, adsPos.x, this.ads) + bobX + this._sway.x + this.sprint * 0.05;
    const targetY = THREE.MathUtils.lerp(hip.y, adsPos.y, this.ads) + bobY + breath + this._sway.y - rl * 0.16 - this.sprint * 0.03;
    const targetZ = THREE.MathUtils.lerp(hip.z, adsPos.z, this.ads) + this.recoil * 0.075 - rl * 0.04;
    this.root.position.x += (targetX - this.root.position.x) * Math.min(1, dt * 18);
    this.root.position.y += (targetY - this.root.position.y) * Math.min(1, dt * 18);
    this.root.position.z += (targetZ - this.root.position.z) * Math.min(1, dt * 18);

    const rotX = 0.01 + this.recoil * 0.09 - rl * 0.32 + this.sprint * 0.16;
    const rotY = -0.035 + this.ads * 0.035 + this._sway.x * 0.6 + this.sprint * 0.32;
    const rotZ = -this.sprint * 0.2 + this._sway.y * 0.4 + rl * 0.22;
    this.root.rotation.x += (rotX - this.root.rotation.x) * Math.min(1, dt * 16);
    this.root.rotation.y += (rotY - this.root.rotation.y) * Math.min(1, dt * 16);
    this.root.rotation.z += (rotZ - this.root.rotation.z) * Math.min(1, dt * 16);

    // reload magazine animation
    if (this.reloading) {
      const k = this.reloadT;
      const drop = k < 0.35 ? k / 0.35 : k < 0.55 ? 1 : Math.max(0, 1 - (k - 0.55) / 0.35);
      this.mag.position.y = -0.02 - drop * 0.32;
      this.mag.rotation.z = drop * 0.8;
      this.mag.visible = drop < 0.95;
    } else {
      this.mag.position.y += (-0.02 - this.mag.position.y) * Math.min(1, dt * 20);
      this.mag.rotation.z *= 1 - Math.min(1, dt * 15);
      this.mag.visible = true;
    }

    // muzzle flash
    const fl = this.flashTime > 0 ? this.flashTime / 0.055 : 0;
    this.flashSprite.material.opacity = fl;
    const s = 0.4 + fl * 0.7 + Math.random() * 0.2;
    this.flashSprite.scale.set(s, s, 1);
    this.flashSprite.material.rotation = this.flashSeed || 0;
    this.flashCore.material.opacity = fl * 0.75;
    this.flashCore.scale.set(0.7 + fl * 0.8, 0.7 + fl * 1.2, 0.7 + fl * 0.6);
    this.flashLight.intensity = fl * 24;
    this.flashGroup.visible = fl > 0.01;

    // shells
    for (const s of this.shells) {
      if (!s.active) continue;
      s.life -= dt;
      s.vel.y -= 9.8 * dt;
      s.m.position.addScaledVector(s.vel, dt);
      s.m.rotation.x += s.spin.x * dt;
      s.m.rotation.y += s.spin.y * dt;
      s.m.rotation.z += s.spin.z * dt;
      if (s.m.position.y < 0.03) {
        s.m.position.y = 0.03;
        s.vel.y = Math.abs(s.vel.y) * 0.28;
        s.vel.x *= 0.6;
        s.vel.z *= 0.6;
        s.spin.multiplyScalar(0.5);
      }
      if (s.life <= 0) {
        s.active = false;
        s.m.visible = false;
      }
    }

    // scope glint
    if (this.scope) this.scope.position.y = 0.16 + Math.sin(t * 1.1) * 0.0015;
  }

  getMuzzleWorld(target = new THREE.Vector3()) {
    return this.muzzle.getWorldPosition(target);
  }

  reset() {
    this.ammo = this.magSize;
    this.reserve = 150;
    this.reloading = false;
    this.reloadT = 0;
    this.cooldown = 0;
    this.recoil = 0;
    this.ads = 0;
    this.sprint = 0;
  }
}
