import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import Cards from '../../components/Cards/Cards';

import { useAppSelector } from '../../store/hooks/hooks';

import styles from './styles.module.css';
import DetailedCard from '../../components/detailedCard/DetailedCard';
const MainPage = () => {
	const { activeCategory } = useAppSelector((state) => state.category);
	const { activeCard } = useAppSelector((state) => state.cards);

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className={styles['container']}>
					<div className={styles['box']}>
						<h1>Welcome to Star wars - wiki</h1>

						{!activeCategory && (
							<h2>To start your expedition please choose category below</h2>
						)}
					</div>
					<Categories />

					{activeCategory && <SearchBar />}
					<section
						className={`${styles['p-2']} ${activeCard ? styles['content'] : ''}`}
					>
						{activeCategory && <Cards />}
						{activeCard && <DetailedCard />}
					</section>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default MainPage;
