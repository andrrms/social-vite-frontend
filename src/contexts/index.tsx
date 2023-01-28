import { FC, PropsWithChildren } from 'react';

import AppThemeProvider from './AppThemeProvider';
import FeedProvider from './FeedProvider';
import UserSessionProvider from './UserSessionProvider';

const AppContextProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<UserSessionProvider>
			<FeedProvider>
				<AppThemeProvider>{children}</AppThemeProvider>
			</FeedProvider>
		</UserSessionProvider>
	);
};

export default AppContextProviders;
