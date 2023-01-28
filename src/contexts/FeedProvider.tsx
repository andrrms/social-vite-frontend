/* eslint-disable @typescript-eslint/no-empty-function */
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';

import api from '../services/api';
import { Post } from '../interfaces/post.interfaces';
import { useUserSession } from './UserSessionProvider';

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
}

const mockInicialData: FeedProviderProps = {
	posts: [],
	fetchPosts: () => Promise.resolve(),
	clearPosts: () => {},
	composePost: () => Promise.resolve(),
	likePost: () => Promise.resolve(),
	dislikePost: () => Promise.resolve(),
};

const FeedContext = createContext<FeedProviderProps>(mockInicialData);

export const useFeed = () => useContext(FeedContext);

const FeedProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthenticated, revalidateAuthentication } = useUserSession();
	const [posts, setPosts] = useState<Post[]>([]);

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
				console.error('fetchPosts', err);
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
			}}
		>
			{children}
		</FeedContext.Provider>
	);
};

export default FeedProvider;
