import ThemeChanger from '@/components/themeChanger/ThemeChanger';
import styles from './styles.module.css';
import Logo from '@/components/logo/Logo';
import SocialLinks from '@/components/socialLinks/SocialLinks';

const Header = () => {
	return (
		<header
			className={styles['header']}
			aria-label='AmensGood navigation header'
		>
			<Logo />
			<ThemeChanger />
			<SocialLinks />
		</header>
	);
};

export default Header;
