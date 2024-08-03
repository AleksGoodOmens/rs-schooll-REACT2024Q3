import Image from 'next/image';
import styles from './styles.module.css';
const Loader = () => {
	return (
		<div
			role="alert"
			className={styles.box}
		>
			<p className="banner">Loading...</p>
			<div className={styles.img}>
				<Image
					width={200}
					height={200}
					src="/demo.gif"
					alt="loading Image"
				/>
			</div>
		</div>
	);
};

export default Loader;
