import * as THREE from 'three';

/* ------------------------------------------------------------------ *
 *  Procedural texture atelier — everything in Nightfall is generated
 *  at runtime so the game ships with zero external art dependencies.
 * ------------------------------------------------------------------ */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function tex(c, { srgb = true, repeat = null, anisotropy = 8, wrap = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (wrap) { t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.RepeatWrapping; }
  if (repeat) t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = anisotropy;
  t.needsUpdate = true;
  return t;
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function addNoise(ctx, w, h, rnd, amount, alpha = 0.5, size = 1) {
  for (let i = 0; i < amount; i++) {
    const g = Math.floor(rnd() * 255);
    ctx.fillStyle = `rgba(${g},${g},${g},${alpha * rnd()})`;
    ctx.fillRect(rnd() * w, rnd() * h, size * (1 + rnd() * 3), size * (1 + rnd() * 3));
  }
}

/* ---------------------------- particles --------------------------- */

export function createGlowTexture(color = '#8ff7ff', soft = 0.18) {
  const c = canvas(128, 128), ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, color);
  g.addColorStop(soft, color);
  g.addColorStop(0.45, hexA(color, 0.32));
  g.addColorStop(1, hexA(color, 0));
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return tex(c, { wrap: false });
}

function hexA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export function createSparkTexture() {
  const c = canvas(64, 64), ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.18, '#fff3c4');
  g.addColorStop(0.45, 'rgba(255,150,40,0.6)');
  g.addColorStop(1, 'rgba(255,80,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return tex(c, { wrap: false });
}

export function createSmokeTexture() {
  const c = canvas(128, 128), ctx = c.getContext('2d');
  const rnd = mulberry32(99);
  for (let i = 0; i < 26; i++) {
    const x = 40 + rnd() * 48, y = 40 + rnd() * 48, r = 10 + rnd() * 26;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(200,220,225,${0.06 + rnd() * 0.05})`);
    g.addColorStop(1, 'rgba(180,200,210,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  return tex(c, { wrap: false });
}

export function createRainTexture() {
  const c = canvas(16, 128), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, 'rgba(190,245,255,0)');
  g.addColorStop(0.35, 'rgba(190,245,255,0.22)');
  g.addColorStop(0.8, 'rgba(220,255,255,0.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(6, 0, 4, 128);
  return tex(c, { wrap: false });
}

export function createMuzzleTexture() {
  const c = canvas(256, 256), ctx = c.getContext('2d');
  ctx.translate(128, 128);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 120);
  g.addColorStop(0, 'rgba(255,255,240,1)');
  g.addColorStop(0.12, 'rgba(255,225,150,0.98)');
  g.addColorStop(0.34, 'rgba(255,140,40,0.5)');
  g.addColorStop(1, 'rgba(255,80,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(0, 0, 120, 0, 7); ctx.fill();
  // star flare
  const rnd = mulberry32(4);
  for (let i = 0; i < 7; i++) {
    ctx.save();
    ctx.rotate((i / 7) * Math.PI * 2 + rnd() * 0.3);
    const gr = ctx.createLinearGradient(0, 0, 120, 0);
    gr.addColorStop(0, 'rgba(255,245,210,0.9)');
    gr.addColorStop(1, 'rgba(255,140,20,0)');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.moveTo(0, -3); ctx.lineTo(120, 0); ctx.lineTo(0, 3); ctx.fill();
    ctx.restore();
  }
  return tex(c, { wrap: false });
}

export function createRingTexture() {
  const c = canvas(256, 256), ctx = c.getContext('2d');
  ctx.translate(128, 128);
  for (let i = 0; i < 3; i++) {
    ctx.beginPath(); ctx.arc(0, 0, 70 + i * 22, 0, 7);
    ctx.strokeStyle = `rgba(150,255,255,${0.7 - i * 0.2})`;
    ctx.lineWidth = 4 - i; ctx.stroke();
  }
  ctx.beginPath(); ctx.arc(0, 0, 100, 0, 7); ctx.strokeStyle = 'rgba(120,200,255,0.2)'; ctx.lineWidth = 12; ctx.stroke();
  return tex(c, { wrap: false });
}

export function createFlareTexture() {
  const c = canvas(256, 256), ctx = c.getContext('2d');
  ctx.translate(128, 128);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.1, 'rgba(210,250,255,0.9)');
  g.addColorStop(0.4, 'rgba(80,200,255,0.28)');
  g.addColorStop(1, 'rgba(20,80,140,0)');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 128, 0, 7); ctx.fill();
  const grd = ctx.createLinearGradient(-128, 0, 128, 0);
  grd.addColorStop(0, 'rgba(120,220,255,0)');
  grd.addColorStop(0.5, 'rgba(220,255,255,0.45)');
  grd.addColorStop(1, 'rgba(120,220,255,0)');
  ctx.fillStyle = grd; ctx.fillRect(-128, -2, 256, 4);
  return tex(c, { wrap: false });
}

/* ---------------------------- surfaces ---------------------------- */

export function createConcreteTexture(repeat = [6, 6]) {
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(1337);
  ctx.fillStyle = '#20262b'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 9000; i++) {
    const g = 20 + Math.floor(rnd() * 55);
    ctx.fillStyle = `rgba(${g},${g + 4},${g + 6},${0.15 + rnd() * 0.35})`;
    ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 3, 1 + rnd() * 3);
  }
  // slabs / cracks
  ctx.strokeStyle = 'rgba(8,11,13,0.55)'; ctx.lineWidth = 2;
  for (let i = 0; i < 9; i++) {
    let x = rnd() * w, y = rnd() * h;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let j = 0; j < 5; j++) { x += (rnd() - 0.5) * 80; y += (rnd() - 0.5) * 80; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  // stains
  for (let i = 0; i < 26; i++) {
    const x = rnd() * w, y = rnd() * h, r = 14 + rnd() * 70;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(8,12,14,${0.1 + rnd() * 0.18})`);
    g.addColorStop(1, 'rgba(8,12,14,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  // expansion joints
  ctx.strokeStyle = 'rgba(10,14,16,0.75)'; ctx.lineWidth = 4;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath(); ctx.moveTo(i * w / 4, 0); ctx.lineTo(i * w / 4, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * h / 4); ctx.lineTo(w, i * h / 4); ctx.stroke();
  }
  // faint hazard scuffs
  ctx.strokeStyle = 'rgba(150,120,40,0.12)';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath(); ctx.arc(rnd() * w, rnd() * h, 20 + rnd() * 90, rnd() * 7, rnd() * 7 + 1); ctx.stroke();
  }
  return tex(c, { repeat });
}

