import { ReactNode } from 'react';

import styles from './styles.module.css';
import NavCategories from '../../components/navCategories/NavCategories';
import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';
import Cards from '../../components/cards/Cards';

const Category = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavCategories />
			<SearchBar />
			<Pagination />
			<section className={styles['items']}>
				<Cards />
				{children}
			</section>
		</>
	);
};

export default Category;
