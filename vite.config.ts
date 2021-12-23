import { defineConfig } from 'vite'
import ruby from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import assetsPreprocessor from 'svelte-assets-preprocessor'

export default ({mode}) => {
  const prod = mode == 'production'
  return defineConfig({
    resolve: {
      dedupe: ['axios']
    },
    plugins: [
      ruby(),
      svelte({
        emitCss: prod,
        preprocess: assetsPreprocessor({ /* options */ })
      })
    ],
  })
}
