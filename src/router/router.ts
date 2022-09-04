import { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: { auth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue'),
    meta: { guest: true },
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
  },
] as RouteRecordRaw[];
