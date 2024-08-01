import Categories from '../components/categories/Categories';
import Downloader from '../components/downloader/Downloader';

import styles from './styles.module.css';
import Intro from '../components/intro/Intro';
import { useAppSelector } from '@/store/hooks/hooks';
import { cardSelector } from '@/store/slices/selectors';
const MainPage = () => {
	const { favoriteCards } = useAppSelector(cardSelector);

	return (
		<>
			<main className='main'>
				<section className={styles['container']}>
					<Intro />
					<Categories />
				</section>
			</main>
			{favoriteCards.length > 0 ? <Downloader /> : ''}
		</>
	);
};

export default MainPage;
