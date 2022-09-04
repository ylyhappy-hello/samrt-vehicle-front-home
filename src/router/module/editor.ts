import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { menu: { title: '编辑器', icon: 'fas fa-marker' } },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { menu: { title: 'markdown编辑器' }, auth: true },
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { menu: { title: '编辑器' } },
    },
  ],
} as RouteRecordRaw;
