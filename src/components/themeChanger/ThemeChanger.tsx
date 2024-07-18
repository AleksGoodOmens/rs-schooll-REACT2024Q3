import { useOutletContext } from 'react-router-dom';

import styles from './styles.module.css';

const ThemeChanger = () => {
	const [theme, changeTheme] = useOutletContext<[string, () => void]>();

	return (
		<button
			className={styles['button']}
			onClick={changeTheme}
		>
			Now you are on a {theme}Side
		</button>
	);
};

export default ThemeChanger;
