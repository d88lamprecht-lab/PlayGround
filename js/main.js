import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { World } from './world.js';
import { FX } from './fx.js';
import { Weapon } from './weapon.js';
import { Player } from './player.js';
import { EnemyManager } from './enemies.js';
import { HUD } from './hud.js';
import { Input } from './input.js';
import { AudioEngine } from './audio.js';

const TAU = Math.PI * 2;
const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;

/* ------------------------------------------------------------------ */
/*  renderer                                                           */
/* ------------------------------------------------------------------ */

const canvas = document.getElementById('game');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas, antialias: false, powerPreference: 'high-performance',
    stencil: false, alpha: false,
  });
} catch (err) {
  document.body.innerHTML = '<div style="color:#fff;font:16px sans-serif;padding:40px">WebGL is required to run NIGHTFALL.</div>';
  throw err;
}

const gl = renderer.getContext();
const dbgInfo = gl.getExtension('WEBGL_debug_renderer_info');
const gpuName = dbgInfo ? gl.getParameter(dbgInfo.UNMASKED_RENDERER_WEBGL) : 'WebGL';
const isSoftware = /swiftshader|llvmpipe|software|basic render/i.test(gpuName);
const lowQuality = isSoftware;

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;
renderer.shadowMap.enabled = !lowQuality;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const maxPixelRatio = lowQuality ? 1.0 : isTouch ? 1.25 : 1.75;
let pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

/* ------------------------------------------------------------------ */
/*  scene                                                              */
/* ------------------------------------------------------------------ */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x04070c);
const camera = new THREE.PerspectiveCamera(76, window.innerWidth / window.innerHeight, 0.05, 1400);
camera.position.set(0, 3.2, 20);
scene.add(camera);

const world = new World(scene, renderer, { low: lowQuality || isTouch, mobile: isTouch });
const fx = new FX(scene);
const audio = new AudioEngine();
const hud = new HUD();
const player = new Player(camera, world, audio);
const weapon = new Weapon(camera, scene, audio);
const enemies = new EnemyManager(scene, world, fx, audio, {
  onDamagePlayer: damagePlayer,
  onKill: onEnemyKilled,
});

/* ------------------------------------------------------------------ */
/*  post processing                                                    */
/* ------------------------------------------------------------------ */

const composer = new EffectComposer(renderer);
composer.renderTarget1.samples = lowQuality ? 0 : isTouch ? 2 : 4;
composer.renderTarget2.samples = lowQuality ? 0 : isTouch ? 2 : 4;
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  lowQuality ? 0.55 : isTouch ? 0.66 : 0.78,
  0.62,
  lowQuality ? 0.86 : 0.78
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ------------------------------------------------------------------ */
/*  input                                                              */
/* ------------------------------------------------------------------ */

const input = new Input(canvas, {
  onPause: () => { if (game.mode === 'playing') pauseGame(); },
  onLockChange: (locked) => {
    if (!locked && game.mode === 'playing' && !input.isTouch) pauseGame();
  },
});

/* ------------------------------------------------------------------ */
/*  game state                                                         */
/* ------------------------------------------------------------------ */

const game = {
  mode: 'menu',
  wave: 0,
  score: 0,
  kills: 0,
  combo: 0,
  comboTimer: 0,
  spawnQueue: [],
  spawnTimer: 0,
  waveActive: false,
  waveDelay: 0,
  totalKills: 0,
  intermission: 0,
  lastHealth: 100,
  fpsSamples: 0,
  fpsAccum: 0,
  adapted: false,
  gameTime: 0,
};

const raycaster = new THREE.Raycaster();
const shotDir = new THREE.Vector3();
const _right = new THREE.Vector3();
const _up = new THREE.Vector3();
const _end = new THREE.Vector3();
const _muzzle = new THREE.Vector3();
const _normal = new THREE.Vector3();

world.buildSpawnPoints();
hud.setQuality(lowQuality ? `SWIFTSHADER · CPU` : `${gpuName.replace(/ANGLE \(|\)/g, '').slice(0, 26)}`);
hud.drawRadar([], player, world.core.position, 0);

