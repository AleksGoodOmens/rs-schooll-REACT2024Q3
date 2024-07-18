import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../app/App';

const ThemeChanger = () => {
	const { value, change } = useContext(ThemeContext);

	return (
		<button
			className={styles['button']}
			onClick={change}
		>
			Now you are on a {value}Side
		</button>
	);
};

export default ThemeChanger;
