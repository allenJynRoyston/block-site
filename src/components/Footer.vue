<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed, inject } from 'vue'

  const currentYear = computed(() => new Date().getFullYear())

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')
  const clipboardContent = inject<any>('clipboardContent')

  // Clipboard functionality
  const showCopiedSplash = ref(false)

  const handleClick = async () => {
    if (!clipboardContent?.value || clipboardContent.value === '') return

    // Check if it's an email (copy to clipboard)
    if (clipboardContent.value.includes('@') && !clipboardContent.value.startsWith('http')) {
      try {
        await navigator.clipboard.writeText(clipboardContent.value)
        showCopiedSplash.value = true
        setTimeout(() => {
          showCopiedSplash.value = false
        }, 1500)
      } catch (err) {
        console.error('Failed to copy text: ', err)
      }
    }
    // If it's a URL (including YouTube links), navigate to it
    else if (clipboardContent.value.startsWith('http')) {
      window.open(clipboardContent.value, '_blank')
    }
  }
</script>

<template>
  <div
    :class="[
      'w-full border-t-2 overflow-hidden z-50',
      isMobile ? 'relative' : 'fixed bottom-0',
      darkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black',
    ]"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="flex items-center justify-between p-3 relative">
      <!-- Left: Status Text -->
      <div class="flex-1 relative">
        <div
          class="flex items-center gap-2 cursor-pointer group transition-all duration-200 hover:bg-opacity-10 rounded px-2 py-1 -mx-2 -my-1"
          :class="darkMode ? 'hover:bg-white' : 'hover:bg-black'"
          @click="handleClick"
        >
          <!-- Dynamic Icon -->
          <svg
            class="w-4 h-4 transition-colors duration-200"
            :class="[
              darkMode
                ? 'text-gray-400 group-hover:text-white'
                : 'text-gray-600 group-hover:text-black',
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <!-- Copy Icon for Email -->
            <path
              v-if="clipboardContent && clipboardContent.includes('@')"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
            <!-- External Link Icon for URLs -->
            <path
              v-else-if="clipboardContent && clipboardContent.startsWith('http')"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
            <!-- Default Icon -->
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <!-- Text Content -->
          <h1
            :class="[
              'text-lg font-display font-semibold tracking-wider transition-colors duration-200',
              darkMode
                ? 'text-gray-300 group-hover:text-white'
                : 'text-gray-700 group-hover:text-black',
            ]"
          >
            {{ clipboardContent }}
          </h1>
        </div>

        <!-- Copied Splash -->
        <div
          v-if="showCopiedSplash"
          class="absolute right-0 top-0 flex items-center gap-2 px-3 py-1 rounded-lg"
          :class="darkMode ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm font-medium">Copied!</span>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div v-else class="p-3">
      <!-- Top: Social Links centered -->
      <div class="flex justify-center space-x-4 mb-2"></div>

      <!-- Middle: Status -->
      <div class="text-center mb-2">
        <h1
          :class="[
            'text-base font-display font-semibold tracking-wider',
            darkMode ? 'text-gray-300' : 'text-gray-700',
          ]"
        >
          Desktop version looks cooler just sayin'
        </h1>
      </div>

      <!-- Bottom: Copyright centered -->
      <div :class="['text-center text-xs font-sans', darkMode ? 'text-gray-400' : 'text-gray-600']">
        © {{ currentYear }} Allen Royston
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
