<script setup lang="ts">
  const name: String = 'World'
</script>

<template>
  <div class="border-2 border-black p-2 overflow-hidden bg-gray-800 text-white">
    <h1 class="animate-marquee whitespace-nowrap text-xl font-bold">
      BASIC TEXT GOES HERE {{ name }}!
    </h1>
  </div>
</template>
