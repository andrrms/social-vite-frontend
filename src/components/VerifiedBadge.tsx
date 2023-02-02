import styled from 'styled-components';
import { FC } from 'react';

import { AccountType } from '../interfaces/user.interfaces';

const Badge = styled.span<{ size: string }>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	font-size: inherit;
	padding: 0.1rem;

	svg {
		width: 100%;
		height: 100%;

		object-fit: cover;
		fill: ${({ theme }) => theme.colors.blue10};

		&.paid {
			fill: ${({ theme }) => theme.colors.brown10};
		}
	}
`;

const VerifiedBadge: FC<{ size?: string; type: AccountType }> = ({
	size = '1.5rem',
	type,
}) => {
	return (
		<Badge
			size={size}
			title={
				type === 'PAID'
					? 'Assinante Goldbird'
					: type === 'VERIFIED'
					? 'Pessoa verificada'
					: type === 'ENTERPRISE'
					? 'Empresa verificada'
					: type === 'PUBLIC'
					? 'Conta governamental'
					: ''
			}
		>
			{/* <BadgeImage src={PaidBadge} alt="Verified" /> */}
			{(() => {
				switch (type) {
					case 'PAID': {
						return (
							<svg viewBox="0 0 24 24" aria-hidden="true" className="paid">
								<path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
							</svg>
						);
					}

					default:
					case 'VERIFIED': {
						return (
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
							</svg>
						);
					}

					case 'ENTERPRISE': {
						return (
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									clipRule="evenodd"
									d="M13.596 3.011 11 .5 8.404 3.011l-3.576-.506-.624 3.558-3.19 1.692L2.6 11l-1.586 3.245 3.19 1.692.624 3.558 3.576-.506L11 21.5l2.596-2.511 3.576.506.624-3.558 3.19-1.692L19.4 11l1.586-3.245-3.19-1.692-.624-3.558-3.576.506zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"
									fill="url(#a)"
									fillRule="evenodd"
								/>
								<path
									clipRule="evenodd"
									d="M13.348 3.772 11 1.5 8.651 3.772l-3.235-.458-.565 3.219-2.886 1.531L3.4 11l-1.435 2.936 2.886 1.531.565 3.219 3.235-.458L11 20.5l2.348-2.272 3.236.458.564-3.219 2.887-1.531L18.6 11l1.435-2.936-2.887-1.531-.564-3.219-3.236.458zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"
									fill="url(#b)"
									fillRule="evenodd"
								/>
								<path
									clipRule="evenodd"
									d="m6 11.39 3.74 3.74 6.197-6.767h.003V9.76l-6.2 6.77L6 12.79v-1.4zm0 0z"
									fill="#D18800"
									fillRule="evenodd"
								/>
								<defs>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="a"
										x1="4"
										x2="19.5"
										y1="1.5"
										y2="22"
									>
										<stop stopColor="#F4E72A" />
										<stop offset=".539" stopColor="#CD8105" />
										<stop offset=".68" stopColor="#CB7B00" />
										<stop offset="1" stopColor="#F4EC26" />
										<stop offset="1" stopColor="#F4E72A" />
									</linearGradient>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="b"
										x1="5"
										x2="17.5"
										y1="2.5"
										y2="19.5"
									>
										<stop stopColor="#F9E87F" />
										<stop offset=".406" stopColor="#E2B719" />
										<stop offset=".989" stopColor="#E2B719" />
									</linearGradient>
								</defs>
							</svg>
						);
					}

					case 'PUBLIC': {
						return (
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									clipRule="evenodd"
									d="M12.096 1.673a1.5 1.5 0 0 0-2.192 0L8.452 3.227c-.296.316-.714.49-1.147.474L5.18 3.63a1.5 1.5 0 0 0-1.55 1.55l.072 2.125a1.5 1.5 0 0 1-.474 1.147L1.673 9.904a1.5 1.5 0 0 0 0 2.192l1.554 1.452c.316.296.49.714.474 1.147L3.63 16.82a1.5 1.5 0 0 0 1.55 1.55l2.125-.072a1.5 1.5 0 0 1 1.147.474l1.452 1.555a1.5 1.5 0 0 0 2.192 0l1.452-1.555c.296-.316.714-.49 1.147-.474l2.126.071a1.5 1.5 0 0 0 1.55-1.55l-.072-2.125a1.5 1.5 0 0 1 .474-1.147l1.555-1.452a1.5 1.5 0 0 0 0-2.192l-1.555-1.452a1.497 1.497 0 0 1-.474-1.147l.071-2.126a1.5 1.5 0 0 0-1.55-1.55l-2.125.072a1.5 1.5 0 0 1-1.147-.474l-1.452-1.554zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"
									fill="#829AAB"
									fillRule="evenodd"
								/>
							</svg>
						);
					}
				}
			})()}
		</Badge>
	);
};

export default VerifiedBadge;

