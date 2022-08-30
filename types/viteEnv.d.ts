interface viteEnv extends Readonly<Record<string, any>>{
  readonly VITE_SOME_KEY: number;
  readonly VITE_ROUTE_AUTOLOAD: boolean;
  readonly VITE_API_URL: string;
}

interface ImportMetaEnv extends viteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
