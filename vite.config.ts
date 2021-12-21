import { defineConfig } from 'vite'
import ruby from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    ruby(),
    svelte()
  ],
})
