<script setup lang="ts">
import { onMounted, ref } from 'vue';
// 最多5张图片
const imgs = [
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
  'http://smart.ylyhappy.cn/wKZUkWToRhmAZxeRAAD2M-1eIgI912.jpg',
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
  'http://smart.ylyhappy.cn/wKZUkWToRhmAZxeRAAD2M-1eIgI912.jpg',
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
];
onMounted(() => {
  setInterval(() => {
    currentIdx.value += 1;
    if (currentIdx.value === imgs.length - 1) {
    }
  }, 3000);
});
const currentIdx = ref(0);
</script>
<template>
  <div class="slider-container">
    <ul
      class="slider-content"
      :style="{ left: currentIdx * -100 + '%' }"
      :class="{ final: currentIdx == imgs.length - 1 }"
    >
      <li
        class="slider-item"
        :class="{ selected: currentIdx == idx }"
        v-for="(item, idx) in imgs"
      >
        <img class="w-56 h-56" :src="item" />
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.slider-container {
  @apply w-56 h-56 absolute;
  overflow: hidden;
  .slider-content {
    @apply w-[500%] h-56 relative flex transition-all;
    &.final {
      transition: none;
    }
  }
  .slider-item {
    transition: 0.3s;
    &.selected {
      left: 0;
    }
  }
}
</style>
