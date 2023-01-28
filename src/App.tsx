import { RouterProvider } from 'react-router-dom';

import { useAppTheme } from './contexts/AppThemeProvider';
import { GlobalStyle, ResetStyle } from './styles/global.style';
import { router } from './routes';

function App() {
	const { theme } = useAppTheme();

	return (
		<>
			<ResetStyle />
			<GlobalStyle colorScheme={theme} />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
