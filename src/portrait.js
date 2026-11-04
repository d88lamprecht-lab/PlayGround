import { EYE_COLORS, HAIR_COLORS, ORIGINS } from './data.js'

function shade(hex, amt) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  r = Math.max(0, Math.min(255, r + amt))
  g = Math.max(0, Math.min(255, g + amt))
  b = Math.max(0, Math.min(255, b + amt))
  return `rgb(${r},${g},${b})`
}

function seed(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return () => {
    h += 0x6D2B79F5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function colorOf(list, id, fallback) {
  return list.find(x => x.id === id)?.value || fallback
}

function eyeColorOf(list, id) {
  return list.find(x => x.id === id) || EYE_COLORS[0]
}

export function mergedLooks(looks = {}) {
  const origin = looks.origin || 'human'
  const originDef = ORIGINS.find(o => o.id === origin) || ORIGINS[0]
  return {
    gender: 'female',
    face: 'sharp',
    hair: 'mohawk',
    hairColor: 'black',
    eyeColor: 'blue',
    eyeStyle: 'human',
    facialHair: 'none',
    scar: 'none',
    headgear: 'none',
    skin: originDef.skin,
    ...looks,
    origin
  }
}

export function drawPortrait(canvas, rawLooks = {}, opts = {}) {
  const looks = mergedLooks(rawLooks)
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  const size = opts.size || 512
  canvas.width = size * dpr
  canvas.height = size * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale((size * dpr) / 512, (size * dpr) / 512)
  const rnd = seed((looks.name || '') + JSON.stringify(looks))
  const skin = looks.skin || '#b9866b'
  const skinDark = shade(skin, -52)
  const skinLight = shade(skin, 40)
  const hairCol = colorOf(HAIR_COLORS, looks.hairColor, looks.hairHex || '#151316')
  const eyeDef = eyeColorOf(EYE_COLORS, looks.eyeColor)
  const eyeCol = eyeDef.value
  const eyeGlow = eyeDef.glow || eyeCol
  const cx = 256
  const cy = 238
  const w = looks.face === 'broad' ? 66 : looks.face === 'gaunt' ? 52 : looks.face === 'round' ? 61 : 58
  const female = looks.gender === 'female'
  const origin = looks.origin || 'human'
  const boss = opts.boss

  // ---- backdrop -----------------------------------------------------------
  const bg = ctx.createRadialGradient(cx, cy - 10, 20, cx, cy, 360)
  bg.addColorStop(0, opts.bg || '#361c18')
  bg.addColorStop(0.55, '#160f10')
  bg.addColorStop(1, '#070708')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, 512, 512)
  ctx.save()
  ctx.globalAlpha = 0.14
  ctx.strokeStyle = boss ? '#c1121f' : '#d8a44a'
  for (let i = 0; i < 9; i++) {
    ctx.lineWidth = 1 + rnd() * 2
    ctx.beginPath()
    let x = rnd() * 512, y = 0
    ctx.moveTo(x, y)
    for (let j = 0; j < 5; j++) { x += (rnd() - 0.5) * 70; y += 90 + rnd() * 30; ctx.lineTo(x, y) }
    ctx.stroke()
  }
  ctx.restore()
  // hazard arc
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = 'rgba(205,164,74,0.18)'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.arc(0, 0, 218, 0.15, Math.PI * 1.85); ctx.stroke()
  ctx.strokeStyle = 'rgba(160,20,26,0.25)'
  ctx.beginPath(); ctx.arc(0, 0, 230, Math.PI * 0.2, Math.PI * 1.55); ctx.stroke()
  ctx.restore()

  // ---- body / shoulders ---------------------------------------------------
  ctx.save()
  const jacket = looks.jacket || (origin === 'ghost' ? '#313943' : boss ? '#201417' : '#232327')
  const jacketHi = shade(jacket, 28)
  const bodyGrad = ctx.createLinearGradient(0, 370, 0, 512)
  bodyGrad.addColorStop(0, jacketHi)
  bodyGrad.addColorStop(1, '#0b0b0c')
  ctx.fillStyle = bodyGrad
  ctx.beginPath()
  ctx.moveTo(52, 512)
  ctx.bezierCurveTo(58, 415, 122, 380, 190, 366)
  ctx.lineTo(322, 366)
  ctx.bezierCurveTo(390, 380, 454, 415, 460, 512)
  ctx.closePath()
  ctx.fill()
  // collar
  ctx.fillStyle = shade(jacket, 42)
  ctx.beginPath()
  ctx.moveTo(186, 366); ctx.lineTo(256, 454); ctx.lineTo(326, 366)
  ctx.lineTo(300, 354); ctx.lineTo(256, 414); ctx.lineTo(212, 354)
  ctx.closePath(); ctx.fill()
  // straps
  ctx.strokeStyle = 'rgba(0,0,0,0.55)'; ctx.lineWidth = 12
  ctx.beginPath(); ctx.moveTo(150, 402); ctx.lineTo(224, 512); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(362, 402); ctx.lineTo(288, 512); ctx.stroke()
  ctx.strokeStyle = 'rgba(180,38,34,0.5)'; ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(154, 406); ctx.lineTo(228, 512); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(358, 406); ctx.lineTo(284, 512); ctx.stroke()
  // shoulder studs
  ctx.fillStyle = '#b8a57b'
  for (let i = 0; i < 5; i++) {
    ctx.beginPath(); ctx.arc(118 + i * 16, 422 + i * 15, 2.6, 0, 7); ctx.fill()
    ctx.beginPath(); ctx.arc(394 - i * 16, 422 + i * 15, 2.6, 0, 7); ctx.fill()
  }
  // stitched patch
  ctx.fillStyle = 'rgba(0,0,0,0.42)'
  ctx.fillRect(310, 452, 74, 34)
  ctx.strokeStyle = 'rgba(190,160,100,0.5)'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4])
  ctx.strokeRect(314, 456, 66, 26); ctx.setLineDash([])
  ctx.fillStyle = 'rgba(190,160,100,0.65)'; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'center'
  ctx.fillText('HELL', 347, 474)
  ctx.restore()

  // ---- neck ---------------------------------------------------------------
  ctx.fillStyle = skinDark
  ctx.beginPath()
  ctx.moveTo(cx - 28, 320); ctx.lineTo(cx + 28, 320)
  ctx.lineTo(cx + 34, 384); ctx.lineTo(cx - 34, 384); ctx.closePath(); ctx.fill()
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  ctx.beginPath(); ctx.ellipse(cx, 326, 31, 12, 0, 0, 7); ctx.fill()

  // ---- hair back ----------------------------------------------------------
  if (looks.hair === 'long' || looks.hair === 'braids' || looks.hair === 'wild' || looks.hair === 'ponytail') {
    ctx.fillStyle = hairCol
    if (looks.hair === 'ponytail') {
      ctx.beginPath()
      ctx.ellipse(cx + 64, 230, 26, 74, -0.3, 0, 7)
      ctx.fill()
      ctx.beginPath(); ctx.ellipse(cx + 84, 304, 20, 52, -0.15, 0, 7); ctx.fill()
    } else {
      ctx.beginPath()
      ctx.moveTo(cx - w - 12, 170)
      ctx.bezierCurveTo(cx - w - 48, 270, cx - w - 24, 370, cx - w + 8, 400)
      ctx.lineTo(cx + w - 2, 400)
      ctx.bezierCurveTo(cx + w + 34, 350, cx + w + 38, 240, cx + w + 8, 166)
      ctx.closePath(); ctx.fill()
      if (looks.hair === 'braids') {
        ctx.strokeStyle = shade(hairCol, 25); ctx.lineWidth = 10
        for (let i = 0; i < 4; i++) {
          ctx.beginPath(); ctx.moveTo(cx - w + 8 + i * 16, 300); ctx.quadraticCurveTo(cx - w + 20 + i * 16, 360, cx - w + 8 + i * 16, 420); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(cx + w - 8 - i * 16, 300); ctx.quadraticCurveTo(cx + w - 20 - i * 16, 360, cx + w - 8 - i * 16, 420); ctx.stroke()
        }
      }
    }
  }

  // ---- head ---------------------------------------------------------------
  const headPath = () => {
    ctx.beginPath()
    ctx.moveTo(cx - w, cy - 32)
    ctx.bezierCurveTo(cx - w - 2, cy - 122, cx + w + 2, cy - 122, cx + w, cy - 32)
    ctx.bezierCurveTo(cx + w * 0.98, cy + 26, cx + w * 0.66, cy + 84, cx + (female ? 20 : 26), cy + 108)
    ctx.quadraticCurveTo(cx, cy + 120, cx - (female ? 20 : 26), cy + 108)
    ctx.bezierCurveTo(cx - w * 0.66, cy + 84, cx - w * 0.98, cy + 26, cx - w, cy - 32)
    ctx.closePath()
  }
  // ears behind
  ctx.fillStyle = skinDark
  ctx.beginPath(); ctx.ellipse(cx - w + 2, cy - 5, 13, 22, 0.2, 0, 7); ctx.fill()
  ctx.beginPath(); ctx.ellipse(cx + w - 2, cy - 5, 13, 22, -0.2, 0, 7); ctx.fill()
  const skinGrad = ctx.createLinearGradient(cx - w, cy - 100, cx + w, cy + 110)
  skinGrad.addColorStop(0, skinLight)
  skinGrad.addColorStop(0.45, skin)
  skinGrad.addColorStop(1, skinDark)
  ctx.fillStyle = skinGrad
  headPath(); ctx.fill()

  // facial structure shadow
  ctx.save(); headPath(); ctx.clip()
  ctx.fillStyle = 'rgba(0,0,0,0.16)'
  ctx.beginPath(); ctx.ellipse(cx - w * 0.72, cy + 10, 18, 70, 0.08, 0, 7); ctx.fill()
  ctx.beginPath(); ctx.ellipse(cx + w * 0.72, cy + 10, 18, 70, -0.08, 0, 7); ctx.fill()
  // cheek highlights
  ctx.fillStyle = 'rgba(255,255,255,0.1)'
  ctx.beginPath(); ctx.ellipse(cx - 31, cy + 32, 17, 9, -0.3, 0, 7); ctx.fill()
  ctx.beginPath(); ctx.ellipse(cx + 31, cy + 32, 17, 9, 0.3, 0, 7); ctx.fill()
  // grime
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = `rgba(${30 + rnd() * 40},${22 + rnd() * 30},${18 + rnd() * 20},${0.04 + rnd() * 0.1})`
    ctx.beginPath(); ctx.arc(cx - w + rnd() * w * 2, cy - 90 + rnd() * 195, 1 + rnd() * 6, 0, 7); ctx.fill()
  }
  ctx.restore()

  // ---- eye sockets --------------------------------------------------------
  const eyeY = cy - 10
  const ex = w * 0.42
  const eyeW = w * 0.28
  const eyeH = eyeStyleHeight(looks.eyeStyle, female)
  const drawEye = (side) => {
    const x = cx + side * ex
    if (looks.eyeStyle === 'cyber') {
      ctx.save()
      ctx.fillStyle = 'rgba(15,10,12,0.82)'
      ctx.beginPath()
      ctx.moveTo(x - 23, eyeY - 12); ctx.lineTo(x + 23, eyeY - 12)
      ctx.lineTo(x + 20, eyeY + 11); ctx.lineTo(x - 20, eyeY + 11); ctx.closePath(); ctx.fill()
      ctx.strokeStyle = 'rgba(160,140,110,0.5)'; ctx.lineWidth = 1.5; ctx.stroke()
      ctx.shadowBlur = 16; ctx.shadowColor = eyeGlow
      ctx.fillStyle = eyeGlow
      ctx.beginPath(); ctx.roundRect(x - 15, eyeY - 2.5, 30, 5, 3); ctx.fill()
      ctx.restore()
      return
    }
    if (looks.eyeStyle === 'hollow') {
      ctx.save()
      const g = ctx.createRadialGradient(x, eyeY, 1, x, eyeY, 22)
      g.addColorStop(0, eyeCol); g.addColorStop(0.25, eyeGlow); g.addColorStop(0.4, 'rgba(8,6,7,0.9)'); g.addColorStop(1, '#0a0708')
      ctx.fillStyle = g
      ctx.beginPath(); ctx.ellipse(x, eyeY, 20, 17, 0, 0, 7); ctx.fill()
      ctx.fillStyle = '#050405'
      ctx.beginPath(); ctx.ellipse(x, eyeY, 7, 11, 0, 0, 7); ctx.fill()
      ctx.shadowBlur = 15; ctx.shadowColor = eyeGlow
      ctx.fillStyle = eyeCol
      ctx.beginPath(); ctx.arc(x, eyeY, 3.4, 0, 7); ctx.fill()
      ctx.restore()
      return
    }
    // sclera
    ctx.save()
    ctx.fillStyle = origin === 'ghost' ? 'rgba(220,230,232,0.75)' : '#ded7c9'
    ctx.beginPath(); ctx.ellipse(x, eyeY, eyeW, eyeH, 0, 0, 7); ctx.fill()
    ctx.strokeStyle = 'rgba(25,15,14,0.6)'; ctx.lineWidth = 1.6
    ctx.beginPath(); ctx.ellipse(x, eyeY, eyeW, eyeH, 0, 0, 7); ctx.stroke()
    // iris
    ctx.shadowBlur = eyeDef.glow ? 13 : 0; ctx.shadowColor = eyeGlow
    const ig = ctx.createRadialGradient(x, eyeY, 1, x, eyeY, eyeW * 0.7)
    ig.addColorStop(0, eyeGlow); ig.addColorStop(0.55, eyeCol); ig.addColorStop(1, shade(eyeCol, -55))
    ctx.fillStyle = ig
    ctx.beginPath(); ctx.arc(x, eyeY, eyeW * 0.68, 0, 7); ctx.fill()
    ctx.shadowBlur = 0
    ctx.fillStyle = '#070607'
    ctx.beginPath(); ctx.ellipse(x, eyeY, eyeW * 0.22, eyeH * 0.62, 0, 0, 7); ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.beginPath(); ctx.arc(x - 3, eyeY - 3, 2.1, 0, 7); ctx.fill()
    // tired lines
    ctx.strokeStyle = 'rgba(40,25,25,0.35)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x - eyeW, eyeY + eyeH + 2); ctx.quadraticCurveTo(x, eyeY + eyeH + 7, x + eyeW, eyeY + eyeH + 2); ctx.stroke()
    ctx.restore()
  }
  drawEye(-1); drawEye(1)

  // brows
  ctx.strokeStyle = shade(hairCol, 18)
  ctx.lineWidth = female ? 4 : 6
  ctx.lineCap = 'round'
  ctx.beginPath(); ctx.moveTo(cx - ex - 15, eyeY - 18); ctx.quadraticCurveTo(cx - ex, eyeY - 25, cx - ex + 14, eyeY - 17); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cx + ex - 14, eyeY - 17); ctx.quadraticCurveTo(cx + ex, eyeY - 25, cx + ex + 15, eyeY - 18); ctx.stroke()
  if (looks.browScar || looks.scar === 'eye') {
    ctx.strokeStyle = 'rgba(220,170,150,0.65)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(cx + ex - 10, eyeY - 40); ctx.lineTo(cx + ex + 16, eyeY + 7); ctx.stroke()
  }

  // nose
  ctx.strokeStyle = 'rgba(55,30,26,0.45)'; ctx.lineWidth = female ? 3 : 4
  ctx.beginPath(); ctx.moveTo(cx - 2, eyeY + 8); ctx.quadraticCurveTo(cx - 8, cy + 35, cx - 13, cy + 39); ctx.stroke()
  ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(cx - 14, cy + 41); ctx.quadraticCurveTo(cx, cy + 47, cx + 15, cy + 40); ctx.stroke()
  ctx.fillStyle = 'rgba(0,0,0,0.16)'
  ctx.beginPath(); ctx.ellipse(cx - 13, cy + 40, 4, 2.4, 0, 0, 7); ctx.fill()
  ctx.beginPath(); ctx.ellipse(cx + 13, cy + 40, 4, 2.4, 0, 0, 7); ctx.fill()

  // mouth
  const my = cy + 70
  ctx.strokeStyle = looks.joker ? '#4b0b1f' : 'rgba(65,26,28,0.9)'
  ctx.lineWidth = female ? 5 : 4
  ctx.beginPath()
  if (looks.joker) {
    ctx.moveTo(cx - 38, my - 2); ctx.quadraticCurveTo(cx, my + 24, cx + 38, my - 2)
    ctx.stroke()
    ctx.strokeStyle = 'rgba(180,20,40,0.85)'; ctx.lineWidth = 2.5
    ctx.beginPath(); ctx.moveTo(cx - 43, my - 8); ctx.quadraticCurveTo(cx, my + 30, cx + 43, my - 8); ctx.stroke()
  } else {
    ctx.moveTo(cx - 20, my); ctx.quadraticCurveTo(cx, my + (female ? 8 : 4), cx + 20, my)
    ctx.stroke()
  }
  // lower lip
  if (female) {
    ctx.fillStyle = 'rgba(120,50,50,0.4)'
    ctx.beginPath(); ctx.ellipse(cx, my + 7, 16, 4, 0, 0, 7); ctx.fill()
  }
  if (looks.fangs) {
    ctx.fillStyle = '#e8e2d2'
    ctx.beginPath(); ctx.moveTo(cx - 19, my + 2); ctx.lineTo(cx - 13, my + 13); ctx.lineTo(cx - 8, my + 2); ctx.fill()
    ctx.beginPath(); ctx.moveTo(cx + 19, my + 2); ctx.lineTo(cx + 13, my + 13); ctx.lineTo(cx + 8, my + 2); ctx.fill()
  }

  // facial hair
  const fh = looks.facialHair
  if (fh && fh !== 'none') {
    ctx.fillStyle = hairCol
    if (fh === 'stubble') {
      ctx.save(); ctx.globalAlpha = 0.25
      ctx.beginPath(); ctx.ellipse(cx, cy + 66, 44, 42, 0, 0, Math.PI); ctx.fill(); ctx.restore()
    } else if (fh === 'mustache') {
      ctx.beginPath(); ctx.moveTo(cx - 24, my - 7); ctx.quadraticCurveTo(cx, my - 16, cx + 24, my - 7); ctx.quadraticCurveTo(cx, my + 3, cx - 24, my - 7); ctx.fill()
    } else if (fh === 'goatee') {
      ctx.beginPath(); ctx.ellipse(cx, my + 18, 14, 20, 0, 0, 7); ctx.fill()
      ctx.beginPath(); ctx.moveTo(cx - 20, my - 8); ctx.quadraticCurveTo(cx, my - 15, cx + 20, my - 8); ctx.quadraticCurveTo(cx, my, cx - 20, my - 8); ctx.fill()
    } else {
      ctx.beginPath()
      ctx.moveTo(cx - 43, cy + 30)
      ctx.bezierCurveTo(cx - 50, cy + 108, cx - 20, cy + 128, cx, cy + 125)
      ctx.bezierCurveTo(cx + 20, cy + 128, cx + 50, cy + 108, cx + 43, cy + 30)
      ctx.quadraticCurveTo(cx + 30, cy + 70, cx, cy + 74)
      ctx.quadraticCurveTo(cx - 30, cy + 70, cx - 43, cy + 30)
      ctx.fill()
      if (fh === 'braided') {
        ctx.strokeStyle = shade(hairCol, 35); ctx.lineWidth = 2
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(cx - 18 + i * 18, cy + 95); ctx.lineTo(cx - 14 + i * 18, cy + 132); ctx.stroke() }
      }
    }
  }

  // scars
  const scar = looks.scar
  if (scar === 'eye') {
    ctx.strokeStyle = 'rgba(210,155,140,0.8)'; ctx.lineWidth = 2.5
    ctx.beginPath(); ctx.moveTo(cx + ex - 6, eyeY - 44); ctx.lineTo(cx + ex + 14, eyeY + 16); ctx.stroke()
    ctx.strokeStyle = 'rgba(110,35,35,0.55)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(cx + ex - 4, eyeY - 20); ctx.lineTo(cx + ex + 9, eyeY - 16); ctx.stroke()
  } else if (scar === 'cheek') {
    ctx.strokeStyle = 'rgba(205,150,135,0.75)'; ctx.lineWidth = 2.2
    ctx.beginPath(); ctx.moveTo(cx - w + 15, cy + 12); ctx.lineTo(cx - w + 34, cy + 55); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx - w + 25, cy + 34); ctx.lineTo(cx - w + 42, cy + 30); ctx.stroke()
  } else if (scar === 'x') {
    ctx.strokeStyle = 'rgba(200,145,130,0.8)'; ctx.lineWidth = 2.4
    ctx.beginPath(); ctx.moveTo(cx - 50, cy + 18); ctx.lineTo(cx - 24, cy + 50); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx - 24, cy + 18); ctx.lineTo(cx - 50, cy + 50); ctx.stroke()
  } else if (scar === 'burn') {
    ctx.save(); ctx.globalAlpha = 0.45
    const g = ctx.createRadialGradient(cx + 38, cy + 38, 2, cx + 38, cy + 38, 30)
    g.addColorStop(0, '#6e2a25'); g.addColorStop(1, 'rgba(60,20,20,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx + 38, cy + 38, 30, 0, 7); ctx.fill()
    ctx.restore()
  }

  // ---- hair front ---------------------------------------------------------
  ctx.fillStyle = hairCol
  if (looks.hair === 'mohawk') {
    ctx.beginPath()
    ctx.moveTo(cx - 12, cy - 90)
    ctx.bezierCurveTo(cx - 20, cy - 170, cx + 20, cy - 174, cx + 12, cy - 90)
    ctx.lineTo(cx + 42, cy - 82)
    ctx.bezierCurveTo(cx + 34, cy - 140, cx - 30, cy - 144, cx - 42, cy - 82)
    ctx.closePath(); ctx.fill()
    ctx.fillStyle = shade(hairCol, 30)
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(cx - 18 + i * 9, cy - 125 + (i % 2) * 6, 3, 0, 7); ctx.fill() }
  } else if (looks.hair === 'bald' || looks.hair === 'buzz') {
    if (looks.hair === 'buzz') {
      ctx.save(); ctx.globalAlpha = 0.5
      ctx.beginPath(); ctx.ellipse(cx, cy - 46, w - 3, 50, 0, Math.PI, Math.PI * 2); ctx.fill()
      ctx.restore()
    }
    // forehead scars
    if (!scar || scar === 'none') {
      ctx.strokeStyle = 'rgba(190,140,125,0.4)'; ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(cx - 16, cy - 70); ctx.lineTo(cx + 4, cy - 52); ctx.stroke()
    }
  } else if (looks.hair === 'hood') {
    ctx.fillStyle = '#1c1c20'
    ctx.beginPath()
    ctx.moveTo(cx - w - 24, cy + 40)
    ctx.bezierCurveTo(cx - w - 34, cy - 150, cx + w + 34, cy - 150, cx + w + 24, cy + 40)
    ctx.bezierCurveTo(cx + w - 4, cy - 70, cx - w + 4, cy - 70, cx - w - 24, cy + 40)
    ctx.fill()
  } else {
    // swept fringe / long / wild / braids / ponytail
    ctx.beginPath()
    ctx.moveTo(cx - w - 2, cy - 26)
    ctx.bezierCurveTo(cx - w - 8, cy - 112, cx + w + 8, cy - 120, cx + w + 2, cy - 26)
    ctx.lineTo(cx + w - 6, cy - 20)
    if (looks.hair === 'wild') {
      ctx.lineTo(cx + 32, cy - 74); ctx.lineTo(cx + 18, cy - 48); ctx.lineTo(cx - 4, cy - 82); ctx.lineTo(cx - 26, cy - 40)
    } else if (looks.hair === 'long') {
      ctx.lineTo(cx + 38, cy - 66); ctx.lineTo(cx + 8, cy - 42); ctx.lineTo(cx - 22, cy - 80); ctx.lineTo(cx - 52, cy - 30)
    } else {
      ctx.lineTo(cx + 42, cy - 60); ctx.lineTo(cx + 6, cy - 52); ctx.lineTo(cx - 30, cy - 84); ctx.lineTo(cx - 58, cy - 20)
    }
    ctx.lineTo(cx - w + 6, cy - 20)
    ctx.closePath(); ctx.fill()
    // hair shine
    ctx.strokeStyle = 'rgba(255,255,255,0.13)'; ctx.lineWidth = 6
    ctx.beginPath(); ctx.moveTo(cx - 38, cy - 94); ctx.quadraticCurveTo(cx - 6, cy - 116, cx + 30, cy - 82); ctx.stroke()
  }

  // ---- origin / headgear --------------------------------------------------
  if (origin === 'demon' || looks.headgear === 'horns') {
    ctx.fillStyle = '#2a1714'
    ctx.beginPath(); ctx.moveTo(cx - w + 4, cy - 78); ctx.bezierCurveTo(cx - w - 38, cy - 150, cx - w - 12, cy - 190, cx - w + 10, cy - 128); ctx.closePath(); ctx.fill()
    ctx.beginPath(); ctx.moveTo(cx + w - 4, cy - 78); ctx.bezierCurveTo(cx + w + 38, cy - 150, cx + w + 12, cy - 190, cx + w - 10, cy - 128); ctx.closePath(); ctx.fill()
    ctx.strokeStyle = 'rgba(180,60,40,0.35)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(cx - w - 8, cy - 120); ctx.quadraticCurveTo(cx - w - 20, cy - 150, cx - w - 2, cy - 166); ctx.stroke()
  }

  if (looks.ghost) {
    ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.12
    ctx.fillStyle = '#82d7e8'
    ctx.beginPath(); ctx.ellipse(cx, cy + 40, w + 20, 160, 0, 0, 7); ctx.fill(); ctx.restore()
  }

  if (looks.wool) {
    ctx.fillStyle = '#e6e0d0'
    for (let i = 0; i < 12; i++) {
      const a = -Math.PI + (i / 11) * Math.PI
      ctx.beginPath(); ctx.arc(cx + Math.cos(a) * (w + 2), cy - 40 + Math.sin(a) * 65, 25, 0, 7); ctx.fill()
    }
  }

  if (looks.headgear === 'anubis' || looks.anubis) {
    // golden jackal mask
    ctx.fillStyle = '#16110c'
    ctx.beginPath(); ctx.moveTo(cx - w - 2, cy - 120); ctx.lineTo(cx - w - 8, cy - 210); ctx.lineTo(cx - 22, cy - 250); ctx.lineTo(cx - 34, cy - 150); ctx.lineTo(cx - w - 2, cy - 120); ctx.fill()
    ctx.beginPath(); ctx.moveTo(cx + w + 2, cy - 120); ctx.lineTo(cx + w + 8, cy - 210); ctx.lineTo(cx + 22, cy - 250); ctx.lineTo(cx + 34, cy - 150); ctx.lineTo(cx + w + 2, cy - 120); ctx.fill()
    ctx.strokeStyle = '#d8ab3c'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(cx - w - 4, cy - 130); ctx.lineTo(cx - 24, cy - 238); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx + w + 4, cy - 130); ctx.lineTo(cx + 24, cy - 238); ctx.stroke()
    // gold eye of horus
    ctx.strokeStyle = '#e7b93f'; ctx.lineWidth = 4
    ctx.beginPath(); ctx.moveTo(cx - 72, cy - 20); ctx.lineTo(cx - 22, cy - 20); ctx.quadraticCurveTo(cx - 34, cy + 20, cx - 60, cy + 8); ctx.stroke()
    ctx.strokeStyle = '#b98c2b'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(cx + 22, cy - 18); ctx.lineTo(cx + 72, cy - 18); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx + 54, cy - 18); ctx.quadraticCurveTo(cx + 62, cy + 20, cx + 34, cy + 18); ctx.stroke()
    ctx.fillStyle = '#e7b93f'
    ctx.beginPath(); ctx.moveTo(cx - 6, cy + 56); ctx.lineTo(cx + 6, cy + 56); ctx.lineTo(cx, cy + 74); ctx.fill()
  }

  if (looks.headgear === 'ears' || looks.ears) {
    const earCol = looks.earColor || (looks.hair === 'white' ? '#e2ddd1' : '#b66a3b')
    ctx.fillStyle = earCol
    ctx.beginPath(); ctx.moveTo(cx - w + 2, cy - 92); ctx.lineTo(cx - w - 44, cy - 218); ctx.lineTo(cx - 20, cy - 118); ctx.closePath(); ctx.fill()
    ctx.beginPath(); ctx.moveTo(cx + w - 2, cy - 92); ctx.lineTo(cx + w + 44, cy - 218); ctx.lineTo(cx + 20, cy - 118); ctx.closePath(); ctx.fill()
    ctx.fillStyle = looks.furInner || '#6f4438'
    ctx.beginPath(); ctx.moveTo(cx - w + 4, cy - 108); ctx.lineTo(cx - w - 30, cy - 194); ctx.lineTo(cx - 26, cy - 126); ctx.closePath(); ctx.fill()
    ctx.beginPath(); ctx.moveTo(cx + w - 4, cy - 108); ctx.lineTo(cx + w + 30, cy - 194); ctx.lineTo(cx + 26, cy - 126); ctx.closePath(); ctx.fill()
  }

  if (looks.muzzle) {
    ctx.save()
    ctx.fillStyle = skinLight
    ctx.beginPath(); ctx.ellipse(cx, cy + 58, 34, 28, 0, 0, 7); ctx.fill()
    ctx.fillStyle = 'rgba(20,12,12,0.9)'
    ctx.beginPath(); ctx.ellipse(cx, cy + 45, 11, 7, 0, 0, 7); ctx.fill()
    ctx.strokeStyle = 'rgba(30,18,15,0.6)'; ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(cx, cy + 52); ctx.lineTo(cx, cy + 65); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx, cy + 65); ctx.quadraticCurveTo(cx - 12, cy + 75, cx - 18, cy + 64); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx, cy + 65); ctx.quadraticCurveTo(cx + 12, cy + 75, cx + 18, cy + 64); ctx.stroke()
    ctx.restore()
  }

  if (looks.headgear === 'crown' || looks.crown) {
    ctx.fillStyle = '#141318'
    ctx.strokeStyle = '#d8ab3c'; ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(cx - 58, cy - 100)
    ctx.lineTo(cx - 52, cy - 152); ctx.lineTo(cx - 26, cy - 122); ctx.lineTo(cx, cy - 176)
    ctx.lineTo(cx + 26, cy - 122); ctx.lineTo(cx + 52, cy - 152); ctx.lineTo(cx + 58, cy - 100)
    ctx.closePath(); ctx.fill(); ctx.stroke()
    ctx.fillStyle = '#37c8ff'
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(cx - 34 + i * 34, cy - 112, 4.5, 0, 7); ctx.fill() }
  }

  if (looks.headgear === 'jester' || looks.joker) {
    ctx.fillStyle = '#3a1c56'
    ctx.beginPath(); ctx.moveTo(cx - w + 4, cy - 86); ctx.lineTo(cx - 88, cy - 210); ctx.lineTo(cx - 10, cy - 118); ctx.closePath(); ctx.fill()
    ctx.fillStyle = '#285c30'
    ctx.beginPath(); ctx.moveTo(cx + w - 4, cy - 86); ctx.lineTo(cx + 88, cy - 210); ctx.lineTo(cx + 10, cy - 118); ctx.closePath(); ctx.fill()
    ctx.fillStyle = '#c9b04a'
    ctx.beginPath(); ctx.arc(cx - 88, cy - 214, 10, 0, 7); ctx.fill()
    ctx.beginPath(); ctx.arc(cx + 88, cy - 214, 10, 0, 7); ctx.fill()
    // face paint diamonds
    ctx.fillStyle = 'rgba(180,20,40,0.6)'
    ctx.save(); ctx.translate(cx - 44, cy - 38); ctx.rotate(Math.PI / 4); ctx.fillRect(-9, -9, 18, 18); ctx.restore()
    ctx.save(); ctx.translate(cx + 44, cy - 38); ctx.rotate(Math.PI / 4); ctx.fillRect(-9, -9, 18, 18); ctx.restore()
  }

  if (looks.headgear === 'goggles') {
    ctx.fillStyle = 'rgba(20,18,20,0.9)'
    ctx.beginPath(); ctx.roundRect(cx - w - 4, cy - 44, w * 2 + 8, 34, 8); ctx.fill()
    ctx.strokeStyle = '#5b5044'; ctx.lineWidth = 2; ctx.stroke()
    ctx.fillStyle = 'rgba(90,180,200,0.4)'
    ctx.beginPath(); ctx.ellipse(cx - 24, cy - 27, 17, 11, 0, 0, 7); ctx.fill()
    ctx.beginPath(); ctx.ellipse(cx + 24, cy - 27, 17, 11, 0, 0, 7); ctx.fill()
  }

  if (looks.headgear === 'bandana') {
    ctx.fillStyle = '#7a1d1d'
    ctx.beginPath(); ctx.moveTo(cx - w - 4, cy - 58); ctx.lineTo(cx + w + 4, cy - 58); ctx.lineTo(cx + w + 1, cy - 84); ctx.lineTo(cx - w - 1, cy - 84); ctx.fill()
    ctx.fillStyle = '#5e1414'
    ctx.beginPath(); ctx.moveTo(cx + w + 1, cy - 74); ctx.lineTo(cx + w + 38, cy - 48); ctx.lineTo(cx + w + 24, cy - 92); ctx.fill()
  }

  // small blood spatter
  if (opts.gore !== 'off') {
    ctx.save()
    ctx.globalAlpha = 0.65
    const gc = opts.gore === 'zombie' ? 'rgba(90,150,50,0.8)' : 'rgba(130,18,20,0.8)'
    ctx.fillStyle = gc
    for (let i = 0; i < 7; i++) {
      ctx.beginPath(); ctx.arc(80 + rnd() * 360, 60 + rnd() * 420, 1 + rnd() * 5, 0, 7); ctx.fill()
    }
    ctx.restore()
  }

  // vignette
  const vg = ctx.createRadialGradient(cx, cy, 120, cx, cy, 320)
  vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.7)')
  ctx.fillStyle = vg; ctx.fillRect(0, 0, 512, 512)

  return canvas
}

function eyeStyleHeight(style, female) {
  if (style === 'cyber') return 7
  if (style === 'hollow') return 12
  return female ? 8 : 7
}

export function portraitDataURL(looks, opts = {}) {
  const c = document.createElement('canvas')
  drawPortrait(c, looks, opts)
  return c.toDataURL('image/png')
}
