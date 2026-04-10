<script setup>
// ================================================
// Pas de logique JavaScript pour le Hero.
// Tout est géré en HTML + CSS pur.
// 
// Plus tard, on pourrait ajouter un effet de
// "typing" animé sur le titre, mais gardons
// les choses simples pour l'instant.
// ================================================
</script>

<template>
  <!--
    <section> est une balise sémantique HTML5.
    id="hero" → permet aux liens d'ancrage de scroller ici.
    
    On combine deux classes :
    - "hero" → styles spécifiques à cette section
    - "section" → le padding vertical défini dans main.css
  -->
  <section id="hero" class="hero">
    <div class="container hero-content">

      <!--
        Le "tagline" : un petit texte au-dessus du nom.
        C'est un pattern de design courant dans les portfolios.
        Les chevrons < /> rappellent le code.
      -->
      <p class="hero-tagline">
        <span class="text-primary">&lt;</span>
        Développeur Java Spring Boot
        <span class="text-primary">/&gt;</span>
      </p>

      <!--
        Le titre principal : ton nom.
        C'est la SEULE balise <h1> de toute la page.
        
        Règle SEO : un seul <h1> par page, il doit contenir
        le contenu le plus important (ton nom/identité).
      -->
      <h1 class="hero-title">
        Herman
        <span class="hero-title-highlight">Essoungou</span>
      </h1>

      <!--
        La description courte sous le nom.
        Elle résume qui tu es en 1-2 phrases.
        max-width limite la largeur pour une meilleure lisibilité
        (les lignes trop longues sont dures à lire).
      -->
      <p class="hero-description">
        Développeur backend avec <strong class="text-primary">5 ans d'expérience</strong>
        dans la conception d'architectures robustes et scalables.
        Spécialisé en microservices, event sourcing et systèmes distribués.
      </p>

      <!--
        Les boutons d'action (CTA = Call To Action).
        Un CTA est un élément qui invite l'utilisateur à agir.
        
        On a 2 boutons :
        - Primaire (plein) → action principale "Me contacter"
        - Secondaire (outline) → action secondaire "Voir mes projets"
        
        href="#contact" → scrolle vers la section contact.
        Le scroll sera fluide grâce à scroll-behavior: smooth sur le html.
      -->
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Me contacter</a>
        <a href="#projects" class="btn btn-outline">Voir mes projets</a>
      </div>

      <!--
        Infos de disponibilité.
        Le petit cercle vert (●) est un emoji qui indique
        visuellement que tu es disponible.
      -->
      <p class="hero-availability">
        <span class="hero-availability-dot"></span>
        Disponible en télétravail ou présentiel — Douala, Cameroun
      </p>

    </div>
  </section>
</template>

<style scoped>
/* ============================================
   HERO — Section d'accueil plein écran
   ============================================ */

/*
  min-height: 100vh → la section fait AU MINIMUM toute la
  hauteur de l'écran. C'est ce qui crée l'effet "plein écran".
  
  display: flex + align-items/justify-content: center
  → centre le contenu verticalement ET horizontalement.
  
  position: relative → nécessaire pour le pseudo-élément
  de fond (::before) qu'on ajoutera.
  
  overflow: hidden → cache tout ce qui dépasse de la section
  (utile pour les animations et les éléments décoratifs).
*/
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/*
  ::before → pseudo-élément décoratif.
  On crée un cercle flou vert en arrière-plan.
  
  C'est un pattern de design "glow effect" très utilisé
  dans les portfolios de développeurs.
  
  radial-gradient → dégradé circulaire (du centre vers l'extérieur).
  Le vert Spring Boot s'estompe vers le transparent.
  
  filter: blur(80px) → floute le cercle pour un rendu doux.
  opacity: 0.15 → très discret (15% de visibilité).
*/
.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-primary), transparent 70%);
  filter: blur(80px);
  opacity: 0.15;
  pointer-events: none;       /* Le cercle n'intercepte pas les clics */
}

.hero-content {
  text-align: center;
}

/* ============================================
   ANIMATIONS — Définitions des @keyframes
   ============================================ */

/*
  fadeInUp : l'élément apparaît en montant.
  - Départ : invisible (opacity: 0) + décalé vers le bas (translateY(30px))
  - Arrivée : visible (opacity: 1) + position normale (translateY(0))
*/
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================
   TAGLINE — Petit texte au-dessus du nom
   ============================================ */

