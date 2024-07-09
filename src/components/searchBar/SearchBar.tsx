import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styles from './styles.module.css';

interface IProps {
	searchValue: string;
	setSearchValue: (s: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: IProps) => {
	const [search, setSearch] = useState<string>(searchValue);

	useEffect(() => {
		setSearch(searchValue);
	}, [searchValue]);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const clearSearch = search.trim();

		window.localStorage.setItem('searchValue', clearSearch);
		setSearchValue(clearSearch);
	};
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<label htmlFor="search"> Search characters by name:</label>
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
