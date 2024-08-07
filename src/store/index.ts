import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from './services/starWarsApi';
import cardsSlice from './slices/cards.slice';
import categoriesSlice from './slices/categories.slice';
import { createWrapper } from 'next-redux-wrapper';

const rootReducers = combineReducers({
	category: categoriesSlice,
	cards: cardsSlice,
	[starWarsApi.reducerPath]: starWarsApi.reducer,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducers,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(starWarsApi.middleware),
	});
export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(setupStore);
