import styled from 'styled-components';
import { blue } from '@radix-ui/colors';

import { LogoContainer } from '../AppLogo/styles';

export const LandingMessageBubbleContainer = styled.div`
	width: fit-content;

	color: ${({ theme }) => theme.colors.gray1};

	p {
		margin: 1rem;

		font-size: 4rem;
		font-weight: 700;
		font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;

		${LogoContainer} {
			font-size: 3.7rem;
			font-weight: 900;

			color: ${blue.blue8};
			gap: 1rem;
		}
	}
`;

export const MessageBubble = styled.div`
	position: relative;

	background-color: ${({ theme }) => theme.colors.slate2};
	color: ${({ theme }) => theme.colors.gray12};
	border-radius: 1rem;
	border-top-left-radius: 0;

	padding: 0.5rem 1rem;
	margin-left: 2.5rem;

	p {
		font-size: 3rem;
	}

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

	ul.reactions {
		display: flex;
		justify-content: flex-end;
		gap: 4rem;

		margin-right: 20px;
		padding-bottom: 10px;

		li {
			display: flex;
			align-items: center;
			gap: 4px;

			font-size: 1.2rem;
			font-weight: 500;
			cursor: default;

			svg {
				stroke-width: 3px;
			}

			&.like {
				color: ${({ theme }) => theme.colors.red11};
			}

			&.share {
				color: ${({ theme }) => theme.colors.green11};
			}

			&.comment {
				color: ${({ theme }) => theme.colors.blue11};
			}
		}
	}
`;

export const Emoji = styled.span`
	font-size: inherit;

	img {
		width: 2.8rem;
		height: 2.8rem;
	}
`;
