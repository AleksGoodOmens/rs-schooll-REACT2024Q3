import styles from './styles.module.css';

import { cardSelector } from '../store/slices/selectors';

import Intro from '../components/intro/Intro';
import NavCategories from '../components/navCategories/NavCategories';
import Downloader from '../components/downloader/Downloader';

import { useAppSelector } from '../store/hooks/hooks';
import {
	getRunningQueriesThunk,
	starWarsApi,
	useGetCategoriesQuery,
} from '../store/services/starWarsApi';
import { wrapper } from '../store';

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		const { getCategories } = starWarsApi.endpoints;
		const result = await store.dispatch(getCategories.initiate(''));

		if (result.error) {
			return {
				notFound: true,
			};
		}

		await Promise.all(store.dispatch(getRunningQueriesThunk()));

		return {
			props: {},
		};
	},
);

const MainPage = () => {
	const { favoriteCards } = useAppSelector(cardSelector);

	const { data } = useGetCategoriesQuery('');

	return (
		<>
			<section className={styles['container']}>
				<Intro />
				<NavCategories categories={data} />
			</section>
			{favoriteCards.length > 0 ? <Downloader /> : ''}
		</>
	);
};

export default MainPage;
