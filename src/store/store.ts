import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from './services/starWarsApi';
import categoriesReducer from './slices/slices';

const rootReducers = combineReducers({
	categoriesReducer,
	[starWarsApi.reducerPath]: starWarsApi.reducer,
});

export const AppStore = () =>
	configureStore({
		reducer: rootReducers,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(starWarsApi.middleware),
	});

export type TRootState = ReturnType<typeof rootReducers>;
export type TAppStore = ReturnType<typeof AppStore>;
export type TAppDispatch = ReturnType<typeof AppStore>['dispatch'];

export default AppStore;
