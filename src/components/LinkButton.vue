<template>
  <a :href="href" :target="target" class="fixed top-5 right-5 z-10 bg-white text-black p-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string
  target?: string
}

withDefaults(defineProps<Props>(), {
  target: '_blank'
})
</script>

<style scoped></style>
