import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import DetailedCard from '../components/detailedCard/DetailedCard';
import Categories from '../components/categories/Categories';
import ErrorFallBack from '../components/error/errorFallBack/ErrorFallBack';
import App from '../components/app/App';

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
						path: ':dynamicCategory',
						element: <Categories />,
						children: [
							{
								path: ':id',
								element: <DetailedCard />,
							},
						],
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
