import { defaultLang, languages, ui, type Lang } from './ui';

export function isSupportedLang(value: string | undefined): value is Lang {
	return Boolean(value && value in languages);
}

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	return isSupportedLang(lang) ? lang : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: keyof (typeof ui)[typeof defaultLang], values: Record<string, string | number> = {}) => {
		let value: string = ui[lang][key] ?? ui[defaultLang][key];
		for (const [name, replacement] of Object.entries(values)) {
			value = value.replace(`{${name}}`, String(replacement));
		}
		return value;
	};
}

export function localizedPath(lang: Lang, path = '/') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `/${lang}${normalizedPath}`;
}
