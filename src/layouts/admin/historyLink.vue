<script setup lang="ts">
import { ref } from 'vue';
const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
])
</script>
<template>
<div class="hidden md:block bg-gray-50 px-4 py-2 shadow-sm border-b">
  <div class="grid grid-flow-col gap-2 justify-start rounded-sm ">
    <a href="" v-for="(link, index) of links" class="border-2 bg-white hover:bg-violet-500 duration-300 rounded-md py-2 px-3 text-sm text-gray-600" :key="index">{{link.title}}
      <i class="fas fa-xmark ml-2"></i>
    </a>
  </div>
</div>
</template>
<style scoped lang="scss">

</style>

