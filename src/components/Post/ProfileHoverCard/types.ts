import { User } from '../../../interfaces/user.interfaces';

export interface ProfileHoverCardProps {
	author: User & { isFollowing?: boolean };
}

