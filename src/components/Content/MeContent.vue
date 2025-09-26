<script setup lang="ts">
  import { inject } from 'vue'
  import LinkButton from '../LinkButton.vue'

  const darkMode = inject('darkMode')

  interface Props {
    activeTab?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    activeTab: 'about-me'
  })

  const updateClipboardContent = inject<(content: string) => void>('updateClipboardContent')

  const handleHover = (content: string) => {
    if (updateClipboardContent) {
      updateClipboardContent(content)
    }
  }
</script>

<template>
  <img
    @mouseenter="handleHover('https://jynovation-live.deno.dev')"
    :src="!darkMode ? '/images/self_b.jpg' : '/screenshots/somethingdangerous.png'"
    alt="profile pic"
    class="w-full h-full object-cover p-1 transition-all duration-300"
    :class="props.activeTab === 'portfolio' ? '' : ''"
  />
            <LinkButton href="https://jynovation-live.deno.dev" />

</template>
