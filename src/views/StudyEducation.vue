<script setup lang="ts">
import ImgButton from './ImgButton.vue';
</script>
<template>
  <div
    class="w-[750px] bg-[#eff4f9] text-[#2C66A8] h-[40px] text-lg leading-[40px] rounded-md"
  >
    <span class="ml-2">学习教育业务</span>
  </div>
  <div class="flex mb-6 flex-wrap w-[750px] space-x-3 space-y-6">
    <div></div>
    <ImgButton
      title="满分学习考试"
      icon="icon-car-1-8"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      icon="icon-car-1-9"
      title="驾驶人审验"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '相关政策' },
      ]"
    />
  </div>
</template>
<style scoped lang="scss"></style>


