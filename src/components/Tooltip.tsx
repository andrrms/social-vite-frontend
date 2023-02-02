import styled from 'styled-components';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { FC, PropsWithChildren } from 'react';

interface TooltipProps {
	text: string;
	as?: React.ElementType;
	side?: RadixTooltip.TooltipContentProps['side'];
}

const TooltipContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.slate4};
	border: 1px solid ${({ theme }) => theme.colors.slate8};
	border-radius: 6px;
	box-shadow: 0 1px 3px 0 ${({ theme }) => theme.colors.slate8};
	color: ${({ theme }) => theme.colors.gray11};

	font-family: 'Inter', 'Roboto', sans-serif;
	font-size: 0.8rem;
	font-weight: 400;

	padding: 0.5rem;
`;

const Tooltip: FC<
	PropsWithChildren<TooltipProps & RadixTooltip.TooltipProps>
> = ({
	text,
	children,
	side = 'top',
	as = TooltipContainer,
	...tooltipProps
}) => {
	const AsComponent = as;

	return (
		<RadixTooltip.Root {...tooltipProps}>
			<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
			<RadixTooltip.Content asChild side={side} sideOffset={4}>
				<AsComponent>{text}</AsComponent>
			</RadixTooltip.Content>
		</RadixTooltip.Root>
	);
};

export default Tooltip;

