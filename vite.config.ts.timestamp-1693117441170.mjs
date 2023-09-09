// vite.config.ts
import { loadEnv } from "vite";

// vite/alias.ts
import path from "path";
var __vite_injected_original_dirname = "/home/yly_no_nvidia/Desktop/my-front-scaffolding/vite";
var alias = { "@": path.resolve(__vite_injected_original_dirname, "../src") };

// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";

// vite/utils.ts
import _ from "lodash";
function parseEnv(env) {
  const envs = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false") {
      envs[key] = value == "true";
    }
    if (/^\d+$/.test(value)) {
      envs[key] = Number(value);
    }
    if (value == "null")
      envs[key] = null;
    if (value == "undifined")
      envs[key] = void 0;
  });
  return envs;
}

// vite/plugins/index.ts
import vue from "@vitejs/plugin-vue";

// vite/plugins/element.ts
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
function setupElementImport() {
  return [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      dts: "types/components.d.ts",
      directoryAsNamespace: true
    })
  ];
}

// vite/plugins/index.ts
function setupPlugins(isBuild, env) {
  let plugins = [vue()];
  plugins = [...plugins, ...setupElementImport()];
  return plugins;
}

// vite.config.ts
function vite_config_default({ command, mode }) {
  console.log(command, "mode", mode);
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    }
  };
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS9hbGlhcy50cyIsICJ2aXRlL3V0aWxzLnRzIiwgInZpdGUvcGx1Z2lucy9pbmRleC50cyIsICJ2aXRlL3BsdWdpbnMvZWxlbWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUveWx5X25vX252aWRpYS9EZXNrdG9wL215LWZyb250LXNjYWZmb2xkaW5nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IENvbmZpZ0VudiwgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgYWxpYXMgfSBmcm9tICcuL3ZpdGUvYWxpYXMnO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5pbXBvcnQgeyBwYXJzZUVudiB9IGZyb20gJy4vdml0ZS91dGlscyc7XG5pbXBvcnQgeyBzZXR1cFBsdWdpbnMgfSBmcm9tICcuL3ZpdGUvcGx1Z2lucyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBjb21tYW5kLCBtb2RlIH06IENvbmZpZ0Vudikge1xuICBjb25zb2xlLmxvZyhjb21tYW5kLCAnbW9kZScsIG1vZGUpO1xuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PSAnYnVpbGQnO1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgZW52ID0gcGFyc2VFbnYobG9hZEVudihtb2RlLCByb290KSk7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogWy4uLnNldHVwUGx1Z2lucyhpc0J1aWxkLCBlbnYpLCB2aXN1YWxpemVyKCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzLFxuICAgIH0sXG4gICAgLy8gXHU1MjA2XHU2QTIxXHU1NzU3XHU2MjUzXHU1MzA1XG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIG1hbnVhbENodW5rcyhpZDogc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV1cbiAgICAgICAgICAgICAgICAuc3BsaXQoJy8nKVswXVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS9hbGlhcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS9hbGlhcy50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHR5cGUgeyBBbGlhc09wdGlvbnMgfSBmcm9tICd2aXRlJztcbmV4cG9ydCBjb25zdCBhbGlhcyA9IHsgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjJykgfSBhcyBBbGlhc09wdGlvbnM7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS91dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS91dGlscy50c1wiO2ltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFbnYoZW52OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGNvbnN0IGVudnMgPSBfLmNsb25lRGVlcChlbnYpO1xuICBPYmplY3QuZW50cmllcyhlbnYpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PSAndHJ1ZScgfHwgdmFsdWUgPT0gJ2ZhbHNlJykge1xuICAgICAgZW52c1trZXldID0gdmFsdWUgPT0gJ3RydWUnO1xuICAgIH1cbiAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgIGVudnNba2V5XSA9IE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSAnbnVsbCcpIGVudnNba2V5XSA9IG51bGw7XG4gICAgaWYgKHZhbHVlID09ICd1bmRpZmluZWQnKSBlbnZzW2tleV0gPSB1bmRlZmluZWQ7XG4gIH0pO1xuICByZXR1cm4gZW52cyBhcyB2aXRlRW52O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS9wbHVnaW5zL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHNldHVwRWxlbWVudEltcG9ydCB9IGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQbHVnaW5zKGlzQnVpbGQ6IGJvb2xlYW4sIGVudjogdml0ZUVudikge1xuICBsZXQgcGx1Z2luczogUGx1Z2luW10gPSBbdnVlKCldO1xuICBwbHVnaW5zID0gWy4uLnBsdWdpbnMsLi4uc2V0dXBFbGVtZW50SW1wb3J0KCldXG4gIHJldHVybiBwbHVnaW5zO1xufVxuXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3lseV9ub19udmlkaWEvRGVza3RvcC9teS1mcm9udC1zY2FmZm9sZGluZy92aXRlL3BsdWdpbnMvZWxlbWVudC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS95bHlfbm9fbnZpZGlhL0Rlc2t0b3AvbXktZnJvbnQtc2NhZmZvbGRpbmcvdml0ZS9wbHVnaW5zL2VsZW1lbnQudHNcIjtpbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFbGVtZW50SW1wb3J0KCkge1xuICByZXR1cm4gW1xuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBkdHM6ICd0eXBlcy9jb21wb25lbnRzLmQudHMnLFxuICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXG4gICAgfSksXG4gIF07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQW9CLGVBQWU7OztBQ0FoQyxPQUFPLFVBQVU7QUFBdFYsSUFBTSxtQ0FBbUM7QUFFbEMsSUFBTSxRQUFRLEVBQUUsS0FBSyxLQUFLLFFBQVEsa0NBQVcsUUFBUSxFQUFFOzs7QURBOUQsU0FBUyxrQkFBa0I7OztBRUYwUyxPQUFPLE9BQU87QUFDNVUsU0FBUyxTQUFTLEtBQTBCO0FBQ2pELFFBQU0sT0FBTyxFQUFFLFVBQVUsR0FBRztBQUM1QixTQUFPLFFBQVEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNO0FBQzVDLFFBQUksU0FBUyxVQUFVLFNBQVMsU0FBUztBQUN2QyxXQUFLLE9BQU8sU0FBUztBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQ3ZCLFdBQUssT0FBTyxPQUFPLEtBQUs7QUFBQSxJQUMxQjtBQUNBLFFBQUksU0FBUztBQUFRLFdBQUssT0FBTztBQUNqQyxRQUFJLFNBQVM7QUFBYSxXQUFLLE9BQU87QUFBQSxFQUN4QyxDQUFDO0FBQ0QsU0FBTztBQUNUOzs7QUNkNlYsT0FBTyxTQUFTOzs7QUNBWixPQUFPLGdCQUFnQjtBQUN4WCxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUM3QixTQUFTLHFCQUFxQjtBQUNuQyxTQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNqQyxNQUFNLENBQUMsZ0JBQWdCO0FBQUEsTUFDdkIsS0FBSztBQUFBLE1BQ0wsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLEVBQ0g7QUFDRjs7O0FEWk8sU0FBUyxhQUFhLFNBQWtCLEtBQWM7QUFDM0QsTUFBSSxVQUFvQixDQUFDLElBQUksQ0FBQztBQUM5QixZQUFVLENBQUMsR0FBRyxTQUFRLEdBQUcsbUJBQW1CLENBQUM7QUFDN0MsU0FBTztBQUNUOzs7QUhGZSxTQUFSLG9CQUFrQixFQUFFLFNBQVMsS0FBSyxHQUFjO0FBQ3JELFVBQVEsSUFBSSxTQUFTLFFBQVEsSUFBSTtBQUNqQyxRQUFNLFVBQVUsV0FBVztBQUMzQixRQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFFBQU0sTUFBTSxTQUFTLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFDeEMsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLEdBQUcsYUFBYSxTQUFTLEdBQUcsR0FBRyxXQUFXLENBQUM7QUFBQSxJQUNyRCxTQUFTO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUVBLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBWTtBQUN2QixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPLEdBQ0osU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLEdBQ3ZCLE1BQU0sR0FBRyxFQUFFLEdBQ1gsU0FBUztBQUFBLFlBQ2Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=