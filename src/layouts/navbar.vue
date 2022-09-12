<script setup lang="ts">
import userStore from '@/store/userStore'
import utils from '@/utils';
import menuStore from '@/Composables/menuStore';
import Notification from '../components/notification.vue';
import Breadcrumb from '@/components/breadcrumb.vue';
const user = userStore();

const close = menuStore.close;
function fullScreen() {
  document.documentElement.requestFullscreen();
}
</script>
<template>
  <div class="bg-white w-full p-4 flex justify-between items-center">
    <div class="flex justify-center items-center">
      <div @click="menuStore.toggleState" class="cursor-pointer">
        <i class="fas fa-align-left text-lg text-gray-900 mr-2" v-if="close"></i>
        <i class="fas fa-align-right text-lg text-gray-900 mr-2" v-else></i>
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>
    <div class="flex justify-center items-center relative group cursor-pointer mr-5">
      <Notification class="mr-4" />
      <i class="fas fa-border-none mr-3 text-lg" @click="fullScreen" />
      <img :src="user.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
      <span class="text-sm text-gray-600 w-auto ml-1">{{ user.info?.name }}</span>
      <section class="left-0.5 group-hover:block absolute translate-y-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden mb-16">
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fas fa-folder-open"></a>
          <span class="text-sm ml-2">文档</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1">
          <a class="fas fa-house"></a>
          <span class="text-sm ml-2">网站首页</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-1" @click="utils.user.logout">
          <a class="fas fa-arrow-right-to-bracket"></a>
          <span class="text-sm ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
