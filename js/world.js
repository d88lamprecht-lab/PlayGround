import * as THREE from 'three';
import {
  mulberry32, createGlowTexture, createSparkTexture, createSmokeTexture, createRainTexture,
  createMuzzleTexture, createRingTexture, createFlareTexture, createConcreteTexture,
  createConcreteRoughness, createMetalTexture, createBuildingTextures, createNeonSignTexture,
  createBillboardTexture, createHoloTexture, createArenaLogoTexture, createHazardTexture,
  createPanelTexture, createDecalTexture, createRainSplashTexture, createSteamTexture,
  createCloudTexture, createStreetGridTexture, createTerminalTexture, createFloorMarkTexture,
} from './textures.js';

const TAU = Math.PI * 2;

/* ================================================================== *
 *  NIGHTFALL — rooftop arena + layered neon metropolis
 * ================================================================== */

export class World {
  constructor(scene, renderer, opts = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.low = !!opts.low;
    this.mobile = !!opts.mobile;
    this.rnd = mulberry32(2077);
    this.colliders = [];
    this.solidMeshes = [];
    this.spawnPoints = [];
    this.playerBounds = 23.4;
    this.updaters = [];
    this.beacons = [];
    this.cars = [];
    this.drones = [];
    this.lightningTimer = 12 + Math.random() * 20;
    this.flash = 0;
    this.time = 0;

    this.textures = {
      glowCyan: createGlowTexture('#a8fbff', 0.12),
      glowPink: createGlowTexture('#ff78c4', 0.12),
      glowAmber: createGlowTexture('#ffd08a', 0.12),
      glowWhite: createGlowTexture('#ffffff', 0.12),
      spark: createSparkTexture(),
      smoke: createSmokeTexture(),
      rain: createRainTexture(),
      muzzle: createMuzzleTexture(),
      ring: createRingTexture(),
      flare: createFlareTexture(),
      splash: createRainSplashTexture(),
      steam: createSteamTexture(),
      cloud: createCloudTexture(),
    };

    this._buildEnvironmentMap();
    this._buildSky();
    this._buildCity();
    this._buildMaglev();
    this._buildTraffic();
    this._buildArena();
    this._buildAtmosphere();
    this._buildLighting();
    scene.fog = new THREE.FogExp2(0x0a141d, 0.0046);
  }

  /* ---------------------------------------------------------------- */
  /*  environment reflection                                          */
  /* ---------------------------------------------------------------- */

