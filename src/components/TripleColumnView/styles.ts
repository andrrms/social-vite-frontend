import styled from 'styled-components';
import { ColumnsViewProps } from './types';

export const ColumnsViewContainer = styled.div<ColumnsViewProps>`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: ${({ columns }) =>
		columns === 2 ? '1fr 2fr' : '260px minmax(600px, 1fr) 1fr'};
	gap: 10px;
`;

