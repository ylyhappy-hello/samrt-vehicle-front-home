<script setup lang="ts">
import store, { Constants } from '@/utils/store';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import { dict_data } from '@/components/home/dict';
const consultId = useRoute().params.id;
const consultObj = ref<Partial<API.TransportNote>>({});
onBeforeMount(() => {
  if (typeof consultId === 'object') {
    return;
  }
  consultObj.value = store.get(
    Constants.ConsultNoteKey(consultId)
  ) as Partial<API.TransportNote>;
  consultObj.value.label =
    dict_data['motocycle_consult'][consultObj.value.type!! || '1'];
});
</script>
<template>
  <Header not-show-nav-under-line />
  <div class="flex-col flex justify-center items-center w-[100%]">
    <div class="mt-10 mb-2 text-2xl">{{ consultObj.title }}</div>
    <div>
      <span
        >文章类别:
        <span class="text-[#114ec9]">{{ consultObj.label }}</span></span
      >
      <span>&MediumSpace;&MediumSpace;&MediumSpace;&MediumSpace;</span>
      <span>发布时间: {{ consultObj.publishTime }}</span>
    </div>
    <div class="consult" v-html="consultObj.content"></div>
  </div>
  <Footer/>
</template>
<style scoped lang="scss">
.consult {
  @apply w-[1000px] my-3;
  &:deep(h1) {
    @apply text-center text-xl font-medium leading-[48px] h-[48px];
  }
}
</style>
