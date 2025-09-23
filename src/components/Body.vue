<script setup lang="ts">
  import { VerticalTextScroll, Content } from '.'
  const name: String = 'World'
</script>

<template>
  <div class="flex flex-row min-h-screen">
    <div class="border-l-2 border-r-2 border-black">
      <VerticalTextScroll text="something" :speed="10" direction="down" />
    </div>
    <Content />
    <div class="border-l-2 border-r-2 border-black z-10">
      <VerticalTextScroll text="something" :speed="10" direction="up" />
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
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
  }

  .marquee-content p {
    margin: 20px 0;
  }

  @keyframes scroll-up {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>
