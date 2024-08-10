import { ReactNode, useState } from 'react';
import ThemeContext, { IThemeContext } from './ThemeContext';
import cn from 'classnames';

const ThemeProvider = ({
	theme,
	children,
}: IThemeContext & { children: ReactNode }) => {
	const [themeName, setThemeName] = useState(theme);

	const themeChanger = () =>
		themeName === 'Dark' ? setThemeName('Light') : setThemeName('Dark');
	return (
		<ThemeContext.Provider value={{ theme: themeName, themeChanger }}>
			<div className={cn('wrapper', themeName)}>{children}</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
