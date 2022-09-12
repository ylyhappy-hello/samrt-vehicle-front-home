import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
import { setupElementImport } from './element';
export function setupPlugins(isBuild: boolean, env: viteEnv) {
  let plugins: Plugin[] = [vue()];
  plugins = [...plugins,...setupElementImport()]
  return plugins;
}

