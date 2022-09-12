<script setup lang="ts">
import { nextTick } from 'vue';
import wangEditor from './wangEditor'
interface Props{
  height?: number,
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(),{
  height: 300,
  modelValue: '',
})

nextTick(()=>{
  new wangEditor('#editor', props);
})
</script>
<template>
<div id="editor">
  <p>
    欢迎使用
    <b>wangEditer</b> 富文本编辑器
  </p>
</div>
</template>
<style scoped lang="scss">

</style>