export function createConcreteRoughness(repeat = [6, 6]) {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(2222);
  ctx.fillStyle = '#8a8a8a'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 3000; i++) {
    const g = 70 + Math.floor(rnd() * 120);
    ctx.fillStyle = `rgb(${g},${g},${g})`;
    ctx.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 6, 2 + rnd() * 6);
  }
  // glossier puddle patches -> dark roughness
  for (let i = 0; i < 14; i++) {
    const x = rnd() * w, y = rnd() * h, r = 20 + rnd() * 55;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(18,18,18,0.9)');
    g.addColorStop(1, 'rgba(18,18,18,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  return tex(c, { repeat, srgb: false });
}

export function createMetalTexture(repeat = [2, 2]) {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(707);
  ctx.fillStyle = '#5b646c'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 2400; i++) {
    const g = 60 + Math.floor(rnd() * 70);
    ctx.fillStyle = `rgba(${g},${g + 3},${g + 6},0.35)`;
    ctx.fillRect(0, rnd() * h, w, 1);
  }
  addNoise(ctx, w, h, rnd, 5000, 0.25, 1);
  // rivets + panel lines
  ctx.strokeStyle = 'rgba(20,24,28,0.6)'; ctx.lineWidth = 2;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath(); ctx.moveTo(0, i * h / 4); ctx.lineTo(w, i * h / 4); ctx.stroke();
  }
  for (let i = 0; i < 40; i++) {
    const x = (i % 8) * 32 + 16, y = Math.floor(i / 8) * 51 + 20;
    const g = ctx.createRadialGradient(x - 2, y - 2, 0, x, y, 5);
    g.addColorStop(0, '#a8b2ba'); g.addColorStop(1, '#3a4248');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
  }
  return tex(c, { repeat });
}

