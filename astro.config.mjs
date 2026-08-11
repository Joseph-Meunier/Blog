// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'http://blog-front-xhqwx0-35c7b6-69-62-110-239.sslip.io';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
	site,
	// Dokploy exposes the nginx container at the domain root. A /Blog base
	// makes Astro emit /Blog/assets/... URLs that do not exist in that image.
	base,
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
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
