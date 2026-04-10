<script setup>
const projects = [
  {
    name: 'Suku',
    category: 'Éducation',
    description: 'Application de tests et d\'évaluations pour étudiants, conçue pour préparer aux concours d\'entrée dans les grandes écoles et aux examens de fin d\'année.',
    role: 'Développeur backend principal',
    technologies: ['Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'REST API'],
    highlights: [
      'API REST pour la gestion des questions et quiz par les enseignants',
      'Suivi des statistiques de performance des étudiants en temps réel',
      'Système de rémunération des enseignants pour leurs contributions'
    ]
  },
  {
    name: 'Drimzwallet',
    category: 'Fintech / Microfinance',
    description: 'Application de gestion d\'association et de fonds, offrant des fonctionnalités de microfinance digitale pour les utilisateurs.',
    role: 'Développeur backend & architecte',
    technologies: ['Spring Boot', 'Event Sourcing', 'CQRS', 'MongoDB', 'Redis'],
    highlights: [
      'Microservices de gestion des transactions et opérations financières',
      'Implémentation complète de l\'Event Sourcing & CQRS',
      'Architecture scalable pour la microfinance digitale'
    ]
  },
  {
    name: 'ERA',
    category: 'Musique / E-commerce',
    description: 'APIs pour la vente en ligne de l\'album de LOCKO et gestion de l\'inscription des fans à une tombola.',
    role: 'Développeur backend',
    technologies: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Swagger'],
    highlights: [
      'Services backend pour la vente et l\'enregistrement des participants',
      'Intégration de services de paiement tiers',
      'API REST documentée avec Swagger / OpenAPI'
    ]
  }
]
</script>

<template>
  <section id="projects" class="section">
    <div class="container">

      <h2 class="section-title">
        Mes <span class="text-primary">projets</span>
      </h2>

      <p class="projects-subtitle" v-scroll-reveal>
        Projets réalisés chez LAO SARL
      </p>

      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card"
          v-scroll-reveal="{ delay: index * 150 }"
        >

          <div class="project-card-header">
            <span class="project-category">{{ project.category }}</span>
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-role">{{ project.role }}</p>
          </div>

          <div class="project-card-body">
            <p class="project-description">{{ project.description }}</p>

            <ul class="project-highlights">
              <li
                v-for="highlight in project.highlights"
                :key="highlight"
                class="project-highlight"
              >
                {{ highlight }}
              </li>
            </ul>

            <div class="project-techs">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="project-tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>

.projects-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-lg);
}

.project-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition-normal),
              border-color var(--transition-normal),
              box-shadow var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 40px rgba(109, 179, 63, 0.15);
}

.project-card-header {
  padding: var(--space-lg);
  background: linear-gradient(
    135deg,
    rgba(109, 179, 63, 0.05),
    rgba(119, 188, 31, 0.1)
  );
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition-normal);
}

.project-card:hover .project-card-header {
  background: linear-gradient(
    135deg,
    rgba(109, 179, 63, 0.1),
    rgba(119, 188, 31, 0.15)
  );
}

.project-category {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-sm);
}

.project-name {
  font-size: 1.5rem;
  margin-bottom: var(--space-xs);
}

.project-role {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.project-card-body {
  padding: var(--space-lg);
}

.project-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.project-highlights {
  list-style: none;
  margin-bottom: var(--space-lg);
}

.project-highlight {
  position: relative;
  padding-left: var(--space-lg);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-sm);
}

.project-highlight::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
}

.project-techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.project-tech-badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  background-color: rgba(109, 179, 63, 0.1);
  color: var(--color-primary-light);
  border: 1px solid rgba(109, 179, 63, 0.2);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 400px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
