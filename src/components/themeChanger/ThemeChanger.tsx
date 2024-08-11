'use client';
import { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../context';

export const ThemeChanger = () => {
	const { theme, themeChanger } = useContext(ThemeContext);
	return (
		<button
			className={styles['button']}
			onClick={themeChanger}
		>
			Change your {theme} Side
		</button>
	);
};
