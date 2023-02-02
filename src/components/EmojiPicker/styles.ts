import styled from 'styled-components';
import { Arrow } from '@radix-ui/react-popover';

export const PickerContainer = styled.div``;

export const PickerArrow = styled(Arrow)`
	fill: ${({ theme }) => theme.colors.gray6};
`;

