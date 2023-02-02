import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import LandingLoginForm from '../../components/LandingLoginForm';
import LandingMessageBubble from '../../components/LandingMessageBubble';
import { useUserSession } from '../../contexts/UserSessionProvider';

import { Content, IndexPageContainer, MainView, SideView } from './styles';

const IndexPage: FC = () => {
	const { isAuthenticated } = useUserSession();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/home');
		}

		document.title = 'Bluebird - Onde tudo acontece';
	}, [isAuthenticated]);

	return isAuthenticated || !!localStorage.getItem('@app:token') ? (
		<></>
	) : (
		<IndexPageContainer>
			<Content>
				<SideView>
					<LandingMessageBubble />
				</SideView>
				<MainView>
					<LandingLoginForm />
				</MainView>
			</Content>
			<Outlet />
		</IndexPageContainer>
	);
};

export default IndexPage;

