import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths so the production build can be served from any
  // sub-path (e.g. GitHub Pages project sites).
  base: './',
  server: {
    port: 3000,
    open: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 0
  }
});
