import { useCallback, useState } from 'react';
import { BASE_URL } from './constants';

interface IFetchArgs {
	path?: string;
	search?: string;
	page?: number;
}

interface IReturnData<T> {
	isLoading: boolean;
	error: string | undefined;
	data: Result<T> | undefined;
	fetchData: ({ path, search, page }: IFetchArgs) => void;
}

interface Result<K> {
	count: number;
	next: string | null;
	previous: string | null;
	results: K[];
}

function useSearchData<T>(): IReturnData<T> {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<Result<T> | undefined>(undefined);
	const [error, setError] = useState<string | undefined>(undefined);

	const fetchData = useCallback(async ({ path, search, page }: IFetchArgs) => {
		try {
			setIsLoading(true);
			setError(undefined);

			const newUrl = new URL(BASE_URL);
			if (path) {
				newUrl.pathname = 'api/' + path;
			}
			if (search) {
				newUrl.searchParams.set('search', search);
			} else {
				if (page) {
					newUrl.searchParams.set('page', `${page}`);
				}
			}

			const response = await fetch(newUrl);
			if (response.ok) {
				const res: Result<T> = await response.json();

				setIsLoading(false);
				if (res) {
					setData(res);
					return;
				}
			} else {
				throw new Error('Network response was not ok.');
			}
		} catch (error: unknown) {
			console.log('fetch error', error);
			setError('something went wrong');
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, data, error, fetchData };
}

export default useSearchData;
