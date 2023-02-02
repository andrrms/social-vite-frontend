import { Arrow, Content } from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';

export const MenuOpenDown = keyframes`
	from {
		max-height: 1rem;
	}
	to {
		max-height: 180px;
	}
`;

export const MenuContent = styled(Content)`
	background-color: ${({ theme }) => theme.colors.slate2};
	border: 1px solid ${({ theme }) => theme.colors.slate6};
	box-shadow: 0 1px 3px 0 ${({ theme }) => theme.colors.slate6};
	border-radius: 0.5rem;
	overflow: hidden;

	height: 100%;

	display: flex;
	flex-direction: column;

	&[data-state='open'] {
		animation: ${MenuOpenDown} 0.2s forwards;
		animation-timing-function: ease-out;
	}
`;

export const MenuArrow = styled(Arrow)`
	fill: ${({ theme }) => theme.colors.slate6};
`;

export const MenuItem = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.gray12};
	border: none;
	outline: none;

	padding: 0.75rem 1rem;

	font-size: 1rem;
	font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
	font-weight: 600;
	text-align: start;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.slate3};
	}

	&:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.blue6};
		background-color: ${({ theme }) => theme.colors.blue3};
	}
`;

