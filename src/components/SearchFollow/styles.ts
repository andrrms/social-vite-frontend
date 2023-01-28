import styled from 'styled-components';

export const SearchFollowContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		font-size: 1.4rem;
		font-weight: 600;

		margin-left: 1rem;
	}

	div.input {
		display: flex;
		gap: 0.5rem;
	}

	ul.users {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		overflow-y: auto;
		max-height: 400px;

		li {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			padding: 0.5rem;

			border-radius: 2rem;

			&:hover {
				background-color: ${({ theme }) => theme.colors.slate3};
			}

			div.info {
				flex: 1;

				h3 {
					font-size: 1.2rem;
					font-weight: 500;

					display: flex;
					align-items: center;
					gap: 0.25rem;

					span.badge {
						font-size: 0.8rem;
						font-weight: 600;
						user-select: none;

						padding: 0.1rem 0.25rem;

						border-radius: 4px;
						background-color: ${({ theme }) => theme.colors.gray3};
						color: ${({ theme }) => theme.colors.gray10};
						border: 1px solid ${({ theme }) => theme.colors.gray4};

						display: inline-flex;
						align-items: center;
						justify-content: center;

						&.you-badge {
							background-color: ${({ theme }) => theme.colors.blue3};
							color: ${({ theme }) => theme.colors.blue10};
							border: 1px solid ${({ theme }) => theme.colors.blue4};
						}

						&.admin-badge {
							background-color: ${({ theme }) => theme.colors.green3};
							color: ${({ theme }) => theme.colors.green10};
							border: 1px solid ${({ theme }) => theme.colors.green4};
						}
					}
				}

				p {
					font-family: 'Inter', 'Roboto', sans-serif;
					font-size: 1rem;
					font-weight: 400;

					color: ${({ theme }) => theme.colors.gray10};
				}
			}
		}
	}
`;
