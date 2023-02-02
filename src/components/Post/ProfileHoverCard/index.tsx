import { FC, PropsWithChildren, useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

import UserIcon from '../../UserIcon';

import { Content, ProfileContent, TooltipArrow } from './styles';
import { ProfileHoverCardProps } from './types';
import ThemeButton from '../../ThemeButton';
import VerifiedBadge from '../../VerifiedBadge';
import { FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { useUserSession } from '../../../contexts/UserSessionProvider';
import useInteraction from '../../../hooks/useInteraction';
import OfficialBadge from '../../OfficialBadge';

const ProfileHoverCard: FC<PropsWithChildren<ProfileHoverCardProps>> = ({
	author,
	children,
}) => {
	const { user } = useUserSession();
	const { followUser, unfollowUser } = useInteraction();
	const [ghostFollow, setGhostFollow] = useState(author.isFollowing);

	return (
		<HoverCard.Root>
			<HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
			<HoverCard.Portal>
				<ProfileContent
					sideOffset={5}
					asChild
					side="bottom"
					onClick={(e) => e.preventDefault()}
				>
					<div>
						<Content>
							<header>
								<UserIcon
									src={author.avatarUrl}
									alt={author.name}
									squared={author.accountType === 'ENTERPRISE'}
									size={70}
								/>
								<div>
									<span>
										<h2>{author.name}</h2>
										{author.accountType !== 'NONE' && (
											<VerifiedBadge type={author.accountType} size="1.8rem" />
										)}
										{author.isOfficial && <OfficialBadge size="1.8rem" />}
									</span>
									<span className="username">@{author.username}</span>
								</div>
							</header>
							<p>{author.biography}</p>
							<footer>
								<p>
									{author.followersCount === 1 ? 'Seguidor' : 'Seguidores'}
									<br />
									<strong>{author.followersCount}</strong>
								</p>
								<p>
									Seguindo
									<br />
									<strong>{author.followingCount}</strong>
								</p>
								{author.id !== user?.id ? (
									ghostFollow ? (
										<ThemeButton
											extend
											sublime
											title="Deixar de seguir"
											onClick={() => {
												unfollowUser(author.username).then(() => {
													setGhostFollow(false);
												});
											}}
										>
											<FiUserMinus />
										</ThemeButton>
									) : (
										<ThemeButton
											secondary
											extend
											title="Seguir"
											onClick={() => {
												followUser(author.username).then(() => {
													setGhostFollow(true);
												});
											}}
										>
											<FiUserPlus />
										</ThemeButton>
									)
								) : (
									<></>
								)}
							</footer>
						</Content>
						<TooltipArrow />
					</div>
				</ProfileContent>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
};

export default ProfileHoverCard;

