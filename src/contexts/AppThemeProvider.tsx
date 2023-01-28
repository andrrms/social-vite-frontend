/* eslint-disable @typescript-eslint/no-empty-function */
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { colorScheme, darkColorScheme } from '../styles/app.theme';

interface AppThemeContextProps {
	theme: 'light' | 'dark' | 'system';
	setAppTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const AppThemeContext = createContext<AppThemeContextProps>({
	theme: 'dark',
	setAppTheme: () => {},
});

export const useAppTheme = () => useContext(AppThemeContext);

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const localStorageTheme = localStorage.getItem('theme') as
		| 'dark'
		| 'light'
		| 'system';

	const [browserColorScheme, setBrowserColorScheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);
	// Set theme mode, for system / dark / light
	const [theme, setTheme] = useState(
		localStorageTheme ? localStorageTheme : 'system'
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) =>
			setBrowserColorScheme(e.matches);

		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	}, [theme, browserColorScheme]);

	function setAppTheme(theme: 'light' | 'dark' | 'system') {
		setTheme(theme);
	}

	function getColorScheme() {
		if (theme === 'system') {
			return browserColorScheme
				? { colors: darkColorScheme.colors, fixed: colorScheme }
				: { colors: colorScheme.colors, fixed: colorScheme };
		} else {
			return theme === 'dark'
				? { colors: darkColorScheme.colors, fixed: colorScheme }
				: { colors: colorScheme.colors, fixed: colorScheme };
		}
	}

	return (
		<AppThemeContext.Provider value={{ theme, setAppTheme }}>
			<ThemeProvider theme={getColorScheme()}>{children}</ThemeProvider>
		</AppThemeContext.Provider>
	);
};

export default AppThemeProvider;