/* ---------------------------- city --------------------------------- */

const BUILDING_PALETTES = [
  { wall: '#0d141c', rim: '#0a1016', warm: '#ffb45a', cool: '#5fd8ff', accent: '#ff2e88' },
  { wall: '#151218', rim: '#0b090d', warm: '#ffc46e', cool: '#4cd8d2', accent: '#9c6cff' },
  { wall: '#0b1519', rim: '#070e12', warm: '#ffd08a', cool: '#55f2ff', accent: '#27ffc3' },
  { wall: '#17141a', rim: '#0e0b10', warm: '#ffab52', cool: '#69c0ff', accent: '#ff3a6a' },
  { wall: '#0c1117', rim: '#080c11', warm: '#ffcf7a', cool: '#8de8ff', accent: '#ff6bd6' },
  { wall: '#10161b', rim: '#090e12', warm: '#ffb95f', cool: '#39e0ff', accent: '#ff8a2a' },
];

export function createBuildingTextures(variant = 0, seed = 1) {
  const pal = BUILDING_PALETTES[variant % BUILDING_PALETTES.length];
  const w = 256, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const e = canvas(w, h), ectx = e.getContext('2d');
  const rnd = mulberry32(seed * 7717 + 13);
  ctx.fillStyle = pal.wall; ctx.fillRect(0, 0, w, h);
  ectx.fillStyle = '#000'; ectx.fillRect(0, 0, w, h);

  // façade vertical banding
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = i % 2 ? 'rgba(255,255,255,0.018)' : 'rgba(0,0,0,0.14)';
    ctx.fillRect(i * w / 10, 0, w / 10, h);
  }

  // window grid
  const cols = 7, rows = 26;
  const padX = 10, padY = 12;
  const cw = (w - padX * 2) / cols;
  const ch = (h - padY * 2) / rows;
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const x = padX + col * cw + 4;
      const y = padY + r * ch + 4;
      const ww = cw - 8, hh = ch - 7;
      const lit = rnd();
      ctx.fillStyle = '#0a1117';
      ctx.fillRect(x, y, ww, hh);
      if (lit > 0.55) {
        const color = lit > 0.93 ? pal.accent : (rnd() > 0.48 ? pal.warm : pal.cool);
        const glow = lit > 0.93 ? 1 : 0.45 + rnd() * 0.5;
        ctx.fillStyle = hexA(color, 0.12);
        ctx.fillRect(x - 1, y - 1, ww + 2, hh + 2);
        ectx.fillStyle = hexA(color, glow * 0.9);
        ectx.fillRect(x, y, ww, hh);
        // interior silhouettes
        if (rnd() > 0.72) {
          ectx.fillStyle = 'rgba(0,0,0,0.45)';
          ectx.fillRect(x + ww * 0.2, y + hh * 0.35, ww * 0.55, hh * 0.65);
        }
      } else if (lit > 0.42) {
        ectx.fillStyle = hexA(pal.cool, 0.06 + rnd() * 0.08);
        ectx.fillRect(x, y, ww, hh);
      }
    }
    // floor slab
    ctx.fillStyle = 'rgba(5,8,11,0.35)';
    ctx.fillRect(0, padY + r * ch, w, 2);
  }

  // neon rim strips
  ctx.fillStyle = pal.accent;
  ctx.fillRect(2, 0, 4, h);
  ectx.fillStyle = pal.accent;
  ectx.fillRect(2, 0, 4, h);
  if (rnd() > 0.4) {
    ctx.fillStyle = pal.cool; ctx.fillRect(w - 6, 0, 3, h);
    ectx.fillStyle = pal.cool; ectx.fillRect(w - 6, 0, 3, h);
  }

  // vertical rooftop crown
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, i * 4, w, 2);
  }

  return {
    map: tex(c, { repeat: [1, 1] }),
    emissive: tex(e, { repeat: [1, 1] }),
  };
}

