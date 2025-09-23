<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'

  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value < 768)
  const currentYear = computed(() => new Date().getFullYear())
  const scrollPosition = ref(0)

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
  }

  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY
  }

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '📧', url: '#' },
  ]

  onMounted(() => {
    updateWindowSize()
    updateScrollPosition()
    window.addEventListener('resize', updateWindowSize)
    window.addEventListener('scroll', updateScrollPosition)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
    window.removeEventListener('scroll', updateScrollPosition)
  })
</script>

<template>
  <div
    class="w-full border-t-2 border-black bg-white text-black overflow-hidden"
    :class="isMobile ? 'relative' : 'fixed bottom-0'"
    style="z-index: 10"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="flex items-center justify-between p-3">
      <!-- Left: Status Text -->
      <div class="flex-1">
        <h1 class="text-lg font-display font-semibold tracking-wider text-gray-700">
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
            class="text-xl hover:text-cyan-600 transition-colors duration-300 cursor-pointer"
            :title="link.name"
          >
            {{ link.icon }}
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-sm font-sans text-gray-600 border-l border-gray-400 pl-4">
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
          class="text-xl hover:text-cyan-600 transition-colors duration-300 cursor-pointer"
          :title="link.name"
        >
          {{ link.icon }}
        </a>
      </div>

      <!-- Middle: Status -->
      <div class="text-center mb-2">
        <h1 class="text-base font-display font-semibold tracking-wider text-gray-700">
          ✨ Available for projects
        </h1>
      </div>

      <!-- Bottom: Copyright centered -->
      <div class="text-center text-xs font-sans text-gray-600">© {{ currentYear }} Portfolio</div>
    </div>
  </div>
</template>

<style scoped>
  /* Smooth hover effects */
  a {
    transition: all 0.3s ease;
  }

  a:hover {
    transform: translateY(-2px);
  }
</style>
