import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';

import api from '../services/api';
import { User } from '../interfaces/user.interfaces';
import { useFeed } from './FeedProvider';

interface UserSessionContextProps {
	user?: User;
	isAuthenticated: boolean;

	loginUser(login: string, password: string): Promise<void>;
	logoutUser(): void;
	refreshUser(): Promise<User | undefined>;
	revalidateAuthentication(): Promise<void>;
}

const mockInicialData: UserSessionContextProps = {
	user: {
		id: '',
		name: '',
		username: '',
		avatarUrl: '',
		biography: '',
		createdAt: '',
		birthDate: '',
		followersCount: 0,
		followingCount: 0,
		isVerified: false,
		localization: '',
		permission: 'USER',
		site: '',
	},
	isAuthenticated: false,
	loginUser: () => Promise.resolve(),
	logoutUser: () => Promise.resolve(),
	refreshUser: () => Promise.resolve(undefined),
	revalidateAuthentication: () => Promise.resolve(),
};

const UserSessionContext =
	createContext<UserSessionContextProps>(mockInicialData);

export const useUserSession = () => useContext(UserSessionContext);

const UserSessionProvider: FC<PropsWithChildren> = ({ children }) => {
	const { clearPosts, posts } = useFeed();
	const [user, setUser] = useState<User>();

	async function revalidateAuthentication() {
		return api
			.post(
				'/session/refresh',
				{},
				{
					withCredentials: true,
				}
			)
			.then((response) => {
				const { token } = response.data;
				localStorage.setItem('@app:token', token);
			})
			.catch((e) => {
				if (e.response.status === 406) {
					localStorage.removeItem('@app:token');

					console.error('Usuário deve fazer login novamente');
				} else {
					revalidateAuthentication();
				}
			});
	}

	async function refreshUser() {
		return api
			.get('/users/me', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
				},
			})
			.then(({ data }) => {
				setUser(data);
				return data;
			})
			.catch(revalidateAuthentication);
	}

	async function loginUser(login: string, password: string) {
		return api
			.post('/session/login', {
				login,
				password,
			})
			.then((response) => {
				const { token } = response.data;

				localStorage.setItem('@app:token', token);
				refreshUser();
			});
	}

	async function logoutUser() {
		return api.post('/session/logout').then(() => {
			localStorage.removeItem('@app:token');
			setUser(undefined);
			clearPosts();
			console.log(posts);
		});
	}

	useEffect(() => {
		revalidateAuthentication().then(refreshUser);
	}, [setUser]);

	useEffect(() => {
		if (user) {
			console.log('User logged in:', user);
		} else {
			console.log('User logged out');
		}
	}, [user]);

	return (
		<UserSessionContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				loginUser,
				logoutUser,
				refreshUser,
				revalidateAuthentication,
			}}
		>
			{children}
		</UserSessionContext.Provider>
	);
};

export default UserSessionProvider;
