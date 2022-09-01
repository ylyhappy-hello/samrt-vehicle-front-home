<script setup lang="ts">
import Menu from "@/layouts/admin/menu.vue";
import Navbar from "./navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
</script>
<template>
  <div class="admin h-min-screen w-screen flex">
    <Menu class="hidden md:block" />
    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="m-4">
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
