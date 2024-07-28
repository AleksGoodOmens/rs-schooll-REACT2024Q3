import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type categoriesState = {
	categories: string[];
	activeCategory: string;
};

const initialState: categoriesState = {
	categories: [],
	activeCategory: '',
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<categoriesState['categories']>) {
			state.categories = action.payload;
		},
		setActiveCategory(
			state,
			action: PayloadAction<categoriesState['activeCategory']>,
		) {
			state.activeCategory = action.payload;
		},
	},
});

export const { setCategories, setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
