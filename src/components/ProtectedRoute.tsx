import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useUserSession } from '../contexts/UserSessionProvider';

interface PrivateRouteProps {
	fallbackPath: string;
	component: FC;
}

const ProtectedRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	component: Component,
	fallbackPath,
}) => {
	const { isAuthenticated } = useUserSession();

	return isAuthenticated ? (
		<Component />
	) : (
		<Navigate to={{ pathname: fallbackPath }} />
	);
};

export default ProtectedRoute;
