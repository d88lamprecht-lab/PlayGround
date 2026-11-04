import * as THREE from 'three';

export class HUD {
  constructor() {
    this.el = {
      hud: document.getElementById('hud'),
      healthBar: document.getElementById('health-bar'),
      healthNum: document.getElementById('health-num'),
      armorBar: document.getElementById('armor-bar'),
      armorNum: document.getElementById('armor-num'),
      ammo: document.getElementById('ammo'),
      ammoReserve: document.getElementById('ammo-reserve'),
      reloadFill: document.getElementById('reload-bar-fill'),
      reloadRing: document.getElementById('reload-ring'),
      reloadProgress: document.getElementById('reload-progress'),
      score: document.getElementById('score'),
      kills: document.getElementById('kills'),
      combo: document.getElementById('combo'),
      waveTitle: document.getElementById('wave-title'),
      waveSub: document.getElementById('wave-sub'),
      waveKicker: document.getElementById('wave-kicker'),
      waveBanner: document.getElementById('wave-banner'),
      objectiveSub: document.getElementById('objective-sub'),
      hitmarker: document.getElementById('hitmarker'),
      crosshair: document.getElementById('crosshair'),
      killFeed: document.getElementById('kill-feed'),
      damageNumbers: document.getElementById('damage-numbers'),
      damageFlash: document.getElementById('damage-flash'),
      healFlash: document.getElementById('heal-flash'),
      damageDirections: document.getElementById('damage-directions'),
      centerToast: document.getElementById('center-toast'),
      statusText: document.getElementById('status-text'),
      radar: document.getElementById('radar'),
      menu: document.getElementById('menu'),
      pause: document.getElementById('pause'),
      gameover: document.getElementById('gameover'),
      loading: document.getElementById('loading'),
      pauseWave: document.getElementById('pause-wave'),
      pauseScore: document.getElementById('pause-score'),
      pauseKills: document.getElementById('pause-kills'),
      finalWave: document.getElementById('final-wave'),
      finalScore: document.getElementById('final-score'),
      finalKills: document.getElementById('final-kills'),
      quality: document.getElementById('quality-readout'),
      fireMode: document.getElementById('fire-mode'),
    };
    this.radarCtx = this.el.radar.getContext('2d');
    this.dmgPool = [];
    this.dmgCursor = 0;
    for (let i = 0; i < 22; i++) {
      const d = document.createElement('div');
      d.className = 'dmg-num';
      d.style.display = 'none';
      this.el.damageNumbers.appendChild(d);
      this.dmgPool.push(d);
    }
    this.hitTimer = 0;
    this.waveTimer = 0;
    this.toastTimer = 0;
    this._lastHealth = -1;
    this._lastArmor = -1;
    this._lastAmmo = -1;
    this._v = new THREE.Vector3();
    this._radarT = 0;
  }

  setScore(score) { this.el.score.textContent = score.toLocaleString('en-US'); }
  setKills(kills) { this.el.kills.textContent = kills; }
  setCombo(mult) { this.el.combo.textContent = `x${mult.toFixed(mult % 1 ? 1 : 0)}`; }
  setVisible(v) { this.el.hud.classList.toggle('hidden', !v); }

  updateVitals(player) {
    const hp = Math.ceil(player.health);
    const ar = Math.ceil(player.armor);
    if (hp !== this._lastHealth) {
      this._lastHealth = hp;
      this.el.healthNum.textContent = hp;
      this.el.healthBar.style.width = `${Math.max(0, (hp / player.maxHealth) * 100)}%`;
      this.el.healthBar.classList.toggle('low', hp <= 35);
    }
    if (ar !== this._lastArmor) {
      this._lastArmor = ar;
      this.el.armorNum.textContent = ar;
      this.el.armorBar.style.width = `${Math.max(0, (ar / player.maxArmor) * 100)}%`;
    }
    this.el.damageFlash.classList.toggle('hit', player.justDamaged && player.damageTakenThisFrame > 0);
  }

