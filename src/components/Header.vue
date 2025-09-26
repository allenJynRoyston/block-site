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
  const activeTab = inject('activeTab')
  const setActiveTab = inject('setActiveTab') as (tab: 'about-me' | 'portfolio') => void

  // Functions to set dark mode and active tab
  const setLightMode = () => {
    setActiveTab('about-me')
    if (darkMode.value === true) {
      toggleDarkMode()
    }
  }

  const setDarkMode = () => {
    setActiveTab('portfolio')
    if (darkMode.value === false) {
      toggleDarkMode()
    }
  }

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
      'border-0 border-b-2 bg-gradient-to-r overflow-hidden py-5',
      darkMode ? 'border-white bg-slate-900 text-white' : 'border-black bg-white text-black',
    ]"
  >
    <!-- Desktop Layout -->
    <div v-if="!isMobile" class="relative flex items-center pl-3 py-2">
      <!-- Left: Folder Tabs flush to left -->
      <div class="flex gap-4 items-center">

        <!-- Folder Tab - ACTIVE (Hollow) -->
        <div class="relative left-3.5 cursor-pointer" @click="setLightMode">
          <div
            class="px-4 py-2 rounded-t-lg border-t-2 border-l-2 border-r-2 shadow-lg absolute -top-5 min-h-[100px] w-[165px]"
            :class="[
              darkMode
                    ? 'bg-transparent text-white border-white'
                    : 'bg-white text-black border-black'
            ]"
          >
            <!-- Tab notch effect -->
            <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-transparent">
              <div
                :class="[
                  'absolute bottom-0 right-0 w-4 h-4 rounded-bl-full',
                  darkMode
                    ? 'border-r-2 border-b-2 border-white'
                    : 'border-r-2 border-b-2 border-black'
                ]"
              ></div>
            </div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 bg-transparent">
              <div
                :class="[
                  'absolute bottom-0 left-0 w-4 h-4 rounded-br-full',
                  darkMode
                    ? 'border-l-2 border-b-2 border-white'
                    : 'border-l-2 border-b-2 border-black'
                ]"
              ></div>
            </div>

            <div class="flex justify-center items-center gap-2">

              <h2
                class= 'text-sm font-sans font-semibold tracking-wide'
                :class="[darkMode ? 'text-white' : 'text-black']"
              >
                ABOUT ME
              </h2>

            </div>
          </div>
        </div>

        <!-- Folder Tab -->
        <div class="relative left-[170px] cursor-pointer" @click="setDarkMode">
          <div
            class="px-4 py-2 rounded-t-lg border-t-2 border-l-2 border-r-2 shadow-lg absolute -top-5 min-h-[100px] w-[165px]"
            :class="[
              darkMode
                    ? 'bg-white text-black border-black'
                    : 'bg-black text-white border-white'
            ]"
          >
                      <!-- Tab notch effect -->
            <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-transparent">
              <div class="absolute bottom-0 right-0 w-4 h-4 bg-black rounded-bl-full"></div>
            </div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 bg-transparent">
              <div class="absolute bottom-0 left-0 w-4 h-4 bg-black rounded-br-full"></div>
            </div>

            <div class="flex justify-center items-center gap-2">

              <h2
                class= 'text-sm font-sans font-semibold tracking-wide'
                :class="[darkMode ? 'text-black' : 'text-white']"
              >
                PORTFOLIO
              </h2>

            </div>
          </div>
        </div>
      </div>

      <!-- Center: Name -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <h1
          :class="[
            'text-lg font-mono font-medium uppercase tracking-wider',
            darkMode ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          ALLEN "JYN" ROYSTON
        </h1>
      </div>

      <!-- Right: Time & Date - flush right -->
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
        <div
          :class="[
            'text-sm font-mono font-medium uppercase tracking-wider text-right',
            darkMode ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          {{ formattedDate }} {{ formattedTime }}
        </div>
      </div>


    </div>

    <!-- Mobile Layout -->
    <div v-else class="p-3 py-10">

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
          ALLEN ROYSTON
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
