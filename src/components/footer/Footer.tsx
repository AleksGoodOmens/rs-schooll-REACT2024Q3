import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<Link
				to="http://www.webdeveloperaleks.com"
				target="_blank"
				rel="noreferrer"
			>
				Developed by AmensGood
			</Link>
			<span>2024</span> <span>RS-School</span>
		</footer>
	);
};
