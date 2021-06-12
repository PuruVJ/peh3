// @ts-check
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    target: '#svelte',
    adapter: staticAdapter(),
    router: false,
  },
};

export default config;