  _buildEnvironmentMap() {
    const env = new THREE.Scene();
    const geo = new THREE.SphereGeometry(60, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        top: { value: new THREE.Color(0x06121e) },
        horizon: { value: new THREE.Color(0x2b2540) },
        bottom: { value: new THREE.Color(0x030508) },
      },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
        void main(){
          float h = vP.y;
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.4));
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    env.add(new THREE.Mesh(geo, mat));
    const panelGeo = new THREE.PlaneGeometry(18, 8);
    const colors = [0x5ff6ff, 0xff2e88, 0xffb43c, 0x27ffc3];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      const m = new THREE.Mesh(panelGeo, new THREE.MeshBasicMaterial({ color: colors[i % 4], side: THREE.DoubleSide }));
      m.position.set(Math.cos(a) * 24, 4 + (i % 3) * 8, Math.sin(a) * 24);
      m.lookAt(0, 4, 0);
      env.add(m);
    }
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const rt = pmrem.fromScene(env, 0.02);
    this.scene.environment = rt.texture;
    this.scene.environmentIntensity = 0.65;
    pmrem.dispose();
  }

  /* ---------------------------------------------------------------- */
  /*  sky, moon, clouds, stars                                        */
  /* ---------------------------------------------------------------- */

  _buildSky() {
    const geo = new THREE.SphereGeometry(900, 48, 32);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTime: { value: 0 },
        uTop: { value: new THREE.Color(0x02050c) },
        uMid: { value: new THREE.Color(0x0b1a2e) },
        uHorizon: { value: new THREE.Color(0x3a1b3d) },
        uGlow: { value: new THREE.Color(0x8c2a4a) },
      },
      vertexShader: `
        varying vec3 vDir;
        void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform vec3 uTop, uMid, uHorizon, uGlow;
        varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
        }
        float fbm(vec2 p){
          float v = 0.0, a = 0.5;
          for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.03; a *= 0.5; }
          return v;
        }
        void main(){
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.28, h));
          col = mix(col, uTop, smoothstep(0.12, 0.85, h));
          // city light pollution bloom near horizon
          float glow = pow(max(0.0, 1.0 - h*2.4), 2.0) * (0.55 + 0.45*noise(vec2(atan(d.z,d.x)*3.0, 2.0)));
          col += uGlow * glow * 0.22;
          // high cloud bands
          vec2 uv = vec2(atan(d.z, d.x) * 1.7 + uTime * 0.004, d.y * 2.2);
          float cl = smoothstep(0.5, 0.85, fbm(uv * 2.4 + fbm(uv * 1.5)));
          col = mix(col, vec3(0.10,0.12,0.18), cl * smoothstep(0.04, 0.5, h) * 0.55);
          // stars
          if (h > 0.12) {
            vec2 sp = d.xz / max(d.y, 0.1);
            float star = step(0.9975, hash(floor(sp * 90.0)));
            col += vec3(0.55,0.7,0.9) * star * smoothstep(0.12, 0.4, h) * 0.55;
          }
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.skyMat = mat;
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    // moon glow + core
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.textures.glowWhite, color: 0xa9d8ff, transparent: true,
      opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    moon.scale.set(190, 190, 1);
    moon.position.set(-300, 215, -620);
    this.scene.add(moon);

    const moonCore = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.textures.glowWhite, color: 0xf2fbff, transparent: true,
      opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    moonCore.scale.set(44, 44, 1);
    moonCore.position.copy(moon.position);
    this.scene.add(moonCore);

    // high haze clouds
    this.clouds = [];
    for (let i = 0; i < 9; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.cloud, color: i % 3 === 0 ? 0x8b617a : 0x3a5368,
        transparent: true, opacity: 0.26 + this.rnd() * 0.14, depthWrite: false, fog: false,
      }));
      const a = this.rnd() * TAU, r = 320 + this.rnd() * 260;
      s.position.set(Math.cos(a) * r, 80 + this.rnd() * 150, Math.sin(a) * r);
      const sc = 260 + this.rnd() * 260;
      s.scale.set(sc, sc * 0.48, 1);
      s.userData.speed = 0.4 + this.rnd() * 0.7;
      this.clouds.push(s);
      this.scene.add(s);
    }
  }

  /* ---------------------------------------------------------------- */
  /*  layered city                                                    */
  /* ---------------------------------------------------------------- */

  _buildCity() {
    const rnd = this.rnd;
    const variants = 6;
    // Buildings are instanced in four size classes so window grids keep a
    // believable floor height instead of stretching across entire towers.
    const scaleClasses = [
      { x: 0.55, y: 0.58 },
      { x: 1.0, y: 1.1 },
      { x: 1.7, y: 2.0 },
      { x: 2.5, y: 2.9 },
    ];
    const materials = [];
    for (let v = 0; v < variants; v++) {
      const maps = createBuildingTextures(v, 40 + v);
      for (const cls of scaleClasses) {
        const map = maps.map.clone();
        const emissive = maps.emissive.clone();
        for (const t of [map, emissive]) {
          t.repeat.set(cls.x, cls.y);
          t.needsUpdate = true;
        }
        materials.push(new THREE.MeshStandardMaterial({
          map,
          emissiveMap: emissive,
          emissive: 0xffffff,
          emissiveIntensity: 1.55,
          roughness: 0.78,
          metalness: 0.22,
          envMapIntensity: 0.55,
        }));
      }
    }
    const classFor = (b) => {
      const size = Math.max(b.w, b.d, b.h * 0.26);
      if (size > 34 || b.h > 170) return 3;
      if (size > 24 || b.h > 110) return 2;
      if (size > 16 || b.h > 58) return 1;
      return 0;
    };

    this.buildings = [];
    const rings = [
      { count: 26, r0: 58, r1: 112, base: -34, h0: 34, h1: 82, w0: 10, w1: 22, jitter: 0.9 },
      { count: 30, r0: 128, r1: 215, base: -52, h0: 55, h1: 132, w0: 12, w1: 30, jitter: 1.0 },
      { count: 30, r0: 245, r1: 400, base: -72, h0: 80, h1: 230, w0: 16, w1: 42, jitter: 1.1 },
    ];

    for (const ring of rings) {
      for (let i = 0; i < ring.count; i++) {
        const a = (i / ring.count) * TAU + (rnd() - 0.5) * ((TAU / ring.count) * 0.6);
        const r = ring.r0 + rnd() * (ring.r1 - ring.r0);
        const w = ring.w0 + rnd() * (ring.w1 - ring.w0);
        const d = ring.w0 + rnd() * (ring.w1 - ring.w0);
        const h = ring.h0 + rnd() * (ring.h1 - ring.h0);
        this.buildings.push({
          x: Math.cos(a) * r,
          z: Math.sin(a) * r,
          w, d, h,
          base: ring.base + rnd() * 10,
          rot: (rnd() - 0.5) * 0.35,
          variant: Math.floor(rnd() * variants),
          ring: rings.indexOf(ring),
          angle: a,
          radius: r,
        });
      }
    }

    // Instance the building shells per material
    const dummy = new THREE.Object3D();
    const box = new THREE.BoxGeometry(1, 1, 1);
    const byMat = Array.from({ length: variants * scaleClasses.length }, () => []);
    for (const b of this.buildings) byMat[b.variant * scaleClasses.length + classFor(b)].push(b);

    byMat.forEach((list, mi) => {
      if (!list.length) return;
      const inst = new THREE.InstancedMesh(box, materials[mi], list.length);
      inst.castShadow = false;
      inst.receiveShadow = false;
      list.forEach((b, i) => {
        dummy.position.set(b.x, b.base + b.h / 2, b.z);
        dummy.rotation.set(0, b.rot, 0);
        dummy.scale.set(b.w, b.h, b.d);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.scene.add(inst);
    });

    // Rooftop clutter (instanced dark boxes)
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x141b21, roughness: 0.7, metalness: 0.55, envMapIntensity: 0.7 });
    const roofItems = [];
    const antennaItems = [];
    const antennaMat = new THREE.MeshStandardMaterial({ color: 0x2b343c, roughness: 0.5, metalness: 0.8 });
    const beaconPositions = [];

    for (const b of this.buildings) {
      const top = b.base + b.h;
      const n = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) {
        const w = b.w * (0.12 + rnd() * 0.28);
        const d = b.d * (0.12 + rnd() * 0.28);
        const h = 1 + rnd() * 4.5;
        roofItems.push({
          x: b.x + (rnd() - 0.5) * b.w * 0.6,
          z: b.z + (rnd() - 0.5) * b.d * 0.6,
          y: top + h / 2,
          w, h, d,
        });
      }
      if (rnd() > 0.32) {
        const ah = 4 + rnd() * 16;
        antennaItems.push({ x: b.x + (rnd() - 0.5) * b.w * 0.3, z: b.z + (rnd() - 0.5) * b.d * 0.3, y: top + ah / 2, h: ah });
        beaconPositions.push(new THREE.Vector3(b.x, top + ah + 0.3, b.z));
      }
      if (b.ring === 0 && rnd() > 0.6) {
        beaconPositions.push(new THREE.Vector3(b.x, top + 0.5, b.z));
      }
    }

    const makeInstances = (items, geo, mat) => {
      const inst = new THREE.InstancedMesh(geo, mat, items.length);
      items.forEach((it, i) => {
        dummy.position.set(it.x, it.y, it.z);
        dummy.rotation.set(0, it.rot || 0, 0);
        dummy.scale.set(it.w ?? 1, it.h ?? 1, it.d ?? 1);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.scene.add(inst);
      return inst;
    };
    makeInstances(roofItems, new THREE.BoxGeometry(1, 1, 1), roofMat);
    makeInstances(antennaItems, new THREE.CylinderGeometry(0.18, 0.55, 1, 5), antennaMat);

    // Neon edge strips instanced by colour
    const stripColors = [0x5ff6ff, 0xff2e88, 0xffb43c, 0x27ffc3];
    const stripGroups = [[], [], [], []];
    for (const b of this.buildings) {
      if (rnd() > 0.72) continue;
      const ci = Math.floor(rnd() * 4);
      const top = b.base + b.h;
      stripGroups[ci].push({ x: b.x, z: b.z, y: (b.base + top) / 2, w: b.w * 1.012, h: b.h * 0.92, d: 0.16, rot: b.rot, edge: rnd() > 0.5 ? 1 : -1 });
    }
    stripGroups.forEach((list, i) => {
      if (!list.length) return;
      const mat = new THREE.MeshBasicMaterial({ color: stripColors[i], toneMapped: false });
      const geo = new THREE.BoxGeometry(1, 1, 0.2);
      const inst = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach((s, k) => {
        // A thin vertical strip on one face of each building.
        const off = s.edge * s.w * 0.49;
        dummy.position.set(s.x + Math.cos(s.rot) * off, s.y, s.z - Math.sin(s.rot) * off);
        dummy.rotation.set(0, s.rot, 0);
        dummy.scale.set(0.35, s.h, 0.35);
        dummy.updateMatrix();
        inst.setMatrixAt(k, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.scene.add(inst);
    });

    // Beacons as a blinking Points cloud
    const beaconGeo = new THREE.BufferGeometry().setFromPoints(beaconPositions);
    this.beaconMat = new THREE.PointsMaterial({
      color: 0xff3344, size: 3.2, map: this.textures.glowPink, transparent: true,
      opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, fog: false,
    });
    this.scene.add(new THREE.Points(beaconGeo, this.beaconMat));

    // Crown ring on the tallest near tower + signature spire
    this._buildLandmarks();

    // Billboards + neon signs
    this._buildSignage();
    this._buildExtraSkyline();
    this._buildCityDetail();
  }

  /* ---------------------------------------------------------------- */
  /*  close-range metropolis detail                                   */
  /* ---------------------------------------------------------------- */

  _buildCityDetail() {
    const rnd = this.rnd;
    const near = this.buildings.filter(b => b.ring === 0);
    const mid = this.buildings.filter(b => b.ring === 1);

    const structural = new THREE.MeshStandardMaterial({ color: 0x090f15, roughness: 0.52, metalness: 0.62, envMapIntensity: 0.9 });
    const structuralLight = new THREE.MeshStandardMaterial({ color: 0x17212a, roughness: 0.62, metalness: 0.5, envMapIntensity: 0.8 });
    const cyan = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.78 });
    const pink = new THREE.MeshBasicMaterial({ color: 0xff2e88, toneMapped: false, transparent: true, opacity: 0.7 });
    const amber = new THREE.MeshBasicMaterial({ color: 0xffb43c, toneMapped: false, transparent: true, opacity: 0.72 });
    const windowBand = new THREE.MeshBasicMaterial({ color: 0xbff8ff, toneMapped: false, transparent: true, opacity: 0.85 });

    /* --- lower district rooftops just beyond the arena ------------ */
    const lowMaps = createBuildingTextures(4, 909);
    lowMaps.map.repeat.set(2.4, 1.1);
    lowMaps.emissive.repeat.set(2.4, 1.1);
    const lowMat = new THREE.MeshStandardMaterial({
      map: lowMaps.map, emissiveMap: lowMaps.emissive, emissive: 0xffffff,
      emissiveIntensity: 1.15, roughness: 0.82, metalness: 0.2, envMapIntensity: 0.45,
    });
    const tankMat = new THREE.MeshStandardMaterial({ color: 0x1a232b, roughness: 0.58, metalness: 0.66, envMapIntensity: 1.0 });
    const tankBand = new THREE.MeshStandardMaterial({ color: 0x39454f, roughness: 0.42, metalness: 0.82, envMapIntensity: 1.2 });

    const rooftopCount = this.mobile ? 10 : 13;
    for (let i = 0; i < rooftopCount; i++) {
      const a = (i / rooftopCount) * TAU + 0.17 + (rnd() - 0.5) * 0.16;
      const r = 49 + rnd() * 11;
      const w = 6.5 + rnd() * 5;
      const d = 6.5 + rnd() * 5;
      const top = 0.4 + rnd() * 4.6;
      const body = new THREE.Mesh(new THREE.BoxGeometry(w, top + 30, d), lowMat);
      body.position.set(Math.cos(a) * r, top - (top + 30) / 2, Math.sin(a) * r);
      body.rotation.y = (rnd() - 0.5) * 0.4;
      this.scene.add(body);

      // roof lip + bright edge
      const lip = new THREE.Mesh(new THREE.BoxGeometry(w * 1.06, 0.42, d * 1.06), structuralLight);
      lip.position.set(body.position.x, top + 0.18, body.position.z);
      lip.rotation.y = body.rotation.y;
      this.scene.add(lip);
      const edgeMat = i % 3 === 0 ? pink : (i % 3 === 1 ? cyan : amber);
      const edge = new THREE.Mesh(new THREE.BoxGeometry(w * 1.08, 0.1, 0.1), edgeMat);
      edge.position.set(body.position.x, top + 0.42, body.position.z + d * 0.54);
      edge.rotation.y = body.rotation.y;
      this.scene.add(edge);

      // rooftop plant: AC block, vent stack, antenna and blinking light
      const ac = new THREE.Mesh(new THREE.BoxGeometry(w * 0.3, 1.0 + rnd() * 0.8, d * 0.28), structural);
      ac.position.set(body.position.x + (rnd() - 0.5) * w * 0.4, top + 0.8, body.position.z + (rnd() - 0.5) * d * 0.35);
      ac.rotation.y = body.rotation.y + rnd();
      this.scene.add(ac);
      const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 2 + rnd() * 1.6, 7), tankBand);
      stack.position.set(body.position.x - w * 0.24, top + 1.4, body.position.z + d * 0.2);
      this.scene.add(stack);
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.09, 6 + rnd() * 8, 5), structural);
      mast.position.set(body.position.x + w * 0.22, top + 4.6, body.position.z - d * 0.18);
      this.scene.add(mast);
      const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowPink, color: 0xff4455, transparent: true, opacity: 0.8,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      beacon.scale.set(1.4, 1.4, 1);
      beacon.position.set(mast.position.x, mast.position.y + 3.4, mast.position.z);
      this.scene.add(beacon);

      // small holo panel facing the arena
      if (i % 3 === 0) {
        const dir = new THREE.Vector3(-body.position.x, 0, -body.position.z).normalize();
        const panel = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.8), new THREE.MeshBasicMaterial({
          map: createBillboardTexture(i % 6), transparent: true, opacity: 0.85,
          side: THREE.DoubleSide, toneMapped: true,
        }));
        panel.position.set(body.position.x + dir.x * (w * 0.55), top + 2.5, body.position.z + dir.z * (d * 0.55));
        panel.lookAt(0, top + 2.5, 0);
        this.scene.add(panel);
        const panelGlow = new THREE.Sprite(new THREE.SpriteMaterial({
          map: this.textures.glowCyan, color: 0x4bd6ff, transparent: true, opacity: 0.18,
          blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        panelGlow.scale.set(8, 8, 1);
        panelGlow.position.copy(panel.position);
        this.scene.add(panelGlow);
      }
    }

    /* --- horizontal floor ledges break up the facades -------------- */
    const ledgeGeo = new THREE.BoxGeometry(1, 1, 1);
    const ledges = [];
    for (const b of [...near, ...mid]) {
      const n = 3 + Math.floor(rnd() * 3);
      for (let k = 0; k < n; k++) {
        const y = b.base + b.h * (0.18 + (k / n) * 0.68 + rnd() * 0.06);
        ledges.push({
          x: b.x, z: b.z, y, rot: b.rot,
          w: b.w * (1.025 + rnd() * 0.012), h: 0.24 + rnd() * 0.2, d: b.d * (1.025 + rnd() * 0.012),
        });
      }
    }
    const ledgeInst = new THREE.InstancedMesh(ledgeGeo, structuralLight, ledges.length);
    const dummy = new THREE.Object3D();
    ledges.forEach((l, i) => {
      dummy.position.set(l.x, l.y, l.z);
      dummy.rotation.set(0, l.rot, 0);
      dummy.scale.set(l.w, l.h, l.d);
      dummy.updateMatrix();
      ledgeInst.setMatrixAt(i, dummy.matrix);
    });
    ledgeInst.instanceMatrix.needsUpdate = true;
    this.scene.add(ledgeInst);

    // thin lit rails along a selection of those ledges
    const railLights = [];
    for (let i = 0; i < ledges.length; i += 3) {
      const l = ledges[i];
      const dir = new THREE.Vector3(-l.x, 0, -l.z).normalize();
      railLights.push({ x: l.x + dir.x * l.w * 0.52, z: l.z + dir.z * l.d * 0.52, y: l.y + 0.2, rot: l.rot, w: l.w * 0.9 });
    }
    const lightInst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.07, 0.07), cyan, railLights.length);
    railLights.forEach((l, i) => {
      dummy.position.set(l.x, l.y, l.z);
      dummy.rotation.set(0, l.rot, 0);
      dummy.scale.set(l.w, 1, 1);
      dummy.updateMatrix();
      lightInst.setMatrixAt(i, dummy.matrix);
    });
    lightInst.instanceMatrix.needsUpdate = true;
    this.scene.add(lightInst);

    /* --- skybridges link the near towers --------------------------- */
    let bridgeCount = 0;
    for (let i = 0; i < near.length && bridgeCount < (this.mobile ? 6 : 9); i += 2) {
      const a = near[i], b = near[(i + 1) % near.length];
      if (!a || !b) continue;
      const dx = b.x - a.x, dz = b.z - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 12 || dist > 54) continue;
      const topA = a.base + a.h, topB = b.base + b.h;
      const y = Math.min(topA, topB) - 6 - rnd() * 14;
      if (y < 9) continue;
      const len = dist - 5;
      const g = new THREE.Group();
      const deck = new THREE.Mesh(new THREE.BoxGeometry(len, 2.1, 4.4), structural);
      g.add(deck);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(len * 1.01, 0.28, 4.6), structuralLight);
      roof.position.y = 1.18;
      g.add(roof);
      const under = new THREE.Mesh(new THREE.BoxGeometry(len * 0.98, 0.16, 4.2), i % 3 ? cyan : pink);
      under.position.y = -1.12;
      g.add(under);
      for (const zs of [-1, 1]) {
        const windows = new THREE.Mesh(new THREE.BoxGeometry(len * 0.92, 0.38, 0.06), windowBand);
        windows.position.set(0, 0.15, zs * 2.23);
        g.add(windows);
        const sill = new THREE.Mesh(new THREE.BoxGeometry(len * 0.94, 0.09, 0.08), structuralLight);
        sill.position.set(0, -0.08, zs * 2.24);
        g.add(sill);
      }
      // support masts down into the arena-side tower roots
      for (const s of [-1, 1]) {
        const strut = new THREE.Mesh(new THREE.BoxGeometry(0.22, 8, 0.22), structural);
        strut.position.set(s * len * 0.42, -4.2, 0);
        strut.rotation.z = s * 0.16;
        g.add(strut);
      }
      const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowWhite, color: 0xdffcff, transparent: true, opacity: 0.8,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      beacon.scale.set(1.8, 1.8, 1);
      beacon.position.set(0, 1.7, 2.2);
      g.add(beacon);
      const midX = (a.x + b.x) / 2, midZ = (a.z + b.z) / 2;
      g.position.set(midX, y, midZ);
      g.rotation.y = Math.atan2(-dz, dx);
      this.scene.add(g);
      bridgeCount++;
    }

    /* --- rooftop water towers and dishes on nearby towers ---------- */
    const towerCount = this.mobile ? 8 : 12;
    for (let i = 0; i < towerCount; i++) {
      const b = near[(i * 7 + 3) % near.length];
      if (!b) continue;
      const top = b.base + b.h;
      const g = new THREE.Group();
      const scale = 0.8 + rnd() * 0.9;
      // legs
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 3.2, 5), structural);
        leg.position.set(sx * 1.35, 1.6, sz * 1.35);
        g.add(leg);
      }
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.75, 3.0, 12), tankMat);
      tank.position.y = 4.7;
      g.add(tank);
      for (const y of [3.5, 4.8, 6.0]) {
        const band = new THREE.Mesh(new THREE.TorusGeometry(1.86, 0.055, 5, 16), tankBand);
        band.rotation.x = Math.PI / 2;
        band.position.y = y;
        g.add(band);
      }
      const cone = new THREE.Mesh(new THREE.ConeGeometry(2.1, 1.15, 12), structuralLight);
      cone.position.y = 6.75;
      g.add(cone);
      const ladder = new THREE.Mesh(new THREE.BoxGeometry(0.08, 6.2, 0.08), tankBand);
      ladder.position.set(0, 3.1, 1.95);
      g.add(ladder);
      const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowPink, color: 0xff4455, transparent: true, opacity: 0.85,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      beacon.scale.set(1.6, 1.6, 1);
      beacon.position.y = 7.7;
      g.add(beacon);
      g.position.set(b.x + (rnd() - 0.5) * b.w * 0.45, top, b.z + (rnd() - 0.5) * b.d * 0.45);
      g.scale.setScalar(scale);
      g.rotation.y = rnd() * TAU;
      this.scene.add(g);
    }

    /* --- taller crowns, spires and rooftop billboards -------------- */
    const crownMat = new THREE.MeshStandardMaterial({ color: 0x0c141b, roughness: 0.5, metalness: 0.7, envMapIntensity: 0.9 });
    const crownCount = this.mobile ? 12 : 18;
    for (let i = 0; i < crownCount; i++) {
      const b = near[(i * 5 + 1) % near.length];
      if (!b || i % 4 === 2) continue;
      const top = b.base + b.h;
      const tiers = 1 + Math.floor(rnd() * 2);
      let y = top;
      for (let k = 0; k < tiers; k++) {
        const f = 0.66 - k * 0.14;
        const h = 3 + rnd() * 7;
        const tier = new THREE.Mesh(new THREE.BoxGeometry(b.w * f, h, b.d * f), crownMat);
        tier.position.set(b.x, y + h / 2, b.z);
        tier.rotation.y = b.rot;
        this.scene.add(tier);
        const lip = new THREE.Mesh(new THREE.BoxGeometry(b.w * f * 1.03, 0.18, b.d * f * 1.03), i % 2 ? pink : cyan);
        lip.position.set(b.x, y + h, b.z);
        lip.rotation.y = b.rot;
        this.scene.add(lip);
        y += h;
      }
      if (rnd() > 0.55) {
        const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.18, 8 + rnd() * 12, 5), structural);
        spire.position.set(b.x, y + 7, b.z);
        this.scene.add(spire);
        const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
          map: this.textures.glowPink, color: 0xff4455, transparent: true, opacity: 0.8,
          blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
        }));
        beacon.scale.set(1.8, 1.8, 1);
        beacon.position.set(b.x, y + 13, b.z);
        this.scene.add(beacon);
      }
    }

    // rooftop advertisement frames on a few near towers
    for (let i = 0; i < 4; i++) {
      const b = near[(i * 6 + 2) % near.length];
      if (!b) continue;
      const top = b.base + b.h;
      const dir = new THREE.Vector3(-b.x, 0, -b.z).normalize();
      const frame = new THREE.Mesh(new THREE.BoxGeometry(15, 6.4, 0.5), structural);
      frame.position.set(b.x + dir.x * (b.w * 0.36), top + 4.2, b.z + dir.z * (b.d * 0.36));
      frame.lookAt(0, top + 4.2, 0);
      this.scene.add(frame);
      const ad = new THREE.Mesh(new THREE.PlaneGeometry(14.2, 5.6), new THREE.MeshBasicMaterial({
        map: createBillboardTexture((i + 2) % 6), transparent: true, opacity: 0.92,
        side: THREE.DoubleSide, toneMapped: true,
      }));
      ad.position.copy(frame.position).addScaledVector(dir, 0.3);
      ad.lookAt(0, top + 4.2, 0);
      this.scene.add(ad);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowCyan, color: 0x4bd6ff, transparent: true, opacity: 0.16,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      glow.scale.set(30, 18, 1);
      glow.position.copy(ad.position);
      this.scene.add(glow);
    }

    /* --- projecting blade signs and hanging lantern strings -------- */
    const bladeTexts = [
      ['HOTEL', '#ff2e88'], ['07', '#5ff6ff'], ['BAR', '#ffb43c'], ['NEO', '#27ffc3'],
      ['NOODLE', '#ff6bd6'], ['DATA', '#5ff6ff'], ['龍', '#ff2e88'], ['CLINIC', '#27ffc3'],
    ];
    for (let i = 0; i < 10; i++) {
      const b = near[(i * 3 + 2) % near.length];
      if (!b) continue;
      const dir = new THREE.Vector3(-b.x, 0, -b.z).normalize();
      const tangent = new THREE.Vector3(-dir.z, 0, dir.x);
      const y = b.base + b.h * (0.3 + rnd() * 0.4);
      const [text, color] = bladeTexts[i % bladeTexts.length];
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 9), new THREE.MeshBasicMaterial({
        map: createNeonSignTexture(text, color, { vertical: true }),
        transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
        depthWrite: false, toneMapped: false,
      }));
      sign.position.set(
        b.x + dir.x * (b.w * 0.5 + 2.1) + tangent.x * (rnd() - 0.5) * b.w * 0.4,
        y,
        b.z + dir.z * (b.d * 0.5 + 2.1) + tangent.z * (rnd() - 0.5) * b.d * 0.4
      );
      sign.rotation.y = Math.atan2(dir.x, dir.z) + Math.PI / 2;
      this.scene.add(sign);
      const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 4.2), structural);
      bracket.position.set(sign.position.x, y + 4.3, sign.position.z);
      bracket.rotation.y = sign.rotation.y;
      this.scene.add(bracket);
    }

    const lanternGlow = new THREE.MeshBasicMaterial({ color: 0xffb45a, toneMapped: false });
    const lanternCount = this.mobile ? 4 : 6;
    for (let i = 0; i < lanternCount; i++) {
      const a = near[(i * 5 + 1) % near.length];
      const b = near[(i * 5 + 4) % near.length];
      if (!a || !b) continue;
      const y = Math.min(a.base + a.h, b.base + b.h) - 12 - rnd() * 6;
      const start = new THREE.Vector3(a.x, y, a.z);
      const end = new THREE.Vector3(b.x, y, b.z);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.y -= 2.2;
      const cable = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([start, mid, end]), 16, 0.04, 4, false),
        structural
      );
      this.scene.add(cable);
      for (let k = 1; k <= 5; k++) {
        const u = k / 6;
        const p = new THREE.Vector3().lerpVectors(start, end, u);
        p.y = y - Math.sin(u * Math.PI) * 2.2;
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 7, 5), lanternGlow);
        bulb.position.copy(p);
        this.scene.add(bulb);
        const halo = new THREE.Sprite(new THREE.SpriteMaterial({
          map: this.textures.glowAmber, color: 0xffb45a, transparent: true, opacity: 0.5,
          blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        halo.scale.set(1.5, 1.5, 1);
        halo.position.copy(p);
        this.scene.add(halo);
      }
    }

    /* --- suspended banners between the near towers ----------------- */
    const bannerMats = [0, 1, 2, 3, 4, 5].map(i => new THREE.MeshBasicMaterial({
      map: createBillboardTexture(i), transparent: true, opacity: 0.82,
      side: THREE.DoubleSide, toneMapped: true,
    }));
    for (let i = 0; i < 8; i++) {
      const a = near[(i * 4 + 1) % near.length];
      const b = near[(i * 4 + 2) % near.length];
      if (!a || !b) continue;
      const topA = a.base + a.h, topB = b.base + b.h;
      const y = Math.min(topA, topB) - 10 - rnd() * 8;
      const midX = (a.x + b.x) / 2, midZ = (a.z + b.z) / 2;
      const dx = b.x - a.x, dz = b.z - a.z;
      const len = Math.hypot(dx, dz) * 0.5;
      const banner = new THREE.Mesh(new THREE.PlaneGeometry(len, 5.5), bannerMats[i % bannerMats.length]);
      banner.position.set(midX, y, midZ);
      banner.rotation.y = Math.atan2(-dz, dx);
      this.scene.add(banner);
      const cable = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 1), structural);
      cable.position.set(midX, y + 3, midZ);
      cable.rotation.y = Math.atan2(-dz, dx);
      cable.scale.z = len;
      this.scene.add(cable);
    }

    /* --- atmospheric haze layers for depth ------------------------- */
    const hazeCount = this.mobile ? 8 : 14;
    for (let i = 0; i < hazeCount; i++) {
      const a = rnd() * TAU;
      const r = 65 + rnd() * 130;
      const haze = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.cloud, color: i % 4 === 0 ? 0xff6aa8 : 0x6fa8c8,
        transparent: true, opacity: 0.055 + rnd() * 0.07,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      haze.scale.set(70 + rnd() * 120, 22 + rnd() * 30, 1);
      haze.position.set(Math.cos(a) * r, 8 + rnd() * 45, Math.sin(a) * r);
      this.scene.add(haze);
    }
  }

  _buildExtraSkyline() {
    const rnd = this.rnd;

    // round towers break up the box skyline
    const cylinderMaps = createBuildingTextures(2, 404);
    cylinderMaps.map.repeat.set(3, 5);
    cylinderMaps.emissive.repeat.set(3, 5);
    const cylinderMat = new THREE.MeshStandardMaterial({
      map: cylinderMaps.map, emissiveMap: cylinderMaps.emissive, emissive: 0xffffff, emissiveIntensity: 1.3,
      roughness: 0.7, metalness: 0.35, envMapIntensity: 0.5,
    });
    for (let i = 0; i < 9; i++) {
      const a = rnd() * TAU;
      const r = 165 + rnd() * 180;
      const h = 120 + rnd() * 150;
      const w = 12 + rnd() * 14;
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.06, 1, 14), cylinderMat);
      tower.position.set(Math.cos(a) * r, -70 + h / 2, Math.sin(a) * r);
      tower.scale.set(w, h, w);
      this.scene.add(tower);
      const crown = new THREE.Mesh(
        new THREE.TorusGeometry(w * 0.45, 0.5, 5, 28),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff2e88 : 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.6 })
      );
      crown.position.set(Math.cos(a) * r, -70 + h, Math.sin(a) * r);
      crown.rotation.x = Math.PI / 2;
      this.scene.add(crown);
      const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowPink, color: 0xff4455, transparent: true, opacity: 0.8,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      beacon.scale.set(4, 4, 1);
      beacon.position.set(Math.cos(a) * r, -70 + h + 3, Math.sin(a) * r);
      this.scene.add(beacon);
    }

    // stepped crowns on the closest towers
    const crownMat = new THREE.MeshStandardMaterial({ color: 0x10171e, roughness: 0.6, metalness: 0.6, envMapIntensity: 0.8 });
    const crownGlow = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.6 });
    for (let i = 0; i < 14; i++) {
      const b = this.buildings[i * 2 % 26];
      if (!b) continue;
      const top = b.base + b.h;
      const segH = 6 + rnd() * 16;
      const seg = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.56, segH, b.d * 0.56), crownMat);
      seg.position.set(b.x, top + segH / 2, b.z);
      seg.rotation.y = b.rot;
      this.scene.add(seg);
      const ring = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.58, 0.2, b.d * 0.58), crownGlow);
      ring.position.set(b.x, top + segH, b.z);
      ring.rotation.y = b.rot;
      this.scene.add(ring);
    }

    // street canyon far below the rooftop
    const streetMat = new THREE.MeshBasicMaterial({
      map: createStreetGridTexture(), transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: true,
    });
    const streets = new THREE.Mesh(new THREE.PlaneGeometry(760, 760), streetMat);
    streets.rotation.x = -Math.PI / 2;
    streets.position.y = -39;
    this.scene.add(streets);

    // tiny street-level traffic points
    const carCount = 90;
    const cp = new Float32Array(carCount * 3);
    this.streetCars = [];
    for (let i = 0; i < carCount; i++) {
      const lane = i % 2;
      const t = rnd() * 300 - 150;
      const r = 42 + rnd() * 90;
      cp[i * 3] = lane ? r : t;
      cp[i * 3 + 1] = -37.5 + rnd() * 0.4;
      cp[i * 3 + 2] = lane ? t : r;
      this.streetCars.push({ i, lane, t, r, speed: (rnd() > 0.5 ? 1 : -1) * (4 + rnd() * 8) });
    }
    const carGeo = new THREE.BufferGeometry();
    carGeo.setAttribute('position', new THREE.BufferAttribute(cp, 3));
    this.streetCarGeo = carGeo;
    const carPts = new THREE.Points(carGeo, new THREE.PointsMaterial({
      color: 0xffd08a, size: 1.6, map: this.textures.glowAmber, transparent: true,
      opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, toneMapped: false,
    }));
    this.scene.add(carPts);

    // horizon light pollution
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * TAU + 0.3;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: i % 2 ? this.textures.glowPink : this.textures.glowCyan,
        color: i % 2 ? 0xff2e88 : 0x3ec8e8, transparent: true, opacity: 0.08,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }));
      const r = 280 + rnd() * 120;
      s.position.set(Math.cos(a) * r, 8 + rnd() * 55, Math.sin(a) * r);
      s.scale.set(230, 230, 1);
      this.scene.add(s);
    }

    // a colossal holographic koi swimming through the skyline
    const koiMat = new THREE.MeshBasicMaterial({
      map: createHoloTexture(0), transparent: true, opacity: 0.55, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false,
    });
    const koi = new THREE.Mesh(new THREE.PlaneGeometry(62, 62), koiMat);
    koi.position.set(-150, 98, -205);
    koi.lookAt(0, 20, 0);
    this.scene.add(koi);
    this.koi = koi;

    // patrol airships
    this.airships = [];
    const adMats = [0, 1, 4].map((i) => new THREE.MeshBasicMaterial({
      map: createBillboardTexture(i), transparent: true, opacity: 0.9, side: THREE.DoubleSide, toneMapped: true,
    }));
    for (let i = 0; i < 2; i++) {
      const g = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0x303a43, roughness: 0.45, metalness: 0.7, envMapIntensity: 0.9 });
      const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), bodyMat);
      body.scale.set(16, 4.2, 4.2);
      g.add(body);
      const gondola = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.4, 2.2), bodyMat);
      gondola.position.y = -3.4;
      g.add(gondola);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(11, 5), adMats[i % adMats.length]);
      panel.position.set(0, -1.8, 4.3);
      g.add(panel);
      const panelBack = panel.clone();
      panelBack.position.z = -4.3;
      panelBack.rotation.y = Math.PI;
      g.add(panelBack);
      for (const sx of [-1, 1]) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(5, 1.2, 0.2), bodyMat);
        fin.position.set(sx * 13, 0, 0);
        fin.rotation.z = sx * 0.25;
        g.add(fin);
      }
      for (let k = 0; k < 4; k++) {
        const lamp = new THREE.Sprite(new THREE.SpriteMaterial({
          map: k % 2 ? this.textures.glowPink : this.textures.glowWhite,
          color: k % 2 ? 0xff2e88 : 0xdffcff, transparent: true, opacity: 0.8,
          blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
        }));
        lamp.scale.set(2.2, 2.2, 1);
        lamp.position.set(-12 + k * 8, -3.2, 2.3);
        g.add(lamp);
      }
      const angle = i * 2.7 + rnd();
      const radius = 145 + i * 55;
      const height = 92 + i * 34;
      g.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      g.rotation.y = -angle + Math.PI / 2;
      g.scale.setScalar(1.1 + i * 0.35);
      this.airships.push({ g, angle, radius, height, speed: 0.008 + i * 0.006 });
      this.scene.add(g);
    }
  }

  _buildLandmarks() {
    const rnd = this.rnd;
    // colossal arcology tower
    const towerX = 96, towerZ = -300;
    const tower = new THREE.Group();
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x121a22, roughness: 0.55, metalness: 0.7, envMapIntensity: 0.8,
      emissive: 0x0a2230, emissiveIntensity: 0.6,
    });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(16, 30, 300, 8), towerMat);
    body.position.y = 80;
    tower.add(body);
    const crownMat = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.7 });
    for (let i = 0; i < 6; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(18 - i * 1.6, 0.22, 6, 40), crownMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 150 + i * 12;
      tower.add(ring);
    }
    for (let i = 0; i < 12; i++) {
      const band = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 150, 1.4),
        new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xff2e88 : 0x2aa9c8, toneMapped: false, transparent: true, opacity: 0.55 })
      );
      const a = (i / 12) * TAU;
      band.position.set(Math.cos(a) * 22, 40, Math.sin(a) * 22);
      band.rotation.y = -a;
      tower.add(band);
    }
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 1.1, 70, 5), crownMat);
    spire.position.y = 250;
    tower.add(spire);
    tower.position.set(towerX, -20, towerZ);
    this.scene.add(tower);
    this.arcology = tower;

    // giant holo billboard suspended over the city
    const holoTex = createHoloTexture(1);
    const holoMat = new THREE.MeshBasicMaterial({
      map: holoTex, transparent: true, opacity: 0.8, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false,
    });
    const holo = new THREE.Mesh(new THREE.PlaneGeometry(110, 110), holoMat);
    holo.position.set(30, 155, -365);
    holo.lookAt(0, 30, 0);
    this.scene.add(holo);
    this.holoAd = holo;
    const holoGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.textures.glowCyan, color: 0x4bd6ff, transparent: true, opacity: 0.25,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    holoGlow.scale.set(190, 190, 1);
    holoGlow.position.copy(holo.position);
    this.scene.add(holoGlow);
    this.holoGlow = holoGlow;

    // second, farther holo ring — spinning lotus sigil
    const sigil = new THREE.Mesh(
      new THREE.PlaneGeometry(85, 85),
      new THREE.MeshBasicMaterial({
        map: createHoloTexture(2), transparent: true, opacity: 0.5, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false,
      })
    );
    sigil.position.set(-210, 120, -300);
    sigil.lookAt(0, 30, 0);
    this.scene.add(sigil);
    this.sigil = sigil;

    // skybridge between mid towers (long glowing line)
    const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x0b1016, roughness: 0.4, metalness: 0.8 });
    const bridge = new THREE.Group();
    const walk = new THREE.Mesh(new THREE.BoxGeometry(120, 3, 7), bridgeMat);
    bridge.add(walk);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(120, 0.3, 0.25), new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false }));
    strip.position.set(0, 1.6, 3.4);
    bridge.add(strip);
    bridge.position.set(-120, 52, -170);
    bridge.rotation.y = 0.5;
    this.scene.add(bridge);
  }

  _buildSignage() {
    const rnd = this.rnd;
    const billboardTextures = Array.from({ length: 6 }, (_, i) => createBillboardTexture(i));
    const billboardMats = billboardTextures.map(t => new THREE.MeshBasicMaterial({ map: t, toneMapped: true }));
    const signTexts = [
      ['電脳', '#ff2e88'], ['夜城', '#5ff6ff'], ['未来', '#ffb43c'], ['龍', '#27ffc3'],
      ['サイバー', '#ff6bd6'], ['HOTEL', '#5ff6ff'], ['NOODLE', '#ffb43c'], ['BAR', '#ff2e88'],
      ['07', '#27ffc3'], ['NEO', '#ff6bd6'],
    ];
    const signMats = signTexts.map(([t, c]) => new THREE.MeshBasicMaterial({
      map: createNeonSignTexture(t, c, { vertical: t.length < 4 && /[^\x00-\x7F]/.test(t) }),
      transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
      depthWrite: false, toneMapped: false,
    }));

    const nearest = [...this.buildings].filter(b => b.ring <= 1).sort((a, b) => a.radius - b.radius);
    const used = new Set();

    // Large billboards facing arena
    for (let i = 0; i < Math.min(9, nearest.length); i++) {
      const b = nearest[Math.floor(i * nearest.length / 9)];
      if (!b || used.has(b)) continue;
      used.add(b);
      const dir = new THREE.Vector3(-b.x, 0, -b.z).normalize();
      const h = b.base + b.h;
      const y = h * 0.62 + b.base * 0.38;
      const w = Math.min(b.w * 0.86, 23);
      const bh = w * 0.62;
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, bh), billboardMats[i % billboardMats.length]);
      plane.position.set(b.x + dir.x * (b.w / 2 + 0.9), y, b.z + dir.z * (b.d / 2 + 0.9));
      plane.lookAt(0, y, 0);
      this.scene.add(plane);
      // frame
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(w * 1.05, bh * 1.07, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x070b10, roughness: 0.4, metalness: 0.8 })
      );
      frame.position.copy(plane.position);
      frame.position.addScaledVector(dir, -0.35);
      frame.rotation.y = plane.rotation.y;
      this.scene.add(frame);
      // soft spill light (emissive plane only, no real light)
      const spill = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowCyan, color: 0x3fd0ff, transparent: true, opacity: 0.12,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      spill.scale.set(w * 2.2, w * 2.2, 1);
      spill.position.copy(plane.position).addScaledVector(dir, 1.4);
      this.scene.add(spill);
    }

    // Vertical neon banners
    for (let i = 0; i < 18; i++) {
      const b = this.buildings[Math.floor(rnd() * Math.min(28, this.buildings.length))];
      if (!b) continue;
      const dir = new THREE.Vector3(-b.x, 0, -b.z).normalize();
      const h = b.base + b.h;
      const signH = Math.min(14 + rnd() * 10, b.h * 0.35);
      const signW = signH * 0.25;
      const y = h * (0.35 + rnd() * 0.45) + b.base * 0.2;
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(signW, signH), signMats[i % signMats.length]);
      sign.position.set(
        b.x + dir.x * (b.w / 2 + 0.7) + (rnd() - 0.5) * b.w * 0.5,
        y,
        b.z + dir.z * (b.d / 2 + 0.7) + (rnd() - 0.5) * b.d * 0.5
      );
      sign.lookAt(0, y, 0);
      this.scene.add(sign);
    }
  }

  /* ---------------------------------------------------------------- */
  /*  maglev ring                                                     */
  /* ---------------------------------------------------------------- */

  _buildMaglev() {
    const radius = 52, y = 14.5;
    const railMat = new THREE.MeshStandardMaterial({ color: 0x202b34, roughness: 0.4, metalness: 0.9, envMapIntensity: 1.2 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false });
    const group = new THREE.Group();

    for (const off of [-1.5, 1.5]) {
      const rail = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.38, 8, 160), railMat);
      rail.rotation.x = Math.PI / 2;
      rail.position.y = y + off * 0.02;
      group.add(rail);
    }
    const deck = new THREE.Mesh(new THREE.TorusGeometry(radius, 1.2, 6, 160), new THREE.MeshStandardMaterial({ color: 0x0a1015, roughness: 0.7, metalness: 0.6 }));
    deck.rotation.x = Math.PI / 2;
    deck.position.y = y - 1.4;
    group.add(deck);

    const underglow = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.09, 4, 200), glowMat);
    underglow.rotation.x = Math.PI / 2;
    underglow.position.y = y - 2.55;
    group.add(underglow);

    // support pylons
    const pillarGeo = new THREE.CylinderGeometry(0.55, 1.1, 42, 6);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x141c23, roughness: 0.62, metalness: 0.7 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(Math.cos(a) * radius, y - 22, Math.sin(a) * radius);
      group.add(p);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.25, 0.7), glowMat);
      lamp.position.set(Math.cos(a) * radius, y - 3.9, Math.sin(a) * radius);
      group.add(lamp);
    }

    // train
    this.train = new THREE.Group();
    const carBody = new THREE.MeshStandardMaterial({ color: 0xd6dde2, roughness: 0.3, metalness: 0.75, envMapIntensity: 1.4 });
    const carWindow = new THREE.MeshBasicMaterial({ color: 0xbdf4ff, toneMapped: false });
    const carCount = 8;
    for (let i = 0; i < carCount; i++) {
      const car = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.2, 2.7), carBody);
      body.position.y = 0;
      car.add(body);
      const win = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.6, 2.74), carWindow);
      win.position.y = 0.42;
      car.add(win);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(6.24, 0.16, 2.72), new THREE.MeshBasicMaterial({ color: 0xffb43c, toneMapped: false }));
      stripe.position.y = -0.55;
      car.add(stripe);
      const a = -(i * 6.9) / radius;
      car.position.set(Math.cos(a) * radius, y + 0.5, Math.sin(a) * radius);
      car.rotation.y = -a + Math.PI / 2;
      this.train.add(car);
    }
    this.trainRadius = radius;
    this.trainY = y + 0.5;
    this.trainAngle = 0.7;
    group.add(this.train);
    this.scene.add(group);
    // Overhead ring accent lights
    const accents = new THREE.Group();
    for (let i = 0; i < 44; i++) {
      const a = (i / 44) * TAU;
      const dot = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowCyan, color: i % 5 === 0 ? 0xff2e88 : 0x5ff6ff,
        transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      dot.scale.set(1.6, 1.6, 1);
      dot.position.set(Math.cos(a) * radius, y + 2.2, Math.sin(a) * radius);
      accents.add(dot);
    }
    this.scene.add(accents);
  }

  /* ---------------------------------------------------------------- */
  /*  flying traffic + drones                                         */
  /* ---------------------------------------------------------------- */

  _buildTraffic() {
    const rnd = this.rnd;
    const bodyGeo = new THREE.BoxGeometry(3.4, 0.55, 1.35);
    const bodyMats = [
      new THREE.MeshStandardMaterial({ color: 0x20262c, roughness: 0.3, metalness: 0.9, envMapIntensity: 1.3 }),
      new THREE.MeshStandardMaterial({ color: 0x38202a, roughness: 0.3, metalness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x182830, roughness: 0.3, metalness: 0.9 }),
    ];
    const headMat = new THREE.SpriteMaterial({ map: this.textures.glowWhite, color: 0xdff8ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    const tailMat = new THREE.SpriteMaterial({ map: this.textures.glowPink, color: 0xff2e5a, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });

    const laneCount = this.low ? 16 : 30;
    for (let i = 0; i < laneCount; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(bodyGeo, bodyMats[i % 3]);
      g.add(body);
      const head = new THREE.Sprite(headMat);
      head.scale.set(3.2, 3.2, 1);
      head.position.set(1.9, 0, 0);
      g.add(head);
      const tail = new THREE.Sprite(tailMat);
      tail.scale.set(1.6, 1.6, 1);
      tail.position.set(-1.85, 0, 0);
      g.add(tail);
      const radius = 105 + rnd() * 190;
      const angle = rnd() * TAU;
      const height = 28 + rnd() * 75;
      const speed = (0.05 + rnd() * 0.11) * (rnd() > 0.5 ? 1 : -1);
      g.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      g.rotation.y = -angle + (speed > 0 ? Math.PI / 2 : -Math.PI / 2);
      g.scale.setScalar(0.85 + rnd() * 0.9);
      this.cars.push({ g, radius, angle, height, speed, bob: rnd() * TAU });
      this.scene.add(g);
    }

    // low patrol drones just outside the arena
    for (let i = 0; i < 7; i++) {
      const g = new THREE.Group();
      const shell = new THREE.Mesh(new THREE.OctahedronGeometry(0.55), new THREE.MeshStandardMaterial({ color: 0x232d36, metalness: 0.9, roughness: 0.3 }));
      g.add(shell);
      const eye = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.textures.glowAmber, color: 0xffa040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
      eye.scale.set(1.8, 1.8, 1);
      eye.position.y = -0.25;
      g.add(eye);
      const radius = 34 + this.rnd() * 24;
      const angle = this.rnd() * TAU;
      g.position.set(Math.cos(angle) * radius, 6 + this.rnd() * 6, Math.sin(angle) * radius);
      this.drones.push({ g, radius, angle, height: g.position.y, speed: 0.08 + this.rnd() * 0.12, bob: this.rnd() * TAU });
      this.scene.add(g);
    }

    // searchlights
    this.searchlights = [];
    const beamMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, fog: false,
      uniforms: { uColor: { value: new THREE.Color(0x8fdcff) }, uStrength: { value: 0.15 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uStrength; varying vec2 vUv;
        void main(){ float a = pow(1.0 - vUv.y, 2.2) * uStrength; gl_FragColor = vec4(uColor, a); }`,
    });
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU + 0.4;
      const radius = 110 + i * 22;
      const grp = new THREE.Group();
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 12, 150, 14, 1, true), beamMat);
      beam.position.y = 75;
      grp.add(beam);
      grp.position.set(Math.cos(a) * radius, 18 + i * 6, Math.sin(a) * radius);
      grp.rotation.z = 0.28;
      grp.rotation.x = Math.sin(a) * 0.15;
      this.searchlights.push({ g: grp, speed: 0.08 + i * 0.035, phase: i * 1.8 });
      this.scene.add(grp);
    }
  }

  /* ---------------------------------------------------------------- */
  /*  rooftop arena                                                   */
  /* ---------------------------------------------------------------- */

  _buildArena() {
    const rnd = this.rnd;
    const concrete = createConcreteTexture([7, 7]);
    const rough = createConcreteRoughness([7, 7]);
    const floorMat = new THREE.MeshPhysicalMaterial({
      map: concrete, roughnessMap: rough, roughness: 0.72, metalness: 0.3,
      clearcoat: 1.0, clearcoatRoughness: 0.14, envMapIntensity: 1.9, color: 0xd7dee1,
    });
    const arena = new THREE.Mesh(new THREE.BoxGeometry(56, 1.4, 56), floorMat);
    arena.position.y = -0.7;
    arena.receiveShadow = true;
    this.scene.add(arena);
    this.floor = arena;
    this.solidMeshes.push(arena);

    // dark underside / support mass, dressed as a lit megabuilding facade
    const supMaps = createBuildingTextures(3, 91);
    supMaps.map.repeat.set(3, 1.5);
    supMaps.emissive.repeat.set(3, 1.5);
    const support = new THREE.Mesh(new THREE.BoxGeometry(58, 42, 58), new THREE.MeshStandardMaterial({
      map: supMaps.map, emissiveMap: supMaps.emissive, emissive: 0xffffff, emissiveIntensity: 0.95,
      roughness: 0.72, metalness: 0.3, envMapIntensity: 0.7,
    }));
    support.position.y = -22.4;
    this.scene.add(support);
    // glowing crown bands and corner spines on the megabuilding below
    const supBandMat = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.55 });
    const supPinkMat = new THREE.MeshBasicMaterial({ color: 0xff2e88, toneMapped: false, transparent: true, opacity: 0.5 });
    for (const y of [-2.2, -12.5, -29.5]) {
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * TAU;
        const band = new THREE.Mesh(new THREE.BoxGeometry(59, 0.11, 0.16), i % 2 ? supPinkMat : supBandMat);
        band.position.set(Math.sin(a) * 29.05, y, Math.cos(a) * 29.05);
        band.rotation.y = a;
        this.scene.add(band);
      }
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const spine = new THREE.Mesh(new THREE.BoxGeometry(0.16, 40, 0.16), supBandMat);
      spine.position.set(sx * 29.05, -22, sz * 29.05);
      this.scene.add(spine);
    }

    // wet puddles
    const puddleMat = new THREE.MeshPhysicalMaterial({
      color: 0x061018, roughness: 0.05, metalness: 0.92, transparent: true, opacity: 0.82,
      clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.2,
    });
    for (let i = 0; i < 16; i++) {
      const p = new THREE.Mesh(new THREE.CircleGeometry(1, 20), puddleMat);
      p.scale.set(1 + rnd() * 3.2, 0.6 + rnd() * 1.9, 1);
      p.rotation.x = -Math.PI / 2;
      p.rotation.z = rnd() * TAU;
      p.position.set((rnd() - 0.5) * 47, 0.012, (rnd() - 0.5) * 47);
      this.scene.add(p);
    }

    // neon reflections smeared across wet concrete
    const reflColors = [0x5ff6ff, 0xff2e88, 0xffb43c, 0x27ffc3];
    for (let i = 0; i < 20; i++) {
      const c = reflColors[i % 4];
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(0.22 + rnd() * 0.7, 5 + rnd() * 13),
        new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.1 + rnd() * 0.12, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
      );
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = (rnd() - 0.5) * 0.3;
      m.position.set((rnd() - 0.5) * 44, 0.018, (rnd() - 0.5) * 44);
      this.scene.add(m);
    }

    // hazard rim stripes
    const hazard = createHazardTexture([6, 1]);
    const hazardMat = new THREE.MeshStandardMaterial({ map: hazard, roughness: 0.55, metalness: 0.4, emissive: 0x2a1a04, emissiveIntensity: 0.25 });
    for (let i = 0; i < 4; i++) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(56, 0.3, 1.3), hazardMat);
      const a = (i / 4) * TAU;
      strip.position.set(Math.sin(a) * 27.2, 0.15, Math.cos(a) * 27.2);
      strip.rotation.y = a;
      this.scene.add(strip);
    }

    // central logo decal
    const logoMat = new THREE.MeshBasicMaterial({
      map: createArenaLogoTexture(), transparent: true, opacity: 0.4,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    });
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), logoMat);
    logo.rotation.x = -Math.PI / 2;
    logo.position.y = 0.022;
    this.scene.add(logo);

    // floor guide lines
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffb43c, transparent: true, opacity: 0.2, toneMapped: false });
    for (const z of [-12, 12]) {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(30, 0.18), lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.02, z);
      this.scene.add(line);
    }

    // perimeter parapet + railing
    const railMat = new THREE.MeshStandardMaterial({ color: 0x38434c, roughness: 0.36, metalness: 0.92, envMapIntensity: 1.3 });
    const glowRail = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, transparent: true, opacity: 0.7, toneMapped: false });
    const postGeo = new THREE.BoxGeometry(0.16, 1.7, 0.16);
    const railGeo = new THREE.BoxGeometry(1, 0.11, 0.11);
    const posts = [];
    const rails = [];
    for (let side = 0; side < 4; side++) {
      const a = (side / 4) * TAU;
      const nx = Math.sin(a), nz = Math.cos(a);
      for (let i = 0; i <= 24; i++) {
        const t = (i / 24 - 0.5) * 53.6;
        posts.push({ x: nx * 26.8 + nz * t, z: nz * 26.8 - nx * t });
      }
      for (let level = 0; level < 2; level++) {
        const rail = new THREE.Mesh(railGeo, railMat);
        rail.position.set(nx * 26.8, 0.82 + level * 0.62, nz * 26.8);
        rail.rotation.y = a;
        rail.scale.x = 53.6;
        this.scene.add(rail);
        rails.push(rail);
      }
      const glow = new THREE.Mesh(railGeo, glowRail);
      glow.position.set(nx * 26.8, 1.46, nz * 26.8);
      glow.rotation.y = a;
      glow.scale.x = 53.6;
      this.scene.add(glow);
    }
    const dummy = new THREE.Object3D();
    const postInst = new THREE.InstancedMesh(postGeo, railMat, posts.length);
    posts.forEach((p, i) => {
      dummy.position.set(p.x, 0.85, p.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      postInst.setMatrixAt(i, dummy.matrix);
    });
    postInst.instanceMatrix.needsUpdate = true;
    this.scene.add(postInst);

    // parapet blocks
    const parapetMat = new THREE.MeshStandardMaterial({ color: 0x1b242b, roughness: 0.8, metalness: 0.25 });
    for (let side = 0; side < 4; side++) {
      const a = (side / 4) * TAU;
      const p = new THREE.Mesh(new THREE.BoxGeometry(55, 0.7, 0.7), parapetMat);
      p.position.set(Math.sin(a) * 27.6, 0.35, Math.cos(a) * 27.6);
      p.rotation.y = a;
      this.scene.add(p);
    }

    // cover crates
    this._buildCrates();
    // barrels
    this._buildBarrels();
    // pipes, vents, AC
    this._buildProps();
    // extra set dressing
    this._buildClutter();
    // data core
    this._buildCore();
    // light masts + overhead cables
    this._buildMasts();
    // close-range rooftop machinery and maintenance dressing
    this._buildArenaDetails();
  }

  _buildArenaDetails() {
    const rnd = this.rnd;
    const metal = new THREE.MeshStandardMaterial({ color: 0x2c363f, roughness: 0.42, metalness: 0.88, envMapIntensity: 1.15 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x0c1217, roughness: 0.62, metalness: 0.7 });
    const paint = new THREE.MeshStandardMaterial({ color: 0x38464e, roughness: 0.7, metalness: 0.35 });
    const amber = new THREE.MeshBasicMaterial({ color: 0xffb43c, toneMapped: false, transparent: true, opacity: 0.85 });
    const red = new THREE.MeshBasicMaterial({ color: 0xff3344, toneMapped: false, transparent: true, opacity: 0.9 });

    // satellite uplink dishes
    for (const [x, z, rot] of [[-22, -19, 0.4], [23, 6, -1.7]]) {
      const g = new THREE.Group();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.55, 12), dark);
      base.position.y = 0.28;
      g.add(base);
      const column = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 1.4, 9), metal);
      column.position.y = 1.15;
      g.add(column);
      const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.22), metal);
      yoke.position.y = 1.85;
      g.add(yoke);
      const bowl = new THREE.Mesh(
        new THREE.SphereGeometry(1.45, 20, 12, 0, TAU, 0, Math.PI * 0.36),
        new THREE.MeshStandardMaterial({ color: 0x9aa8b2, roughness: 0.55, metalness: 0.72, side: THREE.DoubleSide, envMapIntensity: 1.3 })
      );
      bowl.position.y = 1.9;
      bowl.rotation.x = -0.72;
      g.add(bowl);
      const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.1, 5), metal);
      feed.position.set(0, 2.5, 0.55);
      feed.rotation.x = 0.9;
      g.add(feed);
      const receiver = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), amber);
      receiver.position.set(0, 2.95, 0.9);
      g.add(receiver);
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
      this._addCollider(x - 1.2, x + 1.2, z - 1.2, z + 1.2, 'dish');
    }

    // maintenance hut with ribbed door and service pipes
    const hut = new THREE.Group();
    const hutBody = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.6, 3.2), new THREE.MeshStandardMaterial({
      map: createPanelTexture(), roughness: 0.72, metalness: 0.45, envMapIntensity: 0.9,
    }));
    hutBody.position.y = 1.3;
    hut.add(hutBody);
    this.solidMeshes.push(hutBody);
    const hutRoof = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.22, 3.6), dark);
    hutRoof.position.y = 2.72;
    hut.add(hutRoof);
    for (let i = 0; i < 5; i++) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.3, 3.25), metal);
      rib.position.set(-1.9 + i * 0.95, 1.25, 0);
      hut.add(rib);
    }
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.05, 0.08), dark);
    door.position.set(0.8, 1.05, 1.63);
    hut.add(door);
    for (let i = 0; i < 6; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.02), paint);
      slat.position.set(0.8, 0.25 + i * 0.3, 1.68);
      hut.add(slat);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.42), new THREE.MeshBasicMaterial({
      map: createNeonSignTexture('MAINT', '#ffb43c'), transparent: true, toneMapped: false,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    sign.position.set(-1.25, 2.1, 1.64);
    hut.add(sign);
    // roof vent + conduit
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.1, 8), metal);
    vent.position.set(-1.5, 3.2, -0.8);
    hut.add(vent);
    const ventCap = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.3, 8), dark);
    ventCap.position.set(-1.5, 3.9, -0.8);
    hut.add(ventCap);
    for (let i = 0; i < 3; i++) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 1.7, 6), metal);
      pipe.position.set(2.4, 0.85, -0.9 + i * 0.55);
      hut.add(pipe);
    }
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.14, 0.2), amber);
    lamp.position.set(1.95, 2.45, 1.2);
    hut.add(lamp);
    hut.position.set(-19.5, 0, 10.5);
    hut.rotation.y = 0.45;
    this.scene.add(hut);
    this._addCollider(-22.1, -16.9, 8.2, 12.8, 'hut');

    // edge pipe runs with valves and flanges
    for (const side of [-1, 1]) {
      for (let row = 0; row < 2; row++) {
        const z = side * 24.8;
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 34, 8), metal);
        pipe.rotation.z = Math.PI / 2;
        pipe.position.set(row ? 7 : -7, 0.35 + row * 0.38, z);
        this.scene.add(pipe);
        for (let i = 0; i < 8; i++) {
          const flange = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.06, 5, 10), dark);
          flange.rotation.y = Math.PI / 2;
          flange.position.set(-14 + i * 4.2, 0.35 + row * 0.38, z);
          this.scene.add(flange);
        }
      }
      // valve wheel
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.055, 5, 12), amber);
      wheel.position.set(side * 7, 0.78, side * 24.7);
      wheel.rotation.x = Math.PI / 2;
      this.scene.add(wheel);
    }

    // hazard cones and tool cases near the perimeter
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xff6a1a, roughness: 0.6, metalness: 0.1, emissive: 0x361002, emissiveIntensity: 0.4 });
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffe8cf, toneMapped: false });
    for (const [x, z, r] of [[-13, -22], [14, -22.5], [21, 16], [-21, -13], [3, 22], [-3, -23]]) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.9, 10), coneMat);
      c.position.set(x, 0.45, z);
      this.scene.add(c);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.23, 0.13, 10), stripeMat);
      band.position.set(x, 0.52, z);
      this.scene.add(band);
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.6), dark);
      base.position.set(x, 0.03, z);
      base.rotation.y = r;
      this.scene.add(base);
    }
    for (const [x, z, r] of [[-17.5, -20, 0.3], [18.5, -19, -0.5], [-22, 2, 1.2]]) {
      const boxCase = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.5, 0.5), dark);
      boxCase.position.set(x, 0.25, z);
      boxCase.rotation.y = r;
      this.scene.add(boxCase);
      const latch = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.52), amber);
      latch.position.set(x, 0.28, z);
      latch.rotation.y = r;
      this.scene.add(latch);
    }

    // beacon lights on the four corner posts
    this.cornerBeacons = [];
    for (const [x, z] of [[-27, -27], [27, -27], [-27, 27], [27, 27]]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 1.2, 7), metal);
      post.position.set(x, 0.6, z);
      this.scene.add(post);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), red);
      cap.position.set(x, 1.25, z);
      this.scene.add(cap);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowPink, color: 0xff3344, transparent: true, opacity: 0.8,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      glow.scale.set(1.6, 1.6, 1);
      glow.position.set(x, 1.25, z);
      this.scene.add(glow);
      this.cornerBeacons.push(glow);
    }
  }

  _addCollider(minX, maxX, minZ, maxZ, tag = 'prop') {
    this.colliders.push({ minX, maxX, minZ, maxZ, tag });
  }

  _buildCrates() {
    const rnd = this.rnd;
    const panel = createPanelTexture();
    const crateMat = new THREE.MeshStandardMaterial({ map: panel, roughness: 0.6, metalness: 0.6, envMapIntensity: 1.1 });
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xffb43c, transparent: true, opacity: 0.55, toneMapped: false });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x11171c, roughness: 0.7, metalness: 0.7 });

    const spots = [
      [-14, -10, 3.0, 0.2, 1], [-11.5, -11, 2.3, 0.2, 2], [15, -12, 2.8, -0.15, 1],
      [-17, 7, 2.5, 0.4, 1], [17, 4, 3.2, -0.3, 1], [8, 14, 2.4, 0.6, 2],
      [-6, 16, 2.8, 0, 1], [19, 17, 2.2, 0.2, 1], [-20, -3, 2.6, 0.1, 1],
    ];
    for (const [x, z, size, rot, stack] of spots) {
      const g = new THREE.Group();
      for (let s = 0; s < stack; s++) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.82, size), crateMat);
        c.position.y = size * 0.41 + s * size * 0.84;
        c.castShadow = true; c.receiveShadow = true;
        g.add(c);
        this.solidMeshes.push(c);
        const band = new THREE.Mesh(new THREE.BoxGeometry(size * 1.01, 0.06, size * 1.01), edgeMat);
        band.position.y = c.position.y + size * 0.28;
        g.add(band);
        const cornerGeo = new THREE.BoxGeometry(0.18, size * 0.84, 0.18);
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
          const corner = new THREE.Mesh(cornerGeo, darkMat);
          corner.position.set(sx * size * 0.49, c.position.y, sz * size * 0.49);
          g.add(corner);
        }
      }
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
      const r = size * 0.86;
      this._addCollider(x - r, x + r, z - r, z + r, 'crate');
    }
  }

  _buildBarrels() {
    const spots = [[-21, -8], [-19, -10], [12, -19], [9, -18], [20, 10], [18, 12], [-9, 19], [5, -6]];
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0x2c3a42, roughness: 0.45, metalness: 0.8, envMapIntensity: 1.2 });
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.9, toneMapped: false });
    for (const [x, z] of spots) {
      const g = new THREE.Group();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 1.4, 16), barrelMat);
      b.position.y = 0.7; b.castShadow = true;
      g.add(b);
      this.solidMeshes.push(b);
      for (const y of [0.36, 1.04]) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(0.53, 0.035, 6, 20), ringMat);
        r.rotation.x = Math.PI / 2;
        r.position.y = y;
        g.add(r);
      }
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.08, 12), ringMat);
      cap.position.y = 1.46;
      g.add(cap);
      g.position.set(x, 0, z);
      this.scene.add(g);
      this._addCollider(x - 0.55, x + 0.55, z - 0.55, z + 0.55, 'barrel');
    }
  }

  _buildClutter() {
    const rnd = this.rnd;
    const metal = createMetalTexture([2, 2]);
    const metalMat = new THREE.MeshStandardMaterial({ map: metal, roughness: 0.4, metalness: 0.9, envMapIntensity: 1.25 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x0e1419, roughness: 0.72, metalness: 0.6 });
    const cyan = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, transparent: true, opacity: 0.85, toneMapped: false });
    const amber = new THREE.MeshBasicMaterial({ color: 0xffb43c, transparent: true, opacity: 0.75, toneMapped: false });

    // player terminals with live screens
    const screenTex = createTerminalTexture();
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: true });
    const terminals = [[-20.5, -6.5, 0.55], [20.5, 5.5, -0.6], [-10.5, 21.5, 2.6]];
    for (const [x, z, rot] of terminals) {
      const g = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.9, 0.8), metalMat);
      base.position.y = 0.45;
      g.add(base);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.62), screenMat);
      screen.position.set(0, 1.2, 0);
      screen.rotation.x = -0.42;
      g.add(screen);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.75, 0.12), dark);
      frame.position.set(0, 1.2, -0.04);
      frame.rotation.x = -0.42;
      g.add(frame);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowCyan, color: 0x6dffde, transparent: true, opacity: 0.25,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      glow.scale.set(2.4, 2.4, 1);
      glow.position.set(0, 1.25, 0.25);
      g.add(glow);
      for (let i = 0; i < 3; i++) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.12), dark);
        key.position.set(-0.25 + i * 0.25, 0.95, 0.36);
        g.add(key);
      }
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
      this._addCollider(x - 0.85, x + 0.85, z - 0.55, z + 0.55, 'terminal');
    }

    // ammo crates and scattered cases
    for (const [x, z, rot] of [[-16, 13, 0.3], [16, -14, -0.2], [2, 19, 0.7], [-1, -12, 0.2]]) {
      const g = new THREE.Group();
      const crate = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.55, 0.8), dark);
      crate.position.y = 0.28;
      g.add(crate);
      const lid = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.08, 0.84), metalMat);
      lid.position.y = 0.58;
      g.add(lid);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.84), cyan);
      strip.position.y = 0.4;
      g.add(strip);
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
    }

    // floor service cables
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x080c10, roughness: 0.9 });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU + 0.4;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.cos(a) * 3.2, 0.05, -18 + Math.sin(a) * 3.2),
        new THREE.Vector3(Math.cos(a) * 10, 0.035, -13 + Math.sin(a) * 7),
        new THREE.Vector3(Math.cos(a) * 17, 0.03, -6 + Math.sin(a) * 10),
        new THREE.Vector3(Math.cos(a) * 23, 0.03, 3 + Math.sin(a) * 14),
      ]);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 30, 0.045, 4, false), cableMat);
      this.scene.add(tube);
    }

    // floor stencils and chevrons
    const markMat = new THREE.MeshBasicMaterial({
      map: createFloorMarkTexture(), transparent: true, opacity: 0.33,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    });
    for (const [x, z, rot] of [[13, -11, 0.4], [-14, 8, 1.2]]) {
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 6.4), markMat);
      mark.rotation.x = -Math.PI / 2;
      mark.rotation.z = rot;
      mark.position.set(x, 0.024, z);
      this.scene.add(mark);
    }
    const chevronMat = new THREE.MeshBasicMaterial({ color: 0xffb43c, transparent: true, opacity: 0.35, toneMapped: false });
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU;
      const x = Math.cos(a) * 23.5, z = Math.sin(a) * 23.5;
      const shape = new THREE.Shape();
      shape.moveTo(0, 0.6); shape.lineTo(-0.5, -0.2); shape.lineTo(0.5, -0.2); shape.closePath();
      const chev = new THREE.Mesh(new THREE.ShapeGeometry(shape), chevronMat);
      chev.rotation.x = -Math.PI / 2;
      chev.rotation.z = -a + Math.PI / 2;
      chev.position.set(x, 0.026, z);
      this.scene.add(chev);
    }

    // scattered debris
    for (let i = 0; i < 16; i++) {
      const d = new THREE.Mesh(new THREE.BoxGeometry(0.2 + rnd() * 0.4, 0.06, 0.15 + rnd() * 0.3), dark);
      d.position.set((rnd() - 0.5) * 46, 0.04, (rnd() - 0.5) * 46);
      d.rotation.y = rnd() * TAU;
      this.scene.add(d);
    }

    // cable reels near the north edge
    for (const [x, z] of [[-22, -14], [21, 20]]) {
      const reel = new THREE.Group();
      for (const s of [-1, 1]) {
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.12, 18), metalMat);
        disc.rotation.z = Math.PI / 2;
        disc.position.x = s * 0.4;
        reel.add(disc);
      }
      const core = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.8, 12), dark);
      core.rotation.z = Math.PI / 2;
      reel.add(core);
      reel.position.set(x, 0.75, z);
      reel.rotation.y = rnd() * TAU;
      this.scene.add(reel);
    }

    // holographic lane markers around the core
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.08), dark);
      post.position.set(Math.cos(a) * 8.5, 0.45, -18 + Math.sin(a) * 8.5);
      this.scene.add(post);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.12), i % 2 ? amber : cyan);
      tip.position.set(Math.cos(a) * 8.5, 0.92, -18 + Math.sin(a) * 8.5);
      this.scene.add(tip);
    }
  }

  _buildProps() {
    const metal = createMetalTexture([2, 2]);
    const metalMat = new THREE.MeshStandardMaterial({ map: metal, roughness: 0.42, metalness: 0.9, envMapIntensity: 1.2 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x121920, roughness: 0.65, metalness: 0.65 });

    // AC condenser units
    const acSpots = [[-22, -17, 0], [22, -7, 0.3], [-22, 16, 0.1], [12, 21, -0.2], [-15, 20, 0.4]];
    for (const [x, z, rot] of acSpots) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.5, 2.2), metalMat);
      body.position.y = 0.75; body.castShadow = true;
      g.add(body);
      this.solidMeshes.push(body);
      const grill = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.12, 18), dark);
      grill.rotation.x = Math.PI / 2;
      grill.position.set(0, 0.85, 1.12);
      g.add(grill);
      const fan = new THREE.Mesh(new THREE.TorusGeometry(0.63, 0.04, 5, 18), new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false }));
      fan.position.copy(grill.position);
      g.add(fan);
      for (const sx of [-1, 1]) {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 6), metalMat);
        pipe.position.set(sx * 1.2, 1.8, 0);
        g.add(pipe);
      }
      // service panel, status light and side vent slats
      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.06), dark);
      panel.position.set(0.95, 0.85, 1.14);
      g.add(panel);
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.03), new THREE.MeshBasicMaterial({ color: 0x61ffcf, toneMapped: false }));
      led.position.set(1.08, 0.9, 1.18);
      g.add(led);
      for (let k = 0; k < 5; k++) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 1.6), dark);
        slat.position.set(-1.56, 0.45 + k * 0.2, 0);
        g.add(slat);
      }
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
      this._addCollider(x - 1.8, x + 1.8, z - 1.4, z + 1.4, 'ac');
    }

    // low concrete barriers
    const barrierMat = new THREE.MeshStandardMaterial({ map: createConcreteTexture([2, 1]), roughness: 0.85, metalness: 0.1, color: 0x9aa4a8 });
    const barrierSpots = [[-7, -5, 0.1], [7, 6, -0.1], [-13, 1, Math.PI / 2], [12, 1, Math.PI / 2], [3, -15, 0.3], [-16, 12, 0.1]];
    for (const [x, z, rot] of barrierSpots) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.15, 0.75), barrierMat);
      b.position.set(x, 0.575, z);
      b.rotation.y = rot;
      b.castShadow = true; b.receiveShadow = true;
      this.scene.add(b);
      this.solidMeshes.push(b);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.45, 0.16, 0.77), new THREE.MeshBasicMaterial({ color: 0xffb43c, transparent: true, opacity: 0.55, toneMapped: false }));
      stripe.position.set(x, 0.95, z);
      stripe.rotation.y = rot;
      this.scene.add(stripe);
      const r = rot === 0 ? [2.25, 0.45] : [0.45, 2.25];
      this._addCollider(x - r[0], x + r[0], z - r[1], z + r[1], 'barrier');
    }

    // floor pipes along east/west edge
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 9, 8), metalMat);
        pipe.rotation.z = Math.PI / 2;
        pipe.position.set(side * 24, 0.18 + i * 0.02, -12 + i * 7.5);
        this.scene.add(pipe);
        const flange = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.05, 5, 10), metalMat);
        flange.rotation.y = Math.PI / 2;
        flange.position.set(side * 25.5, 0.18, -12 + i * 7.5);
        this.scene.add(flange);
      }
    }

    // generator boxes with glow strips near edges
    for (const [x, z, rot] of [[-23, 5, 0], [23, 14, 0], [23, -15, 0], [-23, 19, 0]]) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 1.6), metalMat);
      body.position.y = 1; body.castShadow = true;
      g.add(body);
      this.solidMeshes.push(body);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.12, 1.66), new THREE.MeshBasicMaterial({ color: 0xffb43c, toneMapped: false }));
      strip.position.y = 1.5;
      g.add(strip);
      // cooling grille, warning placard and power socket
      for (let k = 0; k < 4; k++) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.055, 0.04), dark);
        slat.position.set(-0.25, 0.55 + k * 0.18, 0.82);
        g.add(slat);
      }
      const placard = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.28), new THREE.MeshBasicMaterial({
        map: createHazardTexture([2, 1]), toneMapped: true,
      }));
      placard.position.set(0.65, 1.0, 0.815);
      g.add(placard);
      const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.12, 10), metalMat);
      socket.rotation.x = Math.PI / 2;
      socket.position.set(-0.65, 0.5, 0.82);
      g.add(socket);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff4052, toneMapped: false }));
      beacon.position.set(0.95, 1.7, 0.7);
      g.add(beacon);
      g.position.set(x, 0, z); g.rotation.y = rot;
      this.scene.add(g);
      this._addCollider(x - 1.3, x + 1.3, z - 1, z + 1, 'generator');
    }

    // vent grates with steam emitters
    this.vents = [];
    const ventSpots = [[-18, -18], [18, 18], [18, -18], [-18, 18], [0, 19]];
    const grateMat = new THREE.MeshStandardMaterial({ color: 0x0a1014, roughness: 0.8, metalness: 0.7 });
    for (const [x, z] of ventSpots) {
      const grate = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 1.6), grateMat);
      grate.position.set(x, 0.04, z);
      this.scene.add(grate);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.12, 1.9), metalMat);
      frame.position.set(x, 0.02, z);
      this.scene.add(frame);
      const sprites = [];
      for (let i = 0; i < 3; i++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({
          map: this.textures.steam, transparent: true, opacity: 0.0, depthWrite: false,
          color: 0xc5e5ee, blending: THREE.NormalBlending,
        }));
        s.position.set(x, 0.2, z);
        s.scale.set(2, 2, 1);
        s.userData.phase = i / 3;
        sprites.push(s);
        this.scene.add(s);
      }
      this.vents.push({ x, z, sprites });
    }
  }

  _buildCore() {
    const g = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x18222a, roughness: 0.42, metalness: 0.85, envMapIntensity: 1.3 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.9 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.2, 0.6, 6), baseMat);
    base.position.y = 0.3;
    base.castShadow = true;
    g.add(base);
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 2.1, 1.4, 6), baseMat);
    plinth.position.y = 1.2;
    g.add(plinth);
    this.solidMeshes.push(base, plinth);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.4, 12), glowMat);
    core.position.y = 2.7;
    g.add(core);
    const cage = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), new THREE.MeshBasicMaterial({
      color: 0x5ff6ff, wireframe: true, transparent: true, opacity: 0.5, toneMapped: false,
    }));
    cage.position.y = 2.7;
    g.add(cage);
    this.coreCage = cage;
    this.coreRings = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5 + i * 0.28, 0.045, 6, 40), new THREE.MeshBasicMaterial({
        color: i === 1 ? 0xff2e88 : 0x5ff6ff, transparent: true, opacity: 0.7, toneMapped: false,
      }));
      ring.position.y = 2.7;
      ring.rotation.x = Math.PI / 2 + i * 0.35;
      ring.rotation.y = i * 0.8;
      g.add(ring);
      this.coreRings.push(ring);
    }
    // cables to floor
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.cos(a) * 2.2, 1.9, Math.sin(a) * 2.2),
        new THREE.Vector3(Math.cos(a) * 3.5, 1.0, Math.sin(a) * 3.5),
        new THREE.Vector3(Math.cos(a) * 5.2, 0.05, Math.sin(a) * 5.2),
      ]);
      const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 14, 0.055, 5, false), baseMat);
      g.add(cable);
    }
    const light = new THREE.PointLight(0x5ff6ff, 26, 16, 2);
    light.position.set(0, 2.8, 0);
    g.add(light);
    this.coreLight = light;
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.textures.glowCyan, color: 0x8bf7ff, transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.set(8, 8, 1);
    halo.position.y = 2.7;
    g.add(halo);
    g.position.set(0, 0, -18);
    this.scene.add(g);
    this.core = g;
    this._addCollider(-3.2, 3.2, -21.2, -14.8, 'core');
    this.spawnPoints.push(new THREE.Vector3(0, 0.8, -25));
  }

  _buildMasts() {
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x2a343c, roughness: 0.45, metalness: 0.88, envMapIntensity: 1.2 });
    const lampMats = {
      cyan: new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false }),
      pink: new THREE.MeshBasicMaterial({ color: 0xff2e88, toneMapped: false }),
    };
    const mastPositions = [[-24, -23], [24, -23], [-24, 22], [24, 22]];
    const tops = [];
    for (let i = 0; i < mastPositions.length; i++) {
      const [x, z] = mastPositions[i];
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.22, 7.6, 8), mastMat);
      pole.position.y = 3.8;
      g.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.12, 0.12), mastMat);
      arm.position.set(x > 0 ? -1.0 : 1.0, 7.2, 0);
      g.add(arm);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.3), i % 2 ? lampMats.pink : lampMats.cyan);
      lamp.position.set(x > 0 ? -1.8 : 1.8, 7.05, 0);
      g.add(lamp);
      const lampGlow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: i % 2 ? this.textures.glowPink : this.textures.glowCyan,
        color: i % 2 ? 0xff5aac : 0x7cf8ff, transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      lampGlow.scale.set(5, 5, 1);
      lampGlow.position.set(x > 0 ? -1.8 : 1.8, 6.7, 0);
      g.add(lampGlow);
      g.position.set(x, 0, z);
      g.rotation.y = Math.atan2(-x, -z);
      this.scene.add(g);
      tops.push(new THREE.Vector3(x, 7.2, z));
    }
    // overhead cables with lamps
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x05080a, roughness: 0.9 });
    for (let i = 0; i < 6; i++) {
      const a = tops[i % tops.length], b = tops[(i + 1) % tops.length];
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.y -= 1.4 + (i % 3) * 0.5;
      const curve = new THREE.CatmullRomCurve3([a, mid, b]);
      const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.03, 4, false), cableMat);
      this.scene.add(cable);
      const lamp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.textures.glowAmber, color: 0xffc06a, transparent: true, opacity: 0.6,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      lamp.scale.set(1.1, 1.1, 1);
      lamp.position.copy(mid).add(new THREE.Vector3(0, 0.1, 0));
      this.scene.add(lamp);
    }
  }

  /* ---------------------------------------------------------------- */
  /*  atmosphere                                                      */
  /* ---------------------------------------------------------------- */

  _buildAtmosphere() {
    // rain
    const count = this.low ? 1400 : 3400;
    const pos = new Float32Array(count * 3);
    this.rainSpeeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 72;
      pos[i * 3 + 1] = Math.random() * 38;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 72;
      this.rainSpeeds[i] = 16 + Math.random() * 16;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.rainGeo = rainGeo;
    const rainMat = new THREE.PointsMaterial({
      color: 0xbdefff, size: 0.42, map: this.textures.rain, transparent: true,
      opacity: 0.42, depthWrite: false, blending: THREE.AdditiveBlending,
      sizeAttenuation: true, toneMapped: false, alphaTest: 0.02,
    });
    this.rain = new THREE.Points(rainGeo, rainMat);
    this.rain.frustumCulled = false;
    this.scene.add(this.rain);

    // splashes
    this.splashes = [];
    const splashGeo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 26; i++) {
      const m = new THREE.Mesh(splashGeo, new THREE.MeshBasicMaterial({
        map: this.textures.splash, transparent: true, opacity: 0, depthWrite: false,
        blending: THREE.AdditiveBlending, toneMapped: false,
      }));
      m.rotation.x = -Math.PI / 2;
      m.position.set((Math.random() - 0.5) * 48, 0.03, (Math.random() - 0.5) * 48);
      m.userData.t = Math.random();
      m.userData.speed = 0.8 + Math.random() * 0.8;
      this.splashes.push(m);
      this.scene.add(m);
    }

    // drifting embers / dust
    const emberCount = this.low ? 90 : 200;
    const ep = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount; i++) {
      ep[i * 3] = (Math.random() - 0.5) * 56;
      ep[i * 3 + 1] = 0.5 + Math.random() * 16;
      ep[i * 3 + 2] = (Math.random() - 0.5) * 56;
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(ep, 3));
    this.emberGeo = emberGeo;
    this.embers = new THREE.Points(emberGeo, new THREE.PointsMaterial({
      color: 0xffb566, size: 0.1, map: this.textures.spark, transparent: true,
      opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    this.scene.add(this.embers);

    // ground fog planes
    const fogTex = createCloudTexture();
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(70, 18), new THREE.MeshBasicMaterial({
        map: fogTex, transparent: true, opacity: 0.14, depthWrite: false, color: 0x79a3b8,
        blending: THREE.AdditiveBlending,
      }));
      m.position.set(0, 2.4 + i * 3.4, -4);
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = i * 0.7;
      this.scene.add(m);
    }
  }

  _buildLighting() {
    const hemi = new THREE.HemisphereLight(0x6b9cb8, 0x22121a, 0.78);
    this.scene.add(hemi);

    const moon = new THREE.DirectionalLight(0xa8d4ff, 1.28);
    moon.position.set(-90, 120, -80);
    moon.castShadow = true;
    moon.shadow.mapSize.set(this.mobile ? 512 : 1024, this.mobile ? 512 : 1024);
    moon.shadow.camera.left = -34;
    moon.shadow.camera.right = 34;
    moon.shadow.camera.top = 34;
    moon.shadow.camera.bottom = -34;
    moon.shadow.camera.near = 20;
    moon.shadow.camera.far = 260;
    moon.shadow.bias = -0.0005;
    this.scene.add(moon);
    this.moonLight = moon;

    // core key light
    const key = new THREE.SpotLight(0xbffaff, 90, 55, Math.PI * 0.24, 0.6, 1.7);
    key.position.set(0, 22, 4);
    key.target.position.set(0, 0, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(this.mobile ? 512 : 1024, this.mobile ? 512 : 1024);
    key.shadow.bias = -0.001;
    this.scene.add(key);
    this.scene.add(key.target);
    this.keyLight = key;

    // coloured fills (no shadows)
    const pinks = [
      [-24, 4.8, -23, 0xff2e88, 30, 20],
      [24, 4.8, -23, 0x5ff6ff, 30, 20],
      [-24, 4.8, 22, 0x5ff6ff, 26, 18],
      [24, 4.8, 22, 0xffb43c, 26, 18],
    ];
    for (const [x, y, z, c, i, dist] of pinks) {
      const l = new THREE.PointLight(c, i, dist, 2);
      l.position.set(x, y, z);
      this.scene.add(l);
    }

    // flickering neon sign near the arena edge
    this.flickerLight = new THREE.PointLight(0xff2e88, 20, 18, 2);
    this.flickerLight.position.set(-25, 5, 6);
    this.scene.add(this.flickerLight);

    // local neon tubes around arena perimeter
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0x5ff6ff, toneMapped: false, transparent: true, opacity: 0.85 });
    const pinkTubeMat = new THREE.MeshBasicMaterial({ color: 0xff2e88, toneMapped: false, transparent: true, opacity: 0.85 });
    const tubeGeo = new THREE.BoxGeometry(8, 0.07, 0.07);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      const t = new THREE.Mesh(tubeGeo, i % 2 ? pinkTubeMat : tubeMat);
      t.position.set(Math.sin(a) * 26.2, 3.4, Math.cos(a) * 26.2);
      t.rotation.y = a;
      this.scene.add(t);
    }

    // lightning flash source
    this.flashLight = new THREE.DirectionalLight(0xcfe8ff, 0);
    this.flashLight.position.set(50, 180, -100);
    this.scene.add(this.flashLight);
  }

  /* ---------------------------------------------------------------- */
  /*  runtime                                                         */
  /* ---------------------------------------------------------------- */

  update(dt, t, playerPos) {
    this.time = t;
    this.skyMat.uniforms.uTime.value = t;

    // clouds drift
    for (const c of this.clouds) {
      c.position.x += c.userData.speed * dt * 1.6;
      if (c.position.x > 620) c.position.x = -620;
    }

    // beacons pulse
    this.beaconMat.opacity = 0.45 + Math.sin(t * 2.4) * 0.4;

    // holo advertisements
    if (this.holoAd) {
      this.holoAd.material.opacity = 0.62 + Math.sin(t * 1.7) * 0.12 + (Math.sin(t * 31) > 0.96 ? -0.28 : 0);
      this.holoAd.rotation.z = Math.sin(t * 0.12) * 0.02;
      this.holoGlow.material.opacity = 0.18 + Math.sin(t * 1.7) * 0.05;
    }
    if (this.sigil) {
      this.sigil.material.opacity = 0.38 + Math.sin(t * 0.9 + 2) * 0.1;
      this.sigil.rotation.z = t * 0.025;
    }

    // maglev train glides around the arena
    this.trainAngle += dt * 0.055;
    const r = this.trainRadius;
    this.train.children.forEach((car, i) => {
      const a = this.trainAngle - i * 6.9 / r;
      car.position.set(Math.cos(a) * r, this.trainY, Math.sin(a) * r);
      car.rotation.y = -a + Math.PI / 2;
    });

    // traffic
    for (const c of this.cars) {
      c.angle += c.speed * dt;
      c.g.position.x = Math.cos(c.angle) * c.radius;
      c.g.position.z = Math.sin(c.angle) * c.radius;
      c.g.position.y = c.height + Math.sin(t * 0.9 + c.bob) * 0.5;
      c.g.rotation.y = -c.angle + (c.speed > 0 ? Math.PI / 2 : -Math.PI / 2);
    }

    // patrol drones
    for (const d of this.drones) {
      d.angle += d.speed * dt;
      d.g.position.x = Math.cos(d.angle) * d.radius;
      d.g.position.z = Math.sin(d.angle) * d.radius;
      d.g.position.y = d.height + Math.sin(t * 1.4 + d.bob) * 0.6;
      d.g.rotation.y = -d.angle;
    }

    // searchlights
    for (const s of this.searchlights) {
      s.g.rotation.y = t * s.speed + s.phase;
      s.g.rotation.z = 0.22 + Math.sin(t * 0.4 + s.phase) * 0.12;
    }

    // street traffic below the rooftop
    if (this.streetCars) {
      const p = this.streetCarGeo.attributes.position.array;
      for (const c of this.streetCars) {
        c.t += c.speed * dt;
        if (c.t > 150) c.t = -150;
        if (c.t < -150) c.t = 150;
        const i3 = c.i * 3;
        if (c.lane) { p[i3] = c.t; p[i3 + 2] = c.r; }
        else { p[i3] = c.r; p[i3 + 2] = c.t; }
      }
      this.streetCarGeo.attributes.position.needsUpdate = true;
    }

    // airships drift through the canyon of towers
    if (this.airships) {
      for (const a of this.airships) {
        a.angle += a.speed * dt;
        a.g.position.set(Math.cos(a.angle) * a.radius, a.height + Math.sin(t * 0.25 + a.radius) * 1.5, Math.sin(a.angle) * a.radius);
        a.g.rotation.y = -a.angle + Math.PI / 2;
        a.g.rotation.z = Math.sin(t * 0.3) * 0.03;
      }
    }
    if (this.koi) {
      this.koi.position.y = 98 + Math.sin(t * 0.22) * 6;
      this.koi.rotation.z = Math.sin(t * 0.16) * 0.1;
      this.koi.material.opacity = 0.45 + Math.sin(t * 0.7) * 0.12;
    }

    // rain follows player
    const p = this.rainGeo.attributes.position.array;
    const px = playerPos ? playerPos.x : 0, pz = playerPos ? playerPos.z : 0;
    for (let i = 0; i < this.rainSpeeds.length; i++) {
      const i3 = i * 3;
      p[i3 + 1] -= this.rainSpeeds[i] * dt;
      p[i3] += dt * 1.6;
      if (p[i3 + 1] < 0) {
        p[i3 + 1] += 38;
        p[i3] = px + (Math.random() - 0.5) * 72;
        p[i3 + 2] = pz + (Math.random() - 0.5) * 72;
      }
      if (Math.abs(p[i3] - px) > 38) p[i3] = px + (Math.random() - 0.5) * 72;
      if (Math.abs(p[i3 + 2] - pz) > 38) p[i3 + 2] = pz + (Math.random() - 0.5) * 72;
    }
    this.rainGeo.attributes.position.needsUpdate = true;

    // splashes
    for (const s of this.splashes) {
      s.userData.t += dt * s.userData.speed;
      if (s.userData.t > 1) {
        s.userData.t = 0;
        s.position.set((Math.random() - 0.5) * 48, 0.03, (Math.random() - 0.5) * 48);
      }
      const k = s.userData.t;
      s.scale.setScalar(0.3 + k * 1.3);
      s.material.opacity = Math.sin(k * Math.PI) * 0.45;
    }

    // embers drift upward
    const ep = this.emberGeo.attributes.position.array;
    for (let i = 0; i < ep.length / 3; i++) {
      ep[i * 3 + 1] += dt * (0.25 + (i % 5) * 0.04);
      ep[i * 3] += Math.sin(t * 0.6 + i) * dt * 0.1;
      if (ep[i * 3 + 1] > 18) {
        ep[i * 3 + 1] = 0.3;
        ep[i * 3] = (Math.random() - 0.5) * 56;
        ep[i * 3 + 2] = (Math.random() - 0.5) * 56;
      }
    }
    this.emberGeo.attributes.position.needsUpdate = true;

    // steam plumes
    for (const v of this.vents) {
      for (const s of v.sprites) {
        s.userData.phase = (s.userData.phase + dt * 0.15) % 1;
        const k = s.userData.phase;
        s.position.set(v.x + Math.sin(t * 0.7 + k * 6) * 0.4, 0.2 + k * 4.5, v.z);
        s.scale.setScalar(1.6 + k * 5);
        s.material.opacity = Math.sin(k * Math.PI) * 0.22;
      }
    }

    // core animation
    if (this.coreCage) {
      this.coreCage.rotation.y += dt * 0.4;
      this.coreCage.rotation.x += dt * 0.16;
      this.coreRings.forEach((ring, i) => {
        ring.rotation.z += dt * (0.4 + i * 0.16) * (i % 2 ? -1 : 1);
        ring.rotation.x += dt * 0.12;
      });
      const pulse = 0.85 + Math.sin(t * 3.2) * 0.15;
      this.coreLight.intensity = 18 + pulse * 10;
      this.coreRings[0].scale.setScalar(1 + Math.sin(t * 2.2) * 0.04);
    }

    // neon flicker
    this.flickerLight.intensity = 18 + Math.sin(t * 19) * 4 + (Math.sin(t * 7.1) > 0.96 ? -12 : 0);

    // corner warning beacons
    if (this.cornerBeacons) {
      for (let i = 0; i < this.cornerBeacons.length; i++) {
        this.cornerBeacons[i].material.opacity = 0.25 + Math.max(0, Math.sin(t * 3.2 + i * 1.57)) * 0.75;
      }
    }

    // lightning
    this.lightningTimer -= dt;
    if (this.lightningTimer <= 0) {
      this.flash = 0.5 + Math.random() * 0.5;
      this.lightningTimer = 18 + Math.random() * 35;
    }
    if (this.flash > 0) {
      this.flash = Math.max(0, this.flash - dt * 2.6);
      this.flashLight.intensity = this.flash * 3.2;
      this.moonLight.intensity = 1.28 + this.flash * 0.8;
    } else {
      this.flashLight.intensity = 0;
      this.moonLight.intensity = 1.28;
    }
  }

  buildSpawnPoints() {
    const pts = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU + 0.16;
      pts.push(new THREE.Vector3(Math.cos(a) * 21.5, 0, Math.sin(a) * 21.5));
    }
    // extra points along the middle lanes for later waves
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + 0.5;
      pts.push(new THREE.Vector3(Math.cos(a) * 16, 0, Math.sin(a) * 16));
    }
    this.spawnPoints = pts;
    return pts;
  }
}
