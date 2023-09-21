<script setup lang="ts">
import ImgButton from './ImgButton.vue';
</script>
<template>
  <div
    class="w-[750px] bg-[#eff4f9] text-[#2C66A8] h-[40px] text-lg leading-[40px] rounded-md"
  >
    <span class="ml-2">机动车业务</span>
  </div>
  <div class="flex mb-6 flex-wrap w-[750px] space-x-3 space-y-6">
    <div></div>
    <ImgButton />
    <ImgButton
      title="本地二手车过户预选号牌"
      icon="icon-car-2-1"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '模拟选号', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      icon="icon-car-3-1"
      title="异地转（迁）入预选号牌"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="补领机动车号牌"
      icon="icon-car-1-2"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="补领机动车行驶证"
      icon="icon-car-3-2"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="补领检验合格标志"
      icon="icon-car-4-2"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="机动车检验预约"
      icon="icon-car-1-3"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="申领免检标志"
      icon="icon-car-2-3"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="机动车转籍申请"
      icon="icon-car-3-3"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
  </div>
</template>
<style scoped lang="scss"></style>
