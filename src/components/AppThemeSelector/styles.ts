import styled from 'styled-components';
import {
	Root,
	Trigger,
	Value,
	Icon,
	Portal,
	Content,
	ScrollUpButton,
	ScrollDownButton,
	Viewport,
	Item as RadixItem,
	ItemText as RadixItemText,
	ItemIndicator,
} from '@radix-ui/react-select';

export const AppThemeSelectorContainer = styled(Root)`
	width: fit-content;

	position: relative;
`;

export const SelectorTrigger = styled(Trigger)`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	background-color: ${({ theme }) => theme.colors.slate3};
	color: ${({ theme }) => theme.colors.gray11};
	border: none;
	border-radius: 2rem;

	width: fit-content;
	padding: 6px 1rem;

	font-size: 1rem;
	font-weight: 500;
	font-family: 'Inter Tight', 'Inter', 'Roboto', sans-serif;
	text-transform: uppercase;

	transition: background-color 0.1s ease;
	&:hover {
		background-color: ${({ theme }) => theme.colors.slate4};
	}
`;

export const SelectorValue = styled(Value)``;

export const SelectorIcon = styled(Icon)``;

export const ItemsPortal = styled(Portal)`
	position: absolute;
	top: 0;
	left: -1rem;
	width: calc(100% + 1rem);
	overflow: hidden;
`;

export const ItemsContent = styled(Content)`
	background-color: ${({ theme }) => theme.colors.slate3};
	color: ${({ theme }) => theme.colors.gray12};

	border-radius: 1rem;

	padding: 0.5rem 0;
`;

export const ScrollUpBtn = styled(ScrollUpButton)``;

export const ScrollDownBtn = styled(ScrollDownButton)``;

export const ContentViewport = styled(Viewport)`
	display: flex;
	flex-direction: column;
`;

export const Item = styled(RadixItem)`
	font-size: 1.2rem;
	font-weight: 500;
	font-family: 'Inter', 'Roboto', sans-serif;

	padding: 6px 0.5rem;
	cursor: default;

	&:hover {
		background-color: ${({ theme }) => theme.colors.blue4};
		outline: none;
	}

	&[data-state='active'],
	&:focus {
		background-color: ${({ theme }) => theme.colors.blue5};
	}
`;

export const ItemText = styled(RadixItemText)`
	width: 100%;
`;

export const ItemIcon = styled(ItemIndicator)``;
