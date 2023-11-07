import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProviderInvest } from './contexts/AuthContextInvest';
import './index.css';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProviderInvest>
			<RouterProvider router={router} />
		</AuthProviderInvest>
	</React.StrictMode>
);
