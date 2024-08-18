import { Logo } from '../logo/Logo';
import { Nav } from '../Nav/Nav';
import { SocialLinks } from '../socialLinks/SocialLinks';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header
			className={styles['header']}
			aria-label="AmensGood navigation header"
		>
			<Logo />
			<Nav />
			<SocialLinks />
		</header>
	);
};
