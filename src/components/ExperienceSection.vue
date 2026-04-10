<script setup>
import { computed } from 'vue'

const experiences = [
  {
    period: 'Octobre 2021 — Présent',
    role: 'Développeur Java / Spring Boot',
    company: 'LAO SARL',
    location: 'Douala, Logpom',
    description: 'Développement de microservices pour les clients et projets internes. Formation et accompagnement des stagiaires et nouveaux développeurs lors de leur intégration.',
    missions: [
      'Organisation de présentations techniques : Clean Code, Git, Docker, Spring Batch, Spring Data JPA, méthodologie Agile...',
      'Revue de code et propositions d\'amélioration pour garantir la qualité et la maintenabilité des projets',
      'Documentation des connaissances sur Jira afin de constituer un socle de bonnes pratiques propre à l\'entreprise'
    ],
    projects: [
      {
        name: 'Suku',
        description: 'Application de tests et d\'évaluations pour étudiants, conçue pour préparer aux concours et examens. API REST permettant aux enseignants de gérer les questions, évaluer les étudiants et suivre les statistiques de performance.',
        technologies: ['Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security']
      },
      {
        name: 'Drimzwallet',
        description: 'Application de gestion d\'association et de fonds, offrant des fonctionnalités de microfinance digitale. Développement des microservices de gestion des transactions et opérations financières.',
        technologies: ['Spring Boot', 'Event Sourcing', 'CQRS', 'MongoDB']
      },
      {
        name: 'ERA',
        description: 'APIs pour la vente en ligne de l\'album de LOCKO et gestion de l\'inscription des fans à une tombola. Conception et implémentation des services backend facilitant la vente et l\'enregistrement des participants.',
        technologies: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ']
      },
      {
        name: 'Autres projets clients',
        description: 'Développement de microservices et solutions web sur mesure pour divers clients, dans les secteurs de l\'éducation, la vente en ligne et la finance.',
        technologies: ['Spring Boot', 'Docker', 'PostgreSQL', 'Kafka']
      }
    ]
  }
]

const yearsAtLao = computed(() => {
  const startDate = new Date(2021, 9) // Mois 9 = Octobre (0-indexé en JS !)
  const now = new Date()
  const diffInYears = (now - startDate) / (365.25 * 24 * 60 * 60 * 1000)
  return Math.floor(diffInYears)
})
</script>

<template>
  <section id="experience" class="section">
    <div class="container">

      <h2 class="section-title">
        Mon <span class="text-primary">parcours</span>
      </h2>

      <p class="experience-subtitle" v-scroll-reveal>
        Plus de {{ yearsAtLao }} ans d'expérience en développement backend
      </p>

      <div class="timeline">

        <div
          v-for="(exp, index) in experiences"
          :key="exp.company + exp.period"
          class="timeline-item"
          v-scroll-reveal="{ delay: index * 200 }"
        >
          <span class="timeline-dot"></span>

          <div class="timeline-card">

            <div class="timeline-card-header">
              <span class="timeline-period">{{ exp.period }}</span>
              <span class="timeline-location">📍 {{ exp.location }}</span>
            </div>

            <h3 class="timeline-role">{{ exp.role }}</h3>
            <p class="timeline-company">
              chez <span class="text-primary">{{ exp.company }}</span>
            </p>

            <p class="timeline-description">{{ exp.description }}</p>

            <div v-if="exp.missions && exp.missions.length" class="timeline-missions">
              <h4 class="timeline-missions-title">Missions principales</h4>
              <ul class="timeline-missions-list">
                <li
                  v-for="mission in exp.missions"
                  :key="mission"
                  class="timeline-mission-item"
                >
                  {{ mission }}
                </li>
              </ul>
            </div>

            <div class="timeline-projects">
              <h4 class="timeline-projects-title">Projets réalisés</h4>

              <div
                v-for="project in exp.projects"
                :key="project.name"
                class="timeline-project"
              >
                <h5 class="timeline-project-name">{{ project.name }}</h5>
                <p class="timeline-project-desc">{{ project.description }}</p>

                <div class="timeline-project-techs">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="timeline-tech-badge"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

.experience-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

.timeline {
  position: relative;
  padding-left: 40px;
  max-width: 900px;
  margin-inline: auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-primary) 70%,
    transparent
  );
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-xl);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -25px;
  top: 30px;
  width: 12px;
  height: 12px;
  background-color: var(--color-bg);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(109, 179, 63, 0.3);
  z-index: 1;
}

.timeline-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: border-color var(--transition-normal);
}

.timeline-card:hover {
  border-color: var(--color-primary);
}

.timeline-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 600;
}

.timeline-location {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.timeline-role {
  font-size: 1.3rem;
  margin-bottom: var(--space-xs);
}

.timeline-company {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--space-md);
}

.timeline-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.timeline-missions {
  margin-bottom: var(--space-lg);
}

.timeline-missions-title {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.timeline-missions-list {
  list-style: none;
}

.timeline-mission-item {
  position: relative;
  padding-left: var(--space-lg);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-sm);
}

.timeline-mission-item::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
}

.timeline-projects-title {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.timeline-project {
  padding-left: var(--space-md);
  border-left: 2px solid var(--color-border);
  margin-bottom: var(--space-lg);
  transition: border-color var(--transition-normal);
}

.timeline-project:hover {
  border-color: var(--color-primary);
}

.timeline-project:last-child {
  margin-bottom: 0;
}

.timeline-project-name {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.timeline-project-desc {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-sm);
}

.timeline-project-techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.timeline-tech-badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background-color: rgba(109, 179, 63, 0.1);
  color: var(--color-primary-light);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
}

@media (max-width: 600px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 10px;
  }

  .timeline-dot {
    left: -20px;
    width: 10px;
    height: 10px;
  }

  .timeline-card-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