  updateAmmo(weapon) {
    if (weapon.ammo !== this._lastAmmo) {
      this._lastAmmo = weapon.ammo;
      this.el.ammo.textContent = String(weapon.ammo).padStart(2, '0');
      this.el.ammo.classList.toggle('low', weapon.ammo <= 6);
      this.el.ammoReserve.textContent = weapon.reserve;
    }
    const progress = weapon.reloading ? Math.min(1, weapon.reloadT) : 0;
    this.el.reloadFill.style.width = `${progress * 100}%`;
    this.el.reloadRing.classList.toggle('show', weapon.reloading);
    this.el.reloadProgress.style.strokeDashoffset = String(113 - progress * 113);
    this.el.fireMode.textContent = weapon.reloading ? 'RELOADING' : (weapon.ads > 0.5 ? '5.56 AP · ADS' : '5.56 AP');
  }

  updateCrosshair(player, weapon) {
    const speedK = Math.min(1, player.speed / 6);
    const spread = 5 + weapon.recoil * 9 + speedK * 5 + (1 - weapon.ads) * 2;
    this.el.crosshair.style.setProperty('--gap', `${spread.toFixed(1)}px`);
    this.el.crosshair.classList.toggle('ads', weapon.ads > 0.55);
  }

  setObjective(remaining, wave) {
    this.el.objectiveSub.textContent = remaining > 0
      ? `HOSTILES REMAINING · ${String(remaining).padStart(2, '0')}`
      : `WAVE ${String(wave).padStart(2, '0')} CLEAR · REPOSITION`;
  }
  setObjectiveMessage(text) { this.el.objectiveSub.textContent = text; }

  setStatus(text) { this.el.statusText.textContent = text; }

  showWave(kicker, title, sub, duration = 2.8) {
    this.el.waveKicker.textContent = kicker;
    this.el.waveTitle.textContent = title;
    this.el.waveSub.textContent = sub;
    this.el.waveBanner.classList.add('show');
    clearTimeout(this._waveTimeout);
    this._waveTimeout = setTimeout(() => this.el.waveBanner.classList.remove('show'), duration * 1000);
  }

  hideWave() {
    this.el.waveBanner.classList.remove('show');
  }

