import { FC, useEffect } from 'react';

import SideNavbar from '../../components/SideNavbar';
import ColumnsView from '../../components/TripleColumnView';
import PostsFeedView from '../../components/PostsFeedView';

import InfoEmoji from '../../assets/info-emoji.png';
import { Emoji, HomeFeedContainer, HomeFeedWrapper } from './styles';
import SearchFollow from '../../components/SearchFollow';

const HomeFeed: FC = () => {
	useEffect(() => {
		document.title = 'Página Inicial / Bluebird';
	}, []);

	return (
		<HomeFeedContainer>
			<HomeFeedWrapper>
				<ColumnsView>
					<SideNavbar />
					<div style={{ width: 250 }}></div>
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
