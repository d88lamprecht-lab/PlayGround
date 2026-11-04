// Hand-drawn SVG chrome used across the front-end. No external assets.
export const skullIcon = `
<svg viewBox="0 0 64 64" class="skull-icon" aria-hidden="true">
  <path d="M32 3C16 3 8 14 8 28c0 9 4 15 10 19l1 9c0 3 2 5 5 5h16c3 0 5-2 5-5l1-9c6-4 10-10 10-19C56 14 48 3 32 3Z" fill="currentColor"/>
  <path d="M19 27c0-6 4-10 10-10s9 4 9 9c0 5-3 8-8 9l-1 6h-7l-1-7c-2-2-2-4-2-7Zm20 0c0-5 3-9 8-9 5 0 9 4 9 10 0 3-1 5-3 7l-1 7h-7l-1-6c-3-1-5-4-5-9Z" fill="#090809"/>
  <path d="M27 24c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Zm20 0c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Z" fill="currentColor"/>
  <path d="M26 46h12v5H26zM22 50h4v6h-4zm16 0h4v6h-4z" fill="#090809"/>
  <path d="M15 12 5 2M49 12 59 2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</svg>`

export function brandMarkup({ compact = false } = {}) {
  return `
  <div class="brand ${compact ? 'compact' : ''}">
    <div class="brand-kicker"><span></span> WASTELAND VELOCITY <span></span></div>
    <h1 class="brand-title"><span class="brand-hell">HELL</span><span class="brand-ride">RIDE</span></h1>
    <div class="brand-sub">
      <i class="brand-slash"></i>
      <span>APOCALYPSE</span>
      <i class="brand-slash"></i>
    </div>
    <p class="brand-tag">DRIVE · BLEED · REPEAT</p>
  </div>`
}

function chainSvg() {
  return `
  <svg viewBox="0 0 70 620" class="chain-svg" preserveAspectRatio="none">
    <g fill="none" stroke="currentColor" stroke-width="5">
      <path d="M35 0v620" opacity=".25"/>
      ${Array.from({ length: 19 }, (_, i) => {
        const y = 8 + i * 32
        return `<ellipse cx="35" cy="${y}" rx="${i % 2 ? 8 : 12}" ry="${i % 2 ? 15 : 18}" stroke-width="${i % 2 ? 4 : 5}" opacity="${0.45 + (i % 3) * 0.14}"/>`
      }).join('')}
    </g>
  </svg>`
}

export function decorLayer() {
  return `
  <div class="decor-layer">
    <div class="blood-splash blood-1"></div>
    <div class="blood-splash blood-2"></div>
    <div class="blood-splash blood-3"></div>
    <div class="chain chain-left">${chainSvg()}</div>
    <div class="chain chain-right">${chainSvg()}</div>
    <svg class="bone-pile" viewBox="0 0 280 150" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".8">
        <path d="M30 122c25-23 45-25 67-9M211 118c-27-16-48-12-63 4M104 137c9-17 21-25 36-27"/>
        <path d="M90 117c-4-13 4-21 16-19 8 1 11 8 7 17-3 8-17 10-23 2Z"/>
        <path d="M168 120c5-15 19-18 27-9 5 6 1 15-7 18-9 3-17 1-20-9Z"/>
        <path d="M43 118l-12-8m12 8-9 13m168-12 13-8m-13 8 9 14"/>
      </g>
      <path d="M126 100c0-12 5-18 13-18 9 0 14 7 14 18l-3 21h-21l-3-21Z" fill="currentColor" opacity=".7"/>
      <circle cx="135" cy="96" r="3.4" fill="#090809"/><circle cx="145" cy="96" r="3.4" fill="#090809"/>
    </svg>
    <svg class="hanging-hook" viewBox="0 0 120 200" aria-hidden="true">
      <path d="M19 0v60c0 27 34 28 34 0V42" fill="none" stroke="currentColor" stroke-width="7"/>
      <path d="M53 47c0-10 7-17 16-17 20 0 26 19 11 32-8 7-21 4-23-8" fill="none" stroke="currentColor" stroke-width="6"/>
    </svg>
    <div class="ember-field"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </div>`
}

export function dividerMarkup() {
  return `<div class="bone-divider"><span></span><b>☠</b><span></span></div>`
}

export const termsText = `
<h3>TERMS OF THE WASTELAND</h3>
<p><b>1. This is a game.</b> HELLRIDE: APOCALYPSE is a fictional, single-player browser game. All drivers, demigods, gangs, police, violence, gore, and apocalyptic weather are fictional. Nothing here is advice for real driving or survival.</p>
<p><b>2. Your profile.</b> Your profile, progress, vehicles, settings, and save slots are stored locally in this browser using <code>localStorage</code>. Clearing site data deletes your progress. There is no account recovery, no cloud save, and no personal data leaves this device.</p>
<p><b>3. Content controls.</b> The Gore setting can be set to Off, Blood, or Zombie Green Blood. Blood and body parts are stylized and low-resolution by design. This game is intended for teen and mature players.</p>
<p><b>4. Single player / local PvP.</b> “PvP” is a local duel against AI rivals in this build; it does not connect to other players or the internet. “Open map” quests are accessed from the mission map, not a continuous free-roam simulation.</p>
<p><b>5. Fair use.</b> Do not resell, misrepresent, or redistribute the game as your own work. Fonts are used under the SIL Open Font License. All other code and art are procedurally generated for this project.</p>
<p><b>6. No warranty.</b> The wasteland is provided “as is”. If a demigod eats your save file, that is canon.</p>
<p class="terms-foot">By continuing, you accept that the road is dead and you are still driving on it.</p>
`
