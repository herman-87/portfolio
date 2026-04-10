import { createApp } from 'vue'

import './assets/main.css'

import App from './App.vue'
import { vScrollReveal } from './directives/scrollReveal.js'

const app = createApp(App)

app.directive('scroll-reveal', vScrollReveal)

app.mount('#app')