export function createBuildingSideTextures(variant = 0, seed = 1) {
  return createBuildingTextures(variant, seed);
}

export function createNeonSignTexture(text, color = '#ff2e88', { vertical = false, sub = '' } = {}) {
  const w = vertical ? 128 : 512;
  const h = vertical ? 512 : 128;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const font = vertical ? 76 : 72;
  ctx.font = `900 ${font}px "WenQuanYi Zen Hei", "Noto Sans CJK JP", "Trebuchet MS", sans-serif`;

  const draw = (blur, alpha, fill) => {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = blur;
    ctx.fillStyle = fill;
    ctx.globalAlpha = alpha;
    if (vertical) {
      const chars = [...text];
      const step = h / (chars.length + 0.4);
      chars.forEach((ch, i) => ctx.fillText(ch, w / 2, step * (i + 0.75)));
    } else {
      ctx.fillText(text, w / 2, h * 0.44);
      if (sub) {
        ctx.font = '600 18px "Trebuchet MS", sans-serif';
        ctx.letterSpacing = '6px';
        ctx.fillText(sub, w / 2, h * 0.78);
      }
    }
    ctx.restore();
  };
  draw(38, 0.85, color);
  draw(16, 0.9, color);
  draw(4, 1, '#ffffff');
  // frame
  ctx.strokeStyle = hexA(color, 0.55); ctx.lineWidth = 3;
  ctx.strokeRect(5, 5, w - 10, h - 10);
  ctx.strokeStyle = hexA(color, 0.2); ctx.lineWidth = 1;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  return tex(c, { wrap: false });
}

export function createBillboardTexture(variant = 0) {
  const w = 512, h = 512, c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(variant * 4241 + 7);
  const palettes = [
    ['#04121b', '#ff2e88', '#5ff6ff', 'HALO'],
    ['#120a1c', '#ffb43c', '#ff2e88', 'NEO'],
    ['#04161a', '#27ffc3', '#5ff6ff', '羽'],
    ['#160813', '#8d6bff', '#ff8a2a', 'SYNTH'],
    ['#081018', '#5ff6ff', '#ff2e88', '夜'],
    ['#160d06', '#ff7a1a', '#ffd08a', 'AXIOM'],
  ];
  const p = palettes[variant % palettes.length];
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, p[0]); g.addColorStop(0.55, p[0]); g.addColorStop(1, '#020407');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

  // soft light wash
  const glow = ctx.createRadialGradient(w * 0.5, h * 0.45, 10, w * 0.5, h * 0.45, w * 0.7);
  glow.addColorStop(0, hexA(p[1], 0.36)); glow.addColorStop(0.5, hexA(p[2], 0.1)); glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h);

  // decorative orbit rings / grids
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.strokeStyle = hexA(p[2], 0.3); ctx.lineWidth = 2;
  for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(0, 0, 60 + i * 45, 0, 7); ctx.stroke(); }
  for (let i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -200); ctx.strokeStyle = hexA(p[2], 0.08); ctx.stroke();
  }
  ctx.restore();

  // big type
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '900 146px "WenQuanYi Zen Hei", "Trebuchet MS", sans-serif';
  ctx.shadowColor = p[1]; ctx.shadowBlur = 44; ctx.fillStyle = p[1];
  ctx.fillText(p[3], w / 2, h * 0.5);
  ctx.shadowBlur = 10; ctx.fillStyle = '#fff8ee';
  ctx.globalAlpha = 0.82; ctx.fillText(p[3], w / 2, h * 0.5); ctx.globalAlpha = 1;

  // bars & data
  ctx.shadowBlur = 0;
  ctx.fillStyle = hexA(p[2], 0.7);
  for (let i = 0; i < 28; i++) {
    const bw = 4 + rnd() * 16;
    ctx.fillRect(24, 24 + i * 12, bw, 4);
  }
  ctx.font = '600 13px "Trebuchet MS", sans-serif';
  ctx.fillStyle = hexA(p[2], 0.8); ctx.textAlign = 'right';
  ctx.fillText('SECTOR 07 / 2094', w - 24, h - 34);
  ctx.textAlign = 'left';
  ctx.fillText('◢ SIGNAL LIVE', 24, h - 34);

  // scanlines
  ctx.fillStyle = 'rgba(0,0,0,0.16)';
  for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
  // border
  ctx.strokeStyle = hexA(p[1], 0.6); ctx.lineWidth = 4; ctx.strokeRect(6, 6, w - 12, h - 12);
  return tex(c, { wrap: false });
}

