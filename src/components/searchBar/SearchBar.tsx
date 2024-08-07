import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './styles.module.css';
import useLocalStorage_v2 from '../../utils/hooks/UseLocalStorage_v2';
import { useAppDispatch } from '../../store/hooks/hooks';
import { resetPage, setSearchValue } from '../../store/slices/cards.slice';
import { useRouter } from 'next/router';

const SearchBar = () => {
	const [storageSearch, setStorageSearch] = useLocalStorage_v2('searchValue');
	const dispatch = useAppDispatch();
	const router = useRouter();

	const urlSearch = router.query.search;

	const category = router.query.category;

	const [search, setSearch] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (search !== urlSearch) {
			setStorageSearch('searchValue', search);

			router.push(`/${category}?page=1&search=${search}`);
			dispatch(setSearchValue(search));
			dispatch(resetPage());
			return;
		}

		if (!search && !storageSearch) return setErrorMessage(true);

		dispatch(setSearchValue(''));
		setStorageSearch('searchValue', search);
	};

	useEffect(() => {
		const autoHideErrorTimer = setTimeout(() => {
			setErrorMessage(false);
		}, 2000);

		return () => clearTimeout(autoHideErrorTimer);
	}, [errorMessage]);

	useEffect(() => {
		const autoFetchTimeOut = setTimeout(() => {
			if (search !== urlSearch) {
				dispatch(setSearchValue(search));
				setStorageSearch('searchValue', search);
			}
		}, 3000);

		return () => clearTimeout(autoFetchTimeOut);
	}, [dispatch, search, setStorageSearch, urlSearch]);

	return (
		<>
			<form
				className={`${styles['form']} `}
				onSubmit={handleSubmit}
			>
				<label htmlFor="search"> Search by name:</label>
				<input
					onChange={handleChangeInputValue}
					value={search}
					type="search"
					name="search"
					id="search"
					placeholder="Type any name"
				/>
				<button type="submit">Search</button>
				{errorMessage && <span>Please enter a search term</span>}
			</form>
		</>
	);
};

export default SearchBar;
