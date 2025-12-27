<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '@vueuse/core'

const { t } = useI18n()

// We need to re-map skills if we want categories translated, but the skills themselves (Java, etc) are usually typically English.
// So we just translate categories.
const skills = computed(() => [
  { category: t('skills.categories.core'), items: ['Java 17/21', 'Spring Boot', 'Spring Cloud'] },
  { category: t('skills.categories.data'), items: ['PostgreSQL', 'Hibernate/JPA', 'Redis', 'MongoDB'] },
  { category: t('skills.categories.messaging'), items: ['Kafka', 'RabbitMQ'] },
  { category: t('skills.categories.devops'), items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
  { category: t('skills.categories.tools'), items: ['Git', 'Maven/Gradle', 'IntelliJ IDEA'] },
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
  <section id="skills" class="py-20 bg-dark-secondary">
    <div ref="target" class="max-w-6xl mx-auto px-6 transition-all duration-1000 transform"
         :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        {{ $t('skills.title_prefix') }} <span class="text-primary">{{ $t('skills.title_suffix') }}</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(category, index) in skills" :key="category.category" 
             class="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-500 group"
             :style="{ transitionDelay: `${index * 100}ms` }"
             :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
          <h3 class="text-xl font-semibold text-primary mb-4 group-hover:text-yellow-300 transition-colors">{{ category.category }}</h3>
          <ul class="space-y-2">
            <li v-for="skill in category.items" :key="skill" class="flex items-center text-gray-300">
              <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
