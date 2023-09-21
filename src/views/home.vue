<script setup lang="ts">
import { ref } from 'vue';
import { vHiddenHoverFactory } from '@/directive';
import home_content from './home_content.vue';
import YlyCard from './YlyCard.vue';
import YlyCardHead from './YlyCardHead.vue';
import Vehicle from './Vehicle.vue';
import DriverLicense from './DriverLicense.vue';
import Illegal from './Illegal.vue';
import StudyEducation from './StudyEducation.vue';
import ImgButton from './ImgButton.vue';
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
  <div class="w-[100%] flex flex-col items-center h-28 bg-[#1d53b5]">
    <!-- 头部 -->
    <div class="w-[1000px] text-sm justify-between h-7 leading-7 flex">
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
    <div class="flex text-white justify-between w-[1000px]">
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
    <!-- 正文 -->
    <div class="w-[1000px] flex">
      <div class="w-[750px] flex flex-wrap">
        <home_content></home_content>
        <YlyCard />
        <YlyCard title="警示教育" />
        <YlyCard title="业务热点" />
        <YlyCard title="信息公告" />
        <YlyCard title="信息公布" />
        <img class="w-[240px] h-[70px]" src="../assets/wfcl.png" />
        <img class="w-[240px] h-[70px] ml-3" src="../assets/hpyx.png" />
        <img class="w-[240px] h-[70px] ml-3" src="../assets/ksyy.png" />
        <div class="h-[100px]"></div>
        <Vehicle />
        <DriverLicense />
        <Illegal />
        <StudyEducation />
      </div>
      <div class="flex flex-col w-[250px]">
        <YlyCardHead
          title="公式公告"
          :data="[{ title: '严重交通违法行为公开公示' }]"
        />
        <YlyCardHead
          title="信息查询"
          :data="[{ title: '机动车违法/驾驶证记分查询' }]"
        />
        <YlyCardHead title="便民工具" :data="[{ title: '车检计算器' }]" />
        <YlyCardHead
          title="友情链接"
          :data="[
            { title: '中华人民共和国公安部' },
            { title: '公安部交通管理科学研究所' },
            { title: '北京市交通委员会' },
            { title: '北京市公安局公安交通管理局' },
            { title: '北京市保险行业协会' },
            { title: '北京市公安局公安交通管理局电子票据系统' },
          ]"
        />
        <YlyCardHead title="联系方式" :data="[]" />
        <ul class="text-[#999] ml-2 text-sm">
          <li>北京市公安局交通管理局</li>
          <li>地址：北京市西城区阜成门北大街1号</li>
          <li>邮编：100037</li>
          <li>业务咨询电话：010-12123</li>
          <li>业务监督电话：010-122</li>
          <li>在线缴款微信、支付宝渠道咨询：95595</li>
          <li>在线缴款银联卡渠道咨询：95588</li>
        </ul>
      </div>
    </div>
    <!-- 尾部 -->
    <div
      class="w-[100%] flex flex-col items-center justify-center bg-[#0d419d] text-white"
    >
      <ul class="flex w-[1000px] my-4">
        <li class="w-[200px] text-lg text-white text-center border-r-[1px]">
          首页
        </li>
        <li class="w-[200px] text-lg text-[#979797] text-center border-r-[1px]">
          业务办理
        </li>
        <li class="w-[200px] text-lg text-[#979797] text-center border-r-[1px]">
          服务导航
        </li>
        <li class="w-[200px] text-lg text-[#979797] text-center border-r-[1px]">
          公告公布
        </li>
        <li class="w-[200px] text-lg text-[#979797] text-center border-r-[1px]">
          APP下载
        </li>
        <li class="w-[200px] text-lg text-[#979797] text-center border-r-[1px]">
          办事指南
        </li>
      </ul>
      <div class="w-[1000px] flex">
        <ul class="w-[750px] text-xs">
          <li class="my-2">
            建议您使用IE9+、FireFox、Google
            Chrome，分辨率1280*800及以上浏览本网站，获得更好用户体验。
          </li>
          <li class="my-2">
            版权所有 © 2015-2022 公安机关交通管理部门官方发布 V1.29.3
          </li>
          <li class="my-2">苏ICP备06012607号-2 <img class="h-[20px] w-[20px] inline-block" src="../assets/vue.svg" /> 苏公网安备 32021102000598号</li>
        </ul>
        <ul class="flex justify-center items-center space-x-2 w-[250px]">
          <li><img class="w-[110px] h-[55px]" src="../assets/jiucuo.png" /></li>
          <li> 
            <img class="w-[70px] h-[70px]" src="../assets/gabjtkys2.jpg" />
          </li>
          <li><img class="w-[70px] h-[70px]" src="../assets/jtaqwfb.jpg" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.banner-bar-item {
  @apply hover:bg-green-600 hover:text-white py-1 px-2 transition-all border-white border-opacity-20 border-l-[0.5px];
}
.banner-tabs li {
  @apply relative top-2 font-bold transition-all hover:text-orange-300 ml-4;
  &.active {
    @apply pb-4 border-b-4 text-orange-300 border-orange-300;
  }
}
</style>
<script lang="ts">
export default {
  route: { name: 'home', path: '/' },
  components: { YlyCard, YlyCardHead },
};
</script>