/*
  On utilise la police monospace et des lettres espacées
  (letter-spacing) pour un look "code".
  text-transform: uppercase → TOUT EN MAJUSCULES.
  
  L'animation fadeInUp se joue au chargement.
  opacity: 0 → l'élément est invisible AVANT l'animation.
  animation-fill-mode: forwards (dans le raccourci animation)
  → reste visible APRÈS l'animation.
*/
.hero-tagline {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: var(--space-lg);

  /* Animation */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.2s;
}

/* ============================================
   TITRE — Ton nom en grand
   ============================================ */

/*
  clamp() → fonction CSS pour un texte responsive.
  clamp(min, preferred, max)
  - 2.5rem → taille minimale (petit écran)
  - 6vw → taille préférée (proportionnelle à la largeur de l'écran)
  - 5rem → taille maximale (grand écran)
  
  Ceci remplace les media queries pour la taille du titre !
*/
.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-lg);

  /* Animation — délai de 0.4s (apparaît APRÈS le tagline) */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.4s;
}

/*
  Le nom de famille est en vert Spring Boot.
  display: block → le force sur sa propre ligne.
  
  background: linear-gradient → dégradé sur le texte !
  -webkit-background-clip: text → le fond ne s'affiche
  QUE sur les lettres du texte.
  color: transparent → on cache la couleur pour voir le fond.
  
  C'est une technique CSS avancée pour du "texte en dégradé".
*/
.hero-title-highlight {
  display: block;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ============================================
   DESCRIPTION — Bio courte
   ============================================ */

.hero-description {
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-inline: auto;          /* Centre le paragraphe */
  margin-bottom: var(--space-xl);
  line-height: 1.8;

  /* Animation — délai de 0.6s */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.6s;
}

/* ============================================
   BOUTONS CTA (Call To Action)
   ============================================ */

/*
  Les boutons sont côte à côte grâce à flexbox.
  flex-wrap: wrap → si l'écran est trop petit,
  les boutons passent à la ligne au lieu de déborder.
  justify-content: center → centrés horizontalement.
*/
.hero-cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-xl);

  /* Animation — délai de 0.8s */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.8s;
}

/*
  .btn → styles communs à TOUS les boutons.
  
  display: inline-flex → comme inline-block mais avec flexbox
  (permet d'utiliser align-items pour centrer le texte).
  
  padding: vertical horizontal → 12px en haut/bas, 32px sur les côtés.
  border-radius: --radius-full → coins complètement arrondis (pilule).
*/
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
}

/*
  .btn-primary → bouton plein avec fond vert.
  box-shadow → ombre verte diffuse autour du bouton (glow effect).
  rgba(109, 179, 63, 0.3) → vert Spring Boot à 30% d'opacité.
*/
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-bg);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(109, 179, 63, 0.3);
}

/*
  Au hover : le glow s'intensifie (40% d'opacité, plus large).
  transform: translateY(-2px) → le bouton "lévite" légèrement.
*/
.btn-primary:hover {
  box-shadow: 0 0 30px rgba(109, 179, 63, 0.4);
  transform: translateY(-2px);
  color: var(--color-bg);
}

/*
  .btn-outline → bouton avec juste une bordure (pas de fond).
  C'est le style "secondaire" : moins dominant visuellement.
*/
.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/*
  Au hover : le fond se remplit légèrement (10% d'opacité).
  C'est un feedback visuel subtil.
*/
.btn-outline:hover {
  background-color: rgba(109, 179, 63, 0.1);
  transform: translateY(-2px);
}

/* ============================================
   DISPONIBILITÉ — Texte en bas du Hero
   ============================================ */

.hero-availability {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-size: 0.85rem;
  color: var(--color-text-muted);

  /* Animation — délai de 1s */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 1s;
}

/*
  Le petit point vert animé.
  width/height: 8px + border-radius: 50% → cercle parfait.
  
  L'animation "pulse" fait "respirer" le point :
  il grossit légèrement et un halo vert apparaît,
  puis il revient à sa taille normale.
  animation: pulse 2s infinite → boucle infinie, 2s par cycle.
*/
.hero-availability-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/*
  Animation "pulse" pour le point de disponibilité.
  On utilise 0%, 100% au lieu de from/to car on a
  un état intermédiaire à 50%.
*/
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(109, 179, 63, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(109, 179, 63, 0);
  }
}
</style>
