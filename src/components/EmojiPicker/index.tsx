import { FC, PropsWithChildren } from 'react';
import * as Popover from '@radix-ui/react-popover';
import Picker, { Theme } from 'emoji-picker-react';

import { PickerArrow, PickerContainer } from './styles';
import { EmojiPickerProps } from './types';
import { useAppTheme } from '../../contexts/AppThemeProvider';

const EmojiPicker: FC<PropsWithChildren<EmojiPickerProps>> = ({
	children,
	onEmojiClick,
	zIndex,
}) => {
	const { theme } = useAppTheme();

	return (
		<Popover.Root>
			<Popover.Trigger asChild>{children}</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content align="start">
					<PickerContainer>
						<PickerArrow />
						<Picker
							theme={
								theme === 'system'
									? Theme.AUTO
									: theme === 'light'
									? Theme.LIGHT
									: Theme.DARK
							}
							searchPlaceHolder="Buscar emojis"
							lazyLoadEmojis
							previewConfig={{
								showPreview: false,
							}}
							onEmojiClick={(data) => onEmojiClick(data.emoji)}
						/>
					</PickerContainer>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};

export default EmojiPicker;

