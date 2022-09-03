// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    // 路由是否在菜单中显示
    show?: boolean;
    // 菜单标题
    title?: string;
    icon?: string;
    active?: boolean;
    guest?: boolean;
    permissions?: string[];
  }
}
