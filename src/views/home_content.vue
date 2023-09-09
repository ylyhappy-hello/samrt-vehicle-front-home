<script setup lang="ts">
import { CSSProperties, onMounted, ref } from 'vue';
// 最多5张图片
const cards = ref([
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
  'http://smart.ylyhappy.cn/wKZUkWToRhmAZxeRAAD2M-1eIgI912.jpg',
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
  'http://smart.ylyhappy.cn/wKZUkWToRhmAZxeRAAD2M-1eIgI912.jpg',
  'http://smart.ylyhappy.cn/wKZUkWTjFQuAD_qLAABw5v2aElM811.png',
]);
const innerStyles = ref<CSSProperties>({});
const inner = ref<HTMLElement>();
const step = ref('');
const transitioning = ref(false);
const setStep = () => {
  const innerWidth = inner.value!!.scrollWidth; // ❶
  const totalCards = cards.value.length;
  // step.value = `${innerWidth / totalCards}px`; // ❷
  step.value = '14em';
  console.log(step.value)
};
const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(-${step.value}) translateX(-${step.value})`,
  };
};
const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step.value})
                translateX(-${step.value})`,
  };
};
const afterTransition = (callback: Function) => {
  const listener = () => {
    console.log('ok')
    callback();
    inner.value!!.removeEventListener('transitionend', listener);
  };
  inner.value!!.addEventListener('transitionend', listener);
};
const next = () => {
  console.log('正在移动', transitioning.value)
  console.log(inner.value)
  if (transitioning.value) return;
  transitioning.value = true;
  moveLeft(); // ❸
  afterTransition(() => {
    const card = cards.value.shift();
    cards.value.push(card!!);
    resetTranslate()
    transitioning.value = false;
  });
};
const resetTranslate = () => {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-${step.value})`,
  };
};
onMounted(() => {
  setStep()
  resetTranslate();
});
const currentIdx = ref(0);
</script>
<template>
  <div class="carousel">
    <div ref="inner" class="inner" :style="innerStyles">
      <div class="card" v-for="(card, idx) in cards" :key="idx">
        <img class="w-56 h-56" :src="card"/>
      </div>
    </div>
  </div>
  <button>prev</button>
  <button @click="next">next</button>
</template>
<style scoped lang="scss">
.carousel {
  @apply w-56;
  overflow: hidden; /* ❷ */
}

.inner {
  white-space: nowrap; /* ❸ */
  transition: transform .5s;
}

.card {
  @apply w-56 h-56;
  display: inline-flex;

  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
