import styled from 'styled-components';
import { ContentContainer } from '../../styles/global.style';

export const HomeFeedContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.colors.slate1};
	color: ${({ theme }) => theme.colors.gray12};
`;

export const HomeFeedWrapper = styled.div`
	width: 100%;
	height: 100%;

	${ContentContainer}

	aside {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 20px;

		position: sticky;
		top: 10px;

		section {
			width: 100%;
			height: fit-content;

			margin-top: 20px;
			padding: 10px;

			display: flex;
			flex-direction: column;
			gap: 10px;

			background-color: ${({ theme }) => theme.colors.blue3};
			border: 1px solid ${({ theme }) => theme.colors.blue4};
			border-radius: 10px;

			h2 {
				font-size: 1.4rem;
				font-weight: 600;

				color: ${({ theme }) => theme.colors.gray12};

				display: flex;
				align-items: center;
				gap: 0.5rem;
			}

			p {
				font-family: 'Inter', sans-serif;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.3rem;

				color: ${({ theme }) => theme.colors.gray12};

				a {
					color: ${({ theme }) => theme.colors.blue10};
				}
			}
		}
	}
`;

export const Emoji = styled.img`
	display: inline;
	width: 1.5rem;
	height: 1.5rem;
	line-height: 1.7rem;
`;
