const STORE_KEY = 'hellride_apocalypse_v1'
const SLOT_KEY = 'hellride_slots_v1'

export const DEFAULT_SETTINGS = {
  master: 0.8,
  music: 0.7,
  sfx: 0.85,
  quality: 'medium',
  gore: 'blood',
  cameraShake: true,
  showFps: false,
  controls: 'auto'
}

export function defaultLooks(gender = 'female') {
  return {
    gender,
    face: 'sharp',
    hair: 'mohawk',
    hairColor: 'black',
    eyeColor: 'blue',
    eyeStyle: 'human',
    facialHair: 'none',
    scar: 'eye',
    headgear: 'none',
    skin: '#b9866b',
    origin: 'human'
  }
}

function uid() {
  return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7)
}

export function freshProfile({ name, gender, origin, looks }) {
  return {
    id: uid(),
    name: (name || 'NAMELESS').toUpperCase().slice(0, 14),
    gender: gender || 'female',
    origin: origin || 'human',
    looks: { ...defaultLooks(gender), ...looks, origin: origin || looks?.origin || 'human' },
    createdAt: Date.now(),
    lastActive: Date.now(),
    autosave: null,
    money: 650,
    xp: 0,
    level: 1,
    tutorialDone: false,
    victories: 0,
    races: 0,
    drifts: 0,
    bestLap: null,
    vehicles: ['rust_reaper'],
    equipped: 'rust_reaper',
    career: { defeated: [], current: 0 },
    completed: {},
    missionWins: 0,
    series: null,
    settings: { ...DEFAULT_SETTINGS }
  }
}

function safeParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export class SaveStore {
  constructor() {
    this.state = safeParse(localStorage.getItem(STORE_KEY), null)
    if (!this.state || !Array.isArray(this.state.profiles)) {
      this.state = { profiles: [], currentProfileId: null }
    }
    this.slots = safeParse(localStorage.getItem(SLOT_KEY), [null, null, null])
  }

  persist() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(this.state))
      localStorage.setItem(SLOT_KEY, JSON.stringify(this.slots))
    } catch (e) {
      console.warn('Save failed', e)
    }
  }

  profiles() {
    return [...this.state.profiles].sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0))
  }

  profile() {
    const id = this.state.currentProfileId
    return this.state.profiles.find(p => p.id === id) || null
  }

  create(fields) {
    const p = freshProfile(fields)
    this.state.profiles.push(p)
    this.state.currentProfileId = p.id
    this.persist()
    return p
  }

  login(id) {
    const p = this.state.profiles.find(p => p.id === id)
    if (!p) return null
    p.lastActive = Date.now()
    this.state.currentProfileId = p.id
    this.persist()
    return p
  }

  logout() {
    this.state.currentProfileId = null
    this.persist()
  }

  remove(id) {
    this.state.profiles = this.state.profiles.filter(p => p.id !== id)
    if (this.state.currentProfileId === id) this.state.currentProfileId = null
    this.persist()
  }

  update(patch = {}) {
    const p = this.profile()
    if (!p) return null
    Object.assign(p, patch)
    p.lastActive = Date.now()
    this.persist()
    return p
  }

  updateSettings(patch) {
    const p = this.profile()
    if (!p) return
    p.settings = { ...DEFAULT_SETTINGS, ...(p.settings || {}), ...patch }
    this.persist()
    return p.settings
  }

  // Autosave after every cleared contract, boss, tutorial or series heat.
  // Stores when and where the run was written to the profile.
  autosave(location = 'THE WASTELAND', detail = '') {
    const p = this.profile()
    if (!p) return null
    const now = new Date()
    p.autosave = {
      at: now.getTime(),
      date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
      time: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      location: String(location || 'THE WASTELAND').toUpperCase(),
      detail: String(detail || '')
    }
    p.lastActive = now.getTime()
    this.persist()
    return p.autosave
  }

  addReward(money, xp) {
    const p = this.profile()
    if (!p) return
    p.money += Math.max(0, Math.round(money))
    p.xp += Math.max(0, Math.round(xp))
    const newLevel = Math.max(1, Math.floor(Math.sqrt(p.xp / 250)) + 1)
    p.level = Math.min(newLevel, 99)
    this.persist()
    return p
  }

  saveSlot(index) {
    const p = this.profile()
    if (!p) return false
    this.slots[index] = {
      savedAt: Date.now(),
      name: p.name,
      level: p.level,
      money: p.money,
      profile: JSON.parse(JSON.stringify(p))
    }
    this.persist()
    return true
  }

  loadSlot(index) {
    const slot = this.slots[index]
    if (!slot?.profile) return null
    const copy = JSON.parse(JSON.stringify(slot.profile))
    copy.id = copy.id || uid()
    copy.lastActive = Date.now()
    const idx = this.state.profiles.findIndex(p => p.id === copy.id)
    if (idx >= 0) this.state.profiles[idx] = copy
    else this.state.profiles.push(copy)
    this.state.currentProfileId = copy.id
    this.persist()
    return copy
  }

  clearSlot(index) {
    this.slots[index] = null
    this.persist()
  }

  hasContinue() {
    return this.profiles().length > 0
  }

  exportProfile() {
    return JSON.stringify(this.profile(), null, 2)
  }
}

export function formatMoney(n) {
  return '$' + Math.round(n || 0).toLocaleString('en-US')
}

export function formatTime(sec) {
  if (sec == null || !Number.isFinite(sec)) return '--:--.--'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  const cs = Math.floor((sec % 1) * 100)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}
