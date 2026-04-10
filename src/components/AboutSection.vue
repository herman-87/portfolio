<script setup>
// ================================================
// DONNÉES
// ================================================
// Tableau d'objets représentant tes atouts/forces.
// Chaque objet contient un icône (emoji), un titre
// et une description.
//
// On utilise un tableau plutôt que de coder chaque
// card en dur dans le HTML. Avantages :
// 1. Facile d'ajouter/supprimer un atout
// 2. Le template reste propre (pas de duplication)
// 3. Les données pourraient venir d'une API plus tard
const strengths = [
  {
    icon: '🧩',
    title: 'Résolution de problèmes',
    description: 'Approche méthodique pour décomposer les problèmes complexes en solutions élégantes et maintenables.'
  },
  {
    icon: '🤝',
    title: 'Esprit d\'équipe',
    description: 'Collaboration efficace avec les équipes frontend, DevOps et produit. Communication claire et documentation rigoureuse.'
  },
  {
    icon: '📚',
    title: 'Apprentissage continu',
    description: 'Veille technologique constante. Toujours à la recherche de meilleures pratiques et de nouvelles architectures.'
  },
  {
    icon: '⚡',
    title: 'Performance & Qualité',
    description: 'Code propre, testé et optimisé. Attention particulière aux bonnes pratiques et aux design patterns.'
  }
]
</script>

<template>
  <!--
    id="about" → ancre pour le lien de navigation (#about).
    Quand on clique "À propos" dans la navbar, le navigateur
    scrolle jusqu'à cet id.
    
    class="section" → padding vertical défini dans main.css.
  -->
  <section id="about" class="section">
    <div class="container">

      <!--
        Titre de section.
        On utilise <h2> car <h1> est réservé au Hero.
        
        Le <span class="text-primary"> colore un mot en vert.
        C'est un pattern design pour attirer l'œil sur un mot clé.
      -->
      <h2 class="section-title">
        À <span class="text-primary">propos</span>
      </h2>

      <!--
        Texte d'introduction.
        On utilise un <div> wrapper avec une classe pour
        limiter la largeur et centrer le texte.
      -->
      <div class="about-intro">
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

      <!--
        Grille de cards avec les atouts.
        
        CSS Grid est utilisé ici pour créer une grille
        de 4 cards réparties en colonnes.
        
        v-for itère sur le tableau "strengths".
        :key utilise item.title comme identifiant unique.
        
        Chaque itération crée une card complète avec
        icône, titre et description.
      -->
      <div class="about-grid">
        <div
          v-for="item in strengths"
          :key="item.title"
          class="about-card"
        >
          <!--
            L'icône emoji dans un cercle.
            role="img" + aria-label → accessibilité.
            Les emojis ne sont pas lus correctement par les
            lecteurs d'écran, donc on ajoute un label textuel.
          -->
          <span class="about-card-icon" role="img" :aria-label="item.title">
            {{ item.icon }}
          </span>

          <!--
            <h3> car on est à l'intérieur d'une <section>
            qui a déjà un <h2>. Hiérarchie respectée !
          -->
          <h3 class="about-card-title">{{ item.title }}</h3>
          <p class="about-card-description">{{ item.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ============================================
   INTRODUCTION — Texte de présentation
   ============================================ */

/*
  max-width: 700px → limite la largeur du texte.
  
  Pourquoi ? En typographie, la largeur de lecture
  optimale est de 50-75 caractères par ligne.
  Au-delà, les yeux se fatiguent à retrouver le
  début de la ligne suivante.
  
  margin-inline: auto → centre le bloc horizontalement.
*/
.about-intro {
  max-width: 700px;
  margin-inline: auto;
  text-align: center;
  margin-bottom: var(--space-xl);
}

/*
  Espace entre les paragraphes.
  Le sélecteur "p + p" signifie :
  "un <p> qui est IMMÉDIATEMENT PRÉCÉDÉ par un autre <p>".
  
  C'est un "sélecteur de frères adjacents" (+).
  Seul le 2ème paragraphe aura un margin-top.
  Le 1er n'en a pas (car il n'est pas précédé d'un <p>).
*/
.about-intro p + p {
  margin-top: var(--space-md);
}

.about-intro p {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
}

/* ============================================
   GRILLE — CSS Grid pour les cards
   ============================================ */

/*
  display: grid → active CSS Grid.
  
  grid-template-columns: repeat(4, 1fr)
  → crée 4 colonnes de taille égale.
  
  "repeat(4, 1fr)" est un raccourci pour :
  "1fr 1fr 1fr 1fr"
  
  1fr = "1 fraction" de l'espace disponible.
  4 colonnes × 1fr = chaque colonne prend 25%.
  
  gap → espace entre les cellules de la grille
  (vertical ET horizontal).
*/
.about-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

/* ============================================
   CARDS — Chaque atout
   ============================================ */

/*
  La card a un fond légèrement plus clair que le body
  pour créer du contraste et de la profondeur.
  
  border: 1px solid var(--color-border) → bordure subtile.
  
  transition → anime le changement au hover.
  On anime transform (lévitation) et border-color.
*/
.about-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  text-align: center;
  transition: transform var(--transition-normal),
              border-color var(--transition-normal);
}

/*
  Au hover :
  - La card monte de 4px (effet lévitation).
  - La bordure devient le vert Spring Boot.
  
  C'est un feedback visuel qui indique "cet élément
  est interactif / a de l'importance".
*/
.about-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

/* ============================================
   ICÔNE — Emoji dans un cercle
   ============================================ */

/*
  width/height + border-radius: 50% → cercle parfait.
  
  On centre l'emoji dans le cercle avec flexbox.
  display: inline-flex → se comporte comme inline
  mais permet d'utiliser align-items/justify-content.
  
  Le fond utilise une couleur rgba du vert à 10%
  d'opacité pour un cercle teinté subtil.
*/
.about-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(109, 179, 63, 0.1);
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
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

/* ============================================
   RESPONSIVE — Adapter la grille aux petits écrans
   ============================================ */

/*
  Sur tablette (≤ 1024px) : 2 colonnes au lieu de 4.
  Sur mobile (≤ 600px) : 1 seule colonne.
  
  C'est la puissance de CSS Grid : on change UNE propriété
  (grid-template-columns) et toute la mise en page s'adapte.
*/
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
