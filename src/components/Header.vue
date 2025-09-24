<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed, inject } from 'vue'

  const currentTime = ref(new Date())

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

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')
  const toggleDarkMode = inject('toggleDarkMode') as () => void
  const windowWidth = inject('windowWidth')

  onMounted(() => {
    updateTime()
    timeInterval = setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    clearInterval(timeInterval)
  })
</script>

<template>
  <div
    :class="[
      'border-0 border-b-2 bg-gradient-to-r overflow-hidden',
      darkMode ? 'border-white bg-slate-900 text-white' : 'border-black bg-white text-black',
    ]"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="flex items-center justify-between pl-3 py-2">
      <!-- Left: Static Title -->
      <div class="flex-1 flex gap-x-10 items-center">
        <h1
          :class="[
            'text-lg font-display font-extrabold tracking-wide bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm',
            darkMode
              ? 'from-white via-gray-300 to-white'
              : 'from-slate-800 via-gray-700 to-slate-900',
          ]"
        >
          ALLEN "JYN" ROYSTON
        </h1>
        <h2
          :class="[
            'text-sm font-sans font-semibold tracking-wide',
            darkMode ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          FULLSTACK DEVELOPER ⚡ FRONTEND SPECIALIST
        </h2>
      </div>

      <!-- Right: Time & Date -->
      <div class="text-right">
        <div
          :class="[
            'text-sm font-mono font-medium uppercase tracking-wider',
            darkMode ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          {{ formattedDate }} {{ formattedTime }}
        </div>
      </div>

      <!-- Center: Dark Mode Toggle -->
      <div class="flex items-center mr-1 px-2">
        <button
          @click="toggleDarkMode"
          :class="[
            'p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none ',
            darkMode
              ? 'bg-gray-900 hover:bg-gray-600 text-yellow-400'
              : 'bg-white hover:bg-gray-200 text-gray-800',
          ]"
          :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span class="text-xl">{{ darkMode ? '☀️' : '🌙' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div v-else class="p-3">
      <!-- Top: Time & Date centered with Dark Mode Toggle -->
      <div class="flex items-center justify-between mb-2">
        <div class="flex-1"></div>
        <div class="text-center">
          <div
            :class="[
              'text-lg font-mono font-bold drop-shadow-sm',
              darkMode ? 'text-cyan-400' : 'text-cyan-600',
            ]"
          >
            {{ formattedTime }}
          </div>
          <div
            :class="[
              'text-xs font-mono font-medium uppercase tracking-wider',
              darkMode ? 'text-gray-400' : 'text-gray-600',
            ]"
          >
            {{ formattedDate }}
          </div>
        </div>
        <div class="flex-1 flex justify-end">
          <button
            @click="toggleDarkMode"
            :class="[
              'p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50',
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400 focus:ring-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-400',
            ]"
            :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span class="text-lg">{{ darkMode ? '☀️' : '🌙' }}</span>
          </button>
        </div>
      </div>

      <!-- Bottom: Static Title -->
      <div class="text-center">
        <h1
          :class="[
            'text-lg font-display font-extrabold tracking-wide bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm',
            darkMode
              ? 'from-white via-gray-300 to-white'
              : 'from-slate-800 via-gray-700 to-slate-900',
          ]"
        >
          🚀 ALLEN ROYSTON
        </h1>
        <h5
          :class="[
            'text-sm font-sans font-semibold mt-1 tracking-wide',
            darkMode ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          💻 FULLSTACK DEVELOPER ⚡ FRONTEND SPECIALIST
        </h5>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
