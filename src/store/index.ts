import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cards.slice';

const rootReducers = combineReducers({
	cards: cardsSlice,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducers,
	});
export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export * from './hooks/hooks';
export * from './slices/cards.slice';
export * from './slices/selectors/index';
