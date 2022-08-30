import { App } from 'vue';
import { setupTailwindcss } from './tailwindcss';
export function setupPlugins(app: App) {
  setupTailwindcss();
  autoRegistryComponent(app);
}

// 自动注册全局组价
function autoRegistryComponent(app: App) {
  const components = import.meta.glob("../components/form/*.vue", { import: "default", eager: true })
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift();
    app.component(name!,components[key] as any)
  })
}
