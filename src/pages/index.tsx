import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import SearchBar from '../components/searchBar/SearchBar';
import Categories from '../components/categories/Categories';
import Downloader from '../components/downloader/Downloader';

import styles from './styles.module.css';
import Intro from '../components/intro/Intro';
import { useAppSelector } from '@/store/hooks/hooks';
import { cardSelector, categoriesSelector } from '@/store/slices/selectors';
import Head from 'next/head';
const MainPage = () => {
	const { activeCategory } = useAppSelector(categoriesSelector);
	const { favoriteCards } = useAppSelector(cardSelector);

	return (
		<>
			<div className='wrapper'>
				<Header />
				<main className='main'>
					<section className={styles['container']}>
						{!activeCategory && <Intro />}
						<Categories />
						{/* 
	
						<SearchBar /> */}
					</section>
				</main>
				{favoriteCards.length > 0 ? <Downloader /> : ''}
				<Footer />
			</div>
		</>
	);
};

export default MainPage;
