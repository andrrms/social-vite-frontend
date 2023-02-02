/* eslint-disable @typescript-eslint/no-empty-function */
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

import api from '../services/api';
import { Post } from '../interfaces/post.interfaces';
import { useUserSession } from './UserSessionProvider';
import { boolean } from 'yup';

interface FeedProviderProps {
	posts: Post[];
	fetchPosts: () => Promise<void>;
	clearPosts: () => void;
	composePost: (
		text: string,
		metadata?: Partial<
			Pick<Post, 'localization' | 'quotingToId' | 'replyingToId'>
		>
	) => Promise<void>;
	likePost: (postId: string) => Promise<void>;
	dislikePost: (postId: string) => Promise<void>;
	sharePost: (postId: string) => Promise<void>;
	unsharePost: (postId: string) => Promise<void>;
	isComposeDialogOpen: boolean;
	openComposePostDialog: (mode?: 'quote' | 'reply', id?: string) => void;
	closeComposePostDialog: () => void;
	setComposePostDialog: Dispatch<SetStateAction<boolean>>;
	quotingPostId?: string;
	replyingPostId?: string;
}

const mockInicialData: FeedProviderProps = {
	posts: [],
	fetchPosts: () => Promise.resolve(),
	clearPosts: () => {},
	composePost: () => Promise.resolve(),
	likePost: () => Promise.resolve(),
	dislikePost: () => Promise.resolve(),
	sharePost: () => Promise.resolve(),
	unsharePost: () => Promise.resolve(),
	isComposeDialogOpen: false,
	openComposePostDialog: () => {},
	closeComposePostDialog: () => {},
	setComposePostDialog: () => {},
};

const FeedContext = createContext<FeedProviderProps>(mockInicialData);

export const useFeed = () => useContext(FeedContext);

const FeedProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthenticated, revalidateAuthentication } = useUserSession();
	const [posts, setPosts] = useState<Post[]>([]);
	const [isComposeDialogOpen, setIsComposeDialogOpen] = useState(false);
	const [quotingPostId, setQuotingPostId] = useState<string | undefined>();
	const [replyingPostId, setReplyingPostId] = useState<string | undefined>();

	async function fetchPosts() {
		return await api
			.get('/article/feed', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
				},
			})
			.then(({ data }) => {
				console.log(data);
				setPosts(data);
				return data;
			})
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await fetchPosts();
				}
			});
	}

	function clearPosts() {
		setPosts([]);
	}

	async function composePost(
		text: string,
		metadata?: Partial<
			Pick<Post, 'localization' | 'quotingToId' | 'replyingToId'>
		>
	) {
		await api
			.post(
				'/article/new',
				{
					content: text,
					...metadata,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(() => {
				fetchPosts();
			})
			.catch(async (err) => {
				console.error('composePost', err);
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await composePost(text, metadata);
				}
			});
	}

	async function likePost(postId: string) {
		await api
			.post(
				`/article/${postId}/like`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(() => {
				fetchPosts();
			})
			.catch(async (err) => {
				console.error('likePost', err);
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await likePost(postId);
				} else if (err.response.status === 409) {
					fetchPosts();
				}
			});
	}

	async function dislikePost(postId: string) {
		await api
			.post(
				`/article/${postId}/dislike`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(() => {
				fetchPosts();
			})
			.catch(async (err) => {
				console.error('dislikePost', err);
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await likePost(postId);
				} else if (err.response.status === 404) {
					fetchPosts();
				}
			});
	}

	async function sharePost(postId: string) {
		await api
			.post(
				`/article/${postId}/repost`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(() => {
				fetchPosts();
			})
			.catch(async (err) => {
				console.error('repostPost', err);
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await sharePost(postId);
				} else if (err.response.status === 409) {
					fetchPosts();
				}
			});
	}

	async function unsharePost(postId: string) {
		await api
			.post(
				`/article/${postId}/unrepost`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(() => {
				fetchPosts();
			})
			.catch(async (err) => {
				console.error('unrepostPost', err);
				if (err.response.status === 401) {
					await revalidateAuthentication();
					await unsharePost(postId);
				} else if (err.response.status === 409) {
					fetchPosts();
				}
			});
	}

	function openComposePostDialog(mode?: 'quote' | 'reply', id?: string) {
		if (mode === 'quote') {
			setQuotingPostId(id);
		} else {
			setReplyingPostId(id);
		}

		setIsComposeDialogOpen(true);
	}

	function closeComposePostDialog() {
		setIsComposeDialogOpen(false);
		setQuotingPostId(undefined);
		setReplyingPostId(undefined);
	}

	useEffect(() => {
		const postUpdaterTimeout = setInterval(() => {
			// Only fetch posts if user focus is on tab
			if (isAuthenticated && !document.hidden) {
				console.log('Checando novas postagens...');
				fetchPosts();
			}
		}, 1000 * 60 * 1);

		if (isAuthenticated) {
			fetchPosts();
		}

		return () => {
			clearInterval(postUpdaterTimeout);
		};
	}, [revalidateAuthentication]);

	return (
		<FeedContext.Provider
			value={{
				posts,
				fetchPosts,
				clearPosts,
				composePost,
				likePost,
				dislikePost,
				sharePost,
				unsharePost,
				isComposeDialogOpen,
				openComposePostDialog,
				closeComposePostDialog,
				setComposePostDialog: setIsComposeDialogOpen,
				quotingPostId,
				replyingPostId,
			}}
		>
			{children}
		</FeedContext.Provider>
	);
};

export default FeedProvider;

