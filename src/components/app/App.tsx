import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppStore from '../../store/store';
type ThemeType = 'Dark' | 'Light' | '';

const AppTheme = createContext<ThemeType>('');

const App = () => {
	const [theme, setTheme] = useState<ThemeType>('Light');

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
	};

	return (
		<AppTheme.Provider value={theme}>
			<Provider store={AppStore()}>
				<div className={theme}>
					<Outlet context={[theme, handleChangeTheme]} />
				</div>
			</Provider>
		</AppTheme.Provider>
	);
};

export default App;
