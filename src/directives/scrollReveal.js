// ================================================
// DIRECTIVE PERSONNALISÉE : v-scroll-reveal
// ================================================
//
// Cette directive ajoute une animation d'apparition
// aux éléments quand ils entrent dans le viewport
// (la zone visible de l'écran).
//
// UTILISATION dans un composant :
// <div v-scroll-reveal>  → apparaît avec fade-in + slide-up
//
// COMMENT ÇA MARCHE :
// 1. Au montage, l'élément est invisible (opacity: 0, translateY: 30px)
// 2. Un IntersectionObserver surveille l'élément
// 3. Quand l'élément entre dans le viewport → classe "revealed" ajoutée
// 4. Le CSS anime la transition vers l'état visible
//
// POURQUOI UNE DIRECTIVE ET PAS UN COMPOSANT ?
// Une directive modifie le COMPORTEMENT d'un élément existant.
// Un composant crée un NOUVEL élément.
// Ici, on veut ajouter une animation à n'importe quel élément
// sans changer sa structure → directive.

export const vScrollReveal = {
  // ================================================
  // MOUNTED — S'exécute quand l'élément est dans le DOM
  // ================================================
  // C'est un "lifecycle hook" (crochet de cycle de vie).
  // mounted() est appelé une seule fois, quand l'élément
  // est ajouté au DOM pour la première fois.
  //
  // Paramètres :
  // - el : l'élément HTML réel (le vrai nœud DOM)
  // - binding : un objet contenant les arguments passés à la directive
  mounted(el, binding) {
    // Récupère le délai d'animation depuis l'argument.
    // Utilisation : v-scroll-reveal="{ delay: 200 }"
    // Si pas de délai spécifié, on utilise 0.
    const delay = binding.value?.delay || 0

    // ================================================
    // ÉTAT INITIAL — L'élément est invisible
    // ================================================
    // On applique les styles directement via JavaScript.
    // opacity: 0 → invisible
    // transform: translateY(30px) → décalé vers le bas
    // transition → l'animation quand "revealed" sera ajouté
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`

    // ================================================
    // INTERSECTION OBSERVER — Surveille la visibilité
    // ================================================
    // On crée un observer qui déclenche le callback
    // quand l'élément entre dans le viewport.
    //
    // threshold: 0.1 → se déclenche quand 10% de l'élément
    // est visible. Parfait pour déclencher tôt.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // L'élément est visible → on le révèle !
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'

            // On arrête de surveiller cet élément.
            // "unobserve" = ne plus surveiller.
            // L'animation ne doit se jouer qu'UNE FOIS.
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1 // 10% de l'élément visible
      }
    )

    // Démarre la surveillance de l'élément.
    observer.observe(el)
  }
}
