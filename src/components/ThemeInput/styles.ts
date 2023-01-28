import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const ThemeInputContainer = styled.div`
	position: relative;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Input = styled.input<InputProps>`
	width: 100%;

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

	${({ error }) =>
		error &&
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
