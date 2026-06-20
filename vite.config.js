import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src_web',
  build: {
    outDir: '../www',
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild'
  }
});
