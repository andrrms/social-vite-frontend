import { User } from './user.interfaces';

export interface Post {
	id: string;
	content: string;
	likes: number;
	hasLiked: boolean;
	shares: number;
	replies: number;
	createdAt: string;
	updatedAt: string;
	author: User;
	localization?: string;
	quotingToId?: string;
	replyingToId?: string;
}
