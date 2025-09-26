<script setup lang="ts">
  import { ref, onMounted, onUnmounted, inject, type Ref } from 'vue'
  import { DesktopContent, MobileContent } from '.'

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const containerWidth: Ref<number> = ref(0)
  const containerHeight: Ref<number> = ref(0)

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')
  const activeTab = inject('activeTab') as string
  const setActiveTab = inject('setActiveTab') as (tab: 'about-me' | 'portfolio') => void
  const toggleDarkMode = inject('toggleDarkMode') as () => void

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

  const isResizing: Ref<boolean> = ref(false)

  // Check if screen is tablet size or smaller (768px breakpoint)
  let resizeTimeout: number | null = null

  const updateContainerSize = () => {
    if (containerRef.value) {
      isResizing.value = true
      containerWidth.value = containerRef.value.clientWidth
      containerHeight.value = containerRef.value.clientHeight

      // Clear existing timeout
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }

      // Set resizing to false after resize stops
      resizeTimeout = setTimeout(() => {
        isResizing.value = false
      }, 100)
    }
  }

  onMounted(() => {
    setTimeout(() => {
      updateContainerSize()
    }, 1)
    window.addEventListener('resize', updateContainerSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateContainerSize)
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }
  })
</script>

<template>
  <div
    ref="containerRef"
    :class="['w-full min-h-full relative', darkMode ? 'bg-slate-900' : 'bg-white']"
  >

    <!-- Desktop Layout -->
    <DesktopContent
      v-if="!isMobile"
      :container-width="containerWidth"
      :container-height="containerHeight"
      :is-resizing="isResizing"
      :active-tab="activeTab"
    />

    <!-- Mobile Layout -->
    <MobileContent
      v-else
      :is-resizing="isResizing"
      :active-tab="activeTab"
    />

    <!-- Mobile Tab Buttons - positioned before the list -->
    <div v-if="isMobile" class="absolute -top-[27px] left-1/2 transform -translate-x-1/2 z-10 flex justify-center gap-2">
      <button
        @click="setLightMode"
        class="px-3 py-1 text-xs font-semibold rounded-t-md border-t border-l border-r shadow-sm transition-all duration-200"
        :class="[
          activeTab === 'about-me'
            ? (darkMode ? 'bg-transparent text-white border-white' : 'bg-white text-black border-black')
            : (darkMode ? 'bg-transparent text-gray-400 border-gray-400' : 'bg-gray-100 text-gray-600 border-gray-600')
        ]"
      >
        ABOUT ME
      </button>
      <button
        @click="setDarkMode"
        class="px-3 py-1 text-xs font-semibold rounded-t-md border-t border-l border-r shadow-sm transition-all duration-200"
        :class="[
          activeTab === 'portfolio'
            ? (darkMode ? 'bg-white text-black border-black' : 'bg-black text-white border-white')
            : (darkMode ? 'bg-gray-700 text-gray-400 border-gray-400' : 'bg-gray-200 text-gray-600 border-gray-600')
        ]"
      >
        PORTFOLIO
      </button>
    </div>
  </div>
</template>
