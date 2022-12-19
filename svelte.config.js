import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: null,
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
			out: 'build' 
		})
	}
};

export default config;
