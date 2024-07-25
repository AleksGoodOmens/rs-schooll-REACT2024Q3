import starWarsApi from '../../store/services/starWarsApi';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
	setActiveCategory,
	setCategories,
} from '../../store/slices/categories.slice';
import { useEffect } from 'react';
import { resetPage, setActiveCard } from '../../store/slices/cards.slice';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const { useGetCategoriesQuery } = starWarsApi;

const Categories = () => {
	const [storage, setStorage] = useLocalStorage();
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

	useEffect(() => {
		if (storage.category) {
			dispatch(setActiveCategory(storage.category));
		}
	}, [dispatch, storage.category]);

	const handleChangeCategory = (category: string) => {
		setStorage({ ...storage, category: category });
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
