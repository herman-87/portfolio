<script setup>
</script>

<template>
  <section id="contact" class="py-24 bg-gradient-to-b from-dark to-dark-secondary text-center relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-10 pointer-events-none">
       <div class="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
       <div class="absolute bottom-10 right-10 w-64 h-64 bg-primary/40 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        {{ $t('contact.title_prefix') }} <span class="text-primary">{{ $t('contact.title_suffix') }}</span>
      </h2>
      <p class="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
        {{ $t('contact.text') }}
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <!-- Email -->
        <a href="mailto:herman87@example.com" class="group flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <div class="w-16 h-16 mb-6 text-gray-400 group-hover:text-primary transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <span class="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">Email Me</span>
          <span class="text-sm text-gray-500 mt-2">Get in touch directly</span>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/herman87" target="_blank" class="group flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <div class="w-16 h-16 mb-6 text-gray-400 group-hover:text-white transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <span class="text-lg font-bold text-gray-300 group-hover:text-primary transition-colors">GitHub</span>
          <span class="text-sm text-gray-500 mt-2">Check my code</span>
        </a>

        <!-- LinkedIn -->
        <a href="#" class="group flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <div class="w-16 h-16 mb-6 text-gray-400 group-hover:text-[#0077b5] transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <span class="text-lg font-bold text-gray-300 group-hover:text-primary transition-colors">LinkedIn</span>
          <span class="text-sm text-gray-500 mt-2">Connect with me</span>
        </a>

        <!-- Telegram -->
        <a href="#" class="group flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <div class="w-16 h-16 mb-6 text-gray-400 group-hover:text-[#229ED9] transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M11.944 0c-6.597 0-11.944 5.347-11.944 11.944 0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944 0-6.597-5.347-11.944-11.944-11.944zm6.817 8.169l-2.358 11.112c-.176.791-.643.985-1.304.613l-3.612-2.661-1.742 1.677c-.193.193-.356.356-.729.356l.26-3.676 6.692-6.045c.291-.258-.064-.401-.452-.144l-8.27 5.207-3.566-1.115c-.775-.242-.791-.775.162-1.146l13.945-5.371c.646-.242 1.211.161.974 1.193z"/>
            </svg>
          </div>
          <span class="text-lg font-bold text-gray-300 group-hover:text-primary transition-colors">Telegram</span>
          <span class="text-sm text-gray-500 mt-2">Chat with me</span>
        </a>
      </div>

      <footer class="text-gray-600 text-sm border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Herman. Built with <span class="text-gray-500 hover:text-green-500 transition-colors">Vue 3</span> & <span class="text-gray-500 hover:text-cyan-500 transition-colors">Tailwind CSS</span>.</p>
        <p class="mt-2 md:mt-0 opacity-50 text-xs">Designed for impact.</p>
      </footer>
    </div>
  </section>
</template>
