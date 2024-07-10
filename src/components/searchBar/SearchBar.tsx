import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './styles.module.css';

interface ISearchBarProps {
	searchValue: string;
	updateLocalStorage: (key: string, value: string) => void;
}

const SearchBar = (props: ISearchBarProps) => {
	const [search, setSearch] = useState(props.searchValue);

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		props.updateLocalStorage('searchValue', search);
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
