<script setup lang="ts">
  import { inject } from 'vue'

  const darkMode = inject('darkMode')
  const updateClipboardContent = inject<(content: string) => void>('updateClipboardContent')

  // Handle hover for the link
  const handleLinkHover = (url: string) => {
    if (updateClipboardContent) {
      updateClipboardContent(url)
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
            >WEB DEVELOPER</span
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
        <p>
          <span class="font-bold">Full-stack developer here</span>
          <span class="opacity-75"> (I mean c'mon aren't we all now?) </span> with a
          <span class="line-through">the tech industry is on fire fuck fuck</span> passion for
          crafting <span class="italic">elegant solutions</span> to complex problems.
        </p>
        <p>
          I specialize in modern web technologies and have a deep love for building seamless
          frontend experiences. Like many in my position, I'm silently panicking about how AI is going to
          <span class="line-through">definately</span> <span class="line-through text-red-500">if we're lucky</span> kill us all, frantically
          scrolling through shitty LinkedIn job postings, and honestly the whole situation in the
          tech industry is all just very upsetting right now.
        </p>

        <p>All that being said, I still fucking love to code.</p>
        <br></br>
        <a class="cursor-pointer hover:underline transition-all duration-200"
          @mouseenter="handleLinkHover('https://jynovation-live.deno.dev')">
          (Here's a link to my other stuff.)
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
