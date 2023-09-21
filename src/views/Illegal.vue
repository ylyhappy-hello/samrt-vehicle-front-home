<script setup lang="ts">
import ImgButton from './ImgButton.vue';
</script>
<template>
  <div
    class="w-[750px] bg-[#eff4f9] text-[#2C66A8] h-[40px] text-lg leading-[40px] rounded-md"
  >
    <span class="ml-2">违法处理业务</span>
  </div>
  <div class="flex mb-6 flex-wrap w-[750px] space-x-3 space-y-6">
    <div></div>
    <ImgButton
      title="电子监控违法处理"
      icon="icon-car-3-7"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '相关政策' },
      ]"
    />
  </div>
</template>
<style scoped lang="scss"></style>
