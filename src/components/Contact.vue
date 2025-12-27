<script setup>
</script>

<template>
  <section id="contact" class="py-24 bg-dark-secondary text-center relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
       <div class="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
       <div class="absolute bottom-10 right-10 w-40 h-40 bg-primary/50 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        {{ $t('contact.title_prefix') }} <span class="text-primary">{{ $t('contact.title_suffix') }}</span>
      </h2>
      <p class="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
        {{ $t('contact.text') }}
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        <!-- GitHub -->
        <a href="https://github.com/herman87" target="_blank" class="group flex flex-col items-center justify-center p-6 bg-dark border border-gray-800 rounded-xl hover:border-primary/50 hover:bg-dark/80 transition-all duration-300 hover:-translate-y-1">
          <div class="w-12 h-12 mb-4 text-gray-400 group-hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <span class="font-medium text-gray-300 group-hover:text-primary transition-colors">GitHub</span>
        </a>

        <!-- LinkedIn -->
        <a href="#" class="group flex flex-col items-center justify-center p-6 bg-dark border border-gray-800 rounded-xl hover:border-primary/50 hover:bg-dark/80 transition-all duration-300 hover:-translate-y-1">
          <div class="w-12 h-12 mb-4 text-gray-400 group-hover:text-[#0077b5] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <span class="font-medium text-gray-300 group-hover:text-primary transition-colors">LinkedIn</span>
        </a>

        <!-- Telegram -->
        <a href="#" class="group flex flex-col items-center justify-center p-6 bg-dark border border-gray-800 rounded-xl hover:border-primary/50 hover:bg-dark/80 transition-all duration-300 hover:-translate-y-1">
          <div class="w-12 h-12 mb-4 text-gray-400 group-hover:text-[#229ED9] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M11.944 0c-6.597 0-11.944 5.347-11.944 11.944 0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944 0-6.597-5.347-11.944-11.944-11.944zm6.817 8.169l-2.358 11.112c-.176.791-.643.985-1.304.613l-3.612-2.661-1.742 1.677c-.193.193-.356.356-.729.356l.26-3.676 6.692-6.045c.291-.258-.064-.401-.452-.144l-8.27 5.207-3.566-1.115c-.775-.242-.791-.775.162-1.146l13.945-5.371c.646-.242 1.211.161.974 1.193z"/>
            </svg>
          </div>
          <span class="font-medium text-gray-300 group-hover:text-primary transition-colors">Telegram</span>
        </a>

        <!-- WhatsApp -->
        <a href="#" class="group flex flex-col items-center justify-center p-6 bg-dark border border-gray-800 rounded-xl hover:border-primary/50 hover:bg-dark/80 transition-all duration-300 hover:-translate-y-1">
          <div class="w-12 h-12 mb-4 text-gray-400 group-hover:text-[#25D366] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.893 2.965.893 3.183 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.78-5.937-5.78zm-6.666-6.172c-2.96 0-5.365 2.405-5.365 5.365 0 2.961 2.405 5.365 5.365 5.365 2.96 0 5.366-2.405 5.366-5.365 0-2.96-2.406-5.365-5.366-5.365zm6.602 1.734c4.326.046 7.825 3.585 7.825 7.91 0 2.147-.847 4.106-2.227 5.561l.527 1.92-1.879-.496c-1.309.923-2.924 1.472-4.665 1.472-4.341 0-7.86-3.518-7.86-7.86s3.519-7.86 7.86-7.86v-3.729c-6.398 0-11.589 5.191-11.589 11.589 0 2.181.603 4.223 1.65 5.992l-1.071 3.908 4.026-1.056c1.71 1.002 3.693 1.586 5.807 1.586 6.398 0 11.589-5.191 11.589-11.589 0-6.397-5.191-11.589-11.589-11.589h-3.414z"/>
              <path d="M17.507 14.307l-.941 2.538c-.298.819-1.275 1.296-2.138.995l-3.235-1.171c-.859-.304-1.332-1.29-.993-2.128l.942-2.536c.298-.819 1.275-1.296 2.139-.995l3.235 1.171c.857.303 1.33 1.289.991 2.126z"/>
            </svg>
           </div>
           <span class="font-medium text-gray-300 group-hover:text-primary transition-colors">WhatsApp</span>
        </a>
      </div>

      <footer class="text-gray-600 text-sm border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Herman. Built with <span class="text-gray-500 hover:text-green-500 transition-colors">Vue 3</span> & <span class="text-gray-500 hover:text-cyan-500 transition-colors">Tailwind CSS</span>.</p>
        <p class="mt-2 md:mt-0 opacity-50 text-xs">Designed for impact.</p>
      </footer>
    </div>
  </section>
</template>
