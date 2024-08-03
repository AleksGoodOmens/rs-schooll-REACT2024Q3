'useClient';
import styles from './styles.module.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Category from '..';
import starWarsApi, {
	TDetailedCard,
} from '../../../store/services/starWarsApi';
import Loader from '../../../components/loader/loader';
import Banner from '../../../components/banner/banner';

const { useGetItemQuery } = starWarsApi;

const DetailedCard = () => {
	const router = useRouter();
	const { category, id } = router.query;

	const { isLoading, isError, data, isFetching } = useGetItemQuery({
		category: category as string,
		id: id as string,
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
		router.push(`/${category}`);
	};

	return (
		<>
			{(isLoading || isFetching) && <Loader />}
			{isError && <Banner>something go wrong</Banner>}
			{data && !isLoading && !isFetching && (
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

DetailedCard.getLayout = function getLayout(DetailedCard: ReactNode) {
	return <Category>{DetailedCard}</Category>;
};

export default DetailedCard;
