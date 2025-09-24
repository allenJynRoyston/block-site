<script setup lang="ts">
  import { ref, inject } from 'vue'
  import { MeContent, AboutContent, ContactContent, GameDevContent, WebContent } from '.'

  // Props from parent
  const props = defineProps<{
    isResizing: boolean
  }>()

  const darkMode = inject('darkMode')

  const box1Hovered = ref(false)
  const box2Hovered = ref(false)
  const box3Hovered = ref(false)
  const box4Hovered = ref(false)
  const box5Hovered = ref(false)

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
</script>

<template>
  <!-- Mobile/Tablet Layout: Simple list -->
  <div class="w-full h-full flex flex-col">
    <!-- List Item 1: WORK -->
    <div
      class="cursor-pointer flex-1 min-h-[400px] flex justify-center items-center border-b-2 relative overflow-hidden transition-all duration-500"
      :class="[
        isResizing ? 'transition-none' : '',
        box1Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white',
        darkMode ? 'border-white' : 'border-black',
      ]"
      @mouseenter="box1Hovered = true"
      @mouseleave="box1Hovered = false"
      @click="handleMobileClick(1)"
    >
      <!-- Content Container -->
      <div class="w-[calc(200%+20px)] h-full flex absolute inset-0">
        <!-- Front Content -->
        <div
          :style="{
            transform: !box1Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full flex justify-center items-center"
        >
          <h1
            class="text-3xl font-display font-bold"
            :class="[
              isResizing ? 'transition-none' : 'transition-all duration-300',
              box1Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
            ]"
          >
            WEB DEV
          </h1>
        </div>

        <!-- Back Content -->
        <div
          :style="{
            transform: !box1Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full overflow-y-auto overflow-x-hidden"
          :class="[darkMode ? 'bg-slate-900' : 'bg-white']"
        >
          <div class="flex flex-col">
            <WebContent />
          </div>
        </div>
      </div>
    </div>

    <!-- List Item 2: ABOUT -->
    <div
      class="cursor-pointer flex-1 min-h-[350px] flex justify-center items-center border-b-2 relative overflow-hidden transition-all duration-500"
      :class="[
        isResizing ? 'transition-none' : '',
        box2Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white',
        darkMode ? 'border-white' : 'border-black',
      ]"
      @mouseenter="box2Hovered = true"
      @mouseleave="box2Hovered = false"
      @click="handleMobileClick(2)"
    >
      <!-- Content Container -->
      <div class="w-[calc(200%+20px)] h-full flex absolute inset-0">
        <!-- Front Content -->
        <div
          :style="{
            transform: !box2Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full flex justify-center items-center"
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

        <!-- Back Content -->
        <div
          :style="{
            transform: !box2Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full overflow-y-auto overflow-x-hidden"
          :class="[darkMode ? 'bg-slate-900' : 'bg-white']"
        >
          <div class="min-h-full flex flex-col">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>

    <!-- List Item 3: ME -->
    <div
      class="cursor-pointer flex-1 min-h-[475px] flex justify-center items-center border-b-2 relative overflow-hidden transition-all duration-500"
      :class="[
        isResizing ? 'transition-none' : '',
        box3Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white',
        darkMode ? 'border-white' : 'border-black',
      ]"
      @mouseenter="box3Hovered = true"
      @mouseleave="box3Hovered = false"
      @click="handleMobileClick(3)"
    >
      <!-- Content Container -->
      <div class="w-[calc(200%+20px)] h-full flex absolute inset-0">
        <!-- Front Content -->
        <div
          :style="{
            transform: !box5Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full flex justify-center items-center"
        >
          <h1
            class="text-3xl font-display font-bold"
            :class="[
              isResizing ? 'transition-none' : 'transition-all duration-300',
              box3Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
            ]"
          >
            ME
          </h1>
        </div>

        <!-- Back Content -->
        <div
          :style="{
            transform: !box3Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full overflow-y-auto overflow-x-hidden"
          :class="[darkMode ? 'bg-slate-900' : 'bg-white']"
        >
          <div class="min-h-full flex flex-col">
            <MeContent />
          </div>
        </div>
      </div>
    </div>

    <!-- List Item 4: SOCIAL -->
    <div
      class="cursor-pointer flex-1 min-h-[425px] flex justify-center items-center border-b-2 relative overflow-hidden transition-all duration-500"
      :class="[
        isResizing ? 'transition-none' : '',
        box4Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white',
        darkMode ? 'border-white' : 'border-black',
      ]"
      @mouseenter="box4Hovered = true"
      @mouseleave="box4Hovered = false"
      @click="handleMobileClick(4)"
    >
      <!-- Content Container -->
      <div class="w-[calc(200%+20px)] h-full flex absolute inset-0">
        <!-- Front Content -->
        <div
          :style="{
            transform: !box4Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full flex justify-center items-center"
        >
          <h1
            class="text-3xl font-display font-bold"
            :class="[
              isResizing ? 'transition-none' : 'transition-all duration-300',
              box4Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
            ]"
          >
            SOCIAL
          </h1>
        </div>

        <!-- Back Content -->
        <div
          :style="{
            transform: !box4Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full overflow-y-auto overflow-x-hidden"
          :class="[darkMode ? 'bg-slate-900' : 'bg-white']"
        >
          <div class="min-h-full flex flex-col">
            <GameDevContent />
          </div>
        </div>
      </div>
    </div>

    <!-- List Item 5: CONTACT -->
    <div
      class="cursor-pointer flex-1 min-h-[225px] flex justify-center items-center border-b-2 relative overflow-hidden transition-all duration-500"
      :class="[
        isResizing ? 'transition-none' : '',
        box5Hovered ? 'bg-black' : darkMode ? 'bg-slate-900' : 'bg-white',
        darkMode ? 'border-white' : 'border-black',
      ]"
      @mouseenter="box5Hovered = true"
      @mouseleave="box5Hovered = false"
      @click="handleMobileClick(5)"
    >
      <!-- Content Container -->
      <div class="w-[calc(200%+20px)] h-full flex absolute inset-0">
        <!-- Front Content -->
        <div
          :style="{
            transform: !box5Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full flex justify-center items-center"
        >
          <h1
            class="text-3xl font-display font-bold"
            :class="[
              isResizing ? 'transition-none' : 'transition-all duration-300',
              box5Hovered ? 'text-white drop-shadow-lg' : darkMode ? 'text-white' : 'text-black',
            ]"
          >
            CONTACT
          </h1>
        </div>

        <!-- Back Content -->
        <div
          :style="{
            transform: !box5Sliding ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }"
          class="w-full h-full overflow-y-auto overflow-x-hidden"
          :class="[darkMode ? 'bg-slate-900' : 'bg-white']"
        >
          <div class="min-h-full flex flex-col">
            <ContactContent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
