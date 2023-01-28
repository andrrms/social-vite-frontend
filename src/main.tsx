import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AppContextProviders from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppContextProviders>
			<App />
		</AppContextProviders>
	</React.StrictMode>
);
