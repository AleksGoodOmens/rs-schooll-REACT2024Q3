import { useState } from 'react';
import styles from './styles.module.css';

const Header = () => {
	const [logoPath] = useState('http://www.webdeveloperaleks.com');
	const [socialLinks] = useState([
		{
			path: 'https://discordapp.com/users/300176264033992705',
			title: 'Discord',
		},
		{
			path: 'https://discordapp.com/users/300176264033992705',
			title: 'LinkedIn',
		},
		{
			path: 'https://discordapp.com/users/300176264033992705',
			title: 'Telegram',
		},
	]);

	return (
		<header className={styles['header']}>
			<div className={styles['logo']}>
				<a
					href={logoPath}
					target="_blank"
					rel="noreferrer"
				>
					AmensGood
				</a>
			</div>
			<ul className={styles['grid']}>
				{socialLinks.map((link) => (
					<li key={link.title}>
						<a
							href={link.path}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
