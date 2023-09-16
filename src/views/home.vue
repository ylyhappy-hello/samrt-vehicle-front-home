<script setup lang="ts">
import { vHiddenHoverFactory } from '@/directive';
import { ref } from 'vue';
import home_content from './home_content.vue';
const placeSelectFlag = ref(false);
const vHover = vHiddenHoverFactory(placeSelectFlag);
const places = [
  '北京',
  '天津',
  '河北',
  '山西',
  '内蒙古',
  '辽宁',
  '吉林',
  '黑龙江',
  '上海',
  '江苏',
  '浙江',
  '安徽',
  '福建',
  '江西',
  '山东',
  '河南',
  '湖北',
  '湖南',
  '广东',
  '广西',
  '海南',
  '重庆',
  '四川',
  '贵州',
  '云南',
  '西藏',
  '陕西',
  '甘肃',
  '青海',
  '宁夏',
  '新疆',
];
</script>
<template>
  <div class="w-[100%] flex flex-col items-center h-28 bg-blue-700">
    <div class="w-[960px] text-sm justify-between h-7 leading-7 flex">
      <div
        v-hover
        class="flex items-center w-72"
        :class="{ 'bg-white': placeSelectFlag, 'shadow-sm': placeSelectFlag }"
      >
        <span
          class="text-gray-400 ml-2"
          :class="{ 'text-blue-700': placeSelectFlag }"
          >切换公安交通管理部门:</span
        >
        <span class="text-orange-300">北京市</span>
        <div
          v-show="placeSelectFlag"
          class="absolute z-40 border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] shadow-sm top-[1.6em] bg-white w-[30.1em] flex flex-wrap"
        >
          <div
            class="w-[7em] text-center px-1 hover:bg-gray-200"
            v-for="item in places"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="flex text-gray-400 text-center text-xs">
        <div class="banner-bar-item">
          <i class="fa-solid fa-plus mx-1"></i>
          <span>用户注册</span>
        </div>
        <div class="banner-bar-item">
          <i class="fa-solid fa-user mx-1"></i>
          <span>个人登录</span>
        </div>
        <div class="banner-bar-item">
          <i class="fa-solid fa-clipboard-list mx-1"></i>
          <span>单位登录</span>
        </div>
        <div class="banner-bar-item border-r-[0.5px]">
          <i class="fa-solid fa-user mx-1"></i>
          <span>个人信息申请</span>
        </div>
      </div>
    </div>
    <div class="w-[100%] border-b-[0.5px] border-white border-opacity-20"></div>
    <div class="flex text-white justify-between w-[960px]">
      <div class="w-96 h-24 flex text-left items-center">
        <img class="w-16" src="/vite.svg" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">交通安全综合服务管理平台</span>
          <span class="text-xs">北京市公安局交通管理局</span>
        </div>
      </div>
      <div class="flex text-right items-center">
        <!-- <i class="fa-solid fa-user"></i>
        <span>用户登陆</span> -->
        <ul class="flex text-xl banner-tabs">
          <li class="active">首页</li>
          <li>业务办理</li>
          <li>服务导航</li>
          <li>公告公布</li>
          <li>APP下载</li>
          <li>办事指南</li>
        </ul>
      </div>
    </div>
    <div class="w-[960px]">
      <home_content></home_content>
    </div>
  </div>
</template>
<style scoped lang="scss">
.banner-bar-item {
  @apply hover:bg-green-600 hover:text-white py-1 px-2 transition-all border-white border-opacity-20 border-l-[0.5px];
}
.banner-tabs li {
  @apply relative top-2 font-bold transition-all hover:text-orange-300 mx-2;
  &.active {
    @apply pb-4 border-b-4 text-orange-300 border-orange-300;
  }
}
</style>
<script lang="ts">
export default {
  route: { name: 'home', path: '/' },
};
</script>
