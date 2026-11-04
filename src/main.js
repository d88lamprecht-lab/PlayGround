import './styles.css'
import { App } from './app.js'

const boot = document.getElementById('boot-splash')
const app = new App()

// Fade the boot splash once the first screen has painted.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    if (boot) {
      boot.classList.add('done')
      setTimeout(() => boot.remove(), 900)
    }
    document.body.classList.add('ready')
  })
})

export default app
