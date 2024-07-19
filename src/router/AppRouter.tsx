import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import DetailedCard from '../components/detailedCard/DetailedCard';
import ErrorFallBack from '../components/error/errorFallBack/ErrorFallBack';
import App from '../components/app/App';
import Cards from '../components/Cards/Cards';

const AppRoutes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorFallBack />,
		children: [
			{
				path: '/',
				element: <MainPage />,
				children: [
					{
						path: ':activeCategory',
						element: <Cards />,
					},
					{
						path: ':id',
						element: <DetailedCard />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default AppRoutes;
