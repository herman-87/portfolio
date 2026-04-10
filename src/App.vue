<script setup>
// ================================================
// IMPORTS DES COMPOSANTS
// ================================================
// On importe le composant NavBar.
// Avec <script setup>, l'import suffit pour pouvoir
// l'utiliser dans le <template> comme une balise HTML.
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!--
    Structure de la page :
    1. NavBar (fixe en haut)
    2. <main> contient toutes les sections du portfolio
    
    Le padding-top sur <main> compense la hauteur
    de la navbar fixe (70px), sinon le contenu
    serait caché DERRIÈRE la navbar.
  -->
  <NavBar />
  
  <main id="app-main">
    <!-- Les sections seront ajoutées ici, une par une -->
    <section class="section container" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div>
        <h1>Herman Essoungou</h1>
        <p style="color: var(--color-text-secondary); margin-top: 1rem;">
          Portfolio en construction — NavBar fonctionnelle ✅
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/*
  padding-top: 70px → pousse le contenu vers le bas
  pour qu'il ne soit pas caché derrière la navbar fixe.
  
  C'est un pattern classique avec les navbars en position: fixed.
  La navbar "sort du flux" du document (elle flotte au-dessus),
  donc le contenu ne sait pas qu'elle existe et commence à y=0.
  Le padding compense ça.
*/
#app-main {
  padding-top: 70px;
}
</style>
