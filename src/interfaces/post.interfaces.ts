import { User } from './user.interfaces';

export interface Post {
	id: string;
	content: string;
	likes: number;
	hasLiked: boolean;
	hasShared: boolean;
	shares: number;
	shared: User[];
	replies: number;
	createdAt: string;
	updatedAt: string;
	author: User & {
		isFollowing?: boolean;
	};
	localization?: string;
	quotingToId?: string;
	replyingToId?: string;
}

