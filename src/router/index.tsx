import App from '../App';

import { createBrowserRouter } from 'react-router-dom';
import { Uncontrolled } from '../pages';
import { Controlled } from '../pages/Controlled/Controlled';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'uncontrolled',
				element: <Uncontrolled />,
			},
			{
				path: 'controlled',
				element: <Controlled />,
			},
		],
	},
]);
