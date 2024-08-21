import { defineConfig } from 'tsup';

// https://github.com/evanw/esbuild/issues/1921#issuecomment-1898197331
const header = `
import { createRequire } from 'node:module';
import path from 'node:path';
import url from 'node:url';

globalThis.require = createRequire(import.meta.url);
globalThis.__filename = url.fileURLToPath(import.meta.url);
globalThis.__dirname = path.dirname(__filename);
`;

export default defineConfig({
  entry: ['./src/migrator.ts'],
  outDir: './dist',
  format: ['esm'],
  splitting: false,
  clean: true,
  banner: {
    js: header
  },
  skipNodeModulesBundle: true,
  target: 'node20',
  platform: 'node',
  // If setting this to false, comment out the `import path from 'node:path';` line in the header
  minify: true,
  bundle: true,
  // https://github.com/egoist/tsup/issues/619
  noExternal: [/(.*)/]
});
