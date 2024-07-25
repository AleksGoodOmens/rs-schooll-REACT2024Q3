import starWarsApi from '../../store/services/starWarsApi';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
	setActiveCategory,
	setCategories,
} from '../../store/slices/categories.slice';
import { useEffect } from 'react';
import { resetPage, setActiveCard } from '../../store/slices/cards.slice';
import { categoriesSelector } from '../../store/slices/selectors';
import useLocalStorage_v2 from '../../utils/hooks/UseLocalStorage_v2';

const { useGetCategoriesQuery } = starWarsApi;

const Categories = () => {
	const dispatch = useAppDispatch();

	const [storageCategory, setStorageCategory] = useLocalStorage_v2('category');

	const { activeCategory, categories } = useAppSelector(categoriesSelector);

	const { data, isError, isLoading } = useGetCategoriesQuery('');

	useEffect(() => {
		if (data) {
			dispatch(setCategories(data));
		}
	}, [data, dispatch]);

	useEffect(() => {
		if (storageCategory) {
			dispatch(setActiveCategory(storageCategory));
		}
	}, [dispatch, storageCategory]);

	const handleChangeCategory = (category: string) => {
		setStorageCategory('category', category);
		dispatch(setActiveCategory(category));
		dispatch(setActiveCard(null));
		dispatch(resetPage());
	};

	return (
		<>
			{isLoading && <div>tabs Loading...</div>}

			{isError && <div>something go wrong</div>}

			{!data && <div>Server have problem, please come back soon</div>}

			{categories.length && (
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
			)}
		</>
	);
};
export default Categories;
