import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import Windicss from 'vite-plugin-windicss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Windicss({ transformCSS: 'pre' })],
  resolve: {
    alias: {
      $src: path.resolve('src'),
      $components: path.resolve('src/components'),
      $stores: path.resolve('src/stores'),
      $assets: path.resolve('src/assets')
    }
  },
  ssr: {
    noExternal: ['dayjs']
  }
};

export default config;