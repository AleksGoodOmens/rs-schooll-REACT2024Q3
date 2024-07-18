import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import starWarsApi from '../../store/services/starWarsApi';
import Loader from '../loader/loader';

import styles from './styles.module.css';

import { IDetailedCard } from '../../utils/interfaces/interfaces';

const { useGetItemQuery } = starWarsApi;

const DetailedCard = () => {
	const { activeCategory } = useAppSelector((state) => state.categoriesReducer);
	const { id } = useParams();
	const { isLoading, isError, data } = useGetItemQuery({
		category: activeCategory,
		id,
	});

	if (isLoading) return <Loader />;
	if (isError) return <div>something go wrong</div>;

	const renderData = (data: IDetailedCard) => {
		const entries = Object.entries(data).filter(([, value]) => value);

		return entries.map(([key, value]) => (
			<div key={key}>
				{key.replace(/_/g, ' ')}: <span>{value}</span>
			</div>
		));
	};

	return (
		<article className={`${styles.box} `}>
			<h2>
				{data
					? data.title
						? data.title
						: data.name
							? data.name
							: 'name'
					: 'name'}
			</h2>
			<h3>Description</h3>
			<div className={styles['content']}>{data && renderData(data)}</div>
		</article>
	);
};

export default DetailedCard;
