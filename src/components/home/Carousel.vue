<script setup lang="ts">
import { vHiddenHoverFactory, vHoverFactory } from '@/directive';
import { resetTimer } from '@/utils/timer';
import { CSSProperties, onMounted, ref, unref, watch } from 'vue';
import type { CarouselVueProps } from '../componentsProps';
const props = withDefaults(defineProps<CarouselVueProps>(), {
  loading: false,
  options: () => [
    { img: '/src/assets/1.png', title: '我是一张图片' },
    { img: '/src/assets/2.png', title: '我是一张图片' },
    { img: '/src/assets/3.png', title: '我是一张图片' },
    { img: '/src/assets/4.png', title: '我是一张图片' },
    { img: '/src/assets/5.png', title: '我是一张图片' },
  ],
});
watch(
  () => props.loading,
  (v, oldv, clean) => {
    if (!v) {
      initdata();
    }
  },
  { immediate: true }
);
const innerStyles = ref<CSSProperties>({});
const inner = ref<HTMLElement>();
const step = ref('');
const transitioning = ref(false);
const setStep = () => {
  // const innerWidth = inner.value!!.scrollWidth; // ❶
  // const totalCards = cards.value.length;
  // step.value = `${innerWidth / totalCards}px`; // ❷
  step.value = '250px';
  console.log(step.value);
};
const moveLeft = (_step: string) => {
  innerStyles.value = {
    transform: `translateX(-${step.value}) translateX(-${_step})`,
  };
};
const moveRight = (_step: string) => {
  innerStyles.value = {
    transition: '.3s',
    transform: `translateX(-${step.value}) translateX(${_step})`,
  };
};
const afterTransition = (callback: Function) => {
  const listener = () => {
    console.log('ok');
    console.log(cards.value);
    callback();
    inner.value!!.removeEventListener('transitionend', listener);
  };
  inner.value!!.addEventListener('transitionend', listener);
};
const addIdx = () => {
  currentIdx.value++;
  if (currentIdx.value > cards.value.length - 1) {
    currentIdx.value = 0;
  }
};
const subIdx = () => {
  currentIdx.value--;
  if (currentIdx.value < 0) {
    currentIdx.value = cards.value.length - 1;
  }
};
const next = () => {
  addIdx();
  move();
};
const move = (next = true, steps = 1, post = () => {}) => {
  if (transitioning.value) return;
  post();
  const curStep = `${steps * 256}px`;
  transitioning.value = true;
  if (next) {
    moveLeft(curStep); // ❸
    afterTransition(() => {
      const cardCache: any[] = [];
      for (let i = 1; i <= steps; i++) {
        cardCache.push(cards.value.shift()!!);
      }
      cards.value = [...cards.value, ...cardCache];
      resetTranslate(`250px`);
      transitioning.value = false;
    });
  } else {
    moveRight(curStep); // ❸
    afterTransition(() => {
      let cardCache: any[] = [];
      for (let i = 1; i <= steps; i++) {
        cardCache = [cards.value.pop()!!, ...cardCache];
      }
      console.log('cache', cardCache);
      cards.value = [...cardCache, ...cards.value];
      resetTranslate(`250px`);
      transitioning.value = false;
    });
  }
};
const prev = () => {
  subIdx();
  move(false);
};
const resetTranslate = (step: string) => {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-${step})`,
  };
};
/**
 * 生成计时器，自动播放轮播图
 */
const timer = resetTimer(() => {
  if (!isHover.value) {
    next();
  }
}, 2500);
const isHover = ref(false);
const vHiddenHover = vHiddenHoverFactory(isHover);
const vHover = (idx: number) =>
  vHoverFactory(
    (e) => {
      currentIdx.value = idx;
    },
    () => {}
  );

/**
 * 最多5张图片
 * 实际第一张显示的图片是数组里面的第二张图片
 */
function initdata () {
  let v1 = unref(props.options);
  if (typeof v1 === 'undefined' || v1.length <= 1) return [];
  const v2 = v1.pop();
  v1 = [v2!!, ...v1];
  cards.value = v1;
};
const cards = ref<any>([]);

onMounted(() => {
  console.log('------------', cards.value);
  setStep();
  resetTranslate(step.value);
  // timer();
});
const test = (targetIdx: number) => {
  const sub = targetIdx - 1 - currentIdx.value;
  const setIdx = () => (currentIdx.value = targetIdx - 1);
  if (sub > 0) {
    move(true, sub, setIdx);
  } else {
    move(false, Math.abs(sub), setIdx);
  }
};
const currentIdx = ref(0);
</script>
<template>
  <div v-if="!loading" v-hidden-hover class="carousel">
    <div class="contron-btn-group">
      <span
        class="contron-btn"
        :class="{ active: idx - 1 === currentIdx }"
        v-for="idx in props.options.length + 1"
        @mouseenter="test(idx)"
      >
        {{ idx }}</span
      >
    </div>
    <div ref="inner" class="inner" :style="innerStyles">
      <div class="card" v-for="(card, idx) in cards" :key="idx">
        <img class="w-[100%] h-[208px]" :src="card.img" />
        <!-- 遮罩层 -->
        <div class="mask">
          <span class="relative left-2 top-1">{{ card.title }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="carousel">loading...</div>
</template>
<style scoped lang="scss">
.carousel {
  @apply w-[250px] h-[208px] relative;
  overflow: hidden; /* ❷ */
  .contron-btn-group {
    @apply absolute h-4 bottom-5 right-[1.5rem] z-20;
    .contron-btn {
      @apply w-4 h-4 leading-4 rounded-md mx-[0.1rem] bg-gray-400 bg-opacity-60 px-[0.4rem];
      &.active {
        @apply bg-white;
      }
    }
  }
  .mask {
    @apply absolute bg-opacity-60 bg-black w-[100%] h-[70px] bottom-0;
  }
  .card {
    @apply inline-flex rounded-[4px] items-center justify-center;
    display: inline-flex;
    color: white;
  }
}

.inner {
  white-space: nowrap; /* ❸ */
  transition: transform 1s;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
../componentsProps
