import styles from './styles.module.css';
import { useEffect } from 'react';
import Banner from '../banner/banner';
import starWarsApi from '@/store/services/starWarsApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import useLocalStorage_v2 from '@/utils/hooks/UseLocalStorage_v2';
import { categoriesSelector } from '@/store/slices/selectors';
import {
	setActiveCategory,
	setCategories,
} from '@/store/slices/categories.slice';
import { resetPage, setActiveCard } from '@/store/slices/cards.slice';
import Link from 'next/link';
import NavLink from '../navLink/NavLink';

const { useGetCategoriesQuery } = starWarsApi;

const Categories = () => {
	const dispatch = useAppDispatch();

	const [storageCategory, setStorageCategory] = useLocalStorage_v2('category');

	const { categories } = useAppSelector(categoriesSelector);

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
		dispatch(setActiveCard(null));
		dispatch(resetPage());
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
						<NavLink
							exact
							href={`/category/${category}`}
							onClick={() => handleChangeCategory(category)}
							className={styles['link']}
							key={category}
						>
							{category}
						</NavLink>
					))}
				</nav>
			)}
		</>
	);
};
export default Categories;