/* ------------------------------------------------------------------ */
/*  lifecycle                                                          */
/* ------------------------------------------------------------------ */

function startGame() {
  audio.init();
  audio.ui();
  audio.setCombat(false);

  game.mode = 'playing';
  game.wave = 0;
  game.score = 0;
  game.kills = 0;
  game.combo = 0;
  game.comboTimer = 0;
  game.spawnQueue = [];
  game.spawnTimer = 0;
  game.waveActive = false;
  game.waveDelay = 2.6;
  game.gameTime = 0;
  game.lastHealth = player.maxHealth;

  enemies.clear();
  player.reset();
  weapon.reset();
  input.reset();
  input.enabled = true;
  weapon.root.visible = true;

  hud.setScore(0);
  hud.setKills(0);
  hud.setCombo(1);
  hud.showMenu(false);
  hud.showPause(false);
  hud.showGameOver(false);
  hud.setVisible(true);
  hud.setStatus('LINK ESTABLISHED');
  hud.setObjectiveMessage('INITIALIZING DEFENSE GRID');
  hud.showWave('BLACKSITE ONLINE', 'DEPLOYING', 'HOLD THE PLATFORM · SECTOR 07', 2.4);
  hud.toast('MOVE · AIM · SURVIVE', 2400);

  if (!input.isTouch) input.requestLock();
}

function pauseGame() {
  if (game.mode !== 'playing') return;
  game.mode = 'paused';
  input.enabled = false;
  input.reset();
  hud.pauseStats(game.wave, game.score, game.kills);
  hud.showPause(true);
  hud.hideWave();
  audio.setCombat(false);
  if (document.pointerLockElement) document.exitPointerLock();
}

function resumeGame() {
  if (game.mode !== 'paused') return;
  hud.showPause(false);
  game.mode = 'playing';
  input.enabled = true;
  input.reset();
  audio.ui();
  if (!input.isTouch) input.requestLock();
}

function gameOver() {
  if (game.mode === 'gameover') return;
  game.mode = 'gameover';
  input.enabled = false;
  input.reset();
  hud.gameOverStats(game.wave, game.score, game.kills);
  hud.showGameOver(true);
  hud.setVisible(false);
  hud.setStatus('SIGNAL LOST');
  hud.hideWave();
  audio.setCombat(false);
  weapon.root.visible = false;
  if (document.pointerLockElement) document.exitPointerLock();
}

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', () => {
  hud.showGameOver(false);
  weapon.root.visible = true;
  startGame();
});
document.getElementById('resume-btn').addEventListener('click', resumeGame);
document.getElementById('pause-btn').addEventListener('click', () => {
  if (game.mode === 'playing') pauseGame();
  else if (game.mode === 'paused') resumeGame();
});

/* ------------------------------------------------------------------ */
/*  combat                                                             */
/* ------------------------------------------------------------------ */

function damagePlayer(amount, sourcePos) {
  if (player.dead) return;
  player.damage(amount, sourcePos);
  // direction indicator, relative to the player's facing
  const dx = sourcePos.x - player.position.x;
  const dz = sourcePos.z - player.position.z;
  const cos = Math.cos(player.yaw), sin = Math.sin(player.yaw);
  const lx = dx * cos - dz * sin;
  const lz = -dx * sin - dz * cos;
  hud.damageDirection(Math.atan2(lx, lz));
  if (player.health <= 0) {
    player.dead = true;
    setTimeout(() => gameOver(), 500);
  }
}

function onEnemyKilled(enemy, pos) {
  const mult = 1 + Math.min(2.5, game.combo * 0.1);
  const points = Math.round(enemy.def.score * mult);
  game.score += points;
  game.kills += 1;
  game.totalKills += 1;
  game.combo += 1;
  game.comboTimer = 4.2;
  hud.setScore(game.score);
  hud.setKills(game.kills);
  hud.setCombo(1 + Math.min(2.5, game.combo * 0.1));
  hud.killFeed(enemy.def.name, points, enemy.type === 'titan');
  player.addShake(enemy.type === 'titan' ? 0.75 : enemy.type === 'warden' ? 0.28 : 0.12);
  audio.kill();
  if (enemy.type === 'titan') {
    hud.toast('TITAN NEUTRALIZED · +' + points, 2600);
  } else if (game.kills > 0 && game.kills % 5 === 0) {
    hud.toast(`${game.kills} HOSTILES DOWN · COMBO ×${(1 + Math.min(2.5, game.combo * 0.1)).toFixed(1)}`, 1700);
  }
}

