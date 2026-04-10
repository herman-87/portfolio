import { createApp } from 'vue'

// On importe le CSS global ICI.
// L'ordre est important : le CSS doit être chargé AVANT
// les composants pour que les styles soient déjà actifs
// quand les composants se rendent à l'écran.
import './assets/main.css'

import App from './App.vue'
import { vScrollReveal } from './directives/scrollReveal.js'

const app = createApp(App)

// Enregistrement global de la directive.
// Elle sera utilisable partout avec "v-scroll-reveal"
app.directive('scroll-reveal', vScrollReveal)

app.mount('#app')
