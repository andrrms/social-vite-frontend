/* eslint-disable indent */
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Post from '../Post';
import ComposeForm from '../ComposeForm';
import UserIcon from '../UserIcon';

import IllustrationExit from '../../assets/exit-illustration.png';
import { useFeed } from '../../contexts/FeedProvider';
import { useUserSession } from '../../contexts/UserSessionProvider';
import {
	NoFollowersSpecialPost,
	PostsFeedViewContainer,
	PostsList,
	ViewHeader,
} from './styles';
import ThemeButton from '../ThemeButton';

const PostsFeedView: FC = () => {
	const { user } = useUserSession();
	const { posts } = useFeed();
	const [dismissNoFollowersMessage, setDismissNoFollowersMessage] = useState(
		!!localStorage.getItem('@app:dismissNoFollowersMessage')
	);

	function handleDismiss() {
		localStorage.setItem('@app:dismissNoFollowersMessage', 'true');
		setDismissNoFollowersMessage(true);
	}

	return (
		<PostsFeedViewContainer>
			<ViewHeader>
				<h1>
					<Link to="/home">Página inicial</Link>
				</h1>
			</ViewHeader>
			<ComposeForm />
			<PostsList>
				{user?.followingCount === 0 && !dismissNoFollowersMessage && (
					<NoFollowersSpecialPost>
						<img
							src={IllustrationExit}
							alt="Ilustração de placa de saída de emergência"
						/>
						<div>
							<h2>Parece que você não segue ninguém</h2>
							<p>
								O Bluebird é mais divertido com amigos! Tente seguir alguém
								usando a barra de pesquisa ao lado.
							</p>
							<ThemeButton onClick={handleDismiss}>
								Não quero saber de amizades, obrigado
							</ThemeButton>
						</div>
					</NoFollowersSpecialPost>
				)}
				{posts.map((post) => (
					<Post post={post} key={post.id} />
				))}
			</PostsList>
		</PostsFeedViewContainer>
	);
};

export default PostsFeedView;
