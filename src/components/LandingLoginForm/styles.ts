import styled, { css } from 'styled-components';

import { LogoContainer } from '../AppLogo/styles';
import { InputProps } from './types';

export const LandingLoginFormContainer = styled.div`
	height: fit-content;
	padding: 20px;
	padding-block: 20px 20px;

	background-color: ${({ theme }) => theme.colors.slate1};
	border-radius: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	div.selector-container {
		margin-top: 20px;
	}

	div.error {
		font-size: 1.2rem;
		font-weight: 500;

		color: ${({ theme }) => theme.colors.red9};
		background-color: ${({ theme }) => theme.colors.red2};
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.colors.red3};

		padding: 10px 20px;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: 700;

	color: ${({ theme }) => theme.colors.blue9};

	margin-top: 20px;

	${LogoContainer} {
		gap: 0.5rem;
	}
`;

export const Subtitle = styled.h2`
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: uppercase;

	color: ${({ theme }) => theme.colors.gray9};

	margin-top: 10px;
`;

export const Form = styled.form`
	width: 90vmin;
	max-width: 400px;

	display: flex;
	flex-direction: column;
	gap: 10px;

	p.hint {
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		color: ${({ theme }) => theme.colors.gray10};

		a {
			color: ${({ theme }) => theme.colors.blue10};

			&:visited {
				color: ${({ theme }) => theme.colors.blue11};
			}
		}
	}

	p.error {
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		color: ${({ theme }) => theme.colors.red9};

		margin-top: 0;
	}
`;

export const Input = styled.input<InputProps>`
	font-size: 1.2rem;
	line-height: 2.2rem;
	font-weight: 400;

	color: ${({ theme }) => theme.colors.gray12};
	border-radius: 2rem;
	border: 2px solid ${({ theme }) => theme.colors.gray5};
	background-color: ${({ theme }) => theme.colors.gray2};
	outline: none;

	padding: 4px 1rem;

	transition: border-color 0.05s ease;
	&:hover {
		border-color: ${({ theme }) => theme.colors.blue8};
	}

	&:focus {
		border-color: ${({ theme }) => theme.colors.blue9};
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray9};
	}

	${({ $error }) =>
		$error &&
		css`
			border-color: ${({ theme }) => theme.colors.red9};
			background-color: ${({ theme }) => theme.colors.red2};

			&:hover {
				border-color: ${({ theme }) => theme.colors.red11};
			}

			&:focus {
				border-color: ${({ theme }) => theme.colors.red10};
			}
		`}
`;
