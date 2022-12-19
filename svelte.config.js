import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '/',
			precompress: false,
			strict: true,
			out: 'build' 
		})
	}
};

export default config;
