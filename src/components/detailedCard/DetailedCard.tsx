import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import starWarsApi, { TDetailedCard } from '../../store/services/starWarsApi';
import { setActiveCard } from '../../store/slices/cards.slice';
import Loader from '../loader/loader';

import styles from './styles.module.css';

const { useGetItemQuery } = starWarsApi;

const DetailedCard = () => {
	const dispatch = useAppDispatch();
	const { activeCard } = useAppSelector((state) => state.cards);

	const { isLoading, isError, data, isFetching } = useGetItemQuery({
		category: activeCard?.category,
		id: activeCard?.id,
	});

	if (isLoading || isFetching) return <Loader />;
	if (isError || !data) return <div>something go wrong</div>;

	const renderData = (data: TDetailedCard) => {
		const entries = Object.entries(data).filter(([, value]) => value);

		return entries.map(([key, value]) => (
			<div key={key}>
				{key.replace(/_/g, ' ')}: <span>{value}</span>
			</div>
		));
	};

	return (
		<article className={`${styles['box']} `}>
			<h2 className={styles['header']}>
				<span>
					{data.title && data.title}
					{data.name && data.name}
				</span>
				<button onClick={() => dispatch(setActiveCard(null))}>X</button>
			</h2>
			<h3>Description</h3>
			<div className={styles['content']}>{data && renderData(data)}</div>
		</article>
	);
};

export default DetailedCard;
