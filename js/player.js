import * as THREE from 'three';

export class Player {
  constructor(camera, world, audio) {
    this.camera = camera;
    this.world = world;
    this.audio = audio;
    this.position = new THREE.Vector3(0, 0, 15);
    this.velocity = new THREE.Vector3();
    this.eyeHeight = 1.7;
    this.radius = 0.42;
    this.yaw = 0;
    this.pitch = -0.02;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.shake = 0;
    this.bobPhase = 0;
    this.bobAmt = 0;
    this.health = 100;
    this.maxHealth = 100;
    this.armor = 50;
    this.maxArmor = 50;
    this.dead = false;
    this.onGround = true;
    this.velY = 0;
    this.ads = 0;
    this.sprinting = false;
    this.speed = 0;
    this.lastDamage = -99;
    this.lastHeal = 0;
    this.stepDistance = 0;
    this.time = 0;
    this.damageTakenThisFrame = 0;
    this.justDamaged = false;
    this.regenPulse = 0;
  }

  update(dt, t, input) {
    this.time = t;
    const look = input.consumeLook();
    this.lookDelta = look;
    this.damageTakenThisFrame = 0;
    const sens = 0.0022 * (1 - this.ads * 0.35);
    if (!this.dead) {
      this.yaw -= look.x * sens;
      this.pitch -= look.y * sens;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.35, 1.35);
    }

    // recoil recovery
    this.recoilPitch *= Math.exp(-dt * 9);
    this.recoilYaw *= Math.exp(-dt * 9);
    this.shake *= Math.exp(-dt * 8);

    this.ads += ((input.aiming && !this.dead ? 1 : 0) - this.ads) * Math.min(1, dt * 12);

    let ix = 0, iy = 0;
    if (!this.dead) {
      if (input.keys.has('KeyW')) iy += 1;
      if (input.keys.has('KeyS')) iy -= 1;
      if (input.keys.has('KeyD')) ix += 1;
      if (input.keys.has('KeyA')) ix -= 1;
      ix += input.move.x;
      iy += input.move.y;
    }
    const mag = Math.hypot(ix, iy);
    if (mag > 1) { ix /= mag; iy /= mag; }

    const keySprint = input.keys.has('ShiftLeft') || input.keys.has('ShiftRight');
    const stickSprint = input.isTouch && mag > 0.92 && iy > 0.35;
    const wantSprint = !this.dead && (keySprint || stickSprint) && iy > 0.35 && this.ads < 0.2;
    this.sprinting = wantSprint && mag > 0.1;

    let targetSpeed = 6.4;
    if (this.ads > 0.5) targetSpeed = 3.4;
    else if (this.sprinting) targetSpeed = 9.2;
    else if (iy < -0.2) targetSpeed = 4.6;

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const desired = new THREE.Vector3()
      .addScaledVector(forward, iy)
      .addScaledVector(right, ix);
    if (desired.lengthSq() > 1) desired.normalize();
    desired.multiplyScalar(targetSpeed);

    const accel = this.onGround ? 16 : 5;
    this.velocity.x += (desired.x - this.velocity.x) * Math.min(1, dt * accel);
    this.velocity.z += (desired.z - this.velocity.z) * Math.min(1, dt * accel);
    this.speed = Math.hypot(this.velocity.x, this.velocity.z);

    // jump + gravity
    if (input.jumpQueued) {
      input.jumpQueued = false;
      if (this.onGround && !this.dead) {
        this.velY = 6.1;
        this.onGround = false;
      }
    }
    this.velY -= 19 * dt;
    this.position.y += this.velY * dt;
    if (this.position.y <= 0) {
      if (!this.onGround && this.velY < -3) this.audio.step(true);
      this.position.y = 0;
      this.velY = 0;
      this.onGround = true;
    }

    // horizontal collision, axis separated
    const colliders = this.world.colliders;
    const moveX = this.velocity.x * dt;
    const moveZ = this.velocity.z * dt;
    if (!this._blocked(this.position.x + moveX, this.position.z, colliders)) this.position.x += moveX;
    else this.velocity.x *= 0.2;
    if (!this._blocked(this.position.x, this.position.z + moveZ, colliders)) this.position.z += moveZ;
    else this.velocity.z *= 0.2;

