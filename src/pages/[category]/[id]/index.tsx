'useClient';
import styles from './styles.module.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Category from '..';
import { TDetailedCard } from '../../../store/services/interface';
import { useGetItemQuery } from '../../../store/services/starWarsApi';
import { fetchData } from '../../../utils/fetchSSR';

export const getServerSideProps = fetchData;

const DetailedCard = () => {
	const router = useRouter();
	const { category, id, page } = router.query;

	const { data } = useGetItemQuery({
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
		router.push(`/${category}?page=${page}`);
	};

	return (
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
	);
};

DetailedCard.getLayout = function getLayout(DetailedCard: ReactNode) {
	return <Category>{DetailedCard}</Category>;
};

export default DetailedCard;
