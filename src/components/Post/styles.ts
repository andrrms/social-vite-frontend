import styled from 'styled-components';

export const PostItemContainer = styled.li`
	width: 100%;
	height: fit-content;

	padding: 10px 1rem 4px;

	border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};

	article {
		display: flex;
		gap: 1rem;
		position: relative;

		section {
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 10px;

			p {
				font-family: 'Inter', 'Roboto', sans-serif;
				font-size: 1rem;
				font-weight: 400;
			}
		}

		button.openMenu {
			opacity: 0;
			position: absolute;
			top: 0;
			right: 0;
			width: 2rem;
			height: 2rem;

			padding: 0.5rem;

			border-radius: 2rem;
			background-color: transparent;
			border: none;

			svg {
				width: 100%;
				height: 100%;
				stroke-width: 3px;

				transition: color 0.2s ease, background-color 0.2s ease;
				background-color: transparent;
				border-radius: 50%;
				overflow: visible;

				color: ${({ theme }) => theme.colors.gray11};
			}

			&:hover {
				background-color: ${({ theme }) => theme.colors.slate5};
			}
		}
	}

	transition: background-color 0.2s ease, opacity 0.1s ease;
	&:hover {
		background-color: ${({ theme }) => theme.colors.slate3};

		article button.openMenu {
			opacity: 1;
		}
	}
`;

export const PostHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 5px;

	margin-top: 6px;

	font-size: 0.9rem;
	font-weight: 400;

	color: ${({ theme }) => theme.colors.gray11};

	div {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	strong {
		font-size: 1rem;
		font-weight: 600;

		color: ${({ theme }) => theme.colors.gray12};

		display: flex;
		align-items: center;
		gap: 2px;
	}
`;

export const PostFooter = styled.footer`
	width: 100%;
	margin-top: 4px;
	margin-left: -1rem;
	padding-right: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		padding: 0 0.5rem;

		font-size: 1.1rem;

		color: ${({ theme }) => theme.colors.gray11};
		background-color: transparent;
		border: none;

		span {
			font-size: 0.9rem;
		}

		svg {
			width: 2rem;
			height: 2rem;
			stroke-width: 2px;

			transition: color 0.2s ease, background-color 0.2s ease;
			background-color: transparent;
			border-radius: 50%;
			overflow: visible;

			padding: 0.5rem;
		}

		transition: color 0.1s ease, background-color 0.1s ease;
		&:hover {
			color: ${({ theme }) => theme.colors.blue11};

			svg {
				background-color: ${({ theme }) => theme.colors.blue4};
			}
		}

		&.share {
			&:hover {
				color: ${({ theme }) => theme.colors.green11};

				svg {
					background-color: ${({ theme }) => theme.colors.green4};
				}
			}
		}

		&.like {
			&:hover {
				color: ${({ theme }) => theme.colors.red11};

				svg {
					background-color: ${({ theme }) => theme.colors.red4};
				}
			}

			&.liked {
				color: ${({ theme }) => theme.colors.red11};

				svg {
					fill: ${({ theme }) => theme.colors.red11};
				}

				&:hover {
					svg {
						background-color: ${({ theme }) => theme.colors.red5};
					}
				}
			}
		}
	}
`;
