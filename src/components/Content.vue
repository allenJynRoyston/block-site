<script setup lang="ts">
  import { ref, onMounted, onUnmounted, inject, type Ref } from 'vue'
  import { DesktopContent, MobileContent } from '.'

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const containerWidth: Ref<number> = ref(0)
  const containerHeight: Ref<number> = ref(0)

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')

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
    />

    <!-- Mobile Layout -->
    <MobileContent v-else :is-resizing="isResizing" />
  </div>
</template>
