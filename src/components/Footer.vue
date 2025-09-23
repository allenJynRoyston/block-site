<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'

  const name: String = 'World'
  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value < 768)

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
  })
</script>

<template>
  <div
    class="p-2 overflow-hidden z-2 w-full bg-gray-800 text-white"
    :class="isMobile ? 'relative' : 'fixed bottom-0'"
  >
    <h1 class="animate-marquee whitespace-nowrap text-xl font-bold">
      BASIC TEXT GOES HERE {{ name }}!
    </h1>
  </div>
</template>
