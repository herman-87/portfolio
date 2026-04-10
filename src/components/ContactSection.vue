<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const contactInfo = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    label: 'Email',
    value: 'hermanessoungou@gmail.com',
    href: 'mailto:hermanessoungou@gmail.com'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    label: 'Téléphone',
    value: '+237 671 952 927',
    href: 'tel:+237671952927'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
    label: 'LinkedIn',
    value: 'Essoungou Herman',
    href: 'https://www.linkedin.com/in/essoungou-herman-40776723b'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
    label: 'Localisation',
    value: 'Douala, Logpom',
    href: null
  }
]

async function handleSubmit() {
  isSubmitting.value = true

  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Formulaire soumis :', { ...form })

  form.name = ''
  form.email = ''
  form.message = ''

  isSubmitting.value = false
  isSubmitted.value = true

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

      <div class="contact-grid">

        <form class="contact-form" @submit.prevent="handleSubmit" v-scroll-reveal="{ delay: 100 }">

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

          <button
            type="submit"
            class="btn btn-primary btn-submit"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>

          <p v-if="isSubmitted" class="form-success">
            ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
          </p>

        </form>

        <div class="contact-info">

          <div
            v-for="(info, index) in contactInfo"
            :key="info.label"
            class="contact-info-card"
            v-scroll-reveal="{ delay: 200 + index * 100 }"
          >
            <div class="contact-info-icon" v-html="info.icon"></div>
            <div>
              <p class="contact-info-label">{{ info.label }}</p>
              <a
                v-if="info.href"
                :href="info.href"
                :target="info.href.startsWith('http') ? '_blank' : '_self'"
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

        <a 
          href="/CV_Herman_Essoungou.pdf" 
          download="CV_Herman_Essoungou.pdf" 
          class="btn btn-outline cv-btn"
          v-scroll-reveal="{ delay: 500 }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          Télécharger mon CV
        </a>

      </div>

    </div>
  </section>

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

.contact-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: var(--space-xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--space-xl);
  max-width: 1000px;
  margin-inline: auto;
}

.form-group {
  margin-bottom: var(--space-lg);
}

.form-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

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

.form-input::placeholder {
  color: var(--color-text-muted);
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(109, 179, 63, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  padding-block: 1rem;
  font-size: 1rem;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(109, 179, 63, 0.1);
  color: var(--color-primary);
}

.contact-info-icon :deep(svg) {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
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
  word-break: break-all;
}

.cv-btn {
  width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;
}

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

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
