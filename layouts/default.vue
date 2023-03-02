<script setup lang="ts">
const route = useRoute();
useHead({
  titleTemplate: '%s - André Rodrigues'
})
</script>
<template>
  <main>
    <TheHeader />
    <slot />
  </main>
</template>
