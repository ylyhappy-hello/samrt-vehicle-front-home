import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  redirect: '/admin/home',
  meta: { menu: { title: 'Dashboard', icon: 'fas fa-home' }, auth: true },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
      meta: { menu: { title: '工作台菜单' }, auth: true },
    },
  ],
} as RouteRecordRaw;
