import { useEffect, useState } from 'react';
import { BASE_URL } from './constants';
import tabConverter from '../tabs.converter';

function useGetTabs() {
	const [data, setData] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<null | Error>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BASE_URL);
				const result = await response.json();
				const convertedRes = tabConverter(result);
				setData(convertedRes);
			} catch (err) {
				if (err instanceof Error) {
					setError(err);
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, isLoading, error };
}

export default useGetTabs;
