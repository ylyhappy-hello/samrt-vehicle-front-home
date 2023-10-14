<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { vHiddenHoverFactory } from '@/directive';
import Carousel from '@/components/home/Carousel.vue';
import YlyCard from '@/components/home/YlyCard.vue';
import Header from '@/components/home/Header.vue';

import Footer from '@/components/home/Footer.vue';
import YlyCardHead from './YlyCardHead.vue';
import Vehicle from './Vehicle.vue';
import DriverLicense from './DriverLicense.vue';
import Illegal from './Illegal.vue';
import StudyEducation from './StudyEducation.vue';
import { transportationNote } from '@/apis';
import { timesimp2str, timesimp2str2 } from '@/utils/time';
import { CarouselVueProps } from '@/components/componentsProps';
import store, { Constants } from '@/utils/store';
const placeSelectFlag = ref(false);
const vHover = vHiddenHoverFactory(placeSelectFlag);
/**
 * 交管咨询数据获取
 */
const transportNote = ref<any>();
const carousel = reactive<CarouselVueProps>({
  loading: true,
  options: [],
});
onMounted(() => {
  transportationNote().then((res) => {
    transportNote.value = (res.data || []).map((e) => {
      store.set(Constants.ConsultNoteKey(e.id), {
        publishTime: timesimp2str2(e.publishTime),
        title: e.title,
        content: e.content,
        type: e.type
      });
      return {
        publishTime: timesimp2str(e.publishTime),
        title: e.title,
        to: `consult/${e.id}`,
      };
    });
    carousel.options = (res.data || []).map((e) => {
      return {
        img: e.bannerUrl,
        title: e.title,
      };
    });
    carousel.loading = false;
  });
});
</script>
<template>
  <div class="w-[100%] flex flex-col items-center h-28 bg-[#1d53b5]">
    <Header/>
    <!-- 正文 -->
    <div class="w-[1000px] flex">
      <div class="w-[750px] flex flex-wrap">
        <Carousel
          class="mt-2"
          v-loading
          :options="carousel.options"
          :loading="carousel.loading"
        />
        <YlyCard title="交管咨询" :data="transportNote" />
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
    <Footer />
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