function fireShot() {
  camera.getWorldDirection(shotDir).normalize();
  const moving = Math.min(1, player.speed / 7);
  const spread = (weapon.ads > 0.55 ? 0.0018 : 0.0085) + moving * 0.006 + (player.onGround ? 0 : 0.02);
  _right.crossVectors(shotDir, camera.up).normalize();
  _up.crossVectors(_right, shotDir).normalize();
  shotDir.addScaledVector(_right, (Math.random() - 0.5) * spread * 2);
  shotDir.addScaledVector(_up, (Math.random() - 0.5) * spread * 2);
  shotDir.normalize();

  const origin = camera.position.clone();
  weapon.getMuzzleWorld(_muzzle);
  const enemyHit = enemies.raycast(origin, shotDir, 140);

  if (enemyHit) {
    const crit = enemyHit.crit;
    const damage = weapon.damage * (crit ? weapon.critMultiplier : 1);
    const result = enemyHit.enemy.hit(damage, enemyHit.point, crit);
    const color = enemyHit.enemy.def.color;
    fx.impact(enemyHit.point, enemyHit.normal, color, crit);
    fx.tracer(_muzzle, enemyHit.point, crit ? 0xffffff : 0xffd9a0);
    hud.damageNumber(enemyHit.point, camera, damage, crit);
    hud.hitmarker(result.killed, crit);
    if (crit) hud.toast('CRITICAL HIT', 650);
    // small recoil kick on player
    player.addRecoil(0.006 + Math.random() * 0.004, (Math.random() - 0.5) * 0.003);
    audio.hit(crit);
    return;
  }

  // static world
  raycaster.set(origin, shotDir);
  raycaster.far = 160;
  const hits = raycaster.intersectObjects(world.solidMeshes, false);
  let point = null;
  let normal = _normal.set(0, 1, 0);
  if (hits.length) {
    point = hits[0].point;
    if (hits[0].face) normal = hits[0].face.normal.clone().transformDirection(hits[0].object.matrixWorld);
    fx.impact(point, normal, 0xffc070, false);
    fx.tracer(_muzzle, point, 0xffd9a0);
    player.addRecoil(0.006 + Math.random() * 0.004, (Math.random() - 0.5) * 0.003);
  } else {
    _end.copy(origin).addScaledVector(shotDir, 80);
    fx.tracer(_muzzle, _end, 0xffd9a0);
    player.addRecoil(0.007 + Math.random() * 0.004, (Math.random() - 0.5) * 0.003);
  }
}

/* ------------------------------------------------------------------ */
/*  waves                                                             */
/* ------------------------------------------------------------------ */

function buildWaveQueue(wave) {
  const q = [];
  const wasps = 3 + Math.ceil(wave * 1.45);
  const wardens = wave >= 3 ? Math.floor((wave - 1) / 2) : 0;
  const titans = wave % 5 === 0 ? 1 : 0;
  for (let i = 0; i < wasps; i++) q.push('wasp');
  for (let i = 0; i < wardens; i++) q.push('warden');
  for (let i = 0; i < titans; i++) q.push('titan');
  // shuffle, but keep titans near the end so they arrive as a finale
  const shuffled = q.filter(t => t !== 'titan');
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  for (let i = 0; i < titans; i++) shuffled.push('titan');
  return shuffled;
}

function pickSpawn() {
  const pts = world.spawnPoints;
  const viable = pts.filter(p => Math.hypot(p.x - player.position.x, p.z - player.position.z) > 11);
  const pool = viable.length ? viable : pts;
  return pool[Math.floor(Math.random() * pool.length)].clone();
}

