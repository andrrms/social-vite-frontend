import { FC } from 'react';
import { FiHome, FiHash } from 'react-icons/fi';

import { useFeed } from '../../contexts/FeedProvider';
import { useUserSession } from '../../contexts/UserSessionProvider';

import AppLogo from '../AppLogo';
import AppThemeSelector from '../AppThemeSelector';
import ThemeButton from '../ThemeButton';
import UserIcon from '../UserIcon';
import VerifiedBadge from '../VerifiedBadge';

import {
	BottomContainer,
	ButtonContainer,
	Item,
	ItemLink,
	LinksList,
	NavWrapper,
	SideNavbarContainer,
	UserChip,
} from './styles';

const SideNavbar: FC = () => {
	const { user, logoutUser } = useUserSession();
	const { fetchPosts } = useFeed();

	return (
		<SideNavbarContainer>
			<NavWrapper>
				<div>
					<LinksList>
						<Item>
							<ItemLink to="/home">
								<AppLogo onlyLogo />
							</ItemLink>
						</Item>
						<Item>
							<ItemLink to="/home" onClick={() => fetchPosts()}>
								<FiHome /> Página Inicial
							</ItemLink>
						</Item>
						<Item>
							<ItemLink to="/explore">
								<FiHash /> Explorar
							</ItemLink>
						</Item>
					</LinksList>
					<ButtonContainer>
						<ThemeButton extend primary large>
							Tweetar
						</ThemeButton>
					</ButtonContainer>
				</div>
				<BottomContainer>
					<AppThemeSelector />
					<UserChip>
						<UserIcon
							src={user?.avatarUrl as string}
							alt={user?.name as string}
							size={44}
						/>
						<div>
							<p>
								{user?.name}
								{user?.isVerified && <VerifiedBadge />}
							</p>
							<span>@{user?.username}</span>
						</div>
					</UserChip>
					<ThemeButton extend onClick={logoutUser}>
						Sair
					</ThemeButton>
				</BottomContainer>
			</NavWrapper>
		</SideNavbarContainer>
	);
};

export default SideNavbar;
