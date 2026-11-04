import {
  BOSSES, UNDERBOSSES, MAIN_BOSSES, MISSIONS, MISSION_TYPES, VEHICLES, TERRAINS, WEATHERS,
  DIFFICULTIES, ORIGINS, GENDERS, FACE_STYLES, HAIR_STYLES, HAIR_COLORS, EYE_COLORS,
  EYE_STYLES, FACIAL_HAIR, SCARS, HEADGEAR, MENU_QUOTES, CUP_ROUNDS, TOURNAMENT_ROUNDS
} from './data.js'
import { SaveStore, formatMoney, formatTime, DEFAULT_SETTINGS, defaultLooks } from './storage.js'
import { drawPortrait } from './portrait.js'
import { MenuBackdrop } from './menu-bg.js'
import { GaragePreview } from './garage.js'
import { RaceGame } from './race.js'
import { audio } from './audio.js'
import { brandMarkup, decorLayer, skullIcon, dividerMarkup, termsText } from './decor.js'

const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const pick = arr => arr[Math.floor(Math.random() * arr.length)]
const ordinal = n => {
  const s = ['TH', 'ST', 'ND', 'RD'][n % 100 > 10 && n % 100 < 14 ? 0 : n % 10] || 'TH'
  return `${n}${s}`
}
const SKIN_TONES = ['#b9866b', '#8c5b43', '#6c4938', '#d3a17d', '#e0b99b', '#4f3429', '#a9b8c6', '#8aa86b']
const autosaveLine = a => a ? `${a.date} · ${a.time} · ${a.location}` : 'NO SAVE YET'

const MAP_ZONES = [
  { id: 'ice', x: 150, y: 112, rx: 122, ry: 72, rot: -8 },
  { id: 'mountains', x: 334, y: 94, rx: 112, ry: 66, rot: 7 },
  { id: 'wasteland', x: 520, y: 120, rx: 128, ry: 68, rot: -4 },
  { id: 'jungle', x: 735, y: 132, rx: 120, ry: 72, rot: 6 },
  { id: 'rainforest', x: 872, y: 250, rx: 112, ry: 84, rot: -10 },
  { id: 'dunes', x: 155, y: 282, rx: 112, ry: 78, rot: 8 },
  { id: 'desert', x: 330, y: 260, rx: 112, ry: 82, rot: -5 },
  { id: 'warzone', x: 505, y: 272, rx: 110, ry: 76, rot: 5 },
  { id: 'city', x: 665, y: 308, rx: 118, ry: 84, rot: -7 },
  { id: 'suburbs', x: 812, y: 402, rx: 104, ry: 78, rot: 9 },
  { id: 'volcano', x: 142, y: 475, rx: 112, ry: 92, rot: -6 },
  { id: 'mines', x: 324, y: 452, rx: 110, ry: 86, rot: 7 },
  { id: 'swamp', x: 530, y: 478, rx: 116, ry: 88, rot: -4 },
  { id: 'beach', x: 742, y: 548, rx: 122, ry: 76, rot: 8 },
  { id: 'dystopia', x: 884, y: 532, rx: 100, ry: 82, rot: -9 }
]

const MAP_COORDS = {
  m_acid_run: [80, 28], m_sand_delivery: [15, 42], m_fare_hell: [73, 57],
  m_scrapyard_sprint: [50, 62], m_neon_cup: [91, 73], m_dead_tide_cup: [74, 84],
  m_cinder_tournament: [46, 81], m_gang_hunt: [52, 43], m_police_siege: [63, 39],
  m_pvp_duel: [36, 37], m_ice_cup: [20, 16], m_volcano_tour: [15, 73], m_blood_moon: [8, 56]
}

const FILTERS = [
  { id: 'all', name: 'All Contracts' },
  { id: 'race', name: 'Races' },
  { id: 'job', name: 'Jobs' },
  { id: 'pursuit', name: 'Pursuits' },
  { id: 'event', name: 'Events' }
]

function missionFilter(m, filter) {
  if (filter === 'all') return true
  if (filter === 'race') return ['race', 'cup', 'tournament', 'pvp'].includes(m.type)
  if (filter === 'job') return ['transport', 'taxi'].includes(m.type)
  if (filter === 'pursuit') return ['gang', 'police'].includes(m.type)
  if (filter === 'event') return m.type === 'event'
  return true
}

function ensureProfile(p) {
  if (!p) return p
  p.settings = { ...DEFAULT_SETTINGS, ...(p.settings || {}) }
  p.career = p.career || { defeated: [], current: 0 }
  p.career.defeated = p.career.defeated || []
  p.completed = p.completed || {}
  p.vehicles = p.vehicles || ['rust_reaper']
  p.equipped = p.equipped || 'rust_reaper'
  p.money = p.money || 0
  p.xp = p.xp || 0
  p.level = p.level || 1
  p.looks = { ...defaultLooks(p.gender || 'female'), ...(p.looks || {}) }
  return p
}

export class App {
  constructor() {
    this.store = new SaveStore()
    this.app = $('#app')
    this.modals = $('#modals')
    this.decor = $('#decor')
    this.menuBg = new MenuBackdrop($('#menu-bg'))
    this.menuBg.setQuality('medium')
    this.decor.innerHTML = decorLayer()
    this.screen = 'boot'
    this.filter = 'all'
    this.selectedMission = MISSIONS[0]
    this.selectedVehicle = 'rust_reaper'
    this.draft = null
    this.race = null
    this.activeLaunch = null
    this.series = null
    this.garagePreview = null
    this.mapOpen = false
    this.draftRandom = 0
    this._lastQuote = ''
    this.bindGlobal()
    this.store.persist()
    setTimeout(() => this.route('login'), 120)
    window.hellride = this
  }

