<script setup>
// ================================================
// IMPORTS
// ================================================
// reactive : comme ref(), mais pour les OBJETS.
// Au lieu de créer 3 ref() séparées (name, email, message),
// on regroupe tout dans un seul objet réactif.
import { reactive, ref } from 'vue'

// ================================================
// DONNÉES RÉACTIVES
// ================================================
// L'objet formulaire avec reactive().
// Chaque propriété est liée à un champ du formulaire
// via v-model.
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// État de soumission
const isSubmitted = ref(false)
const isSubmitting = ref(false)

// ================================================
// DONNÉES STATIQUES — Infos de contact
// ================================================
const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'hermanessoungou@gmail.com',
    href: 'mailto:hermanessoungou@gmail.com'
  },
  {
    icon: '📱',
    label: 'Téléphone',
    value: '+237 671 952 927',
    href: 'tel:+237671952927'
  },
  {
    icon: '📍',
    label: 'Localisation',
    value: 'Douala, Cameroun',
    href: null
  }
]

// ================================================
// MÉTHODES
// ================================================
// Gère la soumission du formulaire.
//
// Pour l'instant, on simule l'envoi (pas de backend).
// En production, on utiliserait fetch() ou axios
// pour envoyer les données à une API.
//
// async/await → syntaxe JavaScript pour gérer les
// opérations asynchrones (réseau, timers...).
// "async" dit "cette fonction contient des await".
// "await" dit "attends que cette opération finisse".
async function handleSubmit() {
  isSubmitting.value = true

  // Simule un appel réseau de 1.5 secondes.
  // setTimeout retourne une Promise grâce à
  // new Promise() → on peut "await" dessus.
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Affiche le résultat en console (pour debug)
  console.log('Formulaire soumis :', { ...form })

  // Réinitialise le formulaire.
  // On remet chaque champ à une chaîne vide.
  form.name = ''
  form.email = ''
  form.message = ''

  isSubmitting.value = false
  isSubmitted.value = true

  // Cache le message de succès après 5 secondes
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">

      <h2 class="section-title">
        Me <span class="text-primary">contacter</span>
      </h2>

      <p class="contact-subtitle" v-scroll-reveal>
        Un projet en tête ? N'hésitez pas à me contacter !
      </p>

      <!--
        Layout en 2 colonnes : formulaire + infos de contact.
        Sur mobile, ça passe en 1 colonne grâce aux media queries.
      -->
      <div class="contact-grid">

        <!--
          LE FORMULAIRE
          
          <form> est la balise HTML native pour les formulaires.
          @submit.prevent → écoute la soumission ET empêche
          le rechargement de la page (preventDefault).
        -->
        <form class="contact-form" @submit.prevent="handleSubmit" v-scroll-reveal="{ delay: 100 }">

          <!--
            Champ NOM.
            
            <label> est associé à l'input via l'attribut "for"
            qui correspond à l'attribut "id" de l'input.
            Avantage : cliquer sur le label focus l'input.
            C'est aussi essentiel pour l'accessibilité.
            
            v-model="form.name" → liaison bidirectionnelle.
            Quand l'utilisateur tape, form.name se met à jour.
            Quand form.name change (reset), l'input se vide.
            
            required → le navigateur empêche la soumission
            si le champ est vide. C'est la validation HTML native.
          -->
          <div class="form-group">
            <label for="contact-name" class="form-label">Nom</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Votre nom"
              required
            >
          </div>

          <!--
            Champ EMAIL.
            
            type="email" → le navigateur vérifie le format
            (doit contenir @ et un domaine).
            Sur mobile, un clavier email spécial apparaît.
          -->
          <div class="form-group">
            <label for="contact-email" class="form-label">Email</label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="votre@email.com"
              required
            >
          </div>

          <!--
            Champ MESSAGE.
            
            <textarea> est différent de <input> :
            - <input> → une seule ligne
            - <textarea> → plusieurs lignes
            
            rows="5" → hauteur initiale (5 lignes).
          -->
          <div class="form-group">
            <label for="contact-message" class="form-label">Message</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              class="form-input form-textarea"
              placeholder="Votre message..."
              rows="5"
              required
            ></textarea>
          </div>

          <!--
            BOUTON DE SOUMISSION.
            
            :disabled="isSubmitting" → le bouton est grisé
            et non-cliquable pendant l'envoi.
            C'est important pour éviter les doubles soumissions.
            
            v-if / v-else → affichage conditionnel.
            Si isSubmitting est true, on montre "Envoi..."
            Sinon, on montre "Envoyer".
          -->
          <button
            type="submit"
            class="btn btn-primary btn-submit"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>

          <!--
            Message de succès — affiché après la soumission.
            v-if="isSubmitted" → n'existe dans le DOM que si true.
          -->
          <p v-if="isSubmitted" class="form-success">
            ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
          </p>

        </form>

        <!--
          INFOS DE CONTACT — Colonne de droite.
          Cards avec email, téléphone, localisation.
        -->
        <div class="contact-info">

          <div
            v-for="(info, index) in contactInfo"
            :key="info.label"
            class="contact-info-card"
            v-scroll-reveal="{ delay: 200 + index * 100 }"
          >
            <span class="contact-info-icon">{{ info.icon }}</span>
            <div>
              <p class="contact-info-label">{{ info.label }}</p>
              <!--
                Rendu conditionnel avec v-if / v-else :
                - Si info.href existe → on affiche un lien <a>
                - Sinon → on affiche un simple <p>
                
                C'est logique : l'email et le téléphone sont
                cliquables, mais la localisation ne l'est pas.
              -->
              <a
                v-if="info.href"
                :href="info.href"
                class="contact-info-value"
              >
                {{ info.value }}
              </a>
              <p v-else class="contact-info-value">
                {{ info.value }}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!--
    FOOTER — Pied de page.
    <footer> est une balise sémantique HTML5.
    Elle contient les infos de copyright et de crédits.
  -->
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        <span class="text-primary">&lt;</span>
        Conçu et développé par Herman Essoungou — {{ new Date().getFullYear() }}
        <span class="text-primary">/&gt;</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* ============================================
   SOUS-TITRE
   ============================================ */

.contact-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

/* ============================================
   LAYOUT — Grille 2 colonnes
   ============================================ */

/*
  2 colonnes : le formulaire prend 3fr (60%),
  les infos prennent 2fr (40%).
  
  3fr + 2fr = 5 fractions totales.
  3/5 = 60% pour le formulaire.
  2/5 = 40% pour les infos.
*/
.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--space-xl);
  max-width: 1000px;
  margin-inline: auto;
}

