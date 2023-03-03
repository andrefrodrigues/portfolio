<script setup lang="ts">
const route = useRoute();
useHead({
  titleTemplate: '%s - André Rodrigues'
})
</script>
<template>
  <main class="h-full">
    <TheHeader />
    <slot />
  </main>
</template>
