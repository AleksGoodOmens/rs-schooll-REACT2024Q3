import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { countriesSelector, useAppDispatch, useAppSelector } from '../../store';
import { fetchCountries } from '../../store/slices/countries.slice';
import { ICountry } from '../../store/slices/inputs.types.interface';

import styles from './autoComplete.module.css';
import classNames from 'classnames';

export const CountryAutoComplete = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		formState: { errors },
		setValue,
	} = useFormContext();

	useEffect(() => {
		dispatch(fetchCountries());
	}, [dispatch]);

	const { countries } = useAppSelector(countriesSelector);
	const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (inputValue: string) => {
		const filtered = countries.filter((country) =>
			country.name.official.toLowerCase().includes(inputValue.toLowerCase()),
		);
		setFilteredCountries(filtered);

		setValue('country', inputValue);
	};

	const handleSelectCountry = (country: string) => {
		if (inputRef.current) {
			inputRef.current.value = country;
		}
		setFilteredCountries([]);

		setValue('country', country);
	};

	return (
		<>
			<label htmlFor="country">Select Country:</label>
			<input
				className={styles['input']}
				{...register}
				ref={inputRef}
				id="country"
				onChange={(e) => handleInputChange(e.target.value)}
				autoComplete="off"
			/>
			<p
				className={classNames(styles['error'], {
					[styles['error-active']]: errors['country'],
				})}
			>
				{errors['country']?.message ? String(errors['country'].message) : ''}
			</p>
			{filteredCountries.length > 0 && (
				<ul className={styles['list']}>
					{filteredCountries.slice(0, 5).map((country) => {
						return (
							<li
								className={styles['item']}
								key={country.name.official}
								onClick={() => handleSelectCountry(country.name.official)}
							>
								{country.name.official}
								<img
									src={country.flags.png}
									alt={country.flags.alt}
									width={30}
									height={20}
								/>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};
