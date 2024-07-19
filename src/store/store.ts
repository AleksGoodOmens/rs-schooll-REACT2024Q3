import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from './services/starWarsApi';
import cardsSlice from './slices/cards.slice';
import categoriesSlice from './slices/categories.slice';

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
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
