import {
	ChangeEvent,
	FormEvent,
	FunctionComponent,
	useEffect,
	useState,
} from 'react';

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
	searchValue: string;
	category: string;
	setSearchValue: (value: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
	category,
	searchValue,
	setSearchValue,
}) => {
	const [search, setSearch] = useState(searchValue);
	const navigate = useNavigate();

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const trimLowerCaseValue = search.trim().toLowerCase();
		setSearchValue(trimLowerCaseValue);

		if (trimLowerCaseValue) {
			navigate(`categories/${category}/?search=${trimLowerCaseValue}`);
		} else {
			navigate(`categories/${category}/`);
		}
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
