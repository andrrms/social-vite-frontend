import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import SignInFormModal from '../components/SignInFormModal';

import HomeFeed from '../pages/HomeFeed';
import IndexPage from '../pages/IndexPage';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
		children: [
			{
				path: '/signin',
				element: <SignInFormModal />,
			},
		],
	},
	{
		path: '/home',
		element: <ProtectedRoute component={HomeFeed} fallbackPath="/" />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

