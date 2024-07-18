import styles from './styles.module.css';
const Loader = () => {
	return (
		<div
			role="alert"
			className={styles.box}
		>
			<p>Loading...</p>
			<div className={styles.img}>
				<img
					width="260px"
					height="260px"
					src="/demo.gif"
					alt="loading Image"
				/>
			</div>
		</div>
	);
};

export default Loader;
