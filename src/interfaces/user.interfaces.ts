export type AccountType =
	| 'PAID'
	| 'VERIFIED'
	| 'PUBLIC'
	| 'ENTERPRISE'
	| 'NONE';
export type Permission = 'USER' | 'ADMIN';

export interface User {
	id: string;
	name: string;
	username: string;
	avatarUrl: string;
	accountType: AccountType;
	isOfficial: boolean;
	permission: Permission;

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
	accountType: AccountType;
	isOfficial: boolean;
	permission: Permission;

	followersCount: number;
	followingCount: number;

	biography: string;
	localization: string;
	site: string;

	birthDate: string;
}

