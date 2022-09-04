<script setup lang="ts">
import Menu from "@/layouts/admin/menu.vue";
import Navbar from "./navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import menuStore from "@/store/menuStore";
const route = useRoute();
const menu = menuStore();
menu.init();
onBeforeRouteUpdate(() => {
  console.log("路由更新了   ")
  menu.addHistoryMenu(route);
})
</script>
<template>
  <div class="admin max-h-screen h-screen w-max-screen flex overflow-hidden">
    <Menu class="hidden md:block" />
    <div class="flex-1 bg-gray-100 ">
      <Navbar />
      <HistoryLink />
      <div class="m-4 ">
        <router-view #default="{ Component }">
          <!-- <Transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft"> -->
          <component :is="Component" />
          <!-- </Transition> -->
        </router-view>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
