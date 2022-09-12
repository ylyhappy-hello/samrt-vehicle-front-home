<script setup lang="ts">
import menuStore from '@/Composables/menuStore';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const menus = menuStore.menus.value;
const route = useRoute();
watch(route, () => menuStore.setCurrentMenu(route), { immediate: true })
</script>
  <template>
  <div class="admin-menu  w-[200px]" :class="{ close: menuStore.close.value }">
    <div class="menu bg-gray-800">
      <div class="logo">
        <i class="fas fa-robot text-fuchsia-300 text-2xl mr-2"></i>
        <span>yly yly yly</span>
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <dl v-for="(menu, index) of menus" :key="index">
          <dt @click="menus.forEach(m => m.active = false);menu.active = true;">
            <section class="flex items-center">
              <i :class="menu.icon" class="left-icon"></i>
              <span>{{ menu.title }}</span>
            </section>
            <section>
              <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.active }"></i>
            </section>
          </dt>
          <dd v-show="menu.active">
            <div @click="$router.push({ name: cmenu.routeName })" :class="{ active: cmenu?.active }" v-for="(cmenu, index) of menu.children"
              :key="index">{{ cmenu?.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg block md:hidden" @click="menuStore.toggleState"></div>
  </div>

</template>
<style scoped lang="scss">
.admin-menu{
    .menu {
      @apply h-full;
    .logo{
      @apply text-gray-300 p-4 flex items-center;
    }
    .left-container {
      dl {
        @apply text-gray-300 text-sm;
        dt {
          @apply text-sm p-4 flex justify-between items-center cursor-pointer;
          .left-icon{
            @apply text-sm mr-2;
          }
        }
        dd {
          div{
            @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer hover:bg-violet-600 duration-150 bg-gray-700;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
    }&.close{
        @apply w-auto;
        .logo{
          span{
            @apply hidden;
          }
        }
      .left-container{
        dt{
          @apply relative;
          section{
            .left-icon{
              @apply text-lg mr-0 ml-[0.35rem];
            }
            span{
              @apply hidden;
            }
            &:nth-of-type(2){
              @apply hidden;
            }
          }

        }&:hover{
          dd{
            @apply block absolute left-full top-0 w-[200px] bg-gray-700;
          }
        }
        dd{
            @apply hidden;
          }
      }
  }
}
@media screen and (max-width:768px){
.admin-menu{
  @apply h-screen w-[300px]  absolute left-0 top-0 z-50;
  .menu{
    @apply h-full absolute z-50;
    }
  .bg{
      @apply bg-gray-100 opacity-75 w-screen h-screen z-40 absolute left-0 top-0;
    }
    &.close{
    @apply hidden;
  }
  }
}
</style>
  <script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
  
