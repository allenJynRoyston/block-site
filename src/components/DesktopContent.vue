<script setup lang="ts">
  import { ref, inject, type Ref } from 'vue'
  import {
    DesktopFlipCard,
    VerticalTextScroll,
    MeContent,
    AboutContent,
    ContactContent,
    GameDevContent,
    WebContent,
  } from '.'

  // Props from parent
  const props = defineProps<{
    containerWidth: number
    containerHeight: number
    isResizing: boolean
  }>()

  const darkMode = inject('darkMode')

  const shiftSize: number = 150
  const growSize: number = 100
  const box5GrowSize: number = growSize * 2 // Box 5 grows 2x as much

  const box1Hovered: Ref<boolean> = ref(false)
  const box2Hovered: Ref<boolean> = ref(false)
  const box3Hovered: Ref<boolean> = ref(false)
  const box4Hovered: Ref<boolean> = ref(false)
  const box5Hovered: Ref<boolean> = ref(false)

  // Flip states
  const box1Flipped: Ref<boolean> = ref(false)
  const box2Flipped: Ref<boolean> = ref(false)
  const box3Flipped: Ref<boolean> = ref(false)
  const box4Flipped: Ref<boolean> = ref(false)
  const box5Flipped: Ref<boolean> = ref(false)
</script>

<template>
  <!-- Desktop Layout: Complex box layout -->
  <div class="w-full h-full flex flex-col">
    <!-- Box 1: Left edge, grows in height when box5 hovered -->
    <div
      :class="[
        'absolute cursor-pointer border-r-2 flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900',
        isResizing ? 'transition-none' : 'transition-all duration-300',
        box4Hovered
          ? 'z-20'
          : darkMode
            ? 'bg-slate-900 border-white z-10'
            : 'bg-white border-black z-10',
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
      <DesktopFlipCard
        :is-flipped="box1Flipped"
        :is-hovered="box1Hovered"
        :is-resizing="props.isResizing"
        front-title="WEB DEV"
      >
        <template #back>
          <WebContent />
        </template>
      </DesktopFlipCard>
    </div>

    <!-- Box 2: Top right corner, grows to the left when box5 hovered -->
    <div
      :class="[
        'absolute cursor-pointer border-b-2 flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900',
        isResizing ? 'transition-none' : 'transition-all duration-300',
        box4Hovered
          ? 'z-20'
          : darkMode
            ? 'bg-slate-900 border-white z-10'
            : 'bg-white border-black z-10',
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
      <DesktopFlipCard
        :is-flipped="box2Flipped"
        :is-hovered="box2Hovered"
        :is-resizing="props.isResizing"
        front-title="ABOUT"
      >
        <template #back>
          <AboutContent />
        </template>
      </DesktopFlipCard>
    </div>

    <!-- Box 3: Bottom right corner, fills gap upwards when box5 hovered -->
    <div
      :class="[
        'absolute cursor-pointer border-l-2 flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900',
        isResizing ? 'transition-none' : 'transition-all duration-300',
        box3Hovered
          ? 'z-20'
          : darkMode
            ? 'bg-slate-900 border-white z-10'
            : 'bg-white border-black z-10',
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
      <DesktopFlipCard
        :is-flipped="box3Flipped"
        :is-hovered="box3Hovered"
        :is-resizing="props.isResizing"
        front-title="GAME DEV"
      >
        <template #back>
          <GameDevContent />
        </template>
      </DesktopFlipCard>

      <div
        class="border-l-2 z-10 h-full overflow-hidden"
        :class="darkMode ? 'border-white' : 'border-black'"
      >
        <VerticalTextScroll text="┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻" :speed="15" direction="up" />
      </div>
    </div>

    <!-- Box 4: Bottom left corner, fills width gap when box5 hovered -->
    <div
      :class="[
        'absolute cursor-pointer border-t-2 flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900',
        isResizing ? 'transition-none' : 'transition-all duration-300',
        box4Hovered
          ? 'z-20'
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
      <DesktopFlipCard
        :is-flipped="box4Flipped"
        :is-hovered="box4Hovered"
        :is-resizing="props.isResizing"
        front-title="CONTACT"
      >
        <template #back>
          <ContactContent />
        </template>
      </DesktopFlipCard>

      <div
        class="border-l-2 z-10 h-full overflow-hidden"
        :class="darkMode ? 'border-white' : 'border-black'"
      >
        <VerticalTextScroll text="ヽ(°〇°)ﾉ " :speed="20" direction="up" />
      </div>
    </div>

    <!-- Box 5: Center - grows 2x when hovered -->
    <div
      :class="[
        'absolute cursor-pointer flex justify-center items-center bg-gradient-to-br from-purple-400 via-violet-600 to-indigo-900',
        isResizing ? 'transition-none' : 'transition-all duration-300',
        box5Hovered
          ? 'z-20'
          : darkMode
            ? 'bg-slate-900 border-white z-10'
            : 'bg-white border-black z-10',
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
      <DesktopFlipCard
        :is-flipped="box5Flipped"
        :is-hovered="box5Hovered"
        :is-resizing="props.isResizing"
        front-title="ME!"
      >
        <template #back>
          <MeContent />
        </template>
      </DesktopFlipCard>
    </div>
  </div>
</template>
