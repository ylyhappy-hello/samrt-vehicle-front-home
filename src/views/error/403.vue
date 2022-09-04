<script setup lang="ts"></script>
<template>
  <title>Error 403</title>
  <div class="min-h-screen w-full bg-white flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold">Uppsss...
          <strong> 403 </strong>
        </div>
        <br />
        <br />
        <p class="text-2xl md:text-3xl font-light leading-normal"><strong>XXX</strong></p>
        <br />
        <br />
        <p class="mb-8">Check if the search term is correct. If you think this is an error, contact <strong>2778335016@qq.com</strong> to support <strong>Thanks!</strong>
          <br />
        </p>
        <a onclick="location.reload()" class="y-a">Reload</a>
        <router-link :to="{ name: 'admin.home' }" class="y-a ml-3">首页</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .y-a{
    @apply px-4 inline cursor-pointer py-2 text-sm font-medium leading-5 shadow text-white 
    transition-colors duration-300 border border-transparent rounded-lg 
   bg-red-600 active:bg-red-600 hover:bg-blue-500;
  }
</style>
