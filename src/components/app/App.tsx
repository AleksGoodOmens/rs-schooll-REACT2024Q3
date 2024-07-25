import { createContext } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setupStore } from '../../store/store';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

export type ThemeType = 'Dark' | 'Light' | string;

export const ThemeContext = createContext<{
	value: string;
	change: () => void;
}>({
	value: 'light',
	change: () => {},
});

const store = setupStore();

const App = () => {
	const [storage, setStorageTheme] = useLocalStorage();

	const handleChangeTheme = () => {
		setStorageTheme({
			...storage,
			theme: storage.theme === 'Dark' ? 'Light' : 'Dark',
		});
	};

	return (
		<Provider store={store}>
			<ThemeContext.Provider
				value={{ value: storage.theme, change: handleChangeTheme }}
			>
				<div className={storage.theme}>
					<Outlet />
				</div>
			</ThemeContext.Provider>
		</Provider>
	);
};

export default App;
