<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();
</script>
<template>
  <input type="text" :placeholder="props.placeholder" :value="props.modelValue" @input="$emit('update:modelValue', ($event.target as any)?.value)" />
</template>
<style scoped lang="scss">
input {
  @apply border border-gray-200 w-full py-1 px-2 text-xs outline-none ring-offset-2 focus:ring-2 focus:border-white ring-violet-600 rounded-sm duration-300;
}
</style>
