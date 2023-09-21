<script setup lang="ts">
import ImgButton from './ImgButton.vue';
</script>
<template>
  <div
    class="w-[750px] bg-[#eff4f9] text-[#2C66A8] h-[40px] text-lg leading-[40px] rounded-md"
  >
    <span class="ml-2">驾驶证业务</span>
  </div>
  <div class="flex mb-6 flex-wrap w-[750px] space-x-3 space-y-6">
    <div></div>
    <ImgButton
      title="驾驶证补换领"
      icon="icon-car-1-4"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="延期换证"
      icon="icon-car-4-4 w-[0px]"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '模拟选号', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      icon="icon-car-1-5"
      title="延期审验"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="延期提交身体条件证明"
      icon="icon-car-2-5"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="本地考试预约"
      icon="icon-car-3-5"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="取消本地考试预约"
      icon="icon-car-4-5"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="异地考试预约"
      icon="icon-car-1-6"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="取消异地考试预约"
      icon="icon-car-2-6"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />

    <ImgButton
      title="打印学习驾驶证明"
      icon="icon-car-3-6"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
    <ImgButton
      title="考试费缴纳"
      icon="icon-car-4-6"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />

    <ImgButton
      title="初学、增驾工本费缴纳"
      icon="icon-car-1-7"
      :data-item="[
        { value: '在线办理', highlight: true },
        { value: '操作指南' },
        { value: '相关政策' },
      ]"
    />
  </div>
</template>
<style scoped lang="scss"></style>
