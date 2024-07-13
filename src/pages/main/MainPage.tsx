import { Outlet, useNavigate } from 'react-router-dom';

import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import Tabs from '../../components/tabs/Tabs';

import useLocalStorage from '../../utils/hooks/useLocalStorage';

import styles from './styles.module.css';
import { useEffect } from 'react';

const MainPage = () => {
	const [localStorage, setLocalStorage] = useLocalStorage();

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.category) {
			navigate(
				`categories/${localStorage.category}/${localStorage.searchValue && '?search=' + localStorage.searchValue}`,
			);
		}
	}, [localStorage, navigate]);

	const { searchValue, category } = localStorage;

	const updateSearchValue = (value: string) => {
		setLocalStorage({
			...localStorage,
			searchValue: value,
		});
	};
	const updateCategoryValue = (value: string) => {
		setLocalStorage({
			searchValue: '',
			category: value,
		});
	};

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className={styles['container']}>
					<div className={styles['box']}>
						<h1>Welcome to Star wars - wiki</h1>

						{!category && (
							<h2>To start your expedition please choose category below</h2>
						)}
					</div>
					<Tabs setCategory={updateCategoryValue} />

					{category && (
						<SearchBar
							searchValue={searchValue}
							category={category}
							setSearchValue={updateSearchValue}
						/>
					)}
					<Outlet />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default MainPage;
