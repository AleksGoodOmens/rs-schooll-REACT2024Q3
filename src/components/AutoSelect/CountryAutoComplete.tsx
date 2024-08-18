import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { countriesSelector, useAppDispatch, useAppSelector } from '../../store';
import { fetchCountries } from '../../store/slices/countries.slice';
import { ICountry } from '../../store/slices/inputs.types.interface';

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
		<div>
			<label htmlFor="country">Select Country:</label>
			<input
				{...register}
				ref={inputRef}
				id="country"
				onChange={(e) => handleInputChange(e.target.value)}
				autoComplete="off"
			/>
			<p>{errors['country']?.message ? '' + errors['country']?.message : ''}</p>
			{filteredCountries.length > 0 && (
				<ul>
					{filteredCountries.slice(0, 5).map((country) => {
						return (
							<li
								key={country.name.official}
								onClick={() => handleSelectCountry(country.name.official)}
								style={{ cursor: 'pointer' }}
							>
								{country.name.official}
								<img
									src={country.flags.png}
									alt={country.flags.alt}
								/>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
