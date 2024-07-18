import Loader from '../loader/loader';
import Cards from '../cards/Cards';
import Pagination from '../pagination/Pagination';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import starWarsApi from '../../store/services/starWarsApi';
import { changePage } from '../../store/slices/slices';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

const { useGetCategoryQuery } = starWarsApi;

const Categories = () => {
	const dispatch = useAppDispatch();

	const { activeCategory, page, searchValue } = useAppSelector(
		(state) => state.categoriesReducer,
	);

	const { isLoading, isError, data } = useGetCategoryQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleChangePageNumber = (v: number) => {
		dispatch(changePage(v));
	};

	if (isLoading) return <Loader />;

	if (isError) return <div>something go wrong</div>;

	if (data)
		return (
			<div>
				<Pagination
					count={data.count}
					currentPage={page}
					disabledNext={!data.next || isLoading}
					disabledPrev={!data.previous || isLoading}
					handleChangePageNumber={handleChangePageNumber}
				/>

				<section className={`fadeIn ${styles['flex']}`}>
					<Cards
						results={data.results}
						dynamicCategory={activeCategory}
					/>
					<Outlet />
				</section>
			</div>
		);
};

export default Categories;
