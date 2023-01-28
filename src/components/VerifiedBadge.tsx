import styled from 'styled-components';
import { FC } from 'react';

import VerifiedImg from '../assets/verified.png';

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
		fill: ${({ theme }) => theme.colors.blue9};
		background-color: ${({ theme }) => theme.colors.blue3};
		padding: 0.1rem;
		border-radius: 2rem;
		border: 1px solid ${({ theme }) => theme.colors.blue4};
	}
`;

const BadgeImage = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
`;

const VerifiedBadge: FC<{ size?: string }> = ({ size = '1.5rem' }) => {
	return (
		<Badge size={size}>
			<BadgeImage src={VerifiedImg} alt="Verified" />
		</Badge>
	);
};

export default VerifiedBadge;
