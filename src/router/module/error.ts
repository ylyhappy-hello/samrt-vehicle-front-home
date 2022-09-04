import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'error',
  path: '/error',
  meta: { menu: { title: '错误页面', icon: 'fas fa-bug' } },
  component: () => import('@/layouts/admin.vue'),
  children: [
    {
      name: 'error.404',
      path: '404',
      component: () => import('@/views/error/404.vue'),
      meta: { menu: { title: '404页面' } },
    },
    {
      name: 'error.403',
      path: '403',
      component: () => import('@/views/error/403.vue'),
      meta: { menu: { title: '403页面', icon: 'fas fa-bug' } },
    },
    {
      name: 'error.500',
      path: '500',
      component: () => import('@/views/error/500.vue'),
      meta: { menu: { title: '500页面' } },
    },
  ],
} as RouteRecordRaw;
