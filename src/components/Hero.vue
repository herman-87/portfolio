<script setup>
import GithubStats from './GithubStats.vue'
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-secondary to-dark -z-10"></div>
    <div class="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -left-20"></div>
    <div class="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-0"></div>

    <div class="space-y-6 max-w-4xl z-10 animate-fade-in-up">
      <div class="inline-block px-4 py-2 border border-primary/30 rounded-full bg-dark-secondary/50 backdrop-blur-sm mb-4">
        <span class="text-primary font-medium tracking-wide text-sm uppercase">{{ $t('hero.remote_badge') }}</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
        <span class="block text-white mb-2">{{ $t('hero.role_prefix') }}</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">{{ $t('hero.role_suffix') }}</span>
      </h1>
      
      <p class="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
        <i18n-t keypath="hero.intro" tag="span">
          <template #java>
            <span class="text-white font-semibold">Java</span>
          </template>
          <template #spring>
             <span class="text-white font-semibold">Spring ecosystem</span>
          </template>
        </i18n-t>
      </p>

      <div class="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <a href="#projects" class="px-8 py-3 bg-primary text-dark font-bold rounded hover:bg-yellow-400 transition-all transform hover:scale-105">
           {{ $t('hero.view_projects') }}
        </a>
        <a href="#contact" class="px-8 py-3 border border-gray-700 text-white font-medium rounded hover:border-primary hover:text-primary transition-all">
           {{ $t('hero.contact_me') }}
        </a>
      </div>

      <GithubStats />
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>
