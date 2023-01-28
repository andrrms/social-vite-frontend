import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ThemeButtonProps } from './types';
import { LogoContainer } from '../AppLogo/styles';

export const ButtonStyle = css<ThemeButtonProps>`
	${({
		theme,
		primary,
		secondary,
		sublime,
		extend,
		large,
		transparent,
		disabled,
	}) => css`
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		background-color: ${theme.colors.gray5};
		color: ${theme.colors.gray12};

		border: none;
		border-radius: 2rem;

		width: fit-content;
		padding: 6px 0.8rem;

		font-size: 1.2rem;
		font-weight: 500;
		font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
		text-decoration: none;

		transition: background-color 0.1s ease;
		&:hover {
			background-color: ${theme.colors.gray6};
		}

		&:has(svg:only-child),
		&:has(${LogoContainer}:only-child) {
			padding: 8px;
		}

		${extend &&
		css`
			width: 100%;
		`}

		${large &&
		css`
			padding: 10px 1rem;

			font-size: 1.4rem;
			line-height: 1.8rem;
			font-weight: 600;

			&:has(svg:only-child),
			&:has(${LogoContainer}:only-child) {
				padding: 12px;
			}
		`}

		${disabled &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`}

		${sublime &&
		css`
			background-color: ${theme.colors.gray3};
			color: ${theme.colors.gray11};

			font-weight: 400;

			&:hover {
				background-color: ${theme.colors.gray4};
			}
		`}

		${primary &&
		css`
			background-color: ${theme.colors.blue9};
			color: ${theme.fixed.colors.gray1};

			font-weight: 600;

			&:hover {
				background-color: ${theme.colors.blue10};
			}

			${sublime &&
			css`
				background-color: ${theme.colors.blue3};
				color: ${theme.colors.blue11};

				font-weight: 400;

				&:hover {
					background-color: ${theme.colors.blue4};
				}
			`}
		`}

		${secondary &&
		css`
			background-color: ${theme.colors.gray12};
			color: ${theme.colors.gray1};

			&:hover {
				background-color: ${theme.colors.gray11};
			}

			&:disabled {
				background-color: ${theme.colors.gray9};
				color: ${theme.colors.gray3};
			}
		`}

		${transparent &&
		css`
			background-color: transparent;
			color: ${theme.colors.gray12};
		`}
	`}
`;

export const Button = styled.button`
	${ButtonStyle}
`;

export const LinkBtn = styled(Link)`
	${ButtonStyle}
`;
