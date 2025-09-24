<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed, inject } from 'vue'

  const currentYear = computed(() => new Date().getFullYear())

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')
  const windowWidth = inject('windowWidth')

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '📧', url: '#' },
  ]
</script>

<template>
  <div
    :class="[
      'w-full border-t-2 overflow-hidden z-50',
      isMobile ? 'relative' : 'fixed bottom-0',
      darkMode ? 'border-white bg-slate-900 text-white' : 'border-black bg-white text-black',
    ]"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="flex items-center justify-between p-3">
      <!-- Left: Status Text -->
      <div class="flex-1">
        <h1
          :class="[
            'text-lg font-display font-semibold tracking-wider',
            darkMode ? 'text-gray-300' : 'text-gray-700',
          ]"
        >
          ✨ Currently available for freelance projects
        </h1>
      </div>

      <!-- Right: Social Links & Copyright -->
      <div class="ml-6 flex items-center space-x-4">
        <!-- Social Icons -->
        <div class="flex space-x-2">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :class="[
              'text-xl transition-colors duration-300 cursor-pointer',
              darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600',
            ]"
            :title="link.name"
          >
            {{ link.icon }}
          </a>
        </div>

        <!-- Copyright -->
        <div
          :class="[
            'text-sm font-sans border-l pl-4',
            darkMode ? 'text-gray-400 border-gray-600' : 'text-gray-600 border-gray-400',
          ]"
        >
          © {{ currentYear }}
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div v-else class="p-3">
      <!-- Top: Social Links centered -->
      <div class="flex justify-center space-x-4 mb-2">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :class="[
            'text-xl transition-colors duration-300 cursor-pointer',
            darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600',
          ]"
          :title="link.name"
        >
          {{ link.icon }}
        </a>
      </div>

      <!-- Middle: Status -->
      <div class="text-center mb-2">
        <h1
          :class="[
            'text-base font-display font-semibold tracking-wider',
            darkMode ? 'text-gray-300' : 'text-gray-700',
          ]"
        >
          ✨ Available for projects
        </h1>
      </div>

      <!-- Bottom: Copyright centered -->
      <div :class="['text-center text-xs font-sans', darkMode ? 'text-gray-400' : 'text-gray-600']">
        © {{ currentYear }} Portfolio
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Smooth hover effects */
  a {
    transition: all 0.3s ease;
  }

  a:hover {
    transform: translateY(-5px);
  }
</style>
