import styles from './styles.module.css';
const Loader = () => {
	return (
		<div
			role="alert"
			className={styles.box}
		>
			<p className="banner">Loading...</p>
			<div className={styles.img}>
				<img
					width="200px"
					height="200px"
					src="/demo.gif"
					alt="loading Image"
				/>
			</div>
		</div>
	);
};

export default Loader;
