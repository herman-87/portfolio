<script setup>
import { ref, onMounted } from 'vue'

const stats = ref(null)
const loading = ref(true)
const error = ref(false)

const fetchGithubStats = async () => {
  try {
    const response = await fetch('https://api.github.com/users/herman87')
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    stats.value = {
      repos: data.public_repos,
      followers: data.followers,
      following: data.following
    }
  } catch (e) {
    error.value = true
    console.error('GitHub API Error:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchGithubStats()
})
</script>

<template>
  <div v-if="!error && !loading" class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 animate-fade-in-up w-full max-w-5xl mx-auto" style="animation-delay: 0.2s">
    <div class="flex-1 px-8 py-4 flex flex-col items-center justify-center gap-2 group border-b md:border-b-0 md:border-r border-gray-800/50 last:border-0 w-full md:w-auto">
      <div class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 group-hover:scale-105 transition-transform duration-300">{{ stats.repos }}</div>
      <div class="text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] font-bold text-center">Public Repos</div>
    </div>
    
    <div class="flex-1 px-8 py-4 flex flex-col items-center justify-center gap-2 group border-b md:border-b-0 md:border-r border-gray-800/50 last:border-0 w-full md:w-auto">
      <div class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 group-hover:scale-105 transition-transform duration-300">{{ stats.followers }}</div>
      <div class="text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] font-bold text-center">Followers</div>
    </div>
    
     <div class="flex-1 px-8 py-4 flex flex-col items-center justify-center gap-2 group w-full md:w-auto">
      <div class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 group-hover:scale-105 transition-transform duration-300">6+</div>
      <div class="text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] font-bold text-center">Years Exp.</div>
    </div>
  </div>
</template>
