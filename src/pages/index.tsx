import Categories from '../components/navCategories/NavCategories';
import Downloader from '../components/downloader/Downloader';

import styles from './styles.module.css';
import Intro from '../components/intro/Intro';
import { cardSelector } from '../store/slices/selectors';
import { useAppSelector } from '../store/hooks/hooks';

const MainPage = () => {
	const { favoriteCards } = useAppSelector(cardSelector);

	return (
		<>
			<section className={styles['container']}>
				<Intro />
				<Categories />
			</section>
			{favoriteCards.length > 0 ? <Downloader /> : ''}
		</>
	);
};

export default MainPage;
