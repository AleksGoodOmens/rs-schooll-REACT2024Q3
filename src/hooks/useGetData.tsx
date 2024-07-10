import { useCallback, useState } from 'react';

const BASE_URL = 'https://swapi.dev/api';

interface IFetchArgs {
	path?: string;
	search?: string;
}

interface IReturnData<T> {
	isLoading: boolean;
	error: string | undefined;
	data: T[];
	fetchData: ({ path, search }: IFetchArgs) => void;
}

function useGetData<T>(): IReturnData<T> {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string | undefined>(undefined);

	const fetchData = useCallback(async ({ path, search }: IFetchArgs) => {
		try {
			setIsLoading(true);
			setError(undefined);

			const newUrl = new URL(BASE_URL);
			if (path) {
				newUrl.pathname = 'api/' + path;
			}
			if (search) {
				newUrl.searchParams.set('search', search);
			}

			console.log(newUrl.toString());

			const response = await fetch(newUrl);
			if (response.ok) {
				const res: { results?: T[] } = await response.json();

				setIsLoading(false);
				let newData;
				if (res.results) {
					newData = res.results;
					setData(newData);
					return;
				}

				const arrayFromObject = Object.keys(res);

				setData(arrayFromObject);
			}
		} catch (error: unknown) {
			console.log('fetch error', error);
			setError('something go wrong');
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, data, error, fetchData };
}

export default useGetData;
