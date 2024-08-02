import Cards from '@/components/cards/Cards';
import NavCategories from '@/components/navCategories/NavCategories';
import SearchBar from '@/components/searchBar/SearchBar';
import { ReactNode } from 'react';

const Category = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavCategories />
			<SearchBar />
			<section>
				<Cards />
				{children}
			</section>
		</>
	);
};

export default Category;
