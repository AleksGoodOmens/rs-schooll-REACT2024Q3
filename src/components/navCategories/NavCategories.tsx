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
import { useRouter } from 'next/router';
import classNames from 'classnames';

const { useGetCategoriesQuery } = starWarsApi;

const NavCategories = () => {
	const { data, isError, isLoading } = useGetCategoriesQuery('');

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) {
			dispatch(setCategories(data));
		}
	}, [data, dispatch]);

	const router = useRouter();
	const { category } = router.query;

	const [storageCategory, setStorageCategory] = useLocalStorage_v2('category');

	const { categories } = useAppSelector(categoriesSelector);

	useEffect(() => {
		if (storageCategory) {
			dispatch(setActiveCategory(storageCategory));
		}
	}, [dispatch, storageCategory]);

	const handleChangeCategory = (category: string) => {
		setStorageCategory('category', category);
		dispatch(setActiveCard(null));
		dispatch(resetPage());
		router.push(`/${category}`);
	};

	return (
		<>
			{isLoading && <Banner>tabs Loading...</Banner>}

			{isError && <Banner>something go wrong</Banner>}

			{categories.length === 0 && !isLoading && (
				<Banner>Server have problem, please come back soon</Banner>
			)}

			{categories.length !== 0 && (
				<nav className={styles['flex']}>
					{categories.map((cat) => (
						<button
							onClick={() => handleChangeCategory(cat)}
							className={classNames(
								styles['link'],
								category === cat ? styles['active'] : '',
							)}
							key={cat}
						>
							{cat}
						</button>
					))}
				</nav>
			)}
		</>
	);
};
export default NavCategories;
