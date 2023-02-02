import { FC, PropsWithChildren } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

import AppThemeProvider from './AppThemeProvider';
import FeedProvider from './FeedProvider';
import UserSessionProvider from './UserSessionProvider';

const AppContextProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<UserSessionProvider>
			<FeedProvider>
				<AppThemeProvider>
					<TooltipProvider>{children}</TooltipProvider>
				</AppThemeProvider>
			</FeedProvider>
		</UserSessionProvider>
	);
};

export default AppContextProviders;

