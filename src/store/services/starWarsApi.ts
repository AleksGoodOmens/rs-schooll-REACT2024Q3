import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import {
	CardsResponse,
	CategoriesResponse,
	ItemResponse,
	TDetailedCard,
} from './interface';

export const BASE_URL = 'https://swapi.dev/api';

export const starWarsApi = createApi({
	reducerPath: 'starWarsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return (action.payload as any)[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getCategories: builder.query<string[], string>({
			query: () => ({
				url: '',
			}),
			transformResponse: (response: CategoriesResponse) => {
				return Object.keys(response);
			},
		}),

		getCards: builder.query<
			CardsResponse,
			{ category: string; page: string; searchValue: string }
		>({
			query: ({ category = 'people', page = '1', searchValue = '' }) => {
				return { url: `/${category}/?search=${searchValue}&page=${page}` };
			},
		}),

		getItem: builder.query<
			TDetailedCard,
			{ category: string | undefined; id: string | undefined }
		>({
			query: ({ category, id }) => {
				return { url: `${category}/${id}` };
			},
			transformResponse: (response: ItemResponse) => {
				const cleanCard = Object.fromEntries(
					Object.entries(response).filter(([, value]) => !Array.isArray(value)),
				) as unknown as TDetailedCard;
				return cleanCard as TDetailedCard;
			},
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCardsQuery,
	useGetItemQuery,
	util: { getRunningQueriesThunk },
} = starWarsApi;

export const { getCards, getCategories, getItem } = starWarsApi.endpoints;
