<script setup>
import { ref } from 'vue'

// ================================================
// DONNÉES RÉACTIVES
// ================================================
const isMobileMenuOpen = ref(false)

// ================================================
// DONNÉES STATIQUES
// ================================================
// Chaque objet a : un id (clé unique), un label (texte affiché),
// et un href (l'ancre vers laquelle scroller).
const navLinks = [
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'experience', label: 'Expériences', href: '#experience' },
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

// ================================================
// MÉTHODES
// ================================================
// Fonction pour fermer le menu mobile quand on clique sur un lien.
// Sans ça, le menu resterait ouvert après avoir cliqué.
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

// Fonction pour basculer (toggle) l'état du menu mobile.
// Le "!" inverse la valeur : true → false, false → true.
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <!--
    <nav> est une balise HTML5 sémantique pour la navigation.
    Les lecteurs d'écran la reconnaissent = meilleure accessibilité.
    
    La classe "navbar" est notre classe de style principale.
  -->
  <nav class="navbar">
    <div class="navbar-container container">
      
      <!--
        Le logo / nom du site.
        C'est un lien <a> qui ramène en haut de la page (#).
        On utilise la classe "text-primary" définie dans main.css.
      -->
      <a href="#" class="navbar-logo">
        <span class="text-primary">&lt;</span>
        HE
        <span class="text-primary">/&gt;</span>
      </a>

      <!--
        NAVIGATION DESKTOP — visible sur grands écrans.
        
        v-for : boucle sur chaque élément du tableau navLinks.
        :key  : identifiant unique obligatoire pour Vue (optimisation du DOM).
        :href : liaison dynamique — la valeur vient de la variable link.href.
        {{ }} : interpolation — affiche la valeur de link.label dans le HTML.
      -->
      <div class="navbar-links">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          class="navbar-link"
        >
          {{ link.label }}
        </a>
      </div>

      <!--
        BOUTON MENU MOBILE (hamburger) — visible uniquement sur petits écrans.
        
        @click : écoute l'événement clic et appelle toggleMobileMenu().
        :class : ajoute la classe 'active' SI isMobileMenuOpen est true.
                 Ceci permet d'animer le hamburger en "X".
        
        aria-label : texte pour les lecteurs d'écran (accessibilité).
        Le bouton n'a pas de texte visible, donc aria-label décrit son rôle.
        
        Les 3 <span> représentent les 3 barres du hamburger.
      -->
      <button
        class="navbar-hamburger"
        :class="{ 'active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Ouvrir le menu de navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!--
        MENU MOBILE — panneau qui apparaît quand on clique le hamburger.
        
        :class="{ 'open': isMobileMenuOpen }" → ajoute la classe 'open'
        quand le menu est ouvert, ce qui déclenche l'animation CSS.
        
        @click="closeMobileMenu" sur chaque lien → ferme le menu
        après avoir cliqué un lien.
      -->
      <div class="navbar-mobile" :class="{ 'open': isMobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="'mobile-' + link.id"
          :href="link.href"
          class="navbar-mobile-link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </div>

    </div>
  </nav>
</template>

<style scoped>
/* ============================================
   NAVBAR — Barre de navigation fixe en haut
   ============================================ */

/*
  position: fixed → la navbar reste en haut même quand on scrolle.
  top: 0; left: 0; right: 0 → elle occupe toute la largeur en haut.
  z-index: 1000 → elle passe AU-DESSUS de tout le reste de la page.
  (z-index gère l'empilement des éléments, plus c'est haut, plus c'est devant)
  
  backdrop-filter: blur(10px) → effet de flou sur ce qui est derrière.
  C'est l'effet "glassmorphism" très tendance en design moderne.
  Le fond est semi-transparent grâce à rgba (le "a" = alpha = opacité).
*/
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

/*
  On réutilise la classe .container (définie dans main.css)
  et on ajoute du flexbox pour aligner le logo et les liens
  côte à côte.
  
  justify-content: space-between → pousse le logo à gauche
  et les liens à droite avec de l'espace entre eux.
*/
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* ============================================
   LOGO
   ============================================ */

