<script setup>
// Ce bloc contiendra bientôt nos imports de composants.
// "setup" est la syntaxe moderne de Vue 3 (Composition API).
// Tout ce qu'on déclare ici est automatiquement disponible
// dans le <template> sans avoir à le retourner.
</script>

<template>
  <!--
    La balise <main> est une balise HTML5 sémantique.
    Elle indique le contenu PRINCIPAL de la page.
    C'est important pour :
    - L'accessibilité (les lecteurs d'écran la reconnaissent)
    - Le SEO (Google sait où est le contenu important)
  -->
  <main id="app-main">
    <h1>Herman Essoungou</h1>
    <p>Développeur Java Spring Boot — Portfolio en construction 🚧</p>
  </main>
</template>

<style scoped>
/*
  CSS scoped = s'applique UNIQUEMENT à ce composant.
  Ce style ne "fuitera" jamais vers d'autres composants.
  
  Pour l'instant, on centre le contenu temporaire.
  Ce style sera remplacé quand on ajoutera les vraies sections.
*/
#app-main {
  min-height: 100vh;         /* vh = viewport height. 100vh = toute la hauteur de l'écran */
  display: flex;             /* Active le mode Flexbox */
  flex-direction: column;    /* Empile les enfants verticalement */
  align-items: center;       /* Centre horizontalement */
  justify-content: center;   /* Centre verticalement */
  gap: var(--space-md);      /* Espace entre les éléments enfants */
}
</style>
