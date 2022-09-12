<script setup lang="ts">
import { nextTick } from 'vue';
import ToastEditor from './toastEditor'

interface IProps {
  modelValue?: string;
  height?: string;
  placeholder?: string;
}

nextTick(() => {
  const el = document.querySelector('#editor') as HTMLDivElement;
  const toastUi = new ToastEditor(el, '100%', 'xxx');
  toastUi.editor.on('change', (type: string) => {
    const content = type == 'markdown' ? toastUi.editor.getMarkdown() : toastUi.editor.getHTML();
    emit('update:modelValue', content);
  })
})

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: '100%',
  placeholder: ''
})

const emit = defineEmits(['update:modelValue'])

</script>
<template>
  <div id="editor">
  </div>
</template>
<style scoped lang="scss">
@import "https://uicdn.toast.com/editor/latest/toastui-editor.min.css";

#editor {
  @apply bg-white h-full;
  height: 100% !important;
}

.fullscreen {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
}
</style>