function startWave() {
  game.wave += 1;
  game.spawnQueue = buildWaveQueue(game.wave);
  game.waveActive = true;
  game.spawnTimer = 0.5;
  game.waveDelay = 0;
  const titan = game.spawnQueue.includes('titan');
  hud.showWave(
    game.wave % 5 === 0 ? 'HEAVY SIGNATURE DETECTED' : 'HOSTILE UPLINK',
    `WAVE ${String(game.wave).padStart(2, '0')}`,
    titan ? 'TITAN CLASS INBOUND · HOLD FORMATION' : `${game.spawnQueue.length} HOSTILES APPROACHING`,
    3.0
  );
  hud.setObjective(game.spawnQueue.length, game.wave);
  hud.setStatus('COMBAT ACTIVE');
  hud.toast(titan ? 'TITAN CLASS DETECTED' : `WAVE ${String(game.wave).padStart(2, '0')} INBOUND`, 2200);
  audio.wave();
  audio.setCombat(true);
  if (game.wave > 1 && !titan) {
    // randomised tactical chatter
    const lines = [
      'THEY ARE LEARNING. STAY MOBILE.',
      'PERIMETER BREACH DETECTED. KEEP FIRING.',
      'CORE IS STABLE. YOU ARE NOT.',
      'MULTIPLE SIGNATURES. USE THE COVER.',
    ];
    setTimeout(() => { if (game.mode === 'playing') hud.toast(lines[Math.floor(Math.random() * lines.length)], 2200); }, 3100);
  }
}

function endWave() {
  game.waveActive = false;
  game.waveDelay = 5.2;
  const bonus = 200 * game.wave;
  game.score += bonus;
  hud.setScore(game.score);
  player.health = Math.min(player.maxHealth, player.health + 24);
  player.armor = Math.min(player.maxArmor, player.armor + 18);
  hud.healFlash();
  hud.showWave('SECTOR SECURED', `WAVE ${String(game.wave).padStart(2, '0')} CLEAR`, `+${bonus} BONUS · RESUPPLY INBOUND`, 3.2);
  hud.toast(`WAVE CLEAR · +${bonus}`, 2400);
  hud.setStatus('REARMING');
  hud.setObjective(0, game.wave);
  audio.setCombat(false);
  audio.wave();
}

function updateWave(dt) {
  if (game.waveActive) {
    if (game.spawnQueue.length > 0) {
      game.spawnTimer -= dt;
      const maxAlive = Math.min(11, 4 + Math.floor(game.wave / 2));
      if (game.spawnTimer <= 0 && enemies.countAlive() < maxAlive) {
        const type = game.spawnQueue.shift();
        const pos = pickSpawn();
        const e = enemies.spawn(type, pos, game.wave);
        if (type === 'titan') {
          hud.toast('TITAN CLASS ON THE PLATFORM', 2600);
          player.addShake(0.4);
        }
        game.spawnTimer = 0.38 + Math.random() * 0.42;
      }
    }
    hud.setObjective(game.spawnQueue.length + enemies.countAlive(), game.wave);
    if (game.spawnQueue.length === 0 && enemies.countAlive() === 0) {
      endWave();
    }
  } else {
    game.waveDelay -= dt;
    if (game.waveDelay <= 0) startWave();
  }
}

/* ------------------------------------------------------------------ */
/*  main update                                                        */
/* ------------------------------------------------------------------ */

let last = performance.now() / 1000;
let firstFrame = true;

