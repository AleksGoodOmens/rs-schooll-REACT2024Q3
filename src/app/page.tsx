import { Intro, NavCategories } from '../components';
import styles from './styles.module.css';

const MainPage = async () => {
	return (
		<section className={styles['container']}>
			<Intro />
			<NavCategories />
		</section>
	);
};

export default MainPage;
