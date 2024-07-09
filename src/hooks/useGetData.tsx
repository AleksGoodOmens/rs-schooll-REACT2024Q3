import { useEffect, useState } from 'react';

const BASE_URL = 'https://swapi.dev/api';

const useGetData = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (value?: string) => {
		try {
			setIsLoading(true);
			setError(undefined);
			const newUrl = new URL(BASE_URL);
			if (value) {
				newUrl.search = value;
			}

			console.log(newUrl);
			const response = await fetch(newUrl);
			if (response.ok) {
				const res = await response.json();
				setIsLoading(false);
				setData(res);
			}
		} catch (error: unknown) {
			console.log('fetch error', error);
			setError('something go wrong');
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, data, error, fetchData };
};

export default useGetData;
