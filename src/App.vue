<script setup lang="ts">
  import { Header, Footer, Body } from './components'
  import { ref, onMounted, onUnmounted, computed, provide } from 'vue'

  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value < 768)

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
  }

  const darkMode = ref(false)
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
  }

  provide('darkMode', darkMode)
  provide('toggleDarkMode', toggleDarkMode)
  provide('isMobile', isMobile)
  provide('windowWidth', windowWidth)

  onMounted(() => {
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
  })
</script>

<template>
  <body class="bg-white h-screen" :class="isMobile ? 'overflow-auto' : 'overflow-hidden'">
    <Header />
    <Body />
    <Footer />
  </body>
</template>

<style scoped></style>