export function createHoloTexture(kind = 0) {
  const w = 512, h = 512, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  const color = kind === 0 ? '#5ff6ff' : kind === 1 ? '#ff6bd6' : '#ffc46e';
  ctx.strokeStyle = color; ctx.fillStyle = color;
  ctx.shadowColor = color; ctx.shadowBlur = 16;
  ctx.lineWidth = 2;
  ctx.translate(w / 2, h / 2);

  if (kind === 0) {
    // wireframe cyber koi
    ctx.beginPath();
    ctx.moveTo(-160, 10);
    ctx.bezierCurveTo(-80, -100, 80, -120, 150, -10);
    ctx.bezierCurveTo(80, 90, -40, 120, -160, 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-160, 10); ctx.lineTo(-230, -60); ctx.lineTo(-210, 30); ctx.lineTo(-250, 70); ctx.closePath(); ctx.stroke();
    ctx.beginPath(); ctx.arc(100, -34, 8, 0, 7); ctx.stroke();
    for (let i = -100; i < 130; i += 26) {
      ctx.beginPath(); ctx.moveTo(i, -70 + Math.abs(i) * 0.1); ctx.lineTo(i + 12, 70 - Math.abs(i) * 0.1); ctx.stroke();
    }
  } else if (kind === 1) {
    // abstract female silhouette / idol hologram
    ctx.beginPath(); ctx.arc(0, -150, 46, 0, 7); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-22, -108); ctx.lineTo(-70, -20); ctx.lineTo(-40, 130); ctx.lineTo(40, 130); ctx.lineTo(70, -20); ctx.lineTo(22, -108);
    ctx.stroke();
    for (let y = -60; y < 120; y += 16) {
      ctx.beginPath(); ctx.moveTo(-90, y); ctx.lineTo(90, y); ctx.strokeStyle = hexA(color, 0.16); ctx.stroke();
    }
    ctx.strokeStyle = color;
    ctx.beginPath(); ctx.arc(0, -150, 60, 0, 7); ctx.strokeStyle = hexA(color, 0.35); ctx.stroke();
  } else {
    // lotus / reactor sigil
    for (let i = 0; i < 8; i++) {
      ctx.save(); ctx.rotate(i * Math.PI / 4);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-50, -110, 0, -200);
      ctx.quadraticCurveTo(50, -110, 0, 0);
      ctx.stroke(); ctx.restore();
    }
    ctx.beginPath(); ctx.arc(0, 0, 36, 0, 7); ctx.stroke();
  }
  // scanline bands
  ctx.globalCompositeOperation = 'destination-out';
  for (let y = -h / 2; y < h / 2; y += 5) {
    ctx.fillStyle = `rgba(0,0,0,${0.25 + 0.2 * Math.sin(y)})`;
    ctx.fillRect(-w / 2, y, w, 2);
  }
  return tex(c, { wrap: false });
}

