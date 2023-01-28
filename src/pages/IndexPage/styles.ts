import styled from 'styled-components';

import BG from '../../assets/bg4.jpg';

export const IndexPageContainer = styled.div`
	width: 100%;
	height: 100%;

	@media (min-width: 1280px) {
		background-image: url(${BG});
		background-size: cover;
		background-position: center;
	}
`;

export const Content = styled.main`
	width: 100%;
	height: 100%;

	padding-top: 30px;

	background-color: ${({ theme }) => theme.colors.slate1};

	@media (min-width: 768px) {
		max-width: 80vmin;
		margin: 0 auto;
	}

	@media (min-width: 1280px) {
		max-width: 80%;
		background-color: transparent;

		display: grid;
		grid-template-columns: 1fr auto;
	}

	@media (min-width: 1440px) {
		max-width: 70%;
	}

	@media (min-width: 2160px) {
		max-width: 60%;
	}
`;

export const SideView = styled.aside`
	display: none;
	padding-bottom: 2rem;

	@media (min-width: 1280px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 30px;
	}
`;

export const MainView = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;

	@media (min-width: 1280px) {
		min-width: 400px;
	}
`;
