import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

export const router = defineStore('router', {
  state: () => ({
    routes: getRoutes(),
  }),
  getters: {
    get(state) {
      return state.routes;
    },
  },
});

function getRoutes() {
  const router = useRouter();
  const routes = router.getRoutes()
    .filter(route => route.children.length && route.meta.show)
    .map(route => { 
      route.children = route.children.filter(route => route.meta?.show)
      return route;
    })
    .filter(route => route.children.length)
  return routes;
}
