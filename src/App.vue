<script setup>
// ================================================
// IMPORTS DES COMPOSANTS
// ================================================
// Chaque composant est importé depuis le dossier components.
// Avec <script setup>, l'import les rend directement
// utilisables dans le <template>.
// 
// Note l'ordre : on importe dans l'ordre d'apparition
// sur la page. C'est une simple convention de lisibilité.
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
</script>

<template>
  <!--
    L'architecture de la page :
    
    NavBar     → fixe en haut (position: fixed, hors du flux)
    <main>     → contient TOUTES les sections empilées
      └ Hero
      └ About    (bientôt)
      └ Skills   (bientôt)
      └ ...
  -->
  <NavBar />

  <main id="app-main">
    <HeroSection />
    <AboutSection />
    <!-- Les prochaines sections seront ajoutées ici -->
  </main>
</template>

<style scoped>
/*
  padding-top: 70px → compense la navbar fixe.
  Sans ça, le haut du Hero serait caché derrière la navbar.
*/
#app-main {
  padding-top: 70px;
}
</style>