    // arena bounds
    const maxR = this.world.playerBounds;
    const r = Math.hypot(this.position.x, this.position.z);
    if (r > maxR) {
      this.position.x = (this.position.x / r) * maxR;
      this.position.z = (this.position.z / r) * maxR;
      this.velocity.x *= 0.4;
      this.velocity.z *= 0.4;
    }

    // head bob
    if (this.onGround && this.speed > 0.4) {
      this.bobPhase += dt * (this.sprinting ? 12.5 : 8.6) * Math.min(1, this.speed / 6);
      this.bobAmt += (Math.min(1, this.speed / 6.4) - this.bobAmt) * Math.min(1, dt * 8);
    } else {
      this.bobAmt += (0 - this.bobAmt) * Math.min(1, dt * 6);
    }
    const bobY = Math.sin(this.bobPhase * 2) * 0.025 * this.bobAmt;
    const bobX = Math.cos(this.bobPhase) * 0.018 * this.bobAmt;

    // footsteps
    this.stepDistance += this.speed * dt;
    const stride = this.sprinting ? 2.7 : 2.1;
    if (this.onGround && this.stepDistance > stride && this.speed > 1) {
      this.stepDistance = 0;
      this.audio.step(this.sprinting);
    }
    if (!this.onGround) this.stepDistance = 0;

    // camera transform
    const shakeX = (Math.random() - 0.5) * this.shake * 0.035;
    const shakeY = (Math.random() - 0.5) * this.shake * 0.035;
    this.camera.position.set(
      this.position.x + bobX * 0.6 + shakeX,
      this.position.y + this.eyeHeight + bobY + shakeY,
      this.position.z
    );
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(
      this.pitch + this.recoilPitch + (Math.random() - 0.5) * this.shake * 0.006,
      this.yaw + this.recoilYaw,
      Math.sin(this.bobPhase) * 0.004 * this.bobAmt
    );

    // FOV
    const baseFov = 76;
    const targetFov = baseFov - this.ads * 23 + (this.sprinting ? 5 : 0);
    if (Math.abs(this.camera.fov - targetFov) > 0.05) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 10);
      this.camera.updateProjectionMatrix();
    }

    // regen
    const sinceDamage = t - this.lastDamage;
    this.justDamaged = false;
    if (!this.dead) {
      if (sinceDamage > 6 && this.health < this.maxHealth) {
        this.health = Math.min(this.maxHealth, this.health + dt * 9);
        this.regenPulse = 1;
      } else if (this.regenPulse > 0) {
        this.regenPulse = Math.max(0, this.regenPulse - dt);
      }
      if (sinceDamage > 8 && this.armor < this.maxArmor) {
        this.armor = Math.min(this.maxArmor, this.armor + dt * 5);
      }
    }
  }

  _blocked(x, z, colliders) {
    const r = this.radius;
    for (const c of colliders) {
      if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return true;
    }
    return false;
  }

  addRecoil(pitch, yaw = 0) {
    this.recoilPitch += pitch;
    this.recoilYaw += yaw;
  }

  addShake(v) {
    this.shake = Math.min(1.4, this.shake + v);
  }

  damage(amount, sourcePos) {
    if (this.dead) return 0;
    let dmg = amount;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.55);
      this.armor -= absorbed;
      dmg -= absorbed;
    }
    this.health -= dmg;
    this.lastDamage = this.time;
    this.justDamaged = true;
    this.damageTakenThisFrame += amount;
    this.addShake(Math.min(0.6, amount / 40));
    this.audio.damage();
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
    return dmg;
  }

  reset() {
    this.position.set(0, 0, 15);
    this.velocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = -0.02;
    this.health = this.maxHealth;
    this.armor = this.maxArmor;
    this.dead = false;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.shake = 0;
    this.ads = 0;
    this.velY = 0;
    this.onGround = true;
    this.lastDamage = -99;
    this.camera.fov = 76;
    this.camera.updateProjectionMatrix();
  }
}
