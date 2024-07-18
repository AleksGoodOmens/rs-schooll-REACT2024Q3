import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDetailedCard } from '../../utils/interfaces/interfaces';

export const BASE_URL = 'https://swapi.dev/api';

export interface CategoriesResponse {
	[key: string]: string;
}

export const starWarsApi = createApi({
	reducerPath: 'starWarsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getCategories: builder.query<string[], string>({
			query: () => ({
				url: '',
			}),
			transformResponse: (response: CategoriesResponse) => {
				return Object.keys(response);
			},
		}),
		getCategory: builder.query<
			{
				count: number;
				next: boolean;
				previous: boolean;
				results: [];
			},
			{ category: string; page: number; searchValue: string }
		>({
			query: ({ category, page, searchValue }) => {
				if (searchValue) return { url: `/${category}/?search=${searchValue}` };
				if (category) return { url: `/${category}/?page=${page}` };
				return { url: 'people/?page=1' };
			},
		}),
		getItem: builder.query<
			IDetailedCard,
			{ category: string; id: string | undefined }
		>({
			query: ({ category, id }) => {
				return { url: `${category}/${id}` };
			},
		}),
	}),
});

export default starWarsApi;
