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
import Banner from '../banner/banner';
import { useNavigate } from 'react-router-dom';

const { useGetCategoriesQuery } = starWarsApi;

const Categories = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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
			navigate(storageCategory);
		}
	}, [dispatch, storageCategory, navigate]);

	const handleChangeCategory = (category: string) => {
		if (activeCategory === category) {
			setStorageCategory('category', '');
			dispatch(setActiveCategory(''));
			navigate('/');
			return;
		}
		setStorageCategory('category', category);
		dispatch(setActiveCategory(category));
		dispatch(setActiveCard(null));
		dispatch(resetPage());
		navigate(category);
	};

	return (
		<>
			{isLoading && <Banner>tabs Loading...</Banner>}

			{isError && <Banner>something go wrong</Banner>}

			{!data && !isLoading && (
				<Banner>Server have problem, please come back soon</Banner>
			)}

			{categories.length !== 0 && (
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
