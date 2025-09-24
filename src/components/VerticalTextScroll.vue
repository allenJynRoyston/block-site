<script setup lang="ts">
  import { inject } from 'vue'

  const darkMode = inject('darkMode')

  interface Props {
    text?: string
    speed?: number
    direction?: 'up' | 'down'
    textColor?: string
  }

  const props: Props = withDefaults(defineProps<Props>(), {
    text: 'DEFAULT TEXT SCROLLING',
    speed: 10,
    direction: 'up',
  })

  const { text, speed, direction } = props
</script>

<template>
  <div
    :class="[
      'flex flex-row min-h-screen',
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black',
    ]"
  >
    <div class="min-h-screen overflow-hidden">
      <div class="vertical-marquee">
        <div
          class="marquee-content"
          :style="{
            animationDuration: `${speed}s`,
            animationDirection: direction === 'down' ? 'reverse' : 'normal',
            color: textColor,
          }"
        >
          <div class="space-y-6">
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
            <span>{{ text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .vertical-marquee {
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .marquee-content {
    animation: scroll-up 10s linear infinite;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
  }

  .marquee-content p {
    margin: 0 0;
  }

  @keyframes scroll-up {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
</style>
