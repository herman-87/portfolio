<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '@vueuse/core'

const { t } = useI18n()

// We need to re-map skills if we want categories translated, but the skills themselves (Java, etc) are usually typically English.
// So we just translate categories.
const skills = computed(() => [
  { 
    category: t('skills.categories.core'), 
    items: [
      { name: 'Java 17/21', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Spring Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' }
    ]
  },
  { 
    category: t('skills.categories.data'), 
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Hibernate/JPA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ] 
  },
  { 
    category: t('skills.categories.messaging'), 
    items: [
      { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
      { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' }
    ] 
  },
  { 
    category: t('skills.categories.devops'), 
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
    ] 
  },
  { 
    category: t('skills.categories.tools'), 
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Maven/Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
      { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
    ] 
  },
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
            <li v-for="skill in category.items" :key="skill.name" class="flex items-center text-gray-300 gap-3">
              <div class="w-8 h-8 flex items-center justify-center bg-dark-secondary/50 rounded-lg p-1 border border-gray-700/50 group-hover:border-primary/30 transition-colors">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <span class="font-medium group-hover:text-white transition-colors">{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
