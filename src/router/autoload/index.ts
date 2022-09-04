import utils from '@/utils';
import { RouteRecordRaw } from 'vue-router';
import autoloadModuleRoutes from './module';
import { getRoutes } from './view';
const { env } = utils;
let routes = [] as RouteRecordRaw[];
if (env.VITE_ROUTE_AUTOLOAD) {
  routes = getRoutes();
} else {
  routes = autoloadModuleRoutes();
}
export default routes;
