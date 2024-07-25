import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setActiveCard, setSearchValue } from '../../store/slices/cards.slice';
import { cardSelector } from '../../store/slices/selectors';
import useLocalStorage_v2 from '../../utils/hooks/UseLocalStorage_v2';

const SearchBar = () => {
	const [storageSearch, setStorageSearch] = useLocalStorage_v2('searchValue');
	const dispatch = useAppDispatch();

	const { searchValue } = useAppSelector(cardSelector);

	const [search, setSearch] = useState(storageSearch || searchValue);
	const [errorMessage, setErrorMessage] = useState(false);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(setActiveCard(null));

		if (search) {
			setStorageSearch('searchValue', search);
			dispatch(setSearchValue(search));
			return;
		}

		if (!searchValue && !search) return setErrorMessage(true);

		dispatch(setSearchValue(''));
	};

	useEffect(() => {
		const autoHideErrorTimer = setTimeout(() => {
			setErrorMessage(false);
		}, 2000);

		return () => clearTimeout(autoHideErrorTimer);
	}, [errorMessage]);

	useEffect(() => {
		const autoFetchTimeOut = setTimeout(() => {
			if (search !== searchValue) {
				dispatch(setSearchValue(search));
				setStorageSearch('searchValue', search);
			}
		}, 3000);

		return () => clearTimeout(autoFetchTimeOut);
	}, [dispatch, search, setStorageSearch, searchValue]);

	return (
		<>
			<form
				className={`${styles.form} `}
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
			</form>
			{errorMessage && <span>Please enter a search term</span>}
		</>
	);
};

export default SearchBar;
