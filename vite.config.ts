import { defineConfig } from 'vite';

// Single-page wedding site — no framework plugins needed.
export default defineConfig({
  server: {
    open: true,
    port: 5173,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
  },
});
