import { FC, useState } from 'react';
import { FiSearch, FiUserPlus, FiUserMinus } from 'react-icons/fi';
import { useFeed } from '../../contexts/FeedProvider';
import { useUserSession } from '../../contexts/UserSessionProvider';
import { SearchUser } from '../../interfaces/user.interfaces';
import api from '../../services/api';

import ThemeButton from '../ThemeButton';
import ThemeInput from '../ThemeInput';
import UserIcon from '../UserIcon';
import VerifiedBadge from '../VerifiedBadge';

import { SearchFollowContainer } from './styles';

const SearchFollow: FC = () => {
	const { user: sessionUser, revalidateAuthentication } = useUserSession();
	const { fetchPosts } = useFeed();
	const [searchUsername, setSearchUsername] = useState('');
	const [users, setUsers] = useState<Partial<SearchUser>[]>([]);

	function handleSearch() {
		api
			.get(`/users/${searchUsername}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
				},
			})
			.then(({ data }) => {
				console.log(data);
				setUsers(data);
				fetchPosts();
			})
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					handleSearch();
				}
			});
	}

	function handleFollow(username: string) {
		api
			.post(
				`/interaction/follow/${username}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(({ data }) => {
				console.log(data);
				handleSearch();
			})
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					handleFollow(username);
				}
			});
	}

	function handleUnfollow(username: string) {
		api
			.post(
				`/interaction/unfollow/${username}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('@app:token')}`,
					},
				}
			)
			.then(({ data }) => {
				console.log(data);
				handleSearch();
			})
			.catch(async (err) => {
				if (err.response.status === 401) {
					await revalidateAuthentication();
					handleUnfollow(username);
				}
			});
	}

	return (
		<SearchFollowContainer>
			<h2>Procurar usuário</h2>
			<div className="input">
				<ThemeInput
					type="text"
					placeholder="Nome de usuário"
					value={searchUsername}
					onChange={(e) => setSearchUsername(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
				/>
				<ThemeButton primary onClick={handleSearch}>
					<FiSearch /> <span>Buscar</span>
				</ThemeButton>
			</div>
			<ul className="users">
				{users.map((user) => (
					<li key={user.id}>
						<UserIcon
							src={user.avatarUrl as string}
							alt={user.name as string}
						/>
						<div className="info">
							<h3>
								{user.name}
								{user.isVerified && <VerifiedBadge />}
								{user.id === sessionUser?.id && (
									<span className="badge you-badge">Você</span>
								)}
								{user.permission === 'ADMIN' && (
									<span className="badge admin-badge">Administrador</span>
								)}
							</h3>
							<p>@{user.username}</p>
						</div>
						{user.id !== sessionUser?.id && (
							<ThemeButton
								primary
								sublime={user.isFollowing}
								onClick={() =>
									user.isFollowing
										? handleUnfollow(user.username as string)
										: handleFollow(user.username as string)
								}
								title={user.isFollowing ? 'Deixar de seguir' : 'Seguir'}
							>
								{user.isFollowing ? <FiUserMinus /> : <FiUserPlus />}
							</ThemeButton>
						)}
					</li>
				))}
			</ul>
		</SearchFollowContainer>
	);
};

export default SearchFollow;
