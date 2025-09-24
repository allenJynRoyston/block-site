<script setup lang="ts">
  import { inject } from 'vue'

  const darkMode = inject('darkMode')
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
            >GAME DEVELOPER</span
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
        :class="darkMode ? 'text-white' : 'text-gray-800/90'"
      >
        <p>
          <span class="font-bold">Aspiring game developer</span>
          <span class="opacity-75"> (emphasis on "aspiring") </span> with
          <span class="line-through">a graveyard of abandoned</span>
          <span class="italic"> lovingly archived</span> projects. I've successfully mastered the
          art of starting 12 different game concepts and finishing exactly
          <span class="font-medium">zero</span> of them.
        </p>

        <p>
          My specialty is spending 3 weeks perfecting some mechanic, 2 months designing the
          "perfect" inventory system, and then moving on to something else and having to redo it all
          anyway because I forgot how it worked.
        </p>

        <p>
          Currently 2 years into a game idea while optimistically telling myself this one will be
          different. Spoiler alert: <span class="italic">it won't be</span>. But hey, failure is
          still progress, right?
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
