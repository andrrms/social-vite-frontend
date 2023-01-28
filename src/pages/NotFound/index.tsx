import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppLogo from '../../components/AppLogo';
import ThemeButton from '../../components/ThemeButton';

import NotFoundPoodle from '../../assets/notFoundPoodle.png';
import {
	NotFoundContainer,
	Image,
	Content,
	Logo,
	Title,
	Text,
	Container,
	NotFoundImageContainer,
} from './styles';

const NotFound: FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Página não encontrada / Bluebird';
	}, []);

	return (
		<NotFoundContainer>
			<Container>
				<Content>
					{/* <Logo>
						<AppLogo onlyLogo />
					</Logo> */}
					<Title>Não tem nada aqui</Title>
					<Text>
						Parece que esta página não existe. Fique com este poodle sentadinho
						na poltrona pensando no seu problema.
					</Text>
					<ThemeButton large primary onClick={() => navigate(-1)}>
						Voltar
					</ThemeButton>
				</Content>
				<NotFoundImageContainer>
					<picture>
						<Image
							draggable={false}
							src={NotFoundPoodle}
							alt="Um poodle muito elegante sentado em uma cadeira vermelha chique"
						/>
					</picture>
				</NotFoundImageContainer>
			</Container>
		</NotFoundContainer>
	);
};

export default NotFound;
