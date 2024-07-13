import { FunctionComponent } from 'react';
import { Outlet, useParams } from 'react-router-dom';

interface CategoryProps {}

const Category: FunctionComponent<CategoryProps> = () => {
	const { dynamicCategory } = useParams();
	return (
		<div>
			<h1>{dynamicCategory}</h1>
			<Outlet />
		</div>
	);
};

export default Category;
