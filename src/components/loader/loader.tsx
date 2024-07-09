import styles from './styles.module.css';
const Loader = () => {
	return (
		<div className={`${styles.box} fadeIn`}>
			<h2>Loading...</h2>
			<div className={styles.img}></div>
		</div>
	);
};

export default Loader;
