'useClient';
import styles from './styles.module.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Category from '..';
import { TDetailedCard } from '../../../store/services/interface';
import {
	getCards,
	getCategories,
	getItem,
	getRunningQueriesThunk,
	useGetItemQuery,
} from '../../../store/services/starWarsApi';
import { wrapper } from '../../../store';

const DetailedCard = () => {
	const router = useRouter();
	const { category, id } = router.query;

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
		router.back();
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

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (ctx) => {
		await store.dispatch(getCategories.initiate(''));

		const activeCat = ctx.query?.category;
		const page = ctx.query?.page || '1';
		const search = ctx.query?.search || '';
		const id = ctx.query.id;

		await store.dispatch(
			getCards.initiate({
				category: activeCat as string,
				page: page as string,
				searchValue: search as string,
			}),
		);

		await store.dispatch(
			getItem.initiate({ category: activeCat as string, id: id as string }),
		);

		await Promise.all(store.dispatch(getRunningQueriesThunk()));

		return { props: {} };
	},
);
