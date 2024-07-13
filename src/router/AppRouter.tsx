import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import DetailedCard from '../components/detailedCard/DetailedCard';
import Categories from '../components/categories/Categories';
import ErrorFallBack from '../components/error/errorFallBack/ErrorFallBack';
import Category from '../components/category/Category';

const AppRoutes = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <ErrorFallBack />,
		children: [
			{
				path: 'categories',
				element: <Categories />,
				children: [
					{
						path: ':dynamicCategory',
						element: <Category />,
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
