import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostLink = styled(Link)`
	display: inline-flex;
	text-decoration: none;
	width: 100%;

	&:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.blue11};
		border-radius: 1rem;
	}
`;

export const MiniPostContainer = styled.article`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.slate6};
	border-radius: 1rem;

	padding: 0.75rem;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	font-family: 'Inter', 'Roboto', sans-serif;
	font-size: 1rem;

	color: ${({ theme }) => theme.colors.gray12};

	&:hover {
		background-color: ${({ theme }) => theme.colors.slate4};
	}

	${PostLink}:focus-visible & {
		background-color: ${({ theme }) => theme.colors.blue2};
	}
`;

export const MiniPostHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	font-size: 1rem;
	color: ${({ theme }) => theme.colors.gray11};

	h3 {
		display: flex;
		align-items: center;
		gap: 4px;

		div {
			display: flex;
			align-items: center;
			gap: 4px;
		}

		strong {
			font-weight: 600;
			color: ${({ theme }) => theme.colors.gray12};

			display: flex;
			align-items: center;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

