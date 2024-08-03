import { useState } from 'react';

import styles from './styles.module.css';
import Link from 'next/link';

const Logo = () => {
	const [logoPath] = useState('http://www.webdeveloperaleks.com');

	return (
		<nav className={styles['logo']}>
			<Link
				className={styles['title']}
				href="/"
			>
				starWars - wiki by:
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

export default Logo;
