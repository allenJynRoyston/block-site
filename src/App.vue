<script setup lang="ts">
  import { Header, Footer, Body } from './components'
  import { ref, onMounted, onUnmounted, computed, provide, watch } from 'vue'

  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value < 768)

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
  }

  // Dark mode with localStorage persistence
  const getDarkModeFromStorage = () => {
    try {
      const stored = localStorage.getItem('darkMode')
      return stored ? JSON.parse(stored) : false
    } catch (error) {
      console.warn('Error reading darkMode from localStorage:', error)
      return false
    }
  }

  const saveDarkModeToStorage = (value: boolean) => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(value))
    } catch (error) {
      console.warn('Error saving darkMode to localStorage:', error)
    }
  }

  const darkMode = ref(getDarkModeFromStorage())

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    saveDarkModeToStorage(darkMode.value)
  }

  // Clipboard content state
  const clipboardContent = ref('(┛ಠ_ಠ)┛彡┻━┻')

  const updateClipboardContent = (content: string) => {
    clipboardContent.value = content
  }

  // Active tab state
  const activeTab = ref<'about-me' | 'portfolio'>('about-me')

  const setActiveTab = (tab: 'about-me' | 'portfolio') => {
    activeTab.value = tab
  }

  provide('darkMode', darkMode)
  provide('toggleDarkMode', toggleDarkMode)
  provide('isMobile', isMobile)
  provide('windowWidth', windowWidth)
  provide('clipboardContent', clipboardContent)
  provide('updateClipboardContent', updateClipboardContent)
  provide('activeTab', activeTab)
  provide('setActiveTab', setActiveTab)

  // Watch for darkMode changes and save to localStorage
  watch(darkMode, (newValue) => {
    saveDarkModeToStorage(newValue)
  })

  onMounted(() => {
    updateWindowSize()
    setActiveTab(darkMode.value ? 'portfolio' : 'about-me')
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
