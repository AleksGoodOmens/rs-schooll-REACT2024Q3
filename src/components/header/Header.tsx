import { Logo } from '../logo/Logo';
import { SocialLinks } from '../socialLinks/SocialLinks';
import { ThemeChanger } from '../themeChanger/ThemeChanger';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header
			className={styles['header']}
			aria-label="AmensGood navigation header"
		>
			<Logo />
			<ThemeChanger />
			<SocialLinks />
		</header>
	);
};
