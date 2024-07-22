import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setupStore } from '../../store/store';

type ThemeType = 'Dark' | 'Light' | '';

export const ThemeContext = createContext<{
	value: string;
	change: () => void;
}>({
	value: 'light',
	change: () => {},
});

const store = setupStore();

const App = () => {
	const [theme, setTheme] = useState<ThemeType>('Dark');

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
	};

	return (
		<Provider store={store}>
			<ThemeContext.Provider
				value={{ value: theme, change: handleChangeTheme }}
			>
				<div className={theme}>
					<Outlet />
				</div>
			</ThemeContext.Provider>
		</Provider>
	);
};

export default App;
