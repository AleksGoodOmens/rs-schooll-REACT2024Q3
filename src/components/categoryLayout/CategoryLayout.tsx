import { FunctionComponent, ReactNode } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Categories from '../categories/Categories';

interface CategoryLayoutProps {
	children: ReactNode;
}

const CategoryLayout: FunctionComponent<CategoryLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<SearchBar />
			<Categories />

			{children}
		</>
	);
};

export default CategoryLayout;
