import { FC } from 'react';
import { FiHome, FiHash } from 'react-icons/fi';

import { useFeed } from '../../contexts/FeedProvider';
import { useUserSession } from '../../contexts/UserSessionProvider';

import AppLogo from '../AppLogo';
import AppThemeSelector from '../AppThemeSelector';
import NewPostDialog from '../NewPostDialog';
import OfficialBadge from '../OfficialBadge';
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
	const { fetchPosts, openComposePostDialog } = useFeed();

	return (
		<SideNavbarContainer>
			<NavWrapper>
				<div className="wrapper">
					<LinksList>
						<Item>
							<ItemLink to="/home">
								<AppLogo onlyLogo />
							</ItemLink>
						</Item>
						<Item>
							<ItemLink
								to="/home"
								onClick={() => {
									fetchPosts();
									window.scrollTo({
										top: 0,
										behavior: 'smooth',
									});
								}}
							>
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
						<ThemeButton
							extend
							primary
							large
							onClick={() => openComposePostDialog()}
						>
							Nova publicação
						</ThemeButton>
						{/* <NewPostDialog></NewPostDialog> */}
					</ButtonContainer>
				</div>
				<BottomContainer>
					<AppThemeSelector />
					<UserChip squared={user?.accountType === 'ENTERPRISE'}>
						<UserIcon
							src={user?.avatarUrl as string}
							alt={user?.name as string}
							squared={user?.accountType === 'ENTERPRISE'}
							size={44}
						/>
						<div>
							<span className="name">
								<p>{user?.name}</p>
								<span>
									{user?.accountType && (
										<VerifiedBadge type={user?.accountType} />
									)}
								</span>
								{user?.isOfficial && <OfficialBadge />}
							</span>
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

