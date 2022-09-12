<script setup lang="ts">
import { nextTick, ref } from 'vue';
const activeName = ref('site');
const show = ref(false)
nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    console.log("我被点击了")
    show.value = false;
  })
})
</script>
<template>
  <div class="y-notification">
    <i class="fas fa-align-justify" @click.stop="show= !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="站内通知" name="site">
        <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, soluta? Nobis perferendis incidunt recusandae sed voluptate?
          Porro sed consectetur, totam ea facere quibusdam nisi nesciunt temporibus, aperiam voluptatum accusantium quis?</a>
        <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, soluta? Nobis perferendis incidunt recusandae sed voluptate?
          Porro sed consectetur, totam ea facere quibusdam nisi nesciunt temporibus, aperiam voluptatum accusantium quis?</a>
        <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, soluta? Nobis perferendis incidunt recusandae sed voluptate?
          Porro sed consectetur, totam ea facere quibusdam nisi nesciunt temporibus, aperiam voluptatum accusantium quis?</a>
        <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, soluta? Nobis perferendis incidunt recusandae sed voluptate?
          Porro sed consectetur, totam ea facere quibusdam nisi nesciunt temporibus, aperiam voluptatum accusantium quis?</a>
      </el-tab-pane>
      <el-tab-pane label="系统消息" name="message">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped lang="scss">
.y-notification{
  @apply relative;
  .lists{
    @apply absolute bg-white p-5 rounded-sm shadow-sm right-[-4rem] z-10 w-[16rem];  
  }
}
</style>
