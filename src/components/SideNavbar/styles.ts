import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoContainer } from '../AppLogo/styles';
import { Button } from '../ThemeButton/styles';

export const SideNavbarContainer = styled.nav`
	max-width: 250px;
	height: 100%;
	margin-left: auto;

	position: fixed;
	top: 0;
`;

export const NavWrapper = styled.div`
	width: 100%;
	height: 100%;

	padding-block: 10px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
`;

export const LinksList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;

	list-style: none;
`;

export const Item = styled.li``;

export const ItemLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 1rem;

	color: ${({ theme }) => theme.colors.gray12};
	border-radius: 2rem;

	font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
	font-size: 1.4rem;
	font-weight: 500;
	text-decoration: none;

	padding: 0.8rem 1.2rem;

	transition: background-color 0.2s;
	&:hover {
		background-color: ${({ theme }) => theme.colors.slate3};
	}

	svg {
		stroke-width: 2.5px;
		font-size: 1.6rem;
	}

	&:has(${LogoContainer}:only-child) {
		padding: 1rem;

		&:hover {
			background-color: ${({ theme }) => theme.colors.blue3};
		}
	}
`;

export const ButtonContainer = styled.div`
	width: 250px;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	${Button} {
		font-size: 1.2rem;
	}
`;

export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-self: flex-end;
	gap: 10px;

	margin-top: auto;
`;

export const UserChip = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	width: 100%;
	padding: 0.5rem;

	border: none;
	border-radius: 3rem;
	background-color: ${({ theme }) => theme.colors.slate1};

	transition: background-color 0.2s;
	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.slate2};
	}

	div {
		display: flex;
		flex-direction: column;

		p {
			display: flex;
			align-items: center;
			gap: 0.25rem;

			font-size: 1rem;
			font-weight: 500;
			text-align: start;

			color: ${({ theme }) => theme.colors.gray12};
		}

		span {
			font-size: 0.9rem;
			font-weight: 400;
			text-align: start;

			color: ${({ theme }) => theme.colors.gray11};
		}
	}
`;
