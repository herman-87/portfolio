<script setup>
// ================================================
// DONNÉES — Compétences groupées par catégorie
// ================================================
// Structure : tableau d'objets, chaque objet contient
// un nom de catégorie et un tableau de compétences.
//
// Cette structure "imbriquée" (tableau dans un objet
// dans un tableau) est très courante en programmation.
// En Java, ce serait :
// List<SkillCategory> où SkillCategory a un List<String> skills
const skillCategories = [
  {
    name: 'Java / Spring Boot',
    icon: '☕',
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
    icon: '🗄️',
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
    icon: '🏗️',
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
    icon: '🚀',
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
    icon: '🔧',
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

      <!--
        Grille des catégories de compétences.
        
        v-for avec (category, index) :
        - category → l'objet courant
        - index → sa position dans le tableau (0, 1, 2...)
        
        :style → on utilise l'index pour créer un délai
        d'animation différent pour chaque catégorie.
        Le calcul : index × 0.1s
        → Cat 1: 0s, Cat 2: 0.1s, Cat 3: 0.2s...
        Cela crée un effet de cascade visuel.
      -->
      <div class="skills-grid">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.name"
          class="skills-category"
          v-scroll-reveal="{ delay: index * 100 }"
        >
          <!--
            En-tête de la catégorie : icône + nom.
          -->
          <div class="skills-category-header">
            <span class="skills-category-icon">{{ category.icon }}</span>
            <h3 class="skills-category-title">{{ category.name }}</h3>
          </div>

          <!--
            Liste des compétences sous forme de badges.
            
            v-for IMBRIQUÉ : on boucle sur category.skills
            (le tableau à l'intérieur de l'objet category).
            
            :key="skill" → chaque nom de compétence est unique,
            donc il sert de clé.
            
            C'est notre première double boucle :
            - Boucle externe : les catégories (Java, BDD, CI/CD...)
            - Boucle interne : les compétences dans chaque catégorie
          -->
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
/* ============================================
   SOUS-TITRE
   ============================================ */

.skills-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

/* ============================================
   GRILLE DES CATÉGORIES
   ============================================ */

/*
  On utilise CSS Grid avec une technique avancée :
  repeat(auto-fit, minmax(300px, 1fr))
  
  Décomposons :
  - auto-fit → crée autant de colonnes que possible
  - minmax(300px, 1fr) → chaque colonne fait MINIMUM 300px
    et MAXIMUM 1fr (partage de l'espace)
  
  Résultat : la grille s'adapte AUTOMATIQUEMENT !
  - Grand écran : 3 colonnes
  - Tablette : 2 colonnes
  - Mobile : 1 colonne
  
  Et tout ça SANS media queries ! C'est la technique
  CSS Grid la plus puissante pour le responsive.
*/
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

/* ============================================
   CATÉGORIE — Card pour chaque groupe
   ============================================ */

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

/* ============================================
   EN-TÊTE DE CATÉGORIE — Icône + Titre
   ============================================ */

/*
  Flexbox pour aligner l'icône et le titre
  côte à côte sur la même ligne.
*/
.skills-category-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);

  /*
    padding-bottom + border-bottom → crée une ligne
    de séparation sous l'en-tête.
    C'est un pattern design pour séparer visuellement
    le titre du contenu.
  */
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.skills-category-icon {
  font-size: 1.5rem;
}

.skills-category-title {
  font-size: 1rem;
  font-weight: 600;
}

/* ============================================
   BADGES — Chaque compétence
   ============================================ */

/*
  flex-wrap: wrap → les badges passent à la ligne
  quand il n'y a plus de place. Sans ça, ils
  déborderaient de la card sur une seule ligne.
*/
.skills-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

/*
  Chaque badge est un petit rectangle arrondi
  avec un fond semi-transparent vert.
  
  Le design "badge" est très courant pour afficher
  des tags, labels, ou compétences.
  
  padding: vertical horizontal → plus de padding
  sur les côtés que en haut/bas pour un look pilule.
  
  font-size: 0.8rem → plus petit que le texte normal
  pour ne pas dominer visuellement.
  
  user-select: none → empêche la sélection du texte
  au clic. Les badges ne sont pas du contenu à copier.
*/
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

/*
  Au hover sur un badge :
  - Le fond devient plus opaque (15%)
  - La bordure devient plus visible (40%)
  - Le badge "grandit" légèrement (scale 1.05)
  
  scale() est une fonction de transform.
  1 = taille normale, 1.05 = 5% plus grand.
  C'est très subtil mais ça rend les badges "vivants".
*/
.skills-badge:hover {
  background-color: rgba(109, 179, 63, 0.15);
  border-color: rgba(109, 179, 63, 0.4);
  transform: scale(1.05);
}

/* ============================================
   RESPONSIVE
   ============================================ */

/*
  On n'a PAS BESOIN de media queries ici grâce à
  auto-fit + minmax ! La grille s'adapte toute seule.
  
  Mais on va ajuster le minmax pour les très petits
  écrans où 300px est trop large.
*/
@media (max-width: 400px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
