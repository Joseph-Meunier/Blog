export const languages = {
	fr: 'Français',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
	fr: {
		'nav.home': 'Accueil',
		'nav.blog': 'Blog',
		'nav.status': 'Statut',
		'blog.previous': '← Précédent',
		'blog.next': 'Suivant →',
		'blog.page': 'Page {current} sur {total}',
		'blog.empty': 'Aucun article disponible dans cette langue.',
		'post.written': 'Écrit le',
		'post.published': 'Publié le',
		'post.updated': 'Mis à jour le',
		'post.readingTime': 'Temps de lecture',
		'post.tags': 'Tags',
	},
	en: {
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.status': 'Status',
		'blog.previous': '← Previous',
		'blog.next': 'Next →',
		'blog.page': 'Page {current} of {total}',
		'blog.empty': 'No posts are available in this language yet.',
		'post.written': 'Written on',
		'post.published': 'Published on',
		'post.updated': 'Updated on',
		'post.readingTime': 'Reading time',
		'post.tags': 'Tags',
	},
} as const;
