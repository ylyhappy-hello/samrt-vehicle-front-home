<script setup lang="ts">
import Menu from "@/layouts/admin/menu.vue";
import Navbar from "./navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import menuStore from "@/Composables/menuStore";
const route = useRoute();
watch(route, () => menuStore.addHistoryMenu(route), { immediate: true })
</script>
<template>
  <div class="admin max-h-screen h-screen w-max-screen flex overflow-auto bg-gray-100">
    <Menu />
    <div class="flex flex-1 flex-col">
      <Navbar />
      <HistoryLink />
      <div class="m-4 flex-1">
        <!-- <router-view #default="{ Component, route }"> -->
        <!-- <Transition class="animate__animated" :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"> -->
        <!-- <component :is="Component" /> -->
        <!-- </Transition> -->
        <!-- </router-view> -->
        <router-view />
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
