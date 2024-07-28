import { createContext } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setupStore } from '../../store/store';
import useLocalStorage_v2 from '../../utils/hooks/UseLocalStorage_v2';

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
	const [storedTheme, setStoredTheme] = useLocalStorage_v2('theme');

	const handleChangeTheme = () => {
		if (!storedTheme) {
			return setStoredTheme('theme', 'Light');
		}

		storedTheme === 'Light'
			? setStoredTheme('theme', 'Dark')
			: setStoredTheme('theme', 'Light');
	};

	return (
		<Provider store={store}>
			<ThemeContext.Provider
				value={{ value: storedTheme || 'Dark', change: handleChangeTheme }}
			>
				<div className={storedTheme || 'Dark'}>
					<Outlet />
				</div>
			</ThemeContext.Provider>
		</Provider>
	);
};

export default App;
