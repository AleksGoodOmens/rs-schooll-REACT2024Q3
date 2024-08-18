import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Logo = () => {
	const logoPath = 'http://www.webdeveloperaleks.com';

	return (
		<nav className={styles['logo']}>
			<Link
				className={styles['title']}
				to="/"
			>
				Forms by:
			</Link>
			<a
				href={logoPath}
				target="_blank"
				rel="noreferrer"
				aria-label="link to AmensGood personal website"
			>
				<span>AmensGood</span>
			</a>
		</nav>
	);
};
