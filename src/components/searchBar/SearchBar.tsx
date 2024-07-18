import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setActiveItem, setSearchValue } from '../../store/slices/slices';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const { searchValue, activeCategory } = useAppSelector(
		(state) => state.categoriesReducer,
	);

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const [search, setSearch] = useState(searchValue);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const trimLowerCaseValue = search.trim().toLowerCase();
		dispatch(setSearchValue(trimLowerCaseValue));
		dispatch(setActiveItem(undefined));
		navigate(`${activeCategory}/?=search=${trimLowerCaseValue}`);
	};

	useEffect(() => {
		setSearch(searchValue);
	}, [searchValue]);

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
			/>

			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
