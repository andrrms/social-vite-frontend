import styled from 'styled-components';
import { ContentContainer } from '../../styles/global.style';

export const NotFoundContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.colors.red3};

	display: grid;
	place-items: center;
`;

export const Container = styled.div`
	width: 100%;

	${ContentContainer}

	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;

	@media (min-width: 1280px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const Content = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 10px;

	@media (min-width: 1280px) {
		gap: 30px;
	}
`;

export const Logo = styled.p`
	font-size: 3rem;
	color: ${({ theme }) => theme.colors.blue9};
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;

	width: 350px;

	color: ${({ theme }) => theme.colors.gray12};

	@media (min-width: 1280px) {
		font-size: 4rem;
	}
`;

export const Text = styled.p`
	font-size: 1.2rem;
	font-family: 'Inter', sans-serif;
	font-weight: 500;

	width: 400px;

	color: ${({ theme }) => theme.colors.gray12};
`;

export const NotFoundImageContainer = styled.div`
	max-width: 70%;
	margin: 0 auto;

	@media (min-width: 1280px) {
		max-width: fit-content;
		margin: initial;
	}
`;

export const Image = styled.img`
	width: 100%;

	@media (min-width: 1280px) {
		width: auto;
		height: 80vh;
	}
`;