export function createArenaLogoTexture() {
  const w = 512, h = 512, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.translate(256, 256);
  ctx.strokeStyle = 'rgba(255,180,60,0.8)'; ctx.fillStyle = 'rgba(255,180,60,0.6)';
  ctx.shadowColor = '#ffb43c'; ctx.shadowBlur = 14; ctx.lineWidth = 5;
  // hex
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(a) * 170, y = Math.sin(a) * 170;
    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  }
  ctx.closePath(); ctx.stroke();
  // wings
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(s * 40, -20); ctx.lineTo(s * 200, -70); ctx.lineTo(s * 160, -4); ctx.lineTo(s * 210, 40); ctx.lineTo(s * 60, 34);
    ctx.stroke();
  }
  ctx.font = '900 92px "Trebuchet MS", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('NF', 0, -8);
  ctx.font = '700 26px "Trebuchet MS", sans-serif';
  ctx.fillText('SECTOR 07', 0, 70);
  ctx.fillStyle = 'rgba(255,180,60,0.35)';
  for (let i = 0; i < 24; i++) ctx.fillRect(-230 + i * 20, 120, 10, 3);
  return tex(c, { wrap: false });
}

export function createHazardTexture(repeat = [4, 1]) {
  const w = 256, h = 64, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#12161a'; ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
  for (let x = -h; x < w + h; x += 42) {
    ctx.fillStyle = '#c98f2e';
    ctx.beginPath(); ctx.moveTo(x, h); ctx.lineTo(x + h, 0); ctx.lineTo(x + h + 20, 0); ctx.lineTo(x + 20, h); ctx.fill();
  }
  ctx.restore();
  addNoise(ctx, w, h, mulberry32(12), 800, 0.2, 1);
  return tex(c, { repeat });
}

export function createPanelTexture() {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(551);
  ctx.fillStyle = '#2a3238'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 2200; i++) {
    const g = 30 + rnd() * 40;
    ctx.fillStyle = `rgba(${g},${g + 3},${g + 5},0.5)`;
    ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 4, 1 + rnd() * 4);
  }
  ctx.strokeStyle = 'rgba(10,14,18,0.75)'; ctx.lineWidth = 3;
  for (let i = 0; i < 4; i++) {
    ctx.strokeRect(8 + i * 8, 8 + i * 8, w - 16 - i * 16, h - 16 - i * 16);
  }
  ctx.strokeStyle = 'rgba(255,180,60,0.18)';
  ctx.beginPath(); ctx.moveTo(30, 30); ctx.lineTo(80, 30); ctx.moveTo(30, 30); ctx.lineTo(30, 80); ctx.stroke();
  return tex(c, { repeat: [1, 1] });
}

