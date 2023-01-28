import { colorScheme } from './app.theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: typeof colorScheme.colors;
		fixed: typeof colorScheme;
	}
}
