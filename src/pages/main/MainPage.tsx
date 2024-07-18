import { Outlet, useNavigate } from 'react-router-dom';

import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import Tabs from '../../components/tabs/Tabs';

import styles from './styles.module.css';
import { useAppSelector } from '../../store/hooks/hooks';
import { useEffect } from 'react';

const MainPage = () => {
	const navigate = useNavigate();
	const { activeCategory } = useAppSelector((state) => state.categoriesReducer);
	useEffect(() => {
		if (!activeCategory) {
			navigate('/');
			return;
		}
	}, [activeCategory, navigate]);

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
					<Tabs />

					{activeCategory && <SearchBar />}
					<Outlet />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default MainPage;
