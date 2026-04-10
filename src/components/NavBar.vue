<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'experience', label: 'Expériences', href: '#experience' },
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container container">
      
      <a href="#" class="navbar-logo">
        <span class="text-primary">&lt;</span>
        HE
        <span class="text-primary">/&gt;</span>
      </a>

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

      <Teleport to="body">
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
      </Teleport>

    </div>
  </nav>
</template>

<style scoped>

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

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar-logo {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -1px;
}

.navbar-logo:hover {
  color: var(--color-text);
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

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

.navbar-hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--color-text);
  transition: all var(--transition-normal);
}

.navbar-hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar-hamburger.active span:nth-child(2) {
  opacity: 0;
}

.navbar-hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 990;
  background-color: rgba(13, 13, 13, 0.98);
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