/* ============================================
   FORMULAIRE
   ============================================ */

/*
  .form-group → Conteneur pour un label + input.
  C'est un pattern HTML classique pour les formulaires.
*/
.form-group {
  margin-bottom: var(--space-lg);
}

/*
  Le label utilise la police monospace pour
  garder le look développeur.
  display: block → le label prend toute la largeur
  (l'input passe en dessous, pas à côté).
*/
.form-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

/*
  L'input a un fond sombre et une bordure subtile.
  
  width: 100% → prend toute la largeur disponible.
  outline: none → supprime le contour bleu par défaut
  du navigateur au focus (on le remplace par notre propre style).
  
  MAIS on le remplace par un style custom au :focus
  pour maintenir l'accessibilité.
*/
.form-input {
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  outline: none;
  transition: border-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

/*
  PLACEHOLDER — Le texte grisé dans l'input vide.
  On le style pour qu'il soit discret mais lisible.
  
  ::placeholder est un pseudo-élément qui cible
  uniquement le texte placeholder.
*/
.form-input::placeholder {
  color: var(--color-text-muted);
}

/*
  :focus → quand l'utilisateur clique/tabule dans l'input.
  On ajoute une bordure verte + un halo (glow) subtil.
  
  C'est ESSENTIEL pour l'accessibilité :
  les utilisateurs au clavier doivent savoir
  quel champ est actif.
*/
.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(109, 179, 63, 0.15);
}

/*
  Le textarea (zone de texte multiligne).
  resize: vertical → l'utilisateur peut redimensionner
  uniquement en hauteur (pas en largeur).
  min-height → hauteur minimale.
*/
.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/*
  Le bouton de soumission occupe toute la largeur.
  width: 100% → utile sur mobile.
  
  :disabled → style quand le bouton est désactivé
  pendant l'envoi. opacity: 0.6 → grisé.
  cursor: not-allowed → curseur "interdit".
*/
.btn-submit {
  width: 100%;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Message de succès après soumission */
.form-success {
  margin-top: var(--space-md);
  padding: var(--space-md);
  background-color: rgba(109, 179, 63, 0.1);
  border: 1px solid rgba(109, 179, 63, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-primary-light);
  font-size: 0.9rem;
  text-align: center;
}

/* ============================================
   INFOS DE CONTACT — Colonne droite
   ============================================ */

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.contact-info-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-lg);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-normal);
}

.contact-info-card:hover {
  border-color: var(--color-primary);
}

.contact-info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-info-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-xs);
}

.contact-info-value {
  color: var(--color-text);
  font-size: 0.95rem;
}

/* ============================================
   FOOTER — Pied de page
   ============================================ */

.footer {
  padding-block: var(--space-lg);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
