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
    <button :class="class" class="bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none" @click="onClick">
      <SunIcon class="w-8 h-8" v-if="colorMode.preference === 'light'"/>
      <MoonIcon class="w-8 h-8" v-else-if="colorMode.preference === 'dark'"/>
      <ComputerDesktopIcon class="w-8 h-8" v-else-if="colorMode.preference === 'system'" />
    </button>
  </ColorScheme>
</template>
