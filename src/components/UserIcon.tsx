import { FC } from 'react';
import styled from 'styled-components';

interface UserIconProps {
	alt: string;
	src: string;
	size?: number;
}

const UserIconContainer = styled.figure<Partial<UserIconProps>>`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;

	border-radius: 50%;
	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${(props) => props.theme.colors.gray8};
`;

const Image = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;

	border-radius: 50%;

	transition: filter 0.2s;
	&:hover {
		filter: brightness(0.9);
	}
`;

const UserIcon: FC<UserIconProps> = ({ src, alt, size = 46 }) => {
	return (
		<UserIconContainer size={size}>
			<Image src={src} alt={alt} draggable={false} />
		</UserIconContainer>
	);
};

export default UserIcon;
