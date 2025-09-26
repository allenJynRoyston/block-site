<script setup lang="ts">
  import { inject, computed } from 'vue'
  import LinkButton from '../LinkButton.vue'


  interface Props {
    activeTab?: string
  }

  const darkMode = inject('darkMode')

  const props = withDefaults(defineProps<Props>(), {
    activeTab: 'about-me'
  })

  const title = computed(() => {
    return props.activeTab === 'portfolio' ? 'ITEM 2' : 'ABOUT'
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
    <div class="relative z-10 max-w-full">
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
            >{{ title }}</span
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
        :class="darkMode ? 'text-white' : 'text-black'"
      >
        <div v-if="props.activeTab === 'portfolio'">
          <div class="relative" v-if="props.activeTab === 'portfolio'">
            <img @mouseenter="handleHover('https://metafy.gg')" src="/screenshots/metafy.png" alt="Startup GIF" class="w-full h-full object-cover fixed top-0 left-0" />
            <LinkButton href="https://metafy.gg" />

          </div>
        </div>
        <div v-else>
          <p>
            <span class="font-bold">Happily married</span> to the most amazing woman who is just, like, <em>really cool you guys</em>.  I love her so much; shes so much fun to be with and I just consider myself incredibly lucky to wake up next to her everyday.
          </p>
          <br></br>
          <p>In my free time, I enjoy longboarding, jogging, and making video games.</p>
          <br></br>
          <p>
            Life is busy, weird, slightly terrible all the time, but pretty great. 7 out of 10, would
            recommend to a friend.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
