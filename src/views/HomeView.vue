<script setup>
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import GithubStats from '../components/GithubStats.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main>
    <!-- Sticky Nav -->
    <nav :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent', isScrolled ? 'bg-dark/80 backdrop-blur-md border-gray-800' : 'bg-transparent py-4']">
      <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div class="text-xl font-bold font-mono text-white">herman<span class="text-primary">.dev</span></div>
        <div class="flex items-center gap-8">
          <div class="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</a>
            <a href="#skills" class="hover:text-primary transition-colors">{{ $t('nav.stack') }}</a>
            <a href="#projects" class="hover:text-primary transition-colors">{{ $t('nav.work') }}</a>
            <a href="#contact" class="hover:text-primary transition-colors">{{ $t('nav.contact') }}</a>
          </div>
          
          <!-- Language Switcher -->
          <button @click="toggleLanguage" class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 bg-dark-secondary hover:border-primary transition-colors text-xs font-bold text-white uppercase tracking-wider">
            <span :class="{ 'text-primary': locale === 'en', 'text-gray-500': locale !== 'en' }">EN</span>
            <span class="text-gray-600">|</span>
            <span :class="{ 'text-primary': locale === 'fr', 'text-gray-500': locale !== 'fr' }">FR</span>
          </button>
        </div>
      </div>
    </nav>

    <Hero />
    
    <!-- Stats Section -->
    <section class="py-10 bg-dark-secondary/20 border-y border-gray-800/50 backdrop-blur-sm relative z-20">
      <div class="max-w-7xl mx-auto px-6">
        <GithubStats />
      </div>
    </section>

    <Skills />
    <Projects />
    <Contact />
  </main>
</template>
