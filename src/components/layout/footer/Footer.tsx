import styles from './styles.module.css';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<a
				href="http://www.webdeveloperaleks.com"
				target="_blank"
				rel="noreferrer"
			>
				Developed by GoodOmen
			</a>
			<span>2024</span> <span>RS-School</span>
		</footer>
	);
};

export default Footer;
