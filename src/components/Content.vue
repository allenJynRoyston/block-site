<script setup lang="ts">
  import { ref, onMounted, onUnmounted, type Ref, computed } from 'vue'

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const containerWidth: Ref<number> = ref(0)
  const containerHeight: Ref<number> = ref(0)
  const shiftSize: number = 150
  const growSize: number = 100
  const box5GrowSize: number = growSize * 2 // Box 5 grows 2x as much
  const isResizing: Ref<boolean> = ref(false)

  const box1Hovered = ref(false)
  const box2Hovered = ref(false)
  const box3Hovered = ref(false)
  const box4Hovered = ref(false)
  const box5Hovered = ref(false)

  // Check if screen is tablet size or smaller (768px breakpoint)
  const isMobile = computed(() => containerWidth.value < 768)

  let resizeTimeout: number | null = null

  const updateContainerSize = () => {
    if (containerRef.value) {
      isResizing.value = true
      containerWidth.value = containerRef.value.clientWidth
      containerHeight.value = containerRef.value.clientHeight

      // Clear existing timeout
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }

      // Set resizing to false after resize stops
      resizeTimeout = setTimeout(() => {
        isResizing.value = false
      }, 100)
    }
  }

  onMounted(() => {
    setTimeout(() => {
      updateContainerSize()
    }, 1)
    window.addEventListener('resize', updateContainerSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateContainerSize)
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }
  })
</script>

<template>
  <div ref="containerRef" class="w-full min-h-full bg-black relative">
    <!-- Desktop Layout: Complex box layout -->
    <div v-if="!isMobile" class="w-full h-full">
      <!-- Box 1: Left edge, grows in height when box5 hovered -->
      <div
        class="absolute cursor-pointer border-r-2 border-black flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box1Hovered
            ? 'bg-gradient-to-br from-amber-300 via-orange-500 to-pink-700'
            : 'bg-gradient-to-br from-amber-50 via-orange-100 to-pink-100',
        ]"
        :style="{
          height: `${containerHeight / 2 + shiftSize / 2 - (box4Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          top: '0px',
          left: '0px',
        }"
        @mouseenter="box1Hovered = true"
        @mouseleave="box1Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box1Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          WORK
        </h1>
      </div>

      <!-- Box 2: Top right corner, grows to the left when box5 hovered -->
      <div
        class="absolute cursor-pointer border-b-2 border-black flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box2Hovered
            ? 'bg-gradient-to-br from-sky-300 via-cyan-500 to-blue-800'
            : 'bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-100',
        ]"
        :style="{
          height: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 + shiftSize - (box1Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          top: '0px',
          left: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
        }"
        @mouseenter="box2Hovered = true"
        @mouseleave="box2Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box2Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          ABOUT
        </h1>
      </div>

      <!-- Box 3: Bottom right corner, fills gap upwards when box5 hovered -->
      <div
        class="absolute cursor-pointer border-l-2 border-black flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box3Hovered
            ? 'bg-gradient-to-br from-lime-300 via-emerald-500 to-teal-800'
            : 'bg-gradient-to-br from-lime-50 via-emerald-100 to-teal-100',
        ]"
        :style="{
          height: `${containerHeight / 2 + shiftSize - (box2Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 - shiftSize + (box3Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          top: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          left: `${containerWidth / 2 + shiftSize - (box3Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
        }"
        @mouseenter="box3Hovered = true"
        @mouseleave="box3Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box3Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          SOCIAL
        </h1>
      </div>

      <!-- Box 4: Bottom left corner, fills width gap when box5 hovered -->
      <div
        class="absolute cursor-pointer border-t-2 border-black flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box4Hovered
            ? 'bg-gradient-to-br from-pink-300 via-rose-500 to-red-800'
            : 'bg-gradient-to-br from-pink-50 via-rose-100 to-red-100',
        ]"
        :style="{
          height: `${containerHeight / 2 - shiftSize + (box4Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 + shiftSize - (box3Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          top: `${containerHeight / 2 + shiftSize / 2 - (box4Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          left: '0px',
        }"
        @mouseenter="box4Hovered = true"
        @mouseleave="box4Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box4Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          CONTACT
        </h1>
      </div>

      <!-- Box 5: Center - grows 2x when hovered -->
      <div
        class="absolute cursor-pointer flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box5Hovered
            ? 'bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900'
            : 'bg-gradient-to-br from-purple-50 via-violet-100 to-indigo-100',
        ]"
        :style="{
          height: `${Math.max(0, shiftSize + shiftSize / 2 - (box2Hovered ? growSize : 0) - (box4Hovered ? growSize : 0) + (box5Hovered ? box5GrowSize : 0))}px`,
          width: `${Math.max(0, shiftSize * 2 - (box1Hovered ? growSize : 0) - (box3Hovered ? growSize : 0) + (box5Hovered ? box5GrowSize : 0))}px`,
          top: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          left: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
        }"
        @mouseenter="box5Hovered = true"
        @mouseleave="box5Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box5Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          ME
        </h1>
      </div>
    </div>

    <!-- Mobile/Tablet Layout: Simple list -->
    <div v-else class="w-full h-full flex flex-col">
      <!-- List Item 1: WORK -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box1Hovered
            ? 'bg-gradient-to-r from-amber-300 via-orange-500 to-pink-700'
            : 'bg-gradient-to-r from-amber-50 via-orange-100 to-pink-100',
        ]"
        @mouseenter="box1Hovered = true"
        @mouseleave="box1Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box1Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          WORK
        </h1>
      </div>

      <!-- List Item 2: ABOUT -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box2Hovered
            ? 'bg-gradient-to-r from-sky-300 via-cyan-500 to-blue-800'
            : 'bg-gradient-to-r from-sky-50 via-cyan-100 to-blue-100',
        ]"
        @mouseenter="box2Hovered = true"
        @mouseleave="box2Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box2Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          ABOUT
        </h1>
      </div>

      <!-- List Item 3: ME -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box5Hovered
            ? 'bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-900'
            : 'bg-gradient-to-r from-purple-50 via-violet-100 to-indigo-100',
        ]"
        @mouseenter="box5Hovered = true"
        @mouseleave="box5Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box5Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          ME
        </h1>
      </div>

      <!-- List Item 4: SOCIAL -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box3Hovered
            ? 'bg-gradient-to-r from-lime-300 via-emerald-500 to-teal-800'
            : 'bg-gradient-to-r from-lime-50 via-emerald-100 to-teal-100',
        ]"
        @mouseenter="box3Hovered = true"
        @mouseleave="box3Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box3Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          SOCIAL
        </h1>
      </div>

      <!-- List Item 5: CONTACT -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box4Hovered
            ? 'bg-gradient-to-r from-pink-300 via-rose-500 to-red-800'
            : 'bg-gradient-to-r from-pink-50 via-rose-100 to-red-100',
        ]"
        @mouseenter="box4Hovered = true"
        @mouseleave="box4Hovered = false"
      >
        <h1
          class="text-3xl font-bold"
          :class="[
            isResizing ? 'transition-none' : 'transition-all duration-300',
            box4Hovered ? 'text-white drop-shadow-lg' : 'text-gray-800',
          ]"
        >
          CONTACT
        </h1>
      </div>
    </div>
  </div>
</template>
