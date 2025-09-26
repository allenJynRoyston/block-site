<script setup lang="ts">
  import { inject, computed } from 'vue'
  import LinkButton from '../LinkButton.vue'

  // Props from parent
  const props = defineProps<{
    activeTab: string
  }>()

  const darkMode = inject('darkMode')

  const content = computed(() => {
    if (props.activeTab === 'portfolio') {
      return {
        title: 'STARTUPS'
      }
    } else {
      return {
        title: 'WEB DEVELOPER',
      }
    }
  })

   const updateClipboardContent = inject<(content: string) => void>('updateClipboardContent')

  const handleHover = (content: string) => {
    if (updateClipboardContent) {
      updateClipboardContent(content)
    }
  }
</script>
<template>
  <div class="flex flex-col justify-center items-start p-6 w-full h-full relative overflow-hidden">
    <!-- Background Effects -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10"
    ></div>
    <div
      class="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-xl"
    ></div>
    <div
      class="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-lg"
    ></div>

    <!-- Main Content -->
    <div class="relative z-10 min-w-full">
      <!-- Header -->
      <div class="mb-4 w-full">
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
            >{{ content.title }}</span
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

      <!-- Summary Text -->
      <div
        class="space-y-3 text-sm leading-relaxed font-serif"
        :class="darkMode ? 'text-white/90' : 'text-gray-800/90'"
      >
        <div v-if="props.activeTab === 'about-me'">
          Full-stack developer here (I mean c'mon aren't we all now?) with a passion for
          crafting elegant solutions to complex problems.
          <br></br>
          <br></br>
          I specialize in modern web technologies and have a deep love for building seamless
          frontend experiences. Like many in my position, I'm silently panicking about how AI is going to
          definately kill us all, frantically scrolling through shitty LinkedIn job postings, and honestly
          the whole situation in the tech industry is all just very upsetting right now.
          <br></br>
          <br></br>
          All that being said, I still <span class="text-red-500">fucking love to code</span>.
        </div>
        <div class="relative" v-if="props.activeTab === 'portfolio'">
          <img @mouseenter="handleHover('https://fountech.ai')" src="/screenshots/fountech.png" alt="Startup GIF" class="w-full h-full object-cover fixed top-0 left-0" />
          <LinkButton href="https://fountech.ai" />

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
