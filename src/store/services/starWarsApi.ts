import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Card } from '../slices/cards.slice';

export const BASE_URL = 'https://swapi.dev/api';

export interface CategoriesResponse {
	[key: string]: string;
}

export interface CardsResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Card[];
}

export interface TDetailedCard {
	title?: string;
	name?: string;
	height?: string;
	mass?: string;
	hair_color?: string;
	skin_color?: string;
	eye_color?: string;
	birth_year?: string;
	gender?: string;
	rotation_period?: string;
	orbital_period?: string;
	diameter?: string;
	climate?: string;
	gravity?: string;
	terrain?: string;
	surface_water?: string;
	population?: string;
	classification?: string;
	designation?: string;
	average_height?: string;
	skin_colors?: string;
	hair_colors?: string;
	eye_colors?: string;
	average_lifespan?: string;
	language?: string;
	vehicle_class?: string;
	model?: string;
	manufacturer?: string;
	cost_in_credits?: string;
	length?: string;
	crew?: string;
	passengers?: string;
	cargo_capacity?: string;
	consumables?: string;
	starship_class?: string;
	created?: string;
	edited?: string;
	url: string;
}

interface ItemResponse {
	[key: string]: string | number | [];
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
		getCards: builder.query<
			CardsResponse,
			{ category: string; page: number; searchValue: string }
		>({
			query: ({ category, page, searchValue }) => {
				if (searchValue) return { url: `/${category}/?search=${searchValue}` };
				if (category) return { url: `/${category}/?page=${page}` };
				return { url: 'people/?page=1' };
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

export default starWarsApi;
