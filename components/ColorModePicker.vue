<script lang="ts" setup>
  import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline';

  defineProps<{class: string}>();

  const colorMode = useColorMode();
  const nextPreferenceMap: { [key: string]: string } = {
    system: 'light',
    light: 'dark',
    dark: 'system'
  };

  const onClick = () => {
    colorMode.preference = nextPreferenceMap[colorMode.preference];
  }
</script>
<template>
  <ColorScheme placeholder="...">
    <button :class="class" class="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none" @click="onClick">
      <SunIcon class="w-8 h-8" v-if="colorMode.preference === 'light'"/>
      <MoonIcon class="w-8 h-8" v-else-if="colorMode.preference === 'dark'"/>
      <ComputerDesktopIcon class="w-8 h-8" v-else-if="colorMode.preference === 'system'" />
    </button>
  </ColorScheme>
</template>
