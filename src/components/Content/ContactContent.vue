<script setup lang="ts">
  import { inject } from 'vue'

  const darkMode = inject('darkMode')
  const updateClipboardContent = inject<(content: string) => void>('updateClipboardContent')

  // Contact information
  const contactInfo = {
    email: 'allen.royston.uk@gmail.com',
    linkedin: 'https://www.linkedin.com/in/allen-royston/',
    github: 'https://github.com/allenJynRoyston',
  }

  // Update footer on hover
  const handleHover = (content: string) => {
    if (updateClipboardContent) {
      updateClipboardContent(content)
    }
  }
</script>
<template>
  <div
    class="flex flex-col justify-start items-center mt-10 p-2 w-full h-full relative overflow-hidden"
  >
    <!-- Main Content -->
    <div class="relative z-10 max-w-full min-w-[400px]">
      <!-- Header -->
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-3">
          <div
            :class="
              darkMode
                ? 'h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent flex-1'
                : 'h-px bg-gradient-to-r from-black via-gray-600 to-transparent flex-1'
            "
          ></div>
          <span
            :class="
              darkMode ? 'text-xs text-cyan-400/80 font-mono' : 'text-xs text-black/80 font-mono'
            "
            >CONTACT</span
          >
          <div
            :class="
              darkMode
                ? 'h-px bg-gradient-to-l from-cyan-400 via-blue-400 to-transparent flex-1'
                : 'h-px bg-gradient-to-l from-black via-gray-600 to-transparent flex-1'
            "
          ></div>
        </div>
      </div>

      <!-- Contact Icons -->
      <div class="grid grid-cols-3 gap-6 mt-2">
        <!-- Email -->
        <div
          class="flex flex-col items-center group cursor-pointer"
          @mouseenter="handleHover(contactInfo.email)"
        >
          <div
            class="w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-200 relative"
            :class="
              darkMode
                ? 'border-orange-500/50 hover:border-orange-400 group-hover:bg-orange-900/20 bg-orange-950/10'
                : 'border-gray-400 hover:border-black group-hover:bg-gray-100/50'
            "
          >
            <svg
              class="w-6 h-6"
              :class="
                darkMode
                  ? 'text-orange-400 group-hover:text-orange-300'
                  : 'text-gray-600 group-hover:text-black'
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <span
            class="text-xs font-mono mt-2 transition-colors duration-200"
            :class="
              darkMode
                ? 'text-orange-400/70 group-hover:text-orange-300'
                : 'text-gray-600 opacity-60'
            "
            >EMAIL</span
          >
        </div>

        <!-- LinkedIn -->
        <div
          class="flex flex-col items-center group cursor-pointer"
          @mouseenter="handleHover(contactInfo.linkedin)"
        >
          <div
            class="w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-200"
            :class="
              darkMode
                ? 'border-orange-500/50 bg-orange-950/10 hover:border-orange-400 group-hover:bg-orange-900/20'
                : 'border-gray-400 hover:border-black group-hover:bg-gray-100/50'
            "
          >
            <svg
              class="w-6 h-6"
              :class="
                darkMode
                  ? 'text-orange-400 group-hover:text-orange-300'
                  : 'text-gray-600 group-hover:text-black'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              ></path>
            </svg>
          </div>
          <span
            class="text-xs font-mono mt-2 transition-colors duration-200"
            :class="
              darkMode
                ? 'text-orange-400/70 group-hover:text-orange-300'
                : 'text-gray-600 opacity-60'
            "
            >LINKEDIN</span
          >
        </div>

        <!-- GitHub -->
        <div
          class="flex flex-col items-center group cursor-pointer"
          @mouseenter="handleHover(contactInfo.github)"
        >
          <div
            class="w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-200"
            :class="
              darkMode
                ? 'border-orange-500/50 bg-orange-950/10 hover:border-orange-400 group-hover:bg-orange-900/20'
                : 'border-gray-400 hover:border-black group-hover:bg-gray-100/50'
            "
          >
            <svg
              class="w-6 h-6"
              :class="
                darkMode
                  ? 'text-orange-400 group-hover:text-orange-300'
                  : 'text-gray-600 group-hover:text-black'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
          </div>
          <span
            class="text-xs font-mono mt-2 transition-colors duration-200"
            :class="
              darkMode
                ? 'text-orange-400/70 group-hover:text-orange-300'
                : 'text-gray-600 opacity-60'
            "
            >GITHUB</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
