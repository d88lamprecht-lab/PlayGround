/* Unified desktop + touch input. */

export class Input {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.firing = false;
    this.aiming = false;
    this.lookDelta = { x: 0, y: 0 };
    this.move = { x: 0, y: 0 };
    this.jumpQueued = false;
    this.reloadQueued = false;
    this.locked = false;
    this.enabled = false;
    this.sensitivity = 0.0022;
    this.onPause = options.onPause || (() => {});
    this.onLockChange = options.onLockChange || (() => {});
    this.isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;

    this._bindKeyboard();
    this._bindMouse();
    this._bindTouch();
  }

  _bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (this.locked) document.exitPointerLock();
        else this.onPause();
        return;
      }
      if (!this.enabled) return;
      if (['Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyR', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (e.code === 'KeyR') this.reloadQueued = true;
      if (e.code === 'Space') this.jumpQueued = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.firing = false;
      this.aiming = false;
      if (this.enabled && this.locked) document.exitPointerLock();
    });
  }

  _bindMouse() {
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.onLockChange(this.locked);
      if (!this.locked) {
        this.firing = false;
        this.aiming = false;
      }
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.lookDelta.x += e.movementX;
      this.lookDelta.y += e.movementY;
    });
    document.addEventListener('mousedown', (e) => {
      if (!this.locked || !this.enabled) return;
      if (e.button === 0) this.firing = true;
      if (e.button === 2) this.aiming = true;
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.firing = false;
      if (e.button === 2) this.aiming = false;
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  _bindTouch() {
    const joystick = document.getElementById('joystick');
    const knob = document.getElementById('joystick-knob');
    const lookZone = document.getElementById('look-zone');
    const fireBtn = document.getElementById('btn-fire');
    const aimBtn = document.getElementById('btn-aim');
    const reloadBtn = document.getElementById('btn-reload');
    const jumpBtn = document.getElementById('btn-jump');
    if (!joystick || !knob) return;

    let joyId = null, joyCenter = null;
    const joyRadius = 40;

    const startJoy = (e) => {
      e.preventDefault();
      if (joyId !== null) return;
      joyId = e.pointerId;
      const r = joystick.getBoundingClientRect();
      joyCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      joystick.setPointerCapture(e.pointerId);
      moveJoy(e);
    };
    const moveJoy = (e) => {
      if (e.pointerId !== joyId || !joyCenter) return;
      e.preventDefault();
      let dx = e.clientX - joyCenter.x;
      let dy = e.clientY - joyCenter.y;
      const len = Math.hypot(dx, dy);
      if (len > joyRadius) { dx = (dx / len) * joyRadius; dy = (dy / len) * joyRadius; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.move.x = dx / joyRadius;
      this.move.y = -dy / joyRadius;
    };
    const endJoy = (e) => {
      if (e.pointerId !== joyId) return;
      joyId = null; joyCenter = null;
      knob.style.transform = 'translate(0px, 0px)';
      this.move.x = 0; this.move.y = 0;
    };
    joystick.addEventListener('pointerdown', startJoy);
    joystick.addEventListener('pointermove', moveJoy);
    joystick.addEventListener('pointerup', endJoy);
    joystick.addEventListener('pointercancel', endJoy);

    let lookId = null, lastX = 0, lastY = 0;
    lookZone.addEventListener('pointerdown', (e) => {
      if (lookId !== null) return;
      e.preventDefault();
      lookId = e.pointerId;
      lastX = e.clientX; lastY = e.clientY;
      lookZone.setPointerCapture(e.pointerId);
    });
    lookZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== lookId) return;
      e.preventDefault();
      this.lookDelta.x += (e.clientX - lastX) * 1.5;
      this.lookDelta.y += (e.clientY - lastY) * 1.5;
      lastX = e.clientX; lastY = e.clientY;
    });
    const endLook = (e) => { if (e.pointerId === lookId) lookId = null; };
    lookZone.addEventListener('pointerup', endLook);
    lookZone.addEventListener('pointercancel', endLook);

    const holdBtn = (el, onDown, onUp) => {
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); el.setPointerCapture(e.pointerId); onDown(); });
      el.addEventListener('pointerup', (e) => { e.preventDefault(); onUp?.(); });
      el.addEventListener('pointercancel', () => onUp?.());
      el.addEventListener('pointerleave', (e) => { if (e.buttons === 0) onUp?.(); });
    };
    holdBtn(fireBtn, () => { this.firing = true; }, () => { this.firing = false; });
    holdBtn(aimBtn, () => { this.aiming = true; }, () => { this.aiming = false; });
    reloadBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.reloadQueued = true; });
    jumpBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.jumpQueued = true; });

    // tapping the scene also fires on desktop-ish touch hybrids is avoided;
    // the dedicated fire button keeps aiming/strafe fingers free.
  }

  requestLock() {
    if (this.isTouch) return;
    this.canvas.requestPointerLock?.();
  }

  consumeLook() {
    const d = { x: this.lookDelta.x, y: this.lookDelta.y };
    this.lookDelta.x = 0;
    this.lookDelta.y = 0;
    return d;
  }

  consumePressed(code) {
    if (this.pressed.has(code)) { this.pressed.delete(code); return true; }
    return false;
  }

  reset() {
    this.keys.clear();
    this.pressed.clear();
    this.firing = false;
    this.aiming = false;
    this.lookDelta.x = 0;
    this.lookDelta.y = 0;
    this.move.x = 0;
    this.move.y = 0;
    this.jumpQueued = false;
    this.reloadQueued = false;
  }
}
