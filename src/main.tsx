import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/app/App.tsx';
import './index.css';
import ErrorBoundary from './components/error/errorBoundary/ErrorBoundary.tsx';
import MainPage from './pages/main/MainPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary>
			{/* <App /> */}
			<MainPage />
		</ErrorBoundary>
	</React.StrictMode>,
);
