import { RouteRecordRaw } from 'vue-router';
export default function autoloadModuleRoutes() {
  const modules = import.meta.glob('../module/**/*.ts', {
    import: 'default',
    eager: true,
  });
  const routes = [] as RouteRecordRaw[];
  Object.keys(modules).forEach(key => {
    routes.push(modules[key] as RouteRecordRaw);
  })
  return routes;
}
