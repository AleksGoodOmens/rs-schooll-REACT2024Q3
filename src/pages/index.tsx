import styles from './styles.module.css';

import Intro from '../components/intro/Intro';
import NavCategories from '../components/navCategories/NavCategories';

import { useGetCategoriesQuery } from '../store/services/starWarsApi';
import { fetchData } from '../utils/fetchSSR';

export const getServerSideProps = fetchData;

const MainPage = () => {
	const { data } = useGetCategoriesQuery('');

	return (
		<>
			<section className={styles['container']}>
				<Intro />
				<NavCategories categories={data} />
			</section>
		</>
	);
};

export default MainPage;
