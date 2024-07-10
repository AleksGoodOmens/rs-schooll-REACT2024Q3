import { Outlet } from 'react-router-dom';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import useLocalStorage from '../../hooks/useLocalStorage';

import styles from './styles.module.css';
import Tabs from '../../components/tabs/Tabs';

const MainPage = () => {
	const [searchValue, setSearchValue] = useLocalStorage('searchValue');

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section>
					<h1>Welcome to Star wars - wiki</h1>

					<SearchBar
						searchValue={searchValue}
						updateLocalStorage={setSearchValue}
					/>
					<Tabs />
				</section>

				<section className={styles['flex']}>
					<Outlet />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default MainPage;
