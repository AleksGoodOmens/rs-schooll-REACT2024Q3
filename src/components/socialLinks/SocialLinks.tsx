import { useState } from 'react';

import styles from './styles.module.css';

const SocialLinks = () => {
	const [socialLinks] = useState([
		{
			path: 'https://discordapp.com/users/300176264033992705',
			title: 'Discord',
		},
		{
			path: 'https://www.linkedin.com/in/alexgdeveloper/',
			title: 'LinkedIn',
		},
		{
			path: 'https://t.me/AleksGWeb',
			title: 'Telegram',
		},
	]);
	return (
		<nav aria-label="Social media links">
			<ul className={styles['grid']}>
				{socialLinks.map((link) => (
					<li key={link.title}>
						<a
							href={link.path}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Follow us on ${link.title}`}
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SocialLinks;
