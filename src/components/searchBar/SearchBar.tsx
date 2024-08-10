'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './styles.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// todo query category
export const SearchBar = () => {
	const router = useRouter();
	const path = usePathname();
	const search = useSearchParams().get('search');
	const [inputSearch, setSearch] = useState(search || '');

	const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			setSearch(e.currentTarget.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		router.push(`${path}?page=1${inputSearch ? '&search=' + inputSearch : ''}`);
	};

	return (
		<>
			<form
				className={`${styles['form']} `}
				onSubmit={handleSubmit}
			>
				<label htmlFor="search"> Search by name:</label>
				<input
					onChange={handleChangeInputValue}
					value={inputSearch}
					type="search"
					name="search"
					id="search"
					placeholder="Type any name"
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
};