function updateGame(dt, t) {
  game.gameTime += dt;
  if (game.comboTimer > 0) {
    game.comboTimer -= dt;
    if (game.comboTimer <= 0 && game.combo > 0) {
      game.combo = 0;
      hud.setCombo(1);
    }
  }

  player.update(dt, t, input);

  if (input.reloadQueued) {
    input.reloadQueued = false;
    weapon.startReload();
  }
  if (weapon.ammo === 0 && !weapon.reloading) weapon.startReload();

  weapon.update(dt, t, {
    aiming: input.aiming && !player.dead,
    firing: input.firing,
    sprinting: player.sprinting,
    speed: player.speed,
    lookDelta: player.lookDelta,
  });

  if (input.firing && !player.dead && game.mode === 'playing') {
    if (weapon.tryFire()) fireShot();
  }

  enemies.update(dt, t, player);
  fx.update(dt);
  world.update(dt, t, player.position);

  updateWave(dt);

  // health regen feedback
  if (player.health > game.lastHealth + 0.01) hud.healFlash();
  game.lastHealth = player.health;

  hud.updateVitals(player);
  hud.updateAmmo(weapon);
  hud.updateCrosshair(player, weapon);
  hud.drawRadar(enemies.getEnemyPositions(), player, world.core.position, dt);
  hud.setScore(game.score);
  hud.setKills(game.kills);
  if (player.armor < 1) hud.setStatus('SHIELD DEPLETED');
  else if (player.health < 35) hud.setStatus('CRITICAL — SEEK COVER');
  else if (game.waveActive) hud.setStatus('COMBAT ACTIVE');
  else hud.setStatus('REARMING');

  if (player.dead && game.mode === 'playing') {
    // handled by damage callback timeout, but guard here too
  }

  audio.setCombat(game.waveActive && enemies.countAlive() > 0);
}

function updateMenu(dt, t) {
  // slow cinematic drift over the rooftop while the menu is visible
  const a = Math.sin(t * 0.06) * 0.32;
  camera.position.set(Math.sin(a) * 8, 3.4 + Math.sin(t * 0.18) * 0.25, 19 - Math.cos(a) * 2);
  camera.lookAt(0, 8 + Math.sin(t * 0.15) * 1.2, -55);
  world.update(dt, t, { x: 0, z: 15 });
  fx.update(dt);
  hud.drawRadar([], player, world.core.position, dt);
}

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now() / 1000;
  let dt = now - last;
  last = now;
  dt = Math.min(0.05, Math.max(0.0001, dt));
  const t = now;

  if (game.mode === 'playing') {
    updateGame(dt, t);
  } else if (game.mode === 'menu') {
    updateMenu(dt, t);
  } else if (game.mode === 'gameover') {
    // keep the rain and city alive behind the result card
    world.update(dt, t, player.position);
    fx.update(dt);
    hud.drawRadar(enemies.getEnemyPositions(), player, world.core.position, dt);
  }

  composer.render();

  if (firstFrame) {
    firstFrame = false;
    setTimeout(() => hud.hideLoading(), 350);
  }

  // adaptive resolution for slower GPUs
  if (!game.adapted && game.mode === 'playing') {
    game.fpsSamples++;
    game.fpsAccum += dt;
    if (game.fpsSamples >= 120) {
      const avg = game.fpsAccum / game.fpsSamples;
      if (avg > 0.026 && pixelRatio > 0.85) {
        pixelRatio = Math.max(0.85, pixelRatio * 0.8);
        renderer.setPixelRatio(pixelRatio);
        composer.setPixelRatio(pixelRatio);
        composer.setSize(window.innerWidth, window.innerHeight);
        bloom.strength *= 0.85;
        hud.setQuality('ADAPTIVE · PERFORMANCE');
        game.adapted = true;
      }
      game.fpsSamples = 0;
      game.fpsAccum = 0;
    }
  }
}

/* ------------------------------------------------------------------ */
/*  resize                                                             */
/* ------------------------------------------------------------------ */

function onResize() {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloom.resolution.set(w, h);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', () => setTimeout(onResize, 300));

// pause when tab loses visibility
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.mode === 'playing') pauseGame();
});

/* ------------------------------------------------------------------ */
/*  boot                                                               */
/* ------------------------------------------------------------------ */

hud.showMenu(true);
hud.showPause(false);
hud.showGameOver(false);
hud.setVisible(false);
weapon.root.visible = false;
weapon.root.traverse(o => { if (o.isMesh) o.frustumCulled = false; });
last = performance.now() / 1000;
requestAnimationFrame(animate);

// expose a tiny debug surface for automated visual checks
window.__NIGHTFALL__ = {
  startGame, pauseGame, resumeGame, gameOver, startWave, fireShot, damagePlayer,
  game, player, weapon, enemies, world, camera, renderer, hud, input,
};
