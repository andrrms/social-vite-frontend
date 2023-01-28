/* eslint-disable indent */
import { FC } from 'react';
import { useAppTheme } from '../../contexts/AppThemeProvider';

import {
	AppThemeSelectorContainer,
	ContentViewport,
	Item,
	ItemIcon,
	ItemText,
	ItemsContent,
	ItemsPortal,
	ScrollDownBtn,
	ScrollUpBtn,
	SelectorIcon,
	SelectorTrigger,
	SelectorValue,
} from './styles';

const AppThemeSelector: FC = () => {
	const { setAppTheme, theme } = useAppTheme();

	return (
		<AppThemeSelectorContainer onValueChange={setAppTheme} defaultValue={theme}>
			<SelectorTrigger>
				<SelectorValue>
					Tema{' '}
					{theme === 'light'
						? 'Claro'
						: theme === 'dark'
						? 'Escuro'
						: theme === 'system'
						? 'do Sistema'
						: ''}
				</SelectorValue>
				<SelectorIcon />
			</SelectorTrigger>

			<ItemsPortal>
				<ItemsContent>
					<ScrollUpBtn />
					<ContentViewport>
						<Item value="light">
							<ItemText>Claro</ItemText>
							<ItemIcon />
						</Item>
						<Item value="dark">
							<ItemText>Escuro</ItemText>
							<ItemIcon />
						</Item>
						<Item value="system">
							<ItemText>Sistema</ItemText>
							<ItemIcon />
						</Item>
					</ContentViewport>
					<ScrollDownBtn />
				</ItemsContent>
			</ItemsPortal>
		</AppThemeSelectorContainer>
	);
};

export default AppThemeSelector;
