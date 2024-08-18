import App from '../App';

import { createBrowserRouter } from 'react-router-dom';
import { Uncontrolled, Controlled } from '../pages';
import { MainPage } from '../pages/MainPage/MainPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		loader: () => <div>Loading</div>,
		children: [
			{
				path: '/main',
				element: <MainPage />,
			},
			{
				path: 'uncontrolled',
				loader: () => <div>Loading</div>,
				element: <Uncontrolled />,
			},
			{
				path: 'controlled',
				loader: () => <div>Loading</div>,
				element: <Controlled />,
			},
		],
	},
]);
