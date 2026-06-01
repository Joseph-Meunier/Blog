// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
	site: 'https://GastonDeSade.github.io',
  	base: isProd ? '/blog' : '/',
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
