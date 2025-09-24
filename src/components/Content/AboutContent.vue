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
            >ABOUT</span
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
        <p>
          <span class="font-bold">Happily married</span> to the most amazing woman who somehow
          tolerates my bullshit. <span class="italic">She's genuinely incredible</span>
          and way too good for me, but cool enough to not remind me of that fact too often.
        </p>

        <p>
          When I'm not coding (which is pretty rare, admittedly), I'm watching in silent horror the
          slow but gradual rise in authoritarianism around the world, playing video games, and
          wishing we had a pet other then a hedgehog. Is it cute? Sure. <em>I guess.</em> Is it a
          dog? No.
        </p>

        <p>
          Life is busy, weird, slightly terrible all the time, and pretty great. 7 out of 10, would
          recommend to a friend.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
