<script setup lang="ts"></script>
<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative group cursor-pointer">
      <img src="/images/profile.jpg" class="w-8 h-8 rounded-full object-cover">
      <span class="text-sm text-gray-600 w-auto ml-1">yly yly yly</span>
      <section class="group-hover:block absolute translate-y-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden mb-10">
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fab fa-adn"></a>
          <span class="text-sm ml-2">文档</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fab fa-adn"></a>
          <span class="text-sm ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fab fa-adn"></a>
          <span class="text-sm ml-2">会员中心</span>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
