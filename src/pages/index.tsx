import styles from './styles.module.css';

import { cardSelector } from '../store/slices/selectors';

import Intro from '../components/intro/Intro';
import NavCategories from '../components/navCategories/NavCategories';
import Downloader from '../components/downloader/Downloader';

import { getServerSideProps } from './getServerSideProps';
import { useAppSelector } from '../store/hooks/hooks';
import { useGetCategoriesQuery } from '../store/services/starWarsApi';

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

export { getServerSideProps };
