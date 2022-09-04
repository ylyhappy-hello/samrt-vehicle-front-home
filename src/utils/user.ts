import userApi from '@/apis/user';
import { CacheEnum } from '@/enum/cacheEnum';
import { router } from '@/router';
import userStore from '@/store/userStore';
import store from './store';

interface ILoginData {
  account: string;
  password: string;
}

export async function login(values: ILoginData) {
  const {
    data: { token },
    type,
  } = await userApi.login(values);
  store.set(CacheEnum.TOKEN_NAME, token);
  const name = store.get(CacheEnum.REDIRECT_ROUTE_NAME);
  if (type == 'success') {
    console.log('执行路由跳转');
    router.push({ name });
  }
}
export function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  router.push({ name: 'home' });
  userStore().info = null;
}
