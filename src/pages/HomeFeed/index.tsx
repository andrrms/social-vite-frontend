import { FC, useEffect } from 'react';

import SideNavbar from '../../components/SideNavbar';
import ColumnsView from '../../components/TripleColumnView';
import PostsFeedView from '../../components/PostsFeedView';
import SearchFollow from '../../components/SearchFollow';

import InfoEmoji from '../../assets/info-emoji.png';
import {
	Emoji,
	HomeFeedContainer,
	HomeFeedWrapper,
	NavbarGhostContainer,
} from './styles';
import NewPostDialog from '../../components/NewPostDialog';

const HomeFeed: FC = () => {
	useEffect(() => {
		document.title = 'Página Inicial / Bluebird';

		function handleUnload() {
			alert('Você tem certeza?');
		}

		document.addEventListener('onbeforeunload', handleUnload);

		return () => {
			document.removeEventListener('onbeforeunload', handleUnload);
		};
	}, []);

	return (
		<HomeFeedContainer>
			<HomeFeedWrapper>
				<ColumnsView>
					<SideNavbar />
					<NavbarGhostContainer />
					<NewPostDialog />
					<PostsFeedView />
					<aside>
						<section>
							<h2>
								<Emoji src={InfoEmoji} draggable={false} /> Saiba mais
							</h2>
							<p>
								Este site ainda está em desenvolvimento! Se quiser, você pode
								enviar sugestões, críticas e feedbacks{' '}
								<a
									href="https://www.twitter.com/um_querido"
									target="_blank"
									rel="noreferrer"
								>
									na minha DM
								</a>
								!
							</p>
						</section>
						<SearchFollow />
					</aside>
				</ColumnsView>
			</HomeFeedWrapper>
		</HomeFeedContainer>
	);
};

export default HomeFeed;

