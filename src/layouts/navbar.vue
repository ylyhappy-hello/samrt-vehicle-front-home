<script setup lang="ts">
import user from '@/store/user'
const userStore = user();
</script>
<template>
  <div class="bg-white w-full p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative group cursor-pointer">
      <img :src="userStore.info?.avatar" class="w-8 h-8 rounded-full object-cover">
      <span class="text-sm text-gray-600 w-auto ml-1">{{userStore.info?.name}}</span>
      <section class="group-hover:block absolute translate-y-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden mb-10">
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fas fa-folder-open"></a>
          <span class="text-sm ml-2">文档</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fas fa-house"></a>
          <span class="text-sm ml-2">网站首页</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fas fa-arrow-right-to-bracket"></a>
          <span class="text-sm ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
