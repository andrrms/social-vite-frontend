import { Overlay } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const ComposeOverlay = styled(Overlay)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;

	background-color: ${({ theme }) => theme.colors.black.blackA9};
`;

export const ComposeContainer = styled.div`
	position: fixed;
	top: 5vh;
	left: 50%;
	z-index: 10000;
	transform: translate(-50%);

	width: 600px;

	background-color: ${({ theme }) => theme.colors.slate2};
	border: 1px solid ${({ theme }) => theme.colors.slate5};
	color: ${({ theme }) => theme.colors.gray12};
	border-radius: 1rem;

	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ComposeHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	padding: 1rem;

	h2 {
		font-size: 1.2rem;
		font-weight: 600;
	}
`;

