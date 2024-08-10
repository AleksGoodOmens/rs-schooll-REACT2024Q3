import Logo from './logo/Logo';
import SocialLinks from './socialLinks/SocialLinks';
import styles from './styles.module.css';
import ThemeChanger from './themeChanger/ThemeChanger';

const Header = () => {
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

export default Header;
