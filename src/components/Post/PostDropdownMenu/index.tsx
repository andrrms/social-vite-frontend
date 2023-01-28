import * as DropdownMenu from '@radix-ui/react-select';
import { FC, PropsWithChildren } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import { MenuContent, MenuItem } from './styles';

const PostDropdownMenu: FC<PropsWithChildren> = ({ children }) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content asChild>
					<MenuContent>
						<DropdownMenu.Item value="deleteTweet" asChild>
							<MenuItem>Excluir tweet</MenuItem>
						</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item value="copyTweetId">
							<MenuItem>Copiar ID</MenuItem>
						</DropdownMenu.Item>
					</MenuContent>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default PostDropdownMenu;
