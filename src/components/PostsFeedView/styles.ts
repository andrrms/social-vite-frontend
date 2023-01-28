/* eslint-disable indent */
import styled from 'styled-components';

export const PostsFeedViewContainer = styled.main`
	border-left: 1px solid;
	border-right: 1px solid;
	border-color: ${({ theme }) => theme.colors.slate4};
`;

export const ViewHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 9999;

	width: 100%;
	height: fit-content;

	padding: 1rem;

	display: flex;
	align-items: center;

	border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
	background-color: ${({ theme }) =>
		theme.colors.slate1.replace(')', ', 0.8)')};
	backdrop-filter: blur(10px);

	h1 {
		font-size: 1.2rem;
		font-weight: 600;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
`;

export const PostsList = styled.ul``;

export const NoFollowersSpecialPost = styled.li`
	border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
	padding-bottom: 1rem;

	img {
		width: 100%;
	}

	div {
		padding: 0 2rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		h2 {
			font-size: 1.8rem;
			font-weight: 700;
			text-align: center;

			margin-top: 20px;
		}

		p {
			font-size: 1.2rem;
			font-weight: 400;
			text-align: center;
		}
	}
`;
