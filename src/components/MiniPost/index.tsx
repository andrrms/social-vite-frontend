import { FC } from 'react';
import { Link } from 'react-router-dom';
import useIntl from '../../hooks/useIntl';
import OfficialBadge from '../OfficialBadge';
import ProfileHoverCard from '../Post/ProfileHoverCard';
import UserIcon from '../UserIcon';
import VerifiedBadge from '../VerifiedBadge';
import { MiniPostContainer, MiniPostHeader, PostLink } from './styles';
import { MiniPostProps } from './types';

const MiniPost: FC<MiniPostProps> = ({ post, preventHoverName }) => {
	const { date } = useIntl();

	return (
		<PostLink to={`/${post.author.username}`}>
			<MiniPostContainer>
				<MiniPostHeader>
					<UserIcon
						src={post.author.avatarUrl}
						alt={post.author.name}
						size={20}
					/>
					<h3>
						{preventHoverName ? (
							<div>
								<strong>
									{post.author.name}
									{post.author.accountType !== 'NONE' && (
										<VerifiedBadge
											type={post.author.accountType}
											size="1.2rem"
										/>
									)}
									{post.author.isOfficial && <OfficialBadge size="1.2rem" />}
								</strong>
								<span>@{post.author.username}</span>
							</div>
						) : (
							<ProfileHoverCard author={post.author}>
								<div>
									<strong>
										{post.author.name}
										{post.author.accountType !== 'NONE' && (
											<VerifiedBadge
												type={post.author.accountType}
												size="1.2rem"
											/>
										)}
										{post.author.isOfficial && <OfficialBadge size="1.2rem" />}
									</strong>
									<span>@{post.author.username}</span>
								</div>
							</ProfileHoverCard>
						)}
						<span>•</span>
						<span>{date.format(new Date(post.createdAt))}</span>
					</h3>
				</MiniPostHeader>
				<p>{post.content}</p>
			</MiniPostContainer>
		</PostLink>
	);
};

export default MiniPost;

