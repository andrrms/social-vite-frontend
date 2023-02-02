import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostItemContainer = styled.li`
	width: 100%;
	height: fit-content;

	padding: 10px 1rem 4px;

	border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};

	article {
		display: flex;
		flex-direction: column;

		section {
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 4px;
		}

		button.openMenu {
			opacity: 0;
			position: absolute;
			top: 0;
			right: 0;
			width: 2rem;
			height: 2rem;
			margin: -0.25rem -0.6rem;

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

export const PostAction = styled.div`
	margin-bottom: 4px;
	margin-left: calc(1rem);

	span {
		display: flex;
		align-items: center;
		gap: 4px;

		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.gray11};

		svg {
			margin-right: 4px;
		}

		a {
			color: inherit;

			text-decoration: none;
			font-weight: 600;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

export const PostBodyContent = styled.div`
	display: flex;
	gap: 1rem;
	position: relative;

	a.entity {
		color: ${({ theme }) => theme.colors.blue10};

		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const PostHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 5px;

	font-size: 0.9rem;
	font-weight: 400;

	color: ${({ theme }) => theme.colors.gray11};
`;

export const ProfileNameLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 5px;

	text-decoration: none;

	strong {
		font-size: 1rem;
		font-weight: 600;

		color: ${({ theme }) => theme.colors.gray12};
		text-decoration-color: ${({ theme }) => theme.colors.gray11};

		display: flex;
		align-items: center;
		gap: 2px;

		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	span {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.gray11};
		text-decoration-color: ${({ theme }) => theme.colors.gray11};
	}
`;

export const PostContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;

	p {
		font-family: 'Inter', 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.1rem;

		word-break: break-word;
		white-space: pre-wrap;

		span.place {
			font-size: 0.9rem;
			color: ${({ theme }) => theme.colors.gray10};
			cursor: default;

			strong {
				font-weight: 600;
			}
		}
	}
`;

export const QuoteArea = styled.div`
	margin-top: 0.5rem;
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
		outline: none;
		border: none;

		transition: color 0.1s ease, background-color 0.1s ease;
		&:hover {
			color: ${({ theme }) => theme.colors.blue11};

			svg {
				background-color: ${({ theme }) => theme.colors.blue4};
			}
		}

		&:focus-visible {
			outline: 2px solid ${({ theme }) => theme.colors.blue6};
			background-color: ${({ theme }) => theme.colors.blue3};
			border-radius: 10px;
		}

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

		&.share {
			&:hover {
				color: ${({ theme }) => theme.colors.green11};

				svg {
					background-color: ${({ theme }) => theme.colors.green4};
				}
			}

			&:focus-visible {
				outline: 2px solid ${({ theme }) => theme.colors.green6};
				background-color: ${({ theme }) => theme.colors.green3};
			}

			&.shared {
				color: ${({ theme }) => theme.colors.green11};

				&:hover {
					svg {
						background-color: ${({ theme }) => theme.colors.green5};
					}
				}

				&:focus-visible {
					outline: 2px solid ${({ theme }) => theme.colors.green9};
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

			&:focus-visible {
				outline: 2px solid ${({ theme }) => theme.colors.red6};
				background-color: ${({ theme }) => theme.colors.red3};
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

				&:focus-visible {
					outline: 2px solid ${({ theme }) => theme.colors.red9};
					background-color: ${({ theme }) => theme.colors.red4};
				}
			}
		}
	}
`;

export const TooltipElement = styled.div`
	padding: 3px;

	background-color: ${({ theme }) => theme.colors.gray8.replace(')', ', 80%)')};
	border: 1px solid ${({ theme }) => theme.colors.gray9};
	color: ${({ theme }) => theme.colors.gray12};
	border-radius: 6px;

	font-size: 0.7rem;
`;

