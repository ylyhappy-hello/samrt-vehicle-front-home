<script setup lang="ts"></script>
<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
button {
  @apply bg-violet-700 text-white w-full py-2 rounded-sm duration-300 hover:bg-violet-400;
}
</style>
