<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '@vueuse/core'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: t('projects.items.p1.title'),
    description: t('projects.items.p1.description'),
    tech: ['Java', 'Spring Boot', 'Kafka', 'Redis'],
    link: '#'
  },
  {
    title: t('projects.items.p2.title'),
    description: t('projects.items.p2.description'),
    tech: ['Spring Cloud', 'PostgreSQL', 'Docker', 'Kubernetes'],
    link: '#'
  },
  {
    title: t('projects.items.p3.title'),
    description: t('projects.items.p3.description'),
    tech: ['Java 21', 'Apache Flink', 'TimeScaleDB'],
    link: '#'
  }
])

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.1 }
)
</script>

<template>
  <section id="projects" class="py-20 bg-dark">
    <div ref="target" class="max-w-6xl mx-auto px-6 transition-all duration-1000 transform"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        {{ $t('projects.title_prefix') }} <span class="text-primary">{{ $t('projects.title_suffix') }}</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="project.title" 
             class="bg-dark-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
             :style="{ transitionDelay: `${index * 150}ms` }"
             :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-2xl font-bold text-white mb-3">{{ project.title }}</h3>
            <p class="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="t in project.tech" :key="t" 
                    class="px-2 py-1 text-xs font-mono bg-dark border border-gray-700 text-primary rounded">
                {{ t }}
              </span>
            </div>
            
            <a :href="project.link" class="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
              {{ $t('projects.view_code') }} <span class="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
