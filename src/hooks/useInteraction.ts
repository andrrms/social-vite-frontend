import { useUserSession } from '../contexts/UserSessionProvider';
import api from '../services/api';

export default function useInteraction() {
	const { revalidateAuthentication } = useUserSession();

	async function followUser(username: string) {
		await api
			.post(
				`/interaction/follow/${username}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					followUser(username);
				}
			});
	}

	async function unfollowUser(username: string) {
		await api
			.post(
				`/interaction/unfollow/${username}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					unfollowUser(username);
				}
			});
	}

	return {
		followUser,
		unfollowUser,
	};
}

