// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
	site: 'http://blog-front-xhqwx0-35c7b6-69-62-110-239.sslip.io',
	base: isProd ? '/Blog' : '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro',
		}
	},
	// Configuration pour les erreurs (sans redirects)
	build: {
		assets: 'assets'
	}
});
