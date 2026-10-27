import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://<user>.github.io/<repo-name>/ on GitHub Pages.
// VITE_BASE must therefore match the repository name (see .env and README.md).
export function normalizeBase(value) {
  let base = (value || '/').trim();
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  return base;
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = command === 'serve' ? '/' : normalizeBase(env.VITE_BASE || '/socialmint-website/');
  return {
    base: /socialmint-website/,
    plugins: [react()],
    build: { outDir: 'dist', sourcemap: false },
  };
});
