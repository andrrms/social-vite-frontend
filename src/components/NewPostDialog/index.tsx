import { FC, PropsWithChildren, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { ComposeContainer, ComposeHeader, ComposeOverlay } from './styles';
import ThemeButton from '../ThemeButton';
import { FiX } from 'react-icons/fi';
import ComposeForm from '../ComposeForm';
import { NewPostDialogProps } from './types';
import { useFeed } from '../../contexts/FeedProvider';

const NewPostDialog: FC<PropsWithChildren<NewPostDialogProps>> = ({
	children,
}) => {
	const {
		isComposeDialogOpen,
		quotingPostId,
		openComposePostDialog,
		closeComposePostDialog,
	} = useFeed();

	return (
		<Dialog.Root
			open={isComposeDialogOpen}
			onOpenChange={(open) =>
				open ? openComposePostDialog() : closeComposePostDialog()
			}
		>
			{/* <Dialog.Trigger asChild>{children}</Dialog.Trigger> */}
			<Dialog.Portal>
				<ComposeOverlay />
				<Dialog.Content asChild>
					<ComposeContainer>
						<ComposeHeader>
							<Dialog.Close asChild>
								<ThemeButton sublime>
									<FiX />
								</ThemeButton>
							</Dialog.Close>
							<Dialog.Title>
								{quotingPostId ? 'Nova citação' : 'Nova postagem'}
							</Dialog.Title>
						</ComposeHeader>
						<ComposeForm
							disableClickToFocus
							emojiPanelZIndex={20000}
							quotingPostId={quotingPostId}
							snapFocus
						/>
					</ComposeContainer>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default NewPostDialog;

