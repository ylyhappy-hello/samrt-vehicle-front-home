import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { title: '编辑器', icon: 'fas fa-marker', show: true },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { title: 'markdown编辑器', show: true },
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { title: '编辑器', show: true },
    },
  ],
} as RouteRecordRaw;
