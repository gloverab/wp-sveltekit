import preprocess from 'svelte-preprocess';
import path from 'path';
import Windicss from 'vite-plugin-windicss';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('src'),
					$components: path.resolve('src/components'),
					$stores: path.resolve('src/stores'),
					$assets: path.resolve('src/assets')
				}
			},
			plugins: [
				Windicss({ transformCSS: 'pre' })
			],
			ssr: {
				noExternal: ['dayjs']
			}
		},
	}
};

export default config;
