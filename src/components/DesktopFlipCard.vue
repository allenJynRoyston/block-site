<script setup lang="ts">
  import { inject } from 'vue'

  // Props for the flip card
  defineProps<{
    isFlipped: boolean
    isHovered: boolean
    isResizing: boolean
    frontTitle?: string
    frontHoverBg?: string
    backHoverBg?: string
  }>()

  // Inject dark mode from parent
  const darkMode = inject('darkMode')
</script>

<template>
  <div
    class="w-full h-full relative"
    :style="{
      transformStyle: 'preserve-3d',
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      transition: 'transform 0.6s ease-in-out',
    }"
  >
    <!-- Front Side -->
    <div
      class="absolute inset-0 flex justify-center items-center"
      :class="[isHovered ? frontHoverBg || 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
      :style="{
        backfaceVisibility: 'hidden',
      }"
    >
      <slot name="front">
        <h1
          class="text-3xl font-display font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            isHovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
          ]"
        >
          {{ frontTitle || 'TITLE' }}
        </h1>
      </slot>
    </div>

    <!-- Back Side -->
    <div
      class="absolute inset-0 flex justify-center items-center"
      :class="[backHoverBg ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
      :style="{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
      }"
    >
      <slot name="back">
        <!-- Empty fallback - no default content -->
      </slot>
    </div>
  </div>
</template>
