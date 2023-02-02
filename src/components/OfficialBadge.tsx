import styled from 'styled-components';
import { FC } from 'react';

const Badge = styled.span<{ size: string }>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	font-size: inherit;
	padding: 0.1rem;
`;

const BadgeImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;

	object-fit: cover;
`;

const OfficialBadge: FC<{ size?: string }> = ({ size = '1.4rem' }) => {
	return (
		<Badge size={size} title="Conta oficial do Bluebird">
			<BadgeImage
				src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg"
				alt="Verified"
				draggable={false}
			/>
		</Badge>
	);
};

export default OfficialBadge;

