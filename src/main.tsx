import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/error/errorBoundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './router/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<RouterProvider router={AppRoutes} />
		</ErrorBoundary>
	</React.StrictMode>,
);
