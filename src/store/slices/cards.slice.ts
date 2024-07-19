import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategoryAndIdFromUrl } from '../../utils/getCategoryAndIdFromUrl';
export type Card = {
	url: string;
	name?: string;
	title?: string;
	favorite?: boolean;
	id: string;
	category: string;
};

type categoriesState = {
	cards: Card[];
	activeCard: Card | null;
	totalPages: number;
	totalCards: number;
	page: number;
	next: boolean;
	previous: boolean;
	searchValue: string;
};

const initialState: categoriesState = {
	cards: [],
	activeCard: null,
	totalPages: 0,
	totalCards: 0,
	page: 1,
	next: false,
	previous: false,
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
		setCards(state, action: PayloadAction<Card[]>) {
			const transformCard = action.payload.map((card) => {
				const categoryAndId = getCategoryAndIdFromUrl(card.url);

				return { ...card, ...categoryAndId };
			});

			state.cards = transformCard;
		},
		setNext(state, action: PayloadAction<boolean>) {
			state.next = action.payload;
		},
		setPrevious(state, action: PayloadAction<boolean>) {
			state.previous = action.payload;
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
		setActiveCard(state, action: PayloadAction<Card | null>) {
			state.activeCard = action.payload;
		},
	},
});

export const {
	changePage,
	resetPage,
	setCards,
	setTotalPages,
	setNext,
	setPrevious,
	setActiveCard,
	setSearchValue,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
