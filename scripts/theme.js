(function () {
	try {
		const storageKey = 'theme';
		const getPreferredTheme = () => {
			const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null;
			if (stored === 'light' || stored === 'dark') return stored;
			if (typeof window !== 'undefined' && window.matchMedia) {
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
			return 'dark';
		};
		const theme = getPreferredTheme();
		document.documentElement.setAttribute('data-theme', theme);
	} catch (_) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
})();
