import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{
	colorScheme: 'light' | 'dark' | 'system';
}>`
	html, body, #root {
		width: 100%;
		height: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: 'Inter', 'Roboto', sans-serif;
		-webkit-tap-highlight-color: none;
	}

	a, button {
		cursor: pointer;
	}

	body {
		color-scheme: ${({ colorScheme }) => colorScheme};
		background-color: ${({ theme }) => theme.colors.slate1};
	}
`;

/**
 *	Reset CSS
 *
 * @version v2.0 | 2011-01-26
 * @link http://meyerweb.com/eric/tools/css/reset/
 * @author Eric A. Meyer
 * @license none (public domain)
 */
export const ResetStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 1rem;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export const ContentContainer = css`
	max-width: 95vmin;
	margin: 0 auto;

	@media (min-width: 768px) {
		max-width: 95%;
	}

	@media (min-width: 1280px) {
		max-width: 80%;
	}

	@media (min-width: 1920px) {
		max-width: 70%;
	}

	@media (min-width: 2560px) {
		max-width: 60%;
	}
`;
