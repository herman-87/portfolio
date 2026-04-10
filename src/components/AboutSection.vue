<script setup>
const strengths = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    title: 'Résolution de problèmes',
    description: 'Approche méthodique pour décomposer les problèmes complexes en solutions élégantes et maintenables.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Esprit d\'équipe',
    description: 'Collaboration efficace avec les équipes frontend, DevOps et produit. Communication claire et documentation rigoureuse.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    title: 'Apprentissage continu',
    description: 'Veille technologique constante. Toujours à la recherche de meilleures pratiques et de nouvelles architectures.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    title: 'Performance & Qualité',
    description: 'Code propre, testé et optimisé. Attention particulière aux bonnes pratiques et aux design patterns.'
  }
]
</script>

<template>
  <section id="about" class="section">
    <div class="container">

      <h2 class="section-title">
        À <span class="text-primary">propos</span>
      </h2>

      <div class="about-intro" v-scroll-reveal>
        <p>
          Passionné par le développement backend depuis plus de 5 ans,
          je conçois des <strong class="text-primary">API robustes</strong> et des
          <strong class="text-primary">architectures scalables</strong>
          avec l'écosystème Spring Boot.
        </p>
        <p>
          Mon objectif : transformer des besoins métier complexes en solutions
          techniques fiables, performantes et maintenables.
        </p>
      </div>

      <div class="about-grid">
        <div
          v-for="(item, index) in strengths"
          :key="item.title"
          class="about-card"
          v-scroll-reveal="{ delay: index * 150 }"
        >
          <div class="about-card-icon" :aria-label="item.title" v-html="item.icon"></div>

          <h3 class="about-card-title">{{ item.title }}</h3>
          <p class="about-card-description">{{ item.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

.about-intro {
  max-width: 700px;
  margin-inline: auto;
  text-align: center;
  margin-bottom: var(--space-xl);
}

.about-intro p + p {
  margin-top: var(--space-md);
}

.about-intro p {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.about-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  text-align: center;
  transition: transform var(--transition-normal),
              border-color var(--transition-normal);
}

.about-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.about-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(109, 179, 63, 0.1);
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}

/* Cible le contenu SVG injecté */
.about-card-icon :deep(svg) {
  color: var(--color-primary);
}

.about-card-title {
  font-size: 1.1rem;
  margin-bottom: var(--space-sm);
}

.about-card-description {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
