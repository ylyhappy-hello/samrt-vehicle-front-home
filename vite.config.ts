import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { alias } from './vite/alias';
import {parseEnv} from './vite/utils'
import { setupPlugins } from './vite/plugins';
export default function ({ command, mode }: ConfigEnv) {
  console.log(command, 'mode', mode);
  const isBuild = command == 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: setupPlugins(isBuild,env),
    resolve: {
      alias,
    },
  };
};
