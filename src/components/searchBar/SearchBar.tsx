import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setSearchValue } from '../../store/slices/cards.slice';

const SearchBar = () => {
	const dispatch = useAppDispatch();

	const { searchValue } = useAppSelector((state) => state.cards);

	const [search, setSearch] = useState(searchValue);
	const [errorMessage, setErrorMessage] = useState(false);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (search) {
			dispatch(setSearchValue(search));
			setSearch('');
			return;
		}
		setErrorMessage(true);
	};

	useEffect(() => {
		const autoHideErrorTimer = setTimeout(() => {
			setErrorMessage(false);
		}, 2000);

		return () => clearTimeout(autoHideErrorTimer);
	}, [errorMessage]);

	useEffect(() => {
		const autoFetchTimeOut = setTimeout(() => {
			if (search) {
				dispatch(setSearchValue(search));
				setSearch('');
			}
		}, 3000);

		return () => clearTimeout(autoFetchTimeOut);
	}, [dispatch, search]);

	return (
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
			{errorMessage && <span>Please enter a search term</span>}
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
