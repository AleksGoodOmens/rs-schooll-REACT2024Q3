import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import SearchResults from '../components/searchResults/SearchResults';

const AppRoutes = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/:category',
				element: <SearchResults />,
				children: [
					{
						path: '/:category/:name',
						element: (
							<h1>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
								distinctio non eaque in accusamus tenetur velit! Earum, veniam
								tempore dolorum nesciunt praesentium dolore! Dolorem nulla
								officia impedit nisi molestiae laudantium!
							</h1>
						),
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
