import { RouteLocationNormalized, Router } from 'vue-router';
import { store } from '@/utils';
import user from '@/store/user';
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
    return store.get('token')?.token;
  }
  private isLogin(route: RouteLocationNormalized) {
    const token: any = store.get('token');
    return Boolean(!route.meta?.auth || (route.meta.auth && this.token()));
  }
  private isGuest(route: RouteLocationNormalized) {
    const token: any = store.get('token');
    return Boolean(!route.meta?.guest || (route.meta.guest && !this.token()));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
