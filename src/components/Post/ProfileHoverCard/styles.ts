import styled from 'styled-components';
import { Content as HoverCardContent, Arrow } from '@radix-ui/react-hover-card';

export const ProfileContent = styled(HoverCardContent)`
	background-color: ${({ theme }) => theme.colors.slate2};
	border: 1px solid ${({ theme }) => theme.colors.slate8};
	border-radius: 1rem;
	box-shadow: 0 3px 6px 0 ${({ theme }) => theme.colors.slate8};
`;

export const TooltipArrow = styled(Arrow)`
	fill: ${({ theme }) => theme.colors.slate8};
`;

export const Content = styled.aside`
	width: 300px;
	padding: 0.8rem;

	display: flex;
	flex-direction: column;
	gap: 16px;

	color: ${({ theme }) => theme.colors.gray12};

	header {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		gap: 0.5rem;

		div {
			margin-top: 0.2rem;

			span {
				display: flex;
				align-items: center;
				gap: 0.25rem;

				h2 {
					font-size: 1.2rem;
					font-weight: 600;
				}
			}

			span.username {
				font-family: 'Inter', 'Roboto', sans-serif;
				font-size: 0.9rem;
				font-weight: 400;

				margin-top: 0.5rem;

				color: ${({ theme }) => theme.colors.gray11};
			}
		}
	}

	p {
		font-family: 'Inter', 'Roboto', sans-serif;
		font-size: 1rem;
	}

	footer {
		display: flex;
		align-items: center;
		gap: 20px;

		p {
			font-family: 'Inter', 'Roboto', sans-serif;
			font-size: 0.9rem;
			font-weight: 400;
			line-height: 1.3rem;

			color: ${({ theme }) => theme.colors.gray11};

			strong {
				font-weight: 700;

				color: ${({ theme }) => theme.colors.gray12};
			}
		}
	}
`;

