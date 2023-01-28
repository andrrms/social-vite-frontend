import { FC, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
	FiMessageSquare,
	FiRepeat,
	FiHeart,
	FiShare,
	FiMoreVertical,
} from 'react-icons/fi';

import VerifiedBadge from '../VerifiedBadge';
import UserIcon from '../UserIcon';

import useIntl from '../../hooks/useIntl';
import { useFeed } from '../../contexts/FeedProvider';
import { PostFooter, PostHeader, PostItemContainer } from './styles';
import { PostProps } from './types';
import PostDropdownMenu from './PostDropdownMenu';
import { MenuItem, PostDropdownMenuContainer } from './PostDropdownMenu/styles';
import { Content } from '@radix-ui/react-select';

const Post: FC<PostProps> = ({ post }) => {
	const { date } = useIntl();
	const { likePost, dislikePost } = useFeed();
	const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

	return (
		<PostItemContainer>
			<article>
				<PostDropdownMenu>
					<button className="openMenu">
						<FiMoreVertical />
					</button>
				</PostDropdownMenu>
				<div>
					<UserIcon
						src={post.author.avatarUrl}
						alt={post.author.name}
						size={50}
					/>
				</div>
				<section>
					<PostHeader>
						<div>
							<strong>
								{post.author.name}
								{post.author.isVerified && <VerifiedBadge size="1.25rem" />}
							</strong>
							<span>@{post.author.username}</span>
						</div>
						<div>
							<span>•</span>
							<time>{date.format(new Date(post.createdAt))}</time>
						</div>
					</PostHeader>
					<p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
					<PostFooter>
						<button className={['reply'].filter(Boolean).join(' ')}>
							<FiMessageSquare />
							{post.replies > 0 && <span>{post.replies}</span>}
						</button>
						<button className={['share'].filter(Boolean).join(' ')}>
							<FiRepeat />
							{post.shares > 0 && <span>{post.shares}</span>}
						</button>
						<button
							className={['like', post.hasLiked && 'liked']
								.filter(Boolean)
								.join(' ')}
							onClick={() => {
								if (post.hasLiked) {
									dislikePost(post.id);
								} else {
									likePost(post.id);
								}
							}}
						>
							<FiHeart />
							{post.likes > 0 && <span>{post.likes}</span>}
						</button>
						<button>
							<FiShare />
						</button>
					</PostFooter>
				</section>
			</article>
		</PostItemContainer>
	);
};

export default Post;
