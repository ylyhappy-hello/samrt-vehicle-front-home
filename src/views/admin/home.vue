<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { echart1, echart2 } from '@/layouts/admin/echart'
interface ICard {
  title: string,
  price: number,
  icon: string,
  iconColor: string,
  totalTitle: string,
  total: number,
}
const cards = ref<ICard[]>([
  { title: '总人数', price: 12353, icon: "fas fa-address-card", iconColor: 'text-orange-500', totalTitle: '总人数', total: 312319312 },
  { title: '销售额', price: 1233, icon: "fas fa-apple-whole", iconColor: 'text-violet-500', totalTitle: '总销售额', total: 312319312 },
  { title: '订单数', price: 13533, icon: "fas fa-award", iconColor: 'text-blue-500', totalTitle: '总订单数', total: 312319312 },
  { title: '评论数', price: 123, icon: "fas fa-futbol", iconColor: 'text-red-500', totalTitle: '总评论数', total: 312319312 },
])
nextTick(() => {
  echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1);
  echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2 as any);
})
</script>
<template>
  <div>
    <div class="flex space-y-2 flex-col md:flex-row md:space-x-2 md:space-y-0 bg-gray-100">
      <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="card of cards" class="flex-1 cursor-pointer">
        <template #header>
          <div class="flex justify-between items-center">
            用户数
            <el-tag type="danger" size="small" effect="dark" closable @close="">月</el-tag>

          </div>
        </template>
        <section class="flex mt-3 justify-between items-center ">
          <span class="text-2xl font-semibold">${{ card.price }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
        </section>
        <section class="text-sm flex justify-between mt-6">
          {{ card.totalTitle }}
          <span>{{ card.total }}</span>
        </section>
      </el-card>
    </div>
    <div class="mt-6 bg-gray-100">
      <div class="flex space-y-2 flex-col md:space-x-2 md:space-y-0 md:flex-row">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" class="flex-1">
          <template #header>
            <div>
              <span>用户统计</span>
            </div>
          </template>
          <div id="echart1" class="w-full h-72" />
        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '20px' }" class="flex-1">
          <template #header>
            <div>
              <span>销售量</span>
            </div>
          </template>
          <div id="echart2" class="w-full h-72" />
        </el-card>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
