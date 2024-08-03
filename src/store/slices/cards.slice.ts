import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategoryAndIdFromUrl } from '../../utils/getCategoryAndIdFromUrl';
import { CardsResponse } from '../services/starWarsApi';
import { CardState, ICard } from './interfaces';

const initialState: CardState = {
	cards: [],
	favoriteCards: [],
	totalPages: 0,
	totalCards: 0,
	page: 1,
	searchValue: '',
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setTotalPages(state, action: PayloadAction<number>) {
			state.totalCards = action.payload;
			state.totalPages = Math.ceil(action.payload / 10);
		},
		setCards(state, action: PayloadAction<CardsResponse>) {
			const { results, count } = action.payload;

			const transformCard = results.map((card) => {
				const categoryAndId = getCategoryAndIdFromUrl(card.url);

				return { ...card, ...categoryAndId, favorite: false };
			});
			state.cards = transformCard;
			state.totalCards = count;
			state.totalPages = Math.ceil(count / 10);
		},

		changePage(state, action: PayloadAction<number>) {
			state.page = state.page + action.payload;
		},
		resetPage(state) {
			state.page = 1;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload.trim();
		},

		addToFavorite(state, action: PayloadAction<ICard>) {
			state.favoriteCards = [...state.favoriteCards, action.payload];
		},
		delFromFavorite(state, action: PayloadAction<string>) {
			state.favoriteCards = state.favoriteCards.filter(
				(item) => item.url !== action.payload,
			);
		},
		clearFavoriteCards(state) {
			state.favoriteCards = [];
		},
	},
});

export const {
	changePage,
	addToFavorite,
	delFromFavorite,
	resetPage,
	setCards,
	setTotalPages,
	setSearchValue,
	clearFavoriteCards,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
