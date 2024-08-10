import { createContext } from 'react';

export interface IThemeContext {
	theme: 'Dark' | 'Light';
	themeChanger?: () => void;
}

const ThemeContext = createContext<IThemeContext>({
	theme: 'Dark',
	themeChanger: () => {},
});

export default ThemeContext;
