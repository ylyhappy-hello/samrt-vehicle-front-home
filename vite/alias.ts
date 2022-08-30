import path from 'path';
import type { AliasOptions } from 'vite';
export const alias = { '@': path.resolve(__dirname, '../src') } as AliasOptions;
