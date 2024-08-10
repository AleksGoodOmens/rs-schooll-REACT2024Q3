'use client';
import { useContext } from 'react';
import styles from './styles.module.css';
import ThemeContext from '../../../../context/ThemeContext';

const ThemeChanger = () => {
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

export default ThemeChanger;

// Todo  => const { value, change } = useContext(ThemeContext);
