import styles from './styles.module.css';
import { IPeopleItem } from '../../interfaces/interfaces';
import useGetData from '../../hooks/useGetData';
import { useEffect } from 'react';
import PeopleItem from '../peopleItem/PeopleItem';
import Loader from '../loader/loader';
import { Outlet, useParams } from 'react-router-dom';

const SearchResults = () => {
	const { data, isLoading, fetchData } = useGetData<IPeopleItem>();
	const { category } = useParams();

	useEffect(() => {
		fetchData({ path: category });
	}, [category, fetchData]);
	console.log(category);
	return (
		<div>
			<div className={`${styles.flex}`}>
				{isLoading && <Loader />}
				{!isLoading &&
					data &&
					category &&
					data.map((item) => (
						<PeopleItem
							category={category}
							key={item.name}
							item={item}
						/>
					))}
			</div>
			<Outlet />
		</div>
	);
};

export default SearchResults;
