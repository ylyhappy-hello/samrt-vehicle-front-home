import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import { CacheEnum } from '@/enum/cacheEnum';
import { router } from '@/router';
import utils from '@/utils';
import { ref } from 'vue';

export default new class Menu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);
  public close = ref(false);
  public route = ref<null | RouteLocationNormalized>(null)
  constructor() {
    this.getMenuByRoute();
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? [];
  }
  toggleParentMenu(menu: IMenu) { 
    this.menus.value.forEach(m => m.active = false)
    menu.active = true;
  }
  toggleState() { 
    this.close.value = !this.close.value
  }
  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta.menu) return;
    this.route.value = route
    const menu: IMenu = { ...route.meta.menu, routeName: route.name as string };
    const isHas = this.history.value.some(menu => menu.routeName == route.name)
    if (!isHas) { 
      this.history.value.unshift(menu);
    }
    if (this.history.value.length > 10) { 
      this.history.value.pop();
    }
    utils.store.set(CacheEnum.HISTORY_MENU,this.history.value)
  }
  removeHistoryMenu(menu:IMenu) { 
    const idx = this.history.value.indexOf(menu);
    this.history.value.splice(idx,1)
  }
  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((menu) => {
      menu.active = false;
      menu.children?.forEach((cmenu) => {
        cmenu.active = false;
        if (cmenu.routeName == route.name) {
          menu.active = cmenu.active = true;
        }
      });
    });
  }
  getMenuByRoute() {
    this.menus.value = router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((route) => {
        let menu: IMenu = route.meta.menu!;
        menu.children = route.children
          .filter((route) => route.meta?.menu)
          .map((route) => {
            route.meta!.menu!.routeName = route.name;
            return route.meta!.menu!;
          });
        return menu;
      })
      .filter((menu) => menu.children);
  }
}
// 这种有必要写成usexxx吗，还是这样就行？
