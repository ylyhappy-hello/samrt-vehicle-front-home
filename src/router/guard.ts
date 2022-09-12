import { CacheEnum } from './../enum/cacheEnum';
import { RouteLocationNormalized, Router } from 'vue-router';
import user from '@/store/userStore';
import utils from '@/utils';
const { store } = utils;
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    if (!this.isLogin(to)) return { name: 'login' };
    if (!this.isGuest(to)) return from;
    await this.getUserInfo();
  }
  private getUserInfo() {
    if (this.token()) {
      return user().getUserInfo();
    }
  }
  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME);
  }
  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(!route.meta?.auth || (route.meta.auth && this.token()));
    if (!state) { 
      utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME,route.name)
    }
    return state;
  }
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta?.guest || (route.meta.guest && !this.token()));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
