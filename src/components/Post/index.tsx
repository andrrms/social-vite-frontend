import { FC, useEffect, useState } from 'react';
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from 'react-icons/fi';

import VerifiedBadge from '../VerifiedBadge';
import UserIcon from '../UserIcon';
import Tooltip from '../Tooltip';

import useIntl from '../../hooks/useIntl';
import { useFeed } from '../../contexts/FeedProvider';
import {
	PostAction,
	PostBodyContent,
	PostContent,
	PostFooter,
	PostHeader,
	PostItemContainer,
	ProfileNameLink,
	QuoteArea,
	TooltipElement,
} from './styles';
import { PostProps } from './types';
import ProfileHoverCard from './ProfileHoverCard';
import Mention from './Mention';
import OfficialBadge from '../OfficialBadge';
import { Link } from 'react-router-dom';
import RepostDropdownMenu from './RepostDropdownMenu';
import { Post } from '../../interfaces/post.interfaces';
import api from '../../services/api';
import MiniPost from '../MiniPost';

const Post: FC<PostProps> = ({ post }) => {
	const { date } = useIntl();
	const { likePost, dislikePost, sharePost, unsharePost } = useFeed();

	const [quotedPost, setQuotedPost] = useState<Post | undefined>();

	const contentText = post.content.split(/\s+/);
	const contentEntities = post.content.match(/(#\w+)|(@\w+)/gi) || [];
	const parsedContent: JSX.Element[] = [];

	contentText.forEach((text, i) => {
		let foundEntity = false;
		for (const entity of contentEntities) {
			if (text.includes(entity)) {
				foundEntity = true;
				if (text.startsWith('#')) {
					parsedContent.push(
						<a href={`#tag-${text.replace('#', '')}`} key={i}>
							#{text.replace('#', '')}
						</a>
					);
				} else if (text.startsWith('@')) {
					parsedContent.push(
						<Mention key={i} username={text.replace('@', '')} />
					);
				}
			}
		}
		if (!foundEntity) {
			parsedContent.push(<>{text}</>);
		}

		parsedContent.push(<> </>);
	});

	useEffect(() => {
		if (post.quotingToId) {
			api
				.get(`/article/${post.quotingToId}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				})
				.then((res) => {
					setQuotedPost(res.data);
				});
		}
	}, []);

	return (
		<PostItemContainer>
			<article>
				{post.shared?.length > 0 && (
					<PostAction>
						<span>
							<FiRepeat />{' '}
							{(post.shared.length === 1 && (
								<>
									repostado por
									<ProfileHoverCard author={post.shared[0]}>
										<Link to={`/${post.shared[0].username}`}>
											{post.shared[0].name}
										</Link>
									</ProfileHoverCard>
								</>
							)) ||
								(post.shared.length === 2 && (
									<>
										repostado por
										<ProfileHoverCard author={post.shared[0]}>
											<Link to={`/${post.shared[0].username}`}>
												{post.shared[0].name}
											</Link>
										</ProfileHoverCard>
										e
										<ProfileHoverCard author={post.shared[1]}>
											<Link to={`/${post.shared[1].username}`}>
												{post.shared[1].name}
											</Link>
										</ProfileHoverCard>
									</>
								)) ||
								(post.shared.length > 2 && (
									<>
										repostado por
										<Link to={`/${post.shared[0].username}`}>
											{post.shared[0].name},
										</Link>
										<Link to={`/${post.shared[1].username}`}>
											{post.shared[1].name}
										</Link>
										e outros {post.shared.slice(2).length}
									</>
								)) ||
								''}
						</span>
					</PostAction>
				)}
				<PostBodyContent>
					<div>
						<ProfileHoverCard author={post.author}>
							<div>
								<UserIcon
									src={post.author.avatarUrl}
									alt={post.author.name}
									squared={post.author.accountType === 'ENTERPRISE'}
									size={50}
								/>
							</div>
						</ProfileHoverCard>
					</div>
					<section>
						<PostHeader>
							<ProfileHoverCard author={post.author}>
								<ProfileNameLink to={`/${post.author.username}`}>
									<strong>
										{post.author.name}
										{post.author.accountType !== 'NONE' && (
											<VerifiedBadge
												size="1.4rem"
												type={post.author.accountType}
											/>
										)}
										{post.author.isOfficial && <OfficialBadge />}
									</strong>
									<span>@{post.author.username}</span>
								</ProfileNameLink>
							</ProfileHoverCard>
							<div>
								<span>•</span>
								<time>{date.format(new Date(post.createdAt))}</time>
							</div>
						</PostHeader>
						<PostContent>
							<p>
								{/* post.content */ parsedContent}
								{post.localization && (
									<span className="place">
										{' '}
										&#8212; em <strong>{post.localization}</strong>
									</span>
								)}
							</p>
						</PostContent>
						{quotedPost && (
							<QuoteArea>
								<MiniPost post={quotedPost} />
							</QuoteArea>
						)}
						<PostFooter>
							<Tooltip side="bottom" text="Comentar" as={TooltipElement}>
								<button
									className={['reply'].filter(Boolean).join(' ')}
									onClick={() => alert('Você ainda não pode comentar')}
								>
									<FiMessageSquare />
									{post.replies > 0 && <span>{post.replies}</span>}
								</button>
							</Tooltip>
							<RepostDropdownMenu hasShared={post.hasShared} postId={post.id}>
								<button
									className={['share', post.hasShared && 'shared']
										.filter(Boolean)
										.join(' ')}
								>
									<FiRepeat />
									{post.shares > 0 && <span>{post.shares}</span>}
								</button>
							</RepostDropdownMenu>
							<Tooltip side="bottom" text="Curtir" as={TooltipElement}>
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
							</Tooltip>
							<Tooltip side="bottom" text="Compartilhar" as={TooltipElement}>
								<button>
									<FiShare />
								</button>
							</Tooltip>
						</PostFooter>
					</section>
				</PostBodyContent>
			</article>
		</PostItemContainer>
	);
};

export default Post;

