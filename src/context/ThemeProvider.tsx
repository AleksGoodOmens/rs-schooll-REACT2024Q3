import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { IThemeContext, ThemeContext } from './ThemeContext';

export const ThemeProvider = ({
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
