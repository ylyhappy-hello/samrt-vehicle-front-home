import _ from 'lodash';
export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true';
    }
    if (/^\d+$/.test(value)) {
      envs[key] = Number(value);
    }
    if (value == 'null') envs[key] = null;
    if (value == 'undifined') envs[key] = undefined;
  });
  return envs as viteEnv;
}
