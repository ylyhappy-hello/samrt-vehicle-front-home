import {RouteRecordRaw} from 'vue-router'
export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/error.vue'),
  children: [
    {name: 'error.404', path:'404', component: ()=> import('@/views/error/404.vue')},
    {name: 'error.403', path:'403', component: ()=> import('@/views/error/403.vue')},
    {name: 'error.500', path:'500', component: ()=> import('@/views/error/500.vue')},
  ]
} as RouteRecordRaw;
