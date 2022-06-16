// @ts-check
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: staticAdapter({}),
    prerender: { entries: ['/en', '/hi', '/'] },

    vite: {
      plugins: [
        Icons({
          compiler: 'svelte',
          autoInstall: true,
        }),
      ],
    },
  },
};

export default config;
