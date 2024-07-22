import starWarsApi from '../../store/services/starWarsApi';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
	setActiveCategory,
	setCategories,
} from '../../store/slices/categories.slice';
import { useEffect } from 'react';
import { resetPage, setActiveCard } from '../../store/slices/cards.slice';

const { useGetCategoriesQuery } = starWarsApi;

const Categories = () => {
	const dispatch = useAppDispatch();

	const { activeCategory, categories } = useAppSelector(
		(state) => state.category,
	);
	const { data, isError, isLoading } = useGetCategoriesQuery('');

	useEffect(() => {
		if (data) {
			dispatch(setCategories(data));
		}
	}, [data, dispatch]);

	const handleChangeCategory = (category: string) => {
		dispatch(setActiveCategory(category));
		dispatch(setActiveCard(null));
		dispatch(resetPage());
	};

	if (categories.length) {
		return (
			<nav className={styles['flex']}>
				{categories.map((category) => (
					<button
						onClick={() => handleChangeCategory(category)}
						className={`${styles['link']} ${category === activeCategory ? styles['active'] : ''}`}
						key={category}
					>
						{category}
					</button>
				))}
			</nav>
		);
	}

	if (isLoading) return <div>tabs Loading...</div>;

	if (isError) return <div>something go wrong</div>;

	if (!data) return <div>Server have problem, please come back soon</div>;
};

export default Categories;