  // ---------------------------------------------------------------------------
  // shell / routing
  // ---------------------------------------------------------------------------
  bindGlobal() {
    this.audioPrimed = false
    document.addEventListener('pointerdown', () => {
      if (!this.audioPrimed) {
        this.audioPrimed = true
        audio.ensure()
        const p = this.store.profile()
        if (p) audio.setVolumes(p.settings)
        if (['login', 'menu', 'create', 'map', 'career', 'garage', 'settings', 'events'].includes(this.screen)) audio.setScene('menu')
      } else {
        audio.ensure()
      }
    }, { capture: true })

    document.addEventListener('click', e => {
      const btn = e.target.closest('button')
      if (btn && !btn.dataset.silent) {
        if (btn.dataset.action === 'back' || btn.classList.contains('modal-x')) audio.sfx('back')
        else audio.sfx('click')
      }
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (this.modals.firstElementChild && !this.race) this.closeModal()
      }
    })
    window.addEventListener('resize', () => { this.menuBg?.resize?.() })
  }

  route(screen) {
    this.screen = screen
    document.body.dataset.screen = screen
    window.scrollTo(0, 0)
    const showBackdrop = ['login', 'create', 'menu'].includes(screen)
    this.decor.style.display = showBackdrop ? 'block' : 'none'
    const menuCanvas = $('#menu-bg')
    if (menuCanvas) menuCanvas.style.visibility = showBackdrop ? 'visible' : 'hidden'
    if (showBackdrop) this.menuBg.start(); else this.menuBg.stop()
    if (screen !== 'garage' && this.garagePreview) {
      this.garagePreview.stop()
      this.garagePreview = null
    }
    if (screen === 'login') this.renderLogin()
    else if (screen === 'create') this.renderCreate()
    else if (screen === 'menu') this.renderMenu()
    else if (screen === 'map') this.renderMap()
    else if (screen === 'career') this.renderCareer()
    else if (screen === 'garage') this.renderGarage()
    else if (screen === 'settings') this.renderSettings()
    else if (screen === 'events') this.renderEvents()
  }

  startMenuMusic() {
    const p = this.store.profile()
    audio.ensure()
    if (p) audio.setVolumes(p.settings)
    audio.setScene('menu')
  }

  toast(text, tone = '') {
    const el = $('#global-toast')
    el.textContent = text
    el.className = 'global-toast show ' + tone
    clearTimeout(this._toastT)
    this._toastT = setTimeout(() => { el.className = 'global-toast ' + tone }, 2400)
  }

  showModal(html, className = '') {
    this.modals.innerHTML = `<div class="modal-backdrop" data-modal-backdrop><div class="modal ${className}" role="dialog" aria-modal="true">${html}</div></div>`
    document.body.classList.add('modal-open')
    const back = this.modals.firstElementChild
    back.addEventListener('click', e => { if (e.target === back && !back.dataset.locked) this.closeModal() })
    $$('[data-modal-close]', this.modals).forEach(btn => btn.addEventListener('click', () => this.closeModal()))
    return this.modals.firstElementChild
  }

  closeModal() {
    this.modals.innerHTML = ''
    document.body.classList.remove('modal-open')
  }

  paintPortraits(root = document) {
    $$('canvas[data-profile]', root).forEach(c => {
      const p = this.store.state.profiles.find(x => x.id === c.dataset.profile)
      if (p) drawPortrait(c, { ...p.looks, name: p.name }, { size: 220, gore: p.settings?.gore })
    })
    $$('canvas[data-boss]', root).forEach(c => {
      const b = BOSSES.find(x => x.id === c.dataset.boss)
      if (b) drawPortrait(c, { ...b.portrait, name: b.name }, { size: 360, boss: true, gore: 'blood', bg: b.boss ? '#2c1113' : '#211713' })
    })
  }

  // ---------------------------------------------------------------------------
  // login
  // ---------------------------------------------------------------------------
  renderLogin() {
    const profiles = this.store.profiles()
    this.app.innerHTML = `
      <section class="screen login-screen">
        <div class="screen-inner login-grid">
          <div class="login-copy">
            ${brandMarkup()}
            <p class="login-lede">The oceans are acid. The roads are bones. The only law left is a finish line — and three demigods who refuse to lose.</p>
            <div class="world-stats">
              <div><b>15</b><span>DEAD TERRITORIES</span></div>
              <div><b>8</b><span>WEATHER HELLS</span></div>
              <div><b>11</b><span>BOSS DRIVERS</span></div>
              <div><b>∞</b><span>BAD DECISIONS</span></div>
            </div>
            <div class="login-badges">
              <span>☠ Single player</span><span>☣ 15 terrains</span><span>ϟ Living weather</span><span>⚙ Mobile controls</span>
            </div>
            <div class="login-links">
              <button class="link-btn" data-action="terms">TERMS &amp; CONDITIONS</button>
              <button class="link-btn" data-action="how">HOW TO PLAY</button>
            </div>
          </div>
          <aside class="panel login-panel">
            <div class="panel-head">
              <div><span class="kicker">PROFILE ACCESS</span><h2>WHO'S DRIVING?</h2></div>
              <b class="record-count">${String(profiles.length).padStart(2, '0')} ON RECORD</b>
            </div>
            ${profiles.length ? `<div class="profile-list">
              ${profiles.map(p => `
                <div class="profile-row">
                  <button class="profile-card" data-login="${p.id}" aria-label="Log in as ${esc(p.name)}">
                    <canvas class="profile-avatar" data-profile="${p.id}" width="220" height="220"></canvas>
                    <span class="profile-copy">
                      <b>${esc(p.name)}</b>
                      <span>LEVEL ${p.level} · ${formatMoney(p.money)}</span>
                      <em>${p.tutorialDone ? 'Tutorial cleared' : 'Tutorial pending'} · ${p.career.defeated.length}/11 bosses broken</em>
                    </span>
                    <span class="profile-enter">ENTER ▶</span>
                  </button>
                  <button class="profile-del" data-del="${p.id}" aria-label="Delete profile">✕</button>
                </div>`).join('')}
            </div>` : `
              <div class="empty-profiles">
                <div class="empty-skull">${skullIcon}</div>
                <b>NO SURVIVORS ON RECORD</b>
                <p>The wasteland is empty. Make a driver worth haunting it.</p>
              </div>`}
            <button class="btn btn-primary btn-large" data-action="new-profile">${profiles.length ? 'CREATE ANOTHER SURVIVOR' : 'CREATE YOUR SURVIVOR'}</button>
            <div class="panel-foot">
              <span>LOCAL PROFILE · NO SIGN-UP</span>
              <span>AUTOSAVE ${this.store.profile() ? 'ON' : 'READY'}</span>
            </div>
          </aside>
        </div>
        <div class="screen-foot"><span>HELLRIDE: APOCALYPSE</span><span>BUILD 1.0 · WASTELAND VELOCITY</span><span>NO GODS. THREE DEMIGODS.</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindLogin()
    if (this.store.profile()) this.startMenuMusic()
  }

  bindLogin() {
    $$('[data-login]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const p = this.store.login(btn.dataset.login)
      if (p) { ensureProfile(p); this.store.persist(); this.startMenuMusic(); this.route('menu'); this.toast(`WELCOME BACK, ${p.name}`, 'good') }
    }))
    $$('[data-del]', this.app).forEach(btn => btn.addEventListener('click', e => {
      e.stopPropagation()
      const p = this.store.state.profiles.find(x => x.id === btn.dataset.del)
      if (!p) return
      this.showModal(`
        <div class="modal-kicker danger-text">DELETE PROFILE</div>
        <h2>BURY ${esc(p.name)}?</h2>
        <p class="modal-lede">The driver, their garage, their kills and their saves will be gone. There is no resurrection in this wasteland.</p>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-modal-close>CANCEL</button>
          <button class="btn btn-danger" data-confirm-del="${p.id}">DELETE FOREVER</button>
        </div>`)
      $('[data-confirm-del]', this.modals).addEventListener('click', () => {
        this.store.remove(p.id)
        this.closeModal()
        this.renderLogin()
        this.toast('PROFILE ERASED', 'bad')
      })
    }))
    $('[data-action="new-profile"]', this.app)?.addEventListener('click', () => this.startCreate())
    $('[data-action="terms"]', this.app)?.addEventListener('click', () => this.showTerms())
    $('[data-action="how"]', this.app)?.addEventListener('click', () => this.showHowTo())
  }

  showTerms() {
    this.showModal(`<div class="modal-kicker">LEGAL · THE FINE PRINT</div>${termsText}<div class="modal-actions"><button class="btn btn-primary" data-modal-close>I ACCEPT THE APOCALYPSE</button></div>`, 'legal-modal')
  }

  showHowTo() {
    this.showModal(`
      <div class="modal-kicker">FIELD MANUAL</div>
      <h2>HOW TO NOT DIE</h2>
      <div class="how-grid">
        <div><b>LEFT SIDE</b><p>Two turn pedals. Left turns left. Right turns right. Physics does the arguing.</p></div>
        <div><b>RIGHT SIDE</b><p>Accelerate, stop/reverse, handbrake, nitro and your origin's special move. Five pedals, one bad idea.</p></div>
        <div><b>WEATHER</b><p>Wind pushes. Acid eats. Lightning strikes. Quicksand drinks. Read the warning strip.</p></div>
        <div><b>OBJECTIVES</b><p>Win races. Protect cargo. Keep the fare breathing. Outrun police. Survive the pack.</p></div>
        <div><b>BOSSES</b><p>Eight underbosses guard the ladder. Then Mandy-Lee, Zanrich and Drikus the Insane.</p></div>
        <div><b>SAVE</b><p>Everything autosaves. Three manual slots live in Settings.</p></div>
      </div>
      <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK TO THE ROAD</button></div>`, 'how-modal')
  }

  // ---------------------------------------------------------------------------
  // character creation
  // ---------------------------------------------------------------------------
  startCreate() {
    this.draft = {
      name: '',
      gender: 'female',
      origin: 'human',
      face: 'sharp',
      hair: 'mohawk',
      hairColor: 'black',
      eyeStyle: 'human',
      eyeColor: 'blue',
      facialHair: 'none',
      scar: 'eye',
      headgear: 'none',
      skin: ORIGINS[0].skin
    }
    this.route('create')
  }

  chipOptions(field, list, selected, opts = {}) {
    return list.map(o => {
      const value = o.value || o.id
      const active = selected === value ? ' active' : ''
      if (opts.colors) {
        return `<button class="swatch${active}" data-field="${field}" data-value="${value}" title="${esc(o.label)}"><i style="background:${o.value}"></i><span>${esc(o.label)}</span></button>`
      }
      return `<button class="chip${active}" data-field="${field}" data-value="${value}">${esc(o.label)}</button>`
    }).join('')
  }

  renderCreate() {
    const d = this.draft || {}
    const origin = ORIGINS.find(o => o.id === d.origin) || ORIGINS[0]
    this.app.innerHTML = `
      <section class="screen create-screen">
        <div class="screen-inner create-grid">
          <div class="create-preview panel">
            <div class="preview-kicker">SURVIVOR FILE · 001</div>
            <div class="portrait-frame big">
              <canvas id="createPortrait" width="512" height="512"></canvas>
              <div class="scanlines"></div>
              <span class="portrait-stamp">${origin.name.toUpperCase()}</span>
            </div>
            <div class="preview-id">
              <b id="previewName">UNNAMED</b>
              <span id="previewMeta">${d.gender.toUpperCase()} · ${origin.name.toUpperCase()} · LEVEL 1</span>
            </div>
            <p class="preview-bonus" id="previewBonus"><b>ORIGIN BONUS:</b> ${esc(origin.bonus)}</p>
            <button class="btn btn-ghost" data-action="randomize">⟳ RANDOMIZE FACE</button>
            <div class="preview-warning">☠ Appearance is permanent. The wasteland does not do refunds.</div>
          </div>
          <div class="create-form panel">
            <div class="panel-head">
              <div><span class="kicker">NEW PROFILE</span><h2>BUILD A SURVIVOR</h2></div>
              <button class="modal-x inline" data-action="back" aria-label="Back">✕</button>
            </div>
            <div class="field name-field">
              <label for="nameInput">DRIVER NAME <span>type anything · max 14</span></label>
              <input id="nameInput" class="text-input" maxlength="14" autocomplete="off" spellcheck="false" placeholder="ENTER NAME" value="${esc(d.name)}" />
            </div>
            <div class="field">
              <label>GENDER</label>
              <div class="segmented">${GENDERS.map(g => `<button class="seg${d.gender === g.id ? ' active' : ''}" data-field="gender" data-value="${g.id}">${g.label}</button>`).join('')}</div>
            </div>
            <div class="field">
              <label>ORIGIN <span>all origins are playable</span></label>
              <div class="origin-grid">
                ${ORIGINS.map((o, i) => `<button class="origin-card${d.origin === o.id ? ' active' : ''}" data-field="origin" data-value="${o.id}">
                  <b>${['☥', '☣', '◌', '☠', '♆', 'ϟ'][i]}</b>
                  <span>${o.name.toUpperCase()}</span>
                  <em>${o.bonus}</em>
                </button>`).join('')}
              </div>
            </div>
            <div class="field">
              <label>SKIN TONE</label>
              <div class="chips">${SKIN_TONES.map(s => `<button class="swatch simple${d.skin === s ? ' active' : ''}" data-field="skin" data-value="${s}" aria-label="Skin tone"><i style="background:${s}"></i></button>`).join('')}</div>
            </div>
            <div class="form-grid">
              <div class="field"><label>FACE STYLE</label><div class="chips">${this.chipOptions('face', FACE_STYLES, d.face)}</div></div>
              <div class="field"><label>HAIR STYLE</label><div class="chips">${this.chipOptions('hair', HAIR_STYLES, d.hair)}</div></div>
              <div class="field wide"><label>HAIR COLOR</label><div class="chips swatches">${this.chipOptions('hairColor', HAIR_COLORS, d.hairColor, { colors: true })}</div></div>
              <div class="field"><label>EYES</label><div class="chips">${this.chipOptions('eyeStyle', EYE_STYLES, d.eyeStyle)}</div></div>
              <div class="field"><label>EYE COLOR</label><div class="chips swatches">${this.chipOptions('eyeColor', EYE_COLORS, d.eyeColor, { colors: true })}</div></div>
              <div class="field"><label>FACIAL HAIR</label><div class="chips">${this.chipOptions('facialHair', FACIAL_HAIR, d.facialHair)}</div></div>
              <div class="field"><label>SCARS</label><div class="chips">${this.chipOptions('scar', SCARS, d.scar)}</div></div>
              <div class="field wide"><label>ACCESSORY</label><div class="chips">${this.chipOptions('headgear', HEADGEAR, d.headgear)}</div></div>
            </div>
            <div class="create-actions">
              <button class="btn btn-ghost" data-action="back">◀ BACK</button>
              <button class="btn btn-primary btn-large" data-action="create-submit">ENTER THE WASTELAND ▶</button>
            </div>
            <p class="hint">Profile is stored locally. You can save to three manual slots in Settings.</p>
          </div>
        </div>
        <div class="screen-foot"><span>IDENTITY IS A WEAPON</span><span>${ORIGINS.length} ORIGINS · ${HAIR_STYLES.length} HAIRSTYLES · ${SCARS.length} SCARS · ${EYE_COLORS.length} EYE COLORS</span></div>
      </section>`
    this.paintCreatePreview()
    this.bindCreate()
  }

  paintCreatePreview() {
    const d = this.draft
    const canvas = $('#createPortrait', this.app)
    if (!canvas) return
    drawPortrait(canvas, { ...d, name: d.name }, { size: 512, gore: 'blood', bg: '#2a1113' })
    const origin = ORIGINS.find(o => o.id === d.origin) || ORIGINS[0]
    $('#previewName').textContent = (d.name || 'UNNAMED').toUpperCase()
    $('#previewMeta').textContent = `${d.gender.toUpperCase()} · ${origin.name.toUpperCase()} · LEVEL 1`
    $('#previewBonus').innerHTML = `<b>ORIGIN BONUS:</b> ${esc(origin.bonus)}`
    const stamp = $('.portrait-stamp', this.app)
    if (stamp) stamp.textContent = origin.name.toUpperCase()
  }

  bindCreate() {
    const name = $('#nameInput', this.app)
    name.addEventListener('input', () => {
      this.draft.name = name.value.toUpperCase().slice(0, 14)
      $('#previewName').textContent = this.draft.name || 'UNNAMED'
    })
    $$('[data-field]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const { field, value } = btn.dataset
      if (!field) return
      this.draft[field] = value
      $$(`[data-field="${field}"]`, this.app).forEach(b => b.classList.toggle('active', b.dataset.value === value))
      if (field === 'origin') {
        const o = ORIGINS.find(x => x.id === value)
        if (o) {
          this.draft.skin = o.skin
          $$('[data-field="skin"]', this.app).forEach(b => b.classList.toggle('active', b.dataset.value === o.skin))
        }
      }
      this.paintCreatePreview()
    }))
    $('[data-action="randomize"]', this.app)?.addEventListener('click', () => {
      const d = this.draft
      d.face = pick(FACE_STYLES).id
      d.hair = pick(HAIR_STYLES).id
      d.hairColor = pick(HAIR_COLORS).id
      d.eyeColor = pick(EYE_COLORS).id
      d.eyeStyle = pick(EYE_STYLES).id
      d.facialHair = pick(FACIAL_HAIR).id
      d.scar = pick(SCARS).id
      d.headgear = pick(HEADGEAR).id
      d.origin = pick(ORIGINS).id
      d.gender = Math.random() > 0.5 ? 'female' : 'male'
      d.skin = (ORIGINS.find(o => o.id === d.origin) || ORIGINS[0]).skin
      this.renderCreate()
      this.toast('NEW FACE, SAME BAD FUTURE', 'good')
    })
    $('[data-action="back"]', this.app)?.addEventListener('click', () => this.route('login'))
    $('[data-action="create-submit"]', this.app)?.addEventListener('click', () => {
      const nameVal = ($('#nameInput', this.app).value || '').trim().toUpperCase().slice(0, 14) || 'NAMELESS'
      const origin = ORIGINS.find(o => o.id === this.draft.origin) || ORIGINS[0]
      const p = this.store.create({
        name: nameVal,
        gender: this.draft.gender,
        origin: this.draft.origin,
        looks: { ...this.draft, name: nameVal, origin: this.draft.origin }
      })
      ensureProfile(p)
      this.store.login(p.id)
      this.startMenuMusic()
      this.route('menu')
      this.toast(`PROFILE CREATED · ${p.name}`, 'good')
    })
  }

  // ---------------------------------------------------------------------------
  // main menu
  // ---------------------------------------------------------------------------
  getProfile() {
    const p = this.store.profile()
    return p ? ensureProfile(p) : null
  }

  bossState(boss) {
    const p = this.getProfile()
    if (!p) return 'locked'
    if (p.career.defeated.includes(boss.id)) return 'defeated'
    const completed = p.career.defeated.length
    return boss.order <= completed + 1 ? 'available' : 'locked'
  }

  nextBoss() {
    const p = this.getProfile()
    if (!p) return null
    return BOSSES.find(b => !p.career.defeated.includes(b.id) && b.order <= p.career.defeated.length + 1) || null
  }

  xpProgress(p) {
    const level = p.level || 1
    const base = 250 * Math.pow(level - 1, 2)
    const next = 250 * Math.pow(level, 2)
    return clamp(((p.xp || 0) - base) / Math.max(1, next - base), 0, 1)
  }

  renderMenu() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    const quote = pick(MENU_QUOTES.filter(q => q !== this._lastQuote))
    this._lastQuote = quote
    const next = this.nextBoss()
    const owned = p.vehicles.length
    const muted = (p.settings.master || 0) <= 0.01
    const weather = WEATHERS[(new Date().getDate() + p.level) % WEATHERS.length]
    const equip = VEHICLES.find(v => v.id === p.equipped) || VEHICLES[0]
    const progress = this.xpProgress(p)
    this.app.innerHTML = `
      <section class="screen menu-screen">
        <header class="menu-hud">
          <button class="profile-hud" data-action="profile">
            <canvas class="hud-avatar" data-profile="${p.id}" width="180" height="180"></canvas>
            <span><b>${esc(p.name)}</b><em>LEVEL ${p.level} · ${esc((ORIGINS.find(o => o.id === p.origin) || ORIGINS[0]).name.toUpperCase())}</em><span class="xp-mini"><i style="width:${Math.round(progress * 100)}%"></i></span></span>
          </button>
          <div class="hud-money">
            <span>SCRAP</span><b>${formatMoney(p.money)}</b>
          </div>
          <div class="hud-car">
            <span>ACTIVE VEHICLE</span><b>${esc(equip.name)}</b>
          </div>
          <div class="top-actions">
            <button class="icon-btn" data-action="mute" aria-label="Toggle sound">${muted ? '🔇' : '🔊'}</button>
            <button class="icon-btn" data-action="fullscreen" aria-label="Fullscreen">⛶</button>
            <button class="icon-btn" data-action="logout" aria-label="Log out">⏻</button>
          </div>
        </header>
        <div class="menu-main">
          <div class="menu-left">
            ${brandMarkup()}
            <p class="menu-lede">${esc(quote)}</p>
            <nav class="main-nav">
              <button class="menu-btn primary" data-action="start">
                <span class="mn">01</span>
                <span class="mt"><b>START GAME</b><em>${p.tutorialDone ? 'Open the wasteland map' : 'Tutorial: controls + first lap'}</em></span>
                <span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="continue">
                <span class="mn">02</span>
                <span class="mt"><b>CONTINUE</b><em>${p.career.defeated.length}/11 bosses · ${formatMoney(p.money)}</em></span>
                <span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="missions">
                <span class="mn">03</span><span class="mt"><b>MISSIONS</b><em>Open map · 13 contracts + events</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="career">
                <span class="mn">04</span><span class="mt"><b>CAREER</b><em>8 underbosses · 3 demigods</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="garage">
                <span class="mn">05</span><span class="mt"><b>GARAGE</b><em>${owned}/${VEHICLES.length} vehicles acquired</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="settings">
                <span class="mn">06</span><span class="mt"><b>SETTINGS</b><em>Sound · video · gore · saves · terms</em></span><span class="ma">⚙</span>
              </button>
              <button class="menu-btn danger" data-action="exit">
                <span class="mn">07</span><span class="mt"><b>EXIT GAME</b><em>Leave the wasteland</em></span><span class="ma">⏻</span>
              </button>
            </nav>
          </div>
          <aside class="menu-side">
            <div class="next-contract panel">
              <div class="panel-kicker"><span>NEXT CONTRACT</span><b>${next ? '#' + String(next.order).padStart(2, '0') : 'CLEARED'}</b></div>
              ${next ? `
                <div class="next-boss">
                  <canvas class="next-portrait" data-boss="${next.id}" width="360" height="360"></canvas>
                  <div>
                    <span class="boss-tag">${next.underboss ? 'UNDERBOSS' : 'MAIN BOSS'}</span>
                    <b>${esc(next.name)}</b>
                    <em>${esc(next.title)}</em>
                  </div>
                </div>
                <p class="next-quote">“${esc(next.quote)}”</p>
                <div class="next-meta"><span>${TERRAINS.find(t => t.id === next.terrain).short}</span><span>${WEATHERS.find(w => w.id === next.weather).name}</span><span>${next.laps} LAPS</span></div>
                <div class="reward-line"><span>BOUNTY</span><b>${formatMoney(next.reward)}</b></div>
                <button class="btn btn-danger btn-block" data-action="next-boss">CHALLENGE ${next.name.toUpperCase()}</button>
              ` : `
                <div class="all-clear"><span>☠</span><b>THE WASTELAND BOWS</b><p>Every boss is broken. Keep racing for blood and scrap.</p><button class="btn btn-primary btn-block" data-action="missions">KEEP DRIVING</button></div>
              `}
            </div>
            <div class="menu-stats panel">
              <div class="panel-kicker"><span>DRIVER RECORD</span><b>${p.tutorialDone ? 'ACTIVE' : 'TRAINEE'}</b></div>
              <div class="stat-grid">
                <div><b>${p.victories || 0}</b><span>WINS</span></div>
                <div><b>${p.races || 0}</b><span>RACES</span></div>
                <div><b>${p.career.defeated.length}</b><span>BOSSES</span></div>
                <div><b>${p.bestLap ? formatTime(p.bestLap) : '—'}</b><span>BEST LAP</span></div>
              </div>
              <div class="weather-line"><i>${weather.icon}</i><div><b>${weather.name.toUpperCase()}</b><span>${weather.desc}</span></div><em>WIND ${weather.wind.toFixed(1)}</em></div>
            </div>
            <div class="autosave-note">
              <span class="save-dot"></span>
              <div class="autosave-copy">
                <b>AUTOSAVED</b>
                <span>${p.autosave ? `${esc(p.autosave.date)} · ${esc(p.autosave.time)}` : 'LOCAL PROFILE'}</span>
                <em>${p.autosave ? esc(p.autosave.location) : 'NO SAVE YET'}</em>
              </div>
            </div>
          </aside>
        </div>
        <div class="screen-foot"><span>HELLRIDE: APOCALYPSE</span><span>BUILT FOR TOUCH · WASD ON DESKTOP</span><span>v1.0</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindMenu()
    this.startMenuMusic()
  }

  bindMenu() {
    const p = this.getProfile()
    const nav = { missions: () => this.route('map'), career: () => this.route('career'), garage: () => this.route('garage'), settings: () => this.route('settings') }
    $$('[data-action]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const a = btn.dataset.action
      if (a === 'start') {
        if (!p.tutorialDone) this.startTutorial()
        else this.route('map')
      } else if (a === 'continue') {
        if (!p.tutorialDone) {
          this.showModal(`<div class="modal-kicker">TRAINING INCOMPLETE</div><h2>THE WASTELAND IS WAITING</h2><p class="modal-lede">Your first race is a tutorial of the controls and survival systems. Finish it before the map opens — or jump in and learn by bleeding.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>STAY</button><button class="btn btn-primary" data-action="skip-tutorial">OPEN MAP ANYWAY</button></div>`)
          $('[data-action="skip-tutorial"]', this.modals).addEventListener('click', () => { this.closeModal(); this.route('map') })
        } else this.route('map')
      } else if (nav[a]) nav[a]()
      else if (a === 'next-boss') {
        const next = this.nextBoss()
        if (next) this.launchBoss(next)
      } else if (a === 'profile') this.showProfile()
      else if (a === 'logout') this.confirmLogout()
      else if (a === 'mute') this.toggleMute()
      else if (a === 'fullscreen') this.toggleFullscreen()
      else if (a === 'exit') this.showExit()
    }))
  }

  showProfile() {
    const p = this.getProfile()
    if (!p) return
    const origin = ORIGINS.find(o => o.id === p.origin) || ORIGINS[0]
    const equip = VEHICLES.find(v => v.id === p.equipped) || VEHICLES[0]
    this.showModal(`
      <div class="profile-modal-grid">
        <div class="portrait-frame"><canvas id="profileBig" width="420" height="420"></canvas><span class="portrait-stamp">${origin.name.toUpperCase()}</span></div>
        <div>
          <div class="modal-kicker">DRIVER DOSSIER</div>
          <h2>${esc(p.name)}</h2>
          <p class="modal-lede">${esc(origin.blurb)} <b>${esc(origin.bonus)}.</b></p>
          <div class="stat-grid">
            <div><b>${p.victories || 0}</b><span>WINS</span></div>
            <div><b>${p.races || 0}</b><span>RACES</span></div>
            <div><b>${p.career.defeated.length}/11</b><span>BOSSES</span></div>
            <div><b>${formatMoney(p.money)}</b><span>SCRAP</span></div>
          </div>
          <div class="dossier-line"><span>ACTIVE VEHICLE</span><b>${esc(equip.name)}</b></div>
          <div class="dossier-line"><span>TUTORIAL</span><b>${p.tutorialDone ? 'CLEARED' : 'PENDING'}</b></div>
          <div class="dossier-line"><span>BEST LAP</span><b>${p.bestLap ? formatTime(p.bestLap) : 'NO DATA'}</b></div>
          <div class="dossier-line"><span>LAST AUTOSAVE</span><b>${p.autosave ? `${esc(p.autosave.date)} · ${esc(p.autosave.time)}` : 'NONE'}</b></div>
          <div class="dossier-line"><span>SAVED AT</span><b>${p.autosave ? esc(p.autosave.location) : '—'}</b></div>
          <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK</button></div>
        </div>
      </div>`)
    const c = $('#profileBig', this.modals)
    drawPortrait(c, { ...p.looks, name: p.name }, { size: 420, bg: '#2b1113', gore: p.settings.gore })
  }

  confirmLogout() {
    this.showModal(`<div class="modal-kicker">END SESSION</div><h2>LOG OUT?</h2><p class="modal-lede">Your progress is autosaved. The wasteland will keep your grave warm.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="do-logout">LOG OUT</button></div>`)
    $('[data-action="do-logout"]', this.modals).addEventListener('click', () => {
      this.store.logout()
      this.store.persist()
      this.closeModal()
      this.route('login')
    })
  }

  toggleMute() {
    const p = this.getProfile()
    if (!p) return
    if ((p.settings.master || 0) > 0.01) {
      this._preMute = p.settings.master
      this.store.updateSettings({ master: 0 })
      audio.setVolumes({ master: 0 })
      this.toast('SOUND OFF', '')
    } else {
      const v = this._preMute || 0.8
      this.store.updateSettings({ master: v })
      audio.setVolumes({ master: v })
      this.toast('SOUND ON', 'good')
    }
    this.renderMenu()
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch?.(() => {})
      this.toast('FULLSCREEN REQUESTED', 'good')
    } else {
      document.exitFullscreen?.()
    }
  }

  showExit() {
    this.showModal(`
      <div class="modal-kicker danger-text">EXIT GAME</div>
      <h2>ABANDON THE WASTELAND?</h2>
      <p class="modal-lede">The browser cannot be closed by a web page. Logging out returns you to profile access. Your save remains on this device until you delete it.</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" data-modal-close>KEEP DRIVING</button>
        <button class="btn btn-danger" data-action="exit-logout">LOG OUT &amp; EXIT</button>
      </div>`)
    $('[data-action="exit-logout"]', this.modals).addEventListener('click', () => {
      this.store.logout()
      this.closeModal()
      this.route('login')
      this.toast('THE WASTELAND WILL WAIT', 'bad')
    })
  }

  // ---------------------------------------------------------------------------
  // open map / missions
  // ---------------------------------------------------------------------------
  mapSvg() {
    const zones = MAP_ZONES.map(z => {
      const t = TERRAINS.find(x => x.id === z.id) || TERRAINS[0]
      return `
        <g class="map-zone" transform="translate(${z.x} ${z.y}) rotate(${z.rot})">
          <ellipse rx="${z.rx}" ry="${z.ry}" fill="${t.ground}" opacity=".26"/>
          <ellipse rx="${z.rx}" ry="${z.ry}" fill="none" stroke="${t.accent}" stroke-opacity=".38" stroke-dasharray="5 7" stroke-width="2"/>
          <text y="${z.ry - 10}" text-anchor="middle" class="zone-name">${esc(t.short)}</text>
          <text y="${z.ry + 8}" text-anchor="middle" class="zone-icon">${t.icon}</text>
        </g>`
    }).join('')
    const roads = Object.values(MAP_COORDS).map(([x, y]) => `${x * 10},${y * 6.8}`).join(' ')
    return `
      <svg class="wasteland-map-svg" viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="mapSky" cx="48%" cy="42%" r="75%">
            <stop offset="0" stop-color="#37261f"/><stop offset=".55" stop-color="#201714"/><stop offset="1" stop-color="#0b0a0a"/>
          </radialGradient>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(220,183,115,.055)" stroke-width="1"/>
          </pattern>
          <filter id="softGlow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(0,0,0,.18)" stroke-width="3"/>
          </pattern>
        </defs>
        <rect width="1000" height="680" fill="url(#mapSky)"/>
        <rect width="1000" height="680" fill="url(#mapGrid)"/>
        <g opacity=".85">${zones}</g>
        <g class="map-rivers">
          <path d="M-40 540 C120 470 170 390 260 340 S430 350 510 300 S680 390 760 300 S880 210 1030 240" fill="none" stroke="#33524f" stroke-opacity=".35" stroke-width="18"/>
          <path d="M-20 190 C140 240 230 190 330 210 S520 150 630 210 S820 200 1020 160" fill="none" stroke="#4d4132" stroke-opacity=".42" stroke-width="16"/>
        </g>
        <polyline points="${roads}" fill="none" stroke="#b8965e" stroke-opacity=".25" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/>
        <g class="map-frame">
          <path d="M32 32h180M32 32v120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M968 32H788M968 32v120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M32 648h180M32 648v-120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M968 648H788M968 648v-120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <text x="500" y="52" text-anchor="middle" class="map-title-svg">THE GREAT WASTES</text>
          <text x="500" y="70" text-anchor="middle" class="map-sub-svg">15 TERRITORIES · 8 WEATHER HELLS · NO EXIT</text>
          <g transform="translate(924 600)" class="compass">
            <circle r="30" fill="none" stroke="#b8975e" stroke-opacity=".45"/>
            <path d="M0-25 7 4 0 0-7 4Z" fill="#d3aa62" opacity=".9"/>
            <text y="45" text-anchor="middle">N</text>
          </g>
        </g>
      </svg>`
  }

  renderMap() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    const filtered = MISSIONS.filter(m => missionFilter(m, this.filter))
    if (!filtered.find(m => m.id === this.selectedMission.id)) this.selectedMission = filtered[0] || MISSIONS[0]
    const selected = this.selectedMission
    const t = TERRAINS.find(x => x.id === selected.terrain)
    const w = WEATHERS.find(x => x.id === selected.weather)
    const diff = DIFFICULTIES.find(x => x.id === selected.difficulty) || DIFFICULTIES[1]
    const done = p.completed[selected.id]
    const type = MISSION_TYPES[selected.type]
    const heatCount = selected.type === 'cup' || selected.type === 'tournament' ? 3 : null
    this.app.innerHTML = `
      <section class="screen map-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">OPERATIONS</span><h2>WASTELAND MAP</h2></div>
          <div class="sub-nav">
            <button class="sub-nav-btn" data-action="career">CAREER</button>
            <button class="sub-nav-btn" data-action="garage">GARAGE</button>
            <button class="sub-nav-btn" data-action="events">EVENTS <i class="live-dot"></i></button>
            <button class="sub-nav-btn" data-action="settings">SETTINGS</button>
          </div>
          <div class="sub-profile">
            <canvas class="mini-avatar" data-profile="${p.id}" width="140" height="140"></canvas>
            <span><b>${esc(p.name)}</b><em>LVL ${p.level} · ${formatMoney(p.money)}</em></span>
          </div>
        </header>
        <div class="map-layout">
          <div class="map-main">
            <div class="map-toolbar">
              <div class="filter-row">
                ${FILTERS.map(f => `<button class="filter-chip${this.filter === f.id ? ' active' : ''}" data-filter="${f.id}">${f.name}<b>${MISSIONS.filter(m => missionFilter(m, f.id)).length}</b></button>`).join('')}
              </div>
              <div class="map-sky"><i>${WEATHERS[(p.level + new Date().getDate()) % 8].icon}</i> SKY: ${WEATHERS[(p.level + new Date().getDate()) % 8].name.toUpperCase()} <span>LIVE</span></div>
            </div>
            <div class="map-stage" id="mapStage">
              ${this.mapSvg()}
              <div class="map-pins">
                ${filtered.map(m => {
                  const [x, y] = MAP_COORDS[m.id] || [50, 50]
                  const mt = MISSION_TYPES[m.type]
                  const md = p.completed[m.id]
                  return `<button class="map-pin ${m.type} ${this.selectedMission.id === m.id ? 'selected' : ''} ${md ? 'done' : ''} ${m.type === 'event' ? 'event-pin' : ''}" style="left:${x}%;top:${y}%" data-mission="${m.id}" aria-label="${esc(m.name)}">
                    <span class="pin-head"><i>${mt.icon}</i></span>
                    <span class="pin-tag"><b>${esc(m.name)}</b><em>${TERRAINS.find(z => z.id === m.terrain).short} · ${mt.name}</em></span>
                  </button>`
                }).join('')}
              </div>
              <div class="map-legend"><span><i class="pin-dot race"></i> RACE</span><span><i class="pin-dot job"></i> JOB</span><span><i class="pin-dot pursuit"></i> PURSUIT</span><span><i class="pin-dot event"></i> EVENT</span></div>
            </div>
            <div class="map-note"><span>☠</span> OPEN MAP QUESTS · SELECT A PIN · SECTORS ARE REPRESENTATIVE, NOT WALKABLE</div>
          </div>
          <aside class="mission-panel panel">
            <div class="mission-head">
              <span class="mission-type"><i>${type.icon}</i>${type.name.toUpperCase()}</span>
              ${done ? `<span class="completed-stamp">CLEARED ×${done.wins}</span>` : selected.event ? '<span class="event-stamp">LIMITED EVENT</span>' : '<span class="new-stamp">OPEN</span>'}
            </div>
            <h2 class="mission-name">${esc(selected.name)}</h2>
            <p class="mission-blurb">${esc(selected.blurb)}</p>
            <div class="mission-chips">
              <span><i>${t.icon}</i>${t.name}</span>
              <span><i>${w.icon}</i>${w.name}</span>
              <span class="${diff.id}">${diff.name}</span>
              <span>${heatCount ? `3 HEATS · ${selected.laps} LAPS` : selected.type === 'gang' || selected.type === 'police' ? 'SURVIVE 60s' : `${selected.laps} LAPS`}</span>
            </div>
            <div class="objective-box">
              <b>OBJECTIVE</b>
              <p>${selected.type === 'transport' ? 'Deliver the cargo. Keep integrity above zero. Walls are expensive.' : selected.type === 'taxi' ? 'Deliver the passenger. Comfort above zero. They paid in advance.' : selected.type === 'gang' || selected.type === 'police' ? 'Survive 60 seconds of pursuit. Hull zero means a closed casket.' : selected.type === 'pvp' ? 'Beat your rival. Local AI stand-in. No excuses.' : selected.type === 'cup' || selected.type === 'tournament' ? 'Score at least 20 championship points across three heats.' : 'Finish first. Weather does not care about your feelings.'}</p>
            </div>
            ${selected.vehicleReward ? `<div class="vehicle-reward"><span class="vr-icon">${selected.event ? '☄' : '⚙'}</span><div><b>VEHICLE UNLOCK</b><span>${esc(VEHICLES.find(v => v.id === selected.vehicleReward)?.name || selected.vehicleReward)}</span></div>${p.vehicles.includes(selected.vehicleReward) ? '<em>OWNED</em>' : '<em>REWARD</em>'}</div>` : ''}
            <div class="reward-grid">
              <div><span>BOUNTY</span><b>${formatMoney(selected.reward)}</b></div>
              <div><span>XP</span><b>${selected.xp}</b></div>
              <div><span>RISK</span><b class="risk-${diff.id}">${diff.name.toUpperCase()}</b></div>
            </div>
            <div class="weather-note"><i>${w.icon}</i><span><b>${w.name.toUpperCase()}</b>${w.desc}</span><em>GRIP ${(w.grip * 100).toFixed(0)}% · WIND ${w.wind.toFixed(1)}</em></div>
            <button class="btn btn-danger btn-block btn-large" data-action="launch-mission" data-mission="${selected.id}">${done ? 'REPLAY CONTRACT' : 'ACCEPT CONTRACT'} ▶</button>
            <p class="panel-hint">Single player · Local save · PvP is AI</p>
          </aside>
        </div>
        <div class="screen-foot"><span>WASTELAND OPERATIONS</span><span>${filtered.length} CONTRACTS VISIBLE</span><span>☠ ${p.career.defeated.length}/11 BOSSES</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindMap()
  }

  bindMap() {
    $$('[data-filter]', this.app).forEach(btn => btn.addEventListener('click', () => {
      this.filter = btn.dataset.filter
      this.renderMap()
    }))
    $$('[data-mission]', this.app).forEach(btn => btn.addEventListener('click', e => {
      if (btn.dataset.action === 'launch-mission') return
      const m = MISSIONS.find(x => x.id === btn.dataset.mission)
      if (m) { this.selectedMission = m; this.renderMap() }
    }))
    $('[data-action="launch-mission"]', this.app)?.addEventListener('click', () => this.launchMission(this.selectedMission))
    $('[data-action="back"]', this.app)?.addEventListener('click', () => this.route('menu'))
    $('[data-action="career"]', this.app)?.addEventListener('click', () => this.route('career'))
    $('[data-action="garage"]', this.app)?.addEventListener('click', () => this.route('garage'))
    $('[data-action="events"]', this.app)?.addEventListener('click', () => this.route('events'))
    $('[data-action="settings"]', this.app)?.addEventListener('click', () => this.route('settings'))
  }

  buildRounds(mission) {
    let terrains
    if (mission.type === 'cup') {
      terrains = [mission.terrain, ...CUP_ROUNDS.filter(t => t !== mission.terrain)].slice(0, 3)
    } else if (mission.type === 'tournament') {
      terrains = [mission.terrain, ...TOURNAMENT_ROUNDS.filter(t => t !== mission.terrain)].slice(0, 3)
    } else {
      terrains = [mission.terrain]
    }
    return terrains.map((terrain, i) => ({
      terrain,
      weather: i === 0 ? mission.weather : pick(WEATHERS).id,
      laps: mission.laps
    }))
  }

  launchMission(mission) {
    const p = this.getProfile()
    if (!p) return
    if (mission.type === 'cup' || mission.type === 'tournament') {
      const rounds = this.buildRounds(mission)
      this.series = { mission, rounds, index: 0, points: 0, results: [], success: false }
      this.activeLaunch = { source: 'mission', mission, series: this.series, config: null }
      this.startHeat(0)
      return
    }
    const mode = mission.type === 'event' ? 'race' : mission.type
    this.series = null
    const config = {
      mode,
      terrain: mission.terrain,
      weather: mission.weather,
      laps: mission.laps,
      difficulty: mission.difficulty,
      missionId: mission.id,
      escapeTime: 60
    }
    this.activeLaunch = { source: 'mission', mission, config }
    this.startRace(config)
  }

  startHeat(index) {
    const series = this.series
    if (!series) return
    const round = series.rounds[index]
    series.index = index
    const p = this.getProfile()
    const config = {
      mode: series.mission.type,
      terrain: round.terrain,
      weather: round.weather,
      laps: round.laps,
      difficulty: series.mission.difficulty,
      missionId: series.mission.id,
      seriesHeat: index + 1,
      seriesTotal: series.rounds.length,
      escapeTime: 60
    }
    this.activeLaunch.config = config
    this.startRace(config)
  }

  startTutorial() {
    const p = this.getProfile()
    if (!p) return
    this.series = null
    const config = { mode: 'tutorial', terrain: 'wasteland', weather: 'cloudy', laps: 1, difficulty: 'easy', escapeTime: 60 }
    this.activeLaunch = { source: 'tutorial', config }
    this.startRace(config)
  }

  launchBoss(boss) {
    const state = this.bossState(boss)
    if (state === 'locked') { this.toast('LOCKED · BREAK THE EARLIER BOSSES FIRST', 'bad'); return }
    this.closeModal()
    this.series = null
    const config = {
      mode: 'boss', terrain: boss.terrain, weather: boss.weather, laps: boss.laps,
      difficulty: boss.difficulty, bossId: boss.id, escapeTime: 60
    }
    this.activeLaunch = { source: 'boss', boss, config }
    this.startRace(config)
  }

  // ---------------------------------------------------------------------------
  // career ladder
  // ---------------------------------------------------------------------------
  renderCareer() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    const defeated = p.career.defeated.length
    const under = UNDERBOSSES.map(b => this.bossCard(b)).join('')
    const mains = MAIN_BOSSES.map(b => this.bossCard(b, true)).join('')
    this.app.innerHTML = `
      <section class="screen career-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">THE LADDER</span><h2>CAREER</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="garage">GARAGE</button><button class="sub-nav-btn" data-action="events">EVENTS</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${p.id}" width="140" height="140"></canvas><span><b>${esc(p.name)}</b><em>${defeated}/11 BROKEN</em></span></div>
        </header>
        <div class="career-inner">
          <div class="career-hero">
            <div>
              <span class="kicker">NO SHORTCUTS · NO MERCY</span>
              <h1>BREAK THE <span>WASTELAND</span></h1>
              <p>Eight underbosses stand between you and the three demigods at the top of the food chain. Beat them in order. Take their cars. Break their legends.</p>
            </div>
            <div class="career-progress">
              <div class="progress-ring" style="--p:${defeated / 11 * 360}deg"><b>${defeated}</b><span>/ 11</span></div>
              <div class="progress-copy"><b>${defeated < 8 ? 'UNDERBOSS LADDER' : defeated < 11 ? 'MAIN EVENT UNLOCKED' : 'WASTELAND BOWS'}</b><span>${defeated < 8 ? `${8 - defeated} underboss${8 - defeated === 1 ? '' : 'es'} remain` : defeated < 11 ? `${11 - defeated} demigod${11 - defeated === 1 ? '' : 's'} remain` : 'Every throne is yours.'}</span></div>
            </div>
          </div>
          <div class="ladder">
            <div class="ladder-head"><span class="kicker">TIER 01</span><h3>THE EIGHT UNDERBOSSES</h3><p>The gatekeepers. Each one guards a vehicle, a territory, and a reason to hate you.</p></div>
            <div class="boss-grid">${under}</div>
          </div>
          <div class="main-event">
            <div class="main-event-title">
              <span class="kicker danger-text">TIER 02 · THE MAIN EVENT</span>
              <h2>THREE DEMIGODS</h2>
              <p>The Queen of the Dark. The Wild Demigod. The Demigod of Insanity. Finish all eight underbosses to open the throne room.</p>
            </div>
            <div class="boss-grid mains">${mains}</div>
          </div>
          <div class="career-rules panel">
            <div><b>01 · ORDER MATTERS</b><p>Only the next boss in the ladder can be challenged. Defeated bosses can be replayed for scrap, but not for duplicate vehicles.</p></div>
            <div><b>02 · THEIR CARS</b><p>Every boss drops their signature vehicle on first victory. Equip it in the Garage.</p></div>
            <div><b>03 · MAIN EVENT</b><p>Mandy-Lee, Zanrich and Drikus unlock only after all eight underbosses are broken. They do not accept apologies.</p></div>
          </div>
        </div>
        <div class="screen-foot"><span>CAREER LADDER</span><span>${defeated}/11 BROKEN</span><span>THE ROAD IS DEAD · LONG LIVE THE ROAD</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindSubnav()
    $$('[data-boss-card]', this.app).forEach(card => card.addEventListener('click', () => {
      const boss = BOSSES.find(b => b.id === card.dataset.bossCard)
      if (!boss) return
      this.showBossModal(boss)
    }))
  }

  bossCard(boss, main = false) {
    const state = this.bossState(boss)
    const v = VEHICLES.find(x => x.id === boss.vehicle)
    return `<button class="boss-card ${state} ${main ? 'main' : ''}" data-boss-card="${boss.id}">
      <div class="boss-art"><canvas data-boss="${boss.id}" width="360" height="360"></canvas><div class="boss-rank">${String(boss.order).padStart(2, '0')}</div></div>
      <div class="boss-info">
        <span class="boss-tag">${main ? 'DEMIGOD' : 'UNDERBOSS'}</span>
        <b>${esc(boss.name)}</b>
        <em>${esc(boss.title)}</em>
        <div class="boss-meta"><span>${TERRAINS.find(t => t.id === boss.terrain).short}</span><span>${WEATHERS.find(w => w.id === boss.weather).name}</span><span>${boss.laps} LAPS</span></div>
        <div class="boss-reward"><span>VEHICLE</span><b>${esc(v?.name || boss.vehicle)}</b></div>
      </div>
      <div class="boss-status ${state}">${state === 'defeated' ? '☠ BROKEN' : state === 'available' ? '⚑ CHALLENGE' : '🔒 LOCKED'}</div>
    </button>`
  }

  showBossModal(boss) {
    const state = this.bossState(boss)
    const v = VEHICLES.find(x => x.id === boss.vehicle)
    const t = TERRAINS.find(x => x.id === boss.terrain)
    const w = WEATHERS.find(x => x.id === boss.weather)
    const diff = DIFFICULTIES.find(x => x.id === boss.difficulty) || DIFFICULTIES[1]
    const p = this.getProfile()
    this.showModal(`
      <div class="boss-modal-grid">
        <div class="boss-modal-art">
          <canvas id="bossBig" width="460" height="460"></canvas>
          <div class="boss-modal-stamp">${state === 'defeated' ? 'BROKEN' : 'TARGET'}</div>
        </div>
        <div class="boss-modal-copy">
          <div class="modal-kicker">${boss.underboss ? 'UNDERBOSS' : 'MAIN BOSS'} · #${String(boss.order).padStart(2, '0')}</div>
          <h2>${esc(boss.name)}</h2>
          <h3>${esc(boss.title)}</h3>
          <p class="boss-quote">“${esc(boss.quote)}”</p>
          <p class="modal-lede">${esc(boss.desc)}</p>
          <div class="mission-chips">
            <span><i>${t.icon}</i>${t.name}</span><span><i>${w.icon}</i>${w.name}</span><span class="${diff.id}">${diff.name}</span><span>${boss.laps} LAPS</span>
          </div>
          <div class="vehicle-reward"><span class="vr-icon">⚙</span><div><b>VEHICLE DROP</b><span>${esc(v?.name || boss.vehicle)}</span></div>${p.vehicles.includes(boss.vehicle) ? '<em>OWNED</em>' : '<em>FIRST WIN</em>'}</div>
          <div class="reward-grid"><div><span>BOUNTY</span><b>${formatMoney(boss.reward)}</b></div><div><span>XP</span><b>${250 + boss.order * 60}</b></div><div><span>STATUS</span><b>${state.toUpperCase()}</b></div></div>
          ${state === 'available' || state === 'defeated'
            ? `<button class="btn btn-danger btn-block btn-large" data-action="challenge-boss">${state === 'defeated' ? 'REMATCH · SCRAP ONLY' : 'CHALLENGE ' + esc(boss.name.toUpperCase())} ▶</button>`
            : `<div class="locked-callout"><b>LOCKED</b><p>Break boss #${boss.order - 1} first. The ladder does not negotiate.</p></div>`}
        </div>
      </div>`)
    drawPortrait($('#bossBig', this.modals), { ...boss.portrait, name: boss.name }, { size: 460, boss: true, bg: '#2a1012' })
    $('[data-action="challenge-boss"]', this.modals)?.addEventListener('click', () => this.launchBoss(boss))
  }

  // ---------------------------------------------------------------------------
  // garage
  // ---------------------------------------------------------------------------
  vbar(label, value, tone = '') {
    return `<div class="stat-bar ${tone}"><span>${label}</span><div><i style="width:${value}%"></i></div><b>${value}</b></div>`
  }

  garageDetail(v, owned) {
    const equipped = this.getProfile().equipped === v.id
    return `
      <div class="garage-detail-head">
        <div><span class="kicker">${esc(v.klass)} · ${owned ? 'ACQUIRED' : 'LOCKED'}</span><h2>${esc(v.name)}</h2></div>
        <span class="garage-color" style="--c:${v.color}"></span>
      </div>
      <p class="garage-desc">${esc(v.desc)}</p>
      <div class="garage-stats">
        ${this.vbar('SPEED', v.speed)}
        ${this.vbar('ACCELERATION', v.accel)}
        ${this.vbar('HANDLING', v.grip)}
        ${this.vbar('ARMOR', v.armor)}
        ${this.vbar('NITRO', v.boost * 4.5, 'nitro')}
      </div>
      <div class="unlock-line">
        <span>${owned ? 'SOURCE' : 'UNLOCK'}</span>
        <b>${v.unlock === 'start' ? 'Starter vehicle' : v.unlockText || (v.unlock === 'career' ? 'Career reward' : 'Mission reward')}</b>
      </div>
      <div class="garage-equip-row">
        ${owned
          ? `<button class="btn ${equipped ? 'btn-ghost' : 'btn-primary'} btn-block btn-large" data-action="equip" ${equipped ? 'disabled' : ''}>${equipped ? '✓ EQUIPPED' : 'EQUIP VEHICLE'}</button>`
          : `<button class="btn btn-ghost btn-block btn-large" disabled>🔒 ${esc(v.unlockText || 'LOCKED')}</button>`}
      </div>`
  }

  renderGarage() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    let v = VEHICLES.find(x => x.id === this.selectedVehicle)
    if (!v) v = VEHICLES.find(x => x.id === p.equipped) || VEHICLES[0]
    this.selectedVehicle = v.id
    const owned = p.vehicles.includes(v.id)
    this.app.innerHTML = `
      <section class="screen garage-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">THE BONEYARD</span><h2>GARAGE</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="events">EVENTS</button></div>
          <div class="sub-profile"><span class="garage-credit"><b>${p.vehicles.length}</b> / ${VEHICLES.length} ACQUIRED</span><span class="garage-scrap">${formatMoney(p.money)}</span></div>
        </header>
        <div class="garage-layout">
          <div class="garage-stage-wrap panel">
            <div class="stage-top"><span class="kicker">VEHICLE BAY · 07</span><span class="stage-status ${owned ? 'owned' : ''}">${owned ? 'READY' : 'RESTRICTED'}</span></div>
            <div class="garage-stage" id="garageStage">
              <canvas id="garageCanvas"></canvas>
              <div class="stage-glow" style="--c:${v.accent}"></div>
              <div class="stage-floor"></div>
              <div class="stage-label"><b>${esc(v.name)}</b><span>${esc(v.klass)}</span></div>
            </div>
            <div class="garage-hint">DRAG NOT REQUIRED · PREVIEW ROTATES · FULLY PROCEDURAL</div>
          </div>
          <div class="garage-detail panel" id="garageDetail">${this.garageDetail(v, owned)}</div>
        </div>
        <div class="garage-strip-wrap">
          <div class="garage-strip-head"><span class="kicker">ACQUIRED THROUGH MISSIONS · CAREER · EVENTS</span><span>${p.vehicles.length} UNLOCKED</span></div>
          <div class="vehicle-strip">
            ${VEHICLES.map(x => {
              const own = p.vehicles.includes(x.id)
              return `<button class="vehicle-card${x.id === v.id ? ' selected' : ''}${own ? '' : ' locked'}" data-vehicle="${x.id}">
                <span class="vehicle-swatch" style="--c:${x.color};--a:${x.accent}"><i></i></span>
                <b>${esc(x.name)}</b><em>${esc(x.klass)}</em>
                <span class="vehicle-state">${own ? (p.equipped === x.id ? 'EQUIPPED' : 'OWNED') : '🔒'}</span>
              </button>`
            }).join('')}
          </div>
        </div>
        <div class="screen-foot"><span>GARAGE · 16 MACHINES</span><span>EVERY KILL LEAVES A CAR</span><span>${formatMoney(p.money)}</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindSubnav()
    const canvas = $('#garageCanvas', this.app)
    this.garagePreview = new GaragePreview(canvas)
    this.garagePreview.setVehicle(v)
    this.garagePreview.start()
    setTimeout(() => this.garagePreview?.resize?.(), 30)
    $$('[data-vehicle]', this.app).forEach(btn => btn.addEventListener('click', () => {
      this.selectedVehicle = btn.dataset.vehicle
      this.updateGarageUI()
    }))
    this.bindGarageAction()
  }

  updateGarageUI() {
    const p = this.getProfile()
    const v = VEHICLES.find(x => x.id === this.selectedVehicle)
    if (!v) return
    const owned = p.vehicles.includes(v.id)
    $('#garageDetail', this.app).innerHTML = this.garageDetail(v, owned)
    $$('[data-vehicle]', this.app).forEach(b => b.classList.toggle('selected', b.dataset.vehicle === v.id))
    const label = $('.stage-label', this.app)
    if (label) label.innerHTML = `<b>${esc(v.name)}</b><span>${esc(v.klass)}</span>`
    const glow = $('.stage-glow', this.app)
    if (glow) glow.style.setProperty('--c', v.accent)
    const status = $('.stage-status', this.app)
    if (status) { status.textContent = owned ? 'READY' : 'RESTRICTED'; status.classList.toggle('owned', owned) }
    this.garagePreview?.setVehicle(v)
    this.bindGarageAction()
  }

  bindGarageAction() {
    $('[data-action="equip"]', this.app)?.addEventListener('click', () => {
      const p = this.getProfile()
      const v = VEHICLES.find(x => x.id === this.selectedVehicle)
      if (!v || !p.vehicles.includes(v.id)) return
      this.store.update({ equipped: v.id })
      audio.sfx('reward')
      this.toast(`${v.name.toUpperCase()} EQUIPPED`, 'good')
      this.updateGarageUI()
    })
  }

  bindSubnav() {
    const routes = { back: 'menu', map: 'map', career: 'career', garage: 'garage', events: 'events', settings: 'settings', menu: 'menu' }
    $$('[data-action]', this.app).forEach(btn => {
      const a = btn.dataset.action
      if (routes[a]) btn.addEventListener('click', () => this.route(routes[a]))
    })
  }

  // ---------------------------------------------------------------------------
  // settings
  // ---------------------------------------------------------------------------
  sliderRow(id, label, value, max = 1, step = 0.01) {
    return `<div class="slider-row"><label for="${id}">${label}</label><input id="${id}" type="range" min="0" max="${max}" step="${step}" value="${value}" /><b id="${id}Val">${Math.round(value * 100)}</b></div>`
  }

  renderSettings() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    const s = p.settings
    const slots = this.store.slots || [null, null, null]
    this.app.innerHTML = `
      <section class="screen settings-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">SYSTEM</span><h2>SETTINGS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${p.id}" width="140" height="140"></canvas><span><b>${esc(p.name)}</b><em>PROFILE SETTINGS</em></span></div>
        </header>
        <div class="settings-grid">
          <div class="settings-col">
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">AUDIO</span><h3>SOUND MIXER</h3></div><button class="icon-btn" data-action="mute">${s.master > 0.01 ? '🔊' : '🔇'}</button></div>
              ${this.sliderRow('volMaster', 'MASTER', s.master)}
              ${this.sliderRow('volMusic', 'MUSIC · DARK ORCHESTRA', s.music)}
              ${this.sliderRow('volSfx', 'SFX · ENGINES &amp; VIOLENCE', s.sfx)}
              <p class="settings-note">The score is generated live with classical strings, organ, brass and timpani. No audio files are streamed.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">VIDEO</span><h3>PERFORMANCE</h3></div></div>
              <div class="setting-line"><span>VIDEO QUALITY</span><div class="segmented">${['low', 'medium', 'high'].map(q => `<button class="seg${s.quality === q ? ' active' : ''}" data-quality="${q}">${q.toUpperCase()}</button>`).join('')}</div></div>
              <div class="setting-line"><span>CAMERA SHAKE</span><button class="toggle ${s.cameraShake ? 'on' : ''}" data-toggle="cameraShake"><i></i><b>${s.cameraShake ? 'ON' : 'OFF'}</b></button></div>
              <p class="settings-note">Mobile-friendly: low disables rain density and caps rendering resolution. High uses device pixel ratio up to 2×.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">CONTENT</span><h3>GORE LEVEL</h3></div></div>
              <div class="gore-options">
                <button class="${s.gore === 'off' ? 'active' : ''}" data-gore="off"><i class="gore-swatch off"></i><b>OFF</b><span>Impact sparks only</span></button>
                <button class="${s.gore === 'blood' ? 'active' : ''}" data-gore="blood"><i class="gore-swatch blood"></i><b>BLOOD</b><span>Classic red mist</span></button>
                <button class="${s.gore === 'zombie' ? 'active' : ''}" data-gore="zombie"><i class="gore-swatch zombie"></i><b>ZOMBIE</b><span>Toxic green blood</span></button>
              </div>
              <p class="settings-note">Gore is stylized particles and screen splashes. The dead do not sue.</p>
            </div>
          </div>
          <div class="settings-col">
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">SAVE / LOAD</span><h3>THREE SLOTS</h3></div><span class="record-count">AUTOSAVE ACTIVE</span></div>
              <div class="save-slots">
                ${[0, 1, 2].map(i => {
                  const slot = slots[i]
                  return `<div class="save-slot ${slot ? 'filled' : ''}">
                    <div class="slot-index">0${i + 1}</div>
                    <div class="slot-info">
                      <b>${slot ? esc(slot.name) : 'EMPTY SLOT'}</b>
                      <span>${slot ? `LVL ${slot.level} · ${formatMoney(slot.money)} · ${new Date(slot.savedAt).toLocaleString()}` : 'No manual save'}</span>
                    </div>
                    <div class="slot-actions">
                      <button class="btn btn-small ${slot ? 'btn-ghost' : 'btn-primary'}" data-save="${i}">SAVE</button>
                      <button class="btn btn-small btn-ghost" data-load="${i}" ${slot ? '' : 'disabled'}>LOAD</button>
                      <button class="icon-btn small" data-clear="${i}" ${slot ? '' : 'disabled'} aria-label="Delete slot">✕</button>
                    </div>
                  </div>`
                }).join('')}
              </div>
              <p class="settings-note">Autosave writes the profile after every cleared tutorial, contract, boss and cup heat — stamped with date, time and location. Manual slots snapshot the current profile.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">LEGAL</span><h3>THE FINE PRINT</h3></div></div>
              <div class="legal-buttons">
                <button class="btn btn-ghost" data-action="terms">TERMS &amp; CONDITIONS</button>
                <button class="btn btn-ghost" data-action="how">HOW TO PLAY</button>
              </div>
              <div class="dossier-line"><span>PROFILE</span><b>${esc(p.name)} · LVL ${p.level}</b></div>
              <div class="dossier-line"><span>SAVE STORAGE</span><b>LOCAL BROWSER</b></div>
              <div class="dossier-line"><span>BUILD</span><b>HELLRIDE 1.0</b></div>
            </div>
            <div class="settings-card panel danger-panel">
              <div class="panel-head"><div><span class="kicker danger-text">DANGER ZONE</span><h3>END THINGS</h3></div></div>
              <div class="danger-row"><span>Return to profile access.</span><button class="btn btn-ghost btn-small" data-action="logout">LOG OUT</button></div>
              <div class="danger-row"><span>Erase this driver and all progress.</span><button class="btn btn-danger btn-small" data-action="delete-profile">DELETE PROFILE</button></div>
            </div>
          </div>
        </div>
        <div class="screen-foot"><span>SETTINGS</span><span>SOUND · VIDEO · GORE · SAVES · TERMS</span><span>AUTOSAVED</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindSubnav()
    this.bindSettings()
  }

  bindSettings() {
    const p = this.getProfile()
    if (!p) return
    const updateVol = (key, val) => {
      const v = Number(val)
      this.store.updateSettings({ [key]: v })
      audio.setVolumes({ [key === 'master' ? 'master' : key === 'music' ? 'music' : 'sfx']: v })
      const label = document.getElementById(key === 'master' ? 'volMasterVal' : key === 'music' ? 'volMusicVal' : 'volSfxVal')
      if (label) label.textContent = Math.round(v * 100)
    }
    ;[['volMaster', 'master'], ['volMusic', 'music'], ['volSfx', 'sfx']].forEach(([id, key]) => {
      $('#' + id, this.app)?.addEventListener('input', e => updateVol(key, e.target.value))
    })
    $$('[data-quality]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const q = btn.dataset.quality
      this.store.updateSettings({ quality: q })
      $$('[data-quality]', this.app).forEach(b => b.classList.toggle('active', b.dataset.quality === q))
      this.menuBg.setQuality(q)
      this.toast(`VIDEO QUALITY · ${q.toUpperCase()}`, 'good')
    }))
    $('[data-toggle="cameraShake"]', this.app)?.addEventListener('click', e => {
      const el = e.currentTarget
      const on = !this.getProfile().settings.cameraShake
      this.store.updateSettings({ cameraShake: on })
      el.classList.toggle('on', on)
      el.innerHTML = `<i></i><b>${on ? 'ON' : 'OFF'}</b>`
    })
    $$('[data-gore]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const g = btn.dataset.gore
      this.store.updateSettings({ gore: g })
      $$('[data-gore]', this.app).forEach(b => b.classList.toggle('active', b.dataset.gore === g))
      this.toast(`GORE · ${g.toUpperCase()}`, g === 'zombie' ? 'good' : '')
    }))
    $$('[data-save]', this.app).forEach(btn => btn.addEventListener('click', () => {
      this.store.saveSlot(Number(btn.dataset.save))
      this.toast('MANUAL SAVE WRITTEN', 'good')
      this.renderSettings()
    }))
    $$('[data-load]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const i = Number(btn.dataset.load)
      const slot = this.store.slots[i]
      if (!slot) return
      this.showModal(`<div class="modal-kicker">LOAD SAVE</div><h2>OVERWRITE CURRENT PROFILE?</h2><p class="modal-lede">Load <b>${esc(slot.name)}</b> from ${new Date(slot.savedAt).toLocaleString()}? Current unsaved changes to this profile will be replaced.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-primary" data-action="confirm-load">LOAD SAVE</button></div>`)
      $('[data-action="confirm-load"]', this.modals).addEventListener('click', () => {
        const loaded = this.store.loadSlot(i)
        this.closeModal()
        if (loaded) { ensureProfile(loaded); audio.setVolumes(loaded.settings); this.toast('SAVE LOADED · ' + loaded.name, 'good'); this.route('settings') }
      })
    }))
    $$('[data-clear]', this.app).forEach(btn => btn.addEventListener('click', () => {
      this.store.clearSlot(Number(btn.dataset.clear))
      this.toast('SAVE SLOT ERASED', 'bad')
      this.renderSettings()
    }))
    $('[data-action="terms"]', this.app)?.addEventListener('click', () => this.showTerms())
    $('[data-action="how"]', this.app)?.addEventListener('click', () => this.showHowTo())
    $('[data-action="mute"]', this.app)?.addEventListener('click', () => { this.toggleMuteFromSettings() })
    $('[data-action="logout"]', this.app)?.addEventListener('click', () => this.confirmLogout())
    $('[data-action="delete-profile"]', this.app)?.addEventListener('click', () => {
      const prof = this.getProfile()
      this.showModal(`<div class="modal-kicker danger-text">DELETE PROFILE</div><h2>ERASE ${esc(prof.name)}?</h2><p class="modal-lede">Every boss, every car, every manual save and every bad decision will be deleted from this browser. This cannot be undone.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="confirm-delete">ERASE EVERYTHING</button></div>`)
      $('[data-action="confirm-delete"]', this.modals).addEventListener('click', () => {
        this.store.remove(prof.id)
        this.closeModal()
        this.route('login')
        this.toast('PROFILE ERASED', 'bad')
      })
    })
  }

  toggleMuteFromSettings() {
    const p = this.getProfile()
    if (!p) return
    const on = p.settings.master > 0.01
    this.store.updateSettings({ master: on ? 0 : (this._preMute || 0.8) })
    audio.setVolumes({ master: on ? 0 : (this._preMute || 0.8) })
    this.renderSettings()
  }

  // ---------------------------------------------------------------------------
  // special events
  // ---------------------------------------------------------------------------
  getDailyEvent() {
    const date = new Date()
    const key = date.toISOString().slice(0, 10)
    let h = 0
    for (const c of key) h = (h * 31 + c.charCodeAt(0)) >>> 0
    const t = TERRAINS[h % TERRAINS.length]
    const w = WEATHERS[(h >> 4) % WEATHERS.length]
    const diffs = ['normal', 'hard', 'insane']
    return {
      id: 'daily_' + key, type: 'race', name: 'Daily Death Trial', terrain: t.id, weather: w.id,
      difficulty: diffs[h % 3], laps: 2, reward: 1200 + (h % 900), xp: 280, event: true,
      blurb: `The wasteland resets its cruelty every day. Today it chose ${t.name} under ${w.name.toLowerCase()}. One race. One bounty. No repeats after midnight.`,
      daily: true
    }
  }

  renderEvents() {
    const p = this.getProfile()
    if (!p) return this.route('login')
    const blood = MISSIONS.find(m => m.id === 'm_blood_moon')
    const daily = this.getDailyEvent()
    const v = VEHICLES.find(x => x.id === blood.vehicleReward)
    const bDone = p.completed[blood.id]
    const dDone = p.completed[daily.id]
    this.app.innerHTML = `
      <section class="screen events-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">LIMITED CARNAGE</span><h2>SPECIAL EVENTS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${p.id}" width="140" height="140"></canvas><span><b>${esc(p.name)}</b><em>${formatMoney(p.money)}</em></span></div>
        </header>
        <div class="events-inner">
          <div class="event-hero">
            <div class="event-hero-art">
              <div class="blood-moon"></div>
              <div class="event-car-silhouette"></div>
              <span class="event-ribbon">EVENT REWARD</span>
            </div>
            <div class="event-hero-copy">
              <span class="kicker danger-text">BLOOD MOON · LIMITED</span>
              <h1>BLOOD MOON CUP</h1>
              <p>Three laps on Cinder Peak while a twister peels the mountain apart. Win, and the <b>${esc(v.name)}</b> is yours — a 90-speed predator with a red halo and no conscience.</p>
              <div class="mission-chips"><span><i>♨</i>Cinder Peak</span><span><i>◎</i>Twister</span><span class="hard">Hard</span><span>3 LAPS</span></div>
              <div class="event-reward">
                <span class="event-car-chip" style="--c:${v.color};--a:${v.accent}"></span>
                <div><span>VEHICLE UNLOCK</span><b>${esc(v.name)}</b><em>${p.vehicles.includes(v.id) ? 'ALREADY OWNED' : 'FIRST WIN ONLY'}</em></div>
                <strong>${formatMoney(blood.reward)}</strong>
              </div>
              <button class="btn btn-danger btn-large" data-event="${blood.id}">${bDone ? 'REPLAY BLOOD MOON' : 'ENTER BLOOD MOON CUP'} ▶</button>
            </div>
          </div>
          <div class="event-grid">
            <div class="event-card panel">
              <div class="event-card-top"><span class="event-live">LIVE</span><span class="kicker">${new Date().toISOString().slice(0, 10)}</span></div>
              <h3>DAILY DEATH TRIAL</h3>
              <p>${esc(daily.blurb)}</p>
              <div class="mission-chips"><span><i>${TERRAINS.find(t => t.id === daily.terrain).icon}</i>${TERRAINS.find(t => t.id === daily.terrain).short}</span><span><i>${WEATHERS.find(w => w.id === daily.weather).icon}</i>${WEATHERS.find(w => w.id === daily.weather).name}</span><span class="${daily.difficulty}">${daily.difficulty.toUpperCase()}</span></div>
              <div class="reward-grid"><div><span>BOUNTY</span><b>${formatMoney(daily.reward)}</b></div><div><span>XP</span><b>${daily.xp}</b></div><div><span>STATUS</span><b>${dDone ? 'CLEARED' : 'OPEN'}</b></div></div>
              <button class="btn btn-primary btn-block" data-daily="1">${dDone ? 'RUN AGAIN' : 'RUN TODAY’S TRIAL'} ▶</button>
            </div>
            <div class="event-card panel locked-event">
              <div class="event-card-top"><span class="event-live dark">SEALED</span><span class="kicker">FUTURE EVENT</span></div>
              <h3>THE DEMIGOD INVITATIONAL</h3>
              <p>Once all eleven bosses are broken, the wasteland opens its final invitation. Twelve laps. All three demigods. One car left running.</p>
              <div class="locked-callout"><b>${p.career.defeated.length}/11 BOSSES</b><p>Break every boss to reveal the final event.</p></div>
              <div class="progress-line"><i style="width:${p.career.defeated.length / 11 * 100}%"></i></div>
              <button class="btn btn-ghost btn-block" disabled>LOCKED BY CAREER</button>
            </div>
            <div class="event-card panel">
              <div class="event-card-top"><span class="event-live">ALWAYS ON</span><span class="kicker">FREE ROAM</span></div>
              <h3>THE BONEYARD BOUNTY</h3>
              <p>A rotating single race through the scrapyard. No vehicle reward. Pure scrap, pure XP, pure bad intentions.</p>
              <div class="mission-chips"><span><i>⌖</i>The Great Wastes</span><span><i>☁</i>Cloudy</span><span class="normal">Normal</span><span>2 LAPS</span></div>
              <div class="reward-grid"><div><span>BOUNTY</span><b>$500</b></div><div><span>XP</span><b>150</b></div><div><span>STATUS</span><b>OPEN</b></div></div>
              <button class="btn btn-primary btn-block" data-bounty="1">RUN BOUNTY ▶</button>
            </div>
          </div>
        </div>
        <div class="screen-foot"><span>SPECIAL EVENTS</span><span>VEHICLES EARNED, NOT BOUGHT</span><span>THE MOON IS BLEEDING</span></div>
      </section>`
    this.paintPortraits(this.app)
    this.bindSubnav()
    $$('[data-event]', this.app).forEach(btn => btn.addEventListener('click', () => {
      const m = MISSIONS.find(x => x.id === btn.dataset.event)
      if (m) this.launchMission(m)
    }))
    $('[data-daily]', this.app)?.addEventListener('click', () => {
      this.launchSpecialEvent(this.getDailyEvent())
    })
    $('[data-bounty]', this.app)?.addEventListener('click', () => {
      const m = { id: 'bounty_' + Date.now(), type: 'race', name: 'Boneyard Bounty', terrain: 'wasteland', weather: 'cloudy', difficulty: 'normal', laps: 2, reward: 500, xp: 150, blurb: 'A quick loop through the bones of the old world.' }
      this.launchSpecialEvent(m)
    })
  }

  launchSpecialEvent(mission) {
    const config = { mode: 'race', terrain: mission.terrain, weather: mission.weather, laps: mission.laps, difficulty: mission.difficulty, missionId: mission.id, escapeTime: 60 }
    this.series = null
    this.activeLaunch = { source: 'mission', mission, config }
    this.startRace(config)
  }

  // ---------------------------------------------------------------------------
  // race lifecycle
  // ---------------------------------------------------------------------------
  startRace(config) {
    const p = this.getProfile()
    if (!p) return this.route('login')
    if (this.race) { this.race.dispose(); this.race = null }
    this.closeModal()
    this.garagePreview?.stop()
    this.garagePreview = null
    this.menuBg.stop()
    this.decor.style.display = 'none'
    this.screen = 'race'
    document.body.dataset.screen = 'race'
    window.scrollTo(0, 0)
    audio.ensure()
    audio.setVolumes(p.settings)
    audio.setScene('race')
    const difficulty = DIFFICULTIES.find(d => d.id === config.difficulty) || DIFFICULTIES[1]
    const race = new RaceGame($('#race-canvas'), {
      mode: config.mode,
      terrain: config.terrain,
      weather: config.weather,
      laps: config.laps,
      difficulty,
      bossId: config.bossId,
      vehicleId: p.equipped,
      profile: p,
      settings: { ...p.settings, quality: p.settings.quality },
      escapeTime: config.escapeTime,
      seed: Math.floor(Math.random() * 99999),
      onFinish: res => this.handleRaceResult(res),
      onPause: paused => { if (paused) this.showPause(); else this.closeModal() }
    })
    race.updatePositions()
    this.race = race
  }

  restartRace() {
    const launch = this.activeLaunch
    if (!launch?.config) return
    this.closeModal()
    if (this.race) { this.race.dispose(); this.race = null }
    this.startRace({ ...launch.config })
  }

  retryContract() {
    const launch = this.activeLaunch
    if (!launch) return
    this.closeModal()
    if (this.race) { this.race.dispose(); this.race = null }
    if (launch.series) {
      const mission = launch.series.mission
      const rounds = this.buildRounds(mission)
      this.series = { mission, rounds, index: 0, points: 0, results: [], success: false }
      launch.series = this.series
      this.startHeat(0)
    } else if (launch.config) {
      this.startRace({ ...launch.config })
    }
  }

  quitRace() {
    this.closeModal()
    const launch = this.activeLaunch
    if (this.race) { this.race.dispose(); this.race = null }
    this.series = null
    this.activeLaunch = null
    const source = launch?.source
    if (source === 'boss') this.route('career')
    else if (source === 'tutorial') this.route('menu')
    else if (launch?.mission?.event) this.route('events')
    else this.route('map')
  }

  showPause() {
    const launch = this.activeLaunch
    if (!launch) return
    const isSeries = !!launch.series
    this.showModal(`
      <div class="modal-kicker">ENGINE IDLE</div>
      <h2>PAUSED</h2>
      <p class="modal-lede">${isSeries ? `Championship heat ${launch.series.index + 1} of ${launch.series.rounds.length} · ${launch.series.points} points` : launch.source === 'boss' ? `Boss challenge · ${esc(launch.boss?.name || '')}` : launch.source === 'tutorial' ? 'Tutorial · first blood' : 'Contract in progress'}</p>
      <div class="pause-stats">
        <div><span>TERRAIN</span><b>${esc(TERRAINS.find(t => t.id === launch.config.terrain)?.name || '')}</b></div>
        <div><span>WEATHER</span><b>${esc(WEATHERS.find(w => w.id === launch.config.weather)?.name || '')}</b></div>
        <div><span>MODE</span><b>${launch.config.mode.toUpperCase()}</b></div>
      </div>
      <div class="modal-actions pause-actions">
        <button class="btn btn-primary btn-large" data-action="resume">▶ RESUME</button>
        <button class="btn btn-ghost" data-action="checkpoint">⟲ CHECKPOINT</button>
        <button class="btn btn-ghost" data-action="restart">⟳ RESTART</button>
        <button class="btn btn-ghost" data-action="pause-mute">${(this.getProfile().settings.master || 0) > 0.01 ? '🔊 MUTE' : '🔇 UNMUTE'}</button>
        <button class="btn btn-danger" data-action="quit-race">QUIT RACE</button>
      </div>
      <p class="panel-hint">CHECKPOINT restarts at the last checkpoint with a repaired hull. RESTART re-runs this heat. Quitting abandons the contract and any unclaimed bounty.</p>`, 'pause-modal')
    const pauseBackdrop = $('.modal-backdrop', this.modals)
    if (pauseBackdrop) pauseBackdrop.dataset.locked = '1'
    $('[data-action="resume"]', this.modals).addEventListener('click', () => {
      this.closeModal()
      this.race?.resume()
    })
    $('[data-action="checkpoint"]', this.modals).addEventListener('click', () => {
      this.closeModal()
      this.race?.respawnAtCheckpoint()
      this.race?.resume()
    })
    $('[data-action="restart"]', this.modals).addEventListener('click', () => this.restartRace())
    $('[data-action="quit-race"]', this.modals).addEventListener('click', () => this.quitRace())
    $('[data-action="pause-mute"]', this.modals).addEventListener('click', () => {
      const p = this.getProfile()
      const on = p.settings.master > 0.01
      this.store.updateSettings({ master: on ? 0 : (this._preMute || 0.8) })
      audio.setVolumes({ master: on ? 0 : (this._preMute || 0.8) })
      this.showPause()
    })
  }

  // ---------------------------------------------------------------------------
  // results / progression
  // ---------------------------------------------------------------------------
  unlockVehicle(id) {
    const p = this.getProfile()
    if (!p || !id) return false
    if (!p.vehicles.includes(id)) {
      p.vehicles.push(id)
      this.store.persist()
      return true
    }
    return false
  }

  applyRaceStats(results) {
    const p = this.getProfile()
    p.races = (p.races || 0) + 1
    if (results.position === 1) p.victories = (p.victories || 0) + 1
    if (results.bestLap && (!p.bestLap || results.bestLap < p.bestLap)) p.bestLap = results.bestLap
    this.store.persist()
  }

  pointsForPosition(pos) {
    return [10, 8, 6, 4, 2, 1][pos - 1] || 0
  }

  handleRaceResult(results) {
    const launch = this.activeLaunch
    if (!launch) return
    if (this.race) this.race.setPaused(true)
    this.applyRaceStats(results)

    const terrain = TERRAINS.find(t => t.id === results.terrain)
    const saveLocation = terrain?.name || 'THE WASTELAND'
    const saveDetail = launch.boss
      ? `BOSS · ${launch.boss.name}`
      : launch.mission
        ? `${launch.mission.event ? 'EVENT' : 'CONTRACT'} · ${launch.mission.name}`
        : 'FIRST BLOOD TUTORIAL'

    if (launch.series) {
      const s = launch.series
      const pts = this.pointsForPosition(results.position)
      s.points += pts
      s.results.push({ ...results, points: pts })
      // Every completed heat is written to the profile immediately.
      if (results.reason !== 'wrecked') this.store.autosave(saveLocation, `${launch.series.mission.name} · HEAT ${s.index + 1}`)
      const isFinal = s.index >= s.rounds.length - 1
      if (!isFinal) {
        this.showSeriesHeat(results, pts)
      } else {
        s.success = s.points >= 20
        const mission = s.mission
        const diff = DIFFICULTIES.find(d => d.id === mission.difficulty) || DIFFICULTIES[1]
        let money = Math.round(mission.reward * (s.points / 30) * diff.reward)
        let xp = Math.round(mission.xp * (s.points / 30))
        let unlock = null
        if (s.success) {
          money = Math.round(mission.reward * diff.reward)
          xp = mission.xp
          if (mission.vehicleReward) unlock = this.unlockVehicle(mission.vehicleReward) ? mission.vehicleReward : null
          const p = this.getProfile()
          const prev = p.completed[mission.id] || { wins: 0, bestPos: 99 }
          p.completed[mission.id] = { wins: prev.wins + 1, bestPos: Math.min(prev.bestPos || 99, results.position) }
          this.store.persist()
        } else {
          const p = this.getProfile()
          if (s.points > 0) {
            const prev = p.completed[mission.id] || { wins: 0, bestPos: 99 }
            p.completed[mission.id] = { wins: prev.wins, bestPos: Math.min(prev.bestPos || 99, results.position) }
            this.store.persist()
          }
        }
        this.store.addReward(money, xp)
        this.store.autosave(saveLocation, `${mission.name} · ${s.success ? 'CUP WON' : 'SERIES FINAL'}`)
        this.showRaceResults(results, {
          success: s.success,
          autosaved: true,
          money, xp, unlock,
          title: s.success ? 'CUP CHAMPION' : 'SERIES LOST',
          subtitle: `${mission.name.toUpperCase()} · ${s.points}/30 POINTS`,
          series: s,
          source: 'mission',
          mission
        })
      }
      return
    }

    let success = results.success
    if (launch.source === 'tutorial') success = results.reason === 'finished'
    let money = 0, xp = 0, unlock = null, subtitle = ''
    const p = this.getProfile()
    if (launch.source === 'tutorial') {
      money = success ? 500 : 80
      xp = success ? 180 : 30
      if (success) p.tutorialDone = true
      subtitle = success ? 'YOU CAN DRIVE. NOW SURVIVE.' : 'THE WASTELAND EXPECTS BETTER'
    } else if (launch.source === 'boss') {
      const boss = launch.boss
      if (success) {
        money = p.career.defeated.includes(boss.id) ? Math.round(boss.reward * 0.3) : boss.reward
        xp = 260 + boss.order * 55
        if (!p.career.defeated.includes(boss.id)) p.career.defeated.push(boss.id)
        p.career.current = p.career.defeated.length
        unlock = p.vehicles.includes(boss.vehicle) ? null : (this.unlockVehicle(boss.vehicle) ? boss.vehicle : null)
        subtitle = boss.boss ? 'A DEMIGOD HAS FALLEN' : 'AN UNDERBOSS HAS FALLEN'
      } else {
        money = 150
        xp = 40
        subtitle = 'THE LADDER DOES NOT MOVE'
      }
      this.store.persist()
    } else if (launch.source === 'mission') {
      const mission = launch.mission
      const diff = DIFFICULTIES.find(d => d.id === mission.difficulty) || DIFFICULTIES[1]
      if (success) {
        money = Math.round(mission.reward * diff.reward)
        xp = mission.xp
        if (mission.type === 'transport') money = Math.round(money * (0.65 + results.cargo / 200))
        if (mission.type === 'taxi') money = Math.round(money * (0.65 + results.comfort / 200))
        if (mission.type === 'gang' || mission.type === 'police') money = Math.round(money * (0.7 + results.hull / 300))
        if (mission.vehicleReward) unlock = p.vehicles.includes(mission.vehicleReward) ? null : (this.unlockVehicle(mission.vehicleReward) ? mission.vehicleReward : null)
        const prev = p.completed[mission.id] || { wins: 0, bestPos: 99 }
        p.completed[mission.id] = { wins: prev.wins + 1, bestPos: Math.min(prev.bestPos || 99, results.position) }
        subtitle = mission.event ? 'EVENT CLEARED · REWARD CLAIMED' : 'CONTRACT CLEARED'
      } else {
        money = 90
        xp = 35
        subtitle = results.reason === 'wrecked' ? 'YOUR CAR BECAME A GRAVE' : 'THE CONTRACT REMAINS OPEN'
        if (p.completed[mission.id]) p.completed[mission.id].bestPos = Math.min(p.completed[mission.id].bestPos || 99, results.position)
      }
      this.store.persist()
    }
    this.store.addReward(money, xp)
    if (success) this.store.autosave(saveLocation, saveDetail)
    this.showRaceResults(results, {
      success, autosaved: success, money, xp, unlock,
      title: success ? (launch.source === 'boss' ? 'BOSS BROKEN' : launch.source === 'tutorial' ? 'TUTORIAL CLEARED' : results.reason === 'escaped' ? 'YOU ESCAPED' : 'CONTRACT CLEARED') : results.reason === 'wrecked' ? 'WRECKED' : 'DEFEAT',
      subtitle,
      source: launch.source,
      mission: launch.mission,
      boss: launch.boss
    })
  }

  showSeriesHeat(results, pts) {
    const s = this.series
    const mission = s.mission
    const nextRound = s.rounds[s.index + 1]
    const t = TERRAINS.find(x => x.id === nextRound?.terrain)
    const w = WEATHERS.find(x => x.id === nextRound?.weather)
    this.showModal(`
      <div class="results-shell series-shell">
        <div class="result-banner ${results.position === 1 ? 'win' : ''}">
          <div class="result-kicker">${esc(mission.name.toUpperCase())} · HEAT ${s.index + 1}/${s.rounds.length}</div>
          <h1>HEAT ${results.position === 1 ? 'WON' : 'CLEARED'}</h1>
          <p>${ordinal(results.position)} place · +${pts} championship points</p>
        </div>
        <div class="series-scoreboard">
          <div class="series-big"><b>${s.points}</b><span>/ 30 PTS</span><em>${s.points >= 20 ? 'CHAMPIONSHIP PACE' : 'NEED 20 TO WIN THE CUP'}</em></div>
          <div class="series-heats">${s.results.map((r, i) => `<div class="series-heat"><span>H${i + 1}</span><b>${ordinal(r.position)}</b><em>+${r.points}</em></div>`).join('')}<div class="series-heat empty"><span>H${s.index + 2}</span><b>?</b><em>?</em></div></div>
        </div>
        ${nextRound ? `<div class="next-heat-card"><span class="kicker">NEXT HEAT</span><h3>${esc(t?.name || '')} <i>${w?.icon}</i> ${esc(w?.name || '')}</h3><p>${esc(w?.desc || '')} · ${nextRound.laps} laps · difficulty remains brutal.</p></div>` : ''}
        <div class="modal-actions">
          <button class="btn btn-primary btn-large" data-action="next-heat">START HEAT ${s.index + 2} ▶</button>
          <button class="btn btn-ghost" data-action="abandon-series">ABANDON SERIES</button>
        </div>
        <p class="panel-hint">Points: 1st 10 · 2nd 8 · 3rd 6 · 4th 4 · 5th 2 · 6th 1 · Target 20/30</p>
      </div>`, 'results-modal series-modal')
    const seriesBackdrop = $('.modal-backdrop', this.modals)
    if (seriesBackdrop) seriesBackdrop.dataset.locked = '1'
    document.body.classList.add('modal-open', 'result-open')
    $('[data-action="next-heat"]', this.modals).addEventListener('click', () => {
      this.closeModal()
      document.body.classList.remove('result-open')
      if (this.race) { this.race.dispose(); this.race = null }
      this.startHeat(s.index + 1)
    })
    $('[data-action="abandon-series"]', this.modals).addEventListener('click', () => {
      this.closeModal(); document.body.classList.remove('result-open')
      if (this.race) { this.race.dispose(); this.race = null }
      this.series = null; this.activeLaunch = null
      this.route('map')
    })
  }

  showRaceResults(results, outcome) {
    const p = this.getProfile()
    const t = TERRAINS.find(x => x.id === results.terrain)
    const w = WEATHERS.find(x => x.id === results.weather)
    const mission = outcome.mission
    const boss = outcome.boss
    const series = outcome.series
    const unlockV = outcome.unlock ? VEHICLES.find(v => v.id === outcome.unlock) : null
    const source = outcome.source
    const title = outcome.title
    const winClass = outcome.success ? 'win' : results.reason === 'wrecked' ? 'wreck' : 'lose'
    const continueLabel = source === 'boss' ? 'RETURN TO CAREER' : source === 'tutorial' ? 'ENTER THE WASTELAND' : source === 'event' || mission?.event ? 'RETURN TO EVENTS' : 'RETURN TO MAP'
    const missionLine = boss ? `${boss.name} · ${boss.title}` : mission ? mission.name : source === 'tutorial' ? 'First Blood Tutorial' : 'Wasteland Race'
    this.showModal(`
      <div class="results-shell">
        <div class="result-banner ${winClass}">
          <div class="result-kicker">${boss ? (boss.boss ? 'MAIN BOSS' : 'UNDERBOSS') : mission ? (MISSION_TYPES[mission.type]?.name || 'CONTRACT') : 'RACE'} · ${t?.short || ''}</div>
          <h1>${esc(title)}</h1>
          <p>${esc(outcome.subtitle || '')}</p>
          ${series ? `<div class="series-final-points"><b>${series.points}</b><span>/ 30 PTS</span><em>${series.success ? 'CHAMPION' : 'TARGET 20'}</em></div>` : ''}
        </div>
        <div class="results-body">
          <div class="results-left">
            <div class="result-position">
              <div class="position-big">${ordinal(results.position)}</div>
              <div><span>FINISH POSITION</span><b>OF ${results.total} DRIVERS</b></div>
              ${outcome.success ? '<div class="result-seal">☠<span>CLEARED</span></div>' : ''}
            </div>
            <div class="result-stats">
              <div><span>TIME</span><b>${formatTime(results.time)}</b></div>
              <div><span>BEST LAP</span><b>${formatTime(results.bestLap)}</b></div>
              <div><span>MISSION</span><b>${esc(missionLine)}</b></div>
              <div><span>CONDITIONS</span><b>${w?.name || ''} · ${t?.name || ''}</b></div>
            </div>
            ${mission && (mission.type === 'transport' || mission.type === 'taxi') ? `
              <div class="objective-results">
                <div><span>${mission.type === 'transport' ? 'CARGO' : 'COMFORT'}</span><div class="rh-bar"><i style="width:${mission.type === 'transport' ? results.cargo : results.comfort}%"></i></div><b>${Math.round(mission.type === 'transport' ? results.cargo : results.comfort)}%</b></div>
                <div><span>HULL</span><div class="rh-bar"><i style="width:${results.hull}%"></i></div><b>${Math.round(results.hull)}%</b></div>
              </div>` : ''}
            ${mission?.type === 'gang' || mission?.type === 'police' ? `<div class="objective-results"><div><span>HULL</span><div class="rh-bar"><i style="width:${results.hull}%"></i></div><b>${Math.round(results.hull)}%</b></div></div>` : ''}
            <div class="reward-panel">
              <div class="reward-line"><span>BOUNTY</span><b>${formatMoney(outcome.money)}</b></div>
              <div class="reward-line"><span>EXPERIENCE</span><b>+${outcome.xp} XP</b></div>
              ${outcome.money === 0 ? '<p class="reward-note">No bounty for a failed contract. The car repairs are also your problem.</p>' : ''}
            </div>
            ${outcome.autosaved && p.autosave ? `<div class="result-autosave"><span class="save-dot"></span><div><b>AUTOSAVED</b><span>${esc(p.autosave.date)} · ${esc(p.autosave.time)}</span><em>${esc(p.autosave.location)}</em></div></div>` : ''}
            ${unlockV ? `<div class="unlock-banner"><span class="unlock-icon">⚙</span><div><span>NEW VEHICLE ACQUIRED</span><b>${esc(unlockV.name)}</b><em>${esc(unlockV.desc)}</em></div><button class="btn btn-small btn-primary" data-action="result-garage">GARAGE</button></div>` : ''}
            ${boss && outcome.success && !unlockV && p.vehicles.includes(boss.vehicle) ? `<div class="unlock-banner owned"><span class="unlock-icon">✓</span><div><span>VEHICLE</span><b>${esc(VEHICLES.find(v => v.id === boss.vehicle)?.name || '')}</b><em>Already in your garage.</em></div></div>` : ''}
            ${source === 'tutorial' && outcome.success ? `<div class="tutorial-complete"><b>TUTORIAL COMPLETE</b><p>The map is open. 13 contracts, 11 bosses, 15 territories and 8 weather hells are waiting. Your special move is tied to your origin — use it when the meter is full.</p></div>` : ''}
          </div>
          <div class="results-right">
            <div class="standings-head"><span>FINAL STANDINGS</span><b>${results.total} DRIVERS</b></div>
            <div class="standings">
              ${results.standings.map((r, i) => `<div class="standing ${r.isPlayer ? 'player' : ''} ${r.boss ? 'boss' : ''}">
                <span class="standing-pos">${String(i + 1).padStart(2, '0')}</span>
                <div><b>${esc(r.name)}</b><em>${esc(r.vehicle)}</em></div>
                <span class="standing-time">${r.finished ? formatTime(r.time) : 'DNF'}</span>
                ${r.boss ? '<i class="boss-star">☠</i>' : ''}
              </div>`).join('')}
            </div>
          </div>
        </div>
        <div class="result-actions">
          <button class="btn btn-ghost" data-action="retry">⟳ ${series ? 'REPLAY SERIES' : 'RETRY'}</button>
          <button class="btn btn-ghost" data-action="result-garage">GARAGE</button>
          <button class="btn btn-primary btn-large" data-action="result-continue">${continueLabel} ▶</button>
        </div>
      </div>`, 'results-modal')
    const resultBackdrop = $('.modal-backdrop', this.modals)
    if (resultBackdrop) resultBackdrop.dataset.locked = '1'
    document.body.classList.add('modal-open', 'result-open')
    $('[data-action="retry"]', this.modals).addEventListener('click', () => { document.body.classList.remove('result-open'); this.retryContract() })
    $$('[data-action="result-garage"]', this.modals).forEach(btn => btn.addEventListener('click', () => {
      document.body.classList.remove('result-open')
      this.closeModal()
      if (this.race) { this.race.dispose(); this.race = null }
      this.activeLaunch = null; this.series = null
      this.route('garage')
    }))
    $('[data-action="result-continue"]', this.modals).addEventListener('click', () => {
      document.body.classList.remove('result-open')
      this.closeModal()
      if (this.race) { this.race.dispose(); this.race = null }
      const src = this.activeLaunch?.source
      const ev = this.activeLaunch?.mission?.event
      this.activeLaunch = null; this.series = null
      if (src === 'boss') this.route('career')
      else if (src === 'tutorial') this.route('map')
      else if (ev) this.route('events')
      else this.route('map')
    })
  }
}
