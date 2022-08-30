import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
export function setupPlugins(isBuild: boolean, env: viteEnv) {
  const plugins: Plugin[] = [vue()];
  return plugins;
}

