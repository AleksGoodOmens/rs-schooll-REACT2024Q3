import styles from './styles.module.css';

const ErrorFallBack = () => {
	const handleReload = () => {
		window.location.reload();
	};

	return (
		<div className={styles.box}>
			<h1>If you see that message - you a great person!</h1>
			<h2>But you know that you click wrong button and now you got an Error</h2>
			<div className={styles.img}>
				<img
					width={100}
					height={200}
					src="/error.png"
					alt="error"
				/>
			</div>
			<button onClick={handleReload}>Reload APP</button>
		</div>
	);
};

export default ErrorFallBack;
