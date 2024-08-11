import styles from './styles.module.css';

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<a
				href="http://www.webdeveloperaleks.com"
				target="_blank"
				rel="noreferrer"
			>
				Developed by AmensGood
			</a>
			<span>2024</span> <span>RS-School</span>
		</footer>
	);
};
