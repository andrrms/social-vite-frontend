import styled from 'styled-components';
import { LogoContainer as AppLogoContainer } from '../AppLogo/styles';

export const SignInFormModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding-block: 1rem;

	background-color: ${({ theme }) => theme.colors.black.blackA11};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	z-index: 9999;

	@media (min-width: 1280px) {
		justify-content: center;
	}
`;

export const LogoContainer = styled.p`
	display: none;

	width: 100%;
	max-width: 95vmin;

	font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
	font-size: 3rem;
	font-weight: 700;

	color: ${({ theme }) => theme.colors.blue10};

	${AppLogoContainer} {
		margin-left: -1rem;
	}

	@media (min-width: 1280px) {
		display: flex;
		justify-content: flex-start;
	}
`;

export const Modal = styled.aside`
	width: 100%;
	max-width: 95vmin;
	// min-height: 60%;
	max-height: 96vh;
	overflow-y: auto;

	color: ${({ theme }) => theme.colors.gray12};
	background-color: ${({ theme }) => theme.colors.slate2};
	border-radius: 10px;

	margin-top: 1.5rem;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	position: relative;

	@media (min-width: 1280px) {
		border-top-left-radius: 0;

		padding: 2rem 5rem 5rem;

		&::before {
			content: '';
			position: absolute;
			top: -1rem;
			left: 0;

			width: 0;
			height: 0;

			border-top: 1rem solid ${({ theme }) => theme.colors.slate2};
			border-right: 1rem solid transparent;

			transform: rotate(270deg);
		}
	}

	p {
		font-family: 'Inter', 'Roboto', sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
		margin-left: 1rem;
	}

	div.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			font-size: 0.9rem;
			color: ${({ theme }) => theme.colors.gray10};
			text-transform: uppercase;
		}
	}

	div.error {
		color: ${({ theme }) => theme.colors.red10};
		background-color: ${({ theme }) => theme.colors.red3};
		border: 1px solid ${({ theme }) => theme.colors.red4};
		border-radius: 5px;

		padding: 1rem;

		p {
			font-size: 1rem;
			font-weight: 500;
			text-align: center;
		}
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin-left: 1rem;
`;

export const Subtitle = styled.h2`
	font-size: 1.4rem;
	font-weight: 600;
	text-align: start;

	margin-top: 2rem;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;

	margin-top: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	input {
		width: 100%;
	}

	${Subtitle} {
		margin-left: 1rem;
	}

	p.hint,
	p.disclaimer {
		font-size: 1rem;
		line-height: 1.1rem;

		margin-left: 1rem;

		color: ${({ theme }) => theme.colors.gray10};

		a {
			color: ${({ theme }) => theme.colors.blue10};
		}

		&.disclaimer {
			font-size: 0.9rem;
		}
	}
`;
