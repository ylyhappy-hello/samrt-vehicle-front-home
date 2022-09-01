<script setup lang="ts">
import { ref } from 'vue';

interface IMenuItem {
  title: string,
  icon?: string,
  active?: boolean,
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
const menus = ref<IMenu[]>([
  {
    title: "错误页面", icon: 'fab fa-adversal', active: true,
    children: [
      { title: '404错误', active: true },
      { title: '403错误', }
    ],
  },
  {
    title: "编辑器", icon: 'fab fa-adversal', children: [
      { title: 'markdown编辑器', },
      { title: '富文本编辑器', }
    ],

  }
])
const resetMenus = () => {
  menus.value.forEach(pmenu => {
    pmenu.active = false;
    pmenu.children?.forEach(cmenu => {
      cmenu.active = false;
    })
  })
}
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  if (pmenu.active) {
    pmenu.active = false;
    return;
  }
  resetMenus();
  pmenu.active = true;
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
      <dl v-for="(menu, index) of menus" :key="index">
        <dt @click="handle(menu)">
          <section class="flex items-center">
            <i :class="menu.icon" class="left-icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{'rotate-180': menu.active}"></i>
          </section>
        </dt>
        <dd @click="handle(menu, cmenu)" v-show="menu.active" :class="{ active: cmenu.active }" v-for="(cmenu, index) of menu.children" :key="index">
          {{
              cmenu.title
          }}</dd>
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
  
