<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'

  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value < 768)
  const currentTime = ref(new Date())

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
  }

  const updateTime = () => {
    currentTime.value = new Date()
  }

  const formattedTime = computed(() => {
    return currentTime.value.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })
  })

  const formattedDate = computed(() => {
    return currentTime.value.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  })

  let timeInterval: number

  onMounted(() => {
    updateWindowSize()
    updateTime()
    window.addEventListener('resize', updateWindowSize)
    timeInterval = setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
    clearInterval(timeInterval)
  })
</script>

<template>
  <div
    class="border-0 border-b-2 border-black bg-gradient-to-r bg-white text-black overflow-hidden"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="flex items-center justify-between p-3">
      <!-- Left: Static Title -->
      <div class="flex-1 flex gap-x-10 items-center">
        <h1
          class="text-lg font-display font-extrabold tracking-wide bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent drop-shadow-sm"
        >
          ALLEN "JYN" ROYSTON
        </h1>
        <h2 class="text-sm font-sans font-semibold text-gray-600 tracking-wide">
          FULLSTACK DEVELOPER ⚡ FRONTEND SPECIALIST
        </h2>
      </div>

      <!-- Right: Time & Date -->
      <div class="ml-6 text-right">
        <div class="text-sm font-mono font-medium text-gray-600 uppercase tracking-wider">
          {{ formattedDate }} {{ formattedTime }}
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div v-else class="p-3">
      <!-- Bottom: Static Title -->
      <div class="text-center">
        <h1
          class="text-lg font-display font-extrabold tracking-wide bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent drop-shadow-sm"
        >
          🚀 ALLEN ROYSTON
        </h1>
        <h5 class="text-sm font-sans font-semibold text-gray-600 mt-1 tracking-wide">
          💻 FULLSTACK DEVELOPER ⚡ FRONTEND SPECIALIST
        </h5>
      </div>

      <!-- Top: Time & Date centered -->
      <div class="text-center mb-2">
        <div class="text-lg font-mono font-bold text-cyan-600 drop-shadow-sm">
          {{ formattedTime }}
        </div>
        <div class="text-xs font-mono font-medium text-gray-600 uppercase tracking-wider">
          {{ formattedDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
