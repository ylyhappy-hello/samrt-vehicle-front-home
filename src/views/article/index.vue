<script setup lang="ts">
import store, { Constants } from '@/utils/store';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/home/Header.vue';
const consultId = useRoute().params.id;
const vhtml = ref('');
onBeforeMount(() => {
  if (typeof consultId === 'object') {
    return;
  }
  vhtml.value = store.get(Constants.ConsultNoteKey(consultId));
});
</script>
<template>
  <Header not-show-nav-under-line />
  <div class="flex justify-center items-center w-[100%]">
    <div class="consult" v-html="vhtml"></div>
  </div>
</template>
<style scoped lang="scss">
.consult {
  @apply w-[1000px];
  &:deep(h1) {
    @apply text-center text-xl font-medium leading-[48px] h-[48px];
  }
}
</style>
