import { FC, forwardRef, PropsWithChildren, Ref } from 'react';
import { FiEdit3, FiRepeat } from 'react-icons/fi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { MenuArrow, MenuContent, MenuItem } from './styles';
import { TooltipElement } from '../styles';
import Tooltip from '../../Tooltip';
import { RepostDropdownMenuProps } from './types';
import { useFeed } from '../../../contexts/FeedProvider';
import NewPostDialog from '../../NewPostDialog';

const RepostDropdownMenu: FC<PropsWithChildren<RepostDropdownMenuProps>> =
	forwardRef(({ children, postId, hasShared }, ref: Ref<HTMLDivElement>) => {
		const { sharePost, unsharePost, openComposePostDialog } = useFeed();

		return (
			<DropdownMenu.Root>
				<Tooltip side="bottom" text="Repostar" as={TooltipElement}>
					<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
				</Tooltip>
				<DropdownMenu.Portal>
					<MenuContent ref={ref}>
						<MenuArrow />
						<DropdownMenu.Item asChild>
							{hasShared ? (
								<MenuItem onClick={() => unsharePost(postId)}>
									<FiRepeat /> <span>Desfazer repostar</span>
								</MenuItem>
							) : (
								<MenuItem onClick={() => sharePost(postId)}>
									<FiRepeat /> <span>Repostar</span>
								</MenuItem>
							)}
						</DropdownMenu.Item>
						<DropdownMenu.Item asChild>
							<MenuItem
								onClick={() => {
									openComposePostDialog('quote', postId);
									console.log(postId);
								}}
							>
								<FiEdit3 /> <span>Comentar o post</span>
							</MenuItem>
						</DropdownMenu.Item>
						{/* <NewPostDialog quotingPostId={postId}></NewPostDialog> */}
					</MenuContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		);
	});

export default RepostDropdownMenu;

