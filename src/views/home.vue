<script setup lang="ts">

</script>
<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/profile.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-4">
    <div>
      <router-link :to="{ name: 'admin.home' }" class="y-button">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="y-button danger ml-2">用户登录</router-link>
    </div>
    <div class="mt-4 font-medium text-xs text-gray-300 shadow-sm">hello everyone</div>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
export default {
  route: { name: 'home', path: '/' }
}
</script>
