<script setup lang="ts">
import menuStore from '@/store/menuStore';
const menus = menuStore().historyMenu
</script>
<template>
  <div class="hidden md:block bg-gray-50 px-3 py-2 shadow-sm border-b">
    <div class="grid grid-flow-col gap-2 justify-start rounded-sm ">
      <div v-for="(menu, index) of menus" :class="{ 'bg-violet-500 text-white': $route.name == menu.routeName }"
        class="border-2 bg-white hover:bg-violet-500 duration-300 rounded-md py-2 px-3 text-sm text-gray-600" :key="index">
        <router-link :to="{ name: menu.routeName }">{{ menu.title }}</router-link>
        <i class="fas fa-xmark ml-2 hover:text-yellow-500 hover:rotate-90 hover:bg-red-500 rounded-sm duration-200"
          @click="menuStore().removeHistoryMenu(menu)"></i>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>