/*
  Le logo utilise la police monospace pour le look "code".
  font-size: 1.5rem = 24px (1.5 × 16px).
  letter-spacing: -1px → rapproche les lettres pour un look compact.
*/
.navbar-logo {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -1px;
}

/* Pas de changement de couleur au survol pour le logo */
.navbar-logo:hover {
  color: var(--color-text);
}

/* ============================================
   LIENS DESKTOP
   ============================================ */

/*
  gap: var(--space-lg) → espace de 32px entre chaque lien.
  C'est plus propre que de mettre margin-right sur chaque lien.
*/
.navbar-links {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

/*
  Les liens changent de couleur au survol.
  La transition rend le changement fluide et élégant.
  
  position: relative → nécessaire pour le pseudo-élément ::after
  qui va créer la ligne de soulignement animée.
*/
.navbar-link {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
}

.navbar-link:hover {
  color: var(--color-primary);
}

/*
  ::after → crée un pseudo-élément APRÈS le texte du lien.
  On l'utilise pour faire une ligne de soulignement animée.
  
  Au repos : width: 0 (invisible).
  Au hover : width: 100% (la ligne apparaît de gauche à droite).
  C'est une micro-animation qui rend la navigation plus vivante.
*/
.navbar-link::after {
  content: '';                          /* Obligatoire pour que ::after existe */
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-normal);
}

.navbar-link:hover::after {
  width: 100%;
}

/* ============================================
   HAMBURGER — Menu mobile (3 barres)
   ============================================ */

/*
  display: none → caché par défaut (visible seulement en mobile
  grâce aux media queries qu'on ajoutera à l'étape 10).
  
  On utilise flex + flex-direction: column pour empiler
  les 3 barres verticalement.
*/
.navbar-hamburger {
  display: none;              /* Caché sur desktop */
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;           /* Supprime le fond par défaut des boutons */
  border: none;               /* Supprime la bordure par défaut */
  cursor: pointer;            /* Change le curseur en "main" au survol */
  padding: var(--space-sm);
  z-index: 1001;
}

/*
  Chaque <span> dans le hamburger est une barre horizontale.
  transition: all → anime TOUTES les propriétés qui changent
  (rotation, position, opacité) en une seule déclaration.
*/
.navbar-hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--color-text);
  transition: all var(--transition-normal);
}

/*
  Quand le hamburger est "active" (menu ouvert),
  les barres s'animent pour former un "X" :
  - Barre 1 : pivote 45° et descend
  - Barre 2 : disparaît (opacity: 0)
  - Barre 3 : pivote -45° et monte
  
  nth-child(n) → sélectionne le n-ième enfant.
  translateY → déplace verticalement.
  rotate → fait pivoter.
*/
.navbar-hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar-hamburger.active span:nth-child(2) {
  opacity: 0;
}

.navbar-hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ============================================
   MENU MOBILE — Panneau plein écran
   ============================================ */

/*
  Le menu mobile est positionné en fixe, couvre tout l'écran,
  mais est CACHÉ par défaut :
  - opacity: 0 → invisible
  - visibility: hidden → non cliquable
  - transform: translateY(-100%) → décalé au-dessus de l'écran
  
  Quand la classe "open" est ajoutée, tout s'inverse.
*/
.navbar-mobile {
  display: none;              /* Caché sur desktop */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(13, 13, 13, 0.95);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}

.navbar-mobile.open {
  opacity: 1;
  visibility: visible;
}

.navbar-mobile-link {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.navbar-mobile-link:hover {
  color: var(--color-primary);
}

/* ============================================
   RESPONSIVE — Afficher le hamburger sur mobile
   ============================================ */

/*
  @media → une "media query". Elle applique des styles
  UNIQUEMENT quand la condition est remplie.
  
  max-width: 768px → quand l'écran fait 768px ou moins
  (taille typique d'une tablette en portrait).
  
  On cache les liens desktop et on montre le hamburger.
*/
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
  }

  .navbar-mobile {
    display: flex;
  }
}
</style>
