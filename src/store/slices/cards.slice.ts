import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardState, ICard } from '../../types';

const initialState: CardState = {
	favoriteCards: [],
};

const cardsSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
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

export const { addToFavorite, delFromFavorite, clearFavoriteCards } =
	cardsSlice.actions;

export default cardsSlice.reducer;
