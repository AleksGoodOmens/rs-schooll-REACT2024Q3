import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
	activeCategory: string;
	activeItem: number | undefined;
	searchValue: string;
	page: number;
}

const initialState: IInitialState = {
	activeCategory: '',
	activeItem: undefined,
	searchValue: '',
	page: 1,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<string>) => {
			state.activeCategory = action.payload;
		},
		setActiveItem: (state, action: PayloadAction<number | undefined>) => {
			state.activeItem = action.payload;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		resetPage: (state) => {
			state.page = 1;
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = state.page + action.payload;
		},
	},
});

export const {
	setActiveCategory,
	resetPage,
	changePage,
	setSearchValue,
	setActiveItem,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
