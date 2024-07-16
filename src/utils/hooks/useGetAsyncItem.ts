import { useEffect, useState } from 'react';
import { BASE_URL } from './constants';

function useAsyncGetItem<T>(path: string | undefined) {
	const [data, setData] = useState<null | T>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<null | Error>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BASE_URL + '/' + path);

				const result = await response.json();
				setData(result);
			} catch (err) {
				if (err instanceof Error) {
					setError(err);
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [path]);

	return { data, isLoading, error };
}

export default useAsyncGetItem;
