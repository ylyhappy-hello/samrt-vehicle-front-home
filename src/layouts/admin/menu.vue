<script setup lang="ts">
import { router } from '@/store/router';
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';
const routeService = useRouter();
const routerStore = router();
const resetMenus = () => {
  routerStore.routes.forEach(proute => {
    proute.meta.active = false;
    proute.children?.forEach(croute => {
      if (croute.meta) {
        croute.meta.active = false;
      }
    })
  })
}
const handle = (proute: RouteRecordNormalized, croute?: RouteRecordRaw) => {
  resetMenus();
  proute.meta.active = true;
  if (croute && croute.meta) {
    croute.meta.active = true;
    routeService.push(croute);
  }
}
</script>
  <template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-2xl"></i>
      yly yly yly
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(route, index) of routerStore.routes" :key="index">
        <dt @click="handle(route)">
          <section class="flex items-center">
            <i :class="route.meta.icon" class="left-icon"></i>
            <span>{{ route.meta.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': route.meta.active }"></i>
          </section>
        </dt>
        <dd @click="handle(route, croute)" v-show="route.meta.active" :class="{ active: croute?.meta?.active }"
          v-for="(croute, index) of route.children" :key="index">
          {{ croute?.meta?.title }}</dd>
      </dl>
    </div>
  </div>
</template>
  <style scoped lang="scss">
  .admin {
    .left-container {
      dl {
        @apply text-gray-300 text-sm;
        dt {
          @apply text-lg mt-6 flex justify-between items-center cursor-pointer;
          .left-icon{
            @apply text-lg right-2 relative;
          }
        }
        dd {
          @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer hover:bg-violet-600 duration-150 bg-gray-700;
          &.active {
            @apply bg-violet-700;
          }
        }
      }
    }
  }
  </style>
  <script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
  
