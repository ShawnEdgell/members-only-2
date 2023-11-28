// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/', // Serve from the domain root
  build: {
    outDir: 'public', // Output directory
  },
});
