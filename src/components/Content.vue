<script setup lang="ts">
  import { ref, onMounted, onUnmounted, inject, type Ref, computed } from 'vue'
  import { VerticalTextScroll, MeContent } from '.'

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const containerWidth: Ref<number> = ref(0)
  const containerHeight: Ref<number> = ref(0)

  const isMobile = inject('isMobile')
  const darkMode = inject('darkMode')
  const windowWidth = inject('windowWidth')

  const shiftSize: number = 150
  const growSize: number = 100
  const box5GrowSize: number = growSize * 2 // Box 5 grows 2x as much
  const isResizing: Ref<boolean> = ref(false)

  const box1Hovered = ref(false)
  const box2Hovered = ref(false)
  const box3Hovered = ref(false)
  const box4Hovered = ref(false)
  const box5Hovered = ref(false)

  // Flip states
  const box1Flipped = ref(false)
  const box2Flipped = ref(false)
  const box3Flipped = ref(false)
  const box4Flipped = ref(false)
  const box5Flipped = ref(false)

  // Mobile slide states
  const box1Sliding = ref(false)
  const box2Sliding = ref(false)
  const box3Sliding = ref(false)
  const box4Sliding = ref(false)
  const box5Sliding = ref(false)

  // Mobile click handlers with slide animation
  const handleMobileClick = (boxNumber: number) => {
    switch (boxNumber) {
      case 1:
        box1Sliding.value = !box1Sliding.value
        return
      case 2:
        box2Sliding.value = !box2Sliding.value
        return
      case 3:
        box3Sliding.value = !box3Sliding.value
        return
      case 4:
        box4Sliding.value = !box4Sliding.value
        return
      case 5:
        box5Sliding.value = !box5Sliding.value
        return
    }
  }

  // Check if screen is tablet size or smaller (768px breakpoint)
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
  <div
    ref="containerRef"
    :class="['w-full min-h-full relative', darkMode ? 'bg-slate-900' : 'bg-white']"
  >
    <!-- Desktop Layout: Complex box layout -->
    <div v-if="!isMobile" class="w-full h-full flex flex-col">
      <!-- Box 1: Left edge, grows in height when box5 hovered -->
      <div
        :class="[
          'absolute cursor-pointer border-r-2 flex justify-center items-center flex-row overflow-hidden',
          isResizing ? 'transition-none' : 'transition-all duration-300',
          darkMode ? 'border-white' : 'border-black',
        ]"
        :style="{
          height: `${containerHeight / 2 + shiftSize / 2 - (box4Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          top: '0px',
          left: '0px',
          perspective: '1000px',
        }"
        @mouseenter="box1Hovered = true"
        @mouseleave="box1Hovered = false"
        @click="box1Flipped = !box1Flipped"
      >
        <div
          :class="[
            'border-r-2 z-10 top-0 left-0 h-full overflow-hidden',
            darkMode ? 'border-white' : 'border-black',
          ]"
        >
          <VerticalTextScroll text="(╯°□°）╯︵ ┻━┻" :speed="15" direction="up" />
        </div>
        <!-- Card Container -->
        <div
          class="w-full h-full relative"
          :style="{
            transformStyle: 'preserve-3d',
            transform: box1Flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
          }"
        >
          <!-- Front Side -->
          <div
            :class="[
              'absolute inset-0 flex justify-center items-center',
              box1Hovered
                ? 'bg-gradient-to-br from-amber-300 via-orange-500 to-pink-700'
                : darkMode
                  ? 'bg-slate-900'
                  : 'bg-white',
            ]"
            :style="{
              backfaceVisibility: 'hidden',
            }"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box1Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
              ]"
            >
              WEB STUFF
            </h1>
          </div>

          <!-- Back Side -->
          <div
            :class="[
              'absolute inset-0 flex flex-col justify-center items-center text-white p-4',
              darkMode
                ? 'bg-gradient-to-br from-gray-100 to-gray-300 text-black'
                : 'bg-gradient-to-br from-slate-800 to-slate-900',
            ]"
            :style="{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Frontend Projects</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>• Vue.js Applications</p>
              <p>• React Components</p>
              <p>• TypeScript Solutions</p>
              <p>• Responsive Design</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Click to flip back</p>
          </div>
        </div>
      </div>

      <!-- Box 2: Top right corner, grows to the left when box5 hovered -->
      <div
        class="flex flex-row overflow-hidden"
        :class="[
          'absolute cursor-pointer border-b-2 flex justify-center items-center',
          isResizing ? 'transition-none' : 'transition-all duration-300',
          darkMode ? 'border-white' : 'border-black',
        ]"
        :style="{
          height: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 + shiftSize - (box1Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          top: '0px',
          left: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          perspective: '1000px',
        }"
        @mouseenter="box2Hovered = true"
        @mouseleave="box2Hovered = false"
        @click="box2Flipped = !box2Flipped"
      >
        <div
          class="border-r-2 z-10 h-full overflow-hidden"
          :class="darkMode ? 'border-white' : 'border-black'"
        >
          <VerticalTextScroll text="┬─┬ノ( º _ ºノ)" :speed="20" direction="up" />
        </div>

        <!-- Card Container -->
        <div
          class="w-full h-full relative"
          :style="{
            transformStyle: 'preserve-3d',
            transform: box2Flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
          }"
        >
          <!-- Front Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[
              box2Hovered
                ? 'bg-gradient-to-br from-sky-300 via-cyan-500 to-blue-800'
                : darkMode
                  ? 'bg-slate-900'
                  : 'bg-white',
            ]"
            :style="{
              backfaceVisibility: 'hidden',
            }"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box2Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
              ]"
            >
              ABOUT
            </h1>
          </div>

          <!-- Back Side -->
          <div
            class="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-cyan-800 to-blue-900 text-white p-4"
            :style="{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }"
          >
            <h2 class="text-2xl font-display font-bold mb-4">About Me</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>• Passionate Developer</p>
              <p>• Problem Solver</p>
              <p>• Team Collaborator</p>
              <p>• Continuous Learner</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Click to flip back</p>
          </div>
        </div>
      </div>

      <!-- Box 3: Bottom right corner, fills gap upwards when box5 hovered -->
      <div
        class="flex flex-row overflow-hidden"
        :class="[
          'absolute cursor-pointer border-l-2 flex justify-center items-center',
          isResizing ? 'transition-none' : 'transition-all duration-300',
          darkMode ? 'border-white' : 'border-black',
        ]"
        :style="{
          height: `${containerHeight / 2 + shiftSize / 2 - (box2Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 - shiftSize + (box3Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          top: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          left: `${containerWidth / 2 + shiftSize - (box3Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          perspective: '1000px',
        }"
        @mouseenter="box3Hovered = true"
        @mouseleave="box3Hovered = false"
        @click="box3Flipped = !box3Flipped"
      >
        <!-- Card Container -->
        <div
          class="w-full h-full relative"
          :style="{
            transformStyle: 'preserve-3d',
            transform: box3Flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
          }"
        >
          <!-- Front Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[
              box3Hovered
                ? 'bg-gradient-to-br from-lime-300 via-emerald-500 to-teal-800'
                : darkMode
                  ? 'bg-slate-900'
                  : 'bg-white',
            ]"
            :style="{
              backfaceVisibility: 'hidden',
            }"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box3Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
              ]"
            >
              GAME DEV
            </h1>
          </div>

          <!-- Back Side -->
          <div
            class="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-4"
            :style="{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Game Development</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>• Unity & C# Games</p>
              <p>• 2D & 3D Projects</p>
              <p>• Interactive Systems</p>
              <p>• Game Mechanics</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Click to flip back</p>
          </div>
        </div>

        <div
          class="border-l-2 z-10 h-full overflow-hidden"
          :class="darkMode ? 'border-white' : 'border-black'"
        >
          <VerticalTextScroll text="┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻" :speed="15" direction="up" />
        </div>
      </div>

      <!-- Box 4: Bottom left corner, fills width gap when box5 hovered -->
      <div
        class="absolute cursor-pointer border-t-2 flex justify-center items-center overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box4Hovered
            ? 'bg-gradient-to-br from-pink-300 via-rose-500 to-red-800 z-20'
            : darkMode
              ? 'bg-slate-900 border-white z-10'
              : 'bg-white border-black z-10',
        ]"
        :style="{
          height: `${containerHeight / 2 - shiftSize + (box4Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          width: `${containerWidth / 2 + shiftSize - (box3Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          top: `${containerHeight / 2 + shiftSize / 2 - (box4Hovered ? growSize : 0) + (box5Hovered ? growSize : 0)}px`,
          left: '0px',
          perspective: '1000px',
        }"
        @mouseenter="box4Hovered = true"
        @mouseleave="box4Hovered = false"
        @click="box4Flipped = !box4Flipped"
      >
        <!-- Card Container -->
        <div
          class="w-full h-full relative"
          :style="{
            transformStyle: 'preserve-3d',
            transform: box4Flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
          }"
        >
          <!-- Front Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[box4Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
            :style="{
              backfaceVisibility: 'hidden',
            }"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box4Hovered ? 'text-white z-10' : darkMode ? 'text-white' : 'text-black',
              ]"
            >
              CONTACT
            </h1>
          </div>

          <!-- Back Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[box4Hovered ? 'bg-black text-white' : darkMode ? 'bg-slate-900' : 'bg-white']"
            :style="{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }"
          >
            <div class="p-1 w-full h-full">CONTENT</div>
          </div>
        </div>

        <div
          class="border-l-2 z-10 h-full overflow-hidden"
          :class="darkMode ? 'border-white' : 'border-black'"
        >
          <VerticalTextScroll text="ヽ(°〇°)ﾉ " :speed="20" direction="up" />
        </div>
      </div>

      <!-- Box 5: Center - grows 2x when hovered -->
      <div
        class="absolute cursor-pointer flex justify-center items-center"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box5Hovered
            ? 'bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900 z-20'
            : darkMode
              ? 'bg-slate-900 z-10'
              : 'bg-white z-10',
        ]"
        :style="{
          height: `${Math.max(0, shiftSize + shiftSize / 2 - (box2Hovered ? growSize : 0) - (box4Hovered ? growSize : 0) + (box5Hovered ? box5GrowSize : 0))}px`,
          width: `${Math.max(0, shiftSize * 2 - (box1Hovered ? growSize : 0) - (box3Hovered ? growSize : 0) + (box5Hovered ? box5GrowSize : 0))}px`,
          top: `${containerHeight / 2 - shiftSize + (box2Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          left: `${containerWidth / 2 - shiftSize + (box1Hovered ? growSize : 0) - (box5Hovered ? growSize : 0)}px`,
          perspective: '500px',
        }"
        @mouseenter="box5Hovered = true"
        @mouseleave="box5Hovered = false"
        @click="box5Flipped = !box5Flipped"
      >
        <!-- Card Container -->
        <div
          class="w-full h-full relative"
          :style="{
            transformStyle: 'preserve-3d',
            transform: box5Flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
          }"
        >
          <!-- Front Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[box5Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
            :style="{
              backfaceVisibility: 'hidden',
            }"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box5Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
              ]"
            >
              ME
            </h1>
          </div>

          <!-- Back Side -->
          <div
            class="absolute inset-0 flex justify-center items-center"
            :class="[box5Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white']"
            :style="{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }"
          >
            <MeContent />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile/Tablet Layout: Simple list -->
    <div v-else class="w-full h-full flex flex-col">
      <!-- List Item 1: WORK -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black relative overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box1Hovered ? 'bg-gradient-to-r from-amber-300 via-orange-500 to-pink-700' : 'bg-white',
        ]"
        @mouseenter="box1Hovered = true"
        @mouseleave="box1Hovered = false"
        @click="handleMobileClick(1)"
      >
        <!-- Content Container -->
        <div class="w-[calc(200%+20px)] h-full flex justify-center items-center absolute inset-0">
          <!-- Front Content -->
          <div
            :style="{
              transform: box1Sliding ? 'translateX(0%)' : 'translateX(-100%)',
              transition: 'transform 0.3s ease-in-out',
            }"
            class="w-full h-full flex justify-center items-center"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box1Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              WEB STUFF!
            </h1>
          </div>

          <!-- Back Content -->
          <div
            :style="{
              transform: box1Sliding ? 'translateX(0%)' : 'translateX(-100%)',
              transition: 'transform 0.3s ease-in-out',
            }"
            class="w-full h-full flex flex-col justify-center items-center p-4"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box1Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              CONTENT
            </h1>
          </div>
        </div>
      </div>

      <!-- List Item 2: ABOUT -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black relative overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box2Hovered ? 'bg-gradient-to-r from-amber-300 via-orange-500 to-pink-700' : 'bg-white',
        ]"
        @mouseenter="box2Hovered = true"
        @mouseleave="box2Hovered = false"
        @click="handleMobileClick(2)"
      >
        <!-- Content Container -->
        <div class="w-[calc(200%+20px)] h-full flex justify-center items-center absolute inset-0">
          <!-- Front Content -->
          <div
            :style="{
              transform: box2Sliding ? 'translateX(0%)' : 'translateX(-100%)',
              transition: 'transform 0.3s ease-in-out',
            }"
            class="w-full h-full flex justify-center items-center"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box2Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              ABOUT
            </h1>
          </div>

          <!-- Back Content -->
          <div
            :style="{
              transform: box2Sliding ? 'translateX(0%)' : 'translateX(-100%)',
              transition: 'transform 0.3s ease-in-out',
            }"
            class="w-full h-full flex flex-col justify-center items-center p-4"
          >
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box2Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              CONTENT
            </h1>
          </div>
        </div>
      </div>

      <!-- List Item 3: ME -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black relative overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box5Hovered
            ? 'bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-900'
            : 'bg-white',
        ]"
        @mouseenter="box5Hovered = true"
        @mouseleave="box5Hovered = false"
        @click="handleMobileClick(5)"
      >
        <!-- Content Container -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box5Sliding
              ? box5Flipped
                ? 'translateX(0%)'
                : 'translateX(-100%)'
              : box5Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <!-- Front Content -->
          <div v-show="!box5Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box5Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              ME
            </h1>
          </div>

          <!-- Back Content -->
          <div
            v-show="box5Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-purple-800 to-indigo-900 text-white"
          >
            <MeContent />
          </div>
        </div>

        <!-- Sliding In Content -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box5Sliding
              ? box5Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)'
              : box5Flipped
                ? 'translateX(0%)'
                : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <div
            v-show="box5Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-purple-800 to-indigo-900 text-white"
          >
            <MeContent />
          </div>

          <div v-show="!box5Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box5Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              ME
            </h1>
          </div>
        </div>
      </div>

      <!-- List Item 4: SOCIAL -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center border-b-2 border-black relative overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box3Hovered ? 'bg-gradient-to-r from-lime-300 via-emerald-500 to-teal-800' : 'bg-white',
        ]"
        @mouseenter="box3Hovered = true"
        @mouseleave="box3Hovered = false"
        @click="handleMobileClick(3)"
      >
        <!-- Content Container -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box3Sliding
              ? box3Flipped
                ? 'translateX(0%)'
                : 'translateX(-100%)'
              : box3Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <!-- Front Content -->
          <div v-show="!box3Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box3Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              SOCIAL
            </h1>
          </div>

          <!-- Back Content -->
          <div
            v-show="box3Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-emerald-800 to-teal-900 text-white"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Game Development</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>• Unity & C# Games</p>
              <p>• 2D & 3D Projects</p>
              <p>• Interactive Systems</p>
              <p>• Game Mechanics</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Tap to go back</p>
          </div>
        </div>

        <!-- Sliding In Content -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box3Sliding
              ? box3Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)'
              : box3Flipped
                ? 'translateX(0%)'
                : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <div
            v-show="box3Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-emerald-800 to-teal-900 text-white"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Game Development</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>• Unity & C# Games</p>
              <p>• 2D & 3D Projects</p>
              <p>• Interactive Systems</p>
              <p>• Game Mechanics</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Tap to go back</p>
          </div>

          <div v-show="!box3Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box3Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              SOCIAL
            </h1>
          </div>
        </div>
      </div>

      <!-- List Item 5: CONTACT -->
      <div
        class="flex-1 cursor-pointer flex justify-center items-center relative overflow-hidden"
        :class="[
          isResizing ? 'transition-none' : 'transition-all duration-300',
          box4Hovered ? 'bg-gradient-to-r from-pink-300 via-rose-500 to-red-800' : 'bg-white',
        ]"
        @mouseenter="box4Hovered = true"
        @mouseleave="box4Hovered = false"
        @click="handleMobileClick(4)"
      >
        <!-- Content Container -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box4Sliding
              ? box4Flipped
                ? 'translateX(0%)'
                : 'translateX(-100%)'
              : box4Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <!-- Front Content -->
          <div v-show="!box4Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box4Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              CONTACT
            </h1>
          </div>

          <!-- Back Content -->
          <div
            v-show="box4Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-rose-800 to-red-900 text-white"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Get In Touch</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>📧 allen@example.com</p>
              <p>🐦 @allenroyston</p>
              <p>💼 LinkedIn Profile</p>
              <p>📱 Available for hire</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Tap to go back</p>
          </div>
        </div>

        <!-- Sliding In Content -->
        <div
          class="w-full h-full flex justify-center items-center absolute inset-0"
          :style="{
            transform: box4Sliding
              ? box4Flipped
                ? 'translateX(-100%)'
                : 'translateX(0%)'
              : box4Flipped
                ? 'translateX(0%)'
                : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
        >
          <div
            v-show="box4Flipped"
            class="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-r from-rose-800 to-red-900 text-white"
          >
            <h2 class="text-2xl font-display font-bold mb-4">Get In Touch</h2>
            <div class="text-sm font-sans text-center space-y-2">
              <p>📧 allen@example.com</p>
              <p>🐦 @allenroyston</p>
              <p>💼 LinkedIn Profile</p>
              <p>📱 Available for hire</p>
            </div>
            <p class="text-xs font-mono mt-4 opacity-75">Tap to go back</p>
          </div>

          <div v-show="!box4Flipped" class="w-full h-full flex justify-center items-center">
            <h1
              class="text-3xl font-display font-bold"
              :class="[
                isResizing ? 'transition-none' : 'transition-all duration-300',
                box4Hovered ? 'text-white drop-shadow-lg' : 'text-black',
              ]"
            >
              CONTACT
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
