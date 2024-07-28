import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import Downloader from '../../components/downloader/Downloader';

import { useAppSelector } from '../../store/hooks/hooks';

import styles from './styles.module.css';
import Intro from '../../components/intro/Intro';
import { Outlet } from 'react-router-dom';
import { cardSelector, categoriesSelector } from '../../store/slices/selectors';
const MainPage = () => {
	const { activeCategory } = useAppSelector(categoriesSelector);
	const { favoriteCards } = useAppSelector(cardSelector);

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className={styles['container']}>
					{!activeCategory && <Intro />}
					<Categories />

					{activeCategory && <SearchBar />}

					{activeCategory && <Outlet />}
				</section>
			</main>
			{favoriteCards.length > 0 ? <Downloader /> : ''}
			<Footer />
		</div>
	);
};

export default MainPage;
