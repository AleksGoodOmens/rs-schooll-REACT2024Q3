import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import starWarsApi, { TDetailedCard } from '../../store/services/starWarsApi';
import { setActiveCard } from '../../store/slices/cards.slice';
import { cardSelector } from '../../store/slices/selectors';
import Banner from '../banner/banner';
import Loader from '../loader/loader';

import styles from './styles.module.css';

const { useGetItemQuery } = starWarsApi;

const DetailedCard = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { activeCategory } = useParams();
	const { activeCard } = useAppSelector(cardSelector);

	const { isLoading, isError, data, isFetching } = useGetItemQuery({
		category: activeCard?.category,
		id: activeCard?.id,
	});

	const renderData = (data: TDetailedCard) => {
		const entries = Object.entries(data).filter(([, value]) => value);

		return entries.map(([key, value]) => (
			<div key={key}>
				{key.replace(/_/g, ' ')}: <span>{value}</span>
			</div>
		));
	};

	const handleClose = () => {
		navigate(`/${activeCategory}`);
		dispatch(setActiveCard(null));
	};

	return (
		<>
			{(isLoading || isFetching) && <Loader />}
			{isError && <Banner>something go wrong</Banner>}
			{data && (
				<article className={`${styles['box']} `}>
					<h2 className={styles['header']}>
						<span>{data?.title || data?.name}</span>
						<button
							className={styles['close']}
							onClick={handleClose}
						>
							X
						</button>
					</h2>
					<h3 className={styles['heading']}>Description</h3>
					<div className={styles['content']}>{data && renderData(data)}</div>
				</article>
			)}
		</>
	);
};

export default DetailedCard;
