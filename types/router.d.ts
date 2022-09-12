// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    permissions?: string[];
    menu?: IMenu;
    enterClass?: string;
    leaveClass?: string;
  }
}
