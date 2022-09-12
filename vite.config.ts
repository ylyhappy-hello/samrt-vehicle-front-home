import { ConfigEnv, loadEnv } from 'vite';
import { alias } from './vite/alias';
import { visualizer } from 'rollup-plugin-visualizer';
import { parseEnv } from './vite/utils';
import { setupPlugins } from './vite/plugins';
export default function ({ command, mode }: ConfigEnv) {
  console.log(command, 'mode', mode);
  const isBuild = command == 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
    },
    // 分模块打包
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
  };
}
