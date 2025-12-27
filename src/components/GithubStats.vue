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
  <div v-if="!error && !loading" class="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 animate-fade-in-up" style="animation-delay: 0.2s">
    <div class="px-6 py-3 bg-dark-secondary/50 backdrop-blur border border-primary/20 rounded-lg flex items-center gap-3">
      <div class="text-3xl font-bold text-white">{{ stats.repos }}</div>
      <div class="text-sm text-gray-400 uppercase tracking-wider font-medium text-left leading-tight">Public<br>Repos</div>
    </div>
    
    <div class="px-6 py-3 bg-dark-secondary/50 backdrop-blur border border-primary/20 rounded-lg flex items-center gap-3">
      <div class="text-3xl font-bold text-white">{{ stats.followers }}</div>
      <div class="text-sm text-gray-400 uppercase tracking-wider font-medium text-left leading-tight">GitHub<br>Followers</div>
    </div>
    
     <div class="px-6 py-3 bg-dark-secondary/50 backdrop-blur border border-primary/20 rounded-lg flex items-center gap-3">
      <div class="text-3xl font-bold text-white">6+</div>
      <div class="text-sm text-gray-400 uppercase tracking-wider font-medium text-left leading-tight">Years<br>Exp.</div>
    </div>
  </div>
</template>
