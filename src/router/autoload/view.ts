import { RouteRecordRaw } from 'vue-router';
const layouts = import.meta.glob('../layouts/*.vue', {
  import: 'default',
  eager: true,
});
// 两层路由 外层是layout
const multiViews = import.meta.glob('../views/*/*.vue', {
  import: 'default',
  eager: true,
});
// 一层路由 比如 /home
const isoViews = import.meta.glob('../views/*.vue', {
  import: 'default',
  eager: true,
});
export function getRoutes() {
  const routes = [] as RouteRecordRaw[];
  // view下 获取布局路由
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoutes(route);
    routes.push(route);
  });
  // view 没有布局包裹的路由 比如home
  Object.entries(isoViews).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    routes.push(route);
  });
  return routes;
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(multiViews).forEach(([file, module]) => {
    if (file.includes(`../views${layoutRoute.path}`)) {
      const route = getRouteByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteByModule(file: string, module: unknown) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '');
  const route = {
    name: name.replace('/', '.'),
    path: '/' + name,
    component: module,
  } as RouteRecordRaw;
  Object.assign(route, (module as any).route);
  return route;
}

