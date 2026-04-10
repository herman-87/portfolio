import { createApp } from 'vue'

// On importe le CSS global ICI.
// L'ordre est important : le CSS doit être chargé AVANT
// les composants pour que les styles soient déjà actifs
// quand les composants se rendent à l'écran.
import './assets/main.css'

import App from './App.vue'

createApp(App).mount('#app')