  toast(text, duration = 1600) {
    this.el.centerToast.textContent = text;
    this.el.centerToast.classList.add('show');
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => this.el.centerToast.classList.remove('show'), duration);
  }

  hitmarker(kill = false, crit = false) {
    const el = this.el.hitmarker;
    el.classList.remove('show', 'kill');
    void el.offsetWidth;
    el.classList.add('show');
    if (kill) el.classList.add('kill');
    clearTimeout(this._hitTimeout);
    this._hitTimeout = setTimeout(() => el.classList.remove('show', 'kill'), kill ? 220 : 100);
  }

  damageNumber(worldPos, camera, amount, crit) {
    const v = this._v.copy(worldPos).project(camera);
    if (v.z > 1 || v.z < -1) return;
    const w = window.innerWidth, h = window.innerHeight;
    const x = (v.x * 0.5 + 0.5) * w;
    const y = (-v.y * 0.5 + 0.5) * h;
    const el = this.dmgPool[this.dmgCursor];
    this.dmgCursor = (this.dmgCursor + 1) % this.dmgPool.length;
    el.className = `dmg-num${crit ? ' crit' : ''}`;
    el.textContent = crit ? `${Math.round(amount)}!` : `${Math.round(amount)}`;
    el.style.display = 'block';
    el.style.left = `${x + (Math.random() - 0.5) * 20}px`;
    el.style.top = `${y - 10 + (Math.random() - 0.5) * 12}px`;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => { el.style.display = 'none'; }, 720);
  }

  killFeed(name, points, crit) {
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.innerHTML = `<span class="tag">${crit ? 'CRIT' : 'ELIM'}</span> ${name} <span class="pts">+${points}</span>`;
    this.el.killFeed.appendChild(item);
    setTimeout(() => item.remove(), 3200);
    while (this.el.killFeed.children.length > 4) this.el.killFeed.firstChild.remove();
  }

  damageDirection(angle) {
    const el = document.createElement('div');
    el.className = 'damage-dir';
    el.style.transform = `rotate(${angle}rad)`;
    this.el.damageDirections.appendChild(el);
    setTimeout(() => el.remove(), 1050);
  }

  healFlash() {
    this.el.healFlash.classList.add('on');
    setTimeout(() => this.el.healFlash.classList.remove('on'), 220);
  }

  showMenu(v) { this.el.menu.classList.toggle('hidden', !v); }
  showPause(v) { this.el.pause.classList.toggle('hidden', !v); }
  showGameOver(v) { this.el.gameover.classList.toggle('hidden', !v); }
  hideLoading() {
    this.el.loading.classList.add('done');
    setTimeout(() => this.el.loading.classList.add('hidden'), 700);
  }
  setQuality(text) { this.el.quality.textContent = text; }

  pauseStats(wave, score, kills) {
    this.el.pauseWave.textContent = String(wave).padStart(2, '0');
    this.el.pauseScore.textContent = score.toLocaleString('en-US');
    this.el.pauseKills.textContent = kills;
  }

  gameOverStats(wave, score, kills) {
    this.el.finalWave.textContent = wave;
    this.el.finalScore.textContent = score.toLocaleString('en-US');
    this.el.finalKills.textContent = kills;
  }

  drawRadar(enemies, player, corePos, dt) {
    const ctx = this.radarCtx;
    const W = 190, H = 190, cx = 95, cy = 95;
    const maxRange = 40;
    const scale = 78 / maxRange;
    this._radarT += dt;
    ctx.clearRect(0, 0, W, H);

    // circular backdrop
    const bg = ctx.createRadialGradient(cx, cy, 4, cx, cy, 92);
    bg.addColorStop(0, 'rgba(12,40,52,0.9)');
    bg.addColorStop(0.75, 'rgba(6,18,26,0.82)');
    bg.addColorStop(1, 'rgba(3,10,14,0.9)');
    ctx.fillStyle = bg;
    ctx.beginPath(); ctx.arc(cx, cy, 92, 0, 7); ctx.fill();

    // rings
    ctx.strokeStyle = 'rgba(95,246,255,0.16)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath(); ctx.arc(cx, cy, (78 / 3) * i, 0, 7); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(cx - 84, cy); ctx.lineTo(cx + 84, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - 84); ctx.lineTo(cx, cy + 84); ctx.stroke();

    // sweep
    const sweep = this._radarT * 1.6;
    const grad = ctx.createConicGradient(sweep - 0.5, cx, cy);
    grad.addColorStop(0, 'rgba(95,246,255,0.0)');
    grad.addColorStop(0.06, 'rgba(95,246,255,0.18)');
    grad.addColorStop(0.12, 'rgba(95,246,255,0.0)');
    grad.addColorStop(1, 'rgba(95,246,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, 92, 0, 7); ctx.fill();

    const yaw = player.yaw;
    const cos = Math.cos(yaw), sin = Math.sin(yaw);
    const project = (wx, wz) => {
      const dx = wx - player.position.x;
      const dz = wz - player.position.z;
      // forward = (-sin, -cos), right = (cos, -sin)
      const lx = dx * cos - dz * sin;
      const lz = -dx * sin - dz * cos;
      return { x: cx + lx * scale, y: cy - lz * scale, d: Math.hypot(dx, dz) };
    };

    // core objective
    if (corePos) {
      const p = project(corePos.x, corePos.z);
      if (p.d < maxRange * 1.2) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = 'rgba(95,246,255,0.75)';
        ctx.shadowColor = '#5ff6ff'; ctx.shadowBlur = 8;
        ctx.fillRect(-3, -3, 6, 6);
        ctx.restore();
      }
    }

    // enemy blips
    for (const e of enemies) {
      const p = project(e.x, e.z);
      if (p.d > maxRange) continue;
      const color = e.type === 'titan' ? '#ff4d5e' : e.type === 'warden' ? '#ffb43c' : '#ff2e88';
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 7;
      ctx.beginPath(); ctx.arc(p.x, p.y, e.type === 'wasp' ? 2.6 : 4, 0, 7); ctx.fill();
      ctx.shadowBlur = 0;
    }

    // player arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#dffcff';
    ctx.shadowColor = '#5ff6ff'; ctx.shadowBlur = 9;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 6);
    ctx.lineTo(0, 3);
    ctx.lineTo(-5, 6);
    ctx.closePath(); ctx.fill();
    ctx.restore();

    // rim
    ctx.strokeStyle = 'rgba(95,246,255,0.34)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, 92, 0, 7); ctx.stroke();
  }
}
