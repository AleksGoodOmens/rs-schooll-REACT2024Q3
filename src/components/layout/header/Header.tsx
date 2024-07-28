import styles from './styles.module.css';
import ThemeChanger from '../../themeChanger/ThemeChanger';
import SocialLinks from '../../socialLinks/SocialLinks';
import Logo from '../../logo/Logo';

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
