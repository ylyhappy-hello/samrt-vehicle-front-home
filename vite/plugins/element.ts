import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export function setupElementImport() {
  return [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
      directoryAsNamespace: true,
    }),
  ];
}
