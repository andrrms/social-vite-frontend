export interface User {
	id: string;
	name: string;
	username: string;
	avatarUrl: string;
	isVerified: boolean;
	permission: 'USER' | 'ADMIN';

	followersCount: number;
	followingCount: number;

	biography: string;
	localization: string;
	site: string;

	birthDate: string;
	createdAt: string;
}

export interface SearchUser {
	id: string;
	name: string;
	username: string;
	avatarUrl: string;
	isFollowing: boolean;
	isVerified: boolean;
	permission: 'USER' | 'ADMIN';

	followersCount: number;
	followingCount: number;

	biography: string;
	localization: string;
	site: string;

	birthDate: string;
}
