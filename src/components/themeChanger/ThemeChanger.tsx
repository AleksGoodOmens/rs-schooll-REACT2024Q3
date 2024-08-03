import { ThemeContext } from '../../pages/_app';
import styles from './styles.module.css';
import { useContext } from 'react';

const ThemeChanger = () => {
	const { value, change } = useContext(ThemeContext);

	return (
		<button
			className={styles['button']}
			onClick={change}
		>
			Change your {value} Side
		</button>
	);
};

export default ThemeChanger;
