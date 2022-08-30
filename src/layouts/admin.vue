<script setup lang="ts">
interface IMenuItem {
  title: string,
  icon?: string,
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
const menus = [
  {
    title: "错误页面", icon: 'fas fa-angle-down', children: [
      { title: '404错误', },
      { title: '403错误', }
    ]
  }
] as IMenu[]
</script>
<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-300 flex items-center">
        <i class="fas fa-robot text-fuchsia-300 mr-2 text-2xl"></i>
        yly yly yly
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <dl v-for="(menu, index) of menus" :key="index"></dl>
        <!-- <dl>
          <dt>
            <section class="flex items-center">
              <i class="fab fa-bilibili mr-2 text-xl"></i>
              <span>错误页面</span>
            </section>
            <section>
              <i class="fas fa-angle-down"></i>
            </section>
          </dt>
          <dd class="active">404错误页面</dd>
          <dd>403错误页面</dd>
        </dl> -->
        
      </div>
    </div>

    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>
<style scoped lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;

      dt {
        @apply text-xs mt-6 flex justify-between items-center cursor-pointer;
      }

      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer hover: opacity-80 duration-150;

        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
