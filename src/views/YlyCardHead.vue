<script setup lang="ts">
type DataItem = {
  title: string;
};
type Props = {
  data: DataItem[];
  title: string
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [
    { title: '我是一条测试' },
  ],
  title: '交管咨询'
});
</script>
<template>
  <div class="card">
    <div class="card-head">
      <span class="relative border-b-[3.5px] border-blue-700">{{ props.title }}</span>
    </div>
    <ul class="card-ul">
      <li class="card-li" v-for="(item, idx) in props.data" :key="idx">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.card {
  @apply w-[256px];
  .card-head {
    @apply relative mt-1 mx-2 text-xl text-blue-700 border-b-[1px] border-blue-700;
  }
  .card-ul {
    @apply mt-3;
    .card-li {
      @apply border-[1px] border-solid  border-[#c5dbf5] mx-[10px] my-[10px] py-[6px] px-[12px] rounded-[6px] leading-[20px];
    }
  }
}
</style>
