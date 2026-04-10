<script setup>
const skillCategories = [
  {
    name: 'Java / Spring Boot',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    skills: [
      'Java 8 / 11 / 17 / 21 / 25',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Spring Cloud',
      'Hibernate',
      'Maven / Gradle',
      'JUnit / Mockito',
      'Cucumber',
      'Spring AI'
    ]
  },
  {
    name: 'Bases de données',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Flyway / Liquibase'
    ]
  },
  {
    name: 'Architecture & Patterns',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>',
    skills: [
      'Microservices',
      'Event Sourcing',
      'CQRS',
      'API REST',
      'Clean Architecture',
      'Design Patterns',
      'Domain-Driven Design'
    ]
  },
  {
    name: 'CI/CD & DevOps',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    skills: [
      'Docker',
      'Git / GitHub',
      'Jenkins',
      'GitHub Actions',
      'Linux',
      'Nginx'
    ]
  },
  {
    name: 'Outils & Autres',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    skills: [
      'IntelliJ IDEA',
      'Postman',
      'Swagger / OpenAPI',
      'Jira / Confluence',
      'Kafka',
      'RabbitMQ'
    ]
  }
]
</script>

<template>
  <section id="skills" class="section">
    <div class="container">

      <h2 class="section-title">
        Mes <span class="text-primary">compétences</span>
      </h2>

      <p class="skills-subtitle" v-scroll-reveal>
        Technologies et outils que j'utilise au quotidien
      </p>

      <div class="skills-grid">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.name"
          class="skills-category"
          v-scroll-reveal="{ delay: index * 100 }"
        >
          <div class="skills-category-header">
            <div class="skills-category-icon" v-html="category.icon"></div>
            <h3 class="skills-category-title">{{ category.name }}</h3>
          </div>

          <div class="skills-badges">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="skills-badge"
            >
              {{ skill }}
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

.skills-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.skills-category {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: border-color var(--transition-normal);
}

.skills-category:hover {
  border-color: var(--color-primary);
}

.skills-category-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);

  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.skills-category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.skills-category-icon :deep(svg) {
  color: var(--color-primary);
}

.skills-category-title {
  font-size: 1rem;
  font-weight: 600;
}

.skills-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skills-badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background-color: rgba(109, 179, 63, 0.1);
  color: var(--color-primary-light);
  border: 1px solid rgba(109, 179, 63, 0.2);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  user-select: none;
}

.skills-badge:hover {
  background-color: rgba(109, 179, 63, 0.15);
  border-color: rgba(109, 179, 63, 0.4);
  transform: scale(1.05);
}

@media (max-width: 400px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
