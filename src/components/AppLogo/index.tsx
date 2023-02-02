import { FC } from 'react';
import { FiTwitter } from 'react-icons/fi';

import { LogoContainer } from './styles';

const AppLogo: FC<{ onlyLogo?: boolean }> = ({ onlyLogo }) => {
	return (
		<LogoContainer>
			<FiTwitter />
			{!onlyLogo && 'Bluebird'}
		</LogoContainer>
	);
};

export default AppLogo;

