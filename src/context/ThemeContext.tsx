import { createContext } from 'react';

export interface IThemeContext {
	theme: 'Dark' | 'Light' | 'string';
	themeChanger?: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
	theme: 'Dark',
	themeChanger: () => {},
});
