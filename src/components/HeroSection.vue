<script setup>
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero-content">

      <p class="hero-tagline">
        <span class="text-primary">&lt;</span>
        Développeur Java Spring Boot
        <span class="text-primary">/&gt;</span>
      </p>

      <h1 class="hero-title">
        Herman
        <span class="hero-title-highlight">Essoungou</span>
      </h1>

      <p class="hero-description">
        Développeur backend avec <strong class="text-primary">5 ans d'expérience</strong>
        dans la conception d'architectures robustes et scalables.
        Spécialisé en microservices, event sourcing et systèmes distribués.
      </p>

      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Me contacter</a>
        <a href="#projects" class="btn btn-outline">Voir mes projets</a>
      </div>

      <p class="hero-availability">
        <span class="hero-availability-dot"></span>
        Disponible en télétravail ou présentiel — Douala, Cameroun
      </p>

    </div>
  </section>
</template>

<style scoped>

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

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

.hero-tagline {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: var(--space-lg);

  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.2s;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-lg);

  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.4s;
}

.hero-title-highlight {
  display: block;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-inline: auto;          /* Centre le paragraphe */
  margin-bottom: var(--space-xl);
  line-height: 1.8;

  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.6s;
}

.hero-cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-xl);

  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.8s;
}



.hero-availability {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-size: 0.85rem;
  color: var(--color-text-muted);

  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 1s;
}

.hero-availability-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(109, 179, 63, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(109, 179, 63, 0);
  }
}
</style>
