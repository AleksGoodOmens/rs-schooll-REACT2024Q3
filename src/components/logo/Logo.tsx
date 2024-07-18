import { useState } from 'react';

import styles from './styles.module.css';

const Logo = () => {
	const [logoPath] = useState('http://www.webdeveloperaleks.com');

	return (
		<nav className={styles['logo']}>
			<a
				href={logoPath}
				target="_blank"
				rel="noreferrer"
				aria-label="link to AmensGood personal website"
			>
				AmensGood
			</a>
		</nav>
	);
};

export default Logo;
