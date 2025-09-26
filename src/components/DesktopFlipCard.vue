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
  <div class="w-full h-full relative overflow-hidden">
    <!-- Front Side - slides out to the left when flipped -->
    <div
      class="absolute inset-0 flex justify-center items-center"
      :class="[isHovered ? frontHoverBg || 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
      :style="{
        transform: isFlipped ? 'translateX(-100%)' : 'translateX(0%)',
        transition: isResizing ? 'none' : 'transform 0.5s ease-in-out',
        zIndex: isFlipped ? 1 : 2,
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

    <!-- Back Side - slides in from the right when flipped -->
    <div
      class="absolute inset-0 flex justify-center items-center"
      :class="[backHoverBg ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
      :style="{
        transform: isFlipped ? 'translateX(0%)' : 'translateX(100%)',
        transition: isResizing ? 'none' : 'transform 0.5s ease-in-out',
        zIndex: isFlipped ? 2 : 1,
      }"
    >
      <slot name="back">
        <!-- Empty fallback - no default content -->
      </slot>
    </div>
  </div>
</template>