export function createDecalTexture(kind = 0) {
  const w = 128, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  if (kind === 0) {
    // bullet hole with cracks
    const rnd = mulberry32(31);
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 34);
    g.addColorStop(0, 'rgba(2,4,6,0.95)');
    g.addColorStop(0.5, 'rgba(8,10,12,0.8)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(64, 64, 34, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(190,210,220,0.16)'; ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      const a = rnd() * 7, r = 20 + rnd() * 38;
      ctx.beginPath(); ctx.moveTo(64 + Math.cos(a) * 8, 64 + Math.sin(a) * 8);
      ctx.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r); ctx.stroke();
    }
  } else {
    // scorch
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
    g.addColorStop(0, 'rgba(0,0,0,0.85)');
    g.addColorStop(0.45, 'rgba(12,10,8,0.5)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }
  return tex(c, { wrap: false });
}

export function createRainSplashTexture() {
  const c = canvas(128, 128), ctx = c.getContext('2d');
  ctx.translate(64, 64);
  for (let i = 0; i < 2; i++) {
    ctx.beginPath(); ctx.ellipse(0, 0, 52 - i * 18, 18 - i * 6, 0, 0, 7);
    ctx.strokeStyle = `rgba(170,240,255,${0.5 - i * 0.15})`; ctx.lineWidth = 2; ctx.stroke();
  }
  return tex(c, { wrap: false });
}

export function createSteamTexture() {
  const c = canvas(128, 128), ctx = c.getContext('2d');
  const rnd = mulberry32(87);
  for (let i = 0; i < 30; i++) {
    const x = 64 + (rnd() - 0.5) * 46, y = 64 + (rnd() - 0.5) * 46, r = 8 + rnd() * 24;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(190,220,230,${0.05 + rnd() * 0.05})`);
    g.addColorStop(1, 'rgba(150,190,200,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  return tex(c, { wrap: false });
}

export function createCloudTexture() {
  const w = 512, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  const rnd = mulberry32(5150);
  for (let i = 0; i < 70; i++) {
    const x = 60 + rnd() * (w - 120), y = 80 + rnd() * (h - 110), r = 20 + rnd() * 70;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(140,175,205,${0.045 + rnd() * 0.05})`);
    g.addColorStop(1, 'rgba(100,140,170,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  return tex(c, { wrap: false });
}

export function createStreetGridTexture() {
  const w = 1024, h = 1024, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#02050a'; ctx.fillRect(0, 0, w, h);
  const rnd = mulberry32(8181);
  // city blocks of dim rooftops
  for (let i = 0; i < 260; i++) {
    const x = rnd() * w, y = rnd() * h;
    ctx.fillStyle = `rgba(${12 + rnd() * 12},${16 + rnd() * 14},${22 + rnd() * 16},0.8)`;
    ctx.fillRect(x, y, 20 + rnd() * 80, 20 + rnd() * 80);
  }
  // arterial roads
  ctx.lineCap = 'round';
  for (let i = 0; i < 10; i++) {
    const horiz = i % 2 === 0;
    const p = (i + 0.5) * (w / 10) + (rnd() - 0.5) * 40;
    const color = i % 3 === 0 ? '120,255,235' : i % 3 === 1 ? '255,170,80' : '255,70,160';
    for (const spread of [0, 7, -7]) {
      ctx.strokeStyle = `rgba(${color},${spread === 0 ? 0.7 : 0.18})`;
      ctx.lineWidth = spread === 0 ? 3 : 1.2;
      ctx.beginPath();
      if (horiz) { ctx.moveTo(0, p + spread); ctx.lineTo(w, p + spread); }
      else { ctx.moveTo(p + spread, 0); ctx.lineTo(p + spread, h); }
      ctx.stroke();
    }
  }
  // intersection glows
  for (let i = 0; i < 90; i++) {
    const x = rnd() * w, y = rnd() * h, r = 8 + rnd() * 22;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(160,240,255,${0.04 + rnd() * 0.08})`);
    g.addColorStop(1, 'rgba(160,240,255,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  return tex(c, { repeat: [1, 1] });
}

export function createTerminalTexture() {
  const w = 512, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#03100e'; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(70,255,210,0.35)'; ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.font = '600 17px monospace'; ctx.fillStyle = '#7dffd8';
  const lines = [
    'BLACKSITE OS v7.4.1', '> NODE: SECTOR-07 / ROOFTOP', '> CORE: NOMINAL  98.2%',
    '> UPLINK: LOCKED', '> HOSTILE SIGNATURES: SCANNING', '', '> DEFENSE GRID: ARMED',
    '> OPERATOR VITALS: LINKED', '> WARNING: PERIMETER BREACH',
  ];
  lines.forEach((t, i) => ctx.fillText(t, 28, 40 + i * 23));
  ctx.fillStyle = 'rgba(70,255,210,0.2)';
  for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
  for (let i = 0; i < 12; i++) {
    ctx.fillStyle = `rgba(70,255,210,${0.2 + Math.random() * 0.5})`;
    ctx.fillRect(400, 40 + i * 15, 20 + Math.random() * 60, 4);
  }
  return tex(c, { wrap: false });
}

export function createFloorMarkTexture() {
  const w = 512, h = 512, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.translate(256, 256);
  ctx.strokeStyle = 'rgba(255,190,90,0.65)'; ctx.fillStyle = 'rgba(255,190,90,0.55)';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(0, 0, 190, 0, 7); ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(0, 0, 160, 0, 7); ctx.stroke();
  ctx.font = '900 64px "Trebuchet MS", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255,190,90,0.7)';
  ctx.fillText('F-07', 0, -6);
  ctx.font = '700 18px "Trebuchet MS", sans-serif';
  ctx.fillText('AUTHORIZED PERSONNEL', 0, 46);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.beginPath(); ctx.moveTo(0, -205); ctx.lineTo(-16, -175); ctx.lineTo(16, -175); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  return tex(c, { wrap: false });
}
