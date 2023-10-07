<script setup lang="ts">
type ItemType = {
  value: string;
  highlight?: boolean;
};
type Prop = {
  dataItem?: ItemType[];
  icon: string;
  iconWidth?: number
  title: string;
};
const props = withDefaults(defineProps<Prop>(), {
  icon: 'icon-car-1-1',
  title: '新车注册登记预选号牌',
  dataItem: () => [
    {
      value: '在线办理',
      highlight: true,
    },
    {
      value: '在线选号',
      highlight: true,
    },
    {
      value: '操作指南',
      highlight: false,
    },
    {
      value: '相关政策',
      highlight: false,
    },
  ],
});
</script>
<template>
  <div class="text-lg">
    <div class="flex w-[230px]">
      <div :class="[icon]" :style="{width: iconWidth + 'px'}"></div>
      <span>{{ title }}</span>
    </div>
    <div class="flex space-x-1">
      <span
        class="text-sm"
        v-for="item in dataItem"
        :class="{ 'text-[#F56201]': item.highlight,'text-[#666]': !item.highlight, 'hover:text-blue-500': !item.highlight }"
        >{{ item.value }}</span
      >
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
