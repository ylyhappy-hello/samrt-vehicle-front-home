import { CacheEnum } from '@/enum/cacheEnum';
import  utils  from '@/utils';
import { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';
import { router } from '@/router';
export default defineStore('router', {
  state: () => ({
    menus: [] as IMenu[],
    historyMenu: [] as IMenu[],
  }),
  getters: {
    get(state) {
      return state.menus;
    },
  },
  actions: {
    // 不想在这写init
    init() {
      this.getMenuByRoute();
      this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.menu) return;
      const menu: IMenu = { ...route.meta.menu, routeName: route.name as string };
      const isHas = this.historyMenu.some(menu => menu.routeName == route.name)
      if (!isHas) { 
        this.historyMenu.unshift(menu);
      }
      if (this.historyMenu.length > 10) { 
        this.historyMenu.pop();
      }
      utils.store.set(CacheEnum.HISTORY_MENU,this.historyMenu)
    },
    removeHistoryMenu(menu:IMenu) { 
      const idx = this.historyMenu.indexOf(menu);
      this.historyMenu.splice(idx,1)
    },
    getMenuByRoute() {
      this.menus = router
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
    },
  },
});
