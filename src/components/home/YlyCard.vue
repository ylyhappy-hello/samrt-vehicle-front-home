<script setup lang="ts">
type DataItem = {
  title: string;
  publish_time: string;
  to: string;
};
type Props = {
  title: string;
  data?: DataItem[];
};

const props = withDefaults(defineProps<Props>(), {
  title: '交管咨询',
  data: () => [
    { title: '我是一条测试', publish_time: '03-23', to:"/consult/1" },
    { title: '我是一条测试', publish_time: '03-23', to:"/consult/1" },
    { title: '我是一条测试', publish_time: '03-23', to:"/consult/1" },
    { title: '我是一条测试', publish_time: '03-23', to:"/consult/1" },
    { title: '我是一条测试', publish_time: '03-23', to:"/consult/1" },
  ],
});
</script>
<template>
  <div class="card">
    <div class="card-head">
      <span class="relative border-b-[3.5px] border-blue-700">{{ title }}</span>
      <i class="absolute top-3 right-0 fa-solid fa-ellipsis fa-lg"></i>
    </div>
    <ul class="card-ul">
      <li class="card-li" v-for="(item, idx) in props.data" :key="idx">
        <i class="absolute left-[10px] bottom-1">.</i>
        <span class="w-[20px] inline-block"></span>
        <RouterLink :to="item.to">
          <span
            class="hover:underline text-ellipsis whitespace-nowrap h-[20px] leading-[20px] w-[180px] inline-block overflow-hidden"
            >{{ item.title }}</span
          >
        </RouterLink>
        <span class="absolute right-1">{{ item.publish_time }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.card {
  @apply w-[250px] h-[208px];
  .card-head {
    @apply relative mt-1 mx-2 text-xl text-blue-700 border-b-[1px] border-blue-700;
  }
  .card-ul {
    @apply mt-3;
    .card-li {
      @apply my-[9px] relative;
    }
  }
}
</style>
