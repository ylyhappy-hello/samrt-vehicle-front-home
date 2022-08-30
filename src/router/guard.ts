import { RouteLocationNormalized, Router } from 'vue-router';
import { store } from '@/utils';
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      if (!this.isLogin(to)) return { name: 'login' };
    });
  }
  private isLogin(route: RouteLocationNormalized) {
    const token: any = store.get('token');
    return Boolean(!route.meta?.auth || (route.meta.auth && token?.token));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
